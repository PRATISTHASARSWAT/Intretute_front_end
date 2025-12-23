'use client';

import React, { useState, useEffect } from 'react';
import PricingCard from './PricingCard';
import TestimonialCard from './TestimonialCard';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingPlan {
  title: string;
  subtitle: string;
  price: string;
  period: string;
  features: PricingFeature[];
  isPopular?: boolean;
  ctaText: string;
  badge?: string;
}

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  alt: string;
  quote: string;
  salaryIncrease: string;
  rating: number;
}

const PricingInteractive: React.FC = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const pricingPlans: PricingPlan[] = [
  {
    title: 'Starter',
    subtitle: 'Perfect for getting started',
    price: '$49',
    period: 'month',
    ctaText: 'Start Free Trial',
    features: [
    { text: '100+ practice interview questions', included: true },
    { text: 'Video interview simulations', included: true },
    { text: 'Basic video tutorials', included: true },
    { text: 'Resume builder tool', included: true },
    { text: 'Job application tracker', included: true },
    { text: 'Community forum access', included: true },
    { text: 'Email support (48hr response)', included: true },
    { text: 'AI-powered feedback', included: false },
    { text: 'Industry-specific questions', included: false },
    { text: 'One-on-one mentorship', included: false }]

  },
  {
    title: 'Professional',
    subtitle: 'Most popular for career changers',
    price: '$99',
    period: 'month',
    ctaText: 'Start Free Trial',
    isPopular: true,
    badge: 'MOST POPULAR',
    features: [
    { text: '500+ practice interview questions', included: true },
    { text: 'Video interview simulations', included: true },
    { text: 'Advanced video tutorials', included: true },
    { text: 'Resume builder & optimizer', included: true },
    { text: 'Job application tracker', included: true },
    { text: 'Community forum access', included: true },
    { text: 'Email support (24hr response)', included: true },
    { text: 'AI-powered feedback', included: true },
    { text: 'Industry-specific questions', included: true },
    { text: '2 mentor sessions per month', included: true },
    { text: 'LinkedIn profile optimizer', included: true },
    { text: 'Exclusive webinars', included: true }]

  },
  {
    title: 'Enterprise',
    subtitle: 'For teams and organizations',
    price: 'Custom',
    period: 'contact us',
    ctaText: 'Contact Sales',
    features: [
    { text: 'Unlimited practice questions', included: true },
    { text: 'Video interview simulations', included: true },
    { text: 'Premium video tutorials', included: true },
    { text: 'All career tools included', included: true },
    { text: 'Job application tracker', included: true },
    { text: 'Community forum access', included: true },
    { text: 'Priority support', included: true },
    { text: 'AI-powered feedback', included: true },
    { text: 'Industry-specific questions', included: true },
    { text: 'Unlimited mentor sessions', included: true },
    { text: 'Personal branding tools', included: true },
    { text: 'Dedicated account manager', included: true },
    { text: 'Custom training programs', included: true },
    { text: 'Team analytics dashboard', included: true }]

  }];


  const testimonials: Testimonial[] = [
  {
    name: 'Sarah Johnson',
    role: 'Software Engineer',
    company: 'Google',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ffde516e-1763293580273.png",
    alt: 'Professional woman with long brown hair in navy blazer smiling at camera in modern office',
    quote: 'SkillPath Academy transformed my interview skills completely. The AI feedback was incredibly detailed and helped me land my dream job at Google.',
    salaryIncrease: '$35,000',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Product Manager',
    company: 'Microsoft',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_10ddd37f7-1763301351016.png",
    alt: 'Asian man in gray suit with glasses smiling confidently in corporate setting',
    quote: 'The mock interview sessions were game-changers. I went from nervous to confident in just two weeks. Worth every penny!',
    salaryIncrease: '$42,000',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    role: 'Data Scientist',
    company: 'Amazon',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_10bbbf135-1763294543564.png",
    alt: 'Hispanic woman with curly hair in professional attire smiling warmly in bright office',
    quote: 'After a career break, I was anxious about interviews. SkillPath gave me the confidence and skills to succeed. Now I am at Amazon!',
    salaryIncrease: '$38,500',
    rating: 5
  }];


  const handleCtaClick = (planTitle: string) => {
    if (!isHydrated) return;

    if (planTitle === 'Enterprise') {
      console.log('Redirecting to enterprise contact form');
    } else {
      console.log(`Starting free trial for ${planTitle} plan`);
    }
  };

  if (!isHydrated) {
    return (
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-text-secondary">Loading pricing options...</p>
          </div>
        </div>
      </div>);

  }

  return (
    <>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) =>
            <PricingCard
              key={index}
              {...plan}
              onCtaClick={() => handleCtaClick(plan.title)} />

            )}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Success Stories from Our Members
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Real people, real results. See how SkillPath Academy helped professionals like you achieve their career goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) =>
            <TestimonialCard key={index} testimonial={testimonial} />
            )}
          </div>
        </div>
      </section>
    </>);

};

export default PricingInteractive;