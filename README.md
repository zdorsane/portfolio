# Dorsane Zertit — Portfolio

Personal portfolio positioned around one specialty: **frontend development (React / Next.js) + AI engineering**.

Built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4 and Framer Motion.

---

## Running locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run typecheck  # tsc --noEmit
```

## Structure

| Path | What's in it |
|---|---|
| `app/layout.tsx` | Metadata, Open Graph, JSON-LD `Person` schema, fonts, language provider |
| `app/page.tsx` | Section order |
| `lib/content.ts` | Language-neutral data: URLs, tags, dates, images |
| `lib/i18n/dictionaries.ts` | **All copy, in English and French** |
| `lib/i18n/context.tsx` | Language provider (localStorage + browser-language detection) |
| `components/*-section.tsx` | One file per section |

**To edit any text on the site, edit `lib/i18n/dictionaries.ts`.** To add a project, add an entry
to `projects` in `lib/content.ts` and a matching `title` / `description` under `projects.items` in
both the `en` and `fr` dictionaries, keyed by the same `id`.

## Internationalisation

English is the default (recruiters outside France read English first); French is offered via the
`EN / FR` toggle in the navbar. The choice is stored in `localStorage`, and first-time visitors with
a French browser locale land on French automatically.

## Things to finish

1. **Buy a domain and point it at Vercel.** Something like `dorsanezertit.com` or `dorsane.dev`.
   Then set `NEXT_PUBLIC_SITE_URL` in Vercel → Settings → Environment Variables (see `.env.example`).
   Until you do, metadata falls back to `https://dorsanezertit.com`.
2. **Check the Vercel build command.** The "Built with v0" badge was injected by a build command
   (`node .v0/inject-built-with-v0.mjs && next build`). The injector script is gone from this repo,
   but if the command is also pinned in Vercel → Settings → Build & Development Settings, reset the
   build command to `next build` (or clear the override).
3. **Add the Badis AI certificate.** Put the scan at `public/documents/attestation-badis-ai.pdf`,
   then set `ATTESTATION_URL` in `lib/content.ts` to `"/documents/attestation-badis-ai.pdf"`.
   The download button on the reference section only renders once that constant is set.
4. **Refresh the CV** at `public/CV_Zertit_Dorsane.pdf` so it matches the site's positioning
   (frontend + AI first, everything else secondary).
5. **Three projects still have no screenshot** — Sofa Fournitures, Carl Dor Broderie and the Adidas
   clone were never deployed, so they render a typographic placeholder and are not clickable. If you
   have local screenshots, drop them in `public/images/projects/<id>.png` and set `image` on those
   entries in `lib/content.ts`.

Project screenshots in `public/images/projects/` were captured from the live sites at 1280×800.
To refresh one, retake it at the same size and overwrite the file — no code change needed.

## Deploying

Vercel, connected to the Git repo. `npm run build` must pass — TypeScript errors are no longer
ignored (`next.config.mjs` used to set `ignoreBuildErrors: true`; it doesn't any more).
