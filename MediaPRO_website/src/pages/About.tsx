import { Calendar, Users, BookOpen, Shield, Building2, Bot, TrendingUp, User } from 'lucide-react';

/* ────────────────────────────────────────────
   Data
──────────────────────────────────────────── */
const milestones = [
  { year: '2013', event: 'Mediapro LLC байгуулагдсан' },
  { year: '2015', event: 'Анхны корпорат үйлчлүүлэгч' },
  { year: '2016', event: 'Chatbot.mn AI платформ эхэлсэн' },
  { year: '2018', event: 'Rio Tinto-тэй партнершип байгуулсан' },
  { year: '2020', event: 'OnlineHR.mn SaaS платформ нээлтэй болсон' },
  { year: '2024', event: 'Холдинг компани болж өргөжсөн' },
];

const subsidiaries = [
  {
    name: 'Megun Media',
    focus: 'Strategic PR & Marketing',
    description: 'Брэндийн нэр хүндийг нэмэгдүүлэх дижитал трансформацийн стратеги болон бренд менежмент.',
    icon: <TrendingUp className="h-5 w-5" />,
    color: 'icon-blue',
  },
  {
    name: 'Chatbot.mn',
    focus: 'AI & Social Automation',
    description: '24/7 AI-д суурилсан харилцагчийн үйлчилгээ болон нийгмийн сүлжээн дэх худалдааны автоматжуулалт.',
    icon: <Bot className="h-5 w-5" />,
    color: 'icon-green',
  },
  {
    name: 'OnlineHR.mn',
    focus: 'Workforce Management',
    description: 'Биометрийн интеграцтай, цалин хөлсний автоматжуулалтыг агуулсан цогц HR технологийн шийдэл.',
    icon: <Building2 className="h-5 w-5" />,
    color: 'icon-purple',
  },
];

const values = [
  {
    title: 'Тогтвортой хамт олон',
    description: 'Манай инженерийн болон удирдлагын гол баг арав гаруй жил хамт ажилласан — тасралтгүй байдал, гүн мэдлэг.',
    icon: <Users className="h-5 w-5" />,
    color: 'icon-blue',
  },
  {
    title: 'Тасралтгүй хөгжил',
    description: 'LMS, SCORM, Agile зэрэг олон улсын стандартыг баримтлан, ажилтнуудаа байнга хөгжүүлдэг.',
    icon: <BookOpen className="h-5 w-5" />,
    color: 'icon-purple',
  },
  {
    title: 'Найдвартай байдал',
    description: 'Зөвхөн хүлээлгэн өгдөггүй — бид платформуудаа урт хугацаанд хамт дагалдан хөгжүүлдэг.',
    icon: <Shield className="h-5 w-5" />,
    color: 'icon-green',
  },
];

const stats = [
  { value: '11+', label: 'Жилийн туршлага' },
  { value: '24K+', label: 'Өдөр тутмын хэрэглэгч' },
  { value: '99.9%', label: 'Систем uptime' },
  { value: '13', label: 'Багийн гишүүд' },
];

/* Team data — replace image src with real paths */
type TeamMember = {
  name: string;
  role: string;
  image: string;
  description?: string;
};

const leadership: TeamMember[] = [
  {
    name: 'Angarag.S',
    role: 'Гүйцэтгэх захирал (CEO)',
    image: './images/ceo_angarag_20251211_043859.png',
    description: 'Стратегийн удирдлага, үйлчлүүлэгчтэй харилцаа, бизнесийн хөгжил',
  },
  {
    name: 'Lkhagvajargal.P',
    role: 'Технологийн захирал (CTO)',
    image: './images/cto_lkhagvajargal_20251211_043908.png',
    description: 'Технологийн архитектур, системийн дизайн, техникийн удирдлага',
  },
  {
    name: 'Bolor-Erdene.A',
    role: 'Төслийн менежер (PM)',
    image: './images/pm_bolor_erdene_20251211_043919.png',
    description: 'Төсөл уялдуулах, хэрэгжилтийн хяналт, багийн удирдлага',
  },
];

const devTeam: TeamMember[] = [
  {
    name: 'Zayadelger.Z',
    role: 'Ахлах Backend Developer',
    image: './images/senior_backend_zayadelger_20251211_043929.png',
  },
  {
    name: 'Munkhat.M',
    role: 'Ахлах Backend Developer',
    image: './images/senior_backend_munkhat_20251211_044000.png',
  },
  {
    name: 'Temuulen.Ch',
    role: 'Ахлах Frontend Developer',
    image: './images/senior_frontend_temuulen_20251211_043938.png',
  },
  {
    name: 'Temuujin.S',
    role: 'Бизнес Аналист',
    image: './images/business_analyst_temuujin_20251211_043951.png',
  },
  {
    name: 'Enkhtushig.T',
    role: 'Backend Developer',
    image: './images/backend_enkhtushig_20251211_044003.png',
  },
  {
    name: 'Mandakhzaya.B',
    role: 'Frontend Developer',
    image: './images/frontend_mandakhzaya_20251211_044001.png',
  },
  {
    name: 'Baasandulam.Ts',
    role: 'Frontend Developer',
    image: './images/frontend_baasandulam_20251211_044002.png',
  },
  {
    name: 'Khuslenzaya.M',
    role: 'Frontend Developer',
    image: './images/frontend_khuslenzaya_20251211_044004.png',
  },
  {
    name: 'Mendbayar.U',
    role: 'Frontend Developer',
    image: './images/frontend_mendbayar_20251211_044005.png',
  },
  {
    name: 'Munkh-Orgil.E',
    role: 'Frontend Developer',
    image: '',
  },
];

