export const LAYER_PAL = { blue: '#2158A8', navy: '#021D39', lime: '#D0DF61' };

export const LAYER_COLORS = {
  Data: LAYER_PAL.blue,
  Oracle: LAYER_PAL.navy,
  Integrity: LAYER_PAL.lime,
  Connectivity: LAYER_PAL.blue,
} as const;

export const Circle = ({ fill }: { fill: string }) => (
  <svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="16" fill={fill} /></svg>
);
export const Arch = ({ fill }: { fill: string }) => (
  <svg viewBox="0 0 40 40" aria-hidden="true">
    <path d="M4 36 L4 20 A16 16 0 0 1 36 20 L36 36 L28 36 L28 20 A8 8 0 0 0 12 20 L12 36 Z" fill={fill} />
  </svg>
);
export const Square = ({ fill }: { fill: string }) => (
  <svg viewBox="0 0 40 40" aria-hidden="true"><rect x="6" y="6" width="28" height="28" fill={fill} /></svg>
);
export const Dots = ({ fill }: { fill: string }) => (
  <svg viewBox="0 0 40 40" aria-hidden="true">
    <circle cx="15" cy="15" r="3" fill={fill} />
    <circle cx="25" cy="15" r="3" fill={fill} />
    <circle cx="15" cy="25" r="3" fill={fill} />
    <circle cx="25" cy="25" r="3" fill={fill} />
  </svg>
);

export const SHAPE_BY_LAYER = {
  Data: Circle,
  Oracle: Arch,
  Integrity: Square,
  Connectivity: Dots,
} as const;
