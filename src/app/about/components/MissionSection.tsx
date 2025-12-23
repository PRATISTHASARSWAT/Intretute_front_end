import Icon from '@/components/ui/AppIcon';

interface ValueCard {
  icon: string;
  title: string;
  description: string;
  color: string;
}

export default function MissionSection() {
  const values: ValueCard[] = [
    {
      icon: 'AcademicCapIcon',
      title: 'Accessibility',
      description: 'Making high-quality interview preparation and career advancement accessible to everyone, regardless of their starting point.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: 'LightBulbIcon',
      title: 'Expertise',
      description: 'Delivering authoritative yet encouraging guidance from industry professionals who understand the real challenges of career growth.',
      color: 'from-violet-500 to-violet-600'
    },
    {
      icon: 'RocketLaunchIcon',
      title: 'Transformation',
      description: 'Empowering professionals to build confidence and achieve measurable career advancement through structured, proven methodologies.',
      color: 'from-emerald-500 to-emerald-600'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
            Our Mission & Values
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            We exist to transform career confidence and make professional success achievable for everyone. Our core values guide every decision we make and every program we create.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-8 hover:shadow-brand-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-6`}>
                <Icon name={value.icon as any} size={32} variant="solid" className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">{value.title}</h3>
              <p className="text-text-secondary leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-16 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            "Transform your career confidence. Practice makes permanent. Your success is our mission."
          </h3>
          <p className="text-white/90 text-lg">
            These aren't just words—they're the foundation of everything we do at SkillPath Academy.
          </p>
        </div>
      </div>
    </section>
  );
}