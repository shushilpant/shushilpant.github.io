import { useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

// Hand-placed scatter around y ≈ f(x); residuals drawn for three
// points. One outlier in red pencil, kept on principle.
const POINTS: Array<[number, number]> = [
  [48, 252],
  [72, 240],
  [96, 234],
  [122, 214],
  [148, 204],
  [174, 182],
  [200, 172],
  [228, 144],
  [254, 136],
  [284, 108],
  [312, 98],
  [340, 74],
  [368, 62],
  [394, 46],
];

// [x, yPoint, yCurve] — light dashed verticals from point to fit
const RESIDUALS: Array<[number, number, number]> = [
  [96, 234, 226],
  [200, 172, 163],
  [312, 98, 90],
];

const OUTLIER: [number, number] = [188, 84];
const OUTLIER_CURVE_Y = 168;

export function PlotMotif({ className = "" }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const reduce = useReducedMotion();
  const drawn = reduce || inView;

  return (
    <svg
      ref={ref}
      viewBox="0 0 440 300"
      fill="none"
      aria-hidden
      className={className}
    >
      {/* axes */}
      <path
        d="M34 14v260M30 270h396"
        stroke="var(--color-line-strong)"
        strokeWidth="1"
      />
      <path
        d="M30 18l4-8 4 8M418 266l8 4-8 4"
        stroke="var(--color-line-strong)"
        strokeWidth="1"
        fill="none"
      />
      {/* ticks */}
      {[110, 190, 270, 350].map((x, i) => (
        <g key={x}>
          <path d={`M${x} 270v5`} stroke="var(--color-line-strong)" strokeWidth="1" />
          <text
            x={x}
            y="288"
            textAnchor="middle"
            fontSize="9"
            fill="var(--color-ink-faint)"
            fontFamily="var(--font-mono)"
          >
            {i + 1}
          </text>
        </g>
      ))}
      {[210, 150, 90, 30].map((y, i) => (
        <g key={y}>
          <path d={`M29 ${y}h5`} stroke="var(--color-line-strong)" strokeWidth="1" />
          <text
            x="22"
            y={y + 3}
            textAnchor="end"
            fontSize="9"
            fill="var(--color-ink-faint)"
            fontFamily="var(--font-mono)"
          >
            {i + 1}
          </text>
        </g>
      ))}

      {/* residual dashes */}
      {RESIDUALS.map(([x, y1, y2]) => (
        <path
          key={x}
          d={`M${x} ${y1}L${x} ${y2}`}
          stroke="var(--color-ink-faint)"
          strokeWidth="1"
          strokeDasharray="2 3"
          opacity="0.7"
        />
      ))}

      {/* the outlier — red pencil, dashed residual, kept */}
      <path
        d={`M${OUTLIER[0]} ${OUTLIER[1] + 5}L${OUTLIER[0]} ${OUTLIER_CURVE_Y}`}
        stroke="var(--color-pencil)"
        strokeWidth="1"
        strokeDasharray="2 3"
        opacity="0.6"
      />
      <circle
        cx={OUTLIER[0]}
        cy={OUTLIER[1]}
        r="3.4"
        stroke="var(--color-pencil)"
        strokeWidth="1.4"
        fill="none"
      />

      {/* data */}
      {POINTS.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="2.6" fill="var(--color-ink)" opacity="0.82" />
      ))}

      {/* least-squares fit, drawn in */}
      <path
        d="M40 250C124 232 192 198 262 142C314 100 366 64 408 42"
        stroke="var(--color-cobalt)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="560"
        strokeDashoffset={drawn ? 0 : 560}
        style={
          reduce
            ? undefined
            : { transition: "stroke-dashoffset 1.6s cubic-bezier(0.65,0,0.35,1) 0.3s" }
        }
      />
    </svg>
  );
}
