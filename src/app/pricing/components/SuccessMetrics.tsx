import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface Metric {
  icon: string;
  value: string;
  label: string;
  description: string;
}

interface SuccessMetricsProps {
  className?: string;
}

const SuccessMetrics: React.FC<SuccessMetricsProps> = ({ className = '' }) => {
  const metrics: Metric[] = [
    {
      icon: 'BriefcaseIcon',
      value: '12,847',
      label: 'Job Placements',
      description: 'Members successfully placed in new roles in 2024'
    },
    {
      icon: 'CurrencyDollarIcon',
      value: '$28,500',
      label: 'Average Salary Increase',
      description: 'Mean salary boost after completing our program'
    },
    {
      icon: 'ChartBarIcon',
      value: '94%',
      label: 'Interview Success Rate',
      description: 'Members who receive job offers after training'
    },
    {
      icon: 'StarIcon',
      value: '4.9/5',
      label: 'Member Satisfaction',
      description: 'Average rating from 15,000+ reviews'
    }
  ];

  return (
    <section className={`bg-gradient-to-br from-brand-primary to-brand-secondary text-white py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Proven Results That Speak for Themselves
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Join thousands of professionals who have transformed their careers with SkillPath Academy
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <Icon name={metric.icon as any} size={32} variant="solid" className="text-white" />
                </div>
              </div>
              <p className="text-4xl font-bold mb-2">{metric.value}</p>
              <p className="text-lg font-semibold mb-2">{metric.label}</p>
              <p className="text-sm text-white/80">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessMetrics;