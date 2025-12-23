import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  subtitle: string;
  price: string;
  period: string;
  features: PricingFeature[];
  isPopular?: boolean;
  ctaText: string;
  onCtaClick: () => void;
  badge?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  subtitle,
  price,
  period,
  features,
  isPopular = false,
  ctaText,
  onCtaClick,
  badge
}) => {
  return (
    <div className={`relative bg-card rounded-2xl shadow-brand-lg border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
      isPopular ? 'border-brand-primary' : 'border-border'
    }`}>
      {badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-6 py-2 rounded-full text-sm font-semibold shadow-brand">
            {badge}
          </span>
        </div>
      )}
      
      <div className="p-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-text-primary mb-2">{title}</h3>
          <p className="text-text-secondary mb-6">{subtitle}</p>
          
          <div className="mb-6">
            <span className="text-5xl font-bold text-text-primary">{price}</span>
            <span className="text-text-secondary ml-2">/{period}</span>
          </div>
          
          <button
            onClick={onCtaClick}
            className={`w-full py-4 rounded-lg font-semibold transition-all duration-200 transform hover:-translate-y-0.5 ${
              isPopular
                ? 'bg-success text-success-foreground hover:bg-success/90 shadow-brand-lg'
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/90'
            }`}
          >
            {ctaText}
          </button>
        </div>
        
        <div className="space-y-4">
          <p className="text-sm font-semibold text-text-primary uppercase tracking-wide mb-4">
            What&apos;s Included:
          </p>
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <Icon
                name={feature.included ? 'CheckCircleIcon' : 'XCircleIcon'}
                size={20}
                variant="solid"
                className={feature.included ? 'text-success flex-shrink-0 mt-0.5' : 'text-muted-foreground flex-shrink-0 mt-0.5'}
              />
              <span className={`text-sm ${feature.included ? 'text-text-primary' : 'text-text-secondary line-through'}`}>
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingCard;