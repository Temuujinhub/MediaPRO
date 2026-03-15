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
  Zap 
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
      <section className="bg-white section-padding border-b">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Digital Innovation & Technologies
            </h1>
            <p className="text-xl text-gray-600">
              MediaPRO is at the leading edge of digital immersion — from enterprise systems
              powering the world's largest copper mines to AI platforms serving 3,500+ businesses.
              We help our customers achieve their best performance through technology that actually works.
            </p>
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
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built on Proven Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage industry-leading technologies and frameworks to ensure 
              reliability, scalability, and future-proof solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Database className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-gray-900">Enterprise Databases</h3>
              <p className="text-gray-600 text-sm mt-1">PostgreSQL, MongoDB, Redis</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-gray-900">Security First</h3>
              <p className="text-gray-600 text-sm mt-1">OAuth, JWT, Encryption</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-gray-900">Real-time Systems</h3>
              <p className="text-gray-600 text-sm mt-1">WebSockets, Event Streaming</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-gray-900">High Performance</h3>
              <p className="text-gray-600 text-sm mt-1">Microservices, CDN, Caching</p>
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