import { marquee, skillGroups } from "../data/resume";
import { Marquee } from "./ui/Marquee";
import { Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";

export function Skills() {
  return (
    <section id="skills" className="pt-24 lg:pt-36">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
        <SectionHeader
          index="03"
          label="Skills"
          meta="Toolkit"
          title="The stack I reach for"
        />

        <div className="border-t border-edge-strong">
          {skillGroups.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.04}>
              <div className="grid grid-cols-1 gap-x-8 gap-y-4 border-b border-edge py-7 lg:grid-cols-[230px_1fr] lg:py-8">
                <div className="flex items-baseline gap-4">
                  <span className="nums font-mono text-[11px] text-amber">
                    0{i + 1}
                  </span>
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-bone">
                    {group.category}
                  </h3>
                </div>
                <ul className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-edge bg-surface px-4 py-1.5 text-sm text-muted transition-colors duration-300 hover:border-amber/50 hover:text-bone"
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

      <div className="mt-24 lg:mt-36">
        <Marquee items={marquee} />
      </div>
    </section>
  );
}
