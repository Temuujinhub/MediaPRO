import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Bot,
  Users,
  Shield,
  Zap,
  TrendingUp,
  CheckCircle2,
  ChevronRight,
  Radio,
  Mountain,
  Building2,
  Plane,
  Train,
  Landmark,
  Globe2,
} from 'lucide-react';

const stats = [
  { value: '10+', label: 'Years of Proven Excellence' },
  { value: '30+', label: 'Specialists' },
  { value: '99.9%', label: 'System Uptime' },
  { value: '1M+', label: 'Monthly Users Served' },
];

const enterprisePartners = [
  {
    sector: 'Telecommunications',
    name: 'Mobicom Corporation',
    note: "Mongolia's largest telecom",
    icon: <Radio className="h-5 w-5" />,
    color: 'icon-blue',
    impacts: [
      'Large-scale enterprise system integration & management',
      'High-traffic digital platform architecture & support',
      'Mission-critical infrastructure continuity',
    ],
  },
  {
    sector: 'Mining & Resources',
    name: 'Oyu Tolgoi LLC',
    note: 'Major mining enterprise',
    icon: <Mountain className="h-5 w-5" />,
    color: 'icon-green',
    impacts: [
      'Logistics & transport management systems',
      'E-procurement platform development & deployment',
      'Complex operational data processing at industrial scale',
    ],
  },
  {
    sector: 'Multi-Sector Conglomerate',
    name: 'Monnis Group',
    note: 'Leading multi-sector group',
    icon: <Building2 className="h-5 w-5" />,
    color: 'icon-orange',
    impacts: [
      'Large-scale retail management systems',
      'Cross-sector enterprise digital transformation',
      'Enterprise-grade architecture across business verticals',
    ],
  },
];

const publicSector = [
  { name: 'MIAT.com', desc: 'National airline portal — high-volume bookings & real-time flight data with zero downtime', icon: <Plane className="h-4 w-4" /> },
  { name: 'MTZ.mn', desc: 'Mongolian Railway portal — integrating complex schedules into a unified digital interface', icon: <Train className="h-4 w-4" /> },
  { name: 'MECC.gov.mn', desc: 'Ministry of Environment & Climate Change portal — secure government citizen services', icon: <Landmark className="h-4 w-4" /> },
  { name: 'Aero Mongolia', desc: 'Advanced airline management systems ensuring excellence in private aviation', icon: <Plane className="h-4 w-4" /> },
];

const pillars = [
  {
    name: 'Megun Media',
    tagline: 'Strategic PR & Marketing',
    description: 'Brand reputation management and digital transformation strategy to amplify your presence in the digital landscape.',
    icon: <TrendingUp className="h-5 w-5" />,
    color: 'icon-blue',
  },
  {
    name: 'Chatbot.mn',
    tagline: 'AI & Social Automation',
    description: 'AI-powered 24/7 customer service and social commerce automation across Facebook Messenger, Telegram, and web chat.',
    icon: <Bot className="h-5 w-5" />,
    color: 'icon-green',
  },
  {
    name: 'OnlineHR.mn',
    tagline: 'Workforce Management',
    description: 'Comprehensive HR technology solution with biometric integration and automated payroll for multi-branch organizations.',
    icon: <Users className="h-5 w-5" />,
    color: 'icon-purple',
  },
];

