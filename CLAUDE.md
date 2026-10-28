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
npm run typecheck            # prisma generate + next typegen + tsc (CI runs this)

npm run prisma:generate      # REQUIRED after clone and after schema edits (client is gitignored)
npm run prisma:migrate       # prisma migrate dev (creates + applies a migration)
npx prisma migrate deploy    # production: apply pending migrations
npm run db:seed              # interactive: creates the first admin (no admin = no /admin login)
npm run db:seed:companies    # upserts Company rows from src/data/site.{en,bn}.ts
npm run update               # migrate dev + generate + seed companies
```

There is **no test suite** and no CI. Verify changes with `npx tsc --noEmit`, `npm run lint`, and by running the app. Prisma CLI config is `prisma.config.ts` at the **repo root** (it reads `DATABASE_URL` via `dotenv`).

Environment (`.env`, see `.env.example`): `DATABASE_URL` (required); `NEXT_PUBLIC_ROOT_DOMAIN`; `SMTP_HOST/PORT/USER/PASSWORD`, optional `SMTP_FROM`, `CONTACT_EMAIL_TO`. Never edit `.env` or print secrets. Admin credentials are never stored in env; the seed script prompts for them.

## Repository map (beyond `src/`)

| Path | What it is |
|---|---|
| `OPERATIONS.md` | Deploy checklist, env vars, reverse-proxy/DNS notes, health check, **database backups** |
| `prisma/README.md` | Baselining a `db push` database, fresh install, checking migrations against the schema |
| `legacy/subsidiaries/` | Parked retired subsidiary sites (see below) |
| `scripts/archive/` | One-off helper scripts, not part of the app |
| `.github/workflows/ci.yml` | CI: lint, typecheck, build |
| `GET /api/health` | 200 when the app and database are up, 503 if the database is down |

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

**Static rendering:** every `(main)` page and layout sets the request locale itself (`setRequestLocale(locale)`, because Next renders layouts and pages in parallel), which is what makes them prerender (`●` in the `next build` route table) instead of rendering per request. Sync pages that use next-intl hooks are split into an inner `XContent` component plus a small async wrapper that does this. New `(main)` pages must do the same or they silently become dynamic. Pages that read the DB also export `revalidate = 300` (admin edits still show immediately via `revalidatePath`; the window lets a build made while the DB was down heal itself). Hardcoded user-facing strings belong in `messages/*.json`, not inline `locale === "bn" ?` ternaries (some old ones remain).

**404s** return a correct 404 status per locale (`(main)/not-found.tsx` plus a `[...rest]` catch-all), but because `app/layout.tsx` renders no `<html>` Next serves them as its client-hydrated error shell; check them in a browser after changing anything near the root layouts.

### SEO

Use `buildPageMetadata()` from `src/lib/seo.ts` for page metadata (canonical, hreflang with `x-default` = the default locale `/bn`, OG with the 1200x630 card `/images/og-default.png`, Twitter, geo); pass `siteUrl` for a subsidiary served from its own subdomain (the microsite canonical is the subdomain, via `subsidiaryUrl()`). The single JSON-LD Organization generator is `getOrganizationJsonLd()`; it only emits properties we actually have. Serialize every JSON-LD block with `jsonLdString()` (`src/lib/jsonLd.ts`), never bare `JSON.stringify`. `sitemap.ts` lists each public route per locale with hreflang alternates and deliberately no `lastModified`/`changeFrequency` (nothing real to report) and no microsite URLs (different host); sustainability pillar URLs are derived from the pillars that have content. `robots.ts` blocks only `/admin/` and `/api/contact` (the other `/api/` routes serve public images).

### Organization facts and unverified content

`src/data/organization.ts` is the one place for contact details, address parts, founder, and the `SHOW_UNVERIFIED_SECTIONS` flags (`stats`, `testimonials`, and `legalPages`: the draft Privacy/Terms pages in `src/data/legal.ts`, which are 404 and unlinked until the owner reviews them). A `null` value means "not provided": every consumer (footer, contact page, JSON-LD, microsites) hides that detail instead of showing a placeholder. **The phone number is currently `null`** and the homepage Stats and Testimonials sections are switched off because their content is not verified; set the real values / flip the flags there. Social links with an `href` of `"#"` are filtered out in `getSiteConfig()`; real ones render through `SocialLink` (new tab, `noopener`).

### Accessibility building blocks

`src/lib/useDialog.ts` is the shared modal behaviour (focus in/out, Tab trap, Escape, scroll lock); the admin `Modal` and the public `VideoModal` (`src/components/ui/`) both use it. Clickable cards are a real `<button>` stretched over the card, not a `div onClick`. The header has a skip link to `#main` and `(main)/layout.tsx` owns the single `<main id="main">`, so pages must not render their own `<main>`. The hero (`Hero.tsx`) loads only the active slide's video, none under `prefers-reduced-motion`/Data Saver, and has a pause control. Small orange text uses `orange-700` (orange-600 fails 4.5:1 on white).

### Subsidiary microsites

Active shape: `[locale]/companies/<sub>/layout.tsx` wraps children in the shared `CompanyChrome` (header/footer) with a per-company `CompanyTheme` (Tailwind class strings); `page.tsx` renders the shared `CompanyHomePage` with a `CompanySiteContent` object from `src/data/companies/<sub>.ts`. To add a microsite: new folder under `[locale]/companies/`, a content file, a `SiteKey` + migration, an entry in `COMPANY_SUBDOMAINS`, and the seed/sitemap entries.

**Retired subsidiary sites are parked in `legacy/subsidiaries/`**, mirroring `src/` and `public/` (components, types, CSS palettes + fonts in `palettes.css`, and ~52 MB of their images/videos). They are excluded from TypeScript, ESLint and Tailwind (`@source not` in `globals.css`) and nothing imports them; their routes and data files were deleted earlier and are recoverable from the git tag `legacy-subsidiaries`. Don't delete them (they may be reactivated) and don't copy their patterns for new work; use `CompanyChrome`/`CompanyHomePage`. To reactivate one, follow `legacy/subsidiaries/README.md`.

The company lists live in one place each: `INTERNAL_COMPANY_SLUGS`, the alias map and `resolveCompanySlug()` in `src/lib/companies.ts` (microsites this app serves), and `EXTERNAL_COMPANIES` in `src/lib/externalCompanies.ts` (separately hosted ones: feeds both the proxy's host redirects and `next.config.ts`'s path redirects). `BANNER_FALLBACK`/`COMPANY_LOGO_FALLBACK` in `publicContent.ts` hold one entry per existing subsidiary, keyed by the `Company.subdomain` value (the full hostname for external ones).

## Conventions

- TypeScript strict; `@/*` -> `src/*`; use `@/` imports.
- Server Components by default; add `"use client"` only for interactivity (forms, modals, tabs, accordions, sliders).
- Tailwind v4 (`@import "tailwindcss"`, theme tokens in `src/app/globals.css`). Brand colours `brand-blue` `#0045a0` and `brand-green` `#097b33`. Fonts: Geist Sans/Mono, Noto Sans Bengali (applied for `bn`).
- Components PascalCase; `lib`/`data`/`types` files camelCase; Next route files as usual.
- Comments in this codebase explain *why* (constraints, framework quirks); match that density.
- Do **not** add dependencies without asking.

## Known limitations (don't "fix" unprompted)

No CAPTCHA, and rate limiting is in-memory only (see Auth); expired sessions are only cleaned opportunistically at login; no object storage (everything in MySQL, so backups matter: `OPERATIONS.md`); no news/event detail pages (all news links to `/media/news`); the admin lists (products, media, companies) are not paginated (only messages are); the hero videos in `public/videos` are large and committed to git; `Company.subdomain` holds a full hostname for externally hosted companies (a nullable `externalUrl` column would be cleaner); `getCompanyHeroSlides`/`getSimpleDbProducts` are not used by any page yet; the privacy policy and terms (`src/data/legal.ts`) are a draft that needs the owner's review; `docs/` and `documents/` (git-ignored) hold source photos/videos, not documentation.

## Do not

- Modify `.env`, expose secrets, or touch production data / run destructive DB commands.
- Edit `src/generated/prisma/`; regenerate it with `npm run prisma:generate`.
- Bypass or weaken auth checks, or skip `requireAdmin()` in a new action.
- Hand-edit an existing migration; create a new one with `npm run prisma:migrate`.
- Add a page under `(main)` without `setRequestLocale` (it silently stops being prerendered) or its own `<main>` (the layout provides it).
- Put contact details, social links or marketing claims directly in components; they belong in `src/data/organization.ts` (`null` = hidden).
