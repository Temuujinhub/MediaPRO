import { Link } from 'react-router-dom';
import {
  Server,
  Users,
  Bot,
  TrendingUp,
  Database,
  Shield,
  Clock,
  Zap,
  Truck,
  Fuel,
  Activity,
} from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      id: 1,
      title: 'Enterprise Resource Planning (ERP) & Custom Development',
      description: 'We engineer bespoke, mission-critical systems for industries where failure is not an option. Our enterprise platforms handle massive concurrent data loads, complex multi-party workflows, and 24/7 operational demands — as proven by MACTR for Rio Tinto\'s 24,000-worker mine and Oasis for enterprise-wide procurement automation.',
      icon: <Server className="h-8 w-8" />,
      features: [
        'Mission-critical architecture with 99.9% uptime SLA',
        'High-concurrency data processing for tens of thousands of simultaneous users',
        'Real-time workflow automation with multi-level role-based approval chains',
        'Complex scheduling engines — multi-constraint optimization for logistics and resources',
        'Enterprise-grade security: JWT, Row Level Security, organizational data isolation',
        'Scalable cloud-native infrastructure built for growth',
        'Full audit trail and compliance reporting out of the box'
      ],
      examples: ['MACTR — 24,000+ worker workforce logistics at Oyu Tolgoi (Rio Tinto)', 'Oasis — End-to-end procurement automation with audit compliance'],
      color: 'blue'
    },
    {
      id: 2,
      title: 'HR Technology',
      description: 'Eliminate manual HR work with our OnlineHR.mn ecosystem — Mongolia\'s comprehensive cloud HR platform. From biometric attendance to automated payroll and full Mongolian labor law compliance, OnlineHR.mn handles the complete employee lifecycle for multi-branch organizations of any size.',
      icon: <Users className="h-8 w-8" />,
      features: [
        'Native biometric integration — FaceID and fingerprint devices sync in real time',
        'Automated payroll engine — salary, tax, and social insurance calculated from attendance data',
        'Full employee lifecycle: recruitment, onboarding, performance, payroll, offboarding',
        'Multi-branch, multi-organization architecture with centralized HR control',
        'Employee self-service portal — payslips, leave requests, and attendance on any device',
        'Built-in Mongolian labor law compliance — income tax and social insurance reporting automated',
        'Advanced HR analytics — headcount trends, turnover rates, and cost-per-employee insights'
      ],
      examples: ['OnlineHR.mn — Cloud HR SaaS serving multi-industry organizations across Mongolia'],
      color: 'green'
    },
    {
      id: 3,
      title: 'AI & Social Commerce',
      description: 'Transform your customer interactions with Chatbot.mn — Mongolia\'s leading AI automation platform trusted by 3,500+ organizations. Launch a 24/7 AI-powered storefront inside Facebook Messenger, automate customer support in Mongolian, accept payments via QPay and SocialPay, and manage it all without a single line of code.',
      icon: <Bot className="h-8 w-8" />,
      features: [
        'Mongolian-language NLP — AI understands and responds naturally in Mongolian',
        '24/7 automated customer service across Facebook Messenger, Telegram, and web chat',
        'In-chat online store — product catalog, inventory management, and order processing within Messenger',
        'Native QPay and SocialPay integration — customers pay without leaving the conversation',
        'No-code chatbot builder — marketing teams manage flows and campaigns independently',
        'Automated sales funnels — lead capture, qualification, and follow-up on autopilot',
        'Real-time analytics: conversation volume, conversion rates, sales performance, and user behavior'
      ],
      examples: ['Chatbot.mn — 3,500+ organizations powered by AI automation across Mongolia', 'Easy Parking — Smart payment and IoT integration for urban infrastructure'],
      color: 'purple'
    },
    {
      id: 4,
      title: 'Fleet, Transport & Fuel Operations',
      description: 'Two platforms, one operational layer for Mongolia\'s most demanding fleet and energy environments. Fleex.mn covers driver safety, AI-driven telematics, and dispatcher operations across mining, urban delivery, public transport, and rental fleets. Flux Monitor unifies every device on a fuel station — ATG tank gauges, dispensers, POS, eBarimt — into a single command platform with sub-5-second transactions and 100% audit logging.',
      icon: <Truck className="h-8 w-8" />,
      features: [
        'Fleex.mn — Lone-worker auto-protection, PANIC alert with 5 km / 30-second SMS escalation, dispatcher live Kanban',
        'Fleex.mn — CAN-bus and fuel-probe integration, AI driver scoring, eco-driving leaderboard, dash-cam evidence',
        'Fleex.mn — Engine remote block/unblock, geofence billing, ERP/1C API connectivity, Mongolian-language UI hosted in Mongolia, −40 °C operational',
        'Flux Monitor — Unified IoT controller integrating ATG tank gauges, dispensers, POS, eBarimt VAT, NFC cards, RFID readers',
        'Flux Monitor — Real-time tank integrity, leakage, and theft detection with automated alerting',
        'Flux Monitor — Role-based UI for super admin, manager, finance, and operator with 100% audit-log retention',
        'Flux Monitor — Sub-5-second transaction latency and 24/7 online monitoring across multi-station networks',
      ],
      examples: [
        'Fleex.mn — Enterprise fleet management for mining, delivery, public transport, and rental operations',
        'Flux.mn — Flux Monitor platform for fuel stations and depots, end-to-end station automation',
      ],
      color: 'blue',
    },
    {
      id: 5,
      title: 'Strategic Consulting & Data Intelligence',
      description: 'Powered by Megun Media and our INTELLEXI data platform, we deliver digital transformation strategy, brand management, and AI-driven analytics. We bridge technology and business objectives — helping organizations move from instinct-based decisions to data-driven growth strategies.',
      icon: <TrendingUp className="h-8 w-8" />,
      features: [
        'Digital transformation roadmaps — phased strategy from assessment to full implementation',
        'Data Lakehouse architecture — Medallion (Bronze → Silver → Gold) ETL pipelines for clean analytics',
        'AI-powered customer segmentation — 9-tier behavioral and value-based classification',
        'Omnichannel marketing automation — personalized Email, SMS, and Push campaigns at scale',
        'Brand positioning and digital PR strategy powered by Megun Media',
        'Market analysis, competitive intelligence, and go-to-market consulting',
        'ROI measurement frameworks and executive-level reporting dashboards'
      ],
      examples: ['INTELLEXI — Enterprise data lakehouse, CRM, and AI analytics platform', 'Megun Media — Strategic digital PR and brand transformation consulting'],
      color: 'orange'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          bg: 'bg-[#38bdf8]/10',
          text: 'text-[#38bdf8]',
          border: 'border-[#38bdf8]/30',
          dot: 'bg-[#38bdf8]'
        };
      case 'green':
        return {
          bg: 'bg-emerald-400/10',
          text: 'text-emerald-300',
          border: 'border-emerald-400/30',
          dot: 'bg-emerald-400'
        };
      case 'purple':
        return {
          bg: 'bg-[#6366f1]/10',
          text: 'text-[#a5b4fc]',
          border: 'border-[#6366f1]/30',
          dot: 'bg-[#a5b4fc]'
        };
      case 'orange':
        return {
          bg: 'bg-orange-400/10',
          text: 'text-orange-300',
          border: 'border-orange-400/30',
          dot: 'bg-orange-400'
        };
      default:
        return {
          bg: 'bg-white/5',
          text: 'text-white/60',
          border: 'border-white/15',
          dot: 'bg-white/60'
        };
    }
  };

  return (
    <div className="pg-page">
      {/* Header */}
      <section className="hero-gradient section-padding relative overflow-hidden">
        <div className="pg-orb pg-orb-cyan orb-drift-1 w-[420px] h-[420px] -top-32 -right-24" aria-hidden="true"></div>
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none" aria-hidden="true">
          <svg className="w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="solutions-grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#38bdf8" strokeWidth="0.6" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#solutions-grid)" />
          </svg>
        </div>
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="section-label justify-center"><span>High-Load System Capabilities</span></div>
            <h1 className="pg-heading text-4xl md:text-5xl text-white mb-6 text-balance">
              Mission-critical infrastructure for{' '}
              <span className="gradient-text">national-scale services</span>
            </h1>
            <p className="text-xl text-white/60">
              From enterprise systems powering the world's largest copper mines to AI platforms
              serving 3,500+ businesses — we engineer scalable, secure, and uncompromisingly
              reliable solutions for Mongolia's leading enterprises and global investors.
            </p>
            <div className="flex flex-wrap justify-center gap-2.5 mt-8">
              <span className="tech-badge">Architectural Scalability</span>
              <span className="tech-badge">24/7 Availability</span>
              <span className="tech-badge">Enterprise Security</span>
              <span className="tech-badge">DevOps Excellence</span>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="reveal section-padding pg-section">
        <div className="container-custom">
          <div className="reveal-stagger grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution) => {
              const colors = getColorClasses(solution.color);
              return (
                <div key={solution.id} className="feature-card h-full">
                  <div className="pb-4">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`w-16 h-16 ${colors.bg} ${colors.text} rounded-lg flex items-center justify-center shrink-0`}>
                        {solution.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white leading-tight">
                        {solution.title}
                      </h3>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <p className="text-white/60 text-lg leading-relaxed">
                      {solution.description}
                    </p>

                    {/* Features */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Key Capabilities:</h4>
                      <ul className="space-y-2">
                        {solution.features.map((feature, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <div className={`w-2 h-2 ${colors.dot} rounded-full mt-2 flex-shrink-0`}></div>
                            <span className="text-white/55">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Examples */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Real-World Applications:</h4>
                      <div className="space-y-2">
                        {solution.examples.map((example, index) => (
                          <div key={index} className={`p-3 ${colors.bg} ${colors.border} border rounded-lg`}>
                            <span className="text-white/70 font-medium">{example}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="reveal section-padding pg-section-deep relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" aria-hidden="true">
          <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="tech-dots" width="28" height="28" patternUnits="userSpaceOnUse">
                <circle cx="14" cy="14" r="1.2" fill="#38bdf8" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#tech-dots)" />
          </svg>
        </div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <div className="section-label justify-center"><span>Comprehensive Technical Excellence</span></div>
            <h2 className="pg-heading text-3xl md:text-4xl text-white mb-4">
              Modern stack & scalable infrastructure for enterprise-grade systems
            </h2>
            <p className="text-lg text-white/50">
              Reliability, scalability, and future-proof architecture — built on proven
              enterprise-grade technologies trusted by Mongolia's largest groups and global
              partners.
            </p>
          </div>

          <div className="reveal-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                title: 'Backend & Systems',
                items: ['.NET Core / C#', 'Java Enterprise', 'Oracle / MSSQL Database', 'Node.js & PHP'],
                icon: <Database className="h-6 w-6" />,
                color: 'bg-[#38bdf8]/10 text-[#38bdf8] border-[#38bdf8]/25',
              },
              {
                title: 'Mobile Development',
                items: ['React Native (Cross Platform)', 'Swift (iOS) & Kotlin (Android)', 'Java Enterprise Mobile'],
                icon: <Zap className="h-6 w-6" />,
                color: 'bg-emerald-400/10 text-emerald-300 border-emerald-400/25',
              },
              {
                title: 'AI & Automation',
                items: ['Python-based AI Development', 'Automated Testing (Selenium)', 'Performance Optimization'],
                icon: <Bot className="h-6 w-6" />,
                color: 'bg-[#6366f1]/10 text-[#a5b4fc] border-[#6366f1]/25',
              },
              {
                title: 'Cloud & DevOps',
                items: ['Docker & Kubernetes', 'AWS Infrastructure', 'High-Security Server Mgmt', 'CI/CD Pipelines'],
                icon: <Server className="h-6 w-6" />,
                color: 'bg-orange-400/10 text-orange-300 border-orange-400/25',
              },
            ].map((stack) => (
              <div key={stack.title} className={`rounded-2xl border ${stack.color} p-6`}>
                <div className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5`}>
                  {stack.icon}
                </div>
                <h3 className="font-bold text-white mb-3">{stack.title}</h3>
                <ul className="space-y-1.5">
                  {stack.items.map((item) => (
                    <li key={item} className="text-sm text-white/55 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-white/40" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="rounded-2xl glass-card text-white p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-3 text-xs uppercase tracking-widest text-[#7dd3fc] font-semibold">
                <Shield className="h-4 w-4" /> Operational Standards
              </div>
              <h3 className="text-xl font-bold mb-3">Engineered for international-grade reliability</h3>
              <p className="text-sm text-white/50 leading-relaxed">
                We adhere to global methodologies including <strong className="text-white">PMP</strong> and{' '}
                <strong className="text-white">Scrum</strong> — ensuring cross-cultural project engagement
                and mission-critical reliability for international partners.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <div className="text-xs text-white/40 mb-0.5">Approach</div>
                <div className="font-semibold text-sm">Security First</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <div className="text-xs text-white/40 mb-0.5">Design</div>
                <div className="font-semibold text-sm">Scalable Architecture</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <div className="text-xs text-white/40 mb-0.5">Process</div>
                <div className="font-semibold text-sm">CI/CD Automation</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <div className="text-xs text-white/40 mb-0.5">Track Record</div>
                <div className="font-semibold text-sm">10+ Years</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="reveal section-padding pg-section-alt text-white relative overflow-hidden">
        <div className="pg-orb pg-orb-cyan orb-drift-1 w-[420px] h-[420px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-25" aria-hidden="true"></div>
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="pg-heading text-3xl md:text-4xl mb-6">
              Ready to Build Something Mission-Critical?
            </h2>
            <p className="text-xl mb-8 text-white/50">
              We've built systems that power mines, automate HR for hundreds of companies,
              and run AI for 3,500+ organizations. Let's talk about what we can build for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/portfolio" className="btn-pg-ghost">
                See Our Work
              </Link>
              <Link to="/contact" className="btn-pg">
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;