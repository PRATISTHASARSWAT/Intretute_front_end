import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className = '' }) => {
  return (
    <section className={`relative bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-primary overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 py-20 md:py-28 lg:py-36 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
            <Icon name="SparklesIcon" size={20} variant="solid" className="text-accent" />
            <span className="text-white text-sm font-medium">Join 50,000+ successful career changers</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Transform Your Career
            <span className="block mt-2 bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
              With Confidence
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Master interview skills, build professional confidence, and land your dream job with expert-led courses and AI-powered practice tools.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/signup"
              className="w-full sm:w-auto px-8 py-4 bg-success text-success-foreground rounded-lg font-semibold text-lg hover:bg-success/90 hover:shadow-brand-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
            >
              Start Free Trial
              <Icon name="ArrowRightIcon" size={20} variant="outline" />
            </Link>
            <Link
              href="/interview-hub"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-200 flex items-center justify-center gap-2"
            >
              Explore Resources
              <Icon name="PlayIcon" size={20} variant="solid" />
            </Link>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <Icon name="CheckCircleIcon" size={20} variant="solid" className="text-accent" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="CheckCircleIcon" size={20} variant="solid" className="text-accent" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="CheckCircleIcon" size={20} variant="solid" className="text-accent" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;