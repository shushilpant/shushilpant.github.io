import { profile } from "../data/resume";
import { Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "GitHub", value: profile.githubHandle, href: profile.github },
  { label: "LinkedIn", value: profile.linkedinHandle, href: profile.linkedin },
];

export function Contact() {
  return (
    <section id="contact" className="px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader index="06" label="Contact" meta={profile.status} />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal>
            <div>
              <h2 className="font-display text-[clamp(2.25rem,5.5vw,4rem)] font-medium leading-[1.02] text-ink">
                Have a hard problem{" "}
                <span className="italic font-normal">worth solving?</span>
              </h2>
              <p className="mt-6 max-w-md text-[1.0625rem] leading-relaxed text-ink-soft">
                I'm open to research collaborations, engineering roles, and
                conversations about intelligent systems, data infrastructure, and
                full-stack development. The inbox is always open.
              </p>
              <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-faint">
                {profile.location} · {profile.coords}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="border-t border-line">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center justify-between gap-4 border-b border-line py-6"
                >
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-faint">
                      {c.label}
                    </p>
                    <p className="mt-1.5 text-lg text-ink transition-colors group-hover:text-accent">
                      {c.value}
                    </p>
                  </div>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="shrink-0 text-ink-faint transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                  >
                    <path d="M5 15L15 5M7 5h8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
