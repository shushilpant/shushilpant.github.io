import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { experience } from "../data/resume";
import { Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";

function ExperienceRow({
  job,
  index,
}: {
  job: (typeof experience)[number];
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const panelId = `work-${job.id}`;

  return (
    <article className="border-b border-line">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="group grid w-full grid-cols-[2.25rem_1fr] gap-x-4 py-7 text-left transition-colors lg:grid-cols-[3rem_1fr_9rem] lg:gap-x-8 lg:py-8"
      >
        <span className="nums pt-1 font-mono text-[11px] tracking-[0.1em] text-ink-faint transition-colors group-hover:text-accent">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div>
          {job.featured && (
            <span className="mb-2 inline-block font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              Featured
            </span>
          )}
          <h3 className="font-display text-[1.3rem] font-medium leading-tight text-ink transition-colors group-hover:text-accent sm:text-[1.5rem] lg:text-[1.75rem]">
            {job.role}
          </h3>
          <p className="mt-1.5 text-[0.95rem] text-ink-soft">
            {job.company}
            {job.project && <span className="text-ink"> — {job.project}</span>}
          </p>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft">
            {job.summary}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            {job.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-soft"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="col-start-2 mt-4 flex items-center justify-between lg:col-start-3 lg:mt-1 lg:flex-col lg:items-end lg:justify-start lg:gap-4">
          <span className="nums font-mono text-[11px] uppercase tracking-[0.08em] text-ink-faint">
            {job.period}
          </span>
          <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-soft transition-colors group-hover:text-accent">
            {open ? "Close" : "Details"}
            <svg
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            >
              <path d="M2 4l3.5 3.5L9 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <ul className="grid grid-cols-1 gap-3 pb-9 lg:grid-cols-2 lg:gap-x-10 lg:pl-[3.5rem] lg:pr-[9rem]">
              {job.highlights.map((h) => (
                <li
                  key={h}
                  className="relative pl-5 text-sm leading-relaxed text-ink-soft before:absolute before:left-0 before:top-[0.65em] before:h-1 before:w-1 before:rounded-full before:bg-accent"
                >
                  {h}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}

export function Experience() {
  return (
    <section id="work" className="px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader
          index="02"
          label="Work"
          meta="2024 — 2026"
          title="Selected work"
          lede="Seven roles across AI research, government technology, scientific data, and finance — each one a different edge of building intelligent, production-grade systems. Open any entry for detail."
        />

        <Reveal>
          <div className="border-t border-line-strong">
            {experience.map((job, i) => (
              <ExperienceRow key={job.id} job={job} index={i} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
