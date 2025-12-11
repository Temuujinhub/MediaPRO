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
      description: 'We build bespoke, high-availability systems for complex industries. From Workforce Logistics (MACTR) to Procurement Automation (Oasis), we engineer solutions that handle massive data loads and critical workflows.',
      icon: <Server className="h-8 w-8" />,
      features: [
        'Mission-critical system architecture',
        'High-availability infrastructure (99.9% uptime)',
        'Massive data processing capabilities',
        'Real-time workflow automation',
        'Enterprise-grade security',
        'Scalable cloud solutions'
      ],
      examples: ['MACTR - 24,000+ employee logistics', 'Oasis - Enterprise procurement flows'],
      color: 'blue'
    },
    {
      id: 2,
      title: 'HR Technology',
      description: 'Digitize your workforce with our OnlineHR ecosystem—automating attendance, payroll, and compliance while integrating seamlessly with biometric systems.',
      icon: <Users className="h-8 w-8" />,
      features: [
        'Biometric integration (FaceID/Fingerprint)',
        'Automated time-tracking',
        'Payroll processing automation',
        'Compliance management',
        'Employee self-service portals',
        'Advanced reporting & analytics'
      ],
      examples: ['OnlineHR.mn - Multi-industry SaaS platform'],
      color: 'green'
    },
    {
      id: 3,
      title: 'AI & Social Commerce',
      description: 'Intelligent automation for customer service and sales via Chatbot.mn. Revolutionary 24/7 AI-driven solutions that enhance customer engagement and drive conversions.',
      icon: <Bot className="h-8 w-8" />,
      features: [
        '24/7 AI customer service',
        'Social commerce integration',
        'Multi-platform chatbot deployment',
        'Natural language processing',
        'Automated sales funnels',
        'Customer behavior analytics'
      ],
      examples: ['Chatbot.mn - AI automation platform', 'Easy Parking - Smart payment integration'],
      color: 'purple'
    },
    {
      id: 4,
      title: 'Strategic Consulting',
      description: 'Powered by Megun Media, we provide digital transformation strategy and brand management. Comprehensive consulting that bridges technology and business objectives.',
      icon: <TrendingUp className="h-8 w-8" />,
      features: [
        'Digital transformation roadmaps',
        'Technology strategy consulting',
        'Brand positioning & management',
        'Market analysis & insights',
        'Change management support',
        'ROI optimization strategies'
      ],
      examples: ['Strategic PR & Marketing solutions', 'Digital transformation consulting'],
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
              Comprehensive Technology Solutions
            </h1>
            <p className="text-xl text-gray-600">
              From enterprise systems to AI automation, we deliver end-to-end solutions 
              that transform how businesses operate in the digital age.
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
              Ready to Modernize Your Operations?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Let's discuss how our proven solutions can transform your business 
              processes and drive operational excellence.
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