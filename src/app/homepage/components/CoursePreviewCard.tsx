import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface CoursePreviewCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;
  duration: string;
  level: string;
  students: number;
  rating: number;
  category: string;
}

const CoursePreviewCard: React.FC<CoursePreviewCardProps> = ({
  title,
  description,
  image,
  alt,
  duration,
  level,
  students,
  rating,
  category
}) => {
  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-brand-lg transition-all duration-300 hover:-translate-y-1 group">
      <div className="relative h-48 overflow-hidden">
        <AppImage
          src={image}
          alt={alt}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-brand-primary text-white text-xs font-semibold rounded-full">
            {category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-text-primary mb-2 line-clamp-2 group-hover:text-brand-primary transition-colors duration-200">
          {title}
        </h3>
        <p className="text-text-secondary text-sm mb-4 line-clamp-2 leading-relaxed">
          {description}
        </p>

        <div className="flex items-center gap-4 mb-4 text-sm text-text-secondary">
          <div className="flex items-center gap-1">
            <Icon name="ClockIcon" size={16} variant="outline" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Icon name="AcademicCapIcon" size={16} variant="outline" />
            <span>{level}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <Icon name="StarIcon" size={16} variant="solid" className="text-warning" />
              <span className="text-sm font-semibold text-text-primary">{rating}</span>
            </div>
            <div className="flex items-center gap-1 text-text-secondary text-sm">
              <Icon name="UserGroupIcon" size={16} variant="outline" />
              <span>{students.toLocaleString()}</span>
            </div>
          </div>

          <Link
            href="/interview-hub"
            className="flex items-center gap-1 text-brand-primary font-semibold text-sm hover:gap-2 transition-all duration-200"
          >
            Learn More
            <Icon name="ArrowRightIcon" size={16} variant="outline" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CoursePreviewCard;