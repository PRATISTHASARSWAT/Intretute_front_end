import React from 'react';

interface Partner {
  id: number;
  name: string;
  logo: string;
}

const PartnerLogos: React.FC = () => {
  const partners: Partner[] = [
    { id: 1, name: 'Google', logo: 'Google' },
    { id: 2, name: 'Microsoft', logo: 'Microsoft' },
    { id: 3, name: 'Amazon', logo: 'Amazon' },
    { id: 4, name: 'Meta', logo: 'Meta' },
    { id: 5, name: 'Apple', logo: 'Apple' },
    { id: 6, name: 'Netflix', logo: 'Netflix' }
  ];

  return (
    <section className="py-12 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <p className="text-center text-text-secondary text-sm font-medium mb-8 uppercase tracking-wider">
          Trusted by professionals at leading companies
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-200"
            >
              <div className="text-2xl font-bold text-text-primary">
                {partner.logo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;