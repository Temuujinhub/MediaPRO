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
        return 'bg-[#38bdf8]/10 text-[#7dd3fc] border-[#38bdf8]/30';
      case 'Design':
        return 'bg-[#6366f1]/10 text-[#a5b4fc] border-[#6366f1]/30';
      case 'Strategy':
        return 'bg-emerald-400/10 text-emerald-300 border-emerald-400/30';
      default:
        return 'bg-white/5 text-white/60 border-white/15';
    }
  };

  return (
    <div className="pg-page">
      {/* Header */}
      <section className="hero-gradient section-padding relative overflow-hidden">
        <div className="pg-orb pg-orb-cyan orb-drift-1 w-[420px] h-[420px] -top-40 right-0" aria-hidden="true"></div>
        <div className="pg-orb pg-orb-indigo orb-drift-2 w-[360px] h-[360px] -bottom-40 -left-24" aria-hidden="true"></div>
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="section-label justify-center">Work With Us</div>
            <h1 className="pg-heading text-4xl md:text-5xl text-white mb-6">
              Join Our <span className="gradient-text">Team</span>
            </h1>
            <p className="text-xl text-white/60">
              Build your career with a company that values stability, innovation,
              and professional growth. Help us deliver mission-critical solutions
              for industry leaders.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="reveal section-padding pg-section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="pg-heading text-3xl md:text-4xl text-white mb-4">
              Why Choose Mediapro?
            </h2>
            <p className="text-xl text-white/50 max-w-3xl mx-auto">
              Join a stable, growing company with over a decade of success
              and a commitment to employee development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="feature-card text-center">
                <div className="icon-blue mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-white/50 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="reveal section-padding pg-section-deep">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="pg-heading text-3xl md:text-4xl text-white mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-white/50">
              Explore opportunities to grow your career with us
            </p>
          </div>

          <div className="space-y-8">
            {openPositions.map((position) => (
              <div key={position.id} className="feature-card !p-0 overflow-hidden">
                <div className="p-7 pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="icon-blue">
                        {position.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {position.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${getDepartmentColor(position.department)}`}>
                            {position.department}
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border border-white/15 text-white/60">{position.type}</span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border border-white/15 text-white/60">{position.experience}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-white/50 mt-4">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4 text-[#38bdf8]" />
                      <span className="text-sm">{position.location}</span>
                    </div>
                  </div>
                </div>
                <div className="px-7 pb-7 space-y-6">
                  <p className="text-white/60 text-lg">
                    {position.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-[#38bdf8] rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-white/55 text-sm">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Responsibilities:</h4>
                      <ul className="space-y-2">
                        {position.responsibilities.map((resp, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-[#a5b4fc] rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-white/55 text-sm">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <a href={`mailto:info@mediapro.mn?subject=Application: ${position.title}`} className="btn-pg !py-2.5 !px-6">
                      Apply for this Position
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="reveal section-padding pg-section-alt">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="pg-heading text-3xl md:text-4xl text-white mb-4">
              Application Process
            </h2>
            <p className="text-xl text-white/50">
              Our streamlined hiring process ensures we find the right fit for both you and our team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Apply', desc: 'Submit your application and resume' },
              { step: '2', title: 'Review', desc: 'Initial screening and portfolio review' },
              { step: '3', title: 'Interview', desc: 'Technical and cultural fit interviews' },
              { step: '4', title: 'Welcome', desc: 'Onboarding and team integration' },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-16 h-16 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold" style={{ background: 'var(--pg-gradient)', boxShadow: '0 10px 30px -10px rgba(230,0,126,0.55)' }}>
                  {s.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-white/50 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="reveal section-padding pg-section-deep relative overflow-hidden">
        <div className="pg-orb pg-orb-cyan orb-drift-1 w-[420px] h-[420px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-25" aria-hidden="true"></div>
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="pg-heading text-3xl md:text-4xl text-white mb-6">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl mb-8 text-white/50">
              Don't see a position that fits? We're always looking for talented
              individuals to join our growing team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:info@mediapro.mn?subject=Resume Submission" className="btn-pg-ghost">
                <Mail className="h-5 w-5" />
                Send Your Resume
              </a>
              <a href="/#/contact" className="btn-pg">
                Contact HR Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
