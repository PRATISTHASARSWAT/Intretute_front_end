import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Partner {
  name: string;
  logo: string;
  alt: string;
  category: string;
}

interface CaseStudy {
  company: string;
  logo: string;
  alt: string;
  result: string;
  metric: string;
  description: string;
}

export default function PartnershipsSection() {
  const partners: Partner[] = [
  {
    name: 'Google',
    logo: "https://images.unsplash.com/photo-1733703322890-2e9b8cf42bc3",
    alt: 'Google company logo on modern office building',
    category: 'Technology'
  },
  {
    name: 'Microsoft',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1de217436-1764678263291.png",
    alt: 'Microsoft corporate headquarters building exterior',
    category: 'Technology'
  },
  {
    name: 'Amazon',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_176cba9c8-1764678259125.png",
    alt: 'Amazon fulfillment center with company branding',
    category: 'E-commerce'
  },
  {
    name: 'Meta',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1879e117f-1764678257433.png",
    alt: 'Meta company campus with modern architecture',
    category: 'Social Media'
  },
  {
    name: 'Apple',
    logo: "https://images.unsplash.com/photo-1585150384627-67098d66fde3",
    alt: 'Apple retail store with iconic glass facade',
    category: 'Technology'
  },
  {
    name: 'Netflix',
    logo: "https://images.unsplash.com/photo-1695811304716-0ad3cd9a9225",
    alt: 'Netflix office building with company signage',
    category: 'Entertainment'
  }];


  const caseStudies: CaseStudy[] = [
  {
    company: 'TechCorp Solutions',
    logo: "https://images.unsplash.com/photo-1667391551176-9070c1dc52e0",
    alt: 'Modern tech company office with glass walls and collaborative workspace',
    result: '45% Faster Hiring',
    metric: '200+ Placements',
    description: 'Partnered with SkillPath Academy to create a custom training pipeline for entry-level engineers. Reduced time-to-hire by 45% while improving candidate quality scores by 60%.'
  },
  {
    company: 'Global Finance Group',
    logo: "https://images.unsplash.com/photo-1504638669523-0169664acd72",
    alt: 'Corporate financial district skyscraper with modern glass architecture',
    result: '90% Retention Rate',
    metric: '150+ Analysts Trained',
    description: 'Implemented our interview preparation program for their analyst recruitment. Achieved 90% first-year retention rate, significantly above industry average of 65%.'
  },
  {
    company: 'HealthTech Innovations',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_10f069fcd-1764678259945.png",
    alt: 'Healthcare technology office with medical professionals collaborating',
    result: '3x Application Quality',
    metric: '500+ Candidates',
    description: 'Used our platform to pre-screen and train candidates for specialized healthcare IT roles. Saw 3x improvement in application quality and 50% reduction in interview rounds needed.'
  }];


  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            We partner with over 500 companies worldwide to deliver exceptional talent and transform hiring processes. Our partnerships span technology, finance, healthcare, and beyond.
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-20">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-text-primary text-center mb-8">Our Partner Companies</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {partners.map((partner, index) =>
              <div
                key={index}
                className="flex flex-col items-center justify-center space-y-3 group">

                  <div className="w-full h-20 bg-muted rounded-lg overflow-hidden flex items-center justify-center p-4 group-hover:shadow-brand transition-all duration-300">
                    <AppImage
                    src={partner.logo}
                    alt={partner.alt}
                    className="w-full h-full object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

                  </div>
                  <span className="text-xs text-text-secondary font-medium">{partner.category}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-text-primary text-center mb-12">Partnership Success Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) =>
            <div
              key={index}
              className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-brand-lg transition-all duration-300">

                <div className="h-32 bg-muted overflow-hidden flex items-center justify-center p-6">
                  <AppImage
                  src={study.logo}
                  alt={study.alt}
                  className="w-full h-full object-contain opacity-80" />

                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-text-primary mb-4">{study.company}</h4>
                  
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-border">
                    <div>
                      <div className="text-2xl font-bold text-success">{study.result}</div>
                      <div className="text-xs text-text-secondary">Key Achievement</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-brand-primary">{study.metric}</div>
                      <div className="text-xs text-text-secondary">Total Impact</div>
                    </div>
                  </div>
                  
                  <p className="text-text-secondary text-sm leading-relaxed">{study.description}</p>
                  
                  <div className="mt-4 flex items-center space-x-2 text-brand-primary text-sm font-medium">
                    <Icon name="DocumentTextIcon" size={16} variant="outline" />
                    <span>Read Full Case Study</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-16 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl p-8 md:p-12 text-center">
          <Icon name="BuildingOfficeIcon" size={48} variant="solid" className="text-white mx-auto mb-6" />
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Interested in Partnership?
          </h3>
          <p className="text-white/90 text-lg mb-6">
            Join 500+ companies that trust SkillPath Academy for talent development and recruitment excellence.
          </p>
          <button className="px-8 py-3 bg-white text-brand-primary rounded-lg font-semibold hover:shadow-brand-lg transform hover:-translate-y-0.5 transition-all duration-200">
            Explore Partnership Opportunities
          </button>
        </div>
      </div>
    </section>);

}