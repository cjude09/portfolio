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

## Project artwork

Abstract, original SVG covers live in `public/images/projects/`. Replace any cover with a genuine project screenshot or approved artwork, preserve the filename or update `coverImage`, and supply accurate alt text in the rendering component when changing its role.

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
