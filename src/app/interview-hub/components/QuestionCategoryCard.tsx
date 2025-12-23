import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface QuestionCategoryCardProps {
  category: {
    id: string;
    title: string;
    description: string;
    icon: string;
    questionCount: number;
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
    color: string;
  };
  onSelect: (categoryId: string) => void;
}

const QuestionCategoryCard = ({ category, onSelect }: QuestionCategoryCardProps) => {
  const difficultyColors = {
    Beginner: 'bg-success/10 text-success',
    Intermediate: 'bg-warning/10 text-warning',
    Advanced: 'bg-error/10 text-error',
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-brand-lg transition-all duration-200 hover:-translate-y-1 cursor-pointer group">
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
          <Icon name={category.icon as any} size={24} variant="outline" className="text-white" />
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${difficultyColors[category.difficulty]}`}>
          {category.difficulty}
        </span>
      </div>
      
      <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-brand-primary transition-colors duration-200">
        {category.title}
      </h3>
      
      <p className="text-text-secondary mb-4 line-clamp-2">
        {category.description}
      </p>
      
      <div className="flex items-center justify-between">
        <span className="text-sm text-text-secondary">
          {category.questionCount} questions
        </span>
        <button
          onClick={() => onSelect(category.id)}
          className="text-brand-primary font-medium flex items-center gap-1 hover:gap-2 transition-all duration-200"
        >
          Practice Now
          <Icon name="ArrowRightIcon" size={16} variant="outline" />
        </button>
      </div>
    </div>
  );
};

export default QuestionCategoryCard;