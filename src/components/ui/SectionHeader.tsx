import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionHeaderProps = {
  index: string;
  label: string;
  title?: ReactNode;
  lede?: ReactNode;
  meta?: string;
};

export function SectionHeader({ index, label, title, lede, meta }: SectionHeaderProps) {
  return (
    <header className="mb-12 lg:mb-16">
      <Reveal>
        <div className="flex items-baseline justify-between gap-4 border-t border-line-strong pt-3">
          <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-ink">
            <span className="text-accent">§{index}</span>
            <span className="mx-2 text-ink-faint">/</span>
            {label}
          </span>
          {meta && (
            <span className="nums font-mono text-[11px] tracking-[0.12em] uppercase text-ink-faint">
              {meta}
            </span>
          )}
        </div>
      </Reveal>

      {title && (
        <Reveal delay={0.06}>
          <h2 className="font-display mt-7 max-w-3xl text-[clamp(1.9rem,4.2vw,3rem)] font-medium leading-[1.08] text-ink">
            {title}
          </h2>
        </Reveal>
      )}

      {lede && (
        <Reveal delay={0.12}>
          <p className="mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-ink-soft">{lede}</p>
        </Reveal>
      )}
    </header>
  );
}
