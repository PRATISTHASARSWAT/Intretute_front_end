'use client';

import { useState } from 'react';
import ProfileHeader from './ProfileHeader';
import SkillsSection from './SkillsSection';
import AchievementsSection from './AchievementsSection';
import CareerTimeline from './CareerTimeline';
import PrivacySettings from './PrivacySettings';
import NotificationPreferences from './NotificationPreferences';

interface User {
  name: string;
  email: string;
  avatar: string;
  avatarAlt: string;
  role: string;
  joinDate: string;
  location: string;
}

interface Skill {
  id: number;
  name: string;
  level: number;
  endorsements: number;
  category: string;
}

interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: string;
  earnedDate: string;
  category: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

interface TimelineEvent {
  id: number;
  title: string;
  description: string;
  date: string;
  type: 'course' | 'achievement' | 'milestone' | 'certification';
  icon: string;
}

interface PrivacySetting {
  id: string;
  title: string;
  description: string;
  enabled: boolean;
  icon: string;
}

interface NotificationPreference {
  id: string;
  title: string;
  description: string;
  email: boolean;
  push: boolean;
  sms: boolean;
  category: string;
}

interface ProfileManagementInteractiveProps {
  userData: User;
  skillsData: Skill[];
  achievementsData: Achievement[];
  timelineData: TimelineEvent[];
  privacyData: PrivacySetting[];
  notificationsData: NotificationPreference[];
}

const ProfileManagementInteractive = ({
  userData,
  skillsData,
  achievementsData,
  timelineData,
  privacyData,
  notificationsData
}: ProfileManagementInteractiveProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [privacySettings, setPrivacySettings] = useState(privacyData);
  const [notificationPreferences, setNotificationPreferences] = useState(notificationsData);

  useState(() => {
    setIsHydrated(true);
  });

  const handleEditProfile = () => {
    alert('Edit Profile functionality - This would open a modal or navigate to an edit page');
  };

  const handleUploadPhoto = () => {
    alert('Upload Photo functionality - This would open a file picker');
  };

  const handleAddSkill = () => {
    alert('Add Skill functionality - This would open a modal to add a new skill');
  };

  const handleTogglePrivacySetting = (id: string) => {
    if (!isHydrated) return;
    
    setPrivacySettings(prev =>
      prev.map(setting =>
        setting.id === id ? { ...setting, enabled: !setting.enabled } : setting
      )
    );
  };

  const handleToggleNotificationPreference = (id: string, type: 'email' | 'push' | 'sms') => {
    if (!isHydrated) return;
    
    setNotificationPreferences(prev =>
      prev.map(pref =>
        pref.id === id ? { ...pref, [type]: !pref[type] } : pref
      )
    );
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="h-8 bg-muted rounded w-64 mb-8" />
            <div className="space-y-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-64 bg-card rounded-xl" />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <ProfileHeader
        user={userData}
        onEditProfile={handleEditProfile}
        onUploadPhoto={handleUploadPhoto}
      />

      <SkillsSection
        skills={skillsData}
        onAddSkill={handleAddSkill}
      />

      <AchievementsSection achievements={achievementsData} />

      <CareerTimeline events={timelineData} />

      <PrivacySettings
        settings={privacySettings}
        onToggleSetting={handleTogglePrivacySetting}
      />

      <NotificationPreferences
        preferences={notificationPreferences}
        onTogglePreference={handleToggleNotificationPreference}
      />
    </div>
  );
};

export default ProfileManagementInteractive;