'use client';

import { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  alt: string;
  credentials: string[];
  linkedin: string;
  videoIntro?: string;
}

export default function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const team: TeamMember[] = [
  {
    name: 'Sarah Chen',
    role: 'Founder & CEO',
    bio: 'Former Google recruiter with 15+ years of experience in tech hiring. Sarah has interviewed over 10,000 candidates and trained hiring managers at Fortune 500 companies.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a951bde7-1763293325685.png",
    alt: 'Professional Asian woman with shoulder-length black hair wearing navy blazer smiling confidently',
    credentials: ['Ex-Google Recruiter', 'TEDx Speaker', 'Author of "Interview Mastery"'],
    linkedin: '#'
  },
  {
    name: 'Marcus Johnson',
    role: 'Head of Curriculum',
    bio: 'Career coach and instructional designer who has helped over 5,000 professionals transition into tech roles. Marcus specializes in behavioral interview preparation.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e9c20dd1-1763296910707.png",
    alt: 'African American man with short hair and beard wearing gray suit jacket with warm smile',
    credentials: ['Certified Career Coach', 'MBA Stanford', '20+ Years Experience'],
    linkedin: '#'
  },
  {
    name: 'Dr. Emily Rodriguez',
    role: 'Chief Learning Officer',
    bio: 'Educational psychologist specializing in adult learning and skill acquisition. Emily designs our evidence-based learning methodologies.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_15a974ac7-1763294414068.png",
    alt: 'Hispanic woman with long brown hair wearing professional white blouse with confident expression',
    credentials: ['PhD Educational Psychology', 'Published Researcher', 'Learning Science Expert'],
    linkedin: '#'
  },
  {
    name: 'David Park',
    role: 'Head of Technology',
    bio: 'Former engineering manager at Amazon and Microsoft. David leads our platform development and AI-powered interview simulation technology.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_194fdce8b-1763294134167.png",
    alt: 'Asian man with short black hair wearing casual button-down shirt with friendly smile',
    credentials: ['Ex-Amazon/Microsoft', 'AI/ML Specialist', '15+ Years in Tech'],
    linkedin: '#'
  },
  {
    name: 'Jennifer Williams',
    role: 'Director of Partnerships',
    bio: 'Corporate training specialist who has built relationships with over 500 companies. Jennifer manages our employer partnerships and placement programs.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b24a7c2e-1763296129552.png",
    alt: 'Caucasian woman with blonde hair in professional black blazer with warm welcoming smile',
    credentials: ['Corporate Training Expert', 'MBA Harvard', '500+ Partner Companies'],
    linkedin: '#'
  },
  {
    name: 'Raj Patel',
    role: 'Senior Career Mentor',
    bio: 'Industry veteran with experience across startups and enterprises. Raj provides one-on-one mentorship and specializes in technical interview preparation.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d0e3a9c4-1763296413590.png",
    alt: 'Indian man with short dark hair wearing casual gray sweater with confident professional demeanor',
    credentials: ['20+ Years Industry Experience', 'Startup Advisor', 'Technical Interview Expert'],
    linkedin: '#'
  }];


  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
            Meet Our Expert Team
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            Our team combines decades of industry experience with a passion for education. We're not just teachers—we're career transformation specialists who have walked the path ourselves.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) =>
          <div
            key={index}
            className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-brand-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            onClick={() => setSelectedMember(member)}>

              <div className="relative h-64 overflow-hidden bg-muted">
                <AppImage
                src={member.image}
                alt={member.alt}
                className="w-full h-full object-cover" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-white/90 text-sm">{member.role}</p>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
                  {member.bio}
                </p>
                
                <div className="space-y-2 mb-4">
                  {member.credentials.slice(0, 2).map((credential, idx) =>
                <div key={idx} className="flex items-center space-x-2">
                      <Icon name="CheckCircleIcon" size={16} variant="solid" className="text-success flex-shrink-0" />
                      <span className="text-xs text-text-secondary">{credential}</span>
                    </div>
                )}
                </div>
                
                <button className="w-full py-2 px-4 bg-muted hover:bg-brand-primary hover:text-white rounded-lg transition-all duration-200 text-sm font-medium flex items-center justify-center space-x-2">
                  <span>View Full Profile</span>
                  <Icon name="ArrowRightIcon" size={16} variant="outline" />
                </button>
              </div>
            </div>
          )}
        </div>

        {selectedMember &&
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedMember(null)}>

            <div
            className="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}>

              <div className="relative h-64 overflow-hidden bg-muted">
                <AppImage
                src={selectedMember.image}
                alt={selectedMember.alt}
                className="w-full h-full object-cover" />

                <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-200">

                  <Icon name="XMarkIcon" size={24} variant="outline" className="text-text-primary" />
                </button>
              </div>
              
              <div className="p-8">
                <h3 className="text-3xl font-bold text-text-primary mb-2">{selectedMember.name}</h3>
                <p className="text-brand-primary font-semibold mb-6">{selectedMember.role}</p>
                
                <p className="text-text-secondary leading-relaxed mb-6">{selectedMember.bio}</p>
                
                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-text-primary">Credentials & Achievements:</h4>
                  {selectedMember.credentials.map((credential, idx) =>
                <div key={idx} className="flex items-start space-x-3">
                      <Icon name="CheckBadgeIcon" size={20} variant="solid" className="text-success flex-shrink-0 mt-0.5" />
                      <span className="text-text-secondary">{credential}</span>
                    </div>
                )}
                </div>
                
                <a
                href={selectedMember.linkedin}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-brand-primary text-white rounded-lg hover:bg-brand-primary/90 transition-all duration-200">

                  <Icon name="UserIcon" size={20} variant="solid" />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        }
      </div>
    </section>);

}