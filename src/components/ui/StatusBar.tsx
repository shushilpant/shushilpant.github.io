import { useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { profile } from "../../data/resume";
import { useActiveSection } from "../../hooks/useActiveSection";

function useLocalClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone: profile.timezone,
      timeZoneName: "short",
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

/**
 * Instrument footer: availability, active section, scroll depth and
 * local time. Decorative duplication of page state — hidden from
 * screen readers and from small viewports.
 */
export function StatusBar() {
  const active = useActiveSection();
  const clock = useLocalClock();
  const { scrollYProgress } = useScroll();
  const [pct, setPct] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setPct(Math.min(100, Math.max(0, Math.round(v * 100))));
  });

  return (
    <div
      aria-hidden
      className="fixed inset-x-0 bottom-0 z-50 hidden h-9 items-center justify-between border-t border-edge bg-void/80 px-10 font-mono text-[10px] uppercase tracking-[0.18em] text-faint backdrop-blur-md lg:flex"
    >
      <span className="flex items-center gap-2.5">
        <span className="dot-live" />
        <span className="text-muted">Open to work</span>
      </span>
      <span className="nums">
        Sec. <span className="text-amber">{active.index}</span>
        <span className="mx-2 text-bone/20">/</span>
        <span className="text-muted">{active.label}</span>
      </span>
      <span className="nums">
        Scroll {String(pct).padStart(3, "0")}%
        <span className="mx-3 text-bone/20">·</span>
        {clock}
      </span>
    </div>
  );
}
