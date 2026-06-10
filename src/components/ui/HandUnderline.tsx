import { useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * A pencilled underline — two slightly disagreeing strokes, drawn
 * in after the page settles, the way you'd underline the word that
 * matters while reading back your own work.
 */
export function HandUnderline({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  const dash = 230;

  return (
    <span className="relative inline-block whitespace-nowrap">
      {children}
      <svg
        aria-hidden
        viewBox="0 0 200 12"
        preserveAspectRatio="none"
        className="absolute -bottom-[0.12em] left-0 h-[0.16em] w-full overflow-visible text-pencil"
      >
        <path
          d="M3 8C44 3.5 117 9.5 197 4.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeDasharray={dash}
          strokeDashoffset={reduce ? 0 : dash}
          style={
            reduce
              ? undefined
              : { animation: "draw 0.7s 1s cubic-bezier(0.65,0,0.35,1) forwards" }
          }
        />
        <path
          d="M6 10.5C60 6 130 11 194 7.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.55"
          strokeDasharray={dash}
          strokeDashoffset={reduce ? 0 : dash}
          style={
            reduce
              ? undefined
              : { animation: "draw 0.6s 1.25s cubic-bezier(0.65,0,0.35,1) forwards" }
          }
        />
      </svg>
    </span>
  );
}
