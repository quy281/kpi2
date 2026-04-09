import { useState, useEffect, useCallback, useMemo } from 'react';
import { PREP_WEEK, CHECKLIST, CATEGORIES, WEEKLY_TARGETS, KPI_LABELS, formatVND } from './data';

// === localStorage helpers ===
const load = (key, fallback) => {
  try { const d = localStorage.getItem(key); return d ? JSON.parse(d) : fallback; }
  catch { return fallback; }
};
const save = (key, val) => localStorage.setItem(key, JSON.stringify(val));

// === MAIN APP ===
export default function App() {
  const [tab, setTab] = useState('checklist');
  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <div className="nav-brand">MODI Tracker <span>v4.0</span></div>
          <div className="nav-tabs">
            {[['checklist','✅ Checklist'],['daily','📅 Timeline'],['report','📊 Báo cáo'],['dashboard','📈 Dashboard']].map(([k,l])=>(
              <button key={k} className={`nav-tab ${tab===k?'active':''}`} onClick={()=>setTab(k)}>{l}</button>
            ))}
          </div>
        </div>
      </nav>
      <div className="container">
        {tab === 'checklist' && <ChecklistView />}
        {tab === 'daily' && <DailyView />}
        {tab === 'report' && <ReportView />}
        {tab === 'dashboard' && <DashboardView />}
      </div>
    </>
  );
}

