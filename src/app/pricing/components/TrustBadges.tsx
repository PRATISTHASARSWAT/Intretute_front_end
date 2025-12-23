import React from 'react';
import AppImage from '@/components/ui/AppImage';

interface TrustBadgesProps {
  className?: string;
}

const TrustBadges: React.FC<TrustBadgesProps> = ({ className = '' }) => {
  const partners = [
  {
    name: 'Google',
    logo: "https://images.unsplash.com/photo-1577071835592-d5d55ffef660",
    alt: 'Google logo in blue, red, yellow, and green colors on white background'
  },
  {
    name: 'Microsoft',
    logo: "https://images.unsplash.com/photo-1706426634339-153de9f0c7f8",
    alt: 'Microsoft logo with four colored squares in red, green, blue, and yellow'
  },
  {
    name: 'Amazon',
    logo: "https://images.unsplash.com/photo-1704204656144-3dd12c110dd8",
    alt: 'Amazon logo with black text and orange arrow smile underneath'
  },
  {
    name: 'Meta',
    logo: "https://images.unsplash.com/photo-1644035525244-893298c05355",
    alt: 'Meta logo with blue infinity symbol on white background'
  },
  {
    name: 'Apple',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1ef9ee667-1764678255992.png",
    alt: 'Apple logo showing iconic bitten apple silhouette in black'
  },
  {
    name: 'IBM',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_134b8af1c-1764678255722.png",
    alt: 'IBM logo with blue horizontal striped letters on white background'
  }];


  return (
    <section className={`py-12 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-text-secondary font-semibold uppercase tracking-wide text-sm mb-4">
            Trusted by professionals at leading companies
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) =>
          <div
            key={index}
            className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">

              <div className="relative w-32 h-16">
                <AppImage
                src={partner.logo}
                alt={partner.alt}
                className="w-full h-full object-contain" />

              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default TrustBadges;