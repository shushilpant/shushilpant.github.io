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

        <Reveal>
          <div className="border-t border-line-strong">
            {skillGroups.map((group, i) => (
              <div
                key={group.category}
                className="grid grid-cols-1 gap-x-8 gap-y-2 border-b border-line py-6 lg:grid-cols-[220px_1fr] lg:py-7"
              >
                <div className="flex items-baseline gap-3">
                  <span className="nums font-mono text-[11px] text-cobalt">
                    0{i + 1}
                  </span>
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink">
                    {group.category}
                  </h3>
                </div>
                <p className="text-[1.0625rem] leading-relaxed text-ink-soft">
                  {group.skills.map((skill, j) => (
                    <span key={skill}>
                      <span className="transition-colors hover:text-ink">
                        {skill}
                      </span>
                      {j < group.skills.length - 1 && (
                        <span className="mx-2.5 text-ink-faint">·</span>
                      )}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
