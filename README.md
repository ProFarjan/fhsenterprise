# MR Group Website

The official multi-tenant corporate website for **MR Group** and its subsidiary companies — a multi-locale (Bangla / English) site built with **Next.js 16** (App Router), **React 19**, **Tailwind CSS v4**, **next-intl**, and **Prisma 7**. It presents the group's parent site plus a dedicated subdomain site for each subsidiary, a database-backed admin panel for managing companies/products/media/news/events, and a working contact form.

> ⚠️ **Note on Next.js version**
> This project runs on **Next.js 16**, which introduces breaking changes over earlier versions you may be familiar with — including a `proxy.ts` file (formerly `middleware.ts`) and updated App Router conventions. When making changes, consult the bundled docs under `node_modules/next/dist/docs/` rather than relying on older Next.js knowledge.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Multi-Tenant Subdomain Routing](#multi-tenant-subdomain-routing)
- [Internationalization (i18n)](#internationalization-i18n)
- [Admin Panel](#admin-panel)
- [Database (Prisma)](#database-prisma)
- [Contact Form & Email](#contact-form--email)
- [Static Assets](#static-assets)
- [Building for Production](#building-for-production)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)

---

## Features

- 🌐 **Bilingual** — full Bangla (`bn`, default) and English (`en`) support via `next-intl`, with a language switcher and locale-prefixed URLs.
- 🏢 **Parent site** — companies explorer, group history, milestones, mission & vision, facilities, and FAQ.
- 🏭 **Subsidiary sites** — each subsidiary is served from its own subdomain with its own about/products/gallery/contact pages:
  - **Rabeya Agro** (`agro`)
  - **MR Chemical / Agro Medicine** (`agro-medicine`)
  - **MR Feed** (`feed`)
  - **Sattar Filling Station** (`filling-station`)
  - **MR Agri Technology** (`tech`)
  - **MR Lube** (`lube`)
  - **Mahin Enterprise — LPG** (`mahin`)
  - **Rahim Enterprise — Ammonia** (`rahim`)
- 🔐 **Admin panel** (`/admin`) — database-backed authentication (scrypt password hashing + server-side sessions) for managing companies, products, media, news, and events across every site.
- 🖼️ **Media & News** — images are stored as bytes in the database (no object storage); videos are YouTube-link-only.
- 🌱 **Sustainability** — dedicated pages for environment, education, health, and community development.
- 📰 **Media (public)** — news, events, and photo gallery, rendered from admin-managed content.
- ✉️ **Contact form** — submissions are delivered by email over SMTP (via `nodemailer`).
- 🎨 **Tailwind CSS v4** styling.
- 🗄️ **Prisma 7** (MySQL/MariaDB) backing the admin panel, media/news/events, and per-company hero content.

---

## Tech Stack

| Layer            | Technology                                    |
| ---------------- | --------------------------------------------- |
| Framework        | Next.js 16 (App Router, Turbopack)            |
| UI               | React 19                                      |
| Styling          | Tailwind CSS v4 (via `@tailwindcss/postcss`)  |
| i18n             | next-intl 4                                   |
| Email            | Nodemailer 9 (SMTP)                           |
| ORM              | Prisma 7 + `@prisma/adapter-mariadb`          |
| Auth             | Custom — scrypt password hashing + server-side sessions (no third-party auth library) |
| Language         | TypeScript 5                                  |
| Linting          | ESLint 9 (`eslint-config-next`)               |

---

## Prerequisites

- **Node.js 20 or newer** (Next.js 16 and Prisma 7 require a modern LTS release).
- **npm** (bundled with Node). The repo ships a `package-lock.json`, so `npm` is the reference package manager.
- A **MySQL / MariaDB** database — required. The admin panel, its auth, and all media/news/events/products/company content are database-backed.
- *(Optional)* **SMTP credentials** — required for the contact form to actually send email.

---

## Getting Started

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd mr-group

# 2. Install dependencies
npm install

# 3. Create your environment file
cp .env.example .env
#    then edit .env and fill in real values (see below)

# 4. Apply the database schema
npx prisma migrate dev

# 5. Create your first admin account (prompts for name/email/password)
npm run db:seed

# 6. (Optional) Seed the subsidiary Company rows
npm run db:seed:companies

# 7. Start the development server
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** in your browser. You will be redirected to the default locale, e.g. **http://localhost:3000/bn**.

Sign in to the admin panel at **[http://localhost:3000/admin/login](http://localhost:3000/admin/login)** with the account you created in step 5.

To view a subsidiary site locally, use its subdomain, e.g. **http://agro.localhost:3000/bn** (modern browsers resolve any `*.localhost` subdomain to `127.0.0.1` automatically — see [Multi-Tenant Subdomain Routing](#multi-tenant-subdomain-routing)).

The dev server uses hot-reloading — edits to files under `src/` update the browser automatically.

---

## Environment Variables

Copy `.env.example` to `.env` and populate the values. All variables are documented inline in `.env.example`.

| Variable                 | Required             | Description                                                                                   |
| ------------------------ | --------------------- | ----------------------------------------------------------------------------------------------- |
| `DATABASE_URL`           | **Yes**               | Connection string, e.g. `mysql://user:password@localhost:3306/mr_group`. Backs the admin panel, sessions, and all media/news/events/company/product content. |
| `NEXT_PUBLIC_ROOT_DOMAIN`| Optional              | Root domain used to build subsidiary subdomain links and to detect subdomain requests in `src/proxy.ts`. Defaults to `localhost:3000` in local dev. |
| `SMTP_HOST`              | For contact form      | SMTP server hostname (e.g. `smtp.gmail.com`).                                                  |
| `SMTP_PORT`              | For contact form      | SMTP port (commonly `587`).                                                                    |
| `SMTP_USER`              | For contact form      | SMTP username.                                                                                 |
| `SMTP_PASSWORD`          | For contact form      | SMTP password. For Gmail, use an [App Password](https://myaccount.google.com/apppasswords), not your account password. |
| `SMTP_FROM`              | Optional              | "From" header for outgoing mail. Defaults to `SMTP_USER`.                                      |
| `CONTACT_EMAIL_TO`       | Optional              | Where contact-form submissions are delivered. Defaults to `SMTP_USER`.                         |

> **No admin credentials go in `.env`.** The first admin account is always created interactively via `npm run db:seed`, which prompts for name/email/password (password input hidden). This keeps a live, real password out of a file that could be committed or shared. For non-interactive contexts only (CI, container builds), pass `ADMIN_NAME` / `ADMIN_EMAIL` / `ADMIN_PASSWORD` as one-shot shell variables to `npm run db:seed` — don't put them in `.env`.

---

## Available Scripts

| Command                    | What it does                                                        |
| --------------------------- | -------------------------------------------------------------------- |
| `npm run dev`               | Start the development server on `http://localhost:3000`.            |
| `npm run build`             | Create an optimized production build.                               |
| `npm run start`             | Serve the production build (run `npm run build` first).             |
| `npm run lint`              | Run ESLint across the project.                                      |
| `npm run db:seed`           | Interactively create/update the first admin account.                |
| `npm run db:seed:companies` | Seed/refresh the `Company` rows for each subsidiary.                 |

---

## Project Structure

```
mr-group/
├── messages/                 # Translation catalogs
│   ├── bn.json               # Bangla strings (default locale)
│   └── en.json               # English strings
├── prisma/
│   ├── schema.prisma          # Prisma schema (Admin, Session, Company, CompanyHeroImage,
│   │                          #   MediaItem, NewsItem, EventItem, Product)
│   ├── seed.ts                # Interactive admin-account seeding
│   └── seedCompanies.ts       # Seeds the Company row for each subsidiary
├── prisma.config.ts           # Prisma config (schema + datasource URL)
├── public/                    # Static assets served at the site root
│   ├── images/                # companies, sustainability, gallery, events
│   ├── logos/
│   └── videos/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── globals.css         # Global styles (Tailwind)
│   │   ├── admin/              # Admin panel — locale-free, outside i18n (see Admin Panel)
│   │   │   ├── login/
│   │   │   ├── actions.ts
│   │   │   └── (panel)/
│   │   │       ├── companies/  # Manage subsidiary Company rows + hero images
│   │   │       ├── media/      # Manage MediaItem (gallery images / YouTube videos)
│   │   │       ├── messages/
│   │   │       ├── products/   # Manage Product rows
│   │   │       └── settings/
│   │   ├── api/
│   │   │   ├── contact/route.ts        # Contact-form API endpoint
│   │   │   ├── companies/[id]/         # Company logo/banner image serving
│   │   │   ├── companies/hero-images/  # CompanyHeroImage image serving
│   │   │   ├── media/[id]/image/       # MediaItem image serving
│   │   │   ├── news/[id]/image/        # NewsItem cover image serving
│   │   │   ├── events/[id]/image/      # EventItem cover image serving
│   │   │   └── products/[id]/image/    # Product image serving
│   │   └── [locale]/            # Locale-scoped routes (bn | en)
│   │       ├── layout.tsx
│   │       ├── companies/       # Subsidiary subdomain sites (hidden internal path —
│   │       │                    #   see Multi-Tenant Subdomain Routing)
│   │       │   ├── agro/
│   │       │   ├── agro-medicine/
│   │       │   ├── feed/
│   │       │   ├── filling-station/
│   │       │   ├── tech/
│   │       │   ├── lube/
│   │       │   ├── mahin/
│   │       │   └── rahim/
│   │       │       # each has: about/, products/ or categories/, gallery/, contact/
│   │       │       # (filling-station instead has services/ and notice/)
│   │       └── (main)/          # Parent MR Group site route group
│   │           ├── page.tsx          # Home page
│   │           ├── companies/        # Company explorer
│   │           ├── about/            # history, milestones, mission-vision, facilities, faq
│   │           ├── sustainability/   # environment, education, health, community-development
│   │           ├── media/            # news, events, gallery
│   │           └── contact/
│   ├── components/
│   │   ├── layout/           # Header, Footer, LanguageSwitcher, PageHeader
│   │   ├── sections/         # Page sections (Hero, About, Companies, Contact, …)
│   │   └── icons/
│   ├── data/
│   │   ├── site.ts, site.en.ts, site.bn.ts   # Parent-site static content
│   │   └── companies/                        # Per-subsidiary bespoke static content
│   │       # agro.ts, agro-medicine.ts, feed.ts, filling-station.ts,
│   │       # agritech.ts, mrlube.ts, mahin.ts, rahim.ts, theme.ts
│   ├── i18n/                 # next-intl routing, request, and navigation config
│   ├── lib/
│   │   ├── companies.ts      # COMPANY_SUBDOMAINS set + subdomain URL helpers
│   │   ├── sites.ts          # SiteKey enum <-> display-name mapping (admin dropdowns)
│   │   ├── session.ts        # Server-side admin session creation/validation
│   │   ├── password.ts       # scrypt password hashing/verification
│   │   ├── imageUpload.ts    # Shared image-upload handling for admin forms
│   │   ├── productCategories.ts / productJson.ts
│   │   ├── publicContent.ts  # Reads admin-managed content for public pages
│   │   ├── youtube.ts        # YouTube URL parsing/thumbnailing
│   │   ├── mailer.ts         # Nodemailer transport
│   │   └── prisma.ts         # Prisma client singleton
│   ├── types/                # Shared TypeScript types (incl. per-company product/content types)
│   ├── generated/prisma/     # Generated Prisma client (do not edit by hand)
│   └── proxy.ts              # next-intl + subdomain-rewrite middleware (Next.js 16 "proxy")
├── next.config.ts            # Next.js + next-intl plugin config
├── postcss.config.mjs        # Tailwind/PostCSS config
└── tsconfig.json
```

---

## Multi-Tenant Subdomain Routing

Each subsidiary is served from its own subdomain (e.g. `agro.mrgroup.com`) while its pages physically live under the hidden internal path `src/app/[locale]/companies/<subdomain>/`.

- **`src/lib/companies.ts`** — `COMPANY_SUBDOMAINS` is the single source of truth for which subdomains exist; keep it in sync with the folders under `src/app/[locale]/companies/`.
- **`src/proxy.ts`** — on every request, extracts the subdomain from the `Host` header. If it matches a known company subdomain and the path already has a locale, it **rewrites** (URL stays clean, e.g. `agro.mrgroup.com/bn/about`) to the internal path `/bn/companies/agro/about`. Otherwise it falls through to next-intl's locale handling.
- In local dev, use `<subdomain>.localhost:3000` — modern browsers resolve any `*.localhost` host to `127.0.0.1` with no `/etc/hosts` changes needed.
- In production, point a wildcard DNS record (or one record per subsidiary) at the same deployment, and set `NEXT_PUBLIC_ROOT_DOMAIN` to your real root domain.
- `/admin` and `/api` are excluded from this rewrite (see the `matcher` in `src/proxy.ts`) — they are never subdomain- or locale-prefixed.

---

## Internationalization (i18n)

Localization is powered by **next-intl**.

- **Supported locales:** `bn` (Bangla) and `en` (English).
- **Default locale:** `bn`.
- **URL strategy:** locale prefix is **always** present on the parent and subsidiary sites — e.g. `/bn/about`, `/en/contact`, `agro.mrgroup.com/bn/about`.
- **Routing config:** `src/i18n/routing.ts`.
- **Request config:** `src/i18n/request.ts` (loads the matching catalog from `messages/`).
- **Middleware:** `src/proxy.ts` handles locale detection, redirects, and subdomain rewriting. (In Next.js 16 the former `middleware.ts` is named `proxy.ts`.)
- **`/admin` is deliberately outside i18n** — it is a single, locale-free path (never `/bn/admin` or `/en/admin`); see [Admin Panel](#admin-panel).

**To add or edit translations,** update the JSON files in `messages/` (`bn.json`, `en.json`). Parent-site static content that isn't UI copy lives in `src/data/` (`site.en.ts`, `site.bn.ts`); per-subsidiary bespoke content lives in `src/data/companies/`.

**To add a new locale,** add it to the `locales` array in `src/i18n/routing.ts` and create a corresponding `messages/<locale>.json`.

**To add a new subsidiary,** add its subdomain to `COMPANY_SUBDOMAINS` in `src/lib/companies.ts`, create its route folder under `src/app/[locale]/companies/<subdomain>/`, add a `SiteKey` enum value in `prisma/schema.prisma`, and add its display name to `SITE_OPTIONS` in `src/lib/sites.ts`.

---

## Admin Panel

The admin panel at **`/admin`** is database-backed and intentionally kept outside next-intl — it has no locale prefix and its own layout.

- **Authentication:** custom, not a third-party auth library.
  - Passwords are hashed with **scrypt** (`src/lib/password.ts`) — format `scrypt$N$r$p$<salt>$<hash>` — never stored in plaintext.
  - Sessions are server-side (`src/lib/session.ts`, `Session` model): the browser holds only a random opaque token in the `mr_admin_session` cookie; the database stores its **SHA-256**, so a leaked database cannot be replayed as a login. Sessions expire after 7 days and are individually revocable.
- **First account:** there is no seed data or default credentials — run `npm run db:seed` to interactively create the first admin (prompts hide the password; nothing touches `.env` or shell history).
- **Sections** (`src/app/admin/(panel)/`):
  - **Companies** — edit each subsidiary's `Company` row (name/sector/description in both locales, logo, banner, hero image slides with per-slide headline/tagline).
  - **Media** — upload gallery images (stored as bytes) or add a YouTube video (link-only; thumbnail is derived from the video ID at render time — no video file is ever stored).
  - **Products** — CRUD for `Product` rows, scoped to a `SiteKey`. Admin-side only for now — the public subsidiary sites still render their own larger, bespoke product data from `src/data/companies/*.ts`.
  - **Messages** — contact-form submissions.
  - **Settings** — account settings.
- **Content model:** every content row (`MediaItem`, `NewsItem`, `EventItem`, `Company`, `Product`) is tagged with a `SiteKey` (`MR_GROUP` plus one entry per subsidiary — see `src/lib/sites.ts`), so a single admin can manage content across the parent site and every subsidiary.
- **Images:** stored as `LongBlob` bytes directly in the database (no object storage / S3 in this project) and served through dedicated API routes under `src/app/api/*/[id]/image` etc.

---

## Database (Prisma)

The schema (`prisma/schema.prisma`) is in active use — it backs admin auth and all admin-managed content:

- `Admin`, `Session` — admin accounts and server-side sessions.
- `Company`, `CompanyHeroImage` — per-subsidiary uniform content (name/sector/description/logo/banner + hero slides). The deeper, bespoke per-subsidiary sections still come from `src/data/companies/*.ts`.
- `MediaItem` — gallery images or YouTube videos, tagged by `SiteKey`.
- `NewsItem`, `EventItem` — news articles and events, tagged by `SiteKey`.
- `Product` — admin-managed product catalog entries, tagged by `SiteKey` (not yet read by the public subsidiary sites).

```bash
# Set DATABASE_URL in .env first, then:
npx prisma migrate dev      # create & apply a migration
npx prisma generate         # regenerate the client (outputs to src/generated/prisma)
npm run db:seed             # create/update the first admin account
npm run db:seed:companies   # seed/refresh the Company row for each subsidiary
```

- **Datasource:** MySQL / MariaDB (via `@prisma/adapter-mariadb`).
- **Generated client output:** `src/generated/prisma/` — do not edit these files by hand.
- **Config:** `prisma.config.ts` reads the schema path and `DATABASE_URL` from the environment.

---

## Contact Form & Email

The contact form posts to the API route at `src/app/api/contact/route.ts`, which uses the mailer configured in `src/lib/mailer.ts` (Nodemailer over SMTP).

To test it locally, set the `SMTP_*` variables (and optionally `CONTACT_EMAIL_TO`) in `.env`, then submit the form at `/bn/contact` or `/en/contact`. Delivered mail goes to `CONTACT_EMAIL_TO` (or `SMTP_USER` if unset). Submissions also appear under **Admin → Messages**.

---

## Static Assets

Place static files under `public/`; they are served from the site root. Existing folders:

- `public/images/companies/` — company logos/photos
- `public/images/sustainability/`
- `public/images/gallery/`
- `public/images/events/`
- `public/logos/`
- `public/videos/`

Reference them with a root-relative path, e.g. `/images/companies/example.png`.

> Admin-uploaded images (company logos/banners, hero slides, media/news/events/product images) are **not** in `public/` — they're stored as bytes in the database and served through the API routes under `src/app/api/`.

---

## Building for Production

```bash
npm run build     # produce an optimized build
npm run start     # serve it (defaults to http://localhost:3000)
```

Set `PORT` to change the port, e.g. `PORT=8080 npm run start`.

Ensure production environment variables (`DATABASE_URL`, `NEXT_PUBLIC_ROOT_DOMAIN`, SMTP) are configured in your hosting environment before starting, and that the schema has been migrated against the production database (`npx prisma migrate deploy`).

---

## Deployment

This is a standard Next.js 16 application and can be deployed to any platform that supports Node.js — [Vercel](https://vercel.com/) (the first-party option), a VPS, a container, etc.

Whichever platform you choose:

1. Set the environment variables from the [Environment Variables](#environment-variables) section in the platform's config (never commit `.env`).
2. Point DNS for the root domain **and** a wildcard (or one record per subsidiary) at the same deployment — see [Multi-Tenant Subdomain Routing](#multi-tenant-subdomain-routing).
3. Run `npx prisma migrate deploy` against the production database.
4. Build with `npm run build`.
5. Start with `npm run start` (or the platform's managed equivalent).
6. Create the first admin account against the production database with `npm run db:seed` (or the non-interactive `ADMIN_NAME`/`ADMIN_EMAIL`/`ADMIN_PASSWORD` form for CI).

---

## Troubleshooting

- **Wrong workspace root / Turbopack picks the wrong directory** — `next.config.ts` pins the Turbopack root to this project. If you move the project, verify that `turbopack.root` still resolves correctly.
- **Can't sign in to `/admin`** — no account exists until `npm run db:seed` has been run at least once against the database `DATABASE_URL` points at.
- **Subsidiary subdomain 404s or shows the parent site** — check that the subdomain is in `COMPANY_SUBDOMAINS` (`src/lib/companies.ts`), that `NEXT_PUBLIC_ROOT_DOMAIN` matches the host you're testing, and that `src/proxy.ts`'s matcher isn't excluding the path.
- **Contact form doesn't send email** — confirm all `SMTP_*` variables are set in `.env` and that your provider allows SMTP. For Gmail, you must use an App Password.
- **Locale not applied / 404 on `/`** — the app always prefixes locales; navigate to `/bn` or `/en`. Locale handling lives in `src/proxy.ts` and `src/i18n/`.
- **`/admin` got a locale prefix / redirected oddly** — it must never be touched by next-intl; check the `matcher` in `src/proxy.ts` still excludes `admin`.
- **Prisma client errors** — the generated client lives in `src/generated/prisma/`. Run `npx prisma generate` after changing the schema.
- **Node version errors** — make sure you're on Node.js 20+.

---

## License

Private / proprietary. All rights reserved by MR Group unless stated otherwise.
