/**
 * Canonical layer shape SVGs for SYKS infrastructure.
 * Uses the official brand SVG files for inline icons,
 * and programmatic variants for background decorations.
 */

import React from 'react';

import shapeCircleIvory from '@/assets/shape-circle-ivory.svg';
import shapeArchLime from '@/assets/shape-arch-lime.svg';
import shapeSquareBlue from '@/assets/shape-square-blue.svg';
import shapeDotsLime from '@/assets/shape-dots-lime.svg';

interface ShapeProps {
  size?: number;
  className?: string;
  /** Opacity applied to the element */
  opacity?: number;
}

/* ─── DATA · Ivory circle ─── */
export const DataShape: React.FC<ShapeProps> = ({ size = 18, className, opacity }) => (
  <img
    src={shapeCircleIvory}
    width={size}
    height={size}
    className={className}
    style={opacity !== undefined ? { opacity } : undefined}
    aria-hidden="true"
    alt=""
  />
);

/* ─── ORACLE · Lime solid arch ─── */
export const OracleShape: React.FC<ShapeProps> = ({ size = 18, className, opacity }) => (
  <img
    src={shapeArchLime}
    width={size}
    height={size}
    className={className}
    style={opacity !== undefined ? { opacity } : undefined}
    aria-hidden="true"
    alt=""
  />
);

/* ─── INTEGRITY · Blue square ─── */
export const IntegrityShape: React.FC<ShapeProps> = ({ size = 18, className, opacity }) => (
  <img
    src={shapeSquareBlue}
    width={size}
    height={size}
    className={className}
    style={opacity !== undefined ? { opacity } : undefined}
    aria-hidden="true"
    alt=""
  />
);

/* ─── CONNECTIVITY · Lime 2×2 dot grid ─── */
export const ConnectivityShape: React.FC<ShapeProps> = ({ size = 20, className, opacity }) => (
  <img
    src={shapeDotsLime}
    width={size}
    height={size}
    className={className}
    style={opacity !== undefined ? { opacity } : undefined}
    aria-hidden="true"
    alt=""
  />
);

/* ─── Background / decorative variants (large, low-opacity) ─── */

export const DataShapeBg: React.FC<{ className?: string }> = ({ className }) => (
  <img src={shapeCircleIvory} className={className} style={{ opacity: 0.12 }} aria-hidden="true" alt="" />
);

export const OracleShapeBg: React.FC<{ className?: string }> = ({ className }) => (
  <img src={shapeArchLime} className={className} style={{ opacity: 0.12 }} aria-hidden="true" alt="" />
);

export const IntegrityShapeBg: React.FC<{ className?: string }> = ({ className }) => (
  <img src={shapeSquareBlue} className={className} style={{ opacity: 0.10 }} aria-hidden="true" alt="" />
);

export const ConnectivityShapeBg: React.FC<{ className?: string }> = ({ className }) => (
  <img src={shapeDotsLime} className={className} style={{ opacity: 0.12 }} aria-hidden="true" alt="" />
);
