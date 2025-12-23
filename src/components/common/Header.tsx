'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface HeaderProps {
  className?: string;
}

const Header = ({ className = '' }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);

  const primaryNavItems = [
    { label: 'Home', href: '/homepage' },
    { label: 'Interview Hub', href: '/interview-hub' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Blog', href: '/blog' },
  ];

  const secondaryNavItems = [
    { label: 'About', href: '/about' },
    { label: 'Profile', href: '/profile-management' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsMoreMenuOpen(false);
  };

  const toggleMoreMenu = () => {
    setIsMoreMenuOpen(!isMoreMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-card border-b border-border shadow-brand ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/homepage" className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-lg">
              <span className="text-white font-bold text-xl">SP</span>
            </div>
            <span className="text-xl font-bold text-text-primary hidden sm:block">SkillPath Academy</span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {primaryNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-text-primary hover:text-brand-primary hover:bg-muted rounded-md transition-all duration-200 font-medium"
              >
                {item.label}
              </Link>
            ))}

            <div className="relative">
              <button
                onClick={toggleMoreMenu}
                className="flex items-center space-x-1 px-4 py-2 text-text-primary hover:text-brand-primary hover:bg-muted rounded-md transition-all duration-200 font-medium"
              >
                <span>More</span>
                <Icon 
                  name={isMoreMenuOpen ? 'ChevronUpIcon' : 'ChevronDownIcon'} 
                  size={16} 
                  variant="outline"
                />
              </button>

              {isMoreMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-brand-lg animate-scale-in">
                  {secondaryNavItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMoreMenuOpen(false)}
                      className="block px-4 py-3 text-text-primary hover:text-brand-primary hover:bg-muted transition-all duration-200 first:rounded-t-lg last:rounded-b-lg"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <div className="hidden lg:flex items-center space-x-3">
            <Link
              href="/login"
              className="px-4 py-2 text-text-primary hover:text-brand-primary font-medium transition-colors duration-200"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="px-6 py-2 bg-success text-success-foreground rounded-lg font-semibold hover:bg-success/90 hover:shadow-brand-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Start Free Trial
            </Link>
          </div>

          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-text-primary hover:text-brand-primary hover:bg-muted rounded-md transition-all duration-200"
            aria-label="Toggle mobile menu"
          >
            <Icon 
              name={isMobileMenuOpen ? 'XMarkIcon' : 'Bars3Icon'} 
              size={24} 
              variant="outline"
            />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-card border-t border-border animate-slide-in">
          <nav className="container mx-auto px-4 py-4 space-y-1">
            {[...primaryNavItems, ...secondaryNavItems].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-text-primary hover:text-brand-primary hover:bg-muted rounded-md transition-all duration-200 font-medium"
              >
                {item.label}
              </Link>
            ))}
            
            <div className="pt-4 space-y-2 border-t border-border mt-4">
              <Link
                href="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full px-4 py-3 text-center text-text-primary hover:text-brand-primary hover:bg-muted rounded-md font-medium transition-all duration-200"
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full px-4 py-3 text-center bg-success text-success-foreground rounded-lg font-semibold hover:bg-success/90 transition-all duration-200"
              >
                Start Free Trial
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;