import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Truck, ShoppingCart, Bot, Car } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'MACTR: Workforce Logistics & Accommodation System',
      client: 'Oyu Tolgoi (Rio Tinto)',
      domain: 'Mining Logistics / Workforce Management',
      icon: <Truck className="h-8 w-8" />,
      description: 'A mission-critical system designed to manage the end-to-end movement of over 24,000 employees. It integrates roster management, flight scheduling, and accommodation booking into a single dynamic platform.',
      keyImpacts: [
        'Zero-Conflict Booking: Eliminates room and seat double-bookings using advanced logic',
        '24/7 Operations: Ensures continuous uptime for site operations, managing shifting rosters and transport via air and ground',
        'Cost Control: Reduces wastage by optimizing room and seat allocation based on real-time data'
      ],
      tags: ['Enterprise', 'Logistics', 'Real-time', '24/7 Operations']
    },
    {
      id: 2,
      title: 'Oasis: Procurement Flow Management System',
      client: 'Oyu Tolgoi (oasis.ot.mn)',
      domain: 'Supply Chain / Procurement Automation',
      icon: <ShoppingCart className="h-8 w-8" />,
      description: 'A comprehensive system developed to streamline and automate the massive purchasing workflows of a major mining project. It manages the approval flows, vendor interactions, and procurement lifecycle.',
      keyImpacts: [
        'Process Optimization: Digitized complex purchasing workflows to increase transparency and speed',
        'Compliance: Ensures all procurement activities meet strict corporate auditing standards'
      ],
      tags: ['Procurement', 'Automation', 'Compliance', 'Enterprise']
    },
    {
      id: 3,
      title: 'OnlineHR.mn',
      client: 'SaaS Platform',
      domain: 'HR Tech (SaaS)',
      icon: <Building className="h-8 w-8" />,
      description: 'A cloud-based Human Resource Management ecosystem used by diverse organizations across multiple industries.',
      keyImpacts: [
        'Seamless integration with biometric devices (FaceID/Fingerprint) for automated time-tracking and payroll processing',
        'Comprehensive HR workflow automation from recruitment to retirement'
      ],
      tags: ['SaaS', 'HR Tech', 'Biometric', 'Cloud']
    },
    {
      id: 4,
      title: 'Chatbot.mn',
      client: 'AI Automation Platform',
      domain: 'AI & Social Commerce Automation',
      icon: <Bot className="h-8 w-8" />,
      description: 'Revolutionizing customer service with 24/7 AI-driven social commerce tools that enhance customer engagement and drive conversions across multiple platforms.',
      keyImpacts: [
        '24/7 AI Customer Service: Automated customer support with natural language processing',
        'Social Commerce Integration: Seamless integration with social media platforms for direct sales',
        'Multi-platform Deployment: Supports Facebook Messenger, Telegram, and web chat interfaces',
        'Analytics & Insights: Real-time customer behavior analysis and engagement metrics'
      ],
      tags: ['AI', 'Chatbot', 'Social Commerce', 'NLP']
    },
    {
      id: 5,
      title: 'Easy Parking (easy-parking.mn)',
      client: 'Smart City Solutions',
      domain: 'Smart Parking & Payment Systems',
      icon: <Car className="h-8 w-8" />,
      description: 'Integrated smart parking solution with QPay/SocialPay payment gateways for automated access control and seamless parking management.',
      keyImpacts: [
        'QR Code Integration: Quick parking reservations and payments via QR scanning',
        'Payment Gateway Integration: Supports QPay, SocialPay, and other local payment methods',
        'Real-time Availability: Live parking space monitoring and availability updates',
        'IoT Barrier Control: Automated entry/exit control with IoT-enabled barriers',
        'Time-based Pricing: Dynamic pricing based on duration and peak hours'
      ],
      tags: ['Smart City', 'IoT', 'Payment Integration', 'Parking Management']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white section-padding border-b">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Proven Track Record in High-Stakes Mining & Enterprise Sectors
            </h1>
            <p className="text-xl text-gray-600">
              Our portfolio demonstrates expertise in mission-critical systems that handle 
              massive scale operations for industry leaders like Rio Tinto.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-12">
            {projects.map((project, index) => (
              <Card key={project.id} className="corporate-shadow hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 rounded-lg flex items-center justify-center ${
                        index % 4 === 0 ? 'bg-blue-100 text-blue-600' :
                        index % 4 === 1 ? 'bg-green-100 text-green-600' :
                        index % 4 === 2 ? 'bg-purple-100 text-purple-600' :
                        'bg-orange-100 text-orange-600'
                      }`}>
                        {project.icon}
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-gray-900 mb-2">
                          {project.title}
                        </CardTitle>
                        <div className="space-y-1">
                          <p className="text-lg font-semibold text-blue-600">
                            {project.client}
                          </p>
                          <p className="text-gray-600">
                            {project.domain}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-blue-50 text-blue-700">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Impact:</h4>
                    <ul className="space-y-3">
                      {project.keyImpacts.map((impact, impactIndex) => (
                        <li key={impactIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{impact}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-900 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready for Your Next Mission-Critical Project?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Let's discuss how we can deliver high-availability solutions 
              that ensure operational continuity for your business.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center px-8 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;