import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ProductCard } from "@/components/product-card";
import { ReviewCard } from "@/components/review-card";
import { NeonPlayIcon } from "@/components/neon-play-icon";

// Mock data for featured products
const featuredProducts = [
  {
    id: "stanley-tumbler",
    title: "Stanley 40oz Tumbler",
    rating: 4.2,
    isHot: true,
    price: "$45.00"
  },
  {
    id: "viral-leggings",
    title: "TikTok Viral Leggings",
    rating: 3.8,
    isHot: true,
    price: "$28.00"
  },
  {
    id: "mini-blender",
    title: "Portable Mini Blender",
    rating: 4.5,
    isHot: false,
    price: "$35.00"
  },
  {
    id: "hair-brush",
    title: "Detangling Hair Brush",
    rating: 4.0,
    isHot: false,
    price: "$18.00"
  }
];

// Mock data for latest reviews
const latestReviews = [
  {
    id: "stanley-review",
    title: "Is the Stanley Tumbler Worth the Hype?",
    rating: 4.2,
    isHot: true,
    videoCount: 3
  },
  {
    id: "leggings-review",
    title: "Testing Viral TikTok Leggings",
    rating: 3.8,
    isHot: true,
    videoCount: 2
  },
  {
    id: "blender-review",
    title: "Portable Blender - Real Results",
    rating: 4.5,
    isHot: false,
    videoCount: 1
  },
  {
    id: "brush-review",
    title: "Does This Brush Really Work?",
    rating: 4.0,
    isHot: false,
    videoCount: 1
  }
];

// Mock data for trending now
const trendingPosts = [
  {
    id: "tiktok-hacks",
    title: "5 TikTok Hacks for Your Home",
    rating: 4.3,
    isHot: true,
    videoCount: 5
  },
  {
    id: "beauty-products",
    title: "Beauty Products That Broke the Internet",
    rating: 4.6,
    isHot: true,
    videoCount: 4
  },
  {
    id: "tech-gadgets",
    title: "Tech Gadgets You Need Now",
    rating: 4.4,
    isHot: false,
    videoCount: 3
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="hero-gradient py-16 px-6 relative overflow-hidden">
          {/* Decorative neon play icons */}
          <div className="absolute top-10 right-10 opacity-20">
            <NeonPlayIcon className="w-32 h-32" />
          </div>
          <div className="absolute bottom-10 left-10 opacity-15">
            <NeonPlayIcon className="w-24 h-24" />
          </div>

          <div className="container mx-auto relative z-10">
            <div className="max-w-4xl">
              {/* Main heading with neon icon accent */}
              <div className="flex items-center gap-4 mb-4">
                <NeonPlayIcon className="w-12 h-12 flex-shrink-0" />
                <h1 className="text-white">
                  DISCOVER WHAT&apos;S VIRAL.<br />
                  SHOP THE TRENDS
                </h1>
              </div>
              <p className="text-white text-lg mb-8 font-medium max-w-2xl">
                Quick, honest reviews of trending TikTok products. Save time and money with our unbiased product insights.
              </p>

              {/* Featured Products Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {featuredProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>

              {/* Social Proof */}
              <div className="mt-8 flex flex-wrap items-center gap-6 text-white">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                  <span className="font-semibold">25K followers on TikTok</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <rect width="24" height="24" rx="5.4" fill="url(#instagram-gradient)"/>
                    <defs>
                      <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#f09433" />
                        <stop offset="25%" stopColor="#e6683c" />
                        <stop offset="50%" stopColor="#dc2743" />
                        <stop offset="75%" stopColor="#cc2366" />
                        <stop offset="100%" stopColor="#bc1888" />
                      </linearGradient>
                    </defs>
                    <circle cx="12" cy="12" r="4" fill="none" stroke="white" strokeWidth="2"/>
                    <circle cx="12" cy="12" r="6.5" fill="none" stroke="white" strokeWidth="2"/>
                    <circle cx="17.5" cy="6.5" r="1" fill="white"/>
                  </svg>
                  <span className="font-semibold">18K followers on Instagram</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Reviews Section */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <h3 className="mb-8">Latest Reviews</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {latestReviews.map((review) => (
                <ReviewCard key={review.id} {...review} />
              ))}
            </div>
          </div>
        </section>

        {/* Trending Now Section */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <h3 className="mb-8">Trending Now</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {trendingPosts.map((post) => (
                <div key={post.id} className="relative bg-white rounded-xl shadow hover:shadow-md transition-all duration-300 overflow-hidden group">
                  {post.isHot && (
                    <div className="hot-badge">
                      HOT
                    </div>
                  )}

                  {/* Thumbnail */}
                  <div className="aspect-video bg-gray-100 flex items-center justify-center relative">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-2 rounded-full flex items-center justify-center" style={{ backgroundColor: 'hsl(var(--brand-pink))' }}>
                        <svg className="w-8 h-8 text-white fill-white" viewBox="0 0 24 24">
                          <polygon points="5 3 19 12 5 21 5 3" fill="currentColor"/>
                        </svg>
                      </div>
                    </div>

                    {/* Video count badge */}
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {post.videoCount} videos
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h4 className="text-base font-semibold mb-2" style={{ color: 'hsl(var(--text-dark))' }}>
                      {post.title}
                    </h4>
                    <p className="text-sm mb-3" style={{ color: 'hsl(var(--text-muted))' }}>
                      Discover the latest trending products everyone is talking about on TikTok.
                    </p>
                    <button
                      className="w-full py-2 px-4 rounded-full text-sm font-medium text-white transition-opacity hover:opacity-90"
                      style={{ backgroundColor: 'hsl(var(--brand-pink))' }}
                    >
                      Watch Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 px-6" style={{ backgroundColor: 'hsl(var(--muted))' }}>
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="mb-4">Stay Updated with Trends</h2>
            <p className="text-base mb-6" style={{ color: 'hsl(var(--text-muted))' }}>
              Get the latest product reviews and trending finds delivered to your inbox weekly.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full border-0"
                style={{ backgroundColor: 'hsl(var(--card-white))' }}
              />
              <button
                type="submit"
                className="px-8 py-3 rounded-full text-white font-medium whitespace-nowrap transition-opacity hover:opacity-90"
                style={{ backgroundColor: 'hsl(var(--brand-pink))' }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}