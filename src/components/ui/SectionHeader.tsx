import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { Tick } from "./Tick";

type SectionHeaderProps = {
  index: string;
  label: string;
  title?: ReactNode;
  lede?: ReactNode;
  meta?: string;
};

export function SectionHeader({
  index,
  label,
  title,
  lede,
  meta,
}: SectionHeaderProps) {
  return (
    <header className="mb-14 lg:mb-20">
      <Reveal>
        <div className="relative flex items-baseline justify-between gap-4 border-t border-edge-strong pt-4">
          <Tick className="-left-1 -top-[4.5px]" />
          <Tick className="-right-1 -top-[4.5px]" />
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-bone">
            <span className="nums text-amber">{index}</span>
            <span className="mx-2.5 text-faint">/</span>
            {label}
          </span>
          {meta && (
            <span className="nums font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
              {meta}
            </span>
          )}
        </div>
      </Reveal>

      {title && (
        <Reveal delay={0.08}>
          <h2 className="font-display mt-9 max-w-3xl text-[clamp(2rem,4.6vw,3.4rem)] font-medium leading-[1.06] text-bone">
            {title}
          </h2>
        </Reveal>
      )}

      {lede && (
        <Reveal delay={0.14}>
          <p className="mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-muted">
            {lede}
          </p>
        </Reveal>
      )}
    </header>
  );
}
