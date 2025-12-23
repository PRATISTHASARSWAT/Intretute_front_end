'use client';

import Icon from '@/components/ui/AppIcon';

interface CategoryFilterProps {
  categories: Array<{
    id: string;
    name: string;
    count: number;
    icon: string;
  }>;
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export default function CategoryFilter({ 
  categories, 
  activeCategory, 
  onCategoryChange 
}: CategoryFilterProps) {
  return (
    <div className="bg-card rounded-xl border border-border p-6">
      <h3 className="text-lg font-bold text-text-primary mb-4 flex items-center space-x-2">
        <Icon name="FolderIcon" size={20} variant="outline" />
        <span>Categories</span>
      </h3>
      <div className="space-y-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 ${
              activeCategory === category.id
                ? 'bg-brand-primary text-white shadow-brand'
                : 'bg-muted text-text-primary hover:bg-brand-primary/10 hover:text-brand-primary'
            }`}
          >
            <div className="flex items-center space-x-3">
              <Icon 
                name={category.icon as any} 
                size={18} 
                variant={activeCategory === category.id ? 'solid' : 'outline'}
              />
              <span className="font-medium">{category.name}</span>
            </div>
            <span className={`text-sm font-semibold px-2 py-1 rounded-full ${
              activeCategory === category.id
                ? 'bg-white/20' :'bg-muted-foreground/10'
            }`}>
              {category.count}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}