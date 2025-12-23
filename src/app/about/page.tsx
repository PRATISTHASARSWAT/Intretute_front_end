import type { Metadata } from 'next';
import AboutContent from './components/AboutContent';

export const metadata: Metadata = {
  title: 'About Us - SkillPath Academy',
  description: 'Discover SkillPath Academy\'s mission to bridge ambition and achievement in professional development through accessible, expert-led interview preparation and career advancement programs.',
};

export default function AboutPage() {
  return <AboutContent />;
}