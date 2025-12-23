import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ProfileManagementInteractive from './components/ProfileManagementInteractive';

export const metadata: Metadata = {
  title: 'Profile Management - SkillPath Academy',
  description: 'Manage your profile, track skills, view achievements, and customize your learning experience at SkillPath Academy.'
};

export default function ProfileManagementPage() {
  const userData = {
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1ffde516e-1763293580273.png",
    avatarAlt: "Professional headshot of woman with brown hair in navy blazer smiling at camera in modern office setting",
    role: "Senior Software Engineer",
    joinDate: "03/15/2024",
    location: "San Francisco, CA"
  };

  const skillsData = [
  {
    id: 1,
    name: "JavaScript",
    level: 92,
    endorsements: 47,
    category: "Programming Languages"
  },
  {
    id: 2,
    name: "React",
    level: 88,
    endorsements: 39,
    category: "Frontend Frameworks"
  },
  {
    id: 3,
    name: "Node.js",
    level: 85,
    endorsements: 34,
    category: "Backend Technologies"
  },
  {
    id: 4,
    name: "System Design",
    level: 78,
    endorsements: 28,
    category: "Architecture"
  },
  {
    id: 5,
    name: "TypeScript",
    level: 90,
    endorsements: 42,
    category: "Programming Languages"
  },
  {
    id: 6,
    name: "AWS",
    level: 75,
    endorsements: 31,
    category: "Cloud Platforms"
  },
  {
    id: 7,
    name: "Docker",
    level: 82,
    endorsements: 36,
    category: "DevOps"
  },
  {
    id: 8,
    name: "PostgreSQL",
    level: 80,
    endorsements: 29,
    category: "Databases"
  }];


  const achievementsData = [
  {
    id: 1,
    title: "First Interview Ace",
    description: "Successfully completed your first mock interview with a score above 85%",
    icon: "TrophyIcon",
    earnedDate: "04/12/2024",
    category: "Interview Mastery",
    rarity: "common" as const
  },
  {
    id: 2,
    title: "Course Completion Champion",
    description: "Completed 5 courses with perfect attendance and all assignments submitted",
    icon: "AcademicCapIcon",
    earnedDate: "05/20/2024",
    category: "Learning Excellence",
    rarity: "rare" as const
  },
  {
    id: 3,
    title: "Skill Master",
    description: "Achieved expert level (90%+) proficiency in 3 different skills",
    icon: "StarIcon",
    earnedDate: "06/08/2024",
    category: "Skill Development",
    rarity: "epic" as const
  },
  {
    id: 4,
    title: "Community Leader",
    description: "Helped 50+ peers by answering questions and providing mentorship",
    icon: "UserGroupIcon",
    earnedDate: "07/15/2024",
    category: "Community Engagement",
    rarity: "rare" as const
  },
  {
    id: 5,
    title: "Perfect Streak",
    description: "Maintained a 30-day learning streak without missing a single day",
    icon: "FireIcon",
    earnedDate: "08/22/2024",
    category: "Consistency",
    rarity: "epic" as const
  },
  {
    id: 6,
    title: "Career Transformer",
    description: "Successfully landed a new job within 90 days of joining the platform",
    icon: "BriefcaseIcon",
    earnedDate: "09/10/2024",
    category: "Career Success",
    rarity: "legendary" as const
  }];


  const timelineData = [
  {
    id: 1,
    title: "Joined SkillPath Academy",
    description: "Started your journey towards career excellence and professional growth",
    date: "03/15/2024",
    type: "milestone" as const,
    icon: "RocketLaunchIcon"
  },
  {
    id: 2,
    title: "Completed React Fundamentals",
    description: "Mastered core React concepts including hooks, state management, and component lifecycle",
    date: "04/28/2024",
    type: "course" as const,
    icon: "BookOpenIcon"
  },
  {
    id: 3,
    title: "First Interview Success",
    description: "Scored 87% on your first technical interview simulation",
    date: "05/10/2024",
    type: "achievement" as const,
    icon: "TrophyIcon"
  },
  {
    id: 4,
    title: "AWS Solutions Architect Certification",
    description: "Earned industry-recognized certification in cloud architecture and services",
    date: "06/22/2024",
    type: "certification" as const,
    icon: "ShieldCheckIcon"
  },
  {
    id: 5,
    title: "Advanced System Design Course",
    description: "Completed comprehensive training in scalable system architecture and design patterns",
    date: "08/05/2024",
    type: "course" as const,
    icon: "BookOpenIcon"
  },
  {
    id: 6,
    title: "Career Milestone: Senior Engineer",
    description: "Successfully transitioned to Senior Software Engineer role at a Fortune 500 company",
    date: "09/10/2024",
    type: "milestone" as const,
    icon: "BriefcaseIcon"
  }];


  const privacyData = [
  {
    id: "profile-visibility",
    title: "Public Profile",
    description: "Make your profile visible to other learners and potential employers",
    enabled: true,
    icon: "EyeIcon"
  },
  {
    id: "show-achievements",
    title: "Display Achievements",
    description: "Show your badges and achievements on your public profile",
    enabled: true,
    icon: "TrophyIcon"
  },
  {
    id: "show-progress",
    title: "Share Learning Progress",
    description: "Allow others to see your course completion and skill levels",
    enabled: false,
    icon: "ChartBarIcon"
  },
  {
    id: "allow-messages",
    title: "Accept Messages",
    description: "Enable other users to send you direct messages for networking",
    enabled: true,
    icon: "ChatBubbleLeftRightIcon"
  },
  {
    id: "show-activity",
    title: "Activity Status",
    description: "Display when you\'re online and actively learning",
    enabled: false,
    icon: "ClockIcon"
  },
  {
    id: "data-analytics",
    title: "Learning Analytics",
    description: "Allow us to analyze your learning patterns to provide personalized recommendations",
    enabled: true,
    icon: "ChartPieIcon"
  }];


  const notificationsData = [
  {
    id: "course-updates",
    title: "Course Updates",
    description: "New lessons, materials, or announcements in your enrolled courses",
    email: true,
    push: true,
    sms: false,
    category: "Learning"
  },
  {
    id: "assignment-deadlines",
    title: "Assignment Deadlines",
    description: "Reminders about upcoming assignment due dates",
    email: true,
    push: true,
    sms: true,
    category: "Learning"
  },
  {
    id: "achievement-unlocked",
    title: "Achievement Unlocked",
    description: "Notifications when you earn new badges or reach milestones",
    email: true,
    push: true,
    sms: false,
    category: "Achievements"
  },
  {
    id: "skill-endorsements",
    title: "Skill Endorsements",
    description: "When someone endorses your skills or expertise",
    email: true,
    push: false,
    sms: false,
    category: "Community"
  },
  {
    id: "mentor-messages",
    title: "Mentor Messages",
    description: "Direct messages from your assigned mentors",
    email: true,
    push: true,
    sms: false,
    category: "Community"
  },
  {
    id: "peer-connections",
    title: "Peer Connection Requests",
    description: "When other learners want to connect with you",
    email: true,
    push: false,
    sms: false,
    category: "Community"
  },
  {
    id: "interview-reminders",
    title: "Interview Practice Reminders",
    description: "Scheduled reminders for your practice interview sessions",
    email: true,
    push: true,
    sms: true,
    category: "Career Tools"
  },
  {
    id: "job-opportunities",
    title: "Job Opportunities",
    description: "Relevant job postings matching your skills and preferences",
    email: true,
    push: false,
    sms: false,
    category: "Career Tools"
  },
  {
    id: "platform-updates",
    title: "Platform Updates",
    description: "New features, improvements, and important announcements",
    email: true,
    push: false,
    sms: false,
    category: "System"
  },
  {
    id: "security-alerts",
    title: "Security Alerts",
    description: "Login attempts, password changes, and security notifications",
    email: true,
    push: true,
    sms: true,
    category: "System"
  }];


  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-text-primary mb-2">Profile Management</h1>
              <p className="text-text-secondary">
                Manage your account settings, track your progress, and customize your learning experience
              </p>
            </div>

            <ProfileManagementInteractive
              userData={userData}
              skillsData={skillsData}
              achievementsData={achievementsData}
              timelineData={timelineData}
              privacyData={privacyData}
              notificationsData={notificationsData} />

          </div>
        </div>
      </main>
    </>);

}