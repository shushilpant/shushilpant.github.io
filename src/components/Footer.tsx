import { useReducedMotion } from "framer-motion";
import { profile } from "../data/resume";
import { Magnetic } from "./ui/Magnetic";
import { Reveal } from "./ui/Reveal";

export function Footer() {
  const year = new Date().getFullYear();
  const reduce = useReducedMotion();

  const toTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <footer className="overflow-hidden border-t border-edge px-6 pb-16 pt-16 lg:px-10 lg:pb-24 lg:pt-20">
      <div className="mx-auto max-w-[1240px]">
        <Reveal>
          <p
            aria-hidden
            className="text-outline font-display select-none whitespace-nowrap text-center text-[clamp(2.6rem,10.5vw,9rem)] font-medium uppercase leading-none tracking-[-0.02em] transition-colors duration-700 hover:text-bone/10"
          >
            {profile.name}
          </p>
        </Reveal>

        <div className="mt-14 flex flex-col gap-8 border-t border-edge pt-8 sm:flex-row sm:items-end sm:justify-between lg:mt-20">
          <div className="space-y-2 font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
            <p>
              © <span className="nums">{year}</span> {profile.name} — designed
              &amp; built in Hattiesburg
            </p>
            <p>
              Fraunces · Hanken Grotesk · IBM Plex Mono
              <span className="mx-2 text-bone/20">·</span>
              React 19 · TypeScript · Tailwind 4
            </p>
          </div>

          <Magnetic strength={0.35}>
            <a
              href="#top"
              onClick={toTop}
              aria-label="Back to top"
              className="group flex h-14 w-14 items-center justify-center rounded-full border border-edge-strong text-bone transition-colors duration-300 hover:border-amber hover:text-amber"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                aria-hidden
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              >
                <path
                  d="M7.5 13V2M3 6.5L7.5 2 12 6.5"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </Magnetic>
        </div>
      </div>
    </footer>
  );
}
