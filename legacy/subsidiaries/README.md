# Retired subsidiary sites (parked, not deleted)

The group used to run separate microsites for **Agro, Filling Station, Agro
Medicine, Feed, Agri Technology, MR Lube, Mahin and Rahim** (the former "MR
Group"). Only Auto Rice Mill is served by this app today (Vehicle Solutions and
Daily Bazar are separate deployments), so the code for the others lives here
instead of in `src/`:

- it is **excluded from TypeScript, ESLint and Tailwind** (so it costs nothing at
  build time and adds no CSS to the live site),
- but it is **kept intact** because the project owner may reactivate a site.

Nothing under `legacy/` is imported by the application.

## Layout (mirrors the repo, so reactivating is a move)

```
legacy/subsidiaries/
  src/components/company/<name>/   the site's components      -> src/components/company/<name>/
  src/components/company/HeroSlideshow.tsx                     -> src/components/company/
  src/types/<name>.ts              its content types           -> src/types/<name>.ts
  public/images/companies/<dir>/   its photos and logos         -> public/images/companies/<dir>/
  public/videos/bd-agro-*          Agro's gallery videos        -> public/videos/
  palettes.css                     brand palettes + display fonts (paste into src/app/globals.css)
```

`<name>` is one of `agro filling agromed feed agritech mrlube mahin rahim`.

## Bringing a site back

1. Move its folders back, e.g. for `feed`:
   ```bash
   git mv legacy/subsidiaries/src/components/company/feed src/components/company/feed
   git mv legacy/subsidiaries/src/types/feed.ts            src/types/feed.ts
   git mv legacy/subsidiaries/public/images/companies/feed public/images/companies/feed
   ```
2. Paste what it needs from `palettes.css` into `src/app/globals.css` (its colour
   palette block, plus its font variable inside the `@theme inline { }` block) and
   load its display font in the site's layout.
3. **Restore the parts that were deleted earlier.** The route
   (`src/app/[locale]/companies/<name>/`) and the content file
   (`src/data/companies/<name>.ts`) no longer exist in the working tree. They are
   in git history under the tag **`legacy-subsidiaries`**:
   ```bash
   git checkout legacy-subsidiaries -- "src/app/[locale]/companies/feed" src/data/companies/feed.ts
   ```
   (Expect to adjust them: imports, `getSiteConfig`, `CompanyChrome` and the i18n
   `setRequestLocale` pattern have changed since.)
4. Wire it in like any new subsidiary: a `SiteKey` + migration, `COMPANY_SUBDOMAINS`
   (`src/lib/companies.ts`), `SITE_OPTIONS`, `PRODUCT_CATEGORIES`,
   `SUBDOMAIN_TO_SITE` in `prisma/seedCompanies.ts`, and the proxy/DNS for its
   subdomain.
5. Run `npm run typecheck`, `npm run lint` and `npm run build`.

## What was removed from the live app

| | Before | After |
|---|---|---|
| `src/app/globals.css` | 199 lines, 8 palettes + 8 fonts | 32 lines |
| `src/components/company/` | 111 legacy files (~8.9k lines) | 3 live files |
| `public/` | +48 MB of retired sites' images/videos | moved here |
| Production CSS | carried the 8 palettes' utility classes | none (verified: zero legacy palette rules in the built CSS) |
