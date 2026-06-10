# Shushil Pant — Field Notes

Personal portfolio for Shushil Pant, a Computer Engineering & Mathematics
student building AI pipelines, serverless systems, and data infrastructure at
scale.

## Design system — "Field Notes"

A night-instrument editorial: a working engineer's console after dark. Every
decision derives from one concept — precision instruments annotating dark
field data — so the details reinforce each other instead of competing.

**Color.** Three cool void surfaces (`#08090c → #11141b`), three warm bone
inks (`#eae7df → #716c62`), and exactly one accent: instrument amber
(`#ffb454`). Hairlines are bone at 5–20% alpha. All tokens live in
`src/index.css` under `@theme`.

**Type.** Fraunces (optical-sized display serif) · Hanken Grotesk (text) ·
IBM Plex Mono (data, annotations, labels). Tabular numerals (`tnum`)
everywhere data appears.

**Motion.** One easing (`cubic-bezier(0.16, 1, 0.3, 1)`), masked line
reveals, spring physics for pointer interactions. Every animation honours
`prefers-reduced-motion` — including the canvas, marquee, preloader, and
custom cursor, which disable themselves entirely.

**Signature details.**

- *Boot sequence* — a 1.2s preloader, shown once per session, that gates the
  hero choreography.
- *Wave field* — an interference-pattern dot canvas behind the hero (a nod to
  17M oceanographic records). Canvas 2D, ~1.8k points, pauses offscreen and
  on hidden tabs.
- *HUD status bar* — fixed instrument footer with availability, active
  section, scroll depth, and local Hattiesburg time.
- *Precision cursor* — dot + lagging ring blended with `difference`; mounts
  only for fine pointers with motion allowed.
- *Registration ticks* — `+` marks where hairlines meet, echoed by sparse
  crosses in the wave field and the blueprint grid in the menu.
- Magnetic CTAs, count-up metrics, text-decode datelines, a hollow-type stack
  marquee, and a film-grain overlay held under 5%.

## Stack

- **React 19** + **TypeScript**
- **Vite 8**
- **Tailwind CSS v4** (design tokens via `@theme`)
- **Framer Motion** for reveals, springs, and scroll state

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
read from it.

## Structure

```
src/
  data/resume.ts        # all content
  hooks/                # useActiveSection (shared by nav + HUD)
  index.css             # design tokens, base styles, motifs
  App.tsx               # page composition
  components/
    Navigation.tsx Hero.tsx About.tsx Experience.tsx
    Skills.tsx Education.tsx AdditionalExperience.tsx
    Contact.tsx Footer.tsx
    ui/                 # Preloader, Cursor, StatusBar, WaveField,
                        # Marquee, Magnetic, Counter, Scramble,
                        # Reveal, SectionHeader, ScrollProgress, Tick
```

Accessibility: `prefers-reduced-motion` respected throughout, semantic
landmarks, a skip link, focus-visible outlines, `aria` attributes on
interactive controls, and decorative layers (canvas, marquee, HUD, grain)
hidden from assistive tech.
