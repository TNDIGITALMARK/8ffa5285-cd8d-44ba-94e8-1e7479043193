import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BlogCard } from "@/components/blog-card";

// Mock blog data
const blogPosts = [
  {
    id: "winter-must-haves",
    title: "10 Winter Must-Haves Trending on TikTok Right Now",
    excerpt: "From cozy blankets to heated gear, discover the winter essentials that are taking over your feed. We've tested them all so you don't have to.",
    date: "Dec 1, 2024",
    readTime: "5 min read",
    isHot: true
  },
  {
    id: "tiktok-shop-finds",
    title: "Best TikTok Shop Finds Under $30",
    excerpt: "Shopping on TikTok Shop? Here are the best budget-friendly products that actually deliver on their promises, tested and reviewed.",
    date: "Nov 28, 2024",
    readTime: "4 min read",
    isHot: true
  },
  {
    id: "beauty-dupes",
    title: "Viral Beauty Dupes: Are They Really Worth It?",
    excerpt: "Testing the most popular beauty product dupes on TikTok to see if they really match up to the high-end originals. The results might surprise you.",
    date: "Nov 25, 2024",
    readTime: "6 min read",
    isHot: false
  },
  {
    id: "kitchen-gadgets",
    title: "Kitchen Gadgets That Actually Changed Our Lives",
    excerpt: "Not all viral kitchen products are gimmicks. These 8 gadgets have become daily essentials in our testing kitchen and here's why.",
    date: "Nov 22, 2024",
    readTime: "5 min read",
    isHot: false
  },
  {
    id: "fitness-trends",
    title: "Fitness Products TikTok Can't Stop Talking About",
    excerpt: "From resistance bands to smart water bottles, we're reviewing the fitness gear that's actually helping people reach their goals.",
    date: "Nov 20, 2024",
    readTime: "7 min read",
    isHot: false
  },
  {
    id: "home-organization",
    title: "Home Organization Hacks That Actually Work",
    excerpt: "Testing viral organization products and methods to help you declutter and organize your space. No more aesthetic-only solutions.",
    date: "Nov 18, 2024",
    readTime: "5 min read",
    isHot: false
  },
  {
    id: "tech-accessories",
    title: "Tech Accessories Every Content Creator Needs",
    excerpt: "Building your content creation setup? These viral tech accessories are worth the investment, tested by real creators.",
    date: "Nov 15, 2024",
    readTime: "6 min read",
    isHot: false
  },
  {
    id: "pet-products",
    title: "Pet Products That Pet Owners Actually Recommend",
    excerpt: "From automatic feeders to interactive toys, we tested the most viral pet products to see which ones your furry friends will actually love.",
    date: "Nov 12, 2024",
    readTime: "4 min read",
    isHot: false
  },
  {
    id: "fashion-basics",
    title: "Wardrobe Basics Worth the TikTok Hype",
    excerpt: "Building a capsule wardrobe with viral fashion finds. We tested quality, fit, and versatility to find the true winners.",
    date: "Nov 10, 2024",
    readTime: "5 min read",
    isHot: false
  }
];

// Categories
const categories = [
  "All Posts",
  "Product Reviews",
  "Beauty & Fashion",
  "Home & Kitchen",
  "Tech & Gadgets",
  "Fitness & Wellness",
  "Trending Now"
];

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="hero-gradient py-16 px-6">
          <div className="container mx-auto text-center">
            <h1 className="text-white mb-4">
              TokTrends Blog
            </h1>
            <p className="text-white text-lg font-medium max-w-2xl mx-auto">
              Trends, guides, and honest reviews to help you shop smarter
            </p>
          </div>
        </section>

        {/* Category Filters */}
        <section className="py-8 px-6 border-b" style={{ borderColor: 'hsl(var(--border))' }}>
          <div className="container mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category, i) => (
                <button
                  key={category}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    i === 0
                      ? 'text-white'
                      : 'bg-white border hover:border-pink-200'
                  }`}
                  style={i === 0 ? { backgroundColor: 'hsl(var(--brand-pink))' } : { borderColor: 'hsl(var(--border))' }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <div className="mb-8">
              <h3 className="mb-2">Featured Posts</h3>
              <p className="text-sm" style={{ color: 'hsl(var(--text-muted))' }}>
                Our most popular and trending content
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {blogPosts.slice(0, 2).map((post) => (
                <div key={post.id} className="group">
                  <BlogCard {...post} />
                </div>
              ))}
            </div>

            <div className="mb-8">
              <h3 className="mb-2">Latest Articles</h3>
              <p className="text-sm" style={{ color: 'hsl(var(--text-muted))' }}>
                Fresh content and product insights
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogPosts.slice(2).map((post) => (
                <BlogCard key={post.id} {...post} />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 px-6" style={{ backgroundColor: 'hsl(var(--muted))' }}>
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="mb-4">Never Miss a Trend</h2>
            <p className="text-base mb-6" style={{ color: 'hsl(var(--text-muted))' }}>
              Get weekly roundups of the hottest products, honest reviews, and exclusive shopping guides.
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
            <p className="text-xs mt-4" style={{ color: 'hsl(var(--text-muted))' }}>
              Join 50K+ subscribers. Unsubscribe anytime.
            </p>
          </div>
        </section>

        {/* Trending Topics */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-4xl">
            <h3 className="mb-8 text-center">Trending Topics</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                "#StanleyTumbler",
                "#BeautyDupes",
                "#TikTokShop",
                "#HomeOrganization",
                "#FitnessGadgets",
                "#KitchenHacks",
                "#TechAccessories",
                "#ViralLeggings",
                "#WinterEssentials",
                "#PetProducts",
                "#ContentCreator",
                "#ShoppingGuide"
              ].map((tag) => (
                <a
                  key={tag}
                  href={`/blog?tag=${tag.slice(1)}`}
                  className="px-4 py-2 rounded-full text-sm font-medium border transition-colors hover:border-pink-300 hover:bg-pink-50"
                  style={{
                    borderColor: 'hsl(var(--border))',
                    color: 'hsl(var(--text-muted))'
                  }}
                >
                  {tag}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
