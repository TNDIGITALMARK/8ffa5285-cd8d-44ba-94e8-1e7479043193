import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Star, Play } from "lucide-react";
import { ProductCard } from "@/components/product-card";

// Mock product data
const products: Record<string, any> = {
  "stanley-tumbler": {
    id: "stanley-tumbler",
    title: "Stanley 40oz Tumbler",
    rating: 4.2,
    price: "$45.00",
    description: "The viral Stanley tumbler that took TikTok by storm. This 40oz insulated tumbler keeps drinks cold for hours and fits perfectly in your car cup holder.",
    pros: [
      "Excellent insulation - keeps drinks cold for 24+ hours",
      "Durable stainless steel construction",
      "Perfect size for all-day hydration",
      "Fits most car cup holders",
      "Comes in multiple trendy colors"
    ],
    cons: [
      "Premium price point",
      "Can be heavy when fully filled",
      "Handle design takes getting used to"
    ],
    buildQuality: "Excellent - Heavy-duty stainless steel with powder-coated finish",
    priceValue: "Reasonable - While expensive, the quality justifies the cost for daily use",
    viralFactor: "High - This is THE trending tumbler everyone wants",
    verdict: "If you're looking for a reliable, stylish tumbler that keeps drinks cold all day, the Stanley is worth the hype. Yes, it's pricey, but the quality and performance deliver.",
    videoCount: 3
  },
  "viral-leggings": {
    id: "viral-leggings",
    title: "TikTok Viral Leggings",
    rating: 3.8,
    price: "$28.00",
    description: "The famous 'butt-lifting' leggings that went viral on TikTok. These textured leggings promise to enhance your shape while providing comfort.",
    pros: [
      "Unique textured design",
      "Comfortable stretchy fabric",
      "High-waisted design",
      "Affordable price point",
      "Available in many colors"
    ],
    cons: [
      "Sizing can be inconsistent",
      "Quality varies by seller",
      "Not suitable for intense workouts"
    ],
    buildQuality: "Good - Decent fabric but watch for quality variations",
    priceValue: "Great - Very affordable for what you get",
    viralFactor: "Very High - One of the most talked about items on TikTok",
    verdict: "These leggings are fun and affordable, but don't expect miracles. They're comfortable for casual wear and do have a flattering design, just manage expectations.",
    videoCount: 2
  }
};

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products[params.id] || products["stanley-tumbler"];

  const fullStars = Math.floor(product.rating);
  const hasHalfStar = product.rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  // Related products
  const relatedProducts = [
    {
      id: "mini-blender",
      title: "Portable Mini Blender",
      rating: 4.5,
      price: "$35.00",
      isHot: false
    },
    {
      id: "hair-brush",
      title: "Detangling Hair Brush",
      rating: 4.0,
      price: "$18.00",
      isHot: false
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Breadcrumb */}
          <div className="mb-6 text-sm" style={{ color: 'hsl(var(--text-muted))' }}>
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">/</span>
            <a href="/products" className="hover:underline">Products</a>
            <span className="mx-2">/</span>
            <span style={{ color: 'hsl(var(--text-dark))' }}>{product.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Video & Images */}
            <div>
              {/* Main Video */}
              <div className="bg-gray-100 rounded-2xl aspect-square flex items-center justify-center mb-6 relative overflow-hidden group">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'hsl(var(--brand-pink))' }}>
                    <Play className="w-12 h-12 text-white fill-white ml-2" />
                  </div>
                  <p className="text-lg font-semibold" style={{ color: 'hsl(var(--text-dark))' }}>
                    Watch Full Review
                  </p>
                  <p className="text-sm" style={{ color: 'hsl(var(--text-muted))' }}>
                    {product.videoCount} video reviews available
                  </p>
                </div>
              </div>

              {/* Video Thumbnails */}
              <div className="grid grid-cols-3 gap-4">
                {[...Array(product.videoCount)].map((_, i) => (
                  <div key={i} className="aspect-square bg-gray-50 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors relative">
                    <Play className="w-8 h-8" style={{ color: 'hsl(var(--brand-pink))' }} />
                    <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded">
                      {i + 1}:{String(Math.floor(Math.random() * 30) + 30).padStart(2, '0')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Product Info */}
            <div>
              <h1 className="mb-4">{product.title}</h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-4">
                <div className="star-rating">
                  {[...Array(fullStars)].map((_, i) => (
                    <Star key={`full-${i}`} className="w-5 h-5" fill="currentColor" />
                  ))}
                  {hasHalfStar && (
                    <Star className="w-5 h-5" fill="currentColor" style={{ clipPath: 'inset(0 50% 0 0)' }} />
                  )}
                  {[...Array(emptyStars)].map((_, i) => (
                    <Star key={`empty-${i}`} className="w-5 h-5" fill="none" stroke="currentColor" />
                  )}
                </div>
                <span className="text-lg font-semibold">{product.rating}/5</span>
                <span className="text-sm" style={{ color: 'hsl(var(--text-muted))' }}>
                  Based on TikTok trends
                </span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span className="text-3xl font-bold" style={{ color: 'hsl(var(--brand-pink))' }}>
                  {product.price}
                </span>
              </div>

              {/* Description */}
              <p className="mb-6 text-base leading-relaxed" style={{ color: 'hsl(var(--text-muted))' }}>
                {product.description}
              </p>

              {/* CTA Button */}
              <button
                className="w-full py-4 px-6 rounded-full text-base font-semibold text-white transition-opacity hover:opacity-90 mb-6"
                style={{ backgroundColor: 'hsl(var(--brand-pink))' }}
              >
                Check Current Price
              </button>

              {/* Quick Facts */}
              <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                <div>
                  <h4 className="text-sm font-semibold mb-1" style={{ color: 'hsl(var(--text-dark))' }}>
                    Build Quality
                  </h4>
                  <p className="text-sm" style={{ color: 'hsl(var(--text-muted))' }}>
                    {product.buildQuality}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-1" style={{ color: 'hsl(var(--text-dark))' }}>
                    Price vs Value
                  </h4>
                  <p className="text-sm" style={{ color: 'hsl(var(--text-muted))' }}>
                    {product.priceValue}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-1" style={{ color: 'hsl(var(--text-dark))' }}>
                    Viral Factor
                  </h4>
                  <p className="text-sm" style={{ color: 'hsl(var(--text-muted))' }}>
                    {product.viralFactor}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Review Section */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Pros */}
            <div className="bg-white rounded-2xl p-8 shadow">
              <h3 className="mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full flex items-center justify-center bg-green-100">
                  <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                What We Love
              </h3>
              <ul className="space-y-3">
                {product.pros.map((pro: string, i: number) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm" style={{ color: 'hsl(var(--text-dark))' }}>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cons */}
            <div className="bg-white rounded-2xl p-8 shadow">
              <h3 className="mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full flex items-center justify-center bg-orange-100">
                  <svg className="w-5 h-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </span>
                Things to Consider
              </h3>
              <ul className="space-y-3">
                {product.cons.map((con: string, i: number) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm" style={{ color: 'hsl(var(--text-dark))' }}>{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Final Verdict */}
          <div className="mt-12 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8">
            <h3 className="mb-4">Our Verdict</h3>
            <p className="text-base leading-relaxed" style={{ color: 'hsl(var(--text-dark))' }}>
              {product.verdict}
            </p>
          </div>

          {/* Related Products */}
          <div className="mt-16">
            <h3 className="mb-8">You Might Also Like</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} {...relatedProduct} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
