import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { navLinks, profile } from "../data/resume";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean) as Element[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const toTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-paper/85 backdrop-blur-md border-b border-line" : "border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4 lg:px-10">
          <a
            href="#"
            onClick={toTop}
            className="group flex items-center gap-2.5"
            aria-label="Back to top"
          >
            <span className="h-2 w-2 rounded-full bg-accent transition-transform group-hover:scale-125" />
            <span className="font-display text-[1.35rem] font-medium leading-none text-ink transition-colors group-hover:text-accent">
              {profile.name}
            </span>
          </a>

          <ul className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => {
              const active = activeSection === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`group flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors ${
                      active ? "text-accent" : "text-ink-soft hover:text-ink"
                    }`}
                  >
                    <span className={active ? "text-accent" : "text-ink-faint"}>
                      {link.index}
                    </span>
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full border border-line-strong px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper lg:inline-flex"
          >
            Get in touch
          </a>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="flex flex-col gap-[5px] p-2 lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className={`block h-px w-6 bg-ink transition-transform duration-300 ${mobileOpen ? "translate-y-[6px] rotate-45" : ""}`} />
            <span className={`block h-px w-6 bg-ink transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px w-6 bg-ink transition-transform duration-300 ${mobileOpen ? "-translate-y-[6px] -rotate-45" : ""}`} />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col justify-center gap-2 bg-paper px-8 lg:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setMobileOpen(false)}
                className="flex items-baseline gap-4 border-b border-line py-4"
              >
                <span className="font-mono text-xs text-accent">{link.index}</span>
                <span className="font-display text-4xl font-medium text-ink">{link.label}</span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
