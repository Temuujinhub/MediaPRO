import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
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
          bg: 'bg-blue-100',
          text: 'text-blue-600',
          border: 'border-blue-200'
        };
      case 'green':
        return {
          bg: 'bg-green-100',
          text: 'text-green-600',
          border: 'border-green-200'
        };
      case 'purple':
        return {
          bg: 'bg-purple-100',
          text: 'text-purple-600',
          border: 'border-purple-200'
        };
      case 'orange':
        return {
          bg: 'bg-orange-100',
          text: 'text-orange-600',
          border: 'border-orange-200'
        };
      default:
        return {
          bg: 'bg-gray-100',
          text: 'text-gray-600',
          border: 'border-gray-200'
        };
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white section-padding border-b relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" aria-hidden="true">
          <svg className="w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="solutions-grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#1e40af" strokeWidth="0.6" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#solutions-grid)" />
          </svg>
        </div>
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="section-label justify-center"><span>High-Load System Capabilities</span></div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Mission-critical infrastructure for{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                national-scale services
              </span>
            </h1>
            <p className="text-xl text-gray-600">
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
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution) => {
              const colors = getColorClasses(solution.color);
              return (
                <Card key={solution.id} className="corporate-shadow hover:shadow-xl transition-shadow duration-300 h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`w-16 h-16 ${colors.bg} ${colors.text} rounded-lg flex items-center justify-center`}>
                        {solution.icon}
                      </div>
                      <CardTitle className="text-2xl text-gray-900 leading-tight">
                        {solution.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {solution.description}
                    </p>

                    {/* Features */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Capabilities:</h4>
                      <ul className="space-y-2">
                        {solution.features.map((feature, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <div className={`w-2 h-2 ${colors.text.replace('text-', 'bg-')} rounded-full mt-2 flex-shrink-0`}></div>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Examples */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Real-World Applications:</h4>
                      <div className="space-y-2">
                        {solution.examples.map((example, index) => (
                          <div key={index} className={`p-3 ${colors.bg} ${colors.border} border rounded-lg`}>
                            <span className="text-gray-700 font-medium">{example}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" aria-hidden="true">
          <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="tech-dots" width="28" height="28" patternUnits="userSpaceOnUse">
                <circle cx="14" cy="14" r="1.2" fill="#1e40af" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#tech-dots)" />
          </svg>
        </div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <div className="section-label justify-center"><span>Comprehensive Technical Excellence</span></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Modern stack & scalable infrastructure for enterprise-grade systems
            </h2>
            <p className="text-lg text-gray-500">
              Reliability, scalability, and future-proof architecture — built on proven
              enterprise-grade technologies trusted by Mongolia's largest groups and global
              partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                title: 'Backend & Systems',
                items: ['.NET Core / C#', 'Java Enterprise', 'Oracle / MSSQL Database', 'Node.js & PHP'],
                icon: <Database className="h-6 w-6" />,
                color: 'bg-blue-50 text-blue-600 border-blue-100',
              },
              {
                title: 'Mobile Development',
                items: ['React Native (Cross Platform)', 'Swift (iOS) & Kotlin (Android)', 'Java Enterprise Mobile'],
                icon: <Zap className="h-6 w-6" />,
                color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
              },
              {
                title: 'AI & Automation',
                items: ['Python-based AI Development', 'Automated Testing (Selenium)', 'Performance Optimization'],
                icon: <Bot className="h-6 w-6" />,
                color: 'bg-purple-50 text-purple-600 border-purple-100',
              },
              {
                title: 'Cloud & DevOps',
                items: ['Docker & Kubernetes', 'AWS Infrastructure', 'High-Security Server Mgmt', 'CI/CD Pipelines'],
                icon: <Server className="h-6 w-6" />,
                color: 'bg-orange-50 text-orange-600 border-orange-100',
              },
            ].map((stack) => (
              <div key={stack.title} className={`rounded-2xl border ${stack.color} p-6`}>
                <div className={`w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-5`}>
                  {stack.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-3">{stack.title}</h3>
                <ul className="space-y-1.5">
                  {stack.items.map((item) => (
                    <li key={item} className="text-sm text-gray-600 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-gray-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-slate-900 text-white p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-3 text-xs uppercase tracking-widest text-blue-300 font-semibold">
                <Shield className="h-4 w-4" /> Operational Standards
              </div>
              <h3 className="text-xl font-bold mb-3">Engineered for international-grade reliability</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                We adhere to global methodologies including <strong className="text-white">PMP</strong> and{' '}
                <strong className="text-white">Scrum</strong> — ensuring cross-cultural project engagement
                and mission-critical reliability for international partners.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <div className="text-xs text-slate-400 mb-0.5">Approach</div>
                <div className="font-semibold text-sm">Security First</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <div className="text-xs text-slate-400 mb-0.5">Design</div>
                <div className="font-semibold text-sm">Scalable Architecture</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <div className="text-xs text-slate-400 mb-0.5">Process</div>
                <div className="font-semibold text-sm">CI/CD Automation</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <div className="text-xs text-slate-400 mb-0.5">Track Record</div>
                <div className="font-semibold text-sm">10+ Years</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-900 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Something Mission-Critical?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              We've built systems that power mines, automate HR for hundreds of companies,
              and run AI for 3,500+ organizations. Let's talk about what we can build for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/portfolio">
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-900">
                  See Our Work
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;