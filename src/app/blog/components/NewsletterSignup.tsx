'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setIsSubscribed(false);
      }, 3000);
    }
  };

  return (
    <div className="bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl p-8 text-white">
      <div className="flex items-start space-x-4 mb-6">
        <div className="p-3 bg-white/20 backdrop-blur-sm rounded-lg">
          <Icon name="EnvelopeIcon" size={24} variant="outline" />
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
          <p className="text-white/90">
            Get weekly career insights, interview tips, and exclusive resources delivered to your inbox.
          </p>
        </div>
      </div>

      {isSubscribed ? (
        <div className="flex items-center space-x-3 p-4 bg-success/20 backdrop-blur-sm rounded-lg border border-white/30">
          <Icon name="CheckCircleIcon" size={24} variant="solid" className="text-white" />
          <p className="font-semibold">Successfully subscribed! Check your email for confirmation.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-white text-brand-primary rounded-lg font-semibold hover:bg-white/90 hover:shadow-brand-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center space-x-2"
          >
            <span>Subscribe</span>
            <Icon name="PaperAirplaneIcon" size={18} variant="solid" />
          </button>
        </form>
      )}

      <p className="text-xs text-white/70 mt-4">
        By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
      </p>
    </div>
  );
}