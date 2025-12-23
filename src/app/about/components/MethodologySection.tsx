import Icon from '@/components/ui/AppIcon';

interface MethodologyStep {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export default function MethodologySection() {
  const steps: MethodologyStep[] = [
    {
      number: '01',
      title: 'Assessment & Goal Setting',
      description: 'We start by understanding your current skills, career goals, and target roles. Our AI-powered assessment identifies your strengths and areas for growth.',
      icon: 'ChartBarIcon'
    },
    {
      number: '02',
      title: 'Personalized Learning Path',
      description: 'Based on your assessment, we create a customized curriculum that focuses on the specific skills and knowledge you need for your target interviews.',
      icon: 'MapIcon'
    },
    {
      number: '03',
      title: 'Structured Practice',
      description: 'Engage with interactive scenarios, mock interviews, and real-world case studies. Our platform provides immediate feedback and tracks your progress.',
      icon: 'AcademicCapIcon'
    },
    {
      number: '04',
      title: 'Expert Mentorship',
      description: 'Connect with industry professionals who provide personalized guidance, review your performance, and share insider tips for success.',
      icon: 'UserGroupIcon'
    },
    {
      number: '05',
      title: 'Performance Analytics',
      description: 'Track your improvement with detailed analytics. See exactly how you\'re progressing and where to focus your efforts for maximum impact.',
      icon: 'PresentationChartLineIcon'
    },
    {
      number: '06',
      title: 'Career Success',
      description: 'Apply your new skills with confidence. Our alumni network and career support continue even after you land your dream role.',
      icon: 'TrophyIcon'
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
            Our Proven Methodology
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            A systematic approach that transforms nervous candidates into confident professionals. Our six-step process has helped thousands achieve their career goals.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-brand-lg transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 text-8xl font-bold text-muted opacity-20 group-hover:opacity-30 transition-opacity">
                  {step.number}
                </div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center mb-4">
                    <Icon name={step.icon as any} size={24} variant="solid" className="text-white" />
                  </div>
                  
                  <div className="text-sm font-bold text-brand-primary mb-2">STEP {step.number}</div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">{step.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-16 text-center">
          <div className="bg-card border border-border rounded-xl p-8">
            <Icon name="CheckBadgeIcon" size={48} variant="solid" className="text-success mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Results-Driven Approach
            </h3>
            <p className="text-text-secondary leading-relaxed">
              Our methodology isn't just theory—it's backed by data. Students who complete our full program see an average 85% improvement in interview performance and a 92% success rate in landing their target roles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}