import { useState, useEffect, useCallback } from 'react';
import { PREP_WEEK, CATEGORIES, WEEKLY_TARGETS, KPI_LABELS, formatVND } from './data';

// === localStorage helpers ===
const load = (key, fallback) => {
  try { const d = localStorage.getItem(key); return d ? JSON.parse(d) : fallback; }
  catch { return fallback; }
};
const save = (key, val) => localStorage.setItem(key, JSON.stringify(val));

// === MAIN APP ===
export default function App() {
  const [tab, setTab] = useState('daily');
  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <div className="nav-brand">MODI Tracker <span>v3.1</span></div>
          <div className="nav-tabs">
            {[['daily','📅 Hàng ngày'],['report','📊 Báo cáo tuần'],['dashboard','📈 Dashboard']].map(([k,l])=>(
              <button key={k} className={`nav-tab ${tab===k?'active':''}`} onClick={()=>setTab(k)}>{l}</button>
            ))}
          </div>
        </div>
      </nav>
      <div className="container">
        {tab === 'daily' && <DailyView />}
        {tab === 'report' && <ReportView />}
        {tab === 'dashboard' && <DashboardView />}
      </div>
    </>
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

      {[['ceo','🔴','CEO','12h/ngày'],['troly','🟢','Trợ Lý','8h/ngày'],['sv','🔵','SV Part-time','4h/ngày']].map(([key, icon, name, hours]) => {
        const tasks = day.tasks[key] || [];
        if (!tasks.length) return null;
        const donePerson = tasks.filter((_,i) => completed[`${day.date}_${key}_${i}`]).length;
        return (
          <div key={key} className="person-section">
            <div className="person-header">
              <span className="person-icon">{icon}</span>
              <span className="person-name">{name}</span>
              <span className="person-badge">{hours} — {donePerson}/{tasks.length} done</span>
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
          placeholder="1. Kill/scale campaigns nào?&#10;2. Thay đổi budget allocation?&#10;3. Thêm/bớt DA?"
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
  const [viewWeek, setViewWeek] = useState(1);

  // Task completion stats
  const totalTasks = PREP_WEEK.days.reduce((sum, d) => {
    return sum + (d.tasks.ceo?.length||0) + (d.tasks.troly?.length||0) + (d.tasks.sv?.length||0);
  }, 0);
  const totalDone = Object.values(completed).filter(Boolean).length;

  // Current week report
  const target = WEEKLY_TARGETS.find(t => t.week === viewWeek) || WEEKLY_TARGETS[0];
  const report = reports[`w${viewWeek}`] || {};

  const statCards = [
    { label: 'Tasks Done', value: totalDone, sub: `/ ${totalTasks} prep tasks`, pct: totalTasks ? totalDone/totalTasks*100 : 0, color: 'var(--green)' },
    { label: 'Doanh Thu', value: report.dt ? formatVND(report.dt) : '—', sub: `Target: ${formatVND(target.dt)}`, pct: report.dt ? Math.min(report.dt/target.dt*100,100) : 0, color: 'var(--gold)' },
    { label: 'Leads', value: report.leads || '—', sub: `Target: ${target.leads}`, pct: report.leads ? Math.min(report.leads/target.leads*100,100) : 0, color: 'var(--blue)' },
    { label: 'Ads Spend', value: report.ads_spend ? formatVND(report.ads_spend) : '—', sub: `Cap: ${formatVND(target.ads_spend)}`, pct: report.ads_spend ? Math.min(report.ads_spend/target.ads_spend*100,100) : 0, color: 'var(--purple)' },
    { label: 'Deals Home', value: report.deals_home ?? '—', sub: `Target: ${target.deals_home}`, pct: target.deals_home ? Math.min((report.deals_home||0)/target.deals_home*100,100) : (report.deals_home ? 100 :0), color: 'var(--red)' },
    { label: 'SP Live', value: report.sp_live || '—', sub: `Target: ${target.sp_live}`, pct: report.sp_live ? Math.min(report.sp_live/target.sp_live*100,100) : 0, color: '#06b6d4' },
    { label: 'Organic Traffic', value: report.organic_traffic || '—', sub: `Target: ${target.organic_traffic}`, pct: report.organic_traffic ? Math.min(report.organic_traffic/target.organic_traffic*100,100) : 0, color: '#10b981' },
    { label: 'FADI Buffer', value: report.fadi_buffer ? formatVND(report.fadi_buffer) : '—', sub: 'Min: 25M', pct: report.fadi_buffer ? Math.min(report.fadi_buffer/25000000*100,100) : 0, color: report.fadi_buffer && report.fadi_buffer < 25000000 ? 'var(--red)' : 'var(--green)' },
  ];

  // History table
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

      {/* Prep Checklist Summary */}
      <div className="checklist-card">
        <div className="checklist-title">🛠️ Checklist Chuẩn Bị (10-13/04)</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 8 }}>
          {[
            ['FB Business Manager', completed['2026-04-10_ceo_2']],
            ['Meta Pixel installed', completed['2026-04-10_ceo_3']],
            ['Google Analytics 4', completed['2026-04-10_ceo_4']],
            ['Zalo OA setup', completed['2026-04-10_ceo_5']],
            ['Layout 3 DA researched', completed['2026-04-10_ceo_9']],
            ['10 SP ảnh chụp', completed['2026-04-10_ceo_11']],
            ['Brand kit approved', completed['2026-04-11_ceo_2']],
            ['Landing page Q7 coded', completed['2026-04-11_ceo_9']],
            ['3 LP live + form', completed['2026-04-12_ceo_3']],
            ['Blog #1 published', completed['2026-04-12_ceo_4']],
            ['15 SP uploaded', completed['2026-04-12_ceo_5']],
            ['Ads campaigns ready', completed['2026-04-11_ceo_13']],
            ['30 groups joined', completed['2026-04-10_troly_5']],
            ['DM templates ready', completed['2026-04-10_troly_10']],
            ['Tracking sheet created', completed['2026-04-10_troly_13']],
            ['SV JD posted', completed['2026-04-12_ceo_10']],
          ].map(([label, done], i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: done ? 'var(--green)' : 'var(--text-secondary)' }}>
              <span style={{ fontSize: 16 }}>{done ? '✅' : '⬜'}</span>
              <span style={{ textDecoration: done ? 'line-through' : 'none' }}>{label}</span>
            </div>
          ))}
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
