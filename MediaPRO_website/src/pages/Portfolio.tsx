import { useState, useEffect } from 'react';
import { ArrowRight, ExternalLink, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
import ProductArt, { ArtScene } from '@/components/ProductArt';

type Project = {
  id: string;
  title: string;
  client: string;
  domain: string;
  description: string;
  keyImpacts: string[];
  tags: string[];
  category: string;
  accentColor: string;
  screenshot?: string | null;
  url?: string | null;
  preview?: ArtScene;
};

// Fallback hardcoded data (shown when Supabase is not configured)
const FALLBACK_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'MACTR',
    client: 'Oyu Tolgoi (Rio Tinto)',
    domain: 'Workforce Logistics & Accommodation',
    description: 'A mission-critical enterprise platform powering the complete workforce lifecycle at one of the world\'s largest copper mines. Unifies flight scheduling, bus routing, accommodation booking, and attendance tracking for 24,000+ workers across multiple camps — operating without interruption 24/7, 365 days a year.',
    keyImpacts: [
      'Intelligent multi-constraint booking engine eliminates double-booking across flights, buses, and accommodation rooms simultaneously',
      '24/7 uninterrupted operations — flight scheduling, surface transport, and camp accommodation managed from a single unified platform',
      'Real-time seat and room allocation driven by live attendance data, shift rosters, and flight manifests',
      'Supports complex rotational workforce patterns — FIFO/DIDO scheduling for underground and open-pit operations',
      'Integrated reporting dashboard giving HR, logistics, and operations teams full visibility across all workforce movements',
    ],
    tags: ['Enterprise', 'Logistics', 'Real-time', '24/7', 'Mining'],
    category: 'Enterprise',
    accentColor: 'blue',
    url: 'https://mastrsys.com',
    preview: 'roster',
  },
  {
    id: '2',
    title: 'Oasis',
    client: 'Oyu Tolgoi — oasis.ot.mn',
    domain: 'Procurement Flow Management',
    description: 'A fully digitized procurement automation platform built for one of the world\'s largest copper mining operations. Replaces paper-based approval chains with structured digital workflows — covering purchase requisitions, supplier communication, multi-level authorizations, and audit-ready record keeping — all conforming to Rio Tinto\'s global compliance standards.',
    keyImpacts: [
      'End-to-end digital procurement: from requisition creation to supplier approval and purchase order issuance',
      'Multi-level authorization workflows with role-based access control and delegation management',
      'Full audit trail on every procurement action — meeting Rio Tinto\'s global corporate governance standards',
      'Supplier portal for bid submission, document exchange, and status tracking in real time',
      'Automated compliance reporting reducing audit preparation time from weeks to hours',
    ],
    tags: ['Procurement', 'Automation', 'Compliance', 'Mining', 'Enterprise'],
    category: 'Enterprise',
    accentColor: 'green',
    url: 'https://oasis.ot.mn',
    preview: 'pipeline',
  },
  {
    id: '3',
    title: 'OnlineHR.mn',
    client: 'SaaS Platform — onlinehr.mn',
    domain: 'HR Tech (SaaS)',
    description: 'Mongolia\'s comprehensive cloud-based HR management platform serving multi-branch organizations across industries. OnlineHR.mn automates the full employee lifecycle — from recruitment and onboarding to attendance tracking, payroll calculation, and offboarding — with deep biometric device integration and Mongolian labor law compliance built in.',
    keyImpacts: [
      'Native biometric device integration — FaceID and fingerprint terminals sync automatically for real-time attendance and time tracking',
      'Fully automated payroll engine — calculates salary, tax, social insurance deductions, and overtime based on attendance data',
      'Complete employee lifecycle management: recruitment → onboarding → performance → payroll → offboarding',
      'Multi-branch and multi-organization architecture — centralized HR management across all departments and locations',
      'Employee self-service portal — staff can view payslips, submit leave requests, and track attendance from any device',
      'Built-in Mongolian labor law compliance — automated social insurance, income tax, and statutory reporting',
    ],
    tags: ['SaaS', 'HR Tech', 'Biometric', 'Cloud', 'Payroll'],
    category: 'SaaS',
    accentColor: 'purple',
    url: 'https://onlinehr.mn',
    preview: 'hr',
  },
  {
    id: '4',
    title: 'Chatbot.mn',
    client: 'AI Automation Platform — chatbot.mn',
    domain: 'AI & Social Commerce Automation',
    description: 'Mongolia\'s leading AI-powered business automation platform, trusted by 3,500+ organizations across the public and private sectors. Chatbot.mn enables businesses to automate customer service, run in-chat online stores, and manage orders — all through Facebook Messenger, Telegram, and web chat — without writing a single line of code.',
    keyImpacts: [
      '3,500+ organizations across Mongolia rely on Chatbot.mn for daily customer service, marketing, and sales automation',
      'Built-in Mongolian NLP — understands and responds naturally in Mongolian language, developed in partnership with computational linguists',
      'Integrated in-chat online store — businesses can list products by category, manage inventory, and accept orders directly within Messenger',
      'Native QPay and SocialPay integration — customers complete purchases without leaving the chat conversation',
      'Simultaneous deployment across Facebook Messenger, Telegram, and web chat from a single management dashboard',
      'Real-time analytics dashboard — track conversation volume, user behavior, conversion rates, and sales performance',
      'No-code chatbot builder — marketing teams can update flows, add products, and launch campaigns independently',
    ],
    tags: ['AI', 'Chatbot', 'Social Commerce', 'NLP', 'No-Code'],
    category: 'AI',
    accentColor: 'orange',
    url: 'https://chatbot.mn',
    preview: 'chat',
  },
  {
    id: '5',
    title: 'Easy Parking',
    client: 'Smart City Solutions',
    domain: 'Smart Parking & IoT Gate Management',
    description: 'A next-generation smart parking platform transforming urban parking infrastructure with IoT-connected gate systems, QR-based reservations, and seamless digital payments. Drivers can find, book, and pay for parking — all from their phone — while operators gain full real-time control over entry, exit, and occupancy.',
    keyImpacts: [
      'QR code-based parking reservation — drivers scan to reserve a spot in advance and arrive to an open gate',
      'Fully integrated with QPay, SocialPay, and major Mongolian bank payment methods for instant contactless payment',
      'IoT-powered gate automation — barriers open and close automatically based on verified booking and payment status',
      'Real-time occupancy monitoring — operators track available, occupied, and reserved spaces from a live dashboard',
      'Supports both pre-booking and walk-in modes — flexible for mixed parking environments',
      'Digital receipts, usage history, and reporting for parking operators and enterprise fleet managers',
    ],
    tags: ['Smart City', 'IoT', 'Payment', 'QR', 'Infrastructure'],
    category: 'IoT',
    accentColor: 'green',
    url: 'https://site.easy-parking.mn',
    preview: 'parking',
  },
  {
    id: '6',
    title: 'Fleex.mn',
    client: 'Enterprise Fleet Management — fleex.mn',
    domain: 'Mining · Urban Delivery · Public Transport · Rental Fleets',
    description: 'An enterprise fleet management platform engineered to improve safety, efficiency, and control across mining operations, urban delivery, public transport, and rental fleets. Fleex.mn combines real-time telematics, AI-driven driver analytics, and life-safety automation — purpose-built for Mongolia\'s harsh operating environment with Mongolian-language UI, in-country hosting, and ERP/1C API connectivity out of the box.',
    keyImpacts: [
      'Lone-worker auto-protection — automatically detects driver risk when no response is received for 2 hours and escalates to dispatch',
      'PANIC alert — SOS button broadcasts an SMS with a Google Maps location link to every driver within a 5 km radius in under 30 seconds',
      'Fuel-probe & CAN-bus integration — real-time fuel-level and engine telemetry from the vehicle bus, exposing theft and leakage the moment they happen',
      'Dispatcher live Kanban — all vehicles on a single board; idle time × tariff is auto-computed and exported to Excel for billing',
      'AI-driven driver behavior analytics — per-driver scoring of harsh braking, rapid acceleration, speeding, idle time, and an eco-driving leaderboard',
      'Remote vehicle control — engine block/unblock, geofence-based billing zones, and dash-cam video evidence for incidents and audits',
      'Live GPS tracking, geofencing, and route-deviation alerts across thousands of vehicles on a single mission-critical map',
      'Predictive maintenance — mileage and engine-hour driven alerts that prevent unplanned downtime',
      'Multi-organization architecture with role-based access — enterprise groups manage subsidiaries independently',
      'Mongolian-language UI, hosted in Mongolia, engineered to operate reliably in −40 °C winter conditions',
      'Open API for ERP and 1C integration — fleet data flows directly into corporate finance and operations systems',
    ],
    tags: ['Fleet', 'Telematics', 'CAN-bus', 'PANIC/SOS', 'AI', 'ERP/1C', 'Enterprise'],
    category: 'Enterprise',
    accentColor: 'blue',
    url: 'https://fleex.mn',
    preview: 'map',
  },
  {
    id: '8',
    title: 'Flux.mn',
    client: 'Flux Monitor — flux.mn',
    domain: 'Fuel Station & Depot Monitoring Platform',
    description: 'A unified monitoring and automation platform for fuel stations (ШТС) and fuel depots — bringing every device, transaction, and report under one mission-critical roof. Flux Monitor automates the full station lifecycle from tank intake to point-of-sale, integrating ATG tank gauges, dispensers, POS terminals, eBarimt VAT receipts, NFC cards, and RFID readers through a single IoT controller.',
    keyImpacts: [
      'Unified IoT controller — integrates ATG tank gauges, dispensers, POS terminals, eBarimt VAT printers, NFC cards, and RFID readers into one platform',
      'Real-time monitoring — dispenser status, fuel consumption, revenue, and financial reconciliation visible the moment a transaction completes',
      'Safety & loss prevention — automated detection of tank integrity issues, leakage, and theft, with instant alert escalation',
      'Financial integration — POS, eBarimt, and VAT receipt issued together in one flow; reports generated automatically without Excel',
      'Role-based UI — purpose-built views for super admin, station manager, finance officer, and pump operator',
      'Sub-5 second transaction latency — fast enough to keep the pump queue moving even during peak hours',
      '24/7 online monitoring across multi-station and depot networks — central command for distributed fuel operations',
      '100% audit log retention — every transaction, configuration change, and alarm is recorded for compliance and forensics',
      'Native integration with Fleex.mn — fleet operators see fuel-card transactions, consumption per vehicle, and station data inside one unified dashboard',
      'Regulatory and tax compliance reporting built for the Mongolian energy sector',
    ],
    tags: ['ATG', 'POS', 'eBarimt', 'NFC', 'RFID', 'IoT', 'Energy'],
    category: 'IoT',
    accentColor: 'orange',
    url: 'https://flux.mn',
    preview: 'gauges',
  },
  {
    id: '7',
    title: 'INTELLEXI',
    client: 'intellexitech.online (MNTech)',
    domain: 'Data Lakehouse / CRM / AI Analytics',
    description: 'An enterprise-grade data intelligence platform combining a Medallion Data Lakehouse architecture, CRM, and AI-powered analytics into a unified system. INTELLEXI transforms raw business data into actionable intelligence — enabling organizations to understand customers deeply, automate targeted marketing, and make decisions backed by real data.',
    keyImpacts: [
      'Medallion architecture (Bronze → Silver → Gold) with automated ETL pipelines — raw data transformed into clean, analytics-ready datasets',
      '9-tier customer segmentation engine — classifies customers by purchase behavior, activity frequency, lifetime value, and engagement signals',
      'AI-powered mass marketing campaigns — personalized Email, SMS, and Push notifications triggered by customer segment and behavior',
      'Unified CRM layer — full customer profile with interaction history, purchase records, and predictive lifetime value scoring',
      'Row Level Security and JWT-based authentication — strict organizational data isolation ensuring multi-tenant data privacy',
      'Interactive analytics dashboards — business teams can explore KPIs, cohort trends, and segment performance without SQL knowledge',
    ],
    tags: ['Data Lakehouse', 'AI', 'CRM', 'Analytics', 'Security'],
    category: 'AI',
    accentColor: 'purple',
    url: 'https://intellexitech.online',
    preview: 'analytics',
  },
  {
    id: '9',
    title: 'Voyage',
    client: 'E-Boarding Platform — voyage.mn',
    domain: 'Airline E-Boarding & Ground Operations',
    description: 'A real-time e-boarding platform digitizing airline ground operations from check-in to departure. Voyage gives gate agents and operations staff a single live view of every flight — passenger manifest, seat assignment, baggage entry, and boarding progress — with instant delay notifications and secure, millisecond-latency connectivity to airline systems.',
    keyImpacts: [
      'Live boarding progress per flight and gate — agents see boarded/total counts update in real time as passengers are processed',
      'Digital passenger manifest with instant check-in status, seat assignment, and one-click passenger processing at the gate',
      'Integrated baggage entry — weight and piece registration captured directly during check-in flow',
      'Flight delay notifications broadcast instantly to all operations staff with reason and revised departure time',
      'Role-based access for gate agents, staff users, and administrators, with full reports and audit history',
      'Secure connection to airline systems with millisecond-level latency, engineered for time-critical departure windows',
    ],
    tags: ['Aviation', 'E-Boarding', 'Real-time', 'Operations'],
    category: 'Enterprise',
    accentColor: 'blue',
    url: 'https://voyage.mn',
    preview: 'boarding',
  },
];

