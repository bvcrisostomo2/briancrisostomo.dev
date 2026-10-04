// Line illustration for the home hero: tickets and customer feedback flow
// into a tool, and come out resolved. Colours follow the theme and accent.

const line = {
  fill: "var(--bg)",
  stroke: "var(--muted)",
  strokeOpacity: 0.55,
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const flow = {
  fill: "none",
  stroke: "var(--accent)",
  strokeOpacity: 0.7,
  strokeWidth: 1.5,
  strokeLinecap: "round",
} as const;

const nodes: [number, number][] = [
  [78, 126],
  [110, 150],
  [246, 86],
  [210, 150],
  [260, 215],
  [270, 300],
];

export function HeroArt({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 360"
      className={className}
      role="img"
      aria-label="Illustration of support tickets and customer feedback flowing into a tool and coming out resolved"
    >
      {/* Connectors (drawn first so shapes sit on top) */}
      <path className="hero-flow" d="M78 126 C78 140 110 136 110 150" {...flow} />
      <path className="hero-flow" d="M246 86 C246 120 210 120 210 150" {...flow} />
      <path className="hero-flow" d="M260 215 C300 215 270 262 270 300" {...flow} />

      {/* Ticket stack */}
      <rect x="36" y="36" width="116" height="66" rx="8" {...line} strokeOpacity={0.2} />
      <rect x="28" y="48" width="116" height="66" rx="8" {...line} strokeOpacity={0.35} />
      <rect x="20" y="60" width="116" height="66" rx="8" {...line} />
      <circle cx="40" cy="81" r="7" {...line} />
      <path d="M56 77 H116 M56 89 H98" {...line} />
      <rect x="32" y="104" width="34" height="10" rx="5" fill="var(--accent)" fillOpacity={0.3} />

      {/* Customer feedback bubble */}
      <path d="M208 20 H284 a12 12 0 0 1 12 12 V60 a12 12 0 0 1 -12 12 H226 L210 86 L212 72 H208 a12 12 0 0 1 -12 -12 V32 a12 12 0 0 1 12 -12 Z" {...line} />
      {[228, 246, 264].map((cx) => (
        <circle key={cx} cx={cx} cy="46" r="3" fill="var(--muted)" fillOpacity={0.7} />
      ))}

      {/* Tool: terminal window */}
      <rect x="60" y="150" width="200" height="130" rx="12" {...line} />
      <path d="M60 174 H260" {...line} />
      {[78, 92, 106].map((cx) => (
        <circle key={cx} cx={cx} cy="162" r="3.5" fill="var(--muted)" fillOpacity={0.5} />
      ))}
      <path d="M80 198 l8 7 l-8 7" fill="none" stroke="var(--accent)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      <path className="hero-cursor" d="M95 213 H107" stroke="var(--accent)" strokeWidth={2} strokeLinecap="round" />
      <path d="M80 234 H178 M80 250 H146 M80 266 H192" {...line} strokeOpacity={0.35} />
      <g className="hero-gear">
        <circle cx="226" cy="246" r="13" fill="none" stroke="var(--accent)" strokeWidth={6} strokeDasharray="4.1 3.1" />
        <circle cx="226" cy="246" r="10" fill="none" stroke="var(--accent)" strokeWidth={1.5} />
        <circle cx="226" cy="246" r="4" fill="none" stroke="var(--accent)" strokeWidth={1.5} />
      </g>

      {/* Resolved */}
      <circle cx="270" cy="322" r="22" {...line} stroke="var(--accent)" strokeOpacity={0.9} />
      <path d="M260 322 l7 7 l13 -14" fill="none" stroke="var(--accent)" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />

      {nodes.map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3" fill="var(--accent)" />
      ))}
    </svg>
  );
}
