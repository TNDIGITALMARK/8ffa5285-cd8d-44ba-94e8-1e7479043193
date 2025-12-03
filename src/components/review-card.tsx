import Link from "next/link";
import { Star, Play } from "lucide-react";

interface ReviewCardProps {
  id: string;
  title: string;
  rating: number;
  isHot?: boolean;
  thumbnail?: string;
  videoCount?: number;
  href?: string;
}

export function ReviewCard({
  id,
  title,
  rating,
  isHot = false,
  thumbnail,
  videoCount = 1,
  href
}: ReviewCardProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  const linkHref = href || `/review/${id}`;

  return (
    <Link href={linkHref} className="group block">
      <div className="relative bg-white rounded-xl shadow hover:shadow-md transition-all duration-300 overflow-hidden">
        {/* HOT Badge */}
        {isHot && (
          <div className="hot-badge">
            HOT
          </div>
        )}

        {/* Video Thumbnail */}
        <div className="aspect-square bg-gray-100 flex items-center justify-center relative overflow-hidden">
          {thumbnail ? (
            <>
              <img
                src={thumbnail}
                alt={title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: 'hsl(var(--brand-pink))' }}>
                  <Play className="w-8 h-8 text-white fill-white ml-1" />
                </div>
              </div>
            </>
          ) : (
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-2 rounded-full flex items-center justify-center" style={{ backgroundColor: 'hsl(var(--brand-pink))' }}>
                <Play className="w-8 h-8 text-white fill-white ml-1" />
              </div>
              <p className="text-xs font-medium" style={{ color: 'hsl(var(--text-muted))' }}>
                Video Review
              </p>
            </div>
          )}

          {/* Video Count Badge */}
          {videoCount > 1 && (
            <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
              {videoCount} videos
            </div>
          )}
        </div>

        {/* Review Info */}
        <div className="p-4">
          {/* Star Rating */}
          <div className="star-rating mb-2">
            {[...Array(fullStars)].map((_, i) => (
              <Star key={`full-${i}`} className="w-3.5 h-3.5" fill="currentColor" />
            ))}
            {hasHalfStar && (
              <Star className="w-3.5 h-3.5" fill="currentColor" style={{ clipPath: 'inset(0 50% 0 0)' }} />
            )}
            {[...Array(emptyStars)].map((_, i) => (
              <Star key={`empty-${i}`} className="w-3.5 h-3.5" fill="none" stroke="currentColor" />
            ))}
          </div>

          {/* Title */}
          <h4 className="text-sm font-medium line-clamp-2" style={{ color: 'hsl(var(--text-dark))' }}>
            {title}
          </h4>
        </div>
      </div>
    </Link>
  );
}
