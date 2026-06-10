# Shushil Pant — Personal Website

Personal portfolio for Shushil Pant, a Computer Engineering & Mathematics
student building AI pipelines, serverless systems, and data infrastructure at
scale.

## Design

A mathematician's working notebook, typeset. Warm paper, ink-black text, and
two inks used with discipline: **cobalt** for structure, links, and figures;
**red pencil** for the margin notes — the human voice in the gutter.

The details carry the concept:

- A masthead dateline (`Portfolio — Field Notes · Est. Nepal`) opens the page
  over faint engineering graph paper.
- **Fig. 01** — a least-squares fit that draws itself in, residuals dashed,
  one outlier circled in red and kept on principle.
- A pencilled underline lands on the phrase that matters, slightly after the
  page settles — two strokes that don't quite agree, the way real ones don't.
- **Margin notes** in red pencil ("not a typo.", "125 years of ocean,
  standardised.") annotate the record without interrupting it.
- **Real footnotes** with return links, a dated **Now** line, and a signed
  closing — the page reads like it was written, not generated.
- Motion is sparse and honours `prefers-reduced-motion` throughout: soft
  settles, the curve and underline draw-ins, a counting ledger. Nothing
  performs.

Set in **Fraunces**, **Hanken Grotesk**, and **IBM Plex Mono**. Tokens live
in `src/index.css` under `@theme`.

## Stack

- **React 19** + **TypeScript**
- **Vite 8**
- **Tailwind CSS v4** (design tokens via `@theme`)
- **Framer Motion** for reveals and scroll state

## Develop

```bash
npm install
npm run dev        # start the dev server
npm run build      # type-check (tsc) and build for production
npm run preview    # preview the production build
npm run lint       # run ESLint
```

## Editing content

All copy and data live in [`src/data/resume.ts`](src/data/resume.ts) —
profile, contact links, metrics, work history, skills, education, and earlier
roles. Update that single file to change what the site shows; the components
read from it. The red-pencil gutter notes live with the components that use
them (`Experience.tsx`, `AdditionalExperience.tsx`, `Hero.tsx` via
`metrics[].aside`).

## Structure

```
src/
  data/resume.ts        # all content
  hooks/                # useActiveSection (nav highlight)
  index.css             # design tokens, base styles, motifs
  App.tsx               # page composition
  components/
    Navigation.tsx Hero.tsx About.tsx Experience.tsx
    Skills.tsx Education.tsx AdditionalExperience.tsx
    Contact.tsx Footer.tsx
    ui/                 # PlotMotif, MarginNote, HandUnderline,
                        # Counter, Reveal, SectionHeader, ScrollProgress
```

Accessibility: `prefers-reduced-motion` respected throughout, semantic
landmarks, a skip link, focus-visible outlines, `aria` attributes on
interactive controls, and decorative flourishes (grain, figures, margin
notes) hidden from assistive tech.
