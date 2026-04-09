// MODI Marketing Tracker v4.0 — Updated 10/04/2026
// Aligned with checklist #17 + timeline #15 v2.0
// Start: T2 13/04/2026 | Prep: T6-CN 10-12/04

// ─── CHECKLIST DATA (from #17) ───
export const CHECKLIST = [
  {
    id: 'images',
    title: '📸 A. Hình Ảnh',
    sections: [
      {
        title: 'A1. Ảnh Sản Phẩm MODI Core (15 SP)',
        items: [
          { id: 'A1.1', task: 'Chụp 15 SP MODI Core (3-5 góc/SP)', who: 'CEO+SV', deadline: 'T7 11/04', guide: 'Phông trắng/xám, softbox. Góc: mặt trước, nghiêng 45°, chi tiết gỗ, sử dụng thực tế' },
          { id: 'A1.2', task: 'Crop + resize ảnh SP (800×800, WebP ≤200KB)', who: 'Trợ lý', deadline: 'T7 11/04', guide: 'Canva/Photopea. Tên: [ten-sp]-[goc].webp' },
          { id: 'A1.3', task: 'Watermark logo MODI lên ảnh', who: 'Trợ lý', deadline: 'T7 11/04', guide: 'Góc phải dưới, opacity 30%' },
          { id: 'A1.4', task: 'Upload ảnh lên PocketBase', who: 'CEO/CTO', deadline: 'CN 12/04', guide: 'PocketBase admin → collection products → field images' },
        ]
      },
      {
        title: 'A2. Ảnh Dự Án (4 DA MODI Home)',
        items: [
          { id: 'A2.1', task: 'Thu thập ảnh mặt bằng 4 DA', who: 'Trợ lý', deadline: 'T6 10/04', guide: 'Website CĐT, brochure PDF, group FB. Cần: layout 1PN, 2PN, 3PN/DA' },
          { id: 'A2.2', task: 'Render 3D phòng mẫu (3 style/DA)', who: 'CEO', deadline: 'CN 12/04', guide: 'Modern, Scandinavian, Japandi. Mỗi style ≥3 ảnh' },
          { id: 'A2.3', task: 'Ảnh "Before" (bàn giao thô)', who: 'Trợ lý', deadline: 'T7 11/04', guide: 'Group FB, YouTube review DA. 2-3 ảnh/DA' },
          { id: 'A2.4', task: 'Ảnh xưởng sản xuất MODI', who: 'CEO', deadline: 'T7 11/04', guide: 'CNC, kho gỗ, thợ làm, SP thành phẩm' },
          { id: 'A2.5', task: 'OG Image (1200×630px)', who: 'Trợ lý', deadline: 'T7 11/04', guide: 'Canva: Logo + tagline + render → public/og-image.png' },
          { id: 'A2.6', task: 'Favicon MODI (32/192/512px)', who: 'CEO', deadline: 'T6 10/04', guide: 'Logo trên nền gold, 3 sizes' },
          { id: 'A2.7', task: 'Hero banner trang chủ (1920×800)', who: 'CEO', deadline: 'CN 12/04', guide: 'Render + text overlay "Nội Thất Giá Xưởng"' },
        ]
      },
      {
        title: 'A3. Ảnh Marketing / Ads',
        items: [
          { id: 'A3.1', task: '3 ad creatives FB (1080×1080)', who: 'CEO/Trợ lý', deadline: 'CN 12/04', guide: 'Carousel + Single image + Before/After' },
          { id: 'A3.2', task: '5 ảnh social posts (1080×1080)', who: 'Trợ lý', deadline: 'CN 12/04', guide: 'Canva template MODI. Brand: gold #DAA520 + dark #1a1a2e' },
          { id: 'A3.3', task: 'Bảng giá PDF 4 DA (A4 design)', who: 'Trợ lý', deadline: 'CN 12/04', guide: '4 files: cover + bảng giá 3 styles + danh mục + liên hệ' },
          { id: 'A3.4', task: 'Pinterest pins (1000×1500 dọc)', who: 'Trợ lý', deadline: 'CN 12/04', guide: '5 pins, render + text keyword VN' },
        ]
      },
    ]
  },
  {
    id: 'content',
    title: '📝 B. Content',
    sections: [
      {
        title: 'B1. Landing Page Content (4 DA)',
        items: [
          { id: 'B1.1', task: 'Brief Q7 Saigon Riverside', who: 'Trợ lý', deadline: 'T6 10/04', guide: 'content/projects/q7-saigon-riverside/brief.md' },
          { id: 'B1.2', task: 'Brief Ascent Lakeside', who: 'Trợ lý', deadline: 'T6 10/04', guide: 'Types: 1PN 45-50m², 2PN 64-75m², 3PN 90m²' },
          { id: 'B1.3', task: 'Brief Sunshine Sky City', who: 'Trợ lý', deadline: 'T7 11/04', guide: 'Types: 2PN 55-69m², 2PN+ 76-85m²' },
          { id: 'B1.4', task: 'Brief The Infiniti Riviera Point', who: 'Trợ lý', deadline: 'T7 11/04', guide: 'Types: 1PN 54-58m², 2PN ≤100m²' },
          { id: 'B1.5', task: 'Bảng giá combo 3 styles × 4 DA', who: 'CEO', deadline: 'CN 12/04', guide: '1PN: 39/48/52M, 2PN: 63/78/85M, 3PN: 85/95/95M' },
          { id: 'B1.6', task: 'Danh mục nội thất per combo', who: 'Trợ lý', deadline: 'T7 11/04', guide: 'Copy từ báo cáo #13 mục III' },
          { id: 'B1.7', task: 'FAQ 7 câu per DA', who: 'Trợ lý', deadline: 'T7 11/04', guide: 'Thi công, vật liệu, BH, CN, thay đổi, thanh toán, vận chuyển' },
          { id: 'B1.8', task: 'USP section (6 điểm)', who: 'CEO', deadline: 'CN 12/04', guide: 'Giá xưởng, BH 2 năm, đúng hẹn, 15 ngày, tư vấn free, đo thực tế' },
          { id: 'B1.9', task: 'Copy hero + CTA per DA', who: 'CEO', deadline: 'CN 12/04', guide: '"Nội thất [DA] — Trọn gói từ 39 triệu"' },
        ]
      },
      {
        title: 'B2. Blog Content',
        items: [
          { id: 'B2.1', task: 'Blog #1 "Nội thất Q7 Saigon Riverside"', who: 'AI+CEO', deadline: 'CN 12/04', guide: '800-1200 từ. KW: nội thất Q7 Saigon Riverside' },
          { id: 'B2.2', task: 'Blog #2 MODI Core vs Shopee', who: 'AI+CEO', deadline: 'W1', guide: '1000-1500 từ. So sánh 5 SP' },
          { id: 'B2.3', task: 'Meta description 10 pages chính', who: 'Trợ lý', deadline: 'T7 11/04', guide: '150-160 ký tự, chứa keyword + CTA' },
        ]
      },
      {
        title: 'B3. Social Content',
        items: [
          { id: 'B3.1', task: '5 social posts FB drafted', who: 'AI+CEO', deadline: 'CN 12/04', guide: 'Carousel, single, B/A, tips, brand intro' },
          { id: 'B3.2', task: '5 mẫu comment dạo', who: 'Trợ lý', deadline: 'T7 11/04', guide: 'Tone tự nhiên, không spam' },
          { id: 'B3.3', task: '3 mẫu DM Zalo cư dân', who: 'CEO+Trợ lý', deadline: 'T7 11/04', guide: 'Variants: ngắn/trung/dài' },
          { id: 'B3.4', task: '3 mẫu DM Zalo chủ trọ', who: 'CEO+Trợ lý', deadline: 'T7 11/04', guide: 'ROI focused, chất lượng, combo' },
          { id: 'B3.5', task: 'Bảng giá PDF 4 DA', who: 'Trợ lý', deadline: 'T7 11/04', guide: 'Canva design, 4 files PDF' },
        ]
      },
      {
        title: 'B4. Ads Copy',
        items: [
          { id: 'B4.1', task: 'FB Ad Copy — 3 variants/DA', who: 'AI+CEO', deadline: 'CN 12/04', guide: 'Pain point, Số liệu, Social proof. Max 125 ký tự headline' },
          { id: 'B4.2', task: 'Zalo Ads Copy — test', who: 'Trợ lý', deadline: 'CN 12/04', guide: 'CTA "Chat Zalo", 25-45t, Q7' },
          { id: 'B4.3', task: 'Ad headlines A/B (5 variants)', who: 'CEO', deadline: 'CN 12/04', guide: '5 variants so sánh messaging' },
        ]
      },
    ]
  },
  {
    id: 'website',
    title: '💻 C. Website',
    sections: [
      {
        title: 'C1. SEO Critical Fixes',
        items: [
          { id: 'C1.1', task: 'Tạo robots.txt', who: 'CTO', deadline: 'T6 10/04', guide: 'Allow: / | Disallow: /admin, /login | Sitemap URL' },
          { id: 'C1.2', task: 'Cài react-helmet-async', who: 'CTO', deadline: 'T6 10/04', guide: 'npm i react-helmet-async + wrap HelmetProvider' },
          { id: 'C1.3', task: 'Dynamic <title> + <meta> per page', who: 'CTO', deadline: 'T7 11/04', guide: 'Mỗi page title riêng + description riêng' },
          { id: 'C1.4', task: 'Upload og-image.png', who: 'CEO/CTO', deadline: 'T7 11/04', guide: 'public/og-image.png → meta og:image' },
          { id: 'C1.5', task: 'Setup vite-plugin-prerender', who: 'CTO', deadline: 'T7 11/04', guide: 'Config routes cần prerender' },
          { id: 'C1.6', task: 'Auto-generate sitemap.xml', who: 'CTO', deadline: 'CN 12/04', guide: 'Script generate-sitemap.ts → build hook' },
        ]
      },
      {
        title: 'C2. Landing Pages',
        items: [
          { id: 'C2.1', task: 'MODI Home landing (/modi-home)', who: 'CTO', deadline: 'T7 11/04', guide: 'Overview 4 DA + Hero + CTA form' },
          { id: 'C2.2', task: 'Q7 Saigon Riverside LP', who: 'CTO', deadline: 'CN 12/04', guide: 'ModiHomeProject template + data' },
          { id: 'C2.3', task: 'Ascent Lakeside LP', who: 'CTO', deadline: 'CN 12/04', guide: 'Clone template + DA data' },
          { id: 'C2.4', task: 'Sunshine Sky City LP', who: 'CTO', deadline: 'CN 12/04', guide: 'Chỉ 2PN + 2PN+' },
          { id: 'C2.5', task: 'The Infiniti LP', who: 'CTO', deadline: 'CN 12/04', guide: 'Chỉ 1PN + 2PN ≤100m²' },
          { id: 'C2.6', task: 'Form báo giá trên 4 LPs', who: 'CTO', deadline: 'CN 12/04', guide: 'QuoteForm.tsx → Zalo OA webhook + PocketBase' },
          { id: 'C2.7', task: 'Zalo chat widget', who: 'CTO', deadline: 'CN 12/04', guide: 'Floating button, test mobile + desktop' },
          { id: 'C2.8', task: 'Upload 15 SP MODI Core', who: 'CEO', deadline: 'CN 12/04', guide: 'PocketBase → products → 15 SP with all fields' },
          { id: 'C2.9', task: 'Blog #1 published + indexed', who: 'CTO+CEO', deadline: 'CN 12/04', guide: 'Publish → GSC Request Indexing' },
          { id: 'C2.10', task: 'Referral program page', who: 'CTO', deadline: 'W1', guide: 'Simple form: tên + SĐT bạn bè' },
        ]
      },
      {
        title: 'C3. Pages Phụ Trợ',
        items: [
          { id: 'C3.1', task: '/about — Giới thiệu MODI', who: 'CTO+CEO', deadline: 'CN 12/04', guide: 'Brand story, team, xưởng. JSON-LD Organization' },
          { id: 'C3.2', task: '/lien-he — Liên hệ', who: 'CTO', deadline: 'CN 12/04', guide: 'Maps, form, SĐT, Zalo. JSON-LD LocalBusiness' },
          { id: 'C3.3', task: '/bao-gia — Form báo giá', who: 'CTO', deadline: 'CN 12/04', guide: 'Dropdown DA + type → auto-show giá → CTA' },
          { id: 'C3.4', task: '/chinh-sach — Chính sách', who: 'CTO+CEO', deadline: 'W1', guide: 'BH, đổi trả, vận chuyển, thanh toán' },
        ]
      },
      {
        title: 'C4. Structured Data (JSON-LD)',
        items: [
          { id: 'C4.1', task: 'JSON-LD Organization (Layout)', who: 'CTO', deadline: 'CN 12/04', guide: 'name, url, logo, contactPoint, sameAs' },
          { id: 'C4.2', task: 'JSON-LD Product (detail page)', who: 'CTO', deadline: 'CN 12/04', guide: 'name, image, offers, brand' },
          { id: 'C4.3', task: 'JSON-LD BreadcrumbList', who: 'CTO', deadline: 'CN 12/04', guide: 'Home > Category > Product' },
          { id: 'C4.4', task: 'JSON-LD BlogPosting', who: 'CTO', deadline: 'W1', guide: 'headline, datePublished, author' },
          { id: 'C4.5', task: 'JSON-LD FAQPage', who: 'CTO', deadline: 'W1', guide: '7 FAQ per DA → rich snippet' },
        ]
      },
    ]
  },
  {
    id: 'technical',
    title: '🔧 D. Kỹ Thuật',
    sections: [
      {
        title: 'D1. Ads & Tracking',
        items: [
          { id: 'D1.1', task: 'FB Business Manager: tạo ad account', who: 'CEO', deadline: 'T6 10/04', guide: 'business.facebook.com → Create. VND, GMT+7' },
          { id: 'D1.2', task: 'Meta Pixel: tạo + cài', who: 'CTO', deadline: 'T7 11/04', guide: 'Events: PageView, Lead, ViewContent' },
          { id: 'D1.3', task: 'Test Meta Pixel Events', who: 'CTO', deadline: 'T7 11/04', guide: 'Chrome "Meta Pixel Helper" → verify events' },
          { id: 'D1.4', task: 'Google Analytics 4 setup', who: 'CTO', deadline: 'T7 11/04', guide: 'Measurement ID → index.html' },
          { id: 'D1.5', task: 'Google Search Console verify', who: 'CTO', deadline: 'T7 11/04', guide: 'DNS/HTML verify → submit sitemap' },
          { id: 'D1.6', task: 'Zalo OA: tạo + connect', who: 'CEO', deadline: 'T6 10/04', guide: 'oa.zalo.me → OA "MODI" → logo/banner → chat → OA ID' },
          { id: 'D1.7', task: 'Zalo Ads account: đăng ký', who: 'CEO', deadline: 'T7 11/04', guide: 'ads.zalo.me → liên kết OA → credit 500K' },
        ]
      },
      {
        title: 'D2. Ads Campaign Setup',
        items: [
          { id: 'D2.1', task: 'FB Campaign structure (3 campaigns)', who: 'CEO', deadline: 'CN 12/04', guide: 'MODI HOME + MODI CORE + Retargeting' },
          { id: 'D2.2', task: 'Ad Set: Q7 SR geo + targeting', who: 'CEO', deadline: 'CN 12/04', guide: '3km Nguyễn Lương Bằng. 25-45. 150K/ngày' },
          { id: 'D2.3', task: 'Ad Set: Ascent Lakeside', who: 'CEO', deadline: 'CN 12/04', guide: '3km Nguyễn Văn Linh. 150K/ngày' },
          { id: 'D2.4', task: 'Ad Set: Sunshine Sky City', who: 'CEO', deadline: 'CN 12/04', guide: '5km Đào Trí. 150K/ngày' },
          { id: 'D2.5', task: 'Ad Set: The Infiniti', who: 'CEO', deadline: 'CN 12/04', guide: '3km Huỳnh Tấn Phát/PMH. 150K/ngày' },
          { id: 'D2.6', task: 'Ad Set: Retargeting', who: 'CEO', deadline: 'CN 12/04', guide: 'Custom Audience LP visitors. 100K/ngày' },
          { id: 'D2.7', task: '3 creatives uploaded per ad set', who: 'CEO', deadline: 'CN 12/04', guide: 'Carousel + Single + B/A' },
          { id: 'D2.8', task: 'Zalo Ads test campaign', who: 'CEO', deadline: 'CN 12/04', guide: '50K/ngày, CTA Chat Zalo' },
          { id: 'D2.9', task: 'ALL scheduled → T2 13/04 07:00', who: 'CEO', deadline: 'CN tối', guide: '⚡ Schedule start, KHÔNG bật sớm!' },
        ]
      },
      {
        title: 'D3. Research & Tracking',
        items: [
          { id: 'D3.1', task: 'Layout căn hộ 4 DA', who: 'Trợ lý', deadline: 'T7 11/04', guide: 'Download bản vẽ mỗi type ≤100m²' },
          { id: 'D3.2', task: 'Đối thủ analysis: 3 đơn vị Q7', who: 'Trợ lý', deadline: 'T7 11/04', guide: 'Tên, website, giá, FB, reviews' },
          { id: 'D3.3', task: 'Tracking sheet (Google Sheets)', who: 'Trợ lý', deadline: 'T6 10/04', guide: '3 tabs: Daily Ads, Content Calendar, Outreach' },
          { id: 'D3.4', task: '30 FB groups listed + join', who: 'Trợ lý', deadline: 'T7 11/04', guide: 'Cư dân 4 DA + groups nội thất TPHCM' },
          { id: 'D3.5', task: '10 Zalo groups joined', who: 'Trợ lý', deadline: 'T7 11/04', guide: 'Groups cư dân, observe 2-3 ngày' },
          { id: 'D3.6', task: '10 chủ trọ listed cho DM W1', who: 'Trợ lý', deadline: 'T7 11/04', guide: 'Q7, Nhà Bè, Bình Chánh. Tên, Zalo, số phòng' },
          { id: 'D3.7', task: 'Pinterest account + board', who: 'Trợ lý', deadline: 'T7 11/04', guide: 'Business acc "MODI Furniture" + 5 pins' },
          { id: 'D3.8', task: 'Content bank folder organized', who: 'Trợ lý', deadline: 'T6 10/04', guide: 'content/templates/ + content/projects/ structure' },
        ]
      },
      {
        title: 'D4. Brand & HR',
        items: [
          { id: 'D4.1', task: 'Brand kit MODI approved', who: 'CEO', deadline: 'T6 10/04', guide: 'Logo, Font, Color, Tone confirmed' },
          { id: 'D4.2', task: 'SV Part-time JD posted', who: 'CEO', deadline: 'T7 11/04', guide: 'Groups SV: UEH, TĐT, HUTECH' },
          { id: 'D4.3', task: 'Trợ lý brief meeting', who: 'CEO', deadline: 'T6 10/04', guide: 'Gửi checklist + brief 30 phút' },
        ]
      },
    ]
  },
];

