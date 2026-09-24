---
name: portfolio-design
description: Design direction and quality bar for this portfolio (Next.js App Router, Tailwind v4, Motion, Geist). Use whenever creating, restyling, or reviewing any page or component in this repo — the neural home, editorial pages, project case studies, résumé — or when asked to make the site look better, more polished, more distinctive, or "brilliant". Chains frontend-design, vercel-react-best-practices, vercel-react-view-transitions, web-design-guidelines, and webapp-testing into one workflow.
---

# Portfolio Design

This site is Cris Jude Gramatica's portfolio: a full-stack engineer who works across interfaces, services, data, cloud, and applied AI. The design has one job: make a hiring manager or client believe, within ten seconds, that this person builds careful, production-grade systems. Every visual choice should support that.

## The two visual languages

The site speaks in two voices. Keep them distinct and don't blend them by accident.

**1. Neural HUD** — the home page (`src/components/neural-portfolio.tsx`, `.neural-*` rules in `src/app/globals.css`)
- Always dark. Scoped tokens: `--neural-bg #04070c`, `--neural-panel`, `--neural-text`, `--neural-muted`, `--neural-line`, `--neural-cyan #6ee7f7`, `--neural-violet #a78bfa`.
- Metaphor: a system map. The core node is the person, and the five satellites (Identity, Systems, Work, Timeline, Connect) are its subsystems. New elements should read as part of that instrument: telemetry labels, signal lines, node codes (`N-01`…), measured grids.
- Cyan marks live or interactive state; violet marks metadata. Don't add a third hue.
- Glow is light that comes from something. Use `text-shadow` or `box-shadow` only on elements that are active or "powered".

**2. Editorial** — every other page (about, projects, case studies, experience, contact, résumé)
- Light and dark themes via `next-themes`, driven by the `:root` / `.dark` tokens: `--bg`, `--surface`, `--elevated`, `--text`, `--muted`, `--border`, `--accent`, `--accent-soft`.
- Typography does the work here. Geist Sans for prose, Geist Mono for small uppercase metadata, and a serif `<em>` accent inside headlines for one expressive word.
- Hairline borders, generous whitespace, and numbered lists (`01`, `02`…) instead of cards with drop shadows.

## Non-negotiables

- **Use tokens, not literals.** Put new colors into the token sets above, never as raw hex in components. If a new token is needed, define it for light, dark, and (if relevant) neural.
- **Readable type.** The existing HUD uses 7–9px mono labels. Treat 11px as the floor for anything a visitor must read (including the metadata that identifies nodes, dates, and tech stacks). Text below that is decoration and must be `aria-hidden` or duplicated in an accessible name.
- **Contrast.** Body text ≥ 4.5:1 and large or UI text ≥ 3:1 against its actual background, in both themes. `--muted` on `--bg` is the usual offender, so check it.
- **Motion has a purpose.** Use Motion (`motion/react`) with the house easing `[0.22, 1, 0.36, 1]`. Every animation respects `useReducedMotion()` or the `prefers-reduced-motion` block in `globals.css`. Animate `transform` and `opacity` only.
- **Real content only.** Don't invent metrics, clients, testimonials, or links. Content lives in `src/data/*.ts`, so edit it there, not in JSX.
- **Mobile is a first-class layout.** The HUD must remain navigable at 360px wide with touch targets of at least 44px. Breakpoints in use: 900/820px and 600px.
- **Server by default.** Add `"use client"` only to the leaf that needs interactivity, and keep data imports on the server side.

## Workflow

Follow these steps in order when the task is "improve", "redesign", or "build a new section":

1. **Direction:** load the `frontend-design` skill. Ground the concept in the subject: a systems engineer's instrument panel for the HUD, a precise technical journal for the editorial pages. Write down the one idea the change expresses before writing code.
2. **Build:** follow `vercel-react-best-practices` (bundle size, server components, no waterfall fetches) and `vercel-composition-patterns` for component APIs. Use `vercel-react-view-transitions` for route-level transitions, such as project card → case study shared-element morphs or HUD node → detail page.
3. **Audit:** run the `web-design-guidelines` skill against the changed files and fix every violation it reports.
4. **Verify visually:** use `webapp-testing` to start `pnpm dev`, then capture screenshots at 1440px and 390px in light and dark themes (the HUD in dark only). Also capture the hover and active-node states. Look at the screenshots and critique them as the client would before calling the work done.
5. **Gate:** `pnpm lint && pnpm typecheck && pnpm build` must pass.

## Quality bar: what "brilliant" means here

- One unforgettable moment per page (on the home page, it's the HUD node expansion). Everything else stays quiet so that moment lands.
- Every pixel is aligned to a grid you could explain. Mono metadata sits on a baseline and hairlines meet cleanly.
- Hierarchy is clear from typography alone: squint at a screenshot and the reading order should still be obvious.
- It feels fast, with no layout shift, no flash of the wrong theme, and hover feedback under 100ms.
- It still works as a document when printed, read by a screen reader, or viewed with animations off.

## Finding more skills

When a task needs expertise not covered here (3D/WebGL, OG image generation, SEO, etc.), use the `find-skills` skill to search the ecosystem (`npx skills find <query>`), vet the source, then install into this project with `npx skills add <owner/repo> --skill <name> -a claude-code --copy -y` so it gets committed alongside `skills-lock.json`.
