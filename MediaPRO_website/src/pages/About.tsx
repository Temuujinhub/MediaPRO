import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  Users, 
  Award, 
  Target, 
  BookOpen, 
  Shield,
  Building2,
  Bot,
  TrendingUp
} from 'lucide-react';

const About = () => {
  const milestones = [
    { year: '2013', event: 'Mediapro LLC founded' },
    { year: '2015', event: 'First enterprise client onboarded' },
    { year: '2016', event: 'Chatbot.mn AI platform deployed' },
    { year: '2018', event: 'Rio Tinto partnership established' },
    { year: '2020', event: 'OnlineHR.mn SaaS platform launched' },
    { year: '2024', event: 'Expanded to comprehensive holding company' }
  ];

  const subsidiaries = [
    {
      name: 'Megun Media',
      focus: 'Strategic PR & Marketing',
      description: 'Digital transformation strategy and brand management services that amplify market presence.',
      icon: <TrendingUp className="h-6 w-6" />,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      name: 'Chatbot.mn',
      focus: 'AI & Social Automation',
      description: '24/7 AI-driven customer service and social commerce automation platforms.',
      icon: <Bot className="h-6 w-6" />,
      color: 'bg-green-100 text-green-600'
    },
    {
      name: 'OnlineHR.mn',
      focus: 'Workforce Management Solutions',
      description: 'Cloud-based HR ecosystem with biometric integration and automated payroll processing.',
      icon: <Building2 className="h-6 w-6" />,
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  const values = [
    {
      title: 'Sustainable Talent',
      description: 'Our core engineering and management team has been stable for over a decade, ensuring continuity and deep expertise.',
      icon: <Users className="h-6 w-6" />
    },
    {
      title: 'Continuous Learning',
      description: 'We adhere to international standards (LMS, SCORM, Agile) and continuously upskill our staff.',
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      title: 'Reliability',
      description: 'We don\'t just build; we maintain. We provide lifetime support and DevOps services for our platforms.',
      icon: <Shield className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white section-padding border-b">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Stability, Experience, and Innovation
            </h1>
            <p className="text-xl text-gray-600">
              Over a decade of delivering mission-critical solutions that bridge 
              complex business processes with user-friendly digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Founded in 2013, Mediapro LLC has grown from a boutique agency into a 
                  comprehensive technology and media holding company. We bridge the gap 
                  between complex business processes and user-friendly digital solutions.
                </p>
                <p>
                  Our journey began with a simple mission: to deliver high-availability 
                  software systems that ensure operational continuity for businesses. 
                  Today, we're trusted by industry leaders like Rio Tinto to manage 
                  their most critical operations.
                </p>
                <p>
                  What sets us apart is our commitment to long-term partnerships. 
                  We don't just deliver projects—we become an integral part of our 
                  clients' success stories, providing ongoing support and evolution 
                  of their digital infrastructure.
                </p>
              </div>
            </div>
            <div>
              <Card className="corporate-shadow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Company Timeline</h3>
                  <div className="space-y-4">
                    {milestones.map((milestone, index) => (
                      <div key={index} className="flex items-center space-x-4">
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 min-w-[60px] justify-center">
                          {milestone.year}
                        </Badge>
                        <span className="text-gray-700">{milestone.event}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Structure */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Structure
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are the parent company and strategic investor in three specialized subsidiaries. 
              This ecosystem allows us to offer end-to-end solutions—from backend development 
              to frontend marketing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {subsidiaries.map((subsidiary, index) => (
              <Card key={index} className="corporate-shadow hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 ${subsidiary.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    {subsidiary.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {subsidiary.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-4">
                    {subsidiary.focus}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {subsidiary.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals leading our company's strategic direction, 
              technology solutions, and operational excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* CEO */}
            <Card className="corporate-shadow hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200">
                  <img 
                    src="./images/ceo_angarag_20251211_043859.png" 
                    alt="CEO Angarag.S" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Angarag.S
                </h3>
                <p className="text-blue-600 font-semibold mb-4">
                  Chief Executive Officer (CEO)
                </p>
                <p className="text-gray-600 text-sm">
                  Strategic leadership, client relationships, and business development
                </p>
              </CardContent>
            </Card>

            {/* CTO */}
            <Card className="corporate-shadow hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200">
                  <img 
                    src="./images/cto_lkhagvajargal_20251211_043908.png" 
                    alt="CTO Lkhagvajargal.P" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Lkhagvajargal.P
                </h3>
                <p className="text-blue-600 font-semibold mb-4">
                  Chief Technology Officer (CTO)
                </p>
                <p className="text-gray-600 text-sm">
                  Technology architecture, system design, and technical leadership
                </p>
              </CardContent>
            </Card>

            {/* Project Manager */}
            <Card className="corporate-shadow hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200">
                  <img 
                    src="./images/pm_bolor_erdene_20251211_043919.png" 
                    alt="Project Manager Bolor-Erdene.A" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Bolor-Erdene.A
                </h3>
                <p className="text-blue-600 font-semibold mb-4">
                  Project Manager
                </p>
                <p className="text-gray-600 text-sm">
                  Project coordination, implementation oversight, and team management
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Development Team */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Development Team
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Senior Backend - Zayadelger */}
            <Card className="corporate-shadow hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                  <img 
                    src="./images/senior_backend_zayadelger_20251211_043929.png" 
                    alt="Senior Backend Zayadelger.Z" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">
                  Zayadelger.Z
                </h4>
                <p className="text-blue-600 font-medium text-sm">
                  Senior Back-End Developer
                </p>
              </CardContent>
            </Card>

            {/* Senior Frontend - Temuulen */}
            <Card className="corporate-shadow hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                  <img 
                    src="./images/senior_frontend_temuulen_20251211_043938.png" 
                    alt="Senior Frontend Temuulen.Ch" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">
                  Temuulen.Ch
                </h4>
                <p className="text-blue-600 font-medium text-sm">
                  Senior Front-End Developer
                </p>
              </CardContent>
            </Card>

            {/* Senior Backend - Munkhat */}
            <Card className="corporate-shadow hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                  <img 
                    src="./images/senior_backend_munkhat_20251211_044000.png" 
                    alt="Senior Backend Munkhat.M" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">
                  Munkhat.M
                </h4>
                <p className="text-blue-600 font-medium text-sm">
                  Senior Back-End Developer
                </p>
              </CardContent>
            </Card>

            {/* Business Analyst - Temuujin */}
            <Card className="corporate-shadow hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                  <img 
                    src="./images/business_analyst_temuujin_20251211_043951.png" 
                    alt="Business Analyst Temuujin.S" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">
                  Temuujin.S
                </h4>
                <p className="text-blue-600 font-medium text-sm">
                  Business Analyst
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Frontend Team */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Frontend Development Team
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Frontend - Mandakhzaya */}
            <Card className="corporate-shadow hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-4 text-center">
                <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden bg-gray-200">
                  <img 
                    src="./images/frontend_mandakhzaya_20251211_044001.png" 
                    alt="Frontend Mandakhzaya.B" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-base font-bold text-gray-900 mb-1">
                  Mandakhzaya.B
                </h4>
                <p className="text-blue-600 font-medium text-xs">
                  Front-End Developer
                </p>
              </CardContent>
            </Card>

            {/* Frontend - Baasandulam */}
            <Card className="corporate-shadow hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-4 text-center">
                <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden bg-gray-200">
                  <img 
                    src="./images/frontend_baasandulam_20251211_044002.png" 
                    alt="Frontend Baasandulam.Ts" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-base font-bold text-gray-900 mb-1">
                  Baasandulam.Ts
                </h4>
                <p className="text-blue-600 font-medium text-xs">
                  Front-End Developer
                </p>
              </CardContent>
            </Card>

            {/* Frontend - Khuslenzaya */}
            <Card className="corporate-shadow hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-4 text-center">
                <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden bg-gray-200">
                  <img 
                    src="./images/frontend_khuslenzaya_20251211_044004.png" 
                    alt="Frontend Khuslenzaya.M" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-base font-bold text-gray-900 mb-1">
                  Khuslenzaya.M
                </h4>
                <p className="text-blue-600 font-medium text-xs">
                  Front-End Developer
                </p>
              </CardContent>
            </Card>

            {/* Frontend - Mendbayar */}
            <Card className="corporate-shadow hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-4 text-center">
                <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden bg-gray-200">
                  <img 
                    src="./images/frontend_mendbayar_20251211_044005.png" 
                    alt="Frontend Mendbayar.U" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-base font-bold text-gray-900 mb-1">
                  Mendbayar.U
                </h4>
                <p className="text-blue-600 font-medium text-xs">
                  Front-End Developer
                </p>
              </CardContent>
            </Card>

            {/* Frontend - Munkh-Orgil */}
            <Card className="corporate-shadow hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-4 text-center">
                <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-2xl">👤</span>
                </div>
                <h4 className="text-base font-bold text-gray-900 mb-1">
                  Munkh-Orgil.E
                </h4>
                <p className="text-blue-600 font-medium text-xs">
                  Front-End Developer
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Backend Developer */}
          <div className="text-center mb-8 mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Backend Development Team
            </h3>
          </div>

          <div className="flex justify-center">
            <Card className="corporate-shadow hover:shadow-xl transition-shadow duration-300 w-64">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                  <img 
                    src="./images/backend_enkhtushig_20251211_044003.png" 
                    alt="Backend Enkhtushig.T" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">
                  Enkhtushig.T
                </h4>
                <p className="text-blue-600 font-medium text-sm">
                  Back-End Developer
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Team & Capacity */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Team & Capacity
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on a foundation of experienced professionals who understand 
              the critical nature of enterprise systems and the importance of reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="corporate-shadow hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-blue-900 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">11+</div>
              <div className="text-blue-200">Years of Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">24K+</div>
              <div className="text-blue-200">Users Managed Daily</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">99.9%</div>
              <div className="text-blue-200">System Uptime</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">13</div>
              <div className="text-blue-200">Team Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Partner with Experience You Can Trust
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join the companies that rely on our decade of expertise to power 
              their most critical operations and digital transformation initiatives.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Start the Conversation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;