const features = [
  { icon: <Shield className="h-5 w-5" />, title: 'Enterprise Security', desc: 'JWT authentication, Row Level Security, and organizational isolation' },
  { icon: <Zap className="h-5 w-5" />, title: 'High Availability', desc: '99.9% uptime guaranteed — mission-critical reliability' },
  { icon: <TrendingUp className="h-5 w-5" />, title: 'Scalable Architecture', desc: 'Built to scale with your growing operational demands' },
  { icon: <CheckCircle2 className="h-5 w-5" />, title: 'Long-term Partnership', desc: "We don't just deliver and leave — we stay as your growth partner" },
];

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="hero-gradient text-white relative overflow-hidden">
        {/* Abstract circuit / network pattern */}
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none" aria-hidden="true">
          <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="1.2" fill="#60a5fa" />
                <path d="M 60 30 L 0 30 M 30 0 L 30 60" stroke="#60a5fa" strokeWidth="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
            <g stroke="#a78bfa" strokeWidth="0.6" fill="none" opacity="0.55">
              <path d="M 0 120 Q 300 80 600 160 T 1200 200" />
              <path d="M 0 300 Q 400 250 700 320 T 1200 380" />
              <path d="M 0 460 Q 350 420 650 480 T 1200 500" />
            </g>
          </svg>
        </div>
        <div className="container-custom section-padding relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-blue-200 mb-8">
              <span className="w-2 h-2 bg-emerald-400 rounded-full pulse-glow"></span>
              Mongolia's Premier Tech Partner — Since 2013
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-[1.1] tracking-tight">
              Powering Mongolia's{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                mission-critical digital infrastructure
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
              From national airlines and railways to the country's largest telecom and mining
              operations — we design, build, and maintain high-load enterprise systems that keep
              mission-critical services online <strong className="text-white">24/7, 365 days a year</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/portfolio">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white px-8 h-12 rounded-xl font-semibold">
                  View Our Portfolio
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 h-12 rounded-xl px-8 font-semibold bg-transparent">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats */}
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

      {/* Three Pillars */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-14">
            <div className="section-label"><span>Our Ecosystem</span></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              One partner, three strategic pillars
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              MediaPRO is a strategic holding company empowering three specialized subsidiaries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <div key={p.name} className="feature-card group">
                <div className={`${p.color} mb-5`}>{p.icon}</div>
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">{p.tagline}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{p.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label">Why choose us</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Trusted by industry leaders like Rio Tinto
              </h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                We don't just write code — we are the reliable partner that ensures
                your most critical enterprise systems run without interruption, long-term.
              </p>
              <div className="flex flex-col gap-4">
                {features.map((f) => (
                  <div key={f.title} className="flex items-start gap-4">
                    <div className="icon-blue shrink-0">{f.icon}</div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{f.title}</div>
                      <div className="text-gray-500 text-sm mt-0.5">{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/solutions" className="mt-8 inline-flex items-center gap-1 text-blue-600 font-semibold text-sm hover:gap-2 transition-all">
                Explore our solutions <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Live systems panel */}
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <img src="./images/media PRO logo NOTEXT.png" alt="Logo" className="h-8 w-auto brightness-0 invert" />
                  <span className="font-bold text-lg">MediaPRO</span>
                </div>
                <div className="space-y-3">
                  {[
                    { label: 'MACTR — Oyu Tolgoi (Rio Tinto)', status: '🟢 Online', sub: '24,000+ workforce' },
                    { label: 'MIAT.com — National Airline', status: '🟢 Online', sub: 'Zero-downtime portal' },
                    { label: 'Fleex.mn — Fleet Intelligence', status: '🟢 Online', sub: 'Real-time telematics' },
                    { label: 'Chatbot.mn', status: '🟢 Online', sub: '3,500+ organizations' },
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
                  All systems operational · 99.9% uptime
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Enterprise Partnerships */}
      <section className="section-padding bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" aria-hidden="true">
          <svg className="w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="partners-dots" width="32" height="32" patternUnits="userSpaceOnUse">
                <circle cx="16" cy="16" r="1.3" fill="#1e3a8a" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#partners-dots)" />
          </svg>
        </div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <div className="section-label"><span>Trusted Enterprise Partnerships</span></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Long-term collaborations with Mongolia's most influential corporate groups
            </h2>
            <p className="text-gray-500 text-lg">
              We maintain sustained, mission-critical partnerships with Mongolia's leading
              enterprises — delivering high-load systems for telecom, mining, and multi-sector
              operations that demand <strong className="text-gray-700">uncompromising reliability</strong>.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {enterprisePartners.map((p) => (
              <div key={p.name} className="feature-card flex flex-col">
                <div className={`${p.color} mb-4`}>{p.icon}</div>
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
                  {p.sector}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{p.name}</h3>
                <div className="text-sm text-blue-600 font-medium mb-4">★ {p.note}</div>
                <ul className="space-y-2.5">
                  {p.impacts.map((impact) => (
                    <li key={impact} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                      <span>{impact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { v: 'Telecom', l: 'Sector' },
              { v: 'Mining', l: 'Sector' },
              { v: 'Multi-Sector', l: 'Sector' },
              { v: 'Retail', l: 'Sector' },
            ].map((s) => (
              <div key={s.v} className="bg-white rounded-xl border border-gray-100 py-4 px-3">
                <div className="text-xs uppercase tracking-wider text-gray-400 mb-1">{s.l}</div>
                <div className="text-base font-bold text-gray-900">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Public Sector Digital Transformation */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-1">
              <div className="section-label"><span>Public Sector</span></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight">
                Secure, high-reliability portals for{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  national infrastructure
                </span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                A trusted partner for state-owned enterprises and government bodies — delivering
                mission-critical web portals that demand the highest standards of security,
                availability, and user capacity.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 px-4 py-3 bg-blue-50 border border-blue-100 rounded-xl">
                  <Shield className="h-5 w-5 text-blue-600 shrink-0" />
                  <div>
                    <div className="text-xs uppercase tracking-wider text-blue-600 font-semibold">Service Reliability</div>
                    <div className="text-lg font-bold text-gray-900">99.9% Uptime</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-4 py-3 bg-emerald-50 border border-emerald-100 rounded-xl">
                  <Users className="h-5 w-5 text-emerald-600 shrink-0" />
                  <div>
                    <div className="text-xs uppercase tracking-wider text-emerald-600 font-semibold">Public Users Impacted</div>
                    <div className="text-lg font-bold text-gray-900">1M+ Monthly</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {publicSector.map((p) => (
                <div key={p.name} className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 p-5 hover:border-blue-200 hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                      {p.icon}
                    </div>
                    <div className="font-bold text-gray-900">{p.name}</div>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none" aria-hidden="true">
          <svg className="w-full h-full" viewBox="0 0 800 300" preserveAspectRatio="xMidYMid slice">
            <defs>
              <radialGradient id="cta-glow" cx="50%" cy="50%" r="60%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-glow)" />
            <g stroke="#60a5fa" strokeWidth="0.4" fill="none" opacity="0.6">
              <circle cx="400" cy="150" r="60" />
              <circle cx="400" cy="150" r="110" />
              <circle cx="400" cy="150" r="160" />
            </g>
          </svg>
        </div>
        <div className="container-custom relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-blue-200 mb-5">
              <Globe2 className="h-3.5 w-3.5" />
              Ready to power your next project in Mongolia
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Reliable. Innovative. Local Experts.
            </h2>
            <p className="text-slate-400 mb-8 text-lg">
              Apply the same expertise trusted by Rio Tinto, MIAT, Mobicom, Oyu Tolgoi, and Monnis
              Group to your most ambitious project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/portfolio">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent h-12 px-8 rounded-xl">
                  View Case Studies
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-500 h-12 px-8 rounded-xl font-semibold">
                  Get a Free Consultation
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
