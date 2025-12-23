'use client';

import { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface SuccessStory {
  name: string;
  role: string;
  company: string;
  image: string;
  alt: string;
  story: string;
  achievement: string;
  videoUrl?: string;
  beforeRole: string;
  afterRole: string;
  salaryIncrease: string;
}

export default function SuccessStoriesSection() {
  const [selectedStory, setSelectedStory] = useState<SuccessStory | null>(null);

  const stories: SuccessStory[] = [
  {
    name: 'Alex Thompson',
    role: 'Senior Software Engineer',
    company: 'Google',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1219eacec-1763294869102.png",
    alt: 'Young Caucasian man with short brown hair wearing casual blue shirt with confident smile',
    story: 'After struggling with technical interviews for months, I joined SkillPath Academy. The structured approach and mock interviews transformed my confidence. Within 3 months, I landed my dream role at Google with a 60% salary increase.',
    achievement: 'Landed role at Google',
    beforeRole: 'Junior Developer',
    afterRole: 'Senior Software Engineer',
    salaryIncrease: '+60%'
  },
  {
    name: 'Priya Sharma',
    role: 'Product Manager',
    company: 'Microsoft',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f953953d-1763294126115.png",
    alt: 'Indian woman with long dark hair wearing professional burgundy blazer with warm smile',
    story: 'Transitioning from engineering to product management seemed impossible until I found SkillPath Academy. The mentorship program and case study practice gave me the skills and confidence to make the switch successfully.',
    achievement: 'Career transition success',
    beforeRole: 'Software Engineer',
    afterRole: 'Product Manager',
    salaryIncrease: '+45%'
  },
  {
    name: 'Marcus Davis',
    role: 'Data Scientist',
    company: 'Amazon',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b1a8152e-1763295915546.png",
    alt: 'African American man with short hair wearing gray sweater with professional confident expression',
    story: 'As a career changer from finance to tech, I needed comprehensive preparation. SkillPath Academy provided everything from technical skills to behavioral interview coaching. Now I\'m living my dream as a data scientist at Amazon.',
    achievement: 'Career change to tech',
    beforeRole: 'Financial Analyst',
    afterRole: 'Data Scientist',
    salaryIncrease: '+75%'
  },
  {
    name: 'Emily Chen',
    role: 'Engineering Manager',
    company: 'Meta',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_101d5c1e5-1763296283361.png",
    alt: 'Asian woman with shoulder-length black hair wearing professional white blouse with confident smile',
    story: 'Moving into leadership required a different skill set. SkillPath Academy\'s leadership interview preparation and executive coaching helped me secure a management position at Meta. The investment paid off immediately.',
    achievement: 'Promoted to management',
    beforeRole: 'Senior Engineer',
    afterRole: 'Engineering Manager',
    salaryIncrease: '+55%'
  },
  {
    name: 'James Wilson',
    role: 'Solutions Architect',
    company: 'AWS',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_18f013076-1763294340315.png",
    alt: 'Caucasian man with short blonde hair wearing navy button-down shirt with friendly professional smile',
    story: 'After 10 years in the same role, I felt stuck. SkillPath Academy helped me identify my strengths and prepare for senior positions. The system design practice was invaluable. Now I\'m a Solutions Architect at AWS.',
    achievement: 'Senior role advancement',
    beforeRole: 'Mid-level Developer',
    afterRole: 'Solutions Architect',
    salaryIncrease: '+80%'
  },
  {
    name: 'Sofia Rodriguez',
    role: 'UX Research Lead',
    company: 'Apple',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a73b5e15-1763293788587.png",
    alt: 'Hispanic woman with long brown hair wearing professional black blazer with warm confident smile',
    story: 'Breaking into FAANG companies seemed impossible until I discovered SkillPath Academy. The portfolio review sessions and interview coaching were game-changers. I\'m now leading UX research at Apple and couldn\'t be happier.',
    achievement: 'Joined FAANG company',
    beforeRole: 'UX Researcher',
    afterRole: 'UX Research Lead',
    salaryIncrease: '+65%'
  }];


  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
            Success Stories That Inspire
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            Real people, real transformations. These are just a few of the thousands of professionals who have achieved their career goals with SkillPath Academy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stories.map((story, index) =>
          <div
            key={index}
            className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-brand-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            onClick={() => setSelectedStory(story)}>

              <div className="relative h-64 overflow-hidden bg-muted">
                <AppImage
                src={story.image}
                alt={story.alt}
                className="w-full h-full object-cover" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">{story.name}</h3>
                  <p className="text-white/90 text-sm mb-2">{story.role} at {story.company}</p>
                  <div className="inline-flex items-center space-x-2 bg-success/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <Icon name="TrophyIcon" size={14} variant="solid" className="text-white" />
                    <span className="text-white text-xs font-semibold">{story.achievement}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-4">
                  "{story.story}"
                </p>
                
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-muted rounded-lg p-3">
                    <div className="text-xs text-text-secondary mb-1">Before</div>
                    <div className="text-sm font-semibold text-text-primary">{story.beforeRole}</div>
                  </div>
                  <div className="bg-success/10 rounded-lg p-3">
                    <div className="text-xs text-success mb-1">After</div>
                    <div className="text-sm font-semibold text-success">{story.afterRole}</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon name="ArrowTrendingUpIcon" size={16} variant="solid" className="text-success" />
                    <span className="text-success font-bold">{story.salaryIncrease}</span>
                  </div>
                  <button className="text-brand-primary text-sm font-medium hover:underline">
                    Read Full Story
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {selectedStory &&
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedStory(null)}>

            <div
            className="bg-card rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}>

              <div className="relative h-80 overflow-hidden bg-muted">
                <AppImage
                src={selectedStory.image}
                alt={selectedStory.alt}
                className="w-full h-full object-cover" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <button
                onClick={() => setSelectedStory(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-200">

                  <Icon name="XMarkIcon" size={24} variant="outline" className="text-text-primary" />
                </button>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-3xl font-bold text-white mb-2">{selectedStory.name}</h3>
                  <p className="text-white/90 text-lg">{selectedStory.role} at {selectedStory.company}</p>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="flex items-center space-x-2 bg-success/10 px-4 py-2 rounded-lg">
                    <Icon name="TrophyIcon" size={20} variant="solid" className="text-success" />
                    <span className="text-success font-semibold">{selectedStory.achievement}</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-brand-primary/10 px-4 py-2 rounded-lg">
                    <Icon name="ArrowTrendingUpIcon" size={20} variant="solid" className="text-brand-primary" />
                    <span className="text-brand-primary font-semibold">{selectedStory.salaryIncrease} Salary Increase</span>
                  </div>
                </div>
                
                <div className="bg-muted rounded-xl p-6 mb-6">
                  <h4 className="font-semibold text-text-primary mb-4">Career Transformation</h4>
                  <div className="flex items-center justify-between">
                    <div className="text-center flex-1">
                      <div className="text-sm text-text-secondary mb-2">Before</div>
                      <div className="text-lg font-bold text-text-primary">{selectedStory.beforeRole}</div>
                    </div>
                    <Icon name="ArrowRightIcon" size={24} variant="outline" className="text-brand-primary mx-4" />
                    <div className="text-center flex-1">
                      <div className="text-sm text-success mb-2">After</div>
                      <div className="text-lg font-bold text-success">{selectedStory.afterRole}</div>
                    </div>
                  </div>
                </div>
                
                <div className="prose max-w-none">
                  <p className="text-text-secondary leading-relaxed text-lg">
                    "{selectedStory.story}"
                  </p>
                </div>
                
                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-text-secondary text-sm italic">
                    Ready to write your own success story? Join thousands of professionals who have transformed their careers with SkillPath Academy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        }

        <div className="max-w-4xl mx-auto mt-16 bg-gradient-to-br from-success to-success/80 rounded-2xl p-8 md:p-12 text-center">
          <Icon name="UserGroupIcon" size={48} variant="solid" className="text-white mx-auto mb-6" />
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Join 50,000+ Success Stories
          </h3>
          <p className="text-white/90 text-lg mb-6">
            Your career transformation starts here. See what's possible when you invest in yourself.
          </p>
          <button className="px-8 py-3 bg-white text-success rounded-lg font-semibold hover:shadow-brand-lg transform hover:-translate-y-0.5 transition-all duration-200">
            Start Your Journey Today
          </button>
        </div>
      </div>
    </section>);

}