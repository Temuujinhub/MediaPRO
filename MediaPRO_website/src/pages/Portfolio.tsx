import { useState, useEffect } from 'react';
import { ArrowRight, ExternalLink, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '@/lib/supabase';

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
  },
  {
    id: '6',
    title: 'CLIX.mn',
    client: 'Fleet Management Platform — clix.mn',
    domain: 'GPS Tracking & Fleet Management',
    description: 'A full-scale real-time fleet intelligence platform monitoring 2,800+ vehicles across 20+ organizations in Mongolia. CLIX.mn gives fleet managers complete visibility into vehicle location, driver behavior, fuel consumption, and route efficiency — enabling data-driven decisions that reduce costs and improve operational safety.',
    keyImpacts: [
      'Live GPS tracking of 2,800+ active vehicles across 20+ organizations — all visible on a single real-time map',
      'Continuous route monitoring with geofencing alerts — instant notifications when vehicles deviate from assigned routes or enter restricted zones',
      'Driver behavior analytics — scoring system tracking harsh braking, rapid acceleration, speeding, and idle time',
      'Automated fuel consumption reports — identify inefficiencies, detect fuel theft, and benchmark consumption across fleet',
      'Scheduled maintenance alerts based on mileage and engine hours — reducing unexpected breakdowns and downtime',
      'Multi-organization architecture — each client manages their own fleet independently with role-based access control',
    ],
    tags: ['GPS', 'Fleet', 'IoT', 'Real-time', 'Enterprise'],
    category: 'Enterprise',
    accentColor: 'blue',
    url: 'https://clix.mn',
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
          setProjects(data.map((item) => ({
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
          })));
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
              From powering Rio Tinto's 24,000-strong mine workforce to serving 3,500+ businesses
              with AI automation — our portfolio proves what's possible when deep engineering
              meets real-world complexity.
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
          {loading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-blue-400" />
            </div>
          ) : (
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
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's build your next big project together</h2>
            <p className="text-slate-400 text-lg mb-8">From 24,000-worker logistics systems to AI platforms powering 3,500+ businesses — we engineer solutions that scale with your ambitions.</p>
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