const categories = ['All', 'Enterprise', 'SaaS', 'AI', 'IoT'];

const accentMap = {
  blue:   { bg: 'bg-[#38bdf8]/10',   text: 'text-[#38bdf8]',   border: 'border-[#38bdf8]/30',   dot: 'bg-[#38bdf8]' },
  green:  { bg: 'bg-emerald-400/10',    text: 'text-emerald-300',    border: 'border-emerald-400/30',    dot: 'bg-emerald-400' },
  purple: { bg: 'bg-[#6366f1]/10',   text: 'text-[#a5b4fc]',   border: 'border-[#6366f1]/30',   dot: 'bg-[#a5b4fc]' },
  orange: { bg: 'bg-orange-400/10',  text: 'text-orange-300',  border: 'border-orange-400/30',  dot: 'bg-orange-400' },
};

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [expanded, setExpanded] = useState<string | null>(null);
  const [projects, setProjects] = useState<Project[]>(FALLBACK_PROJECTS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const { data, error } = await supabase
          .from('portfolio_items')
          .select('*')
          .order('order_index', { ascending: true });

        if (!error && data && data.length > 0) {
          // Merge: hardcoded projects are the primary source of rich content.
          // Supabase only contributes screenshots, URLs, and any brand-new projects
          // added via the admin panel that don't exist in the hardcoded list.
          const merged = FALLBACK_PROJECTS.map((fallback) => {
            const db = data.find((d) => d.title === fallback.title);
            if (!db) return fallback;
            return {
              ...fallback,
              // Only override description/impacts if the DB version is richer
              description: db.description && db.description.length > fallback.description.length
                ? db.description
                : fallback.description,
              keyImpacts: db.key_impacts && db.key_impacts.length > 0 && db.key_impacts[0].length > fallback.keyImpacts[0]?.length
                ? db.key_impacts
                : fallback.keyImpacts,
              tags: db.tags && db.tags.length >= fallback.tags.length ? db.tags : fallback.tags,
              // Always take screenshot and URL from DB if available
              screenshot: db.screenshot_url || fallback.screenshot,
              url: db.url || fallback.url,
            };
          });
          // Append any new projects from DB that aren't in the hardcoded list
          const newProjects = data
            .filter((d) => !FALLBACK_PROJECTS.find((f) => f.title === d.title))
            .map((item) => ({
              id: item.id,
              title: item.title,
              client: item.client,
              domain: item.domain,
              description: item.description,
              keyImpacts: item.key_impacts ?? [],
              tags: item.tags ?? [],
              category: item.category,
              accentColor: item.accent_color,
              screenshot: item.screenshot_url,
              url: item.url,
            }));
          setProjects([...merged, ...newProjects]);
        }
        // If error or no data, keep FALLBACK_PROJECTS
      } catch {
        // Keep fallback data silently
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="pg-page">
      {/* Header */}
      <section className="hero-gradient section-padding text-white relative overflow-hidden">
        <div className="pg-orb pg-orb-cyan orb-drift-1 w-[420px] h-[420px] -top-32 -right-24" aria-hidden="true"></div>
        {/* Abstract decorative pattern */}
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none" aria-hidden="true">
          <svg className="w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="portfolio-grid" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
              <radialGradient id="portfolio-glow" cx="80%" cy="20%" r="60%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#portfolio-grid)" />
            <rect width="100%" height="100%" fill="url(#portfolio-glow)" />
          </svg>
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <div className="section-label"><span>Our Work · Mission-Critical Portfolio</span></div>
            <h1 className="pg-heading text-4xl md:text-5xl mb-5 leading-tight text-balance">
              Powering Mongolia's{' '}
              <span className="gradient-text">most critical digital infrastructure</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed mb-6">
              From national airlines and railways to the country's largest telecom, mining, and
              multi-sector enterprises — we design, build, and maintain high-load systems that
              keep mission-critical services online <strong className="text-white">24/7, 365 days a year</strong>.
            </p>
            <div className="flex flex-wrap gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#38bdf8]/10 border border-[#38bdf8]/30 text-[#7dd3fc]">
                <span className="w-1.5 h-1.5 bg-[#38bdf8] rounded-full" /> 10+ Years
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 border border-emerald-400/30 text-emerald-300">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" /> 30+ Specialists
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 border border-purple-400/30 text-purple-300">
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" /> 99.9% Uptime
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-orange-500/10 border border-orange-400/30 text-orange-300">
                <span className="w-1.5 h-1.5 bg-orange-400 rounded-full" /> Mission-Critical
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter tabs */}
      <div className="sticky top-16 z-40 bg-[#04070f]/95 backdrop-blur-md border-b border-white/10">
        <div className="container-custom">
          <div className="flex gap-1 py-3 overflow-x-auto">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`shrink-0 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide transition-all ${activeCategory === cat ? 'text-white' : 'text-white/50 hover:text-white hover:bg-white/5'}`}
                style={activeCategory === cat ? { background: 'var(--pg-gradient)' } : undefined}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects grid */}
      <section className="reveal section-padding pg-section">
        <div className="container-custom">
          {loading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-[#38bdf8]" />
            </div>
          ) : (
            <div className="reveal-stagger grid grid-cols-1 md:grid-cols-2 gap-6">
              {filtered.map((project, index) => {
                const accent = accentMap[project.accentColor as keyof typeof accentMap] || accentMap.blue;
                const isExpanded = expanded === project.id;
                const urlLabel = project.url
                  ? project.url.replace(/^https?:\/\//, '')
                  : `${project.title.toLowerCase().replace(/[^a-z0-9.]/g, '')}.app`;
                return (
                  <div key={project.id}
                    className={`feature-card group !p-0 overflow-visible transition-all duration-300 ${isExpanded ? '!border-[#38bdf8]/50 shadow-2xl' : ''}`}>

                    {/* 3D floating blueprint art — alternates tilt direction per card */}
                    <div className="showcase-3d px-5 pt-6" data-side={index % 2 ? 'right' : 'left'}>
                      <div className="showcase-frame">
                        {project.screenshot ? (
                          <div className="screenshot-container !rounded-none">
                            <img src={project.screenshot} alt={project.title} />
                          </div>
                        ) : (
                          <ProductArt
                            scene={project.preview ?? 'roster'}
                            accentColor={project.accentColor}
                            label={urlLabel}
                            figure={index + 1}
                          />
                        )}
                      </div>
                    </div>

                    <div className="px-6 pt-5 pb-0">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div>
                          <h3 className={`text-2xl font-bold ${accent.text} mb-1`}>{project.title}</h3>
                          <p className="text-white/50 text-sm">{project.domain}</p>
                        </div>
                        {project.url && (
                          <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.title}`}
                            className={`${accent.text} opacity-60 hover:opacity-100 transition-opacity mt-1.5`}>
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span key={tag} className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${accent.text} bg-white/5 border ${accent.border}`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`w-2 h-2 rounded-full ${accent.dot}`}></span>
                        <span className="text-xs font-semibold text-white/40 uppercase tracking-wider">{project.client}</span>
                      </div>
                      <p className="text-white/55 text-sm leading-relaxed mb-4">{project.description}</p>

                      {isExpanded && (
                        <div className="mt-4 space-y-2.5">
                          <div className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3">Key Impacts</div>
                          {project.keyImpacts.map((impact, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <span className={`w-1.5 h-1.5 rounded-full ${accent.dot} mt-1.5 shrink-0`}></span>
                              <span className="text-sm text-white/55">{impact}</span>
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
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="reveal section-padding pg-section-alt text-white relative overflow-hidden">
        <div className="pg-orb pg-orb-cyan orb-drift-1 w-[420px] h-[420px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-25" aria-hidden="true"></div>
        <div className="container-custom relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="pg-heading text-3xl md:text-4xl mb-4">Let's build your next big project together</h2>
            <p className="text-white/50 text-lg mb-8">From 24,000-worker logistics systems to AI platforms powering 3,500+ businesses — we engineer solutions that scale with your ambitions.</p>
            <Link to="/contact" className="btn-pg">
              Start a Project <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
