'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface TimelineEvent {
  id: number;
  title: string;
  description: string;
  date: string;
  type: 'course' | 'achievement' | 'milestone' | 'certification';
  icon: string;
}

interface CareerTimelineProps {
  events: TimelineEvent[];
}

const CareerTimeline = ({ events }: CareerTimelineProps) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useState(() => {
    setIsHydrated(true);
  });

  if (!isHydrated) {
    return (
      <div className="bg-card rounded-xl shadow-brand p-6 mb-6">
        <div className="h-6 bg-muted rounded w-40 mb-4" />
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-24 bg-muted rounded" />
          ))}
        </div>
      </div>
    );
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'course': return 'bg-primary';
      case 'achievement': return 'bg-success';
      case 'milestone': return 'bg-accent';
      case 'certification': return 'bg-brand-secondary';
      default: return 'bg-muted';
    }
  };

  return (
    <div className="bg-card rounded-xl shadow-brand p-6 mb-6">
      <h2 className="text-2xl font-bold text-text-primary mb-6">Career Timeline</h2>

      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

        <div className="space-y-6">
          {events.map((event, index) => (
            <div key={event.id} className="relative pl-20">
              <div className={`absolute left-0 w-16 h-16 rounded-full ${getTypeColor(event.type)} flex items-center justify-center shadow-brand-lg`}>
                <Icon name={event.icon as any} size={28} variant="solid" className="text-white" />
              </div>

              <div className="bg-muted rounded-lg p-4 hover:shadow-brand transition-all duration-200">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-text-primary">{event.title}</h3>
                  <span className="text-sm text-text-secondary whitespace-nowrap ml-4">
                    {event.date}
                  </span>
                </div>
                <p className="text-text-secondary">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerTimeline;