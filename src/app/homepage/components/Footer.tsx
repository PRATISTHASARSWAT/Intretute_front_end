import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: 'Interview Hub', href: '/interview-hub' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Blog', href: '/blog' }
    ],
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Contact', href: '/contact' }
    ],
    resources: [
      { label: 'Help Center', href: '/help' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' }
    ]
  };

  const socialLinks = [
    { icon: 'facebook', href: '#', label: 'Facebook' },
    { icon: 'twitter', href: '#', label: 'Twitter' },
    { icon: 'linkedin', href: '#', label: 'LinkedIn' },
    { icon: 'instagram', href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="bg-brand-trust text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Link href="/homepage" className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-lg">
                <span className="text-white font-bold text-xl">SP</span>
              </div>
              <span className="text-xl font-bold">SkillPath Academy</span>
            </Link>
            <p className="text-white/70 mb-6 leading-relaxed max-w-md">
              Empowering professionals to transform their careers through expert-led interview preparation and career development resources.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.icon}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200"
                >
                  <Icon name="ShareIcon" size={20} variant="outline" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm">
              &copy; {currentYear} SkillPath Academy. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-white/70">
              <Link href="/privacy" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;