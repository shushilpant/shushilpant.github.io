import { useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const GLYPHS = "▪+/<>#=01";

type ScrambleProps = {
  text: string;
  className?: string;
  delay?: number;
};

/** Decodes text left-to-right from instrument glyphs. Runs once on mount. */
export function Scramble({ text, className = "", delay = 0 }: ScrambleProps) {
  const reduce = useReducedMotion();
  const [output, setOutput] = useState(reduce ? text : "");
  const frame = useRef(0);

  useEffect(() => {
    if (reduce) {
      const id = requestAnimationFrame(() => setOutput(text));
      return () => cancelAnimationFrame(id);
    }
    let raf = 0;
    let start: number | null = null;
    const total = 760; // ms to fully decode

    const step = (now: number) => {
      if (start === null) start = now + delay * 1000;
      const elapsed = now - start;
      if (elapsed < 0) {
        raf = requestAnimationFrame(step);
        return;
      }
      const progress = Math.min(elapsed / total, 1);
      const settled = Math.floor(progress * text.length);
      frame.current++;
      let next = text.slice(0, settled);
      for (let i = settled; i < text.length; i++) {
        const ch = text[i];
        next +=
          ch === " "
            ? " "
            : GLYPHS[(frame.current + i * 7) % GLYPHS.length];
      }
      setOutput(next);
      if (progress < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [text, delay, reduce]);

  return (
    <span className={className} aria-label={text}>
      <span aria-hidden>{output || " "}</span>
    </span>
  );
}
