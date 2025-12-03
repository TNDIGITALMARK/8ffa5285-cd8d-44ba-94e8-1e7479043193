import Link from "next/link";
import { Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t mt-20" style={{ backgroundColor: 'hsl(var(--card-white))', borderColor: 'hsl(var(--border))' }}>
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4" style={{ color: 'hsl(var(--text-dark))' }}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:opacity-80 transition-opacity" style={{ color: 'hsl(var(--text-muted))' }}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-sm hover:opacity-80 transition-opacity" style={{ color: 'hsl(var(--text-muted))' }}>
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm hover:opacity-80 transition-opacity" style={{ color: 'hsl(var(--text-muted))' }}>
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold mb-4" style={{ color: 'hsl(var(--text-dark))' }}>
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm hover:opacity-80 transition-opacity" style={{ color: 'hsl(var(--text-muted))' }}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:opacity-80 transition-opacity" style={{ color: 'hsl(var(--text-muted))' }}>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm hover:opacity-80 transition-opacity" style={{ color: 'hsl(var(--text-muted))' }}>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold mb-4" style={{ color: 'hsl(var(--text-dark))' }}>
              Contact Info
            </h4>
            <ul className="space-y-2">
              <li className="text-sm" style={{ color: 'hsl(var(--text-muted))' }}>
                Email: hello@toktrends.com
              </li>
              <li className="text-sm" style={{ color: 'hsl(var(--text-muted))' }}>
                Follow us on social media
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold mb-4" style={{ color: 'hsl(var(--text-dark))' }}>
              Follow Us
            </h4>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/toktrends"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                style={{ background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)' }}
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://tiktok.com/@toktrends"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com/@toktrends"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t text-center" style={{ borderColor: 'hsl(var(--border))' }}>
          <p className="text-sm" style={{ color: 'hsl(var(--text-muted))' }}>
            © 2024 TokTrends. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
