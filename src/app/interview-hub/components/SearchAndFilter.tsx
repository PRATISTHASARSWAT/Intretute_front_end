'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface SearchAndFilterProps {
  onSearch: (query: string) => void;
  onFilterChange: (filters: FilterState) => void;
}

interface FilterState {
  difficulty: string[];
  category: string[];
  industry: string[];
}

const SearchAndFilter = ({ onSearch, onFilterChange }: SearchAndFilterProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    difficulty: [],
    category: [],
    industry: []
  });

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const difficulties = ['Beginner', 'Intermediate', 'Advanced'];
  const categories = ['Behavioral', 'Technical', 'Situational', 'Case Study'];
  const industries = ['Technology', 'Finance', 'Healthcare', 'Marketing', 'Sales'];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch(value);
  };

  const handleFilterToggle = (type: keyof FilterState, value: string) => {
    setFilters(prev => {
      const newFilters = { ...prev };
      const index = newFilters[type].indexOf(value);
      
      if (index > -1) {
        newFilters[type] = newFilters[type].filter(item => item !== value);
      } else {
        newFilters[type] = [...newFilters[type], value];
      }
      
      onFilterChange(newFilters);
      return newFilters;
    });
  };

  const clearFilters = () => {
    const emptyFilters = {
      difficulty: [],
      category: [],
      industry: []
    };
    setFilters(emptyFilters);
    onFilterChange(emptyFilters);
  };

  const activeFilterCount = filters.difficulty.length + filters.category.length + filters.industry.length;

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 relative">
          <Icon 
            name="MagnifyingGlassIcon" 
            size={20} 
            variant="outline" 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search interview questions..."
            className="w-full pl-12 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary"
          />
        </div>
        
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center justify-center gap-2 px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-all duration-200 relative"
        >
          <Icon name="FunnelIcon" size={20} variant="outline" />
          <span>Filters</span>
          {isHydrated && activeFilterCount > 0 && (
            <span className="absolute -top-2 -right-2 w-6 h-6 bg-brand-primary text-white text-xs font-bold rounded-full flex items-center justify-center">
              {activeFilterCount}
            </span>
          )}
        </button>
      </div>

      {showFilters && (
        <div className="bg-card border border-border rounded-lg p-6 space-y-6 animate-scale-in">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-text-primary">Filter Questions</h3>
            {activeFilterCount > 0 && (
              <button
                onClick={clearFilters}
                className="text-sm text-brand-primary hover:text-brand-primary/80 font-medium"
              >
                Clear All
              </button>
            )}
          </div>

          <div>
            <h4 className="text-sm font-medium text-text-primary mb-3">Difficulty Level</h4>
            <div className="flex flex-wrap gap-2">
              {difficulties.map(difficulty => (
                <button
                  key={difficulty}
                  onClick={() => handleFilterToggle('difficulty', difficulty)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    filters.difficulty.includes(difficulty)
                      ? 'bg-brand-primary text-white' :'bg-muted text-text-secondary hover:bg-muted-foreground/10'
                  }`}
                >
                  {difficulty}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-text-primary mb-3">Question Category</h4>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => handleFilterToggle('category', category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    filters.category.includes(category)
                      ? 'bg-brand-primary text-white' :'bg-muted text-text-secondary hover:bg-muted-foreground/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-text-primary mb-3">Industry Focus</h4>
            <div className="flex flex-wrap gap-2">
              {industries.map(industry => (
                <button
                  key={industry}
                  onClick={() => handleFilterToggle('industry', industry)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    filters.industry.includes(industry)
                      ? 'bg-brand-primary text-white' :'bg-muted text-text-secondary hover:bg-muted-foreground/10'
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchAndFilter;