import { motion, useReducedMotion } from "framer-motion";

const CURVE = "M44 332 C 150 324, 222 150, 400 64";
const POINTS = [
  { x: 118, y: 304 },
  { x: 198, y: 214 },
  { x: 286, y: 124 },
  { x: 358, y: 80 },
];

/**
 * A coordinate frame with a smooth curve fit through plotted data points —
 * a quiet nod to the mathematics behind the engineering.
 */
export function PlotMotif({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <svg viewBox="0 0 420 400" fill="none" aria-hidden className={className}>
      {/* shaded area under the curve */}
      <path
        d={`${CURVE} L400 360 L44 360 Z`}
        fill="var(--color-accent)"
        opacity="0.05"
      />

      {/* axes */}
      <line x1="44" y1="34" x2="44" y2="360" stroke="var(--color-ink)" strokeOpacity="0.22" strokeWidth="1" />
      <line x1="44" y1="360" x2="404" y2="360" stroke="var(--color-ink)" strokeOpacity="0.22" strokeWidth="1" />

      {/* x ticks under each data point */}
      {POINTS.map((p) => (
        <line
          key={`t-${p.x}`}
          x1={p.x}
          y1="360"
          x2={p.x}
          y2="365"
          stroke="var(--color-ink)"
          strokeOpacity="0.3"
          strokeWidth="1"
        />
      ))}

      {/* the fitted curve */}
      <motion.path
        d={CURVE}
        stroke="var(--color-accent)"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: reduce ? 1 : 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.7, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
      />

      {/* drop-lines + data points */}
      {POINTS.map((p, i) => (
        <g key={`p-${p.x}`}>
          <line
            x1={p.x}
            y1={p.y}
            x2={p.x}
            y2="360"
            stroke="var(--color-ink)"
            strokeOpacity="0.18"
            strokeWidth="1"
            strokeDasharray="2 4"
          />
          <motion.circle
            cx={p.x}
            cy={p.y}
            r="4.5"
            fill="var(--color-paper)"
            stroke="var(--color-accent)"
            strokeWidth="2"
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
            initial={{ scale: reduce ? 1 : 0, opacity: reduce ? 1 : 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.1 + i * 0.16, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />
        </g>
      ))}
    </svg>
  );
}
