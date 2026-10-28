# FHS Enterprise website

The corporate website for **FHS Enterprise** (Fulbariya, Mymensingh, Bangladesh,
[fhsenterprise.com](https://fhsenterprise.com)): a bilingual (Bangla / English) site for the
parent company, a microsite for **M/s. Bangladesh Auto Rice Mill**, forwarding to the separately
hosted **Vehicle Solutions** and **Daily Bazar** sites, and an admin panel for managing
content.

| Site | Served from |
|---|---|
| FHS Enterprise (parent) | the root domain |
| M/s. Bangladesh Auto Rice Mill | `auto-rice-mill.<root domain>` |
| Vehicle Solutions | redirects to `vehiclesolutions.fhsenterprise.com` |
| Daily Bazar | redirects to `dailybazar.fhsenterprise.com` |
| Admin panel | `/admin` (no language prefix) |

## Tech stack

Next.js 16 (App Router) · React 19 · TypeScript (strict) · Tailwind CSS v4 · next-intl ·
Prisma 7 with MySQL/MariaDB · Nodemailer. Authentication is custom (scrypt password
hashing, server-side sessions), with no third-party auth library.

> **Next.js 16 differs from earlier versions** (for example `middleware.ts` is now
> `src/proxy.ts`, and route `params` are Promises). Read the matching guide in
> `node_modules/next/dist/docs/` before changing framework-level code.

## Getting started

Requires Node.js 20.9+ and a MySQL or MariaDB database.

```bash
npm install
cp .env.example .env            # then set DATABASE_URL (and SMTP_* for the contact form emails)
npx prisma migrate deploy       # create the tables
npm run db:seed                 # create the first admin account (prompts for name/email/password)
npm run db:seed:companies       # create the three subsidiary rows
npm run dev                     # http://localhost:3000  (admin: /admin)
```

The Prisma client is generated into `src/generated/prisma/` (git-ignored); `npm run build`
and `npm run typecheck` generate it for you, otherwise run `npm run prisma:generate`.

Open the Rice Mill microsite locally at `http://auto-rice-mill.localhost:3000/bn` (browsers
resolve `*.localhost` to your machine).

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Development server |
| `npm run build` / `npm start` | Production build / serve it |
| `npm run lint` | ESLint |
| `npm run typecheck` | Generates the Prisma client and route types, then runs `tsc` |
| `npm run prisma:migrate` | Create + apply a migration (development) |
| `npm run prisma:studio` | Browse the database |
| `npm run db:seed` | Create or reset the first admin (interactive) |
| `npm run db:seed:companies` | Upsert the subsidiary rows from the static site data |

There is no automated test suite; `.github/workflows/ci.yml` runs lint, typecheck and build.

## Project structure

```
src/
  app/
    [locale]/(main)/        public pages (header + footer): home, about, companies, media, sustainability, contact, privacy, terms (the last two stay hidden until reviewed)
    [locale]/companies/     subsidiary microsites (own header/footer)
    admin/                  admin panel; (panel)/ is behind the sign-in check
    api/                    contact form, health check, and the routes that serve images stored in the database
  components/               layout/ sections/ ui/ admin/ company/ icons/ navigation/
  data/                     static content (site.en.ts, site.bn.ts), organization.ts (contact details), legal.ts
  lib/                      server utilities: prisma, session, password, rateLimit, publicContent, seo, mailer ...
  i18n/                     next-intl routing and locale-aware navigation
  proxy.ts                  host-based routing (subdomains) + locale redirects
prisma/                     schema, migrations, seed scripts, README (database notes)
messages/                   UI strings, en.json and bn.json (keep keys identical)
legacy/subsidiaries/        retired subsidiary sites, parked (see its README)
scripts/archive/            one-off helper scripts, kept for reference
```

## How it fits together

- **Content comes from two places.** Long-form page content is static (`src/data/`); news,
  events, gallery, FAQ, company cards and products come from the database through
  `src/lib/publicContent.ts`, which falls back to static content if the database is empty or
  unreachable, so public pages keep rendering.
- **Images live in the database** (MySQL `LongBlob`) and are served by `src/app/api/**/image` routes.
  This makes **database backups important** — see [OPERATIONS.md](OPERATIONS.md#backups).
- **Languages:** Bangla (`/bn`, the default) and English (`/en`). Visitors always land on
  `/bn` and switch manually.
- **Admin panel** (`/admin`): companies, products, media & news & events, FAQ, contact
  messages and settings. Every Server Action re-checks the session; sign-in, password
  change and the contact form are rate-limited (in memory).
- **Contact form:** messages are stored in the database (shown in `/admin/messages`) and
  emailed; the visitor only sees an error if both fail.
- **Contact details** (phone, address, ...) are set in one file, `src/data/organization.ts`.
  A `null` value hides that detail everywhere instead of showing a placeholder.

## More documentation

- [`CLAUDE.md`](CLAUDE.md) — architecture and conventions (the maintained technical reference)
- [`OPERATIONS.md`](OPERATIONS.md) — deploying, environment, monitoring and backups
- [`prisma/README.md`](prisma/README.md) — database setup and baselining
- [`legacy/subsidiaries/README.md`](legacy/subsidiaries/README.md) — the parked subsidiary sites

## License

Private / proprietary.
