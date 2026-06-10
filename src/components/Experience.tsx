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
    <article className="group/row relative border-b border-edge transition-colors duration-300 hover:bg-surface/70">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="grid w-full grid-cols-[2.5rem_1fr] gap-x-4 px-1 py-8 text-left sm:px-3 lg:grid-cols-[5.5rem_1fr_9.5rem] lg:gap-x-8 lg:py-10"
      >
        <span
          aria-hidden
          className="nums font-display pt-1 text-[1.7rem] font-light leading-none text-bone/15 transition-colors duration-300 group-hover/row:text-amber/50 lg:text-[3.2rem]"
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <div>
          {job.featured && (
            <span className="mb-2.5 inline-block border border-amber/40 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.2em] text-amber">
              Featured
            </span>
          )}
          <h3 className="font-display text-[1.3rem] font-medium leading-tight text-bone transition-colors duration-300 group-hover/row:text-amber sm:text-[1.5rem] lg:text-[1.7rem]">
            {job.role}
          </h3>
          <p className="mt-2 text-[0.95rem] text-muted">
            {job.company}
            {job.project && <span className="text-bone"> — {job.project}</span>}
          </p>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
            {job.summary}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            {job.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-edge px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="col-start-2 mt-5 flex items-center justify-between lg:col-start-3 lg:mt-1 lg:flex-col lg:items-end lg:justify-start lg:gap-5">
          <span className="nums font-mono text-[10px] uppercase tracking-[0.1em] text-faint">
            {job.period}
          </span>
          <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted transition-colors duration-300 group-hover/row:text-amber">
            {open ? "Close" : "Open"}
            <svg
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              aria-hidden
              className={`transition-transform duration-300 ${open ? "rotate-45" : ""}`}
            >
              <path
                d="M5.5 1v9M1 5.5h9"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
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
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <ul className="grid grid-cols-1 gap-x-12 gap-y-3.5 px-1 pb-10 sm:px-3 lg:grid-cols-2 lg:pl-[7.5rem] lg:pr-[9.5rem]">
              {job.highlights.map((h) => (
                <li
                  key={h}
                  className="flex gap-3.5 text-sm leading-relaxed text-muted"
                >
                  <span
                    aria-hidden
                    className="mt-[0.62em] h-px w-4 shrink-0 bg-amber/70"
                  />
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
    <section id="work" className="px-6 py-24 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-[1240px]">
        <SectionHeader
          index="02"
          label="Work"
          meta="2024 — 2026"
          title={
            <>
              Selected{" "}
              <em className="font-light italic text-amber">work</em>
            </>
          }
          lede="Seven roles across AI research, government technology, scientific data, and finance — each one a different edge of building intelligent, production-grade systems. Open any entry for detail."
        />

        <Reveal>
          <div className="border-t border-edge-strong">
            {experience.map((job, i) => (
              <ExperienceRow key={job.id} job={job} index={i} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
