import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  alt: string;
  quote: string;
  salaryIncrease: string;
  rating: number;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-card rounded-xl shadow-brand p-6 hover:shadow-brand-lg transition-all duration-300">
      <div className="flex items-start gap-4 mb-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
          <AppImage
            src={testimonial.image}
            alt={testimonial.alt}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-text-primary">{testimonial.name}</h4>
          <p className="text-sm text-text-secondary">{testimonial.role}</p>
          <p className="text-sm text-text-secondary">{testimonial.company}</p>
        </div>
        <div className="flex gap-0.5">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Icon key={i} name="StarIcon" size={16} variant="solid" className="text-warning" />
          ))}
        </div>
      </div>
      
      <p className="text-text-primary mb-4 italic">&quot;{testimonial.quote}&quot;</p>
      
      <div className="flex items-center gap-2 text-success">
        <Icon name="ArrowTrendingUpIcon" size={20} variant="solid" />
        <span className="font-semibold">{testimonial.salaryIncrease} salary increase</span>
      </div>
    </div>
  );
};

export default TestimonialCard;