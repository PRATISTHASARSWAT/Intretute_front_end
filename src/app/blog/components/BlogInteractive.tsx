'use client';

import { useState, useEffect } from 'react';
import BlogCard from './BlogCard';
import CategoryFilter from './CategoryFilter';
import SearchBar from './SearchBar';
import FeaturedPost from './FeaturedPost';
import NewsletterSignup from './NewsletterSignup';
import PopularTags from './PopularTags';
import RecentPosts from './RecentPosts';
import Icon from '@/components/ui/AppIcon';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: {
    name: string;
    avatar: string;
    avatarAlt: string;
    role: string;
  };
  category: string;
  readTime: string;
  publishedDate: string;
  image: string;
  imageAlt: string;
  tags: string[];
  isFeatured?: boolean;
}

interface Category {
  id: string;
  name: string;
  count: number;
  icon: string;
}

interface Tag {
  name: string;
  count: number;
}

export default function BlogInteractive() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const categories: Category[] = [
  { id: 'all', name: 'All Articles', count: 24, icon: 'DocumentTextIcon' },
  { id: 'interview-prep', name: 'Interview Preparation', count: 8, icon: 'BriefcaseIcon' },
  { id: 'career-growth', name: 'Career Growth', count: 6, icon: 'ChartBarIcon' },
  { id: 'industry-insights', name: 'Industry Insights', count: 5, icon: 'LightBulbIcon' },
  { id: 'success-stories', name: 'Success Stories', count: 5, icon: 'TrophyIcon' }];


  const popularTags: Tag[] = [
  { name: 'Technical Interviews', count: 12 },
  { name: 'Behavioral Questions', count: 10 },
  { name: 'Resume Tips', count: 8 },
  { name: 'Salary Negotiation', count: 7 },
  { name: 'Remote Work', count: 6 },
  { name: 'Leadership', count: 5 }];


  const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Mastering the STAR Method: Your Secret Weapon for Behavioral Interviews',
    excerpt: 'Learn how to structure compelling answers that showcase your experience and skills using the proven STAR framework. This comprehensive guide includes real examples and practice scenarios to help you ace your next interview.',
    author: {
      name: 'Sarah Johnson',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1a9e8814c-1763296696290.png",
      avatarAlt: 'Professional woman with brown hair in business attire smiling at camera',
      role: 'Career Coach'
    },
    category: 'Interview Preparation',
    readTime: '8 min read',
    publishedDate: 'Nov 28, 2025',
    image: "https://images.unsplash.com/photo-1563457012475-13cf086fd600",
    imageAlt: 'Professional woman in navy blazer presenting to colleagues in modern conference room',
    tags: ['Behavioral Questions', 'Interview Tips', 'Career Advice'],
    isFeatured: true
  },
  {
    id: '2',
    title: '10 Common Technical Interview Mistakes and How to Avoid Them',
    excerpt: 'Discover the most frequent pitfalls candidates face during technical interviews and learn practical strategies to overcome them. From whiteboard coding to system design discussions.',
    author: {
      name: 'Michael Chen',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1303637d9-1763295051264.png",
      avatarAlt: 'Asian man with glasses and beard in casual business attire',
      role: 'Senior Software Engineer'
    },
    category: 'Interview Preparation',
    readTime: '12 min read',
    publishedDate: 'Nov 25, 2025',
    image: "https://images.unsplash.com/photo-1607266424522-ccef52eb95ac",
    imageAlt: 'Developer writing code on laptop with multiple monitors showing programming interfaces',
    tags: ['Technical Interviews', 'Coding', 'Problem Solving']
  },
  {
    id: '3',
    title: 'From Entry-Level to Manager: A 5-Year Career Roadmap',
    excerpt: 'Chart your path to leadership with this detailed roadmap covering skill development, networking strategies, and milestone achievements that accelerate career progression.',
    author: {
      name: 'Emily Rodriguez',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_15b464a88-1763295144595.png",
      avatarAlt: 'Hispanic woman with long dark hair in professional attire smiling confidently',
      role: 'Leadership Consultant'
    },
    category: 'Career Growth',
    readTime: '10 min read',
    publishedDate: 'Nov 22, 2025',
    image: "https://images.unsplash.com/photo-1606836379799-f88b03bc7039",
    imageAlt: 'Young professional climbing stairs symbolizing career advancement in modern office building',
    tags: ['Career Growth', 'Leadership', 'Professional Development']
  },
  {
    id: '4',
    title: 'The Ultimate Guide to Salary Negotiation: Get What You Deserve',
    excerpt: 'Master the art of negotiation with proven tactics, real salary data, and scripts that help you confidently discuss compensation and secure better offers.',
    author: {
      name: 'David Thompson',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1b6efa2e3-1763294502705.png",
      avatarAlt: 'Professional man in suit with short hair and confident expression',
      role: 'Compensation Specialist'
    },
    category: 'Career Growth',
    readTime: '15 min read',
    publishedDate: 'Nov 20, 2025',
    image: "https://images.unsplash.com/photo-1672380135241-c024f7fbfa13",
    imageAlt: 'Business professionals shaking hands across desk during salary negotiation meeting',
    tags: ['Salary Negotiation', 'Career Advice', 'Job Offers']
  },
  {
    id: '5',
    title: 'AI and Automation: How to Future-Proof Your Career in 2026',
    excerpt: 'Explore emerging trends in technology and learn which skills will remain valuable as automation transforms the workplace. Stay ahead of the curve with actionable insights.',
    author: {
      name: 'Dr. Priya Patel',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_12d986d21-1763300239072.png",
      avatarAlt: 'Indian woman with glasses in professional attire with warm smile',
      role: 'Tech Industry Analyst'
    },
    category: 'Industry Insights',
    readTime: '11 min read',
    publishedDate: 'Nov 18, 2025',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a4015d82-1764678259266.png",
    imageAlt: 'Futuristic workspace with AI technology displays and robotic arms in modern lab',
    tags: ['Technology', 'Future of Work', 'AI']
  },
  {
    id: '6',
    title: 'How I Landed My Dream Job at Google: A Complete Journey',
    excerpt: 'Follow one candidate\'s inspiring journey from rejection to success, including preparation strategies, interview experiences, and lessons learned along the way.',
    author: {
      name: 'Alex Martinez',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_18e8423d0-1763301660379.png",
      avatarAlt: 'Young man with friendly smile in casual business attire outdoors',
      role: 'Software Engineer at Google'
    },
    category: 'Success Stories',
    readTime: '9 min read',
    publishedDate: 'Nov 15, 2025',
    image: "https://images.unsplash.com/photo-1713085155480-674f18d7ade9",
    imageAlt: 'Excited professional celebrating success with arms raised in modern office',
    tags: ['Success Stories', 'FAANG', 'Motivation']
  },
  {
    id: '7',
    title: 'Remote Work Mastery: Building a Productive Home Office Setup',
    excerpt: 'Create the perfect remote work environment with expert tips on ergonomics, technology, and productivity systems that maximize focus and work-life balance.',
    author: {
      name: 'Jessica Lee',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1d7c851e7-1763300619895.png",
      avatarAlt: 'Asian woman with short hair in casual attire working on laptop',
      role: 'Remote Work Consultant'
    },
    category: 'Career Growth',
    readTime: '7 min read',
    publishedDate: 'Nov 12, 2025',
    image: "https://images.unsplash.com/photo-1666618207644-4de0226a3f85",
    imageAlt: 'Modern home office setup with dual monitors, plants, and ergonomic chair by window',
    tags: ['Remote Work', 'Productivity', 'Work-Life Balance']
  },
  {
    id: '8',
    title: 'The Psychology of Confidence: Overcoming Interview Anxiety',
    excerpt: 'Understand the science behind interview nerves and learn evidence-based techniques to manage anxiety, project confidence, and perform at your best under pressure.',
    author: {
      name: 'Dr. Robert Williams',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1bce4e112-1763296717744.png",
      avatarAlt: 'Professional man with gray hair and glasses in business suit',
      role: 'Organizational Psychologist'
    },
    category: 'Interview Preparation',
    readTime: '10 min read',
    publishedDate: 'Nov 10, 2025',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1bf0633c1-1763295638320.png",
    imageAlt: 'Confident professional woman in interview setting with calm composed expression',
    tags: ['Interview Tips', 'Mental Health', 'Confidence']
  },
  {
    id: '9',
    title: 'Breaking Into Tech: A Non-Traditional Career Changer\'s Guide',
    excerpt: 'Transition into the tech industry from any background with this comprehensive guide covering bootcamps, portfolio building, and networking strategies that work.',
    author: {
      name: 'Marcus Johnson',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_11792d696-1763292463383.png",
      avatarAlt: 'African American man with beard in casual professional attire smiling',
      role: 'Career Transition Coach'
    },
    category: 'Career Growth',
    readTime: '13 min read',
    publishedDate: 'Nov 8, 2025',
    image: "https://images.unsplash.com/photo-1595905156193-c6bed84f13eb",
    imageAlt: 'Diverse group of professionals collaborating on tech project with laptops and tablets',
    tags: ['Career Change', 'Tech Industry', 'Bootcamps']
  }];


  const recentPosts = blogPosts.slice(0, 4).map((post) => ({
    id: post.id,
    title: post.title,
    publishedDate: post.publishedDate,
    readTime: post.readTime,
    image: post.image,
    imageAlt: post.imageAlt
  }));

  useEffect(() => {
    if (!isHydrated) return;

    let filtered = blogPosts;

    if (activeCategory !== 'all') {
      const categoryName = categories.find((cat) => cat.id === activeCategory)?.name;
      filtered = filtered.filter((post) => post.category === categoryName);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((post) =>
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      post.tags.some((tag) => tag.toLowerCase().includes(query)) ||
      post.author.name.toLowerCase().includes(query)
      );
    }

    setFilteredPosts(filtered);
  }, [activeCategory, searchQuery, isHydrated]);

  const featuredPost = blogPosts.find((post) => post.isFeatured);
  const regularPosts = isHydrated ? filteredPosts.filter((post) => !post.isFeatured) : [];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setSearchQuery('');
  };

  const handleTagClick = (tag: string) => {
    setSearchQuery(tag);
    setActiveCategory('all');
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse space-y-8">
            <div className="h-96 bg-muted rounded-2xl"></div>
            <div className="grid lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) =>
              <div key={i} className="h-96 bg-muted rounded-xl"></div>
              )}
            </div>
          </div>
        </div>
      </div>);

  }

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Career Insights & Resources
            </h1>
            <p className="text-lg text-text-secondary">
              Expert advice, industry insights, and proven strategies to accelerate your career growth
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {featuredPost &&
        <div className="mb-12">
            <FeaturedPost {...featuredPost} />
          </div>
        }

        <div className="grid lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1 space-y-6">
            <CategoryFilter
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange} />

            <PopularTags tags={popularTags} onTagClick={handleTagClick} />
            <RecentPosts posts={recentPosts} />
          </aside>

          <main className="lg:col-span-3">
            {regularPosts.length > 0 ?
            <>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-text-primary">
                    {searchQuery ? `Search Results for "${searchQuery}"` : 'Latest Articles'}
                  </h2>
                  <span className="text-sm text-muted-foreground">
                    {regularPosts.length} {regularPosts.length === 1 ? 'article' : 'articles'}
                  </span>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  {regularPosts.map((post) =>
                <BlogCard key={post.id} {...post} />
                )}
                </div>

                <div className="flex justify-center">
                  <button className="flex items-center space-x-2 px-6 py-3 bg-card border border-border rounded-lg text-text-primary hover:bg-muted hover:shadow-brand transition-all duration-200 font-medium">
                    <span>Load More Articles</span>
                    <Icon name="ArrowDownIcon" size={18} variant="outline" />
                  </button>
                </div>
              </> :

            <div className="text-center py-16">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-muted rounded-full mb-4">
                  <Icon name="MagnifyingGlassIcon" size={32} variant="outline" className="text-muted-foreground" />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-2">No articles found</h3>
                <p className="text-text-secondary mb-6">
                  Try adjusting your search or filter to find what you're looking for
                </p>
                <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="px-6 py-3 bg-brand-primary text-white rounded-lg font-semibold hover:bg-brand-primary/90 transition-colors duration-200">

                  Clear Filters
                </button>
              </div>
            }
          </main>
        </div>

        <div className="mt-16">
          <NewsletterSignup />
        </div>
      </div>
    </div>);

}