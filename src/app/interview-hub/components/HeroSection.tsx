import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface HeroSectionProps {
  onStartPractice: () => void;
}

const HeroSection = ({ onStartPractice }: HeroSectionProps) => {
  return (
    <section className="relative bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-secondary/80 text-white py-20 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Icon name="SparklesIcon" size={20} variant="solid" className="text-accent" />
            <span className="text-sm font-medium">AI-Powered Interview Practice</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Master Your Interview Skills with Confidence
          </h1>
          
          <p className="text-xl lg:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Practice with real interview questions, get instant AI feedback, and track your progress. Join thousands who've landed their dream jobs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={onStartPractice}
              className="w-full sm:w-auto px-8 py-4 bg-success text-success-foreground rounded-lg font-semibold text-lg hover:bg-success/90 hover:shadow-brand-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Icon name="PlayIcon" size={24} variant="solid" />
              Start Free Practice
            </button>
            
            <button className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-200 flex items-center justify-center gap-2">
              <Icon name="AcademicCapIcon" size={24} variant="outline" />
              View Success Stories
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">15,000+</div>
              <div className="text-white/80">Success Stories</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-white/80">Practice Questions</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">92%</div>
              <div className="text-white/80">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;