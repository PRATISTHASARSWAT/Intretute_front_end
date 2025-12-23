'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface PrivacySetting {
  id: string;
  title: string;
  description: string;
  enabled: boolean;
  icon: string;
}

interface PrivacySettingsProps {
  settings: PrivacySetting[];
  onToggleSetting: (id: string) => void;
}

const PrivacySettings = ({ settings, onToggleSetting }: PrivacySettingsProps) => {
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
            <div key={i} className="h-20 bg-muted rounded" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-xl shadow-brand p-6 mb-6">
      <div className="flex items-center gap-3 mb-6">
        <Icon name="ShieldCheckIcon" size={28} variant="solid" className="text-primary" />
        <h2 className="text-2xl font-bold text-text-primary">Privacy & Security</h2>
      </div>

      <div className="space-y-4">
        {settings.map((setting) => (
          <div
            key={setting.id}
            className="border border-border rounded-lg p-4 hover:shadow-brand transition-all duration-200"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4 flex-1">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name={setting.icon as any} size={24} variant="outline" className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-text-primary mb-1">
                    {setting.title}
                  </h3>
                  <p className="text-sm text-text-secondary">
                    {setting.description}
                  </p>
                </div>
              </div>

              <button
                onClick={() => onToggleSetting(setting.id)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 flex-shrink-0 ml-4 ${
                  setting.enabled ? 'bg-success' : 'bg-muted'
                }`}
                role="switch"
                aria-checked={setting.enabled}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                    setting.enabled ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-warning/10 border border-warning/20 rounded-lg">
        <div className="flex items-start gap-3">
          <Icon name="ExclamationTriangleIcon" size={20} variant="solid" className="text-warning flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-text-primary mb-1">Two-Factor Authentication</h4>
            <p className="text-sm text-text-secondary mb-3">
              Add an extra layer of security to your account by enabling two-factor authentication.
            </p>
            <button className="px-4 py-2 bg-warning text-warning-foreground rounded-lg font-semibold hover:bg-warning/90 transition-all duration-200 text-sm">
              Enable 2FA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacySettings;