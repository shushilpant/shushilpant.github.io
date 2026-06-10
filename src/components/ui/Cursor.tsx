import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useEffect, useState } from "react";

const INTERACTIVE =
  "a, button, [role='button'], input, textarea, select, summary";

/**
 * Precision cursor: a quick dot and a lagging ring, blended with
 * `difference`. Only mounts for fine pointers with motion allowed —
 * touch devices and reduced-motion users keep the native cursor.
 */
export function Cursor() {
  const reduce = useReducedMotion();
  const [finePointer] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: fine)").matches
  );
  const enabled = finePointer && !reduce;
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const dotX = useSpring(x, { stiffness: 1200, damping: 80, mass: 0.4 });
  const dotY = useSpring(y, { stiffness: 1200, damping: 80, mass: 0.4 });
  const ringX = useSpring(x, { stiffness: 320, damping: 32, mass: 0.7 });
  const ringY = useSpring(y, { stiffness: 320, damping: 32, mass: 0.7 });

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("cursor-none");

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    const onOver = (e: PointerEvent) => {
      const target = e.target as Element | null;
      setHovering(Boolean(target?.closest?.(INTERACTIVE)));
    };
    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    document.documentElement.addEventListener("pointerleave", onLeave);
    document.documentElement.addEventListener("pointerenter", onEnter);

    return () => {
      document.documentElement.classList.remove("cursor-none");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      document.documentElement.removeEventListener("pointerenter", onEnter);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] -ml-[3.5px] -mt-[3.5px] mix-blend-difference"
        style={{ x: dotX, y: dotY, opacity: visible ? 1 : 0 }}
      >
        <motion.div
          className="h-[7px] w-[7px] rounded-full bg-bone"
          animate={{ scale: pressed ? 0.55 : hovering ? 0.4 : 1 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        />
      </motion.div>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] -ml-[17px] -mt-[17px] mix-blend-difference"
        style={{ x: ringX, y: ringY, opacity: visible ? 1 : 0 }}
      >
        <motion.div
          className="h-[34px] w-[34px] rounded-full border border-bone/60"
          animate={{
            scale: pressed ? 0.75 : hovering ? 1.6 : 1,
            opacity: hovering ? 1 : 0.55,
          }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        />
      </motion.div>
    </>
  );
}
