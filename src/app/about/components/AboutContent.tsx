'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/common/Header';
import HeroSection from './HeroSection';
import MissionSection from './MissionSection';
import TeamSection from './TeamSection';
import MethodologySection from './MethodologySection';
import PartnershipsSection from './PartnershipsSection';
import TimelineSection from './TimelineSection';
import SuccessStoriesSection from './SuccessStoriesSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

export default function AboutContent() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-16">
          <div className="container mx-auto px-4 py-16">
            <div className="animate-pulse space-y-8">
              <div className="h-12 bg-muted rounded w-3/4 mx-auto"></div>
              <div className="h-6 bg-muted rounded w-1/2 mx-auto"></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                {[1, 2, 3]?.map((i) => (
                  <div key={i} className="h-64 bg-muted rounded-lg"></div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <HeroSection />
        <MissionSection />
        <MethodologySection />
        <TeamSection />
        <PartnershipsSection />
        <TimelineSection />
        <SuccessStoriesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}