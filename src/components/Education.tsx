import { education } from "../data/resume";
import { Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";

export function Education() {
  return (
    <section id="education" className="px-6 py-24 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-[1240px]">
        <SectionHeader
          index="04"
          label="Education"
          meta={`Expected ${education.expected}`}
        />

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div>
              <span className="mb-5 inline-block border border-amber/40 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.2em] text-amber">
                Dual degree
              </span>
              <h3 className="font-display text-[clamp(1.9rem,3.5vw,2.7rem)] font-medium leading-[1.06] text-bone">
                {education.school}
              </h3>
              <ul className="mt-7 space-y-3">
                {education.degrees.map((degree) => (
                  <li
                    key={degree}
                    className="flex items-center gap-4 text-lg text-muted"
                  >
                    <span aria-hidden className="h-1.5 w-1.5 bg-amber" />
                    {degree}
                  </li>
                ))}
              </ul>
              <p className="mt-7 font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
                Expected {education.expected}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <h4 className="mb-6 font-mono text-[10px] uppercase tracking-[0.22em] text-faint">
                Relevant coursework
              </h4>
              <ul className="border-t border-edge">
                {education.coursework.map((course, i) => (
                  <li
                    key={course}
                    className="flex items-baseline gap-5 border-b border-edge py-3.5 text-sm text-muted transition-colors duration-300 hover:text-bone"
                  >
                    <span className="nums font-mono text-[10px] text-faint">
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
