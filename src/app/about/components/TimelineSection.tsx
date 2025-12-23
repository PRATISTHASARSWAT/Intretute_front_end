import Icon from '@/components/ui/AppIcon';

interface Milestone {
  year: string;
  title: string;
  description: string;
  icon: string;
  achievement: string;
}

export default function TimelineSection() {
  const milestones: Milestone[] = [
    {
      year: '2020',
      title: 'Foundation',
      description: 'SkillPath Academy was founded with a mission to democratize interview preparation and career advancement.',
      icon: 'RocketLaunchIcon',
      achievement: 'First 100 students trained'
    },
    {
      year: '2021',
      title: 'Platform Launch',
      description: 'Launched our comprehensive online learning platform with AI-powered interview simulations and personalized feedback.',
      icon: 'ComputerDesktopIcon',
      achievement: '5,000+ active users'
    },
    {
      year: '2022',
      title: 'Corporate Partnerships',
      description: 'Established partnerships with Fortune 500 companies for talent development and recruitment pipelines.',
      icon: 'BuildingOfficeIcon',
      achievement: '100+ partner companies'
    },
    {
      year: '2023',
      title: 'Global Expansion',
      description: 'Expanded services internationally and introduced multilingual support for diverse learners worldwide.',
      icon: 'GlobeAltIcon',
      achievement: '25,000+ students globally'
    },
    {
      year: '2024',
      title: 'Innovation & Growth',
      description: 'Introduced advanced AI mentorship, virtual reality interview practice, and expanded curriculum to 50+ specializations.',
      icon: 'SparklesIcon',
      achievement: '50,000+ success stories'
    },
    {
      year: '2025',
      title: 'Future Vision',
      description: 'Continuing to innovate with cutting-edge technology and expanding our impact to help 100,000+ professionals achieve their career goals.',
      icon: 'LightBulbIcon',
      achievement: 'Targeting 100K+ users'
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
            Our Journey
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            From a small startup to a global leader in career development. Here's how we've grown and evolved to serve our community better.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-brand-primary via-brand-secondary to-brand-primary"></div>
            
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:text-right'
                }`}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'}`}>
                  <div className="bg-card border border-border rounded-xl p-6 hover:shadow-brand-lg transition-all duration-300 transform hover:-translate-y-1">
                    <div className={`flex items-center space-x-4 mb-4 ${index % 2 === 0 ? '' : 'md:flex-row-reverse md:space-x-reverse'}`}>
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name={milestone.icon as any} size={24} variant="solid" className="text-white" />
                      </div>
                      <div className={index % 2 === 0 ? '' : 'md:text-right'}>
                        <div className="text-3xl font-bold text-brand-primary">{milestone.year}</div>
                        <div className="text-xl font-bold text-text-primary">{milestone.title}</div>
                      </div>
                    </div>
                    
                    <p className="text-text-secondary leading-relaxed mb-4">{milestone.description}</p>
                    
                    <div className={`inline-flex items-center space-x-2 bg-success/10 px-4 py-2 rounded-lg ${index % 2 === 0 ? '' : 'md:ml-auto'}`}>
                      <Icon name="TrophyIcon" size={16} variant="solid" className="text-success" />
                      <span className="text-success font-semibold text-sm">{milestone.achievement}</span>
                    </div>
                  </div>
                </div>

                <div className="hidden md:block absolute left-1/2 top-8 transform -translate-x-1/2 w-4 h-4 bg-brand-primary rounded-full border-4 border-background"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-16 text-center">
          <div className="bg-card border border-border rounded-xl p-8">
            <Icon name="ChartBarIcon" size={48} variant="solid" className="text-brand-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Continuous Growth & Innovation
            </h3>
            <p className="text-text-secondary leading-relaxed">
              Our journey is far from over. We're committed to continuous improvement, innovation, and expanding our impact. Every milestone represents thousands of success stories and transformed careers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}