import Icon from '@/components/ui/AppIcon';

interface ContactMethod {
  icon: string;
  title: string;
  description: string;
  action: string;
  link: string;
}

export default function ContactSection() {
  const contactMethods: ContactMethod[] = [
    {
      icon: 'EnvelopeIcon',
      title: 'Email Us',
      description: 'Get in touch with our team for partnership inquiries or general questions.',
      action: 'partnerships@skillpath.academy',
      link: 'mailto:partnerships@skillpath.academy'
    },
    {
      icon: 'PhoneIcon',
      title: 'Call Us',
      description: 'Speak directly with our partnership team during business hours (9 AM - 6 PM EST).',
      action: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: 'MapPinIcon',
      title: 'Visit Us',
      description: 'Schedule a visit to our headquarters in San Francisco, California.',
      action: '123 Innovation Drive, SF, CA 94105',
      link: '#'
    },
    {
      icon: 'ChatBubbleLeftRightIcon',
      title: 'Live Chat',
      description: 'Chat with our team in real-time for immediate assistance and inquiries.',
      action: 'Start Chat',
      link: '#'
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
            Get in Touch
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            Interested in partnering with us or learning more about our programs? We'd love to hear from you. Our team is ready to help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-brand-lg transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon name={method.icon as any} size={24} variant="solid" className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">{method.title}</h3>
              <p className="text-text-secondary text-sm mb-4 leading-relaxed">{method.description}</p>
              <div className="text-brand-primary font-semibold text-sm group-hover:underline">{method.action}</div>
            </a>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-bold text-text-primary mb-4">
                  Partnership Inquiry Form
                </h3>
                <p className="text-text-secondary mb-6">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>
                
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-200"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-200"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-200"
                      placeholder="john@company.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Partnership Type *
                    </label>
                    <select className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-200">
                      <option>Select partnership type</option>
                      <option>Corporate Training</option>
                      <option>Recruitment Pipeline</option>
                      <option>Educational Institution</option>
                      <option>Technology Integration</option>
                      <option>Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell us about your partnership goals..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full py-3 bg-brand-primary text-white rounded-lg font-semibold hover:bg-brand-primary/90 hover:shadow-brand-lg transform hover:-translate-y-0.5 transition-all duration-200"
                  >
                    Submit Inquiry
                  </button>
                </form>
              </div>
              
              <div className="bg-gradient-to-br from-brand-primary to-brand-secondary p-8 md:p-12 text-white">
                <h3 className="text-2xl font-bold mb-6">Why Partner With Us?</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="UserGroupIcon" size={20} variant="solid" className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Access to Top Talent</h4>
                      <p className="text-white/80 text-sm">Connect with pre-screened, interview-ready professionals across multiple specializations.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="ChartBarIcon" size={20} variant="solid" className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Proven Results</h4>
                      <p className="text-white/80 text-sm">Our partners see 45% faster hiring times and 90% first-year retention rates.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="CogIcon" size={20} variant="solid" className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Custom Solutions</h4>
                      <p className="text-white/80 text-sm">Tailored training programs designed specifically for your organization's needs.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="ShieldCheckIcon" size={20} variant="solid" className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Trusted by Leaders</h4>
                      <p className="text-white/80 text-sm">Join 500+ companies including Google, Microsoft, and Amazon in our partner network.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-white/20">
                  <p className="text-white/80 text-sm">
                    <Icon name="ClockIcon" size={16} variant="outline" className="inline mr-2" />
                    Average response time: 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-16">
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-xl font-bold text-text-primary text-center mb-6">Our Office Location</h3>
            <div className="w-full h-96 rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                title="SkillPath Academy Headquarters"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=37.7749,-122.4194&z=14&output=embed"
                className="border-0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}