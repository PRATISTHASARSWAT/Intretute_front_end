'use client';

import { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

interface BlogCardProps {
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
}

export default function BlogCard({ 
  id, 
  title, 
  excerpt, 
  author, 
  category, 
  readTime, 
  publishedDate, 
  image, 
  imageAlt,
  tags 
}: BlogCardProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <article className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-brand-lg transition-all duration-300 group">
      <Link href={`/blog/${id}`} className="block">
        <div className="relative h-48 overflow-hidden">
          <AppImage
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-brand-primary text-white text-xs font-semibold rounded-full">
              {category}
            </span>
          </div>
        </div>
      </Link>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Icon name="ClockIcon" size={16} variant="outline" />
            <span>{readTime}</span>
            <span className="text-border">•</span>
            <span>{publishedDate}</span>
          </div>
          <button
            onClick={() => setIsBookmarked(!isBookmarked)}
            className="p-1 hover:bg-muted rounded-md transition-colors duration-200"
            aria-label={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
          >
            <Icon 
              name="BookmarkIcon" 
              size={20} 
              variant={isBookmarked ? 'solid' : 'outline'}
              className={isBookmarked ? 'text-brand-primary' : 'text-muted-foreground'}
            />
          </button>
        </div>

        <Link href={`/blog/${id}`}>
          <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-brand-primary transition-colors duration-200 line-clamp-2">
            {title}
          </h3>
        </Link>

        <p className="text-text-secondary mb-4 line-clamp-3">
          {excerpt}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-muted text-text-secondary text-xs rounded-md hover:bg-brand-primary hover:text-white transition-colors duration-200 cursor-pointer"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center space-x-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
              <AppImage
                src={author.avatar}
                alt={author.avatarAlt}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-text-primary">{author.name}</p>
              <p className="text-xs text-muted-foreground">{author.role}</p>
            </div>
          </div>

          <Link
            href={`/blog/${id}`}
            className="flex items-center space-x-1 text-brand-primary hover:text-brand-secondary transition-colors duration-200 text-sm font-medium"
          >
            <span>Read More</span>
            <Icon name="ArrowRightIcon" size={16} variant="outline" />
          </Link>
        </div>
      </div>
    </article>
  );
}