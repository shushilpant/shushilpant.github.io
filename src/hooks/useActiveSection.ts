import { useEffect, useState } from "react";
import { navLinks } from "../data/resume";

export type ActiveSection = { index: string; label: string; href: string };

const sections: ActiveSection[] = [
  { index: "00", label: "Index", href: "#top" },
  ...navLinks.map((l) => ({ index: l.index, label: l.label, href: l.href })),
];

/** Tracks which page section currently occupies the reading band. */
export function useActiveSection(): ActiveSection {
  const [active, setActive] = useState<ActiveSection>(sections[0]);

  useEffect(() => {
    const observed = sections
      .map((s) => ({ s, el: document.querySelector<HTMLElement>(s.href) }))
      .filter((x): x is { s: ActiveSection; el: HTMLElement } => x.el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const match = observed.find((x) => x.el === entry.target);
          if (match) setActive(match.s);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    observed.forEach((x) => observer.observe(x.el));
    return () => observer.disconnect();
  }, []);

  return active;
}
