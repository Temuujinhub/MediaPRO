import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  Code, 
  Palette, 
  BarChart3,
  Mail
} from 'lucide-react';

const Careers = () => {
  const openPositions = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Ulaanbaatar, Mongolia',
      type: 'Full-time',
      experience: '5+ years',
      icon: <Code className="h-6 w-6" />,
      description: 'Join our core engineering team to build mission-critical systems for enterprise clients like Rio Tinto.',
      requirements: [
        'Strong experience with React, Node.js, and PostgreSQL',
        'Experience with high-availability system architecture',
        'Knowledge of DevOps practices and cloud platforms',
        'Excellent problem-solving and communication skills'
      ],
      responsibilities: [
        'Design and develop scalable enterprise applications',
        'Collaborate with cross-functional teams on system architecture',
        'Ensure code quality and system reliability',
        'Mentor junior developers and contribute to technical decisions'
      ]
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Ulaanbaatar, Mongolia',
      type: 'Full-time',
      experience: '3+ years',
      icon: <Palette className="h-6 w-6" />,
      description: 'Create intuitive and engaging user experiences for our enterprise software solutions.',
      requirements: [
        'Proficiency in Figma, Adobe Creative Suite',
        'Strong portfolio demonstrating enterprise UI/UX work',
        'Understanding of user-centered design principles',
        'Experience with design systems and component libraries'
      ],
      responsibilities: [
        'Design user interfaces for complex enterprise applications',
        'Conduct user research and usability testing',
        'Collaborate with developers to ensure design implementation',
        'Maintain and evolve design systems across products'
      ]
    },
    {
      id: 3,
      title: 'Business Analyst',
      department: 'Strategy',
      location: 'Ulaanbaatar, Mongolia',
      type: 'Full-time',
      experience: '4+ years',
      icon: <BarChart3 className="h-6 w-6" />,
      description: 'Bridge business requirements with technical solutions for our enterprise clients.',
      requirements: [
        'Strong analytical and problem-solving skills',
        'Experience with enterprise software requirements gathering',
        'Knowledge of business process modeling',
        'Excellent communication and stakeholder management skills'
      ],
      responsibilities: [
        'Gather and analyze business requirements from clients',
        'Create detailed functional specifications',
        'Facilitate communication between business and technical teams',
        'Support project management and delivery activities'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Competitive Compensation',
      description: 'Market-leading salaries with performance-based bonuses',
      icon: <DollarSign className="h-6 w-6" />
    },
    {
      title: 'Professional Growth',
      description: 'Continuous learning opportunities and international standard training',
      icon: <Users className="h-6 w-6" />
    },
    {
      title: 'Flexible Work',
      description: 'Hybrid work options and flexible scheduling',
      icon: <Clock className="h-6 w-6" />
    },
    {
      title: 'Great Location',
      description: 'Modern office in the heart of Ulaanbaatar',
      icon: <MapPin className="h-6 w-6" />
    }
  ];

  const getDepartmentColor = (department: string) => {
    switch (department) {
      case 'Engineering':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Design':
        return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'Strategy':
        return 'bg-green-100 text-green-700 border-green-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white section-padding border-b">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-600">
              Build your career with a company that values stability, innovation, 
              and professional growth. Help us deliver mission-critical solutions 
              for industry leaders.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Mediapro?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a stable, growing company with over a decade of success 
              and a commitment to employee development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="corporate-shadow hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600">
              Explore opportunities to grow your career with us
            </p>
          </div>

          <div className="space-y-8">
            {openPositions.map((position) => (
              <Card key={position.id} className="corporate-shadow hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                        {position.icon}
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-gray-900 mb-2">
                          {position.title}
                        </CardTitle>
                        <div className="flex flex-wrap gap-2">
                          <Badge className={getDepartmentColor(position.department)}>
                            {position.department}
                          </Badge>
                          <Badge variant="outline">{position.type}</Badge>
                          <Badge variant="outline">{position.experience}</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-gray-600 mt-4">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{position.location}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-700 text-lg">
                    {position.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Responsibilities:</h4>
                      <ul className="space-y-2">
                        {position.responsibilities.map((resp, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Apply for this Position
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Application Process
            </h2>
            <p className="text-xl text-gray-600">
              Our streamlined hiring process ensures we find the right fit for both you and our team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Apply</h3>
              <p className="text-gray-600 text-sm">Submit your application and resume</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Review</h3>
              <p className="text-gray-600 text-sm">Initial screening and portfolio review</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Interview</h3>
              <p className="text-gray-600 text-sm">Technical and cultural fit interviews</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Welcome</h3>
              <p className="text-gray-600 text-sm">Onboarding and team integration</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-900 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Don't see a position that fits? We're always looking for talented 
              individuals to join our growing team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-900">
                <Mail className="mr-2 h-5 w-5" />
                Send Your Resume
              </Button>
              <a href="/contact">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                  Contact HR Team
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;