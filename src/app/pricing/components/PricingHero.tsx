import React from 'react';

interface PricingHeroProps {
  className?: string;
}

const PricingHero: React.FC<PricingHeroProps> = ({ className = '' }) => {
  return (
    <section className={`bg-gradient-to-br from-primary to-brand-secondary text-white py-20 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Invest in Your Career Success
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Choose the plan that fits your goals. All plans include our proven interview preparation system, expert guidance, and career transformation tools.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-lg">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>14-Day Free Trial</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>No Credit Card Required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>Cancel Anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingHero;