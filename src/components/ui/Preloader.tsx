import { animate, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { profile } from "../../data/resume";

const SESSION_KEY = "sp:intro-seen";

type PreloaderProps = { onDone: () => void };

/**
 * A 1.2s boot sequence, shown once per session. Skipped entirely for
 * returning visitors within the session and under reduced motion.
 */
export function Preloader({ onDone }: PreloaderProps) {
  const skip = useMemo(() => {
    try {
      if (sessionStorage.getItem(SESSION_KEY)) return true;
    } catch {
      /* storage unavailable — just play it */
    }
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const [phase, setPhase] = useState<"boot" | "exit" | "done">(
    skip ? "done" : "boot"
  );
  const numRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const signalled = useRef(false);

  const signalDone = () => {
    if (!signalled.current) {
      signalled.current = true;
      onDone();
    }
  };

  useEffect(() => {
    if (skip) signalDone();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skip]);

  useEffect(() => {
    if (phase !== "boot") return;
    document.documentElement.style.overflow = "hidden";
    const controls = animate(0, 100, {
      duration: 1.15,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (v) => {
        if (numRef.current)
          numRef.current.textContent = String(Math.round(v)).padStart(3, "0");
        if (barRef.current)
          barRef.current.style.transform = `scaleX(${v / 100})`;
      },
      onComplete: () => {
        try {
          sessionStorage.setItem(SESSION_KEY, "1");
        } catch {
          /* fine */
        }
        setPhase("exit");
        signalDone();
      },
    });
    return () => {
      controls.stop();
      document.documentElement.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  if (phase === "done") return null;

  return (
    <motion.div
      aria-hidden
      className="fixed inset-0 z-[90] flex flex-col justify-between bg-void px-6 py-7 lg:px-10"
      initial={false}
      animate={
        phase === "exit"
          ? { clipPath: "inset(0 0 100% 0)" }
          : { clipPath: "inset(0 0 0% 0)" }
      }
      transition={{ duration: 0.75, ease: [0.83, 0, 0.17, 1] }}
      onAnimationComplete={() => {
        if (phase === "exit") setPhase("done");
      }}
    >
      <div className="flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-faint">
        <span className="text-bone">{profile.name} — Field Notes</span>
        <span className="nums">2026</span>
      </div>

      <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-faint">
        <p>Calibrating instruments</p>
        <p className="nums mt-1.5 text-bone/60">{profile.coords}</p>
      </div>

      <div>
        <div className="flex items-end justify-between pb-5">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-faint">
            Loading
          </span>
          <span
            ref={numRef}
            className="nums font-display text-[clamp(3.5rem,12vw,7.5rem)] font-light leading-none text-bone"
          >
            000
          </span>
        </div>
        <div className="h-px w-full bg-edge">
          <div
            ref={barRef}
            className="h-px w-full origin-left bg-amber"
            style={{ transform: "scaleX(0)" }}
          />
        </div>
      </div>
    </motion.div>
  );
}
