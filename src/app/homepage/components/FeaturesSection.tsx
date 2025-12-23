import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const FeaturesSection: React.FC = () => {
  const features: Feature[] = [
    {
      id: 1,
      icon: 'AcademicCapIcon',
      title: 'Expert-Led Courses',
      description: 'Learn from industry professionals with 15+ years of hiring experience across Fortune 500 companies'
    },
    {
      id: 2,
      icon: 'SparklesIcon',
      title: 'AI-Powered Practice',
      description: 'Get instant feedback on your interview responses with our advanced AI analysis engine'
    },
    {
      id: 3,
      icon: 'ChartBarIcon',
      title: 'Progress Tracking',
      description: 'Monitor your improvement with detailed analytics and personalized learning recommendations'
    },
    {
      id: 4,
      icon: 'UserGroupIcon',
      title: 'Peer Community',
      description: 'Connect with 50,000+ career changers, share experiences, and learn from each other'
    },
    {
      id: 5,
      icon: 'VideoCameraIcon',
      title: 'Mock Interviews',
      description: 'Practice with realistic interview scenarios and receive detailed performance evaluations'
    },
    {
      id: 6,
      icon: 'DocumentTextIcon',
      title: 'Career Resources',
      description: 'Access templates, guides, and tools for resume building, salary negotiation, and more'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Comprehensive tools and resources designed to transform your interview skills and career confidence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-card rounded-xl p-6 border border-border hover:shadow-brand-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon name={feature.icon as any} size={28} variant="outline" className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">{feature.title}</h3>
              <p className="text-text-secondary leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;