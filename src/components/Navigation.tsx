import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { navLinks, profile } from "../data/resume";
import { useActiveSection } from "../hooks/useActiveSection";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useActiveSection();
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  const toTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[70] transition-all duration-500 ${
          scrolled
            ? "border-b border-line bg-paper/85 backdrop-blur-md"
            : "border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4 lg:px-10">
          <a
            href="#top"
            onClick={toTop}
            className="group flex items-center gap-2.5"
            aria-label="Back to top"
          >
            <span className="h-2 w-2 rounded-full bg-cobalt transition-transform group-hover:scale-125" />
            <span className="font-display text-[1.35rem] font-medium leading-none text-ink transition-colors group-hover:text-cobalt">
              {profile.name}
            </span>
          </a>

          <ul className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => {
              const isActive = active.href === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors ${
                      isActive ? "text-cobalt" : "text-ink-soft hover:text-ink"
                    }`}
                  >
                    <span
                      className={`nums ${isActive ? "text-cobalt" : "text-ink-faint"}`}
                    >
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
            className="hidden items-center rounded-full border border-line-strong px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper lg:inline-flex"
          >
            Get in touch
          </a>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="relative z-[75] flex flex-col gap-[5px] p-2 lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span
              className={`block h-px w-6 bg-ink transition-transform duration-300 ${
                mobileOpen ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-ink transition-transform duration-300 ${
                mobileOpen ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
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
            className="fixed inset-0 z-[60] flex flex-col justify-between bg-paper px-7 pb-10 pt-28 lg:hidden"
          >
            <nav>
              {navLinks.map((link, i) => (
                <div key={link.href} className="overflow-hidden">
                  <motion.a
                    href={link.href}
                    initial={reduce ? { opacity: 0 } : { y: "110%" }}
                    animate={reduce ? { opacity: 1 } : { y: 0 }}
                    transition={{
                      delay: 0.05 + i * 0.05,
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-baseline gap-4 border-b border-line py-4"
                  >
                    <span className="nums font-mono text-xs text-cobalt">
                      {link.index}
                    </span>
                    <span className="font-display text-4xl font-medium text-ink">
                      {link.label}
                    </span>
                  </motion.a>
                </div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="flex items-end justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-ink-faint"
            >
              <p className="nums">{profile.coords}</p>
              <a href={`mailto:${profile.email}`} className="text-ink">
                {profile.email}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
