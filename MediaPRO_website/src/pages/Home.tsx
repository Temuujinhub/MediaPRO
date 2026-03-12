import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bot, Users, Shield, Zap, TrendingUp, CheckCircle2, ChevronRight } from 'lucide-react';

const stats = [
  { value: '11+', label: 'Years of Experience' },
  { value: '24K+', label: 'Daily Active Users' },
  { value: '99.9%', label: 'System Uptime' },
  { value: '7+', label: 'Enterprise Projects' },
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
      <section className="hero-gradient text-white relative">
        <div className="container-custom section-padding relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-blue-200 mb-8">
              <span className="w-2 h-2 bg-emerald-400 rounded-full pulse-glow"></span>
              Serving Mongolia's enterprise sector since 2013
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-[1.1] tracking-tight">
              Technology solutions for{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                the digital future
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
              From high-availability enterprise systems to AI automation —
              we ensure uninterrupted operations for your business.
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
                    { label: 'MACTR System — Rio Tinto', status: '🟢 Online', sub: '24,000+ users' },
                    { label: 'OnlineHR.mn', status: '🟢 Online', sub: 'Multi-organization' },
                    { label: 'CLIX Fleet Management', status: '🟢 Online', sub: '2,800+ vehicles' },
                    { label: 'Chatbot.mn', status: '🟢 Online', sub: '24/7 AI service' },
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

      {/* CTA */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's take your business to the next level
            </h2>
            <p className="text-slate-400 mb-8 text-lg">
              Apply the same expertise trusted by global companies like Rio Tinto to your project.
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
