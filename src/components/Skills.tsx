import { skillGroups } from "../data/resume";
import { Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";

export function Skills() {
  return (
    <section id="skills" className="px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader
          index="03"
          label="Skills"
          meta="Toolkit"
          title="The stack I reach for"
        />

        <div className="border-t border-line-strong">
          {skillGroups.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.05}>
              <div className="grid grid-cols-1 gap-x-8 gap-y-4 border-b border-line py-7 lg:grid-cols-[220px_1fr] lg:py-8">
                <div className="flex items-baseline gap-3">
                  <span className="nums font-mono text-[11px] text-accent">
                    0{i + 1}
                  </span>
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink">
                    {group.category}
                  </h3>
                </div>
                <ul className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-line bg-panel px-3.5 py-1.5 text-sm text-ink-soft transition-colors hover:border-ink hover:text-ink"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
