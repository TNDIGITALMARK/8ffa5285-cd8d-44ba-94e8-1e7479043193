"use client";

export function NeonPlayIcon({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        style={{
          filter: "drop-shadow(0 0 8px hsl(var(--brand-cyan))) drop-shadow(0 0 16px hsl(var(--brand-pink)))",
        }}
      >
        {/* Gradient Definition */}
        <defs>
          <linearGradient id="neon-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "hsl(var(--brand-cyan))", stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: "hsl(195 80% 80%)", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "hsl(var(--brand-pink))", stopOpacity: 1 }} />
          </linearGradient>

          {/* Glow filter */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Play Triangle */}
        <path
          d="M 30 20 L 30 80 L 75 50 Z"
          fill="url(#neon-gradient)"
          stroke="url(#neon-gradient)"
          strokeWidth="3"
          strokeLinejoin="round"
          filter="url(#glow)"
          style={{
            transition: "all 0.3s ease",
          }}
        />

        {/* Motion trail effect - subtle lines behind */}
        <path
          d="M 20 25 L 20 75"
          stroke="hsl(var(--brand-pink))"
          strokeWidth="2"
          opacity="0.4"
          strokeLinecap="round"
        />
        <path
          d="M 15 30 L 15 70"
          stroke="hsl(var(--brand-cyan))"
          strokeWidth="2"
          opacity="0.3"
          strokeLinecap="round"
        />
        <path
          d="M 10 35 L 10 65"
          stroke="hsl(var(--brand-pink))"
          strokeWidth="1.5"
          opacity="0.2"
          strokeLinecap="round"
        />
      </svg>

      {/* Animated glow effect */}
      <div
        className="absolute inset-0 rounded-full blur-xl opacity-50 animate-pulse"
        style={{
          background: "radial-gradient(circle, hsl(var(--brand-cyan)) 0%, hsl(var(--brand-pink)) 100%)",
        }}
      />
    </div>
  );
}
