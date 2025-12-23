'use client';

import React, { useState, useEffect } from 'react';
import HeroSection from './HeroSection';
import SearchAndFilter from './SearchAndFilter';
import QuestionCategoryCard from './QuestionCategoryCard';
import FeatureCard from './FeatureCard';
import TestimonialCard from './TestimonialCard';
import StatCard from './StatCard';
import PracticeSimulator from './PracticeSimulator';
import Icon from '@/components/ui/AppIcon';

interface FilterState {
  difficulty: string[];
  category: string[];
  industry: string[];
}

const InterviewHubInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [isPracticeOpen, setIsPracticeOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<FilterState>({
    difficulty: [],
    category: [],
    industry: []
  });

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const questionCategories = [
  {
    id: 'behavioral',
    title: 'Behavioral Questions',
    description: 'Master the art of storytelling with STAR method responses. Learn to showcase your soft skills and past experiences effectively.',
    icon: 'UserGroupIcon',
    questionCount: 150,
    difficulty: 'Beginner' as const,
    color: 'bg-gradient-to-br from-blue-500 to-blue-600'
  },
  {
    id: 'technical',
    title: 'Technical Questions',
    description: 'Sharpen your problem-solving skills with coding challenges, system design, and technical concept explanations.',
    icon: 'CodeBracketIcon',
    questionCount: 200,
    difficulty: 'Advanced' as const,
    color: 'bg-gradient-to-br from-purple-500 to-purple-600'
  },
  {
    id: 'situational',
    title: 'Situational Questions',
    description: 'Practice handling hypothetical scenarios and demonstrate your decision-making abilities under pressure.',
    icon: 'LightBulbIcon',
    questionCount: 120,
    difficulty: 'Intermediate' as const,
    color: 'bg-gradient-to-br from-amber-500 to-amber-600'
  },
  {
    id: 'leadership',
    title: 'Leadership & Management',
    description: 'Prepare for senior roles with questions about team management, conflict resolution, and strategic thinking.',
    icon: 'TrophyIcon',
    questionCount: 80,
    difficulty: 'Advanced' as const,
    color: 'bg-gradient-to-br from-emerald-500 to-emerald-600'
  },
  {
    id: 'case-study',
    title: 'Case Study Analysis',
    description: 'Develop analytical thinking with business cases, market analysis, and strategic problem-solving scenarios.',
    icon: 'ChartBarIcon',
    questionCount: 60,
    difficulty: 'Advanced' as const,
    color: 'bg-gradient-to-br from-red-500 to-red-600'
  },
  {
    id: 'industry-specific',
    title: 'Industry-Specific',
    description: 'Tailored questions for your target industry including finance, tech, healthcare, marketing, and more.',
    icon: 'BriefcaseIcon',
    questionCount: 180,
    difficulty: 'Intermediate' as const,
    color: 'bg-gradient-to-br from-indigo-500 to-indigo-600'
  }];


  const features = [
  {
    id: '1',
    title: 'AI-Powered Feedback',
    description: 'Get instant, personalized feedback on your answers with our advanced AI technology that analyzes content, structure, and delivery.',
    icon: 'SparklesIcon',
    benefits: [
    'Real-time response analysis',
    'Personalized improvement suggestions',
    'Confidence scoring and metrics']

  },
  {
    id: '2',
    title: 'Voice Recording Practice',
    description: 'Practice speaking your answers aloud and receive feedback on pace, clarity, and filler words to improve your verbal communication.',
    icon: 'MicrophoneIcon',
    benefits: [
    'Speech pattern analysis',
    'Pronunciation feedback',
    'Timing and pace optimization']

  },
  {
    id: '3',
    title: 'Progress Tracking',
    description: 'Monitor your improvement over time with detailed analytics, performance trends, and achievement milestones.',
    icon: 'ChartBarIcon',
    benefits: [
    'Visual progress dashboards',
    'Skill gap identification',
    'Achievement badges and streaks']

  },
  {
    id: '4',
    title: 'Industry-Specific Content',
    description: 'Access curated question banks tailored to your target industry, role, and experience level for maximum relevance.',
    icon: 'BriefcaseIcon',
    benefits: [
    'Role-specific question sets',
    'Industry trend insights',
    'Company culture preparation']

  }];


  const testimonials = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Software Engineer',
    company: 'Google',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_117cb52db-1763299573499.png",
    alt: 'Professional woman with long brown hair in white blouse smiling confidently at camera',
    quote: 'SkillPath Academy transformed my interview skills completely. The AI feedback helped me identify weak points I never knew I had. After 3 weeks of practice, I landed my dream job at Google!',
    rating: 5,
    achievement: 'Landed job at Google with 40% salary increase'
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Product Manager',
    company: 'Amazon',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_17238a8e5-1763298648377.png",
    alt: 'Asian man in navy blue suit with short black hair smiling professionally',
    quote: 'The practice simulator is incredibly realistic. It helped me overcome my nervousness and speak confidently. The behavioral question bank was exactly what I needed for my PM interviews.',
    rating: 5,
    achievement: 'Received 3 offers from FAANG companies'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Marketing Director',
    company: 'Microsoft',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_13ead6b88-1763293887937.png",
    alt: 'Hispanic woman with curly dark hair in professional gray blazer smiling warmly',
    quote: 'As someone transitioning from a different industry, I was worried about my interview performance. SkillPath gave me the confidence and structure I needed. The progress tracking kept me motivated throughout.',
    rating: 5,
    achievement: 'Successfully transitioned to tech industry'
  }];


  const stats = [
  {
    id: '1',
    label: 'Average Success Rate',
    value: '92%',
    icon: 'TrophyIcon',
    trend: '+8% this month',
    color: 'bg-gradient-to-br from-success to-success/80'
  },
  {
    id: '2',
    label: 'Practice Sessions Completed',
    value: '50K+',
    icon: 'AcademicCapIcon',
    trend: '+2.5K this week',
    color: 'bg-gradient-to-br from-brand-primary to-brand-secondary'
  },
  {
    id: '3',
    label: 'Average Salary Increase',
    value: '35%',
    icon: 'CurrencyDollarIcon',
    trend: '+5% YoY',
    color: 'bg-gradient-to-br from-accent to-accent/80'
  },
  {
    id: '4',
    label: 'User Satisfaction',
    value: '4.9/5',
    icon: 'StarIcon',
    trend: '10K+ reviews',
    color: 'bg-gradient-to-br from-warning to-warning/80'
  }];


  const handleStartPractice = () => {
    setIsPracticeOpen(true);
  };

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setIsPracticeOpen(true);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection onStartPractice={handleStartPractice} />

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) =>
            <StatCard key={stat.id} stat={stat} />
            )}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              Browse Question Categories
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Choose from our comprehensive collection of interview questions tailored to your needs
            </p>
          </div>

          <SearchAndFilter onSearch={handleSearch} onFilterChange={handleFilterChange} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {questionCategories.map((category) =>
            <QuestionCategoryCard
              key={category.id}
              category={category}
              onSelect={handleCategorySelect} />

            )}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              Powerful Features to Accelerate Your Success
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Everything you need to master your interview skills and land your dream job
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) =>
            <FeatureCard key={feature.id} feature={feature} />
            )}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              Success Stories from Our Community
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Join thousands of professionals who've transformed their careers with SkillPath Academy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) =>
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            )}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-brand-primary to-brand-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Ace Your Next Interview?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Start practicing today with our AI-powered interview simulator and join thousands of successful professionals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleStartPractice}
                className="px-8 py-4 bg-success text-success-foreground rounded-lg font-semibold text-lg hover:bg-success/90 hover:shadow-brand-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2">

                <Icon name="PlayIcon" size={24} variant="solid" />
                Start Free Practice
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-200 flex items-center justify-center gap-2">
                <Icon name="ChatBubbleLeftRightIcon" size={24} variant="outline" />
                Talk to an Expert
              </button>
            </div>
          </div>
        </div>
      </section>

      <PracticeSimulator
        isOpen={isPracticeOpen}
        onClose={() => setIsPracticeOpen(false)}
        selectedCategory={selectedCategory} />

    </div>);

};

export default InterviewHubInteractive;