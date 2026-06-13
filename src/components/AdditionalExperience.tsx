import { additionalExperience } from "../data/resume";
import { MarginNote } from "./ui/MarginNote";
import { Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";

export function AdditionalExperience() {
  return (
    <section id="earlier" className="px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_200px] lg:gap-x-10">
          <SectionHeader
            index="05"
            label="Earlier"
            meta="Nepal · 2021 — 2024"
            title="Where it started"
            lede="Before Mississippi I spent a few years in Nepal building community technology infrastructure — digitising archives, expanding library access, teaching students to code."
          />
          <div className="hidden lg:block">
            <MarginNote className="mt-24 w-44">
              the part of the CV I'd save from a fire.
            </MarginNote>
          </div>
        </div>

        <Reveal>
          <div className="border-t border-line-strong">
            {additionalExperience.map((item) => (
              <div
                key={item.role}
                className="group grid grid-cols-1 gap-x-8 gap-y-2 border-b border-line py-7 lg:grid-cols-[8.5rem_1fr_1.4fr] lg:py-8"
              >
                <span className="nums pt-1 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-faint">
                  {item.period}
                </span>
                <div>
                  <h3 className="font-display text-xl font-medium text-ink transition-colors group-hover:text-cobalt">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm text-ink-soft">
                    {item.org}
                    <span className="text-ink-faint"> · {item.place}</span>
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-ink-soft">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
