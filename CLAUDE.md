# CLAUDE.md

Guidance for Claude Code when working in this repository.

## This is NOT the Next.js you know

This project runs **Next.js 16.2 + React 19**. APIs, conventions and file structure differ from older versions. Before writing framework-level code (routing, caching, config, metadata, middleware), read the relevant guide in `node_modules/next/dist/docs/` and heed deprecation notices. Examples already in this repo:

- `middleware.ts` is now **`src/proxy.ts`**, which exports `proxy()`.
- Route `params` are Promises: `const { locale } = await params;`.
- `next/image` blocks query strings on local images unless allowlisted in `images.localPatterns` (`next.config.ts`).

## What this project is

Corporate site for **FHS Enterprise** (Fulbariya, Mymensingh, Bangladesh; domain `fhsenterprise.com`). It is a bilingual (Bangla default, English) parent site, plus subsidiary microsites served from subdomains, plus a custom admin panel backed by MySQL. Older UI text, env defaults and DB names still say "MR Group" (the former brand); these are leftovers, not a second product.

| `SiteKey` | Subsidiary | How it is served |
|---|---|---|
| `FHS_ENTERPRISE` | Parent company | Root domain |
| `AUTO_RICE_MILL` | M/s. Bangladesh Auto Rice Mill | Internal microsite at `auto-rice-mill.<root>` (aliases `autorice-mill`, `autorice`) |
| `VEHICLE_SOLUTIONS` | Vehicle Solutions | 307 redirect to `vehiclesolutions.fhsenterprise.com` |
| `DAILY_BAZAR` | Daily Bazar | 307 redirect to `dailybazar.fhsenterprise.com` |

## Commands

```bash
npm run dev                  # next dev (Turbopack)
npm run build / npm start    # production build / serve
npm run lint                 # eslint (core-web-vitals + typescript)
npx tsc --noEmit             # type-check (there is no script for it)

npm run prisma:generate      # REQUIRED after clone and after schema edits (client is gitignored)
npm run prisma:migrate       # prisma migrate dev (creates + applies a migration)
npx prisma migrate deploy    # production: apply pending migrations
npm run db:seed              # interactive: creates the first admin (no admin = no /admin login)
npm run db:seed:companies    # upserts Company rows from src/data/site.{en,bn}.ts
npm run update               # migrate dev + generate + seed companies
```

There is **no test suite** and no CI. Verify changes with `npx tsc --noEmit`, `npm run lint`, and by running the app. Prisma CLI config is `prisma.config.ts` at the **repo root** (it reads `DATABASE_URL` via `dotenv`).

Environment (`.env`, see `.env.example`): `DATABASE_URL` (required); `NEXT_PUBLIC_ROOT_DOMAIN`; `SMTP_HOST/PORT/USER/PASSWORD`, optional `SMTP_FROM`, `CONTACT_EMAIL_TO`. Never edit `.env` or print secrets. Admin credentials are never stored in env; the seed script prompts for them.

## Architecture

### Request flow: `src/proxy.ts`

Every request not matching the exclusions goes through `proxy()`. Matcher: `/((?!api(?:/|$)|admin(?:/|$)|_next|.*\..*).*)` (`api`/`admin` match whole path segments only).

1. Host is `vehiclesolutions.*` / `dailybazar.*` (or an alias like `vehicle-solutions.*`) -> redirect to the external URL.
2. Host is a known company subdomain (`COMPANY_SUBDOMAINS` in `src/lib/companies.ts`) and the path already has a locale -> **rewrite** to `/[locale]/companies/<internal-subdomain>/...` (URL stays clean).
3. Anything else -> `next-intl` middleware (adds the locale prefix).

