// Task schedule data for MODI Marketing Plan v3.1
// Start: Monday 14/04/2026 | CEO 12h/day | Trợ lý 8h | SV 4h (from W3)

export const PREP_WEEK = {
  label: 'TUẦN CHUẨN BỊ (10-13/04)',
  days: [
    {
      date: '2026-04-10', dow: 'Thứ 5',
      tasks: {
        ceo: [
          { time: '07:00', dur: 30, task: 'Xưởng: kiểm kê NVL + SP sẵn sàng cho MODI Core', cat: 'factory' },
          { time: '07:30', dur: 30, task: 'Xưởng: list SP có sẵn → chụp ảnh được ngay', cat: 'factory' },
          { time: '08:00', dur: 30, task: 'Tạo tài khoản FB Business Manager cho MODI', cat: 'ads' },
          { time: '08:30', dur: 30, task: 'Setup Meta Pixel: tạo pixel ID, lấy code snippet', cat: 'ads' },
          { time: '09:00', dur: 30, task: 'Đăng ký Google Analytics 4 cho modi.vn', cat: 'code' },
          { time: '09:30', dur: 30, task: 'Tạo/kiểm tra Zalo OA cho MODI', cat: 'marketing' },
          { time: '10:00', dur: 30, task: 'Research layout căn hộ Q7 Saigon Riverside (tìm bản vẽ)', cat: 'research' },
          { time: '10:30', dur: 30, task: 'Research layout The Infiniti Riviera Point', cat: 'research' },
          { time: '11:00', dur: 30, task: 'Research layout Ascent Lakeside', cat: 'research' },
          { time: '11:30', dur: 30, task: 'Tổng hợp bản vẽ 3 DA → file shared cho AI agents', cat: 'research' },
          { time: '13:00', dur: 30, task: 'Chụp ảnh 5 SP MODI Core có sẵn (bàn, kệ, tủ)', cat: 'content' },
          { time: '13:30', dur: 30, task: 'Chụp ảnh 5 SP MODI Core tiếp (ghế, giá sách...)', cat: 'content' },
          { time: '14:00', dur: 30, task: 'Brief AI agents: tạo brand kit MODI (logo, font, color, tone)', cat: 'marketing' },
          { time: '14:30', dur: 30, task: 'Brief AI: tạo landing page copy Q7 Saigon Riverside', cat: 'marketing' },
          { time: '15:00', dur: 30, task: 'Brief AI: viết mô tả 10 SP MODI Core', cat: 'content' },
          { time: '15:30', dur: 30, task: 'Chuẩn bị bảng giá MODI Home 3 styles cho 3 DA', cat: 'sales' },
          { time: '16:00', dur: 30, task: 'Test pixel trên modi.vn → verify events fire', cat: 'code' },
          { time: '16:30', dur: 30, task: 'Setup Google Search Console cho modi.vn', cat: 'code' },
          { time: '17:00', dur: 30, task: 'Tạo Zalo Ads account + nạp credit test', cat: 'ads' },
          { time: '17:30', dur: 30, task: 'Gọi 3 chủ trọ quen: "MODI Set sắp launch"', cat: 'sales' },
          { time: '18:00', dur: 30, task: 'Gọi 2 KH FADI: cross-sell giới thiệu MODI', cat: 'sales' },
          { time: '18:30', dur: 30, task: 'Chuẩn bị ads creative: ảnh carousel 3 DA + copy', cat: 'ads' },
        ],
        troly: [
          { time: '08:00', dur: 30, task: 'Tạo 2 profile FB "Tư vấn nội thất MODI"', cat: 'marketing' },
          { time: '08:30', dur: 30, task: 'List 30 FB groups (cư dân Q7/Infiniti/Ascent + nội thất)', cat: 'research' },
          { time: '09:00', dur: 30, task: 'Xin vào 15 groups FB (ưu tiên cư dân 3 DA)', cat: 'marketing' },
          { time: '09:30', dur: 30, task: 'List 10 Zalo groups (chủ trọ + mua bán nội thất Q7)', cat: 'research' },
          { time: '10:00', dur: 30, task: 'Join 10 Zalo groups', cat: 'marketing' },
          { time: '10:30', dur: 30, task: 'Soạn 5 mẫu comment dạo (giá trị, không spam)', cat: 'content' },
          { time: '11:00', dur: 30, task: 'Research đối thủ: 3 đơn vị nội thất đang chạy ads Q7', cat: 'research' },
          { time: '11:30', dur: 30, task: 'Lập tracking sheet (Google Sheets): KPI template', cat: 'tracking' },
          { time: '13:00', dur: 30, task: 'Xin vào 15 groups FB còn lại', cat: 'marketing' },
          { time: '13:30', dur: 30, task: 'Soạn 3 mẫu DM Zalo cho cư dân DA', cat: 'content' },
          { time: '14:00', dur: 30, task: 'Soạn 3 mẫu DM Zalo cho chủ trọ', cat: 'content' },
          { time: '14:30', dur: 30, task: 'Test comment 5 groups FB (dùng template)', cat: 'marketing' },
          { time: '15:00', dur: 30, task: 'List 10 chủ trọ từ Zalo groups → chuẩn bị DM', cat: 'research' },
          { time: '15:30', dur: 30, task: 'Tạo folder content bank: ảnh, copy, templates', cat: 'tracking' },
          { time: '16:00', dur: 30, task: 'Tổng hợp checklist công cụ sẵn sàng', cat: 'tracking' },
          { time: '16:30', dur: 30, task: 'Báo cáo CEO: progress ngày chuẩn bị #1', cat: 'tracking' },
        ],
      }
    },
    {
      date: '2026-04-11', dow: 'Thứ 6',
      tasks: {
        ceo: [
          { time: '07:00', dur: 30, task: 'Xưởng: chỉ đạo SX 3 bộ mẫu MODI Home Modern', cat: 'factory' },
          { time: '07:30', dur: 30, task: 'Xưởng: chụp behind-the-scenes (cho content)', cat: 'content' },
          { time: '08:00', dur: 30, task: 'Review AI brand kit → approve/chỉnh', cat: 'marketing' },
          { time: '08:30', dur: 30, task: 'Review AI landing page Q7 SR → approve', cat: 'marketing' },
          { time: '09:00', dur: 30, task: 'Review AI 10 mô tả SP MODI Core → approve', cat: 'content' },
          { time: '09:30', dur: 30, task: 'Brief AI: landing page Infiniti + Ascent', cat: 'marketing' },
          { time: '10:00', dur: 30, task: 'Code: cài pixel + GA4 code vào modi.vn', cat: 'code' },
          { time: '10:30', dur: 30, task: 'Code: tạo landing page /modi-home/q7-saigon-riverside', cat: 'code' },
          { time: '11:00', dur: 30, task: 'Code: upload 10 SP MODI Core lên modi.vn', cat: 'code' },
          { time: '11:30', dur: 30, task: 'Code: thêm form báo giá trên landing page Q7', cat: 'code' },
          { time: '13:00', dur: 30, task: 'Brief AI: blog SEO #1 "Nội thất Q7 Saigon Riverside"', cat: 'content' },
          { time: '13:30', dur: 30, task: 'Setup FB campaign structure (3 campaigns draft)', cat: 'ads' },
          { time: '14:00', dur: 30, task: 'Tạo Ad Set Q7 SR: geo 3km, 25-45t, interests', cat: 'ads' },
          { time: '14:30', dur: 30, task: 'Tạo 3 ad creatives: carousel + single + before/after', cat: 'ads' },
          { time: '15:00', dur: 30, task: 'Setup Ad Set Infiniti: geo + targeting', cat: 'ads' },
          { time: '15:30', dur: 30, task: 'Setup Ad Set Ascent: geo + targeting', cat: 'ads' },
          { time: '16:00', dur: 30, task: 'Setup Zalo Ads: test campaign geo Q7', cat: 'ads' },
          { time: '16:30', dur: 30, task: 'Chụp ảnh 5 SP MODI Core thêm (total 15)', cat: 'content' },
          { time: '17:00', dur: 30, task: 'Brief AI: 5 social posts FB cho tuần 1', cat: 'marketing' },
          { time: '17:30', dur: 30, task: 'Setup referral program page trên modi.vn', cat: 'code' },
          { time: '18:00', dur: 30, task: 'Zalo OA broadcast test: "MODI sắp launch"', cat: 'marketing' },
          { time: '18:30', dur: 30, task: 'Review tổng hợp: checklist sẵn sàng cho T2', cat: 'tracking' },
        ],
        troly: [
          { time: '08:00', dur: 30, task: 'Comment dạo 8 groups FB (test templates)', cat: 'marketing' },
          { time: '08:30', dur: 30, task: 'Comment dạo 7 groups tiếp', cat: 'marketing' },
          { time: '09:00', dur: 30, task: 'Zalo DM 5 cư dân Q7 SR (đã list hôm qua)', cat: 'sales' },
          { time: '09:30', dur: 30, task: 'Zalo DM 5 chủ trọ (SP lẻ MODI Core)', cat: 'sales' },
          { time: '10:00', dur: 30, task: 'Tạo Pinterest account MODI + board "Nội thất Q7"', cat: 'marketing' },
          { time: '10:30', dur: 30, task: 'Pin 3 ảnh lên Pinterest board', cat: 'marketing' },
          { time: '11:00', dur: 30, task: 'Research thêm groups FB mới (mở rộng scope)', cat: 'research' },
          { time: '11:30', dur: 30, task: 'Soạn nội dung Zalo OA cho broadcast tuần tới', cat: 'content' },
          { time: '13:00', dur: 30, task: 'Review AI social post drafts → note chỉnh', cat: 'content' },
          { time: '13:30', dur: 30, task: 'Post 1 FB page MODI: giới thiệu brand', cat: 'marketing' },
          { time: '14:00', dur: 30, task: 'Post 1 Zalo OA: giới thiệu MODI', cat: 'marketing' },
          { time: '14:30', dur: 30, task: 'Follow up DMs gửi hôm qua', cat: 'sales' },
          { time: '15:00', dur: 30, task: 'Chuẩn bị bảng giá PDF cho DM (format đẹp)', cat: 'content' },
          { time: '15:30', dur: 30, task: 'Kiểm tra lại TOÀN BỘ checklist công cụ', cat: 'tracking' },
          { time: '16:00', dur: 30, task: 'Báo cáo CEO: ready-check cho T2 14/04', cat: 'tracking' },
          { time: '16:30', dur: 30, task: 'Dọn dẹp + organize thư mục content bank', cat: 'tracking' },
        ],
      }
    },
    {
      date: '2026-04-12', dow: 'Thứ 7',
      tasks: {
        ceo: [
          { time: '08:00', dur: 30, task: 'Code: tạo LP /modi-home/the-infiniti-riviera-point', cat: 'code' },
          { time: '08:30', dur: 30, task: 'Code: tạo LP /modi-home/ascent-lakeside', cat: 'code' },
          { time: '09:00', dur: 30, task: 'Code: thêm Zalo chat widget vào 3 landing pages', cat: 'code' },
          { time: '09:30', dur: 30, task: 'Review AI blog #1 Q7 SR → approve/chỉnh', cat: 'content' },
          { time: '10:00', dur: 30, task: 'Code: publish blog #1 lên modi.vn', cat: 'code' },
          { time: '10:30', dur: 30, task: 'Upload 5 SP MODI Core mới (total 15 SP)', cat: 'code' },
          { time: '11:00', dur: 30, task: 'Test toàn bộ: pixel fire, form submit, LP load', cat: 'code' },
          { time: '11:30', dur: 30, task: 'Fix bugs + optimize page speed', cat: 'code' },
          { time: '14:00', dur: 30, task: 'Review social posts AI → approve', cat: 'marketing' },
          { time: '14:30', dur: 30, task: 'Final check: ALL ads campaigns ready to launch T2', cat: 'ads' },
          { time: '15:00', dur: 30, task: 'Đăng tuyển SV Part-time (video) trên groups SV', cat: 'hr' },
          { time: '15:30', dur: 30, task: 'Lên kế hoạch chi tiết T2 14/04 (first day checklist)', cat: 'tracking' },
        ],
        troly: [],
      }
    },
    {
      date: '2026-04-13', dow: 'Chủ Nhật',
      tasks: {
        ceo: [
          { time: '09:00', dur: 30, task: 'Review lại toàn bộ: website, LPs, blog, SP', cat: 'tracking' },
          { time: '09:30', dur: 30, task: 'Brief AI: blog #2 "Combo nội thất Ascent Lakeside"', cat: 'content' },
          { time: '10:00', dur: 30, task: 'Brief AI: 3 sales scripts Zalo cho 3 DA', cat: 'sales' },
          { time: '10:30', dur: 30, task: 'Final ads creative review: all approved?', cat: 'ads' },
          { time: '14:00', dur: 30, task: 'Mental prep + review plan v3.1 lần cuối', cat: 'tracking' },
          { time: '14:30', dur: 30, task: 'Setup daily alarm + routine cho T2', cat: 'tracking' },
        ],
        troly: [],
      }
    },
  ]
};

