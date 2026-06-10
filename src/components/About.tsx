import { capabilities, education, profile } from "../data/resume";
import { Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";

const facts = [
  { k: "Based", v: profile.location },
  { k: "Origin", v: profile.origin },
  { k: "Studying", v: "Computer Eng. & Math" },
  { k: "Graduating", v: education.expected },
];

export function About() {
  return (
    <section id="about" className="px-6 py-24 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-[1240px]">
        <SectionHeader
          index="01"
          label="About"
          meta="Profile"
          title={
            <>
              I build where rigorous mathematics meets{" "}
              <em className="font-light italic text-amber">
                production engineering
              </em>
              .
            </>
          }
        />

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="max-w-xl text-[1.0625rem] leading-relaxed text-muted">
                From serverless compliance pipelines processing thousands of
                licensing applications, to mining-intelligence dashboards
                serving three West African ministries, to standardising 17
                million oceanographic records for NOAA — my work lives at the
                point where mathematical precision becomes dependable
                software.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-muted">
                I grew up in {profile.origin}, where I led community
                technology initiatives — digitising cultural archives,
                expanding library access, and teaching students to code —
                before coming to Mississippi to study engineering. That
                throughline still drives me: build things that are rigorous,
                useful, and built to last.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <dl className="mt-12 grid grid-cols-2 gap-px border border-edge bg-edge">
                {facts.map((f) => (
                  <div
                    key={f.k}
                    className="group bg-void px-5 py-5 transition-colors duration-300 hover:bg-panel"
                  >
                    <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
                      {f.k}
                    </dt>
                    <dd className="mt-2 text-sm font-medium text-bone">
                      {f.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <div className="lg:border-l lg:border-edge lg:pl-14">
            <Reveal>
              <p className="mb-8 font-mono text-[10px] uppercase tracking-[0.22em] text-faint">
                What I work on
              </p>
            </Reveal>
            <div className="border-t border-edge">
              {capabilities.map((c, i) => (
                <Reveal key={c.kicker} delay={0.05 * i}>
                  <div className="group flex gap-6 border-b border-edge py-7">
                    <span className="nums font-mono text-[11px] leading-7 text-faint transition-colors duration-300 group-hover:text-amber">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-medium text-bone">
                        {c.kicker}
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-muted">
                        {c.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
