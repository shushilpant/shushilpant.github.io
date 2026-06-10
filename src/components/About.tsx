import { capabilities, education, profile } from "../data/resume";
import { Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";

const facts = [
  { k: "Based", v: profile.location },
  { k: "Origin", v: profile.origin },
  { k: "Studying", v: "Computer Eng. & Math" },
  { k: "Graduating", v: education.expected },
];

const footnotes = [
  {
    id: "fn1",
    refId: "fnref1",
    text: "Guinea, Ghana, and Côte d'Ivoire — eight views, live country-level filtering, the lot.",
  },
  {
    id: "fn2",
    refId: "fnref2",
    text: "Spanning 125 years of the World Ocean Database. I came out of it with strong opinions about timestamp formats.",
  },
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
              <span className="font-normal italic">production engineering</span>
              .
            </>
          }
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="max-w-xl text-[1.0625rem] leading-relaxed text-ink-soft">
                From serverless compliance pipelines processing thousands of
                licensing applications, to mining-intelligence dashboards
                serving three West African ministries
                <a href="#fn1" id="fnref1" className="fn-ref" aria-label="Footnote 1">
                  1
                </a>
                , to standardising 17 million oceanographic records
                <a href="#fn2" id="fnref2" className="fn-ref" aria-label="Footnote 2">
                  2
                </a>{" "}
                for NOAA — my work lives at the point where mathematical
                precision becomes dependable software.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-ink-soft">
                I grew up in {profile.origin}, where I led community technology
                initiatives — digitising cultural archives, expanding library
                access, and teaching students to code — before coming to
                Mississippi to study engineering. That throughline still
                drives me: build things that are rigorous, useful, and built
                to last.
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-9 flex items-baseline gap-4 border-l-2 border-cobalt pl-4">
                <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-faint">
                  Now <span className="nums">· {profile.nowDate}</span>
                </span>
                <span className="text-sm text-ink">{profile.now}</span>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <dl className="mt-9 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-line bg-line">
                {facts.map((f) => (
                  <div key={f.k} className="bg-paper px-4 py-4">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-faint">
                      {f.k}
                    </dt>
                    <dd className="mt-1.5 text-sm font-medium text-ink">
                      {f.v}
                    </dd>
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
                    <span className="nums font-mono text-[11px] leading-7 text-cobalt">
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

        {/* footnotes */}
        <Reveal delay={0.1}>
          <div className="mt-14 max-w-xl border-t border-line pt-4">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-faint">
              Notes
            </p>
            <ol className="space-y-2">
              {footnotes.map((fn, i) => (
                <li
                  key={fn.id}
                  id={fn.id}
                  className="flex gap-3 text-[0.85rem] leading-relaxed text-ink-soft"
                >
                  <span className="nums shrink-0 font-mono text-[0.7rem] leading-6 text-cobalt">
                    {i + 1}.
                  </span>
                  <span>
                    {fn.text}{" "}
                    <a
                      href={`#${fn.refId}`}
                      className="font-mono text-[0.7rem] text-cobalt no-underline hover:underline"
                      aria-label="Back to text"
                    >
                      ↩
                    </a>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
