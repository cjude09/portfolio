# Cris Jude A. Gramatica — Portfolio

A production-oriented portfolio built with Next.js App Router, TypeScript, Tailwind CSS, Motion, and Lucide icons.

## Run locally

```bash
pnpm install
pnpm dev
```

Production checks:

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## Content and configuration

- Personal details and configurable social links: `src/data/profile.ts`
- Project case studies: `src/data/projects.ts`
- Employment timeline: `src/data/experience.ts`
- Navigation: `src/data/navigation.ts`
- Theme and visual tokens: `src/app/globals.css`

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` before deployment. Verified GitHub and LinkedIn links can be supplied through the documented environment variables. An availability message is only shown when `NEXT_PUBLIC_AVAILABILITY_STATUS` is configured.

## Résumé

Résumé links open the configured external résumé document (`NEXT_PUBLIC_RESUME_URL`). Set that environment variable if the document URL changes; do not add a placeholder download.

## Design

- Home (`/`) is an interactive system map: `src/components/neural-portfolio.tsx` (client shell) renders panel content from `src/components/neural-panels.tsx` (server). Keys 1–5 open nodes and Escape closes the panel.
- Editorial pages share one token palette in `src/app/globals.css`: cyan marks live or interactive things, violet marks metadata. Section labels reuse the map's node codes (N-01 to N-05).
- Case-study heroes are drawn from each project's `technologies` list (`src/components/stack-plate.tsx`). The SVGs in `public/images/projects/` are no longer shown; replace them with real screenshots if you add a gallery.

## Deployment

The project is ready for Vercel. Configure the production domain as `NEXT_PUBLIC_SITE_URL` so canonical URLs, the sitemap, and social metadata resolve correctly.

## Agent skills

Claude Code skills for design and frontend work live in `.claude/skills/` and are pinned in `skills-lock.json`:

- `portfolio-design`: this site's design system, quality bar, and the workflow that ties the skills below together. Start here for any UI work.
- `frontend-design` (anthropics/skills): distinctive aesthetic direction and typography.
- `web-design-guidelines` (vercel-labs/agent-skills): UI, UX, and accessibility audit.
- `vercel-react-best-practices`, `vercel-composition-patterns`, `vercel-react-view-transitions` (vercel-labs/agent-skills): performance, component APIs, and route transitions.
- `webapp-testing` (anthropics/skills): Playwright screenshots and interaction checks.
- `find-skills` (vercel-labs/skills): discover and install more skills.

Restore or update them with `npx skills experimental_install` or `npx skills update -p`.