export const CATEGORIES = {
  factory: { label: '🏭 Xưởng', color: '#f97316' },
  code: { label: '💻 Code/Dev', color: '#3b82f6' },
  ads: { label: '📊 Ads', color: '#8b5cf6' },
  marketing: { label: '📣 Marketing', color: '#10b981' },
  sales: { label: '💼 Sales', color: '#ef4444' },
  content: { label: '✍️ Content', color: '#06b6d4' },
  research: { label: '🔍 Research', color: '#6366f1' },
  tracking: { label: '📋 Tracking', color: '#f59e0b' },
  hr: { label: '👥 HR', color: '#ec4899' },
};

export const WEEK1_TARGETS = {
  ads_spend: 5000000, leads: 10, deals_home: 0, deals_set: 1,
  don_core: 5, dt: 5000000, sp_live: 15, lp_live: 3,
  blogs: 2, social_posts: 4, videos: 0, organic_traffic: 200,
  groups_joined: 30, comments: 60, dms_sent: 20, fadi_buffer: 25000000,
};

export const WEEKLY_TARGETS = [
  { week: 1, ...WEEK1_TARGETS },
  { week: 2, ads_spend: 7000000, leads: 30, deals_home: 0, deals_set: 2, don_core: 15, dt: 20000000, sp_live: 35, lp_live: 4, blogs: 4, social_posts: 12, videos: 0, organic_traffic: 800, groups_joined: 40, comments: 180, dms_sent: 80, fadi_buffer: 25000000 },
  { week: 3, ads_spend: 10000000, leads: 60, deals_home: 1, deals_set: 3, don_core: 25, dt: 45000000, sp_live: 55, lp_live: 4, blogs: 6, social_posts: 24, videos: 6, organic_traffic: 1500, groups_joined: 45, comments: 330, dms_sent: 160, fadi_buffer: 25000000 },
  { week: 4, ads_spend: 22800000, leads: 90, deals_home: 2, deals_set: 6, don_core: 60, dt: 71000000, sp_live: 75, lp_live: 4, blogs: 8, social_posts: 36, videos: 15, organic_traffic: 2500, groups_joined: 50, comments: 500, dms_sent: 250, fadi_buffer: 25000000 },
];

export const KPI_LABELS = {
  ads_spend: 'Ads Spend', leads: 'Leads', deals_home: 'Deals Home',
  deals_set: 'Deals Set', don_core: 'Đơn Core', dt: 'Doanh thu',
  sp_live: 'SP Live', lp_live: 'Landing Pages', blogs: 'Blog Posts',
  social_posts: 'Social Posts', videos: 'Videos', organic_traffic: 'Organic Traffic',
  groups_joined: 'Groups Joined', comments: 'Comments', dms_sent: 'DMs Sent',
  fadi_buffer: 'FADI Buffer',
};

export const formatVND = (n) => {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M';
  if (n >= 1000) return (n / 1000).toFixed(0) + 'K';
  return n.toString();
};
