import { useState } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

type Project = {
  id: number;
  title: string;
  client: string;
  domain: string;
  description: string;
  keyImpacts: string[];
  tags: string[];
  category: string;
  accentColor: string;
  screenshot?: string;
  url?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'MACTR',
    client: 'Oyu Tolgoi (Rio Tinto)',
    domain: 'Workforce Logistics & Accommodation',
    description:
      'A mission-critical system integrating attendance, flight scheduling, and accommodation management for 24,000+ workers. Roster planning, flight schedules, and room bookings all handled in one platform.',
    keyImpacts: [
      'Advanced booking algorithm that fully eliminates double-booking',
      '24/7 uninterrupted operations — scheduling, transport, and accommodation unified',
      'Real-time data-driven room and seat allocation optimization',
    ],
    tags: ['Enterprise', 'Logistics', 'Real-time', '24/7'],
    category: 'Enterprise',
    accentColor: 'blue',
  },
  {
    id: 2,
    title: 'Oasis',
    client: 'Oyu Tolgoi — oasis.ot.mn',
    domain: 'Procurement Flow Management',
    description:
      'A system automating procurement operations for a major mining project. Digitizes approval workflows, supplier communication, and audit controls.',
    keyImpacts: [
      'Digitized complex procurement workflows for full transparency and speed',
      'Compliance system fully meeting corporate audit standards',
    ],
    tags: ['Procurement', 'Automation', 'Compliance'],
    category: 'Enterprise',
    accentColor: 'green',
    url: 'https://oasis.ot.mn',
  },
  {
    id: 3,
    title: 'OnlineHR.mn',
    client: 'SaaS Platform',
    domain: 'HR Tech (SaaS)',
    description:
      'A comprehensive HR management ecosystem for multi-branch organizations. Biometric-integrated time tracking and fully automated payroll.',
    keyImpacts: [
      'Biometric device integration (FaceID/Fingerprint) — automated time tracking',
      'End-to-end HR workflows from recruitment to retirement',
    ],
    tags: ['SaaS', 'HR Tech', 'Biometric', 'Cloud'],
    category: 'SaaS',
    accentColor: 'purple',
    url: 'https://onlinehr.mn',
  },
  {
    id: 4,
    title: 'Chatbot.mn',
    client: 'AI Automation Platform',
    domain: 'AI & Social Commerce Automation',
    description:
      'An AI-powered 24/7 customer service and social commerce platform. Integrates Facebook Messenger, Telegram, and web chat into one unified system.',
    keyImpacts: [
      '24/7 automated AI customer service with NLP technology',
      'Direct social commerce integration for in-chat purchasing',
      'Simultaneous operation across Facebook Messenger, Telegram, and web chat',
      'Real-time analytics and user behavior insights',
    ],
    tags: ['AI', 'Chatbot', 'Social Commerce', 'NLP'],
    category: 'AI',
    accentColor: 'orange',
    url: 'https://chatbot.mn',
  },
  {
    id: 5,
    title: 'Easy Parking',
    client: 'Smart City Solutions',
    domain: 'Smart Parking & Payment',
    description:
      'A smart parking solution integrated with QPay/SocialPay payment systems. QR-based booking, IoT-powered gate management, and real-time availability.',
    keyImpacts: [
      'QR code parking reservation and payment — fast and seamless',
      'Integrated with QPay, SocialPay, and other local payment methods',
      'Automated IoT gate control — full entry/exit monitoring',
    ],
    tags: ['Smart City', 'IoT', 'Payment', 'QR'],
    category: 'IoT',
    accentColor: 'green',
    url: 'https://easy-parking.mn',
  },
  {
    id: 6,
    title: 'CLIX.mn',
    client: 'Fleet Management Platform',
    domain: 'GPS Tracking & Fleet Management',
    description:
      'A real-time fleet management system tracking 2,800+ vehicles across 20+ organizations. Route optimization, fuel reporting, and maintenance alerts.',
    keyImpacts: [
      'Continuous tracking of 2,800+ vehicles across 20+ organizations',
      'GPS-based real-time location and route monitoring',
      'Comprehensive reports on fuel usage, driver behavior, and utilization',
    ],
    tags: ['GPS', 'Fleet', 'IoT', 'Real-time', 'Enterprise'],
    category: 'Enterprise',
    accentColor: 'blue',
    url: 'https://clix.mn',
  },
  {
    id: 7,
    title: 'INTELLEXI',
    client: 'intellexitech.online (MNTech)',
    domain: 'Data Lakehouse / CRM / AI Analytics',
    description:
      'Enterprise data analytics platform combining Data Lakehouse, CRM, and AI assistant systems. Unifies multi-source data with 9-tier customer segmentation.',
    keyImpacts: [
      'Bronze-Silver-Gold layered data processing architecture with ETL pipeline',
      '9-tier customer segmentation based on behavior, purchases, activity, and value',
      'AI-powered mass marketing integrated with Email, SMS, and Push notification systems',
      'JWT, Row Level Security, and organizational isolation for enterprise-grade security',
    ],
    tags: ['Data Lakehouse', 'AI', 'CRM', 'Analytics', 'Security'],
    category: 'AI',
    accentColor: 'purple',
  },
];

