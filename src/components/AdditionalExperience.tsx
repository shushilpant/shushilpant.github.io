import { additionalExperience } from "../data/resume";
import { Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";

export function AdditionalExperience() {
  return (
    <section id="earlier" className="px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader
          index="05"
          label="Earlier"
          meta="Nepal · 2021 — 2024"
          title="Where it started"
          lede="Before engineering school in Mississippi, I spent years in Nepal building community technology infrastructure — digitising cultural archives, expanding library access, and teaching the next generation to code."
        />

        <div className="border-t border-line-strong">
          {additionalExperience.map((item, i) => (
            <Reveal key={item.role} delay={i * 0.05}>
              <div className="group grid grid-cols-1 gap-x-8 gap-y-2 border-b border-line py-7 lg:grid-cols-[1fr_1.4fr_auto] lg:py-8">
                <div>
                  <h3 className="font-display text-xl font-medium text-ink transition-colors group-hover:text-accent">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm text-ink-soft">
                    {item.org}
                    <span className="text-ink-faint"> · {item.place}</span>
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-ink-soft">{item.detail}</p>
                <span className="nums font-mono text-[11px] uppercase tracking-[0.1em] text-ink-faint lg:text-right">
                  {item.period}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
