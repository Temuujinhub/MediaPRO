import { Calendar, Users, BookOpen, Shield, Building2, Bot, TrendingUp, User } from 'lucide-react';

const milestones = [
  { year: '2013', event: 'Mediapro LLC founded' },
  { year: '2015', event: 'First enterprise client acquired' },
  { year: '2016', event: 'Chatbot.mn AI platform launched' },
  { year: '2018', event: 'Partnership established with Rio Tinto' },
  { year: '2020', event: 'OnlineHR.mn SaaS platform launched' },
  { year: '2024', event: 'Expanded into a full holding company' },
];

const subsidiaries = [
  {
    name: 'Megun Media',
    focus: 'Strategic PR & Marketing',
    description: 'Digital transformation strategy and brand management to amplify enterprise brand presence.',
    icon: <TrendingUp className="h-5 w-5" />,
    color: 'icon-blue',
  },
  {
    name: 'Chatbot.mn',
    focus: 'AI & Social Automation',
    description: '24/7 AI-powered customer service and social commerce automation across major messaging platforms.',
    icon: <Bot className="h-5 w-5" />,
    color: 'icon-green',
  },
  {
    name: 'OnlineHR.mn',
    focus: 'Workforce Management',
    description: 'Comprehensive HR technology with biometric integration and automated payroll processing.',
    icon: <Building2 className="h-5 w-5" />,
    color: 'icon-purple',
  },
];

const values = [
  {
    title: 'Sustainable Team',
    description: 'Our core engineering and leadership team has worked together for over a decade — continuity and deep knowledge.',
    icon: <Users className="h-5 w-5" />,
    color: 'icon-blue',
  },
  {
    title: 'Continuous Learning',
    description: 'Following international standards including LMS, SCORM, and Agile to keep our team continuously growing.',
    icon: <BookOpen className="h-5 w-5" />,
    color: 'icon-purple',
  },
  {
    title: 'Reliability',
    description: "We don't just deliver — we stay as long-term partners, evolving the platforms we build together.",
    icon: <Shield className="h-5 w-5" />,
    color: 'icon-green',
  },
];

const stats = [
  { value: '11+', label: 'Years of Experience' },
  { value: '24K+', label: 'Daily Active Users' },
  { value: '99.9%', label: 'System Uptime' },
  { value: '13', label: 'Team Members' },
];

type TeamMember = { name: string; role: string; image: string; description?: string; };

const leadership: TeamMember[] = [
  { name: 'Angarag.S', role: 'Chief Executive Officer (CEO)', image: './images/ceo_angarag_20251211_043859.png', description: 'Strategic leadership, client relations, and business development' },
  { name: 'Lkhagvajargal.P', role: 'Chief Technology Officer (CTO)', image: './images/cto_lkhagvajargal_20251211_043908.png', description: 'Technology architecture, system design, and technical leadership' },
  { name: 'Bolor-Erdene.A', role: 'Project Manager (PM)', image: './images/pm_bolor_erdene_20251211_043919.png', description: 'Project coordination, implementation oversight, and team management' },
];

const devTeam: TeamMember[] = [
  { name: 'Zayadelger.Z', role: 'Senior Backend Developer', image: './images/senior_backend_zayadelger_20251211_043929.png' },
  { name: 'Munkhat.M', role: 'Senior Backend Developer', image: './images/senior_backend_munkhat_20251211_044000.png' },
  { name: 'Temuulen.Ch', role: 'Senior Frontend Developer', image: './images/senior_frontend_temuulen_20251211_043938.png' },
  { name: 'Temuujin.S', role: 'Business Analyst', image: './images/business_analyst_temuujin_20251211_043951.png' },
  { name: 'Enkhtushig.T', role: 'Backend Developer', image: './images/backend_enkhtushig_20251211_044003.png' },
  { name: 'Mandakhzaya.B', role: 'Frontend Developer', image: './images/frontend_mandakhzaya_20251211_044001.png' },
  { name: 'Baasandulam.Ts', role: 'Frontend Developer', image: './images/frontend_baasandulam_20251211_044002.png' },
  { name: 'Khuslenzaya.M', role: 'Frontend Developer', image: './images/frontend_khuslenzaya_20251211_044004.png' },
  { name: 'Mendbayar.U', role: 'Frontend Developer', image: './images/frontend_mendbayar_20251211_044005.png' },
  { name: 'Munkh-Orgil.E', role: 'Frontend Developer', image: '' },
];

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
      {member.description && <p className="text-gray-400 text-xs leading-relaxed">{member.description}</p>}
    </div>
  );
};

const About = () => (
  <div className="bg-white min-h-screen">
    {/* Hero */}
    <section className="bg-slate-900 section-padding text-white">
      <div className="container-custom">
        <div className="max-w-3xl">
          <div className="section-label text-blue-400">About Us</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Stability,{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              experience & innovation
            </span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            For over a decade, we've been connecting complex business processes with
            intuitive digital solutions trusted by some of the world's largest companies.
          </p>
        </div>
      </div>
    </section>

    {/* Story + Timeline */}
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <div>
            <div className="section-label">Our Story</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">From 2013 to today</h2>
            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p>
                Founded in 2013, Mediapro LLC has grown from a small agency into a comprehensive
                technology and media holding company. We bridge complex business processes with
                user-friendly digital solutions.
              </p>
              <p>
                Our journey started with a simple goal: to deliver high-availability software
                systems that ensure business continuity. Today, industry leaders like Rio Tinto
                trust us with their most critical operations.
              </p>
              <p>
                What sets us apart is long-term partnership. We don't just hand over a project —
                we become a part of our clients' success and evolve their digital infrastructure together.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-7 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Calendar className="h-4 w-4 text-blue-500" />
              Company Timeline
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
          <div className="section-label">Our Structure</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">One holding, three specialized companies</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            We are the strategic investor behind three specialized subsidiaries.
            This ecosystem enables us to offer end-to-end solutions from backend development to marketing.
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
          <div className="section-label">Our Values</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our team & capabilities</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Built on professionals who deeply understand the importance of reliability
            and long-term quality in enterprise systems.
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

    {/* Leadership */}
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="section-label">Leadership</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our leadership team</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Experienced professionals guiding the company's strategic direction,
            technology decisions, and operational excellence.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {leadership.map((m) => <MemberCard key={m.name} member={m} size="lg" />)}
        </div>
      </div>
    </section>

    {/* Dev team */}
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="section-label">Engineering Team</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our developers</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Specialized engineers in backend, frontend, and business analytics.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {devTeam.map((m) => <MemberCard key={m.name} member={m} size="md" />)}
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
            Let's work together with confidence
          </h2>
          <p className="text-gray-500 mb-8 text-lg">
            Apply over a decade of experience to your most critical operations
            and digital transformation initiatives.
          </p>
          <a href="/#/contact" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors">
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  </div>
);

export default About;
