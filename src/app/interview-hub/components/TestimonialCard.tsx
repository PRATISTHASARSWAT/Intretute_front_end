import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface TestimonialCardProps {
  testimonial: {
    id: string;
    name: string;
    role: string;
    company: string;
    image: string;
    alt: string;
    quote: string;
    rating: number;
    achievement: string;
  };
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-brand-lg transition-all duration-200">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
          <AppImage
            src={testimonial.image}
            alt={testimonial.alt}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-1 min-w-0">
          <h4 className="font-bold text-text-primary truncate">{testimonial.name}</h4>
          <p className="text-sm text-text-secondary truncate">{testimonial.role}</p>
          <p className="text-xs text-text-secondary truncate">{testimonial.company}</p>
        </div>
      </div>
      
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, index) => (
          <Icon
            key={index}
            name="StarIcon"
            size={16}
            variant={index < testimonial.rating ? 'solid' : 'outline'}
            className={index < testimonial.rating ? 'text-warning' : 'text-muted-foreground'}
          />
        ))}
      </div>
      
      <p className="text-text-secondary mb-4 line-clamp-4">
        "{testimonial.quote}"
      </p>
      
      <div className="bg-success/10 rounded-lg p-3 flex items-center gap-2">
        <Icon name="TrophyIcon" size={20} variant="solid" className="text-success flex-shrink-0" />
        <span className="text-sm font-medium text-success">{testimonial.achievement}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;