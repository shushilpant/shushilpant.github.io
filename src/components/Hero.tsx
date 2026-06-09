import { motion, useReducedMotion } from "framer-motion";
import { metrics, profile } from "../data/resume";
import { PlotMotif } from "./ui/PlotMotif";

export function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay: number) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="grid-faint pointer-events-none absolute inset-0 opacity-60" aria-hidden />

      <div className="relative mx-auto max-w-[1200px] px-6 pt-28 lg:px-10 lg:pt-32">
        {/* dateline / masthead */}
        <motion.div
          {...rise(0.05)}
          className="grid grid-cols-2 gap-y-2 border-y border-line py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-faint sm:flex sm:items-center sm:justify-between"
        >
          <span className="text-ink">Portfolio</span>
          <span>Est. {profile.origin}</span>
          <span>№ 2026</span>
          <span className="nums text-right sm:text-left">{profile.coords}</span>
        </motion.div>

        <div className="grid grid-cols-1 items-center gap-12 pb-16 pt-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:pb-24 lg:pt-20">
          {/* left — statement */}
          <div>
            <motion.p
              {...rise(0.15)}
              className="mb-7 font-mono text-[11px] uppercase tracking-[0.2em] text-accent"
            >
              From {profile.origin} · Based in {profile.location}
            </motion.p>

            <motion.h1
              {...rise(0.25)}
              className="font-display text-[clamp(2.05rem,8.5vw,5rem)] font-medium leading-[1.04] text-ink text-balance"
            >
              Rigorous mathematics,{" "}
              <span className="italic font-normal">engineered</span> into
              systems that run at scale.
            </motion.h1>

            <motion.p
              {...rise(0.4)}
              className="mt-8 max-w-xl text-[1.0625rem] leading-relaxed text-ink-soft"
            >
              I'm {profile.name} — a Computer Engineering &amp; Mathematics
              student building AI pipelines, serverless architectures, and data
              infrastructure for government ministries, state agencies, and
              research labs.
            </motion.p>

            <motion.div {...rise(0.55)} className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
              <a
                href="#work"
                className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-6 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-paper transition-colors hover:bg-accent"
              >
                View selected work
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-0.5">
                  <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#contact"
                className="link-underline font-mono text-[11px] uppercase tracking-[0.16em] text-ink"
              >
                Get in touch
              </a>
            </motion.div>
          </div>

          {/* right — math motif */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <PlotMotif className="mx-auto w-full max-w-[440px]" />
            <span className="absolute bottom-1 right-2 font-mono text-[9px] uppercase tracking-[0.2em] text-ink-faint">
              Fig. 00 — model fit to data
            </span>
          </motion.div>
        </div>

        {/* metrics ledger */}
        <motion.div
          {...rise(0.7)}
          className="grid grid-cols-2 border-t border-line-strong sm:grid-cols-4"
        >
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className={`py-6 sm:py-7 ${i !== 0 ? "sm:border-l sm:border-line sm:pl-6" : ""} ${
                i % 2 !== 0 ? "border-l border-line pl-5 sm:pl-6" : ""
              } ${i >= 2 ? "border-t border-line sm:border-t-0" : ""}`}
            >
              <p className="nums font-display text-[2.25rem] font-medium leading-none text-ink">
                {m.value}
              </p>
              <p className="mt-2.5 text-sm leading-snug text-ink-soft">{m.label}</p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-faint">
                {m.note}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