const categories = ['All', 'Enterprise', 'SaaS', 'AI', 'IoT'];

const accentMap = {
  blue:   { bg: 'bg-blue-50',    text: 'text-blue-600',    border: 'border-blue-100',    dot: 'bg-blue-500' },
  green:  { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-100', dot: 'bg-emerald-500' },
  purple: { bg: 'bg-purple-50',  text: 'text-purple-600',  border: 'border-purple-100',  dot: 'bg-purple-500' },
  orange: { bg: 'bg-orange-50',  text: 'text-orange-600',  border: 'border-orange-100',  dot: 'bg-orange-500' },
};

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [expanded, setExpanded] = useState<number | null>(null);

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-slate-900 section-padding text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="section-label text-blue-400"><span>Our Work</span></div>
            <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
              Built together with{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                industry leaders
              </span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              From industry giants like Rio Tinto to consumer AI platforms — our portfolio
              demonstrates deep expertise in mission-critical systems.
            </p>
          </div>
        </div>
      </section>

      {/* Filter tabs */}
      <div className="sticky top-16 z-40 bg-white border-b border-gray-100">
        <div className="container-custom">
          <div className="flex gap-1 py-3 overflow-x-auto">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeCategory === cat ? 'bg-blue-600 text-white' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((project) => {
              const accent = accentMap[project.accentColor as keyof typeof accentMap] || accentMap.blue;
              const isExpanded = expanded === project.id;
              return (
                <div key={project.id}
                  className={`bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 ${isExpanded ? 'shadow-xl' : 'shadow-sm hover:shadow-md'}`}>
                  {project.screenshot ? (
                    <div className="screenshot-container">
                      <img src={project.screenshot} alt={project.title} />
                    </div>
                  ) : (
                    <div className={`${accent.bg} px-6 pt-6 pb-4`}>
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className={`text-2xl font-bold ${accent.text} mb-1`}>{project.title}</h3>
                          <p className="text-gray-500 text-sm">{project.domain}</p>
                        </div>
                        {project.url && (
                          <a href={project.url} target="_blank" rel="noopener noreferrer"
                            className={`${accent.text} opacity-60 hover:opacity-100 transition-opacity`}>
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span key={tag} className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${accent.text} bg-white/70 border ${accent.border}`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`w-2 h-2 rounded-full ${accent.dot}`}></span>
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{project.client}</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{project.description}</p>

                    {isExpanded && (
                      <div className="mt-4 space-y-2.5">
                        <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Key Impacts</div>
                        {project.keyImpacts.map((impact, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <span className={`w-1.5 h-1.5 rounded-full ${accent.dot} mt-1.5 shrink-0`}></span>
                            <span className="text-sm text-gray-600">{impact}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <button onClick={() => setExpanded(isExpanded ? null : project.id)}
                      className={`mt-4 text-sm font-semibold flex items-center gap-1 transition-all ${accent.text} hover:gap-2`}>
                      {isExpanded ? 'Show less' : 'View details'}
                      <ArrowRight className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's build your next big project together</h2>
            <p className="text-slate-400 text-lg mb-8">Work with a team experienced in mission-critical systems.</p>
            <Link to="/contact">
              <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3 rounded-xl transition-colors">
                Start a Project <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
