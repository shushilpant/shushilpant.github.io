import { useEffect, useRef, useState } from "react";
import { profile } from "../data/resume";
import { Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";
import { Tick } from "./ui/Tick";

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
      className={`shrink-0 rounded-full border px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] transition-colors duration-300 ${
        copied
          ? "border-amber/60 text-amber"
          : "border-edge-strong text-muted hover:border-bone hover:text-bone"
      }`}
    >
      {copied ? "Copied ✓" : "Copy address"}
    </button>
  );
}

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-[1240px]">
        <SectionHeader index="06" label="Contact" meta={profile.status} />

        <Reveal>
          <h2 className="font-display max-w-4xl text-[clamp(2.4rem,6.2vw,4.6rem)] font-medium leading-[1.01] text-bone">
            Have a hard problem{" "}
            <em className="font-light italic text-amber">worth solving?</em>
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mt-7 max-w-md text-[1.0625rem] leading-relaxed text-muted">
            I'm open to research collaborations, engineering roles, and
            conversations about intelligent systems, data infrastructure, and
            full-stack development. The inbox is always open.
          </p>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="relative mt-14 border-y border-edge-strong">
            <Tick className="-left-1 -top-[4.5px]" />
            <Tick className="-bottom-[4.5px] -right-1" />
            <div className="flex flex-wrap items-center justify-between gap-x-10 gap-y-6 py-9 lg:py-11">
              <a
                href={`mailto:${profile.email}`}
                className="font-display break-all text-[clamp(1.45rem,4.3vw,3.3rem)] font-light leading-tight text-bone transition-colors duration-300 hover:text-amber"
              >
                {profile.email}
              </a>
              <CopyEmail />
            </div>
          </div>
        </Reveal>

        <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 sm:gap-x-12">
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={0.18 + i * 0.05}>
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 border-b border-edge py-6"
              >
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
                    {c.label}
                  </p>
                  <p className="mt-1.5 text-lg text-bone transition-colors duration-300 group-hover:text-amber">
                    {c.value}
                  </p>
                </div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden
                  className="shrink-0 text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-amber"
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
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.25}>
          <p className="mt-12 font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
            {profile.location} <span className="mx-2 text-bone/20">·</span>
            <span className="nums">{profile.coords}</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
