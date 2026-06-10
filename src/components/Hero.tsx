import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { metrics, profile } from "../data/resume";
import { Counter } from "./ui/Counter";
import { Magnetic } from "./ui/Magnetic";
import { Scramble } from "./ui/Scramble";
import { Tick } from "./ui/Tick";
import { WaveField } from "./ui/WaveField";

const EASE = [0.16, 1, 0.3, 1] as const;

function MaskedLine({
  children,
  delay,
  ready,
}: {
  children: ReactNode;
  delay: number;
  ready: boolean;
}) {
  const reduce = useReducedMotion();
  return (
    <span className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
      <motion.span
        className="block will-change-transform"
        initial={reduce ? { opacity: 0 } : { y: "112%" }}
        animate={
          ready ? (reduce ? { opacity: 1 } : { y: 0 }) : undefined
        }
        transition={{ duration: 1, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function Hero({ ready }: { ready: boolean }) {
  const reduce = useReducedMotion();

  const fade = (delay: number) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 20 },
    animate: ready
      ? { opacity: 1, y: 0 }
      : reduce
        ? { opacity: 0 }
        : { opacity: 0, y: 20 },
    transition: { duration: 0.9, delay, ease: EASE },
  });

  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col overflow-hidden">
      <WaveField className="absolute inset-0 h-full w-full" />
      {/* amber atmosphere, kept faint */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-48 top-[18%] h-[460px] w-[460px] rounded-full bg-amber/[0.05] blur-[130px]"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1240px] flex-1 flex-col px-6 lg:px-10">
        {/* dateline */}
        <motion.div
          {...fade(0.05)}
          className="mt-24 flex flex-wrap items-center justify-between gap-x-8 gap-y-2 border-y border-edge py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-faint lg:mt-28"
        >
          <Scramble text="Field notes — Portfolio 2026" className="text-muted" />
          <Scramble
            text={`${profile.origin} → Mississippi`}
            delay={0.15}
            className="hidden sm:inline"
          />
          <Scramble
            text={profile.coords}
            delay={0.3}
            className="nums hidden md:inline"
          />
          <span className="flex items-center gap-2 text-amber">
            <span className="dot-live" />
            Open to work
          </span>
        </motion.div>

        {/* statement */}
        <div className="flex flex-1 flex-col justify-center py-16 lg:py-12">
          <h1 className="font-display max-w-[14ch] text-[clamp(2.6rem,8.4vw,6.9rem)] font-medium leading-[0.99] tracking-[-0.025em] text-bone sm:max-w-none">
            <MaskedLine ready={ready} delay={0.12}>
              Rigorous mathematics,
            </MaskedLine>
            <MaskedLine ready={ready} delay={0.2}>
              <em className="font-light italic text-amber">engineered</em> into
              systems
            </MaskedLine>
            <MaskedLine ready={ready} delay={0.28}>
              that survive production.
            </MaskedLine>
          </h1>

          <div className="mt-12 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <motion.p
              {...fade(0.45)}
              className="max-w-xl text-[1.0625rem] leading-relaxed text-muted"
            >
              I'm {profile.name} — a Computer Engineering &amp; Mathematics
              student building AI pipelines, serverless architectures, and
              data infrastructure for government ministries, state agencies,
              and research labs.
            </motion.p>

            <motion.div
              {...fade(0.55)}
              className="flex shrink-0 flex-wrap items-center gap-x-8 gap-y-4"
            >
              <Magnetic>
                <a
                  href="#work"
                  className="group inline-flex items-center gap-3 rounded-full bg-amber px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.16em] text-void transition-colors duration-300 hover:bg-bone"
                >
                  View selected work
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    aria-hidden
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                  >
                    <path
                      d="M2.5 2.5h8v8M10.5 2.5l-8 8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      transform="rotate(90 6.5 6.5)"
                    />
                  </svg>
                </a>
              </Magnetic>
              <a
                href="#contact"
                className="link-underline font-mono text-[11px] uppercase tracking-[0.16em] text-bone"
              >
                Get in touch
              </a>
            </motion.div>
          </div>
        </div>

        {/* instrument ledger */}
        <motion.div
          {...fade(0.7)}
          className="relative grid grid-cols-2 border-t border-edge-strong pb-12 lg:grid-cols-4 lg:pb-14"
        >
          <Tick className="-left-1 -top-[4.5px]" />
          <Tick className="-right-1 -top-[4.5px] hidden lg:block" />
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className={`pt-7 ${
                i % 2 !== 0 ? "border-l border-edge pl-5 lg:pl-7" : ""
              } ${i >= 2 ? "max-lg:mt-6 lg:border-l lg:border-edge lg:pl-7" : ""}`}
            >
              <p className="font-display text-[2.4rem] font-light leading-none text-bone">
                <Counter value={m.value} prefix={m.prefix} suffix={m.suffix} />
              </p>
              <p className="mt-3 text-sm leading-snug text-muted">{m.label}</p>
              <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
                {m.note}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
