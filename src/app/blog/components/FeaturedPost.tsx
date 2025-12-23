import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

interface FeaturedPostProps {
  id: string;
  title: string;
  excerpt: string;
  author: {
    name: string;
    avatar: string;
    avatarAlt: string;
  };
  category: string;
  readTime: string;
  publishedDate: string;
  image: string;
  imageAlt: string;
}

export default function FeaturedPost({ 
  id, 
  title, 
  excerpt, 
  author, 
  category, 
  readTime, 
  publishedDate, 
  image, 
  imageAlt 
}: FeaturedPostProps) {
  return (
    <article className="bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl overflow-hidden shadow-brand-lg">
      <div className="grid lg:grid-cols-2 gap-0">
        <div className="relative h-64 lg:h-full overflow-hidden">
          <AppImage
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-6 left-6">
            <span className="px-4 py-2 bg-accent text-white text-sm font-bold rounded-full shadow-brand flex items-center space-x-2">
              <Icon name="StarIcon" size={16} variant="solid" />
              <span>Featured Article</span>
            </span>
          </div>
        </div>

        <div className="p-8 lg:p-12 text-white flex flex-col justify-center">
          <div className="flex items-center space-x-3 mb-4">
            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
              {category}
            </span>
            <div className="flex items-center space-x-2 text-sm text-white/80">
              <Icon name="ClockIcon" size={16} variant="outline" />
              <span>{readTime}</span>
            </div>
          </div>

          <Link href={`/blog/${id}`}>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 hover:text-white/90 transition-colors duration-200">
              {title}
            </h2>
          </Link>

          <p className="text-lg text-white/90 mb-6 line-clamp-3">
            {excerpt}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/30">
                <AppImage
                  src={author.avatar}
                  alt={author.avatarAlt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold">{author.name}</p>
                <p className="text-sm text-white/70">{publishedDate}</p>
              </div>
            </div>

            <Link
              href={`/blog/${id}`}
              className="flex items-center space-x-2 px-6 py-3 bg-white text-brand-primary rounded-lg font-semibold hover:bg-white/90 hover:shadow-brand-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Read Article</span>
              <Icon name="ArrowRightIcon" size={18} variant="outline" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}