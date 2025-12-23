import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface StatCardProps {
  stat: {
    id: string;
    label: string;
    value: string;
    icon: string;
    trend: string;
    color: string;
  };
}

const StatCard = ({ stat }: StatCardProps) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-brand-lg transition-all duration-200">
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center`}>
          <Icon name={stat.icon as any} size={24} variant="outline" className="text-white" />
        </div>
        <span className="text-xs font-medium text-success bg-success/10 px-2 py-1 rounded-full">
          {stat.trend}
        </span>
      </div>
      
      <div className="text-3xl font-bold text-text-primary mb-1">
        {stat.value}
      </div>
      
      <div className="text-sm text-text-secondary">
        {stat.label}
      </div>
    </div>
  );
};

export default StatCard;