// ========== CHECKLIST VIEW ==========
function ChecklistView() {
  const [checked, setChecked] = useState(() => load('modi_checklist', {}));
  const [expandedSections, setExpandedSections] = useState({});
  const [filterWho, setFilterWho] = useState('all');
  const [filterDeadline, setFilterDeadline] = useState('all');
  const [expandedGuide, setExpandedGuide] = useState({});

  useEffect(() => { save('modi_checklist', checked); }, [checked]);

  const toggle = useCallback((id) => {
    setChecked(prev => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const toggleSection = useCallback((key) => {
    setExpandedSections(prev => ({ ...prev, [key]: !prev[key] }));
  }, []);

  const toggleGuide = useCallback((id) => {
    setExpandedGuide(prev => ({ ...prev, [id]: !prev[id] }));
  }, []);

  // Stats
  const stats = useMemo(() => {
    let total = 0, done = 0;
    const byCat = {};
    CHECKLIST.forEach(cat => {
      let catTotal = 0, catDone = 0;
      cat.sections.forEach(sec => {
        sec.items.forEach(item => {
          total++;
          catTotal++;
          if (checked[item.id]) { done++; catDone++; }
        });
      });
      byCat[cat.id] = { total: catTotal, done: catDone };
    });
    return { total, done, byCat };
  }, [checked]);

  const pct = stats.total ? Math.round(stats.done / stats.total * 100) : 0;

  // Unique "who" values
  const allWhos = useMemo(() => {
    const set = new Set();
    CHECKLIST.forEach(c => c.sections.forEach(s => s.items.forEach(i => set.add(i.who))));
    return ['all', ...Array.from(set)];
  }, []);

  const deadlineOptions = ['all', 'T6 10/04', 'T7 11/04', 'CN 12/04', 'CN tối', 'W1'];

  return (
    <>
      {/* Header */}
      <div className="day-header">
        <div className="day-title">Checklist <span>Chuẩn Bị</span></div>
        <div className="checklist-stats-mini">
          <span className="stat-pill" style={{background:'var(--green-dim)',color:'var(--green)'}}>{stats.done} done</span>
          <span className="stat-pill" style={{background:'var(--yellow-dim)',color:'var(--yellow)'}}>{stats.total - stats.done} còn</span>
        </div>
      </div>

      {/* Overall progress */}
      <div className="progress-label"><span>Tiến độ tổng</span><span>{pct}% ({stats.done}/{stats.total})</span></div>
      <div className="progress-bar"><div className="progress-fill" style={{width:`${pct}%`}} /></div>

      {/* Category progress cards */}
      <div className="cl-cat-grid">
        {CHECKLIST.map(cat => {
          const s = stats.byCat[cat.id];
          const catPct = s.total ? Math.round(s.done / s.total * 100) : 0;
          return (
            <div key={cat.id} className="cl-cat-card">
              <div className="cl-cat-title">{cat.title}</div>
              <div className="cl-cat-count">{s.done}/{s.total}</div>
              <div className="stat-bar" style={{marginTop:6}}>
                <div className="stat-bar-fill" style={{
                  width:`${catPct}%`,
                  background: catPct === 100 ? 'var(--green)' : catPct > 50 ? 'var(--gold)' : 'var(--red)'
                }} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Filters */}
      <div className="cl-filters">
        <div className="cl-filter-group">
          <label>Ai làm:</label>
          <select value={filterWho} onChange={e => setFilterWho(e.target.value)}>
            {allWhos.map(w => <option key={w} value={w}>{w === 'all' ? 'Tất cả' : w}</option>)}
          </select>
        </div>
        <div className="cl-filter-group">
          <label>Deadline:</label>
          <select value={filterDeadline} onChange={e => setFilterDeadline(e.target.value)}>
            {deadlineOptions.map(d => <option key={d} value={d}>{d === 'all' ? 'Tất cả' : d}</option>)}
          </select>
        </div>
      </div>

      {/* Sections */}
      {CHECKLIST.map(cat => (
        <div key={cat.id} className="cl-category">
          <div className="cl-cat-header" onClick={() => toggleSection(cat.id)}>
            <span>{cat.title}</span>
            <span className="cl-expand">{expandedSections[cat.id] === false ? '▶' : '▼'}</span>
          </div>
          {expandedSections[cat.id] !== false && cat.sections.map((sec, si) => {
            const secKey = `${cat.id}_${si}`;
            const filteredItems = sec.items.filter(item => {
              if (filterWho !== 'all' && item.who !== filterWho) return false;
              if (filterDeadline !== 'all' && item.deadline !== filterDeadline) return false;
              return true;
            });
            if (!filteredItems.length) return null;
            const secDone = filteredItems.filter(i => checked[i.id]).length;
            return (
              <div key={secKey} className="cl-section">
                <div className="cl-sec-header" onClick={() => toggleSection(secKey)}>
                  <span className="cl-sec-title">{sec.title}</span>
                  <span className="cl-sec-badge">{secDone}/{filteredItems.length}</span>
                  <span className="cl-expand">{expandedSections[secKey] === false ? '▶' : '▼'}</span>
                </div>
                {expandedSections[secKey] !== false && filteredItems.map(item => {
                  const done = !!checked[item.id];
                  return (
                    <div key={item.id} className={`cl-item ${done ? 'done' : ''}`}>
                      <div className="cl-item-main" onClick={() => toggle(item.id)}>
                        <div className={`task-check ${done?'checked':''}`}>{done ? '✓' : ''}</div>
                        <span className="cl-item-id">{item.id}</span>
                        <span className="cl-item-task">{item.task}</span>
                      </div>
                      <div className="cl-item-meta">
                        <span className="cl-item-who">{item.who}</span>
                        <span className={`cl-item-deadline ${item.deadline === 'T6 10/04' ? 'urgent' : ''}`}>{item.deadline}</span>
                        <button className="cl-guide-btn" onClick={(e) => { e.stopPropagation(); toggleGuide(item.id); }}>
                          {expandedGuide[item.id] ? '▲ Ẩn' : '💡 Hướng dẫn'}
                        </button>
                      </div>
                      {expandedGuide[item.id] && (
                        <div className="cl-guide">{item.guide}</div>
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      ))}

      {/* Review Section */}
      <div className="cl-review">
        <div className="report-title">🔄 Review (CN 12/04 tối)</div>
        <ReviewChecklist checked={checked} />
      </div>
    </>
  );
}

function ReviewChecklist({ checked }) {
  const questions = [
    { q: 'Tất cả 4 LP content đã xong?', ids: ['B1.1','B1.2','B1.3','B1.4','B1.5','B1.9'] },
    { q: '15 SP MODI Core có đủ ảnh + data?', ids: ['A1.1','A1.2','A1.4','C2.8'] },
    { q: '3 ad creatives đã design xong?', ids: ['A3.1'] },
    { q: 'Meta Pixel + GA4 events OK?', ids: ['D1.2','D1.3','D1.4'] },
    { q: 'Form báo giá trên LP submit OK?', ids: ['C2.6'] },
    { q: 'Zalo OA connected + widget OK?', ids: ['D1.6','C2.7'] },
    { q: 'FB campaigns scheduled T2 07:00?', ids: ['D2.9'] },
    { q: 'Tracking sheet có và shared?', ids: ['D3.3'] },
    { q: 'Blog #1 published + indexed?', ids: ['C2.9','B2.1'] },
  ];
  return (
    <div className="cl-review-list">
      {questions.map((item, i) => {
        const allDone = item.ids.every(id => checked[id]);
        return (
          <div key={i} className="cl-review-item">
            <span style={{fontSize:18}}>{allDone ? '✅' : '⬜'}</span>
            <span style={{flex:1}}>{item.q}</span>
            <span className="cl-review-count">{item.ids.filter(id=>checked[id]).length}/{item.ids.length}</span>
          </div>
        );
      })}
    </div>
  );
}

// ========== DAILY VIEW ==========
function DailyView() {
  const days = PREP_WEEK.days;
  const [dayIdx, setDayIdx] = useState(0);
  const [completed, setCompleted] = useState(() => load('modi_completed', {}));

  useEffect(() => { save('modi_completed', completed); }, [completed]);

  const day = days[dayIdx];
  const toggle = useCallback((person, i) => {
    const key = `${day.date}_${person}_${i}`;
    setCompleted(prev => ({ ...prev, [key]: !prev[key] }));
  }, [day.date]);

  const allTasks = [...(day.tasks.ceo||[]), ...(day.tasks.troly||[]), ...(day.tasks.sv||[])];
  const doneCount = allTasks.reduce((n, _, i) => {
    const ceoLen = (day.tasks.ceo||[]).length;
    const trolyLen = (day.tasks.troly||[]).length;
    if (i < ceoLen) return n + (completed[`${day.date}_ceo_${i}`] ? 1 : 0);
    if (i < ceoLen + trolyLen) return n + (completed[`${day.date}_troly_${i - ceoLen}`] ? 1 : 0);
    return n + (completed[`${day.date}_sv_${i - ceoLen - trolyLen}`] ? 1 : 0);
  }, 0);
  const pct = allTasks.length ? Math.round(doneCount / allTasks.length * 100) : 0;

  return (
    <>
      <div className="day-header">
        <div className="day-title">{day.dow} — <span>{day.date.split('-').reverse().join('/')}</span></div>
        <div className="day-nav">
          {days.map((d, i) => (
            <button key={i} className={i===dayIdx?'active':''} onClick={()=>setDayIdx(i)}>
              {d.dow.replace('Thứ ','T').replace('Chủ Nhật','CN')}
            </button>
          ))}
        </div>
      </div>

      <div className="progress-label"><span>{PREP_WEEK.label}</span><span>{pct}% ({doneCount}/{allTasks.length})</span></div>
      <div className="progress-bar"><div className="progress-fill" style={{width:`${pct}%`}} /></div>

      {[['ceo','🔴','CEO'],['troly','🟢','Trợ Lý'],['sv','🔵','SV Part-time']].map(([key, icon, name]) => {
        const tasks = day.tasks[key] || [];
        if (!tasks.length) return null;
        const donePerson = tasks.filter((_,i) => completed[`${day.date}_${key}_${i}`]).length;
        return (
          <div key={key} className="person-section">
            <div className="person-header">
              <span className="person-icon">{icon}</span>
              <span className="person-name">{name}</span>
              <span className="person-badge">{donePerson}/{tasks.length} done</span>
            </div>
            {tasks.map((t, i) => {
              const done = !!completed[`${day.date}_${key}_${i}`];
              const cat = CATEGORIES[t.cat] || { label: t.cat, color: '#64748b' };
              return (
                <div key={i} className={`task-row ${done?'done':''}`}
                  style={{ borderLeftColor: cat.color }}
                  onClick={() => toggle(key, i)}>
                  <div className={`task-check ${done?'checked':''}`}>{done ? '✓' : ''}</div>
                  <span className="task-time">{t.time}</span>
                  <span className="task-text">{t.task}</span>
                  <span className="task-cat" style={{ background: cat.color+'22', color: cat.color }}>{cat.label}</span>
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
}

// ========== WEEKLY REPORT VIEW ==========
function ReportView() {
  const [week, setWeek] = useState(1);
  const [reports, setReports] = useState(() => load('modi_reports', {}));

  const target = WEEKLY_TARGETS.find(t => t.week === week) || WEEKLY_TARGETS[0];
  const rKey = `w${week}`;
  const report = reports[rKey] || {};

  const updateField = (field, val) => {
    const updated = { ...reports, [rKey]: { ...report, [field]: val } };
    setReports(updated);
    save('modi_reports', updated);
  };

  const metrics = [
    { group: '📊 Ads Performance', keys: ['ads_spend', 'leads'] },
    { group: '💼 Sales & Revenue', keys: ['deals_home', 'deals_set', 'don_core', 'dt'] },
    { group: '✍️ Content & SEO', keys: ['sp_live', 'lp_live', 'blogs', 'social_posts', 'videos', 'organic_traffic'] },
    { group: '📣 Outreach', keys: ['groups_joined', 'comments', 'dms_sent'] },
    { group: '🔒 Safety', keys: ['fadi_buffer'] },
  ];

  const getStatus = (key, actual) => {
    if (!actual && actual !== 0) return '';
    const t = target[key];
    if (key === 'ads_spend') return actual <= t ? '✅' : '⚠️';
    if (key === 'fadi_buffer') return actual >= t ? '✅' : '⛔';
    const ratio = actual / t;
    if (ratio >= 0.9) return '✅';
    if (ratio >= 0.6) return '⚠️';
    return '⛔';
  };

  const verdicts = ['ON TRACK', 'ADJUST', 'THROTTLE', 'PIVOT'];

  return (
    <>
      <div className="day-header">
        <div className="day-title">Báo cáo <span>Tuần {week}</span></div>
        <div className="week-selector">
          {[1,2,3,4].map(w => (
            <button key={w} className={`week-btn ${week===w?'active':''}`} onClick={()=>setWeek(w)}>
              W{w}
            </button>
          ))}
        </div>
      </div>

      {metrics.map(({ group, keys }) => (
        <div key={group} className="report-section">
          <div className="report-title">{group}</div>
          <div className="metric-grid">
            {keys.map(key => {
              const actual = report[key] ?? '';
              const t = target[key];
              return (
                <div key={key} className="metric-row">
                  <span className="metric-label">{KPI_LABELS[key]}</span>
                  <span className="metric-target">Target: {['ads_spend','dt','fadi_buffer'].includes(key) ? formatVND(t) : t}</span>
                  <input
                    className="metric-input"
                    type="number"
                    placeholder="Actual"
                    value={actual}
                    onChange={e => updateField(key, e.target.value ? Number(e.target.value) : '')}
                  />
                  <div className="metric-status">{getStatus(key, actual)}</div>
                </div>
              );
            })}
          </div>
        </div>
      ))}

      <div className="report-section">
        <div className="report-title">⚖️ Verdict</div>
        <div className="verdict-row">
          {verdicts.map(v => (
            <button key={v}
              className={`verdict-btn ${report.verdict===v?'selected':''}`}
              onClick={() => updateField('verdict', v)}>
              {v}
            </button>
          ))}
        </div>
      </div>

      <div className="report-section">
        <div className="report-title">📝 CEO Notes</div>
        <textarea
          className="notes-area"
          placeholder="Ghi nhận xét, điều chỉnh, kế hoạch tuần tới..."
          value={report.notes || ''}
          onChange={e => updateField('notes', e.target.value)}
        />
      </div>

      <div className="report-section">
        <div className="report-title">🔧 Điều chỉnh tuần tới</div>
        <textarea
          className="notes-area"
          placeholder={"1. Kill/scale campaigns nào?\n2. Thay đổi budget allocation?\n3. Thêm/bớt DA?"}
          value={report.adjustments || ''}
          onChange={e => updateField('adjustments', e.target.value)}
        />
      </div>

      <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
        <button className="btn btn-gold" onClick={() => {
          const blob = new Blob([JSON.stringify(reports, null, 2)], { type: 'application/json' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a'); a.href = url; a.download = `modi_report_w${week}.json`;
          a.click(); URL.revokeObjectURL(url);
        }}>💾 Export JSON</button>
        <button className="btn btn-outline" onClick={() => {
          const text = Object.entries(report).map(([k,v]) => `${KPI_LABELS[k]||k}: ${v}`).join('\n');
          navigator.clipboard.writeText(text).then(() => alert('Đã copy vào clipboard!'));
        }}>📋 Copy Text</button>
      </div>
    </>
  );
}

// ========== DASHBOARD VIEW ==========
function DashboardView() {
  const [reports] = useState(() => load('modi_reports', {}));
  const [completed] = useState(() => load('modi_completed', {}));
  const [clChecked] = useState(() => load('modi_checklist', {}));
  const [viewWeek, setViewWeek] = useState(1);

  // Task completion stats
  const totalTasks = PREP_WEEK.days.reduce((sum, d) => {
    return sum + (d.tasks.ceo?.length||0) + (d.tasks.troly?.length||0) + (d.tasks.sv?.length||0);
  }, 0);
  const totalDone = Object.values(completed).filter(Boolean).length;

  // Checklist stats
  let clTotal = 0, clDone = 0;
  CHECKLIST.forEach(cat => cat.sections.forEach(sec => sec.items.forEach(item => {
    clTotal++;
    if (clChecked[item.id]) clDone++;
  })));

  // Current week report
  const target = WEEKLY_TARGETS.find(t => t.week === viewWeek) || WEEKLY_TARGETS[0];
  const report = reports[`w${viewWeek}`] || {};

  const statCards = [
    { label: 'Checklist', value: clDone, sub: `/ ${clTotal} items`, pct: clTotal ? clDone/clTotal*100 : 0, color: 'var(--green)' },
    { label: 'Timeline Tasks', value: totalDone, sub: `/ ${totalTasks} blocks`, pct: totalTasks ? totalDone/totalTasks*100 : 0, color: '#06b6d4' },
    { label: 'Doanh Thu', value: report.dt ? formatVND(report.dt) : '—', sub: `Target: ${formatVND(target.dt)}`, pct: report.dt ? Math.min(report.dt/target.dt*100,100) : 0, color: 'var(--gold)' },
    { label: 'Leads', value: report.leads || '—', sub: `Target: ${target.leads}`, pct: report.leads ? Math.min(report.leads/target.leads*100,100) : 0, color: 'var(--blue)' },
    { label: 'Ads Spend', value: report.ads_spend ? formatVND(report.ads_spend) : '—', sub: `Cap: ${formatVND(target.ads_spend)}`, pct: report.ads_spend ? Math.min(report.ads_spend/target.ads_spend*100,100) : 0, color: 'var(--purple)' },
    { label: 'Deals Home', value: report.deals_home ?? '—', sub: `Target: ${target.deals_home}`, pct: target.deals_home ? Math.min((report.deals_home||0)/target.deals_home*100,100) : (report.deals_home ? 100 :0), color: 'var(--red)' },
    { label: 'SP Live', value: report.sp_live || '—', sub: `Target: ${target.sp_live}`, pct: report.sp_live ? Math.min(report.sp_live/target.sp_live*100,100) : 0, color: '#06b6d4' },
    { label: 'FADI Buffer', value: report.fadi_buffer ? formatVND(report.fadi_buffer) : '—', sub: 'Min: 25M', pct: report.fadi_buffer ? Math.min(report.fadi_buffer/25000000*100,100) : 0, color: report.fadi_buffer && report.fadi_buffer < 25000000 ? 'var(--red)' : 'var(--green)' },
  ];

  const historyKeys = ['dt', 'ads_spend', 'leads', 'deals_home', 'deals_set', 'don_core', 'organic_traffic'];

  return (
    <>
      <div className="day-header">
        <div className="day-title">Dashboard <span>MODI Marketing</span></div>
        <div className="week-selector">
          {[1,2,3,4].map(w => (
            <button key={w} className={`week-btn ${viewWeek===w?'active':''}`} onClick={()=>setViewWeek(w)}>W{w}</button>
          ))}
        </div>
      </div>

      <div className="stats-grid">
        {statCards.map(s => (
          <div key={s.label} className="stat-card">
            <div className="stat-label">{s.label}</div>
            <div className="stat-value" style={{ color: s.color }}>{s.value}</div>
            <div className="stat-target">{s.sub}</div>
            <div className="stat-bar">
              <div className="stat-bar-fill" style={{ width: `${s.pct}%`, background: s.color }} />
            </div>
          </div>
        ))}
      </div>

      {/* Checklist Summary by Category */}
      <div className="checklist-card">
        <div className="checklist-title">✅ Checklist Chuẩn Bị — Tóm tắt</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 8 }}>
          {CHECKLIST.map(cat => {
            let catT = 0, catD = 0;
            cat.sections.forEach(s => s.items.forEach(i => { catT++; if (clChecked[i.id]) catD++; }));
            const catPct = catT ? Math.round(catD/catT*100) : 0;
            return (
              <div key={cat.id} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 12px', background: 'var(--bg-primary)', borderRadius: 8 }}>
                <span style={{ fontSize: 16 }}>{catPct === 100 ? '✅' : catPct > 60 ? '🟡' : '⬜'}</span>
                <span style={{ flex: 1, fontSize: 13 }}>{cat.title}</span>
                <span style={{ fontSize: 12, color: catPct === 100 ? 'var(--green)' : 'var(--text-dim)' }}>{catD}/{catT}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* History Table */}
      <div className="report-section">
        <div className="report-title">📊 Lịch sử KPI theo tuần</div>
        <div style={{ overflowX: 'auto' }}>
          <table className="history-table">
            <thead>
              <tr>
                <th>Metric</th>
                {[1,2,3,4].map(w => <th key={w}>W{w} Target</th>)}
                {[1,2,3,4].map(w => <th key={`a${w}`} style={{color:'var(--gold)'}}>W{w} Actual</th>)}
              </tr>
            </thead>
            <tbody>
              {historyKeys.map(key => (
                <tr key={key}>
                  <td style={{fontWeight:600}}>{KPI_LABELS[key]}</td>
                  {WEEKLY_TARGETS.map(wt => (
                    <td key={`t${wt.week}`} style={{color:'var(--text-dim)'}}>
                      {['dt','ads_spend','fadi_buffer'].includes(key) ? formatVND(wt[key]) : wt[key]}
                    </td>
                  ))}
                  {[1,2,3,4].map(w => {
                    const r = reports[`w${w}`] || {};
                    const val = r[key];
                    const t = WEEKLY_TARGETS.find(x=>x.week===w)?.[key];
                    let color = 'var(--text-secondary)';
                    if (val !== undefined && val !== '') {
                      if (key === 'ads_spend') color = val <= t ? 'var(--green)' : 'var(--yellow)';
                      else color = val >= t * 0.9 ? 'var(--green)' : val >= t * 0.6 ? 'var(--yellow)' : 'var(--red)';
                    }
                    return (
                      <td key={`a${w}`} style={{color, fontWeight: 600}}>
                        {val !== undefined && val !== '' ? (['dt','ads_spend','fadi_buffer'].includes(key) ? formatVND(val) : val) : '—'}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Verdict History */}
      <div className="report-section">
        <div className="report-title">⚖️ Verdict History</div>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {[1,2,3,4].map(w => {
            const r = reports[`w${w}`] || {};
            return (
              <div key={w} className="stat-card" style={{ flex: '1 1 200px' }}>
                <div className="stat-label">Tuần {w}</div>
                <div style={{ fontSize: 16, fontWeight: 700, marginTop: 4,
                  color: r.verdict === 'ON TRACK' ? 'var(--green)' :
                    r.verdict === 'ADJUST' ? 'var(--yellow)' :
                    r.verdict === 'THROTTLE' ? 'var(--red)' :
                    r.verdict === 'PIVOT' ? 'var(--red)' : 'var(--text-dim)' }}>
                  {r.verdict || 'Chưa review'}
                </div>
                {r.notes && <div style={{ fontSize: 12, color: 'var(--text-dim)', marginTop: 8, lineHeight: 1.5 }}>{r.notes.slice(0,100)}{r.notes.length > 100 ? '...' : ''}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
