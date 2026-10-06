type PixelArtProps = {
  className?: string;
  title?: string;
};

const palette = {
  gold: '#FFC72C',
  red: '#EF4444',
  ink: '#0A0A0A',
  paper: '#FFFFFF',
  mist: '#E5E7EB'
};

export function PixelHeroArt({ className = 'h-full w-full' }: PixelArtProps) {
  return (
    <svg
      viewBox="0 0 32 24"
      preserveAspectRatio="xMidYMid slice"
      className={`pixelated ${className}`}
      shapeRendering="crispEdges"
      role="img"
      aria-label="Pixel art of a developer at a computer"
    >
      <rect width="32" height="24" fill={palette.paper} />
      <rect width="32" height="8" fill={palette.gold} />
      <rect x="0" y="18" width="32" height="6" fill={palette.ink} />
      <rect x="2" y="17" width="4" height="1" fill={palette.red} />
      <rect x="24" y="16" width="3" height="2" fill={palette.gold} />
      <rect x="5" y="6" width="8" height="8" fill={palette.gold} />
      <rect x="5" y="6" width="8" height="2" fill={palette.ink} />
      <rect x="6" y="9" width="2" height="2" fill={palette.ink} />
      <rect x="10" y="9" width="2" height="2" fill={palette.ink} />
      <rect x="7" y="12" width="4" height="1" fill={palette.red} />
      <rect x="6" y="14" width="6" height="4" fill={palette.red} />
      <rect x="5" y="18" width="2" height="3" fill={palette.ink} />
      <rect x="11" y="18" width="2" height="3" fill={palette.ink} />
      <rect x="16" y="7" width="12" height="9" fill={palette.ink} />
      <rect x="17" y="8" width="10" height="6" fill={palette.paper} />
      <rect x="18" y="9" width="3" height="2" fill={palette.red} />
      <rect x="22" y="9" width="4" height="1" fill={palette.gold} />
      <rect x="22" y="11" width="2" height="1" fill={palette.ink} />
      <rect x="20" y="16" width="4" height="2" fill={palette.ink} />
      <rect x="17" y="18" width="10" height="1" fill={palette.ink} />
      <rect x="14" y="12" width="2" height="1" fill={palette.ink} />
    </svg>
  );
}

export function PixelPortrait({ className = 'h-full w-full' }: PixelArtProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid slice"
      className={`pixelated ${className}`}
      shapeRendering="crispEdges"
      role="img"
      aria-label="Pixel art portrait"
    >
      <rect width="32" height="32" fill={palette.gold} />
      <rect x="8" y="4" width="16" height="4" fill={palette.ink} />
      <rect x="6" y="8" width="20" height="14" fill={palette.gold} />
      <rect x="6" y="8" width="20" height="3" fill={palette.ink} />
      <rect x="10" y="13" width="3" height="3" fill={palette.ink} />
      <rect x="19" y="13" width="3" height="3" fill={palette.ink} />
      <rect x="14" y="17" width="4" height="2" fill={palette.red} />
      <rect x="12" y="20" width="8" height="1" fill={palette.ink} />
      <rect x="10" y="22" width="12" height="6" fill={palette.red} />
      <rect x="8" y="26" width="4" height="6" fill={palette.ink} />
      <rect x="20" y="26" width="4" height="6" fill={palette.ink} />
      <rect x="4" y="28" width="4" height="4" fill={palette.mist} />
      <rect x="24" y="28" width="4" height="4" fill={palette.mist} />
    </svg>
  );
}

const thumbLayouts = [
  { a: 4, b: 6, c: 18 },
  { a: 8, b: 3, c: 14 },
  { a: 2, b: 10, c: 20 },
  { a: 12, b: 4, c: 8 },
  { a: 6, b: 12, c: 16 },
  { a: 10, b: 2, c: 22 },
  { a: 3, b: 14, c: 11 },
  { a: 14, b: 8, c: 5 }
];

export function PixelThumb({ index }: { index: number }) {
  const layout = thumbLayouts[index % thumbLayouts.length];
  return (
    <svg viewBox="0 0 32 18" preserveAspectRatio="xMidYMid slice" className="pixelated h-full w-full" shapeRendering="crispEdges" aria-hidden>
      <rect width="32" height="18" fill={index % 2 === 0 ? palette.gold : palette.red} />
      <rect x={layout.a} y="3" width="10" height="8" fill={palette.ink} />
      <rect x={layout.a + 1} y="4" width="8" height="5" fill={palette.paper} />
      <rect x={layout.b} y="10" width="6" height="4" fill={palette.ink} />
      <rect x={layout.c} y="2" width="4" height="4" fill={palette.paper} />
      <rect x="0" y="16" width="32" height="2" fill={palette.ink} />
    </svg>
  );
}
