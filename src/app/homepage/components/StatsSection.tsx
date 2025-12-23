import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface Stat {
  id: number;
  value: string;
  label: string;
  icon: string;
  description: string;
}

const StatsSection: React.FC = () => {
  const stats: Stat[] = [
    {
      id: 1,
      value: '50,000+',
      label: 'Career Transformations',
      icon: 'UserGroupIcon',
      description: 'Professionals successfully placed in their dream roles'
    },
    {
      id: 2,
      value: '94%',
      label: 'Interview Success Rate',
      icon: 'ChartBarIcon',
      description: 'Students who land offers within 3 months'
    },
    {
      id: 3,
      value: '$28K',
      label: 'Average Salary Increase',
      icon: 'CurrencyDollarIcon',
      description: 'Boost in compensation after completing our program'
    },
    {
      id: 4,
      value: '4.9/5',
      label: 'Student Satisfaction',
      icon: 'StarIcon',
      description: 'Based on 12,000+ verified reviews'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Real Results, Real Impact
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their careers with SkillPath Academy
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-card rounded-xl p-6 border border-border hover:shadow-brand-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-lg mb-4">
                <Icon name={stat.icon as any} size={24} variant="solid" className="text-white" />
              </div>
              <div className="text-4xl font-bold text-brand-primary mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-text-primary mb-2">{stat.label}</div>
              <p className="text-sm text-text-secondary leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;