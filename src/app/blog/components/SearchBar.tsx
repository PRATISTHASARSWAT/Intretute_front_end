'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export default function SearchBar({ onSearch, placeholder = 'Search articles, topics, or authors...' }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const handleClear = () => {
    setSearchQuery('');
    onSearch('');
  };

  return (
    <form onSubmit={handleSearch} className="relative">
      <div className="relative">
        <Icon 
          name="MagnifyingGlassIcon" 
          size={20} 
          variant="outline"
          className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
        />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-12 pr-12 py-3 bg-card border border-border rounded-lg text-text-primary placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-200"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-muted rounded-md transition-colors duration-200"
            aria-label="Clear search"
          >
            <Icon name="XMarkIcon" size={18} variant="outline" className="text-muted-foreground" />
          </button>
        )}
      </div>
    </form>
  );
}