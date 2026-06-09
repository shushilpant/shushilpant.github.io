# Shushil Pant — Personal Website

A personal portfolio for Shushil Pant, a Computer Engineering & Mathematics
student building AI pipelines, serverless systems, and data infrastructure at
scale.

The design is a light, editorial, Swiss-precision aesthetic — warm paper, ink
type, a single cobalt accent, and a quiet mathematical motif (a curve fit to
plotted data) in the hero. Set in **Fraunces**, **Hanken Grotesk**, and
**IBM Plex Mono**.

## Stack

- **React 19** + **TypeScript**
- **Vite 8**
- **Tailwind CSS v4** (design tokens defined in `src/index.css` via `@theme`)
- **Framer Motion** for scroll reveals and micro-interactions

## Develop

```bash
npm install
npm run dev        # start the dev server
npm run build      # type-check (tsc) and build for production
npm run preview    # preview the production build
npm run lint       # run ESLint
```

## Editing content

All copy and data live in [`src/data/resume.ts`](src/data/resume.ts) — profile,
contact links, metrics, work history, skills, education, and earlier roles.
Update that single file to change what the site shows; the components read from
it. Contact links (email, GitHub, LinkedIn) are in the `profile` object.

## Structure

```
src/
  data/resume.ts        # all content
  index.css             # design tokens, base styles, motifs
  App.tsx               # page composition
  components/
    Navigation.tsx Hero.tsx About.tsx Experience.tsx
    Skills.tsx Education.tsx AdditionalExperience.tsx
    Contact.tsx Footer.tsx
    ui/                 # Reveal, SectionHeader, ScrollProgress, PlotMotif
```

Accessibility: respects `prefers-reduced-motion`, uses semantic landmarks,
focus-visible outlines, and `aria` attributes on interactive controls.
