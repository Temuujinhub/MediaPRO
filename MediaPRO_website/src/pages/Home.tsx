import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building2, Bot, Users, Shield, Zap, TrendingUp, CheckCircle2, ChevronRight } from 'lucide-react';

const stats = [
  { value: '11+', label: 'Жилийн туршлага' },
  { value: '24K+', label: 'Өдөр тутмын хэрэглэгч' },
  { value: '99.9%', label: 'Систем ажиллах хугацаа' },
  { value: '7+', label: 'Томоохон төсөл' },
];

const pillars = [
  {
    name: 'Megun Media',
    tagline: 'Strategic PR & Marketing',
    description: 'Брэндийн нэр хүндийг нэмэгдүүлэх, дижитал орчин дахь тогтвортой хөгжлийн стратеги.',
    icon: <TrendingUp className="h-5 w-5" />,
    color: 'icon-blue',
    gradient: 'from-blue-500 to-blue-700',
  },
  {
    name: 'Chatbot.mn',
    tagline: 'AI & Social Automation',
    description: 'Хиймэл оюун ухаанд суурилсан 24/7 харилцагчийн үйлчилгээ, нийгмийн сүлжээн дэх худалдааны автоматжуулалт.',
    icon: <Bot className="h-5 w-5" />,
    color: 'icon-green',
    gradient: 'from-emerald-500 to-emerald-700',
  },
  {
    name: 'OnlineHR.mn',
    tagline: 'Workforce Management',
    description: 'Биометрийн интеграцтай, цалин хөлсний автоматжуулалтыг агуулсан цогц HR технологийн шийдэл.',
    icon: <Users className="h-5 w-5" />,
    color: 'icon-purple',
    gradient: 'from-purple-500 to-purple-700',
  },
];

const features = [
  { icon: <Shield className="h-5 w-5" />, title: 'Enterprise Security', desc: 'JWT, Row Level Security, байгууллагын тусгаарлалт' },
  { icon: <Zap className="h-5 w-5" />, title: 'High Availability', desc: '99.9% uptime баталгаатай, тасралтгүй ажиллагаа' },
  { icon: <TrendingUp className="h-5 w-5" />, title: 'Scalable Architecture', desc: 'Өсөн нэмэгдэх ачааллыг дагуул хэмжээгүй тэлэх' },
  { icon: <CheckCircle2 className="h-5 w-5" />, title: 'Lifetime Support', desc: 'Дуусгаад орхидоггүй, урт хугацааны партнершип' },
];

const Home = () => {
  return (
    <div className="bg-white">
      {/* ── Hero ── */}
      <section className="hero-gradient text-white relative">
        <div className="container-custom section-padding relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Label */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-blue-200 mb-8">
              <span className="w-2 h-2 bg-emerald-400 rounded-full pulse-glow"></span>
              2013 оноос хойш Монголын технологийн салбарт
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-[1.1] tracking-tight">
              Дижитал ирээдүйн{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                технологийн шийдэл
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
              Өндөр ачааллын корпорат системээс эхлээд AI автоматжуулалт хүртэл —
              бид таны бизнесийн тасралтгүй ажиллагааг хангана.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/portfolio">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white px-8 h-12 rounded-xl font-semibold">
                  Бидний ажлуудыг үзэх
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 h-12 rounded-xl px-8 font-semibold bg-transparent">
                  Холбоо барих
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto">
            {stats.map((s) => (
              <div key={s.label} className="text-center glass-card rounded-2xl p-5">
                <div className="stat-number">{s.value}</div>
                <div className="text-sm text-slate-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Three Pillars ── */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-14">
            <div className="section-label">
              <span>Манай экосистем</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Нэг партнер, гурван стратегийн тулгуур
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              MediaPRO нь гурван тусгай компанийн стратегийн холдинг компани юм
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <div key={p.name} className="feature-card group">
                <div className={`${p.color} mb-5`}>
                  {p.icon}
                </div>
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">{p.tagline}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{p.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label">Яагаад биднийг сонгох вэ</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Rio Tinto зэрэг аж үйлдвэрийн гигантуудын итгэлийг хүлээсэн
              </h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Бид зөвхөн кодчилдоггүй — аж ахуйн нэгжийн хамгийн чухал системүүдийн найдвартай
                ажиллагааг урт хугацаанд хангадаг партнер юм.
              </p>
              <div className="flex flex-col gap-4">
                {features.map((f) => (
                  <div key={f.title} className="flex items-start gap-4">
                    <div className="icon-blue shrink-0">
                      {f.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{f.title}</div>
                      <div className="text-gray-500 text-sm mt-0.5">{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/solutions" className="mt-8 inline-flex items-center gap-1 text-blue-600 font-semibold text-sm hover:gap-2 transition-all">
                Манай шийдлүүдийг үзэх <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Decorative right side */}
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <img src="./images/media PRO logo NOTEXT.png" alt="Logo" className="h-8 w-auto brightness-0 invert" />
                  <span className="font-bold text-lg">MediaPRO</span>
                </div>
                <div className="space-y-3">
                  {[
                    { label: 'MACTR System — Rio Tinto', status: '🟢 Online', sub: '24,000+ хэрэглэгч' },
                    { label: 'OnlineHR.mn', status: '🟢 Online', sub: 'Олон байгууллага' },
                    { label: 'CLIX Fleet Management', status: '🟢 Online', sub: '2,800+ тээврийн хэрэгсэл' },
                    { label: 'Chatbot.mn', status: '🟢 Online', sub: '24/7 AI үйлчилгээ' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3 border border-white/10">
                      <div>
                        <div className="text-sm font-medium">{item.label}</div>
                        <div className="text-xs text-slate-400">{item.sub}</div>
                      </div>
                      <div className="text-xs font-medium text-emerald-400">{item.status}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-5 border-t border-white/10 text-xs text-slate-400 text-center">
                  Бүх системүүд ажиллаж байна · Uptime 99.9%
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Таны бизнесийг дараагийн түвшинд гаргацгаая
            </h2>
            <p className="text-slate-400 mb-8 text-lg">
              Rio Tinto зэрэг дэлхийн том компаниудтай хамт ажилладаг туршлагыг таны төсөлд ашиглана.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/portfolio">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent h-12 px-8 rounded-xl">
                  Кейс судалгаа үзэх
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-500 h-12 px-8 rounded-xl font-semibold">
                  Чөлөөтэй зөвлөгөө авах
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
