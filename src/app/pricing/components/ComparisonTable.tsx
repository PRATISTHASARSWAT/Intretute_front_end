import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface ComparisonFeature {
  category: string;
  features: {
    name: string;
    starter: boolean | string;
    professional: boolean | string;
    enterprise: boolean | string;
  }[];
}

interface ComparisonTableProps {
  className?: string;
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({ className = '' }) => {
  const comparisonData: ComparisonFeature[] = [
    {
      category: 'Interview Preparation',
      features: [
        { name: 'Practice Interview Questions', starter: '100+', professional: '500+', enterprise: 'Unlimited' },
        { name: 'Video Interview Simulations', starter: true, professional: true, enterprise: true },
        { name: 'AI-Powered Feedback', starter: false, professional: true, enterprise: true },
        { name: 'Industry-Specific Questions', starter: false, professional: true, enterprise: true },
        { name: 'Mock Interview Sessions', starter: false, professional: '2/month', enterprise: 'Unlimited' }
      ]
    },
    {
      category: 'Learning Resources',
      features: [
        { name: 'Video Tutorials', starter: 'Basic', professional: 'Advanced', enterprise: 'Premium' },
        { name: 'Downloadable Templates', starter: true, professional: true, enterprise: true },
        { name: 'Career Guides & Checklists', starter: true, professional: true, enterprise: true },
        { name: 'Industry Reports', starter: false, professional: true, enterprise: true },
        { name: 'Exclusive Webinars', starter: false, professional: true, enterprise: true }
      ]
    },
    {
      category: 'Career Tools',
      features: [
        { name: 'Resume Builder', starter: true, professional: true, enterprise: true },
        { name: 'Job Application Tracker', starter: true, professional: true, enterprise: true },
        { name: 'Salary Calculator', starter: true, professional: true, enterprise: true },
        { name: 'LinkedIn Profile Optimizer', starter: false, professional: true, enterprise: true },
        { name: 'Personal Branding Tools', starter: false, professional: false, enterprise: true }
      ]
    },
    {
      category: 'Support & Community',
      features: [
        { name: 'Community Forum Access', starter: true, professional: true, enterprise: true },
        { name: 'Email Support', starter: '48hr', professional: '24hr', enterprise: 'Priority' },
        { name: 'One-on-One Mentorship', starter: false, professional: '1/month', enterprise: 'Unlimited' },
        { name: 'Career Coach Sessions', starter: false, professional: false, enterprise: true },
        { name: 'Dedicated Account Manager', starter: false, professional: false, enterprise: true }
      ]
    }
  ];

  const renderFeatureValue = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Icon name="CheckIcon" size={20} variant="solid" className="text-success mx-auto" />
      ) : (
        <Icon name="XMarkIcon" size={20} variant="solid" className="text-muted-foreground mx-auto" />
      );
    }
    return <span className="text-sm font-semibold text-text-primary">{value}</span>;
  };

  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Compare All Features
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            See exactly what you get with each plan and choose the one that matches your career goals
          </p>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[768px]">
            <div className="bg-card rounded-2xl shadow-brand-lg overflow-hidden">
              <div className="grid grid-cols-4 bg-muted border-b border-border">
                <div className="p-6">
                  <p className="text-sm font-semibold text-text-secondary uppercase tracking-wide">
                    Features
                  </p>
                </div>
                <div className="p-6 text-center border-l border-border">
                  <p className="text-lg font-bold text-text-primary">Starter</p>
                  <p className="text-sm text-text-secondary">$49/month</p>
                </div>
                <div className="p-6 text-center border-l border-border bg-brand-primary/5">
                  <p className="text-lg font-bold text-brand-primary">Professional</p>
                  <p className="text-sm text-text-secondary">$99/month</p>
                </div>
                <div className="p-6 text-center border-l border-border">
                  <p className="text-lg font-bold text-text-primary">Enterprise</p>
                  <p className="text-sm text-text-secondary">Custom</p>
                </div>
              </div>

              {comparisonData.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <div className="bg-muted/50 px-6 py-3 border-b border-border">
                    <p className="font-semibold text-text-primary">{category.category}</p>
                  </div>
                  {category.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="grid grid-cols-4 border-b border-border hover:bg-muted/30 transition-colors"
                    >
                      <div className="p-4">
                        <p className="text-sm text-text-primary">{feature.name}</p>
                      </div>
                      <div className="p-4 text-center border-l border-border flex items-center justify-center">
                        {renderFeatureValue(feature.starter)}
                      </div>
                      <div className="p-4 text-center border-l border-border bg-brand-primary/5 flex items-center justify-center">
                        {renderFeatureValue(feature.professional)}
                      </div>
                      <div className="p-4 text-center border-l border-border flex items-center justify-center">
                        {renderFeatureValue(feature.enterprise)}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;