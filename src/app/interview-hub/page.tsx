import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import InterviewHubInteractive from './components/InterviewHubInteractive';

export const metadata: Metadata = {
  title: 'Interview Hub - SkillPath Academy',
  description: 'Master your interview skills with AI-powered practice, real-time feedback, and comprehensive question banks. Access 500+ interview questions across behavioral, technical, and situational categories.',
};

export default function InterviewHubPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <InterviewHubInteractive />
      </main>
    </>
  );
}