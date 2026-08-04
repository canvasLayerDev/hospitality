import React from 'react';

interface JRDLogoProps {
  className?: string;
  size?: number; // Base height in pixels
  color?: string; // Optional color override
  variant?: 'light' | 'dark' | 'gold';
  iconOnly?: boolean;
}

export const JRDLogo: React.FC<JRDLogoProps> = ({
  className = '',
  size = 60,
  color,
  variant = 'gold',
  iconOnly = false,
}) => {
  // Rich warm champagne gold matching user logo image 1:1
  const goldColor = color || (variant === 'light' ? '#ffffff' : variant === 'dark' ? '#3d352c' : '#D4B066');
  const greenDotColor = '#00A86B';

  return (
    <div className={`inline-flex flex-col items-center justify-center ${className}`}>
      <svg
        width={size * (iconOnly ? 0.9 : 1.25)}
        height={iconOnly ? size * 0.45 : size}
        viewBox={iconOnly ? '0 0 300 90' : '0 0 300 230'}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 hover:scale-105 filter drop-shadow-sm"
      >
        {/* TOP EMBLEM CREST - 1:1 Geometric Reconstruction matching Screenshot */}
        <g stroke={goldColor} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none">
          {/* Side Horizontal Bullet Accents */}
          <path fill={goldColor} stroke="none" d="M 28,45 C 28,39 42,39 64,45 C 42,51 28,51 28,45 Z" />
          <path fill={goldColor} stroke="none" d="M 272,45 C 272,39 258,39 236,45 C 258,51 272,51 272,45 Z" />

          {/* Outer Top Arc */}
          <path d="M 85,24 Q 150,8 215,24" />

          {/* Interlocking Cross Arcs (Upper Loops) */}
          <path d="M 60,45 C 105,10 195,80 240,45" />
          <path d="M 60,45 C 105,80 195,10 240,45" />

          {/* Interlocking Cross Arcs (Lower Loops) */}
          <path d="M 66,60 C 108,30 192,90 234,60" />
          <path d="M 66,60 C 108,90 192,30 234,60" />

          {/* Outer Bottom Arc */}
          <path d="M 90,80 Q 150,96 210,80" />
        </g>

        {/* Center Emerald Green Diamond Accent Dot */}
        <polygon points="150,39 157,45 150,51 143,45" fill={greenDotColor} />

        {/* SERIF TYPOGRAPHY FOR JRD (Exact 1:1 Vector Geometry) */}
        {!iconOnly && (
          <g fill={goldColor}>
            {/* Letter J */}
            <path d="M 62,112 L 96,112 L 96,119 L 81,119 L 81,185 C 81,208 65,222 43,222 C 29,222 19,214 17,204 C 21,204 27,201 29,195 C 32,189 28,183 21,183 C 15,183 9,188 9,196 C 9,214 27,228 49,228 C 77,228 93,209 93,184 L 93,119 L 107,119 L 107,112 Z" />

            {/* Letter R */}
            <path d="M 115,112 L 158,112 C 178,112 193,122 193,140 C 193,154 183,163 169,166 L 197,222 L 197,225 L 181,225 L 153,170 L 131,170 L 131,218 L 142,218 L 142,225 L 105,225 L 105,218 L 115,218 Z M 131,119 L 131,163 L 156,163 C 170,163 179,155 179,140 C 179,126 170,119 156,119 Z" />

            {/* Letter D */}
            <path d="M 205,112 L 246,112 C 275,112 295,130 295,168 C 295,206 275,225 246,225 L 205,225 Z M 221,119 L 221,218 L 244,218 C 267,218 279,201 279,168 C 279,135 267,119 244,119 Z" />
          </g>
        )}
      </svg>
    </div>
  );
};
