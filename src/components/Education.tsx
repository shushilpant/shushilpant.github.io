import { education } from "../data/resume";
import { Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";

export function Education() {
  return (
    <section id="education" className="px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader
          index="04"
          label="Education"
          meta={`Expected ${education.expected}`}
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div>
              <h3 className="font-display text-[clamp(1.9rem,3.5vw,2.75rem)] font-medium leading-[1.05] text-ink">
                {education.school}
              </h3>
              <ul className="mt-6 space-y-2">
                {education.degrees.map((degree) => (
                  <li
                    key={degree}
                    className="flex items-center gap-3 text-lg text-ink-soft"
                  >
                    <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-cobalt" />
                    {degree}
                  </li>
                ))}
              </ul>
              <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-faint">
                Dual degree · Expected {education.expected}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <h4 className="mb-6 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">
                Relevant coursework
              </h4>
              <ul className="border-t border-line">
                {education.coursework.map((course, i) => (
                  <li
                    key={course}
                    className="flex items-baseline gap-5 border-b border-line py-3 text-sm text-ink-soft"
                  >
                    <span className="nums font-mono text-[10px] text-ink-faint">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
