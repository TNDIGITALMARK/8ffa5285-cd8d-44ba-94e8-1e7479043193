"use client";

import Link from "next/link";
import { Instagram, Youtube } from "lucide-react";
import { Logo } from "./logo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full" style={{ backgroundColor: 'hsl(var(--dark-header))' }}>
      <div className="container mx-auto px-6 h-[60px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Logo variant="light" className="h-8 w-auto" showText={true} />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-medium text-white hover:opacity-80 transition-opacity"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="text-sm font-medium text-white hover:opacity-80 transition-opacity"
          >
            Products
          </Link>
          <Link
            href="/reviews"
            className="text-sm font-medium text-white hover:opacity-80 transition-opacity"
          >
            Reviews
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium text-white hover:opacity-80 transition-opacity"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-white hover:opacity-80 transition-opacity"
          >
            Contact
          </Link>
        </nav>

        {/* Social Icons */}
        <div className="flex items-center gap-3">
          <a
            href="https://instagram.com/toktrends"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity"
            style={{ background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)' }}
            aria-label="Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href="https://tiktok.com/@toktrends"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white hover:opacity-80 transition-opacity"
            aria-label="TikTok"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
          </a>
          <a
            href="https://youtube.com/@toktrends"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white hover:opacity-80 transition-opacity"
            aria-label="YouTube"
          >
            <Youtube className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
