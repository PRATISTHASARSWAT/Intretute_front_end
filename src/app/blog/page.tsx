import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import BlogInteractive from './components/BlogInteractive';

export const metadata: Metadata = {
  title: 'Blog & Career Resources - SkillPath Academy',
  description: 'Expert career advice, interview strategies, and industry insights to help you advance your professional journey. Weekly articles on interview preparation, career growth, and success stories.',
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <BlogInteractive />
      </main>
    </>
  );
}