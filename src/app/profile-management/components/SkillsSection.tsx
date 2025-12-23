'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Skill {
  id: number;
  name: string;
  level: number;
  endorsements: number;
  category: string;
}

interface SkillsSectionProps {
  skills: Skill[];
  onAddSkill: () => void;
}

const SkillsSection = ({ skills, onAddSkill }: SkillsSectionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useState(() => {
    setIsHydrated(true);
  });

  if (!isHydrated) {
    return (
      <div className="bg-card rounded-xl shadow-brand p-6 mb-6">
        <div className="h-6 bg-muted rounded w-32 mb-4" />
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-20 bg-muted rounded" />
          ))}
        </div>
      </div>
    );
  }

  const categories = ['All', ...Array.from(new Set(skills.map(s => s.category)))];
  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(s => s.category === selectedCategory);

  const getSkillLevelColor = (level: number) => {
    if (level >= 80) return 'bg-success';
    if (level >= 60) return 'bg-accent';
    if (level >= 40) return 'bg-warning';
    return 'bg-error';
  };

  return (
    <div className="bg-card rounded-xl shadow-brand p-6 mb-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-text-primary">Skills & Expertise</h2>
        <button
          onClick={onAddSkill}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 inline-flex items-center gap-2"
        >
          <Icon name="PlusIcon" size={16} variant="solid" />
          Add Skill
        </button>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              selectedCategory === category
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-text-secondary hover:bg-muted/80'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {filteredSkills.map((skill) => (
          <div key={skill.id} className="border border-border rounded-lg p-4 hover:shadow-brand transition-all duration-200">
            <div className="flex items-center justify-between mb-3">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-text-primary mb-1">{skill.name}</h3>
                <p className="text-sm text-text-secondary">{skill.category}</p>
              </div>
              <div className="flex items-center gap-2 text-text-secondary">
                <Icon name="HandThumbUpIcon" size={16} variant="outline" />
                <span className="text-sm font-medium">{skill.endorsements} endorsements</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-text-secondary">Proficiency Level</span>
                <span className="font-semibold text-text-primary">{skill.level}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                <div
                  className={`h-full ${getSkillLevelColor(skill.level)} transition-all duration-500`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;