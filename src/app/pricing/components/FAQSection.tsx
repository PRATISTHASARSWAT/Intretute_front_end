'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  className?: string;
}

const FAQSection: React.FC<FAQSectionProps> = ({ className = '' }) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const faqs: FAQ[] = [
    {
      question: 'How does the 14-day free trial work?',
      answer: 'Start with full access to all Professional plan features for 14 days. No credit card required. If you love it, choose a plan. If not, no charges apply.'
    },
    {
      question: 'Can I switch plans later?',
      answer: 'Absolutely! Upgrade or downgrade anytime. When upgrading, you get immediate access to new features. Downgrades take effect at your next billing cycle.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, and bank transfers for Enterprise plans.'
    },
    {
      question: 'Is there a refund policy?',
      answer: 'Yes! We offer a 30-day money-back guarantee. If you are not satisfied within the first 30 days, contact us for a full refund, no questions asked.'
    },
    {
      question: 'Do you offer student or group discounts?',
      answer: 'Yes! Students get 20% off with valid .edu email. Groups of 5+ receive custom pricing. Contact our team for enterprise solutions.'
    },
    {
      question: 'What happens after my subscription ends?',
      answer: 'You will retain access to downloaded materials and your progress data. To continue using interactive features and new content, simply renew your subscription.'
    }
  ];

  if (!isHydrated) {
    return (
      <section className={`py-16 ${className}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-text-secondary text-lg">
                Loading FAQs...
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-text-secondary text-lg">
              Got questions? We have got answers. If you cannot find what you are looking for, contact our support team.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card rounded-xl shadow-brand border border-border overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
                >
                  <span className="font-semibold text-text-primary pr-4">
                    {faq.question}
                  </span>
                  <Icon
                    name={openIndex === index ? 'ChevronUpIcon' : 'ChevronDownIcon'}
                    size={24}
                    variant="outline"
                    className="text-text-secondary flex-shrink-0"
                  />
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6 text-text-secondary">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-text-secondary mb-4">
              Still have questions?
            </p>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/90 transition-all duration-200">
              <Icon name="ChatBubbleLeftRightIcon" size={20} variant="outline" />
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;