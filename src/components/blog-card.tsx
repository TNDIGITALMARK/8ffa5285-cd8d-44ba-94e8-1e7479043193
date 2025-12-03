import Link from "next/link";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  thumbnail?: string;
  isHot?: boolean;
  href?: string;
}

export function BlogCard({
  id,
  title,
  excerpt,
  date,
  readTime,
  thumbnail,
  isHot = false,
  href
}: BlogCardProps) {
  const linkHref = href || `/blog/${id}`;

  return (
    <Link href={linkHref} className="group block">
      <div className="relative bg-white rounded-xl shadow hover:shadow-md transition-all duration-300 overflow-hidden">
        {/* HOT Badge */}
        {isHot && (
          <div className="hot-badge">
            HOT
          </div>
        )}

        {/* Thumbnail */}
        <div className="aspect-video bg-gray-100 flex items-center justify-center overflow-hidden">
          {thumbnail ? (
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="text-center p-6">
              <div className="w-full h-32 rounded-lg" style={{ backgroundColor: 'hsl(var(--muted))' }} />
            </div>
          )}
        </div>

        {/* Blog Info */}
        <div className="p-4">
          {/* Meta Info */}
          <div className="flex items-center gap-3 mb-2 text-xs" style={{ color: 'hsl(var(--text-muted))' }}>
            <span>{date}</span>
            <span>•</span>
            <span>{readTime}</span>
          </div>

          {/* Title */}
          <h4 className="text-base font-semibold mb-2 line-clamp-2" style={{ color: 'hsl(var(--text-dark))' }}>
            {title}
          </h4>

          {/* Excerpt */}
          <p className="text-sm line-clamp-2 mb-3" style={{ color: 'hsl(var(--text-muted))' }}>
            {excerpt}
          </p>

          {/* Read More Link */}
          <span className="text-sm font-medium inline-flex items-center gap-1" style={{ color: 'hsl(var(--brand-pink))' }}>
            Read More
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
