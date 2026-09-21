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

`/resume` is a complete, printable HTML résumé and is the default résumé destination. Browser print can save it as PDF. To add a verified PDF later, place it in `public/resume/` and update résumé links to that file; do not add a placeholder download.

## Project artwork

Abstract, original SVG covers live in `public/images/projects/`. Replace any cover with a genuine project screenshot or approved artwork, preserve the filename or update `coverImage`, and supply accurate alt text in the rendering component when changing its role.

## Deployment

The project is ready for Vercel. Configure the production domain as `NEXT_PUBLIC_SITE_URL` so canonical URLs, the sitemap, and social metadata resolve correctly.
