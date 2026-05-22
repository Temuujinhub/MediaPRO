import {
  Calendar,
  Users,
  BookOpen,
  Shield,
  Building2,
  Bot,
  TrendingUp,
  User,
  Globe,
  ClipboardList,
  Activity,
  CheckCircle2,
  Languages,
  Briefcase,
} from 'lucide-react';

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
  { value: '10+', label: 'Years of Proven Excellence' },
  { value: '30+', label: 'Dedicated Specialists' },
  { value: '99.9%', label: 'System Uptime' },
  { value: '1M+', label: 'Monthly Users Served' },
];

const internationalCapabilities = [
  {
    title: 'PMP — Project Management Professional',
    description: 'Structured delivery with defined milestones, risk management, and stakeholder alignment — ensuring predictable outcomes for mission-critical enterprise deployments.',
    icon: <ClipboardList className="h-5 w-5" />,
    color: 'icon-blue',
  },
  {
    title: 'Scrum — Agile Development Framework',
    description: 'Sprint-based iterative delivery with continuous feedback loops — enabling rapid adaptation and transparent reporting across international teams.',
    icon: <Activity className="h-5 w-5" />,
    color: 'icon-green',
  },
];

const localPartnerStrengths = [
  {
    title: 'Cross-Cultural Fluency',
    description: 'Extensive experience bridging international and Mongolian teams — seamless communication, aligned expectations, and cultural rapport built over 10+ years.',
    icon: <Languages className="h-5 w-5" />,
    color: 'icon-purple',
  },
  {
    title: 'Deep Local Regulatory Knowledge',
    description: 'Navigating Mongolian regulatory frameworks, enterprise procurement cycles, and government relations — removing barriers for foreign investors and partners.',
    icon: <Briefcase className="h-5 w-5" />,
    color: 'icon-blue',
  },
  {
    title: '30+ Dedicated Specialists',
    description: 'A full-stack team across system architecture, backend, mobile, and AI — ready to execute multi-phase international projects to international-grade quality.',
    icon: <Users className="h-5 w-5" />,
    color: 'icon-green',
  },
  {
    title: 'Proven Completion Rate',
    description: 'A consistently high project delivery record across government, telecom, and mining sectors — demonstrating reliability for complex, high-stakes deployments.',
    icon: <CheckCircle2 className="h-5 w-5" />,
    color: 'icon-orange',
  },
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
    <section className="bg-slate-900 section-padding text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none" aria-hidden="true">
        <svg className="w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="about-hex" width="60" height="52" patternUnits="userSpaceOnUse" patternTransform="rotate(0)">
              <polygon points="30,2 56,17 56,46 30,60 4,46 4,17" fill="none" stroke="#60a5fa" strokeWidth="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#about-hex)" />
        </svg>
      </div>
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <div className="section-label text-blue-400">About Us · A Decade of Driving Innovation</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Mongolia's strategic{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              technology partner
            </span>
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            For over a decade, we've connected complex business processes with mission-critical
            digital solutions — trusted by Mongolia's largest enterprises and global leaders
            like Rio Tinto. <strong className="text-white">Reliable. Innovative. Local Experts.</strong>
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

    {/* International Standards & Collaboration */}
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="section-label"><span>International Standards & Collaboration</span></div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            A real local partner for international implementers
          </h2>
          <p className="text-gray-500 text-lg">
            Global frameworks. Cross-cultural expertise. End-to-end execution on the ground in
            Mongolia — optimized for foreign investors, joint ventures, and multi-phase
            enterprise deployments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {internationalCapabilities.map((c) => (
            <div key={c.title} className="feature-card">
              <div className="flex items-start gap-4">
                <div className={`${c.color} shrink-0`}>{c.icon}</div>
                <div>
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                    Global Framework Adopted
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{c.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{c.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 md:p-10 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.08] pointer-events-none" aria-hidden="true">
            <svg className="w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
              <g stroke="#60a5fa" strokeWidth="0.5" fill="none">
                <circle cx="700" cy="100" r="80" />
                <circle cx="700" cy="100" r="140" />
                <circle cx="700" cy="100" r="200" />
              </g>
            </svg>
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <Globe className="h-5 w-5 text-blue-400" />
              <span className="text-xs uppercase tracking-widest text-blue-300 font-semibold">
                Why we're the right local partner
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-8 max-w-2xl">
              Optimized for foreign investors entering Mongolia
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {localPartnerStrengths.map((s) => (
                <div key={s.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 text-blue-300 flex items-center justify-center shrink-0">
                    {s.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1.5">{s.title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">{s.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-white/10 text-sm text-slate-300 leading-relaxed max-w-3xl">
              MediaPRO serves as your <strong className="text-white">end-to-end local execution partner</strong> —
              combining deep cross-cultural collaboration with technical deployment to ensure
              your investment succeeds in Mongolia. Trusted by long-term partners in government,
              telecom, mining, and multi-sector enterprises.
            </div>
          </div>
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
