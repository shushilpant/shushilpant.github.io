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
    <section id="about" className="px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader
          index="01"
          label="About"
          meta="Profile"
          title={
            <>
              I build where rigorous mathematics meets{" "}
              <span className="italic font-normal">production engineering</span>.
            </>
          }
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="max-w-xl text-[1.0625rem] leading-relaxed text-ink-soft">
                From serverless compliance pipelines processing thousands of
                licensing applications, to mining-intelligence dashboards serving
                three West African ministries, to standardising 17 million
                oceanographic records for NOAA — my work lives at the point where
                mathematical precision becomes dependable software.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-ink-soft">
                I grew up in {profile.origin}, where I led community technology
                initiatives — digitising cultural archives, expanding library
                access, and teaching students to code — before coming to
                Mississippi to study engineering. That throughline still drives
                me: build things that are rigorous, useful, and built to last.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-line bg-line">
                {facts.map((f) => (
                  <div key={f.k} className="bg-paper px-4 py-4">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-faint">
                      {f.k}
                    </dt>
                    <dd className="mt-1.5 text-sm font-medium text-ink">{f.v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <p className="mb-7 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">
                What I work on
              </p>
            </Reveal>
            <div className="border-t border-line">
              {capabilities.map((c, i) => (
                <Reveal key={c.kicker} delay={0.06 * i}>
                  <div className="group flex gap-5 border-b border-line py-6">
                    <span className="nums font-mono text-[11px] leading-7 text-accent">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-medium text-ink">
                        {c.kicker}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-soft">
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
