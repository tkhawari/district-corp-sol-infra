# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Astro + Tailwind static marketing site for **Distinct Corporate Solutions (DCS)**, a Pakistan-based corporate training and business consulting firm. Live at https://distinctcorporatesolutions.com, served from a self-hosted Caddy container behind a Cloudflare Tunnel (see `DEPLOY.md`). Structure and deploy pipeline mirror the sister site `tkhawari/spraypave`.

## Commands

```bash
npm run dev       # Dev server at localhost:4321
npm run build     # Build to ./dist/ — run before every push
npm run preview   # Serve the production build locally
npx astro check   # Type-check .astro/.ts files (may need NODE_OPTIONS=--max-old-space-size=4096)
```

There is no test suite. Requires Node >= 22.12. Keep `package-lock.json` committed: newer Vite/rolldown combinations break the Tailwind Vite plugin (`Missing field tsconfigPaths`), so don't regenerate the lockfile casually.

## Architecture

- `src/data.ts` is the single source of content: stats, values, the two service practices, the nine training programmes (with audience, topics, a plain-language `note`), the 12 trainers, client logos, trainer-experience organisations and the photo `gallery`. Pages map over these arrays; edit copy here rather than in page markup.
- `src/consts.ts` holds site title/description, phone, email and the Web3Forms access key. Phone/email are imported everywhere (header, footer, sticky mobile CTA, contact page, JSON-LD) — never hard-code them.
- `src/pages/programmes.astro` derives "Trainers" for each programme by matching keywords against each trainer's `leads` string (`leadKeywords` map). Adding a programme or renaming a `leads` entry requires updating that map.
- `src/layouts/Layout.astro` wraps every page (Header, Footer, `StickyMobileCTA`, `ProfessionalService` JSON-LD). `components/ClosingCTA.astro` is the shared bottom call-to-action; pass `heading`/`body` to vary it.
- Contact form (`src/pages/contact.astro`) posts to Web3Forms client-side. While `WEB3FORMS_ACCESS_KEY` still starts with `REPLACE_`, submit shows the "call or email us" fallback instead of sending.
- Images live in `src/assets/images/` and go through `astro:assets` `<Image>` (converted to WebP at build). Logos/photos were extracted from `DCS_Company_Profile_2026.pdf`. New job photos go in `src/assets/images/work/` and get added to `gallery` in `data.ts`; `gallery[0]` is the home hero and `gallery[1]`/`[2]` are used on About/Services.

## Styling and copy conventions

- Tailwind v4 via `@tailwindcss/vite`. Theme tokens are in `src/styles/global.css` (`ink`, `char`, `mute`, `line`, `paper`, `sage`, `leaf` = brand green `#97c459`, `moss` = accessible dark green for text/buttons). Use `moss` for anything that must meet contrast; `leaf` only for decoration (list markers, icon discs).
- Fonts match the DCS company profile: Lora (`font-serif`, headings) and Poppins (`font-sans`, body). Do not reintroduce Inter/Fraunces (the sister site's fonts).
- The site deliberately avoids common "AI-generated site" tells: no small all-caps eyebrow labels above headings, no coloured left/top border strips on cards, no big-number stat bands or 01/02/03 numbered blocks, no gradients or glows, no centred hero, no em dashes or "we don't just X, we Y" style copy, no vague superlatives. Keep copy concrete (named clients, real numbers from the profile) and don't invent facts (hours, office address, prices) the business hasn't provided.

## Git workflow

- Branch naming: `feature/x`, `fix/x`, `content/x`; open PRs with `gh pr create`
- Imperative commit messages; run `npm run build` successfully before pushing
- Pushing to `main` triggers `.github/workflows/deploy.yml` (build → Tailscale → rsync `dist/` to `/var/www/distinctcorporatesolutions/`)
