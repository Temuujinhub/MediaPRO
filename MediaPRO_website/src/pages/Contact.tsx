import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Clock,
  Building2,
  Users,
  MessageSquare
} from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Office Address',
      details: [
        '#204, Arig Center, Building 10',
        'Jamyan Gun Street 5/2, 1st Khoroo',
        'Sukhbaatar District, Ulaanbaatar, Mongolia'
      ]
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      details: ['+976 99091911']
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      details: ['info@mediapro.mn']
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: 'Website',
      details: ['www.mediapro.mn']
    }
  ];

  const businessHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 2:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  const services = [
    {
      icon: <Building2 className="h-6 w-6" />,
      title: 'Enterprise Solutions',
      description: 'Custom ERP systems and high-availability platforms for complex industries'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'HR Technology',
      description: 'Workforce management and biometric integration solutions'
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: 'AI Automation',
      description: '24/7 chatbot and social commerce automation platforms'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white section-padding border-b">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Let's Discuss Your Next Project
            </h1>
            <p className="text-xl text-gray-600">
              Ready to optimize your operations? Contact our team today to explore 
              how we can deliver mission-critical solutions for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="corporate-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">
                  Send Us a Message
                </CardTitle>
                <p className="text-gray-600">
                  Tell us about your project requirements and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john.doe@company.com" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Your Company Name" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="+976 99091911" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Project Inquiry" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your project requirements, timeline, and any specific challenges you're facing..."
                    rows={6}
                  />
                </div>
                
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="corporate-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {info.title}
                        </h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-600">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className="corporate-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {businessHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-700">{schedule.day}</span>
                        <span className="text-gray-900 font-medium">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Services */}
              <Card className="corporate-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">
                    Our Services
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        {service.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {service.title}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Visit Our Office
            </h2>
            <p className="text-xl text-gray-600">
              Located in the heart of Ulaanbaatar's business district
            </p>
          </div>
          
          <Card className="corporate-shadow overflow-hidden">
            <div className="bg-gray-200 h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  Interactive Map
                </h3>
                <p className="text-gray-600 max-w-md">
                  #204, Arig Center, Building 10<br />
                  Jamyan Gun Street 5/2, 1st Khoroo<br />
                  Sukhbaatar District, Ulaanbaatar, Mongolia
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-900 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join industry leaders like Rio Tinto who trust us with their 
              mission-critical systems. Let's discuss your project today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-900">
                <Phone className="mr-2 h-5 w-5" />
                Call Now: +976 99091911
              </Button>
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                <Mail className="mr-2 h-5 w-5" />
                Email: info@mediapro.mn
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;