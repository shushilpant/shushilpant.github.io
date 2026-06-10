import { additionalExperience } from "../data/resume";
import { Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";

export function AdditionalExperience() {
  return (
    <section id="earlier" className="px-6 py-24 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-[1240px]">
        <SectionHeader
          index="05"
          label="Earlier"
          meta="Nepal · 2021 — 2024"
          title={
            <>
              Where it{" "}
              <em className="font-light italic text-amber">started</em>
            </>
          }
          lede="Before engineering school in Mississippi, I spent years in Nepal building community technology infrastructure — digitising cultural archives, expanding library access, and teaching the next generation to code."
        />

        <div className="border-t border-edge-strong">
          {additionalExperience.map((item, i) => (
            <Reveal key={item.role} delay={i * 0.04}>
              <div className="group grid grid-cols-1 gap-x-10 gap-y-2.5 border-b border-edge px-1 py-8 transition-colors duration-300 hover:bg-surface/70 sm:px-3 lg:grid-cols-[8.5rem_1fr_1.35fr]">
                <span className="nums pt-1 font-mono text-[10px] uppercase tracking-[0.1em] text-faint">
                  {item.period}
                </span>
                <div>
                  <h3 className="font-display text-xl font-medium text-bone transition-colors duration-300 group-hover:text-amber">
                    {item.role}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted">
                    {item.org}
                    <span className="text-faint"> · {item.place}</span>
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-muted">
                  {item.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
