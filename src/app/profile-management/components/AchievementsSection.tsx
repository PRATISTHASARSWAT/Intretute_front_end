'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: string;
  earnedDate: string;
  category: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

interface AchievementsSectionProps {
  achievements: Achievement[];
}

const AchievementsSection = ({ achievements }: AchievementsSectionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useState(() => {
    setIsHydrated(true);
  });

  if (!isHydrated) {
    return (
      <div className="bg-card rounded-xl shadow-brand p-6 mb-6">
        <div className="h-6 bg-muted rounded w-40 mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-32 bg-muted rounded" />
          ))}
        </div>
      </div>
    );
  }

  const categories = ['All', ...Array.from(new Set(achievements.map(a => a.category)))];
  const filteredAchievements = selectedCategory === 'All'
    ? achievements
    : achievements.filter(a => a.category === selectedCategory);

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'legendary': return 'from-yellow-400 to-orange-500';
      case 'epic': return 'from-purple-400 to-pink-500';
      case 'rare': return 'from-blue-400 to-cyan-500';
      default: return 'from-gray-400 to-gray-500';
    }
  };

  const getRarityBorder = (rarity: string) => {
    switch (rarity) {
      case 'legendary': return 'border-yellow-400';
      case 'epic': return 'border-purple-400';
      case 'rare': return 'border-blue-400';
      default: return 'border-gray-400';
    }
  };

  return (
    <div className="bg-card rounded-xl shadow-brand p-6 mb-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-text-primary">Achievements & Badges</h2>
        <div className="text-sm text-text-secondary">
          {achievements.length} earned
        </div>
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredAchievements.map((achievement) => (
          <div
            key={achievement.id}
            className={`border-2 ${getRarityBorder(achievement.rarity)} rounded-lg p-4 hover:shadow-brand-lg transition-all duration-200 transform hover:-translate-y-1`}
          >
            <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${getRarityColor(achievement.rarity)} flex items-center justify-center mb-4 mx-auto`}>
              <Icon name={achievement.icon as any} size={32} variant="solid" className="text-white" />
            </div>
            
            <h3 className="text-lg font-semibold text-text-primary text-center mb-2">
              {achievement.title}
            </h3>
            <p className="text-sm text-text-secondary text-center mb-3">
              {achievement.description}
            </p>
            
            <div className="flex items-center justify-center gap-2 text-xs text-text-secondary">
              <Icon name="CalendarIcon" size={14} variant="outline" />
              <span>Earned {achievement.earnedDate}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;