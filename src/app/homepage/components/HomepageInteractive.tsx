'use client';

import React, { useState, useEffect } from 'react';
import HeroSection from './HeroSection';
import StatsSection from './StatsSection';
import CoursePreviewCard from './CoursePreviewCard';
import TestimonialCard from './TestimonialCard';
import PartnerLogos from './PartnerLogos';
import FeaturesSection from './FeaturesSection';
import CTASection from './CTASection';
import Footer from './Footer';
import Icon from '@/components/ui/AppIcon';

interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;
  duration: string;
  level: string;
  students: number;
  rating: number;
  category: string;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  alt: string;
  testimonial: string;
  rating: number;
  achievement: string;
}

const HomepageInteractive: React.FC = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const courses: Course[] = [
  {
    id: 1,
    title: 'Technical Interview Mastery',
    description: 'Master coding interviews with data structures, algorithms, and system design patterns used by top tech companies.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_106ca577d-1763293819604.png",
    alt: 'Professional developer working on laptop with code on screen in modern office',
    duration: '12 weeks',
    level: 'Intermediate',
    students: 15420,
    rating: 4.9,
    category: 'Technical'
  },
  {
    id: 2,
    title: 'Behavioral Interview Excellence',
    description: 'Learn proven frameworks to answer behavioral questions confidently and showcase your leadership potential.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a9a0e7b9-1763295971680.png",
    alt: 'Confident businesswoman in navy blazer smiling during professional interview',
    duration: '8 weeks',
    level: 'All Levels',
    students: 22350,
    rating: 4.8,
    category: 'Behavioral'
  },
  {
    id: 3,
    title: 'Executive Leadership Interviews',
    description: 'Prepare for C-suite and senior leadership roles with strategic thinking and executive presence training.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_19265b52f-1763298597304.png",
    alt: 'Senior executive woman in gray suit presenting strategy in boardroom',
    duration: '10 weeks',
    level: 'Advanced',
    students: 8920,
    rating: 4.9,
    category: 'Leadership'
  }];


  const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Senior Software Engineer',
    company: 'Google',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_103b528db-1763293982935.png",
    alt: 'Young professional woman with long brown hair in white blouse smiling at camera',
    testimonial: 'SkillPath Academy transformed my interview skills completely. The AI-powered practice sessions helped me identify my weak points and improve systematically. I landed my dream role at Google within 2 months!',
    rating: 5,
    achievement: 'Landed role at Google with 45% salary increase'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Product Manager',
    company: 'Microsoft',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_183fc715d-1763301362797.png",
    alt: 'Asian man in navy blue suit with confident smile in modern office',
    testimonial: 'The behavioral interview course was a game-changer. The STAR method framework and real-world examples gave me the confidence to articulate my experiences effectively. Highly recommend!',
    rating: 5,
    achievement: 'Promoted to Senior PM in 6 months'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Marketing Director',
    company: 'Amazon',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_113397b14-1763299841485.png",
    alt: 'Hispanic woman with curly hair in red blazer presenting in conference room',
    testimonial: 'After a career break, I was nervous about interviewing again. SkillPath Academy not only updated my skills but also rebuilt my confidence. The community support was invaluable throughout my journey.',
    rating: 5,
    achievement: 'Successfully transitioned after 3-year career break'
  },
  {
    id: 4,
    name: 'David Park',
    role: 'Data Scientist',
    company: 'Meta',
    image: "https://images.unsplash.com/photo-1698581218869-59d08ba501bc",
    alt: 'Young man with glasses in casual blue shirt working on data analysis',
    testimonial: 'The technical interview prep was incredibly thorough. The mock interviews with detailed feedback helped me understand exactly what top companies look for. Worth every penny!',
    rating: 5,
    achievement: 'Received offers from 3 FAANG companies'
  }];


  const handlePrevTestimonial = () => {
    if (!isHydrated) return;
    setCurrentTestimonialIndex((prev) =>
    prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNextTestimonial = () => {
    if (!isHydrated) return;
    setCurrentTestimonialIndex((prev) =>
    prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="h-16 bg-card border-b border-border"></div>
        <div className="container mx-auto px-4 py-20">
          <div className="animate-pulse space-y-8">
            <div className="h-64 bg-muted rounded-xl"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) =>
              <div key={i} className="h-96 bg-muted rounded-xl"></div>
              )}
            </div>
          </div>
        </div>
      </div>);

  }

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <PartnerLogos />
      <StatsSection />

      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Popular Courses
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Expert-designed programs to help you master every aspect of the interview process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) =>
            <CoursePreviewCard key={course.id} {...course} />
            )}
          </div>
        </div>
      </section>

      <FeaturesSection />

      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Hear from professionals who transformed their careers with SkillPath Academy
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <TestimonialCard {...testimonials[currentTestimonialIndex]} />

              <div className="flex items-center justify-center gap-4 mt-8">
                <button
                  onClick={handlePrevTestimonial}
                  className="w-12 h-12 flex items-center justify-center bg-card border border-border rounded-full hover:bg-muted hover:shadow-brand transition-all duration-200"
                  aria-label="Previous testimonial">

                  <Icon name="ChevronLeftIcon" size={24} variant="outline" />
                </button>

                <div className="flex items-center gap-2">
                  {testimonials.map((_, index) =>
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonialIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentTestimonialIndex ?
                    'w-8 bg-brand-primary' : 'bg-border hover:bg-muted-foreground'}`
                    }
                    aria-label={`Go to testimonial ${index + 1}`} />

                  )}
                </div>

                <button
                  onClick={handleNextTestimonial}
                  className="w-12 h-12 flex items-center justify-center bg-card border border-border rounded-full hover:bg-muted hover:shadow-brand transition-all duration-200"
                  aria-label="Next testimonial">

                  <Icon name="ChevronRightIcon" size={24} variant="outline" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>);

};

export default HomepageInteractive;