/* ────────────────────────────────────────────
   Sub-components
──────────────────────────────────────────── */
const MemberCard = ({ member, size = 'md' }: { member: TeamMember; size?: 'sm' | 'md' | 'lg' }) => {
  const avatarSize = size === 'lg' ? 'w-28 h-28' : size === 'md' ? 'w-20 h-20' : 'w-16 h-16';
  return (
    <div className="team-card p-5">
      <div className={`${avatarSize} mx-auto mb-4 rounded-full overflow-hidden team-avatar`}>
        {member.image ? (
          <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <User className="h-8 w-8 text-gray-300" />
          </div>
        )}
      </div>
      <h4 className="font-bold text-gray-900 text-sm mb-0.5">{member.name}</h4>
      <p className="text-blue-600 text-xs font-medium mb-2">{member.role}</p>
      {member.description && (
        <p className="text-gray-400 text-xs leading-relaxed">{member.description}</p>
      )}
    </div>
  );
};

/* ────────────────────────────────────────────
   Page
──────────────────────────────────────────── */
const About = () => (
  <div className="bg-white min-h-screen">
    {/* Hero */}
    <section className="bg-slate-900 section-padding text-white">
      <div className="container-custom">
        <div className="max-w-3xl">
          <div className="section-label text-blue-400">Бидний тухай</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Тогтвортой байдал,{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              туршлага, инноваци
            </span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Арав гаруй жилийн турш нарийн төвөгтэй бизнесийн процессуудыг
            хэрэглэгчдэд ойлгомжтой дижитал шийдлүүдтэй холбосоор ирсэн.
          </p>
        </div>
      </div>
    </section>

    {/* Story + Timeline */}
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <div>
            <div className="section-label">Манай түүх</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">2013 оноос өнөөг хүртэл</h2>
            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p>
                2013 онд байгуулагдсан Mediapro LLC нь жижиг агентлагаас цогц технологи,
                медиа холдинг компани болтлоо өссөн. Бид нарийн төвөгтэй бизнесийн
                процессуудыг хэрэглэгчдэд ойлгомжтой дижитал шийдлүүдтэй холбодог.
              </p>
              <p>
                Манай аялал энгийн зорилгоос эхэлсэн: бизнесийн тасралтгүй ажиллагааг
                хангах өндөр ачааллын програм хангамжийн системүүдийг хүргэх. Өнөөдөр
                Rio Tinto зэрэт аж үйлдвэрийн тэргүүлэгчид манайд найддаг.
              </p>
              <p>
                Бидний онцлог бол урт хугацааны партнершип. Зөвхөн төсөл хүлээлгэхэд
                зогсдоггүй — үйлчлүүлэгчдийнхээ амжилтын нэг хэсэг болж, тэдний
                дижитал дэд бүтцийг хамт хөгжүүлдэг.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-white rounded-2xl border border-gray-100 p-7 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Calendar className="h-4 w-4 text-blue-500" />
              Компанийн цаг хугацааны шугам
            </h3>
            <div className="space-y-5">
              {milestones.map((m, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="shrink-0 w-14 h-7 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-xs font-bold border border-blue-100">
                    {m.year}
                  </div>
                  <div className="text-sm text-gray-600 pt-1">{m.event}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Structure */}
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="section-label">Манай бүтэц</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Нэг холдинг, гурван мэргэшсэн компани</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Бид гурван тусгай охин компанийн стратегийн хөрөнгө оруулагч юм.
            Энэ экосистем нь backend хөгжүүлэлтээс маркетинг хүртэл
            цогц шийдлүүд санал болгох боломжийг бидэнд олгодог.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {subsidiaries.map((s) => (
            <div key={s.name} className="feature-card">
              <div className={`${s.color} mb-4`}>{s.icon}</div>
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">{s.focus}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{s.name}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="section-label">Манай үнэт зүйлс</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Бидний баг & чадавхи</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Аж ахуйн нэгжийн системийн чухал чанар, найдвартай байдлын ач холбогдлыг
            гүнзгий ойлгодог мэргэжлийн хүмүүс дээр тулгуурласан.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((v) => (
            <div key={v.title} className="feature-card">
              <div className={`${v.color} mb-4`}>{v.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{v.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Leadership team */}
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="section-label">Удирдах баг</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Манай удирдлагийн баг</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Компанийн стратегийн чиглэл, технологийн шийдэл, үйл ажиллагааны
            гүйцэтгэлийг удирдан чиглүүлдэг туршлагатай мэргэжилтнүүд.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {leadership.map((m) => (
            <MemberCard key={m.name} member={m} size="lg" />
          ))}
        </div>
      </div>
    </section>

    {/* Development team */}
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="section-label">Хөгжүүлэлтийн баг</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Инженерийн баг</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Backend, Frontend болон бизнес аналитикийн мэргэшсэн инженерүүд.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {devTeam.map((m) => (
            <MemberCard key={m.name} member={m} size="md" />
          ))}
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="section-padding bg-slate-900 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="stat-number mb-2">{s.value}</div>
              <div className="text-slate-400 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Итгэлтэй туршлагатай хамт ажиллацгаая
          </h2>
          <p className="text-gray-500 mb-8 text-lg">
            Манай арван жилийн туршлагыг таны хамгийн чухал үйл ажиллагаанд
            болон дижитал трансформацид ашиглаарай.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
          >
            Яриа эхлүүлэх
          </a>
        </div>
      </div>
    </section>
  </div>
);

export default About;
