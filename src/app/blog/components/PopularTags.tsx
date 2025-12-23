'use client';

interface PopularTagsProps {
  tags: Array<{
    name: string;
    count: number;
  }>;
  onTagClick: (tag: string) => void;
}

export default function PopularTags({ tags, onTagClick }: PopularTagsProps) {
  return (
    <div className="bg-card rounded-xl border border-border p-6">
      <h3 className="text-lg font-bold text-text-primary mb-4">Popular Topics</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <button
            key={tag.name}
            onClick={() => onTagClick(tag.name)}
            className="px-3 py-2 bg-muted text-text-secondary rounded-lg hover:bg-brand-primary hover:text-white transition-all duration-200 text-sm font-medium flex items-center space-x-2"
          >
            <span>#{tag.name}</span>
            <span className="text-xs opacity-70">({tag.count})</span>
          </button>
        ))}
      </div>
    </div>
  );
}