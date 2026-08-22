# Harmac Oy — website

Bilingual (Finnish / English) marketing site for **Harmac Oy**, an importer and
service provider of packaging machines based in Vantaa, Finland.

Built with **Next.js 16** (App Router, Turbopack), **React 19**, **Tailwind CSS v4**,
**Framer Motion**, and **Resend** for contact-form delivery.

> **Note for AI agents / contributors:** this project uses Next.js 16, which has
> breaking changes from earlier versions (e.g. middleware is renamed to `proxy.ts`).
> See `AGENTS.md` and the bundled docs in `node_modules/next/dist/docs/` before
> writing Next-specific code.

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in the values (see below)
npm run dev                  # http://localhost:3000
```

Scripts:

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Environment variables

Contact-form leads are emailed via [Resend](https://resend.com). Set these in
`.env.local` (gitignored); see `.env.example` for the template.

| Variable | Required | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | yes (prod) | Resend API key. Without it, in dev the form logs the lead to the server console instead of sending; in production the submission returns an error so leads are never silently lost. |
| `LEAD_TO_EMAIL` | yes | Where leads are delivered. Falls back to `ORG.email` if unset. |
| `LEAD_FROM_EMAIL` | no | From address. Must be on a Resend-verified domain. Leave blank to use Resend's shared test sender (only delivers to the account owner until a domain is verified). |

## Internationalization

The site is fully bilingual with **locale-prefixed routes**: every page exists at
`/fi/…` and `/en/…`. Finnish is the default.

- **Routing:** `proxy.ts` (Next 16's renamed middleware) redirects locale-less
  paths (`/`, `/pakkauskoneet`, …) to a locale, chosen by cookie → `Accept-Language`
  → Finnish.
- **Active locale** comes from the URL and is provided by `context/LanguageContext.tsx`.
  The `LanguageToggle` switches by navigating between `/fi` and `/en`.
- **Links:** use `components/LocaleLink.tsx` (a drop-in `next/link`) so internal
  hrefs are automatically locale-prefixed — write `href="/pakkauskoneet"` as usual.
- **UI strings:** live in `locales/fi.json` and `locales/en.json`, read via `t('key')`.
  Add a key to **both** files when adding copy.
- **Metadata:** each route's `layout.tsx` sets per-locale title/description and
  `hreflang` alternates; `app/sitemap.ts` lists both locales.

## Content & assets

Content is data-driven — edit these, no component changes needed:

| File | Content |
| --- | --- |
| `lib/machines.ts` | Machines (specs, descriptions, FAQs) + `machineImages` map |
| `lib/partners.ts` | Represented brands (+ `logo` paths) |
| `lib/references.ts` | Customer companies shown on the References page |
| `lib/site.ts` | Org details (`ORG`), site URL, keywords, default OG image |

Images are served locally from `/public`:

- `public/machines/` — product photos (filename = machine slug). Overwrite a file
  to swap a photo; no code change needed (see `public/machines/README.md`).
- `public/partners/` — partner logos.
- `public/video/` — hero clip (`hero.mp4`) + poster frame (`hero-poster.jpg`).
- `public/og.jpg` — default social-share image; `public/logo.png` — site logo.

## Pages

`/` (home) · `/pakkauskoneet` (products) + `/pakkauskoneet/[slug]` (detail) ·
`/yhteistyossa` (partners) · `/referenssit` (references) · `/faq` ·
`/ota-yhteytta` (contact) · `/tietosuoja` (privacy policy). All under `/fi` and `/en`.

## Deployment

Optimised for [Vercel](https://vercel.com). At deploy time:

1. Set the environment variables above in the hosting dashboard.
2. To send contact-form leads to a real address, **verify the sending domain in
   Resend** and set `LEAD_FROM_EMAIL` accordingly.
3. Because routes are now locale-prefixed, add **301 redirects** from any old
   non-prefixed URLs (e.g. `/pakkauskoneet` → `/fi/pakkauskoneet`) to preserve
   existing search rankings.

> The privacy policy (`/tietosuoja`) is a solid template — have it reviewed before
> launch to confirm it matches Harmac's actual data practices.
