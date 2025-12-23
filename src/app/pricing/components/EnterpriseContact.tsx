import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface EnterpriseContactProps {
  className?: string;
}

const EnterpriseContact: React.FC<EnterpriseContactProps> = ({ className = '' }) => {
  const enterpriseFeatures = [
    'Custom training programs tailored to your organization',
    'Dedicated account manager and priority support',
    'Advanced analytics and reporting dashboards',
    'Single sign-on (SSO) and team management tools',
    'Bulk licensing with flexible payment terms',
    'On-site training sessions and workshops'
  ];

  return (
    <section className={`bg-muted py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-brand-trust to-brand-primary rounded-2xl shadow-brand-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 md:p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Enterprise Solutions
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Empower your entire team with customized training programs and dedicated support
              </p>
              
              <ul className="space-y-4 mb-8">
                {enterpriseFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Icon
                      name="CheckCircleIcon"
                      size={24}
                      variant="solid"
                      className="text-accent flex-shrink-0 mt-0.5"
                    />
                    <span className="text-white/90">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full md:w-auto px-8 py-4 bg-white text-brand-primary rounded-lg font-semibold hover:bg-white/90 hover:shadow-brand-lg transform hover:-translate-y-0.5 transition-all duration-200">
                Schedule a Demo
              </button>
            </div>

            <div className="bg-white p-8 md:p-12">
              <h3 className="text-2xl font-bold text-text-primary mb-6">
                Get Custom Pricing
              </h3>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-text-primary mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your company name"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-text-primary mb-2">
                    Work Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-text-primary mb-2">
                    Team Size
                  </label>
                  <select className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary">
                    <option>5-10 employees</option>
                    <option>11-50 employees</option>
                    <option>51-200 employees</option>
                    <option>201-500 employees</option>
                    <option>500+ employees</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-text-primary mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your training needs..."
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-success text-success-foreground rounded-lg font-semibold hover:bg-success/90 hover:shadow-brand-lg transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  Request Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseContact;