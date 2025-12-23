'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(2025);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const footerLinks = {
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
      { label: 'Blog', href: '/blog' }
    ],
    programs: [
      { label: 'Interview Hub', href: '/interview-hub' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Success Stories', href: '#' },
      { label: 'Free Resources', href: '#' }
    ],
    support: [
      { label: 'Help Center', href: '#' },
      { label: 'Contact Us', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: 'GlobeAltIcon', label: 'Website', href: '#' },
    { icon: 'EnvelopeIcon', label: 'Email', href: 'mailto:hello@skillpath.academy' }
  ];

  return (
    <footer className="bg-brand-trust text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2">
            <Link href="/homepage" className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-lg">
                <span className="text-white font-bold text-xl">SP</span>
              </div>
              <span className="text-xl font-bold">SkillPath Academy</span>
            </Link>
            <p className="text-white/70 mb-4 leading-relaxed">
              Bridging ambition and achievement in professional development. Transform your career confidence with expert-led interview preparation.
            </p>
            <div className="flex items-center space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-200"
                  aria-label={social.label}
                >
                  <Icon name={social.icon as any} size={20} variant="outline" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
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
            <h3 className="font-bold mb-4">Programs</h3>
            <ul className="space-y-2">
              {footerLinks.programs.map((link, index) => (
                <li key={index}>
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
            <h3 className="font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
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

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/70 text-sm">
              &copy; {currentYear} SkillPath Academy. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-white/70">
              <Link href="#" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-white transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}