'use client';

import { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface ProfileHeaderProps {
  user: {
    name: string;
    email: string;
    avatar: string;
    avatarAlt: string;
    role: string;
    joinDate: string;
    location: string;
  };
  onEditProfile: () => void;
  onUploadPhoto: () => void;
}

const ProfileHeader = ({ user, onEditProfile, onUploadPhoto }: ProfileHeaderProps) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useState(() => {
    setIsHydrated(true);
  });

  if (!isHydrated) {
    return (
      <div className="bg-card rounded-xl shadow-brand p-6 mb-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-muted" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <div className="h-8 bg-muted rounded w-48 mb-2 mx-auto md:mx-0" />
            <div className="h-4 bg-muted rounded w-64 mb-4 mx-auto md:mx-0" />
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <div className="h-4 bg-muted rounded w-32" />
              <div className="h-4 bg-muted rounded w-32" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-xl shadow-brand p-6 mb-6">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="relative group">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary">
            <AppImage
              src={user.avatar}
              alt={user.avatarAlt}
              className="w-full h-full object-cover"
            />
          </div>
          <button
            onClick={onUploadPhoto}
            className="absolute bottom-0 right-0 bg-primary text-primary-foreground p-2 rounded-full shadow-brand-lg hover:bg-primary/90 transition-all duration-200 transform hover:scale-110"
            aria-label="Upload new profile photo"
          >
            <Icon name="CameraIcon" size={20} variant="solid" />
          </button>
        </div>

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl font-bold text-text-primary mb-2">{user.name}</h1>
          <p className="text-text-secondary mb-4">{user.email}</p>
          
          <div className="flex flex-wrap gap-4 text-sm text-text-secondary justify-center md:justify-start mb-4">
            <div className="flex items-center gap-2">
              <Icon name="BriefcaseIcon" size={16} variant="outline" />
              <span>{user.role}</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="MapPinIcon" size={16} variant="outline" />
              <span>{user.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="CalendarIcon" size={16} variant="outline" />
              <span>Joined {user.joinDate}</span>
            </div>
          </div>

          <button
            onClick={onEditProfile}
            className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 hover:shadow-brand-lg transform hover:-translate-y-0.5 transition-all duration-200 inline-flex items-center gap-2"
          >
            <Icon name="PencilIcon" size={16} variant="solid" />
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;