import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface FeatureCardProps {
  feature: {
    id: string;
    title: string;
    description: string;
    icon: string;
    benefits: string[];
  };
}

const FeatureCard = ({ feature }: FeatureCardProps) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-brand-lg transition-all duration-200">
      <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center mb-4">
        <Icon name={feature.icon as any} size={28} variant="outline" className="text-white" />
      </div>
      
      <h3 className="text-xl font-bold text-text-primary mb-3">
        {feature.title}
      </h3>
      
      <p className="text-text-secondary mb-4">
        {feature.description}
      </p>
      
      <ul className="space-y-2">
        {feature.benefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-text-secondary">
            <Icon name="CheckCircleIcon" size={16} variant="solid" className="text-success mt-0.5 flex-shrink-0" />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureCard;