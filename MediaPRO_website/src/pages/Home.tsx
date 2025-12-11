import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Building2, Bot, Users } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Integrated Technology & Media Solutions for a Digital World
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Since 2013, we have been delivering high-availability software systems, 
              strategic marketing, and workforce automation. We ensure operational 
              continuity for your business.
            </p>
            <Link to="/portfolio">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 py-3">
                View Our Portfolio
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Power of 3 Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <img 
                src="./images/media PRO logo NOTEXT.png" 
                alt="Mediapro Logo" 
                className="h-16 w-auto"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              One Partner, Three Strategic Pillars
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mediapro is a strategic holding company empowering three industry leaders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Megun Media */}
            <Card className="corporate-shadow hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Megun Media</h3>
                <p className="text-gray-600 text-lg">
                  Strategic PR & Marketing solutions that amplify your brand presence 
                  and drive meaningful engagement in the digital landscape.
                </p>
              </CardContent>
            </Card>

            {/* Chatbot.mn */}
            <Card className="corporate-shadow hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Bot className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Chatbot.mn</h3>
                <p className="text-gray-600 text-lg">
                  AI & Social Automation platforms that revolutionize customer service 
                  with intelligent, 24/7 automated solutions.
                </p>
              </CardContent>
            </Card>

            {/* OnlineHR.mn */}
            <Card className="corporate-shadow hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">OnlineHR.mn</h3>
                <p className="text-gray-600 text-lg">
                  Workforce Management Solutions that streamline HR processes 
                  and optimize organizational efficiency.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-900 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join industry leaders like Rio Tinto who trust us with their 
              mission-critical systems and digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/portfolio">
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-900">
                  View Our Work
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;