// ─── TIMELINE DATA (from #15 v2.0) ───
export const PREP_WEEK = {
  label: 'PREP WEEK (10-12/04) + LAUNCH (13/04)',
  days: [
    {
      date: '2026-04-10', dow: 'Thứ 6',
      tasks: {
        ceo: [
          { time: '07:00', dur: 60, task: 'Xưởng: QC + chỉ đạo SX', cat: 'factory' },
          { time: '08:00', dur: 30, task: 'Brief trợ lý: checklist + mục tiêu tuần (D4.3)', cat: 'tracking' },
          { time: '08:30', dur: 30, task: 'FB Business Manager: tạo ad account MODI (D1.1)', cat: 'ads' },
          { time: '09:00', dur: 30, task: 'Zalo OA: tạo/check + upload logo/banner (D1.6)', cat: 'marketing' },
          { time: '09:30', dur: 30, task: 'Confirm Brand kit final: logo, font, color (D4.1)', cat: 'marketing' },
          { time: '10:00', dur: 30, task: 'Review AI content drafts (nếu có)', cat: 'content' },
          { time: '10:30', dur: 90, task: 'Code/Dev: robots.txt + react-helmet setup', cat: 'code' },
          { time: '14:00', dur: 30, task: 'Tạo favicon MODI 3 sizes (A2.6)', cat: 'content' },
          { time: '14:30', dur: 30, task: 'Review + xác nhận bảng giá combo 4 DA (B1.5)', cat: 'sales' },
          { time: '15:00', dur: 60, task: 'Planning: ads structure + targeting per DA (D2.1)', cat: 'ads' },
        ],
        troly: [
          { time: '08:00', dur: 30, task: 'Đọc checklist #17 + brief từ CEO', cat: 'tracking' },
          { time: '08:30', dur: 30, task: 'Tạo cấu trúc folder content/projects/ (4 DA)', cat: 'tracking' },
          { time: '09:00', dur: 30, task: 'Viết brief Q7 Saigon Riverside (B1.1)', cat: 'content' },
          { time: '09:30', dur: 30, task: 'Viết brief Ascent Lakeside (B1.2)', cat: 'content' },
          { time: '10:00', dur: 30, task: 'Tìm ảnh layout Q7 SR + Ascent (D3.1)', cat: 'research' },
          { time: '10:30', dur: 30, task: 'Tìm ảnh "Before" bàn giao thô (A2.3)', cat: 'research' },
          { time: '11:00', dur: 30, task: 'Tạo Google Sheet tracking (D3.3)', cat: 'tracking' },
          { time: '11:30', dur: 30, task: 'Tạo content bank folder (D3.8)', cat: 'tracking' },
          { time: '13:00', dur: 30, task: 'Draft 5 mẫu comment dạo (B3.2)', cat: 'content' },
          { time: '13:30', dur: 30, task: 'Draft 3 mẫu DM Zalo cư dân (B3.3)', cat: 'content' },
          { time: '14:00', dur: 30, task: 'Draft 3 mẫu DM Zalo chủ trọ (B3.4)', cat: 'content' },
          { time: '14:30', dur: 30, task: 'List 30 FB groups cư dân 4 DA (D3.4)', cat: 'research' },
          { time: '15:00', dur: 30, task: 'Tìm + join 10 Zalo groups (D3.5)', cat: 'marketing' },
          { time: '15:30', dur: 30, task: 'List 10 chủ trọ cho DM W1 (D3.6)', cat: 'research' },
          { time: '16:00', dur: 30, task: 'Viết meta description 10 pages (B2.3)', cat: 'content' },
          { time: '16:30', dur: 30, task: 'Report cho CEO: T6 xong gì / thiếu gì', cat: 'tracking' },
        ],
      }
    },
    {
      date: '2026-04-11', dow: 'Thứ 7',
      tasks: {
        ceo: [
          { time: '07:00', dur: 60, task: 'Xưởng: QC + chụp ảnh xưởng SX (A2.4)', cat: 'factory' },
          { time: '08:00', dur: 60, task: 'Chụp 15 SP MODI Core (A1.1)', cat: 'content' },
          { time: '09:00', dur: 30, task: 'Review + approve brief 4 DA', cat: 'marketing' },
          { time: '09:30', dur: 30, task: 'Zalo Ads account đăng ký (D1.7)', cat: 'ads' },
          { time: '10:00', dur: 30, task: 'Review AI Blog #1 draft', cat: 'content' },
          { time: '10:30', dur: 90, task: 'Code cùng CTO: LP + SEO fixes', cat: 'code' },
          { time: '14:00', dur: 30, task: 'SV Part-time JD post (D4.2)', cat: 'hr' },
          { time: '14:30', dur: 90, task: 'Viết USP section + hero copy 4 DA (B1.8, B1.9)', cat: 'content' },
        ],
        troly: [
          { time: '08:00', dur: 30, task: 'Viết brief Sunshine Sky City (B1.3)', cat: 'content' },
          { time: '08:30', dur: 30, task: 'Viết brief The Infiniti (B1.4)', cat: 'content' },
          { time: '09:00', dur: 30, task: 'Copy danh mục nội thất per combo (B1.6)', cat: 'content' },
          { time: '09:30', dur: 30, task: 'Viết FAQ 7 câu per DA (B1.7)', cat: 'content' },
          { time: '10:00', dur: 30, task: 'Đối thủ analysis 3 đơn vị Q7 (D3.2)', cat: 'research' },
          { time: '10:30', dur: 30, task: 'Tìm ảnh layout Sunshine + Infiniti (D3.1)', cat: 'research' },
          { time: '11:00', dur: 30, task: 'Tạo Pinterest account + board (D3.7)', cat: 'marketing' },
          { time: '11:30', dur: 30, task: 'Design bảng giá PDF — DA 1 Q7 SR (B3.5)', cat: 'content' },
          { time: '13:00', dur: 30, task: 'Design bảng giá PDF — DA 2 Ascent', cat: 'content' },
          { time: '13:30', dur: 30, task: 'Design bảng giá PDF — DA 3 Sunshine', cat: 'content' },
          { time: '14:00', dur: 30, task: 'Design bảng giá PDF — DA 4 Infiniti', cat: 'content' },
          { time: '14:30', dur: 30, task: 'Design OG Image 1200×630 (A2.5)', cat: 'content' },
          { time: '15:00', dur: 30, task: 'Crop/resize ảnh SP (A1.2)', cat: 'content' },
          { time: '15:30', dur: 30, task: 'Watermark logo lên ảnh (A1.3)', cat: 'content' },
          { time: '16:00', dur: 30, task: 'Design 2 social posts (B3.1)', cat: 'content' },
          { time: '16:30', dur: 30, task: 'Report + sync CEO', cat: 'tracking' },
        ],
      }
    },
    {
      date: '2026-04-12', dow: 'Chủ Nhật',
      tasks: {
        ceo: [
          { time: '08:00', dur: 30, task: 'Review checklist #17: đánh dấu done/not done', cat: 'tracking' },
          { time: '08:30', dur: 30, task: 'Render 3D Modern — Q7 SR (A2.2)', cat: 'content' },
          { time: '09:00', dur: 30, task: 'Render 3D Scandinavian — Q7 SR', cat: 'content' },
          { time: '09:30', dur: 30, task: 'Render 3D Japandi — Q7 SR', cat: 'content' },
          { time: '10:00', dur: 30, task: 'Ảnh hero banner trang chủ (A2.7)', cat: 'content' },
          { time: '10:30', dur: 30, task: 'Upload 15 SP MODI Core lên PocketBase (C2.8)', cat: 'code' },
          { time: '11:00', dur: 30, task: 'Review + publish Blog #1 (C2.9)', cat: 'content' },
          { time: '11:30', dur: 30, task: 'Review 5 social posts → approve (B3.1)', cat: 'marketing' },
          { time: '13:00', dur: 30, task: 'Design 3 ad creatives FB (A3.1)', cat: 'ads' },
          { time: '13:30', dur: 30, task: 'FB Campaign: tạo + config 5 ad sets (D2.1-6)', cat: 'ads' },
          { time: '14:00', dur: 30, task: 'Upload creatives + ad copy (D2.7)', cat: 'ads' },
          { time: '14:30', dur: 30, task: 'Ad headlines A/B — 5 variants (B4.3)', cat: 'ads' },
          { time: '15:00', dur: 30, task: 'Zalo Ads: tạo test campaign (D2.8)', cat: 'ads' },
          { time: '15:30', dur: 30, task: 'Schedule ALL campaigns → T2 07:00 (D2.9)', cat: 'ads' },
          { time: '16:00', dur: 30, task: 'Test form báo giá submit (C2.6)', cat: 'code' },
          { time: '16:30', dur: 30, task: 'Test Meta Pixel + GA4 events (D1.3)', cat: 'code' },
          { time: '19:00', dur: 30, task: '🔴 REVIEW CHECKLIST TỔNG: done vs not done', cat: 'tracking' },
          { time: '19:30', dur: 30, task: 'Backup plan cho items chưa xong', cat: 'tracking' },
          { time: '20:00', dur: 30, task: 'Gửi BÁO CÁO CHỐT KẾ HOẠCH cho team', cat: 'tracking' },
          { time: '20:30', dur: 30, task: '✅ Final check: ALL SYSTEMS GO', cat: 'tracking' },
        ],
        troly: [],
      }
    },
    {
      date: '2026-04-13', dow: 'Thứ 2 🚀',
      tasks: {
        ceo: [
          { time: '07:00', dur: 30, task: '🚀 Check ads scheduled → CONFIRM LIVE 07:00', cat: 'ads' },
          { time: '07:30', dur: 30, task: 'Xưởng QC + brief thợ MODI orders', cat: 'factory' },
          { time: '08:00', dur: 30, task: 'FB Ads Manager: impressions, reach đầu tiên', cat: 'ads' },
          { time: '08:30', dur: 30, task: 'MODI Home lead replies: check Zalo OA', cat: 'sales' },
          { time: '09:00', dur: 30, task: 'Post comment dạo 5 groups FB lớn nhất', cat: 'marketing' },
          { time: '09:30', dur: 30, task: 'DM Zalo 5 cư dân đầu tiên (template B3.3)', cat: 'sales' },
          { time: '10:00', dur: 20, task: 'Review AI Blog #2 draft → approve', cat: 'content' },
          { time: '10:20', dur: 100, task: 'Code/Dev: fix bugs + upload thêm SP', cat: 'code' },
          { time: '13:00', dur: 30, task: 'Post 2 social posts lên FB Page', cat: 'marketing' },
          { time: '13:30', dur: 30, task: 'Check ads: CTR, CPC, impressions 6h', cat: 'ads' },
          { time: '14:00', dur: 30, task: 'Ads decision: kill/keep/adjust', cat: 'ads' },
          { time: '14:30', dur: 30, task: 'DM Zalo 5 chủ trọ (template B3.4)', cat: 'sales' },
          { time: '15:00', dur: 30, task: 'Upload 3 SP mới (15→18 SP)', cat: 'code' },
          { time: '15:30', dur: 30, task: 'Strategy: W1 target vs actual', cat: 'tracking' },
          { time: '16:00', dur: 30, task: 'Post 1 Zalo OA broadcast', cat: 'marketing' },
          { time: '16:30', dur: 30, task: 'EOD report: leads, spend, actions', cat: 'tracking' },
        ],
        troly: [
          { time: '08:00', dur: 60, task: 'Outreach: comment dạo 10 groups Facebook', cat: 'marketing' },
          { time: '09:00', dur: 60, task: 'DM Zalo: 10 cư dân mới', cat: 'sales' },
          { time: '10:00', dur: 60, task: 'Design: 3 social posts mới', cat: 'content' },
          { time: '11:00', dur: 60, task: 'Update tracking sheet: leads, spend, posts', cat: 'tracking' },
          { time: '13:00', dur: 60, task: 'Giám sát: reply comments, track reactions', cat: 'marketing' },
          { time: '14:00', dur: 60, task: 'Prep: ảnh Blog #3 + research Sunshine DA', cat: 'research' },
          { time: '15:00', dur: 60, task: 'Design: 2 Pinterest pins mới', cat: 'content' },
          { time: '16:00', dur: 60, task: 'Report + sync CEO', cat: 'tracking' },
        ],
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
  don_core: 5, dt: 5000000, sp_live: 20, lp_live: 4,
  blogs: 3, social_posts: 6, videos: 0, organic_traffic: 200,
  groups_joined: 30, comments: 60, dms_sent: 20, fadi_buffer: 25000000,
};

export const WEEKLY_TARGETS = [
  { week: 1, ...WEEK1_TARGETS },
  { week: 2, ads_spend: 7000000, leads: 30, deals_home: 0, deals_set: 2, don_core: 15, dt: 20000000, sp_live: 35, lp_live: 4, blogs: 5, social_posts: 12, videos: 0, organic_traffic: 800, groups_joined: 40, comments: 180, dms_sent: 80, fadi_buffer: 25000000 },
  { week: 3, ads_spend: 10000000, leads: 60, deals_home: 1, deals_set: 3, don_core: 25, dt: 45000000, sp_live: 55, lp_live: 4, blogs: 7, social_posts: 24, videos: 6, organic_traffic: 1500, groups_joined: 45, comments: 330, dms_sent: 160, fadi_buffer: 25000000 },
  { week: 4, ads_spend: 22800000, leads: 90, deals_home: 2, deals_set: 6, don_core: 60, dt: 71000000, sp_live: 75, lp_live: 4, blogs: 9, social_posts: 36, videos: 15, organic_traffic: 2500, groups_joined: 50, comments: 500, dms_sent: 250, fadi_buffer: 25000000 },
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
