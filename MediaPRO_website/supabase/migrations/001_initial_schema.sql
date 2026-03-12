-- ============================================================
-- MediaPRO — Initial Schema Migration
-- Run this SQL in your Supabase SQL Editor
-- ============================================================

-- ── Portfolio Items ──────────────────────────────────────────
CREATE TABLE IF NOT EXISTS portfolio_items (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title         TEXT NOT NULL,
  client        TEXT NOT NULL,
  domain        TEXT NOT NULL DEFAULT '',
  description   TEXT NOT NULL DEFAULT '',
  key_impacts   TEXT[] NOT NULL DEFAULT '{}',
  tags          TEXT[] NOT NULL DEFAULT '{}',
  category      TEXT NOT NULL DEFAULT 'Enterprise',
  accent_color  TEXT NOT NULL DEFAULT 'blue',
  screenshot_url TEXT,
  url           TEXT,
  order_index   INTEGER NOT NULL DEFAULT 0,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- RLS
ALTER TABLE portfolio_items ENABLE ROW LEVEL SECURITY;

-- Public read
CREATE POLICY "portfolio_public_read"
  ON portfolio_items FOR SELECT
  USING (true);

-- Admin write (service role bypasses RLS, but anon key can also insert
-- if you trust the admin panel password gate on the frontend)
CREATE POLICY "portfolio_admin_write"
  ON portfolio_items FOR ALL
  USING (true)
  WITH CHECK (true);

-- ── Team Members ─────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS team_members (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name          TEXT NOT NULL,
  role          TEXT NOT NULL,
  role_group    TEXT NOT NULL DEFAULT 'development'
                  CHECK (role_group IN ('leadership', 'development')),
  description   TEXT,
  image_url     TEXT,
  order_index   INTEGER NOT NULL DEFAULT 0,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;

CREATE POLICY "team_public_read"
  ON team_members FOR SELECT
  USING (true);

CREATE POLICY "team_admin_write"
  ON team_members FOR ALL
  USING (true)
  WITH CHECK (true);

-- ── Storage Buckets ──────────────────────────────────────────
-- Run in Supabase Dashboard → Storage, or use the API

-- INSERT INTO storage.buckets (id, name, public)
--   VALUES ('portfolio-screenshots', 'portfolio-screenshots', true)
--   ON CONFLICT (id) DO NOTHING;

-- INSERT INTO storage.buckets (id, name, public)
--   VALUES ('team-photos', 'team-photos', true)
--   ON CONFLICT (id) DO NOTHING;

-- ── Seed: Portfolio Items ─────────────────────────────────────
INSERT INTO portfolio_items (title, client, domain, description, key_impacts, tags, category, accent_color, url, order_index) VALUES
(
  'MACTR',
  'Oyu Tolgoi (Rio Tinto)',
  'Workforce Logistics & Accommodation',
  '24,000 гаруй ажилчны ирц, нисэх, байрны менежментийг нэгтгэсэн mission-critical систем.',
  ARRAY[
    'Double-booking-г бүрэн устгасан дэвшилтэд захиалгын алгоритм',
    '24/7 тасралтгүй ажиллагаа — хуваарь, тээвэр, байр бүгдийг нэгтгэсэн',
    'Бодит цагийн өгөгдөлд суурилсан өрөө, суудлын оновчтой хуваарилалт'
  ],
  ARRAY['Enterprise', 'Logistics', 'Real-time', '24/7'],
  'Enterprise', 'blue', NULL, 1
),
(
  'Oasis',
  'Oyu Tolgoi — oasis.ot.mn',
  'Procurement Flow Management',
  'Томоохон уул уурхайн төслийн худалдан авалтын ажиллагааг автоматжуулсан систем.',
  ARRAY[
    'Нарийн төвөгтэй худалдан авалтын workflow-г цахимжуулж, ил тод, хурдтай болгосон',
    'Корпорацийн аудитын стандартыг бүрэн хангасан compliance систем'
  ],
  ARRAY['Procurement', 'Automation', 'Compliance'],
  'Enterprise', 'green', 'https://oasis.ot.mn', 2
),
(
  'OnlineHR.mn',
  'SaaS Platform',
  'HR Tech (SaaS)',
  'Олон салбарын байгууллагуудад зориулсан цогц HR менежментийн экосистем.',
  ARRAY[
    'Биометрийн төхөөрөмжтэй интеграц (FaceID/Fingerprint) — цаг бүртгэл автомат',
    'Элсүүлэлтээс тэтгэвэрт гарах хүртэлх HR workflow-г бүрэн хамарсан'
  ],
  ARRAY['SaaS', 'HR Tech', 'Biometric', 'Cloud'],
  'SaaS', 'purple', 'https://onlinehr.mn', 3
),
(
  'Chatbot.mn',
  'AI Automation Platform',
  'AI & Social Commerce Automation',
  'Хиймэл оюун ухаанд суурилсан 24/7 харилцагчийн үйлчилгээ болон нийгмийн сүлжээн дэх худалдааны платформ.',
  ARRAY[
    '24/7 автомат AI харилцагчийн үйлчилгээ — NLP технологитой',
    'Нийгмийн сүлжээн дэх шууд борлуулалтын интеграц',
    'Facebook Messenger, Telegram, веб чат дээр нэгэн зэрэг ажилладаг'
  ],
  ARRAY['AI', 'Chatbot', 'Social Commerce', 'NLP'],
  'AI', 'orange', 'https://chatbot.mn', 4
),
(
  'Easy Parking',
  'Smart City Solutions',
  'Smart Parking & Payment',
  'QPay/SocialPay төлбөрийн системтэй нэгдсэн ухаалаг зогсоолын шийдэл.',
  ARRAY[
    'QR кодоор зогсоол захиалах, төлбөр хийх — шуурхай, хялбар',
    'QPay, SocialPay болон бусад орон нутгийн төлбөрийн арга хэрэгсэлтэй нэгдсэн',
    'IoT хаалганы автомат удирдлага — оролт, гаралтын бүрэн хяналт'
  ],
  ARRAY['Smart City', 'IoT', 'Payment', 'QR'],
  'IoT', 'green', 'https://easy-parking.mn', 5
),
(
  'CLIX.mn',
  'Fleet Management Platform',
  'GPS Tracking & Fleet Management',
  '20 гаруй байгууллагын 2,800+ тээврийн хэрэгслийг бодит цагт хянадаг флотийн менежментийн систем.',
  ARRAY[
    '20+ байгууллагын 2,800+ тээврийн хэрэгслийг тасралтгүй хянана',
    'GPS-д суурилсан бодит цагийн байрлал, маршрутын мониторинг',
    'Шатахуун зарцуулалт, жолоочийн зан үйл, ашиглалтын цогц тайлан'
  ],
  ARRAY['GPS', 'Fleet', 'IoT', 'Real-time', 'Enterprise'],
  'Enterprise', 'blue', 'https://clix.mn', 6
),
(
  'INTELLEXI',
  'intellexitech.online (MNTech)',
  'Data Lakehouse / CRM / AI Analytics',
  'Data Lakehouse, CRM болон AI туслах системүүдийг нэгтгэсэн корпорат дата аналитикийн платформ.',
  ARRAY[
    'Bronze-Silver-Gold давхаргат өгөгдөл боловсруулах архитектур, ETL pipeline',
    '9 түвшний харилцагч сегментчилэл — зан үйл, худалдаа, идэвх, үнэ цэнд суурилсан',
    'AI-д суурилсан Email, SMS, Push мессежийн системд нэгдсэн масс маркетинг',
    'JWT, Row Level Security, байгууллагын тусгаарлалт бүхий аюулгүй байдлын систем'
  ],
  ARRAY['Data Lakehouse', 'AI', 'CRM', 'Analytics', 'Security'],
  'AI', 'purple', NULL, 7
)
ON CONFLICT DO NOTHING;

-- ── Seed: Team Members ────────────────────────────────────────
INSERT INTO team_members (name, role, role_group, description, image_url, order_index) VALUES
('Angarag.S', 'Гүйцэтгэх захирал (CEO)', 'leadership', 'Стратегийн удирдлага, үйлчлүүлэгчтэй харилцаа, бизнесийн хөгжил', './images/ceo_angarag_20251211_043859.png', 1),
('Lkhagvajargal.P', 'Технологийн захирал (CTO)', 'leadership', 'Технологийн архитектур, системийн дизайн, техникийн удирдлага', './images/cto_lkhagvajargal_20251211_043908.png', 2),
('Bolor-Erdene.A', 'Төслийн менежер (PM)', 'leadership', 'Төсөл уялдуулах, хэрэгжилтийн хяналт, багийн удирдлага', './images/pm_bolor_erdene_20251211_043919.png', 3),
('Zayadelger.Z', 'Ахлах Backend Developer', 'development', NULL, './images/senior_backend_zayadelger_20251211_043929.png', 4),
('Munkhat.M', 'Ахлах Backend Developer', 'development', NULL, './images/senior_backend_munkhat_20251211_044000.png', 5),
('Temuulen.Ch', 'Ахлах Frontend Developer', 'development', NULL, './images/senior_frontend_temuulen_20251211_043938.png', 6),
('Temuujin.S', 'Бизнес Аналист', 'development', NULL, './images/business_analyst_temuujin_20251211_043951.png', 7),
('Enkhtushig.T', 'Backend Developer', 'development', NULL, './images/backend_enkhtushig_20251211_044003.png', 8),
('Mandakhzaya.B', 'Frontend Developer', 'development', NULL, './images/frontend_mandakhzaya_20251211_044001.png', 9),
('Baasandulam.Ts', 'Frontend Developer', 'development', NULL, './images/frontend_baasandulam_20251211_044002.png', 10),
('Khuslenzaya.M', 'Frontend Developer', 'development', NULL, './images/frontend_khuslenzaya_20251211_044004.png', 11),
('Mendbayar.U', 'Frontend Developer', 'development', NULL, './images/frontend_mendbayar_20251211_044005.png', 12),
('Munkh-Orgil.E', 'Frontend Developer', 'development', NULL, NULL, 13)
ON CONFLICT DO NOTHING;
