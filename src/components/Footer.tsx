import { useReducedMotion } from "framer-motion";
import { profile } from "../data/resume";

export function Footer() {
  const year = new Date().getFullYear();
  const reduce = useReducedMotion();

  const toTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <footer className="border-t border-line-strong px-6 py-10 lg:px-10">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <a
            href="#top"
            onClick={toTop}
            className="font-display text-2xl font-medium text-ink transition-colors hover:text-cobalt"
          >
            {profile.name}
          </a>
          <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-faint">
            © <span className="nums">{year}</span> · {profile.location} ·{" "}
            <span className="nums">{profile.coords}</span>
          </p>
        </div>

        <div className="flex flex-col gap-1 sm:items-end">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-faint">
            Set in Fraunces, Hanken Grotesk &amp; IBM Plex Mono
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-faint">
            Written by hand, read by you ·{" "}
            <a
              href="#top"
              onClick={toTop}
              className="link-underline text-ink-soft"
            >
              Back to top ↑
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
