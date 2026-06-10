import { useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

const BONE = "234, 231, 223";
const AMBER = "255, 180, 84";
const SPACING = 27;
const MOUSE_RADIUS = 140;

/**
 * Interference-pattern dot field — a quiet nod to 17M oceanographic
 * records. Plain canvas 2D: ~1.8k points at 1440px, pauses offscreen
 * and on hidden tabs, renders one static frame under reduced motion.
 */
export function WaveField({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let raf = 0;
    let running = false;
    let width = 0;
    let height = 0;
    let t = reduce ? 2.4 : 0;
    const mouse = { x: -9999, y: -9999 };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const cols = Math.ceil(width / SPACING) + 1;
      const rows = Math.ceil(height / SPACING) + 1;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * SPACING;
          const y = j * SPACING;
          const z =
            Math.sin(x * 0.012 + t * 0.9) * 0.5 +
            Math.sin(y * 0.011 - t * 0.6) * 0.35 +
            Math.sin((x + y) * 0.0055 + t * 0.45) * 0.4;
          const n = (z + 1.25) / 2.5; // normalise to 0..1

          let px = x;
          let py = y;
          let boost = 0;
          const dx = x - mouse.x;
          const dy = y - mouse.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < MOUSE_RADIUS * MOUSE_RADIUS) {
            const d = Math.sqrt(d2) || 1;
            const f = 1 - d / MOUSE_RADIUS;
            px += (dx / d) * f * 14;
            py += (dy / d) * f * 14;
            boost = f * 0.35;
          }

          if (i % 8 === 4 && j % 8 === 4) {
            // sparse registration crosses
            ctx.strokeStyle = `rgba(${BONE}, ${0.05 + n * 0.1 + boost})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(px - 3, py);
            ctx.lineTo(px + 3, py);
            ctx.moveTo(px, py - 3);
            ctx.lineTo(px, py + 3);
            ctx.stroke();
          } else {
            const peak = n > 0.92;
            const alpha = 0.04 + n * 0.2 + boost;
            ctx.fillStyle = peak
              ? `rgba(${AMBER}, ${Math.min(alpha + 0.18, 0.85)})`
              : `rgba(${BONE}, ${alpha})`;
            const size = peak ? 1.7 : 1.2;
            ctx.fillRect(px - size / 2, py - size / 2, size, size);
          }
        }
      }
    };

    const loop = () => {
      t += 0.012;
      draw();
      raf = requestAnimationFrame(loop);
    };

    const start = () => {
      if (running || reduce) return;
      running = true;
      raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    resize();
    draw();

    const ro = new ResizeObserver(() => {
      resize();
      if (!running) draw();
    });
    ro.observe(canvas);

    if (reduce) {
      return () => ro.disconnect();
    }

    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { threshold: 0 }
    );
    io.observe(canvas);

    const onVisibility = () =>
      document.hidden ? stop() : start();
    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onPointerLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onPointerLeave);

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener(
        "pointerleave",
        onPointerLeave
      );
    };
  }, [reduce]);

  return <canvas ref={canvasRef} aria-hidden className={className} />;
}
