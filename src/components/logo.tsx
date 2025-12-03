import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark' | 'color';
  className?: string;
  showText?: boolean;
}

export function Logo({ variant = 'color', className = '', showText = true }: LogoProps) {
  // Color variants for different backgrounds
  const colors = {
    light: {
      // For dark backgrounds (header)
      text: '#ffffff',
      playPrimary: '#56ccf2', // cyan
      playSecondary: '#e91e63', // pink
      stars: '#e91e63'
    },
    dark: {
      // For light backgrounds (footer, body)
      text: '#1a1a1a',
      playPrimary: '#56ccf2',
      playSecondary: '#e91e63',
      stars: '#e91e63'
    },
    color: {
      // Full color version
      text: '#ffffff',
      playPrimary: '#56ccf2',
      playSecondary: '#e91e63',
      stars: '#e91e63'
    }
  };

  const currentColors = colors[variant];

  return (
    <svg
      viewBox="0 0 200 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="TokTrends Logo"
    >
      <defs>
        {/* Neon glow effect for play button */}
        <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>

        {/* Gradient for play button */}
        <linearGradient id="play-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={currentColors.playPrimary} />
          <stop offset="100%" stopColor={currentColors.playSecondary} />
        </linearGradient>
      </defs>

      {/* Neon Play Button Icon */}
      <g transform="translate(5, 10)">
        {/* Outer glow */}
        <path
          d="M15 5 L15 25 L28 15 Z"
          stroke="url(#play-gradient)"
          strokeWidth="3"
          fill="none"
          filter="url(#neon-glow)"
          opacity="0.6"
        />
        {/* Main play button */}
        <path
          d="M15 5 L15 25 L28 15 Z"
          stroke="url(#play-gradient)"
          strokeWidth="2"
          fill="none"
        />
        {/* Motion lines */}
        <line x1="5" y1="10" x2="10" y2="10" stroke={currentColors.playPrimary} strokeWidth="2" opacity="0.8"/>
        <line x1="5" y1="15" x2="12" y2="15" stroke={currentColors.playSecondary} strokeWidth="2" opacity="0.8"/>
        <line x1="5" y1="20" x2="10" y2="20" stroke={currentColors.playPrimary} strokeWidth="2" opacity="0.8"/>
      </g>

      {showText && (
        <>
          {/* TokTrends Text */}
          <text
            x="45"
            y="27"
            fontFamily="Poppins, Inter, sans-serif"
            fontSize="18"
            fontWeight="700"
            fill={currentColors.text}
            letterSpacing="0.5"
          >
            TOKTTRENDS
          </text>

          {/* Decorative stars below text (matching logo design) */}
          <g transform="translate(45, 35)">
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <circle
                key={i}
                cx={i * 5}
                cy="0"
                r="1.5"
                fill={currentColors.stars}
                opacity="0.8"
              />
            ))}
          </g>
        </>
      )}
    </svg>
  );
}

// Compact icon-only version for favicons, mobile menus, etc.
export function LogoIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="TokTrends Icon"
    >
      <defs>
        <filter id="icon-neon-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <linearGradient id="icon-play-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#56ccf2" />
          <stop offset="100%" stopColor="#e91e63" />
        </linearGradient>
      </defs>

      {/* Background circle */}
      <circle cx="20" cy="20" r="18" fill="#1a1a1a" />

      {/* Neon Play Button */}
      <g transform="translate(20, 20)">
        {/* Outer glow */}
        <path
          d="M-5 -8 L-5 8 L8 0 Z"
          stroke="url(#icon-play-gradient)"
          strokeWidth="3"
          fill="none"
          filter="url(#icon-neon-glow)"
          opacity="0.6"
        />
        {/* Main play button */}
        <path
          d="M-5 -8 L-5 8 L8 0 Z"
          stroke="url(#icon-play-gradient)"
          strokeWidth="2"
          fill="none"
        />
        {/* Motion lines */}
        <line x1="-12" y1="-5" x2="-8" y2="-5" stroke="#56ccf2" strokeWidth="2" opacity="0.8"/>
        <line x1="-12" y1="0" x2="-7" y2="0" stroke="#e91e63" strokeWidth="2" opacity="0.8"/>
        <line x1="-12" y1="5" x2="-8" y2="5" stroke="#56ccf2" strokeWidth="2" opacity="0.8"/>
      </g>

      {/* Star accents around the circle */}
      <circle cx="20" cy="5" r="1.5" fill="#e91e63" opacity="0.8" />
      <circle cx="35" cy="20" r="1.5" fill="#56ccf2" opacity="0.8" />
      <circle cx="20" cy="35" r="1.5" fill="#e91e63" opacity="0.8" />
      <circle cx="5" cy="20" r="1.5" fill="#56ccf2" opacity="0.8" />
    </svg>
  );
}
