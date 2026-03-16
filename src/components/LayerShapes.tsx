/**
 * Canonical layer shape SVGs for SYKS infrastructure.
 * Data = Ivory circle, Oracle = Lime solid arch (inverted U),
 * Integrity = Blue square, Connectivity = 2×2 dot grid.
 *
 * Use these everywhere to guarantee visual consistency.
 */

import React from 'react';

interface ShapeProps {
  size?: number;
  className?: string;
  /** Override the fill / stroke colour (HSL string without wrapping) */
  color?: string;
  /** Opacity applied to the SVG element */
  opacity?: number;
}

/* ─── DATA · Ivory circle ─── */
export const DataShape: React.FC<ShapeProps> = ({
  size = 18,
  className,
  color = 'hsl(60 12% 85%)',
  opacity,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    className={className}
    style={opacity !== undefined ? { opacity } : undefined}
    aria-hidden="true"
  >
    <circle cx="50" cy="50" r="50" fill={color} />
  </svg>
);

/* ─── ORACLE · Lime solid arch (inverted U) ─── */
export const OracleShape: React.FC<ShapeProps> = ({
  size = 18,
  className,
  color = 'hsl(71 64% 63%)',
  opacity,
}) => {
  const h = Math.round(size * 1.3);
  return (
    <svg
      width={size}
      height={h}
      viewBox="0 0 80 104"
      className={className}
      style={opacity !== undefined ? { opacity } : undefined}
      aria-hidden="true"
    >
      {/* Solid filled inverted-U arch */}
      <path
        d="M0 104 L0 40 A40 40 0 0 1 80 40 L80 104 L60 104 L60 40 A20 20 0 0 0 20 40 L20 104 Z"
        fill={color}
      />
    </svg>
  );
};

/* ─── INTEGRITY · Blue square ─── */
export const IntegrityShape: React.FC<ShapeProps> = ({
  size = 18,
  className,
  color = 'hsl(216 67% 40%)',
  opacity,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    className={className}
    style={opacity !== undefined ? { opacity } : undefined}
    aria-hidden="true"
  >
    <rect width="100" height="100" fill={color} />
  </svg>
);

/* ─── CONNECTIVITY · 2×2 dot grid ─── */
export const ConnectivityShape: React.FC<ShapeProps> = ({
  size = 20,
  className,
  color = 'hsl(71 64% 63%)',
  opacity,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    className={className}
    style={opacity !== undefined ? { opacity } : undefined}
    aria-hidden="true"
  >
    <circle cx="25" cy="25" r="17" fill={color} />
    <circle cx="75" cy="25" r="17" fill={color} />
    <circle cx="25" cy="75" r="17" fill={color} />
    <circle cx="75" cy="75" r="17" fill={color} />
  </svg>
);

/* ─── Background / decorative variants (large, low-opacity) ─── */

export const DataShapeBg: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 500 500" className={className} aria-hidden="true">
    <circle cx="250" cy="250" r="240" fill="hsl(60 12% 85% / 0.12)" />
  </svg>
);

export const OracleShapeBg: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 260" className={className} aria-hidden="true">
    <path
      d="M0 260 L0 100 A100 100 0 0 1 200 100 L200 260 L150 260 L150 100 A50 50 0 0 0 50 100 L50 260 Z"
      fill="hsl(71 64% 63% / 0.12)"
    />
  </svg>
);

export const IntegrityShapeBg: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
    <rect width="100" height="100" fill="hsl(216 67% 40% / 0.10)" />
  </svg>
);

export const ConnectivityShapeBg: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
    {Array.from({ length: 16 }).map((_, i) => (
      <circle
        key={i}
        cx={(i % 4) * 50 + 25}
        cy={Math.floor(i / 4) * 50 + 25}
        r="10"
        fill="hsl(71 64% 63% / 0.12)"
      />
    ))}
  </svg>
);
