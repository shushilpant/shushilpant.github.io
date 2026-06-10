import { useEffect, useRef, useState } from "react";
import { profile } from "../data/resume";
import { Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";

const channels = [
  { label: "GitHub", value: profile.githubHandle, href: profile.github },
  { label: "LinkedIn", value: profile.linkedinHandle, href: profile.linkedin },
];

function CopyEmail() {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    []
  );

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — the mailto link still works */
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-live="polite"
      className={`shrink-0 rounded-full border px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] transition-colors ${
        copied
          ? "border-cobalt text-cobalt"
          : "border-line-strong text-ink-soft hover:border-ink hover:text-ink"
      }`}
    >
      {copied ? "Copied ✓" : "Copy"}
    </button>
  );
}

export function Contact() {
  return (
    <section id="contact" className="px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader index="06" label="Contact" meta={profile.status} />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div>
              <h2 className="font-display text-[clamp(2.25rem,5.5vw,4rem)] font-medium leading-[1.02] text-ink">
                Have a hard problem{" "}
                <span className="font-normal italic">worth solving?</span>
              </h2>
              <p className="mt-6 max-w-md text-[1.0625rem] leading-relaxed text-ink-soft">
                I'm open to research collaborations, engineering roles, and
                conversations about intelligent systems, data infrastructure,
                and full-stack development. The inbox is always open — and I
                do mean always.
              </p>

              <p className="font-display mt-10 text-2xl italic text-ink">
                — Shushil
              </p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-faint">
                {profile.location} · <span className="nums">{profile.coords}</span>
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="border-t border-line">
              <div className="flex items-center justify-between gap-4 border-b border-line py-6">
                <div className="min-w-0">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-faint">
                    Email
                  </p>
                  <a
                    href={`mailto:${profile.email}`}
                    className="mt-1.5 block break-all text-lg text-ink transition-colors hover:text-cobalt"
                  >
                    {profile.email}
                  </a>
                </div>
                <CopyEmail />
              </div>

              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 border-b border-line py-6"
                >
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-faint">
                      {c.label}
                    </p>
                    <p className="mt-1.5 text-lg text-ink transition-colors group-hover:text-cobalt">
                      {c.value}
                    </p>
                  </div>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden
                    className="shrink-0 text-ink-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cobalt"
                  >
                    <path
                      d="M5 15L15 5M7 5h8v8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
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
