
import Icon from '@/components/ui/AppIcon';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-primary py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Icon name="SparklesIcon" size={20} variant="solid" className="text-accent" />
            <span className="text-white font-medium">Transforming Careers Since 2020</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Bridging Ambition & Achievement
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            We're not just a learning platform—we're your career catalyst. At SkillPath Academy, we transform professional development from intimidating to empowering.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
              <div className="text-3xl font-bold text-white">50K+</div>
              <div className="text-white/80 text-sm">Students Trained</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
              <div className="text-3xl font-bold text-white">92%</div>
              <div className="text-white/80 text-sm">Success Rate</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-white/80 text-sm">Partner Companies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}