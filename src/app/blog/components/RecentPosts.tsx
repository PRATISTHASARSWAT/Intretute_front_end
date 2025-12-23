import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

interface RecentPost {
  id: string;
  title: string;
  publishedDate: string;
  readTime: string;
  image: string;
  imageAlt: string;
}

interface RecentPostsProps {
  posts: RecentPost[];
}

export default function RecentPosts({ posts }: RecentPostsProps) {
  return (
    <div className="bg-card rounded-xl border border-border p-6">
      <h3 className="text-lg font-bold text-text-primary mb-4">Recent Articles</h3>
      <div className="space-y-4">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.id}`}
            className="flex space-x-3 group hover:bg-muted p-2 rounded-lg transition-all duration-200"
          >
            <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
              <AppImage
                src={post.image}
                alt={post.imageAlt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-text-primary group-hover:text-brand-primary transition-colors duration-200 line-clamp-2 mb-2">
                {post.title}
              </h4>
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <Icon name="ClockIcon" size={14} variant="outline" />
                <span>{post.readTime}</span>
                <span className="text-border">•</span>
                <span>{post.publishedDate}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}