Locally use `auto-rice-mill.localhost:3000`. The root domain comes from one place, `getRootDomain()` in `src/lib/companies.ts` (used by both the proxy and `companyUrl()`): `NEXT_PUBLIC_ROOT_DOMAIN`, else `localhost:3000` in dev / `fhsenterprise.com` in production. It is inlined at build time, and if it doesn't match the real host, subdomain detection silently fails. A request for `vehiclesolutions.fhsenterprise.com` / `dailybazar.fhsenterprise.com` is never redirected to itself (that would loop); it falls through to the normal locale handling.

### Three route trees (and three HTML shells)

```
src/app/
  layout.tsx                      # passthrough only (Next requires one); no <html>
  [locale]/layout.tsx             # real <html>, fonts, NextIntlClientProvider, root metadata
  [locale]/(main)/...             # parent site pages wrapped in Header + Footer
  [locale]/companies/<sub>/...    # subsidiary microsites, own chrome (outside (main))
  admin/layout.tsx                # separate <html> shell; locale-free, noindex
  admin/login/                    # outside the auth boundary
  admin/(panel)/...               # auth boundary: layout.tsx calls requireAdmin()
  api/...                         # contact form + image-serving routes
  sitemap.ts, robots.ts
```

The admin panel is excluded from the proxy matcher so it stays at `/admin` (never `/bn/admin`).

### Content: DB + static hybrid (not uniform)

Static content lives in `src/data/` (`site.en.ts`, `site.bn.ts`, `companies/*.ts`) and is read through `getSiteConfig(locale)`. Dynamic content is read in `src/lib/publicContent.ts`. **Every read is wrapped in `safely()`, so a DB outage never crashes a public page** (it is logged and the page degrades). What differs is what each function does when the table is merely EMPTY:

| Function | Empty table | DB failure |
|---|---|---|
| `getFaqs` | static `aboutPages.faqs` | same |
| `getSiteGallery` / `getParentGallery` | static `mediaPages.gallery*` | same |
| `getCompanies` | `[]` (admin unpublished all), with per-field image fallbacks (`BANNER_FALLBACK`, `COMPANY_LOGO_FALLBACK`) | static cards from `getSiteConfig(locale).companies` |
| `getParentNews`, `getSiteEvents` | `[]` | `[]` |
| `getCompanyLogo` | `null` (caller keeps the static logo) | `null` |
| `getCompanyHeroSlides`, `getSimpleDbProducts` | `[]`; defined but **not called anywhere yet** | `[]` |

Product rows are managed in the admin but no public page renders them yet. The auto-rice-mill microsite is currently static (`CompanyHomePage` + `src/data/companies/auto-rice-mill.ts`), with only its logo from the DB.

### Database (Prisma 7, MySQL/MariaDB)

