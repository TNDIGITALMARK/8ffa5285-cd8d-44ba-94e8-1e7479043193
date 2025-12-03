import Link from "next/link";
import { Star } from "lucide-react";

interface ProductCardProps {
  id: string;
  title: string;
  rating: number;
  isHot?: boolean;
  image?: string;
  price?: string;
  href?: string;
}

export function ProductCard({
  id,
  title,
  rating,
  isHot = false,
  image,
  price,
  href
}: ProductCardProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  const linkHref = href || `/product/${id}`;

  return (
    <Link href={linkHref} className="group block">
      <div className="relative bg-white rounded-xl shadow hover:shadow-md transition-all duration-300 overflow-hidden group-hover:scale-[1.02]">
        {/* HOT Badge */}
        {isHot && (
          <div className="hot-badge">
            HOT
          </div>
        )}

        {/* Product Image */}
        <div className="aspect-square bg-gray-50 flex items-center justify-center p-6">
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-2 rounded-lg" style={{ backgroundColor: 'hsl(var(--muted))' }} />
              <p className="text-xs font-medium" style={{ color: 'hsl(var(--text-muted))' }}>
                Product Image
              </p>
            </div>
          )}
        </div>

        {/* Product Info */}
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
          <h4 className="text-sm font-medium mb-1 line-clamp-2" style={{ color: 'hsl(var(--text-dark))' }}>
            {title}
          </h4>

          {/* Price */}
          {price && (
            <p className="text-sm font-semibold" style={{ color: 'hsl(var(--brand-pink))' }}>
              {price}
            </p>
          )}

          {/* View Button */}
          <button
            className="mt-3 w-full py-2 px-4 rounded-full text-xs font-medium text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: 'hsl(var(--brand-pink))' }}
          >
            View Review
          </button>
        </div>
      </div>
    </Link>
  );
}
