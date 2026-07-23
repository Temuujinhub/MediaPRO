import { useState } from 'react';
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
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', company: '', phone: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSend = () => {
    const body = `Name: ${form.firstName} ${form.lastName}
Company: ${form.company}
Phone: ${form.phone}
Email: ${form.email}

${form.message}`;
    const subject = form.subject || 'Project Inquiry';
    window.location.href = `mailto:info@mediapro.mn?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

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
    <div className="pg-page">
      {/* Header */}
      <section className="hero-gradient section-padding relative overflow-hidden">
        <div className="pg-orb pg-orb-pink w-[420px] h-[420px] -top-40 -right-24" aria-hidden="true"></div>
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="section-label justify-center">Contact</div>
            <h1 className="pg-heading text-4xl md:text-5xl text-white mb-6">
              Let's Discuss Your <span className="gradient-text">Next Project</span>
            </h1>
            <p className="text-xl text-white/60">
              Ready to optimize your operations? Contact our team today to explore
              how we can deliver mission-critical solutions for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding pg-section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="feature-card !p-7">
              <h2 className="text-2xl font-bold text-white mb-2">
                Send Us a Message
              </h2>
              <p className="text-white/50 mb-6">
                Tell us about your project requirements and we'll get back to you within 24 hours.
              </p>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-white/70">First Name</label>
                    <input id="firstName" className="pg-input" placeholder="John" value={form.firstName} onChange={handleChange} />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-white/70">Last Name</label>
                    <input id="lastName" className="pg-input" placeholder="Doe" value={form.lastName} onChange={handleChange} />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-white/70">Email Address</label>
                  <input id="email" type="email" className="pg-input" placeholder="john.doe@company.com" value={form.email} onChange={handleChange} />
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-white/70">Company</label>
                  <input id="company" className="pg-input" placeholder="Your Company Name" value={form.company} onChange={handleChange} />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-white/70">Phone Number</label>
                  <input id="phone" className="pg-input" placeholder="+976 99091911" value={form.phone} onChange={handleChange} />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-white/70">Subject</label>
                  <input id="subject" className="pg-input" placeholder="Project Inquiry" value={form.subject} onChange={handleChange} />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-white/70">Message</label>
                  <textarea
                    id="message"
                    className="pg-input resize-none"
                    placeholder="Tell us about your project requirements, timeline, and any specific challenges you're facing..."
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                <button onClick={handleSend} className="btn-pg w-full">
                  Send Message
                </button>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="feature-card !p-7">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="icon-blue flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">
                          {info.title}
                        </h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-white/50">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Hours */}
              <div className="feature-card !p-7">
                <h3 className="text-xl font-bold text-white flex items-center mb-5">
                  <Clock className="h-5 w-5 mr-2 text-[#ff2e9a]" />
                  Business Hours
                </h3>
                <div className="space-y-3">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-white/55">{schedule.day}</span>
                      <span className="text-white font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Services */}
              <div className="feature-card !p-7">
                <h3 className="text-xl font-bold text-white mb-5">
                  Our Services
                </h3>
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-[#ff2e9a]/12 text-[#ff2e9a] flex items-center justify-center flex-shrink-0">
                        {service.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">
                          {service.title}
                        </h4>
                        <p className="text-white/50 text-sm">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding pg-section-deep">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="pg-heading text-3xl text-white mb-4">
              Visit Our Office
            </h2>
            <p className="text-xl text-white/50">
              Located in the heart of Ulaanbaatar's business district
            </p>
          </div>

          <div className="feature-card !p-0 overflow-hidden">
            <div className="h-96 flex items-center justify-center relative overflow-hidden">
              <div className="pg-orb pg-orb-violet w-[380px] h-[380px] -bottom-40 -right-24 opacity-40" aria-hidden="true"></div>
              <div className="text-center relative z-10">
                <MapPin className="h-16 w-16 text-[#ff2e9a] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  Interactive Map
                </h3>
                <p className="text-white/50 max-w-md">
                  #204, Arig Center, Building 10<br />
                  Jamyan Gun Street 5/2, 1st Khoroo<br />
                  Sukhbaatar District, Ulaanbaatar, Mongolia
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding pg-section-alt relative overflow-hidden">
        <div className="pg-orb pg-orb-pink w-[420px] h-[420px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-25" aria-hidden="true"></div>
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="pg-heading text-3xl md:text-4xl text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-white/50">
              Join industry leaders like Rio Tinto who trust us with their
              mission-critical systems. Let's discuss your project today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+97699091911" className="btn-pg-ghost">
                <Phone className="h-5 w-5" />
                Call Now: +976 99091911
              </a>
              <a href="mailto:info@mediapro.mn" className="btn-pg">
                <Mail className="h-5 w-5" />
                Email: info@mediapro.mn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
