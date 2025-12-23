import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface TestimonialCardProps {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  alt: string;
  testimonial: string;
  rating: number;
  achievement: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  company,
  image,
  alt,
  testimonial,
  rating,
  achievement
}) => {
  return (
    <div className="bg-card rounded-xl p-6 border border-border hover:shadow-brand-lg transition-all duration-300">
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, index) => (
          <Icon
            key={index}
            name="StarIcon"
            size={20}
            variant="solid"
            className={index < rating ? 'text-warning' : 'text-muted'}
          />
        ))}
      </div>

      <p className="text-text-primary mb-6 leading-relaxed italic">
        "{testimonial}"
      </p>

      <div className="flex items-center gap-4 mb-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
          <AppImage
            src={image}
            alt={alt}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <div className="font-semibold text-text-primary">{name}</div>
          <div className="text-sm text-text-secondary">{role} at {company}</div>
        </div>
      </div>

      <div className="flex items-center gap-2 px-4 py-2 bg-success/10 rounded-lg border border-success/20">
        <Icon name="TrophyIcon" size={16} variant="solid" className="text-success" />
        <span className="text-sm font-medium text-success">{achievement}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;