- `prisma/schema.prisma`. Models: `Admin`, `Session`, `Company`, `CompanyHeroImage`, `MediaItem`, `NewsItem`, `EventItem`, `Product`, `FaqItem`, `ContactMessage`. After pulling schema changes run `npx prisma migrate deploy` (or `db push` on a `db push`-built database; see `prisma/README.md`). Enums: `AdminRole`, `SiteKey`, `MediaType`.
- Client is generated to `src/generated/prisma/` (**gitignored, never edit**). Import from `@/generated/prisma/client` and `@/generated/prisma/enums`. Use the singleton in `src/lib/prisma.ts`, which needs the `PrismaMariaDb` driver adapter (Prisma 7 can't take a URL directly).
- **Images are stored in the DB** as `Bytes @db.LongBlob` plus a `*MimeType` column, and are served by `src/app/api/<entity>/[id]/image/route.ts` (companies add `/logo`, `/banner`, plus `hero-images/[id]`). Uploads are limited to JPEG/PNG/WEBP/GIF and 5 MB (`src/lib/imageUpload.ts`, which also checks the file's magic bytes and stores the detected type); `serverActions.bodySizeLimit` is `6mb` and must stay above that. All routes share `src/lib/imageResponse.ts` (id validation → 404, `nosniff`, ETag helpers).
- Cache policy per route: media/news/event/hero images are `immutable` (a new upload gets a new id, no edit action). **Company logo/banner and Product images are edited in place**, so their URLs carry `?v=<updatedAt>` (needs the matching entry in `images.localPatterns`) and the route only sends `immutable` when `v` equals the current version, otherwise it revalidates via ETag. Adding an edit path to an "immutable" route means changing its cache header. Unpublished Product images are served only to a signed-in admin (`private, no-store`); Company `isPublished` is deliberately NOT checked on logo/banner (it only hides the card; the microsite still uses them).
- Bilingual models use `...En` / `...Bn` column pairs (`Company`, `FaqItem`). `Product`, `NewsItem`, `EventItem` are single-language and show the same text in both locales.
- `Product` has `@@unique([site, slug])`; slugs are generated from the name with a numeric suffix on collision. `benefits`/`specs` are `Json` and must be read through `src/lib/productJson.ts`.
- Adding a `SiteKey` requires updating, at minimum: `SITE_OPTIONS` (`src/lib/sites.ts`), `PRODUCT_CATEGORIES` (`src/lib/productCategories.ts`, typed as `Record<SiteKey, ...>` so it fails to compile), `COMPANY_SUBDOMAINS` and proxy logic if it is a subdomain site, and `SUBDOMAIN_TO_SITE` in `prisma/seedCompanies.ts`.

### Auth (custom, no library)

- `src/lib/password.ts`: scrypt, NFKC-normalised, constant-time compare. `src/lib/session.ts`: random 32-byte token in the `mr_admin_session` cookie, **SHA-256 of it stored as `Session.id`**, 7-day expiry, `httpOnly`, `sameSite=lax`, `secure` in production.
- `getCurrentAdmin()` is `cache()`d, does no writes (cookies can't be set during render), and never loads `passwordHash`. `requireAdmin()` redirects to `/admin/login`.
- **Rate limiting is in-memory** (`src/lib/rateLimit.ts`; per-process, resets on restart, not shared across instances): login (per IP, per email, global), password change, and `/api/contact` (plus a honeypot field). The client address comes from `src/lib/clientIp.ts`, which takes the entry `TRUSTED_PROXY_HOPS` from the RIGHT of `X-Forwarded-For` (the left-most entry is spoofable). Passwords are capped at `MAX_PASSWORD_LENGTH` before any scrypt work.
- **Every Server Action must call `requireAdmin()` itself.** The `(panel)` layout check does not protect actions, which are separately reachable POST endpoints.
- `loginAction` verifies against a dummy hash when the account doesn't exist (timing-safe) and returns one generic error message. Preserve that.
- `Admin.role` (`ADMIN`/`SUPER_ADMIN`) exists but is **not enforced**; every admin has full access.

### Admin mutations: Server Actions

Pattern in `src/app/admin/(panel)/<area>/actions.ts` (`"use server"`):
`requireAdmin()` -> read/validate `FormData` (ids via `positiveInt`, lengths via `lengthError`/`LIMITS`, all in `src/lib/actionGuards.ts`) -> Prisma write inside try/catch (`describeActionError` logs and returns a friendly `{ error }`) -> `revalidatePath(...)`. Forms use `useActionState` with a `{ error?, success? }` state type. After changing public-facing data, revalidate the public paths for **both locales** (see `revalidatePublicMediaPaths`, `revalidatePublicCompanyPaths`, `revalidateFaqPaths`). Admin list pages are client components (`*Client.tsx`) fed by a server page; dates cross that boundary as ISO strings.

`createFaqAction` hardcodes `site: FHS_ENTERPRISE`. Settings (change password) works.

**Contact messages:** `POST /api/contact` first stores the submission (`ContactMessage`), then emails it; the visitor only sees an error if BOTH fail, and `emailSent` records whether the email went out. `/admin/messages` lists them (unread filter, mark read/unread, mark all read, delete, 20 per page). The sidebar unread badge comes from `getUnreadMessageCount()` (`src/lib/messages.ts`) in the `(panel)` layout, which degrades to 0 on error so a DB problem there can't take the whole admin down; message actions call `revalidatePath("/admin", "layout")` to refresh it. The dashboard (`admin/(panel)/page.tsx`) is all live data, every query isolated by `safe()`.

### i18n

`src/i18n/routing.ts`: locales `["bn","en"]`, default `bn`, `localePrefix: "always"`, `localeDetection: false` (first-time visitors always get `/bn`). UI strings in `messages/{en,bn}.json` (keep both files' keys identical); long-form page content in `src/data/site.{en,bn}.ts` (keep both in sync, with the same shape from `src/types/content.ts`). In parent-site components use `Link`/`redirect`/`usePathname`/`useRouter` from `@/i18n/navigation`, **not** `next/link`. In pages/layouts call `setRequestLocale(locale)` and validate with `hasLocale(routing.locales, locale)` -> `notFound()`. Microsite chrome links back to the root domain with plain `<a href="//<root>/<locale>">`, because it crosses hosts.

### SEO

Use `buildPageMetadata()` from `src/lib/seo.ts` for page metadata (canonical, hreflang, OG, Twitter, geo). JSON-LD generators are in the same file. `src/app/sitemap.ts` has a **hardcoded** route list; add new public routes there. `robots.ts` disallows `/admin/` and `/api/`.

### Subsidiary microsites

Active shape: `[locale]/companies/<sub>/layout.tsx` wraps children in the shared `CompanyChrome` (header/footer) with a per-company `CompanyTheme` (Tailwind class strings); `page.tsx` renders the shared `CompanyHomePage` with a `CompanySiteContent` object from `src/data/companies/<sub>.ts`. To add a microsite: new folder under `[locale]/companies/`, a content file, a `SiteKey` + migration, an entry in `COMPANY_SUBDOMAINS`, and the seed/sitemap entries.

`src/components/company/{agro,filling,agromed,feed,agritech,mrlube,mahin,rahim}/` plus matching `src/types/*.ts` and palettes in `globals.css` are **legacy trees from the former MR Group, not routed by any page**. `agromed` imports from `agro`; nothing else references them. Don't delete them (they may be reactivated) and don't copy their patterns for new work; use `CompanyChrome`/`CompanyHomePage`.

## Conventions

- TypeScript strict; `@/*` -> `src/*`; use `@/` imports.
- Server Components by default; add `"use client"` only for interactivity (forms, modals, tabs, accordions, sliders).
- Tailwind v4 (`@import "tailwindcss"`, theme tokens in `src/app/globals.css`). Brand colours `brand-blue` `#0045a0` and `brand-green` `#097b33`. Fonts: Geist Sans/Mono, Noto Sans Bengali (applied for `bn`).
- Components PascalCase; `lib`/`data`/`types` files camelCase; Next route files as usual.
- Comments in this codebase explain *why* (constraints, framework quirks); match that density.
- Do **not** add dependencies without asking.

## Known limitations (don't "fix" unprompted)

No CAPTCHA, and rate limiting is in-memory only (see Auth); expired sessions are only cleaned opportunistically at login; no object storage (everything in MySQL); no news/event detail pages (all news links to `/media/news`); `media/actions.ts` revalidates `/companies/<sub>/gallery` paths that no longer exist; `docs/`, `documents/` (gitignored), `temp_videos/`, `crop*.py`, `generate_svg_logos.js`, `insert.sql`, `query.{js,ts}` and `__pycache__/` in the root are one-off assets/scripts, not application code.

## Do not

- Modify `.env`, expose secrets, or touch production data / run destructive DB commands.
- Edit `src/generated/prisma/`; regenerate it with `npm run prisma:generate`.
- Bypass or weaken auth checks, or skip `requireAdmin()` in a new action.
- Hand-edit an existing migration; create a new one with `npm run prisma:migrate`.
