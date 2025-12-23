'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface NotificationPreference {
  id: string;
  title: string;
  description: string;
  email: boolean;
  push: boolean;
  sms: boolean;
  category: string;
}

interface NotificationPreferencesProps {
  preferences: NotificationPreference[];
  onTogglePreference: (id: string, type: 'email' | 'push' | 'sms') => void;
}

const NotificationPreferences = ({ preferences, onTogglePreference }: NotificationPreferencesProps) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useState(() => {
    setIsHydrated(true);
  });

  if (!isHydrated) {
    return (
      <div className="bg-card rounded-xl shadow-brand p-6 mb-6">
        <div className="h-6 bg-muted rounded w-48 mb-4" />
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-24 bg-muted rounded" />
          ))}
        </div>
      </div>
    );
  }

  const categories = Array.from(new Set(preferences.map(p => p.category)));

  return (
    <div className="bg-card rounded-xl shadow-brand p-6 mb-6">
      <div className="flex items-center gap-3 mb-6">
        <Icon name="BellIcon" size={28} variant="solid" className="text-primary" />
        <h2 className="text-2xl font-bold text-text-primary">Notification Preferences</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 text-sm font-semibold text-text-primary">Notification Type</th>
              <th className="text-center py-3 px-4 text-sm font-semibold text-text-primary">Email</th>
              <th className="text-center py-3 px-4 text-sm font-semibold text-text-primary">Push</th>
              <th className="text-center py-3 px-4 text-sm font-semibold text-text-primary">SMS</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <React.Fragment key={category}>
                <tr className="bg-muted/50">
                  <td colSpan={4} className="py-2 px-4 text-sm font-semibold text-text-primary">
                    {category}
                  </td>
                </tr>
                {preferences
                  .filter(p => p.category === category)
                  .map((pref) => (
                    <tr key={pref.id} className="border-b border-border hover:bg-muted/30 transition-colors duration-200">
                      <td className="py-4 px-4">
                        <div>
                          <div className="font-medium text-text-primary">{pref.title}</div>
                          <div className="text-sm text-text-secondary">{pref.description}</div>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <button
                          onClick={() => onTogglePreference(pref.id, 'email')}
                          className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 ${
                            pref.email
                              ? 'bg-success text-success-foreground'
                              : 'bg-muted text-text-secondary hover:bg-muted/80'
                          }`}
                        >
                          <Icon name={pref.email ? 'CheckIcon' : 'XMarkIcon'} size={20} variant="solid" />
                        </button>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <button
                          onClick={() => onTogglePreference(pref.id, 'push')}
                          className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 ${
                            pref.push
                              ? 'bg-success text-success-foreground'
                              : 'bg-muted text-text-secondary hover:bg-muted/80'
                          }`}
                        >
                          <Icon name={pref.push ? 'CheckIcon' : 'XMarkIcon'} size={20} variant="solid" />
                        </button>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <button
                          onClick={() => onTogglePreference(pref.id, 'sms')}
                          className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 ${
                            pref.sms
                              ? 'bg-success text-success-foreground'
                              : 'bg-muted text-text-secondary hover:bg-muted/80'
                          }`}
                        >
                          <Icon name={pref.sms ? 'CheckIcon' : 'XMarkIcon'} size={20} variant="solid" />
                        </button>
                      </td>
                    </tr>
                  ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NotificationPreferences;