import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            Join 50,000+ professionals who have successfully landed their dream jobs. Start your free trial today and experience the difference.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link
              href="/signup"
              className="w-full sm:w-auto px-8 py-4 bg-success text-success-foreground rounded-lg font-semibold text-lg hover:bg-success/90 hover:shadow-brand-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
            >
              Start Free Trial
              <Icon name="ArrowRightIcon" size={20} variant="outline" />
            </Link>
            <Link
              href="/pricing"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-200"
            >
              View Pricing
            </Link>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <Icon name="CheckCircleIcon" size={20} variant="solid" className="text-accent" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="CheckCircleIcon" size={20} variant="solid" className="text-accent" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="CheckCircleIcon" size={20} variant="solid" className="text-accent" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;