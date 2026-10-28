# Operations guide

How to deploy, monitor and back up the FHS Enterprise website. For how the code is
organised, see [`CLAUDE.md`](CLAUDE.md); for database specifics (baselining a
`db push` database), see [`prisma/README.md`](prisma/README.md).

## Requirements

- Node.js **20.9 or newer** (CI uses 22)
- MySQL 8 or MariaDB 10.5+ with `max_allowed_packet` of **at least 8 MB** — product,
  news, event, gallery and company images (up to 5 MB each) are stored in the
  database, and a smaller packet size makes saving a large image fail
- Outbound SMTP access for the contact form emails (optional: messages are stored
  in the database and shown in the admin even if email is unavailable)

## Environment variables

Copy `.env.example` to `.env`. Never commit `.env`.

| Variable | Required | Notes |
|---|---|---|
| `DATABASE_URL` | yes | `mysql://user:password@host:3306/database` |
| `NEXT_PUBLIC_ROOT_DOMAIN` | recommended | e.g. `fhsenterprise.com`. **Inlined at build time** — set it before `npm run build`. Defaults to `fhsenterprise.com` in production, `localhost:3000` in dev. |
| `TRUSTED_PROXY_HOPS` | if behind a proxy | Number of reverse proxies / load balancers in front of Node (default `1`). Used to find the real visitor address for rate limiting. `0` = Node is exposed directly. |
| `SMTP_HOST` `SMTP_PORT` `SMTP_USER` `SMTP_PASSWORD` | for email | Port 465 = SSL, 587 = STARTTLS |
| `SMTP_FROM`, `CONTACT_EMAIL_TO` | optional | Both default to `SMTP_USER` |

Admin credentials are never in the environment; `npm run db:seed` prompts for them.

## Deploy checklist

```bash
npm ci
cp .env.example .env            # first time only, then edit it
npx prisma migrate deploy       # apply database migrations (see prisma/README.md for a db-push database)
npm run db:seed                 # first time only: create the admin account (interactive)
npm run db:seed:companies       # first time only: company rows for the three subsidiaries
npm run build                   # runs `prisma generate` first
npm start                       # serves on port 3000
```

Run `npm run lint && npm run typecheck && npm run build` before deploying; the same
three checks run in CI (`.github/workflows/ci.yml`).

### Reverse proxy, DNS and HTTPS

- **Pass the original `Host` header through.** The app decides which site to serve
  from it (`auto-rice-mill.<root domain>` is a different site from the root domain).
- DNS: the root domain **and** a wildcard (`*.fhsenterprise.com`) or the specific
  subdomains must point at this app, with a matching TLS certificate (a wildcard
  certificate is simplest).
- `vehiclesolutions.*` and `dailybazar.*` are separate deployments; this app only
  redirects to them. Do not point their DNS at this app.
- Send `X-Forwarded-For` and set `TRUSTED_PROXY_HOPS` to the number of proxies.
- Serve everything over HTTPS: the app sends `Strict-Transport-Security` in production
  and the admin session cookie is `secure` in production.

### Single instance

Rate limiting (admin login, password change, contact form) is **in memory**: it
resets when the process restarts and is not shared between instances. Run one
instance, or replace `src/lib/rateLimit.ts` with a shared store (Redis, or a
database table) before scaling out.

## Health check

`GET /api/health`

| Response | Meaning |
|---|---|
| `200 {"status":"ok","database":"up"}` | The app is running and the database answers. |
| `503 {"status":"degraded","database":"down"}` | The app is running but cannot reach the database. |

Point an uptime monitor at it. The public pages keep working from built-in content
when the database is down (they log the failure), so a green homepage does **not**
prove the database is healthy — this endpoint does.

## Backups

**The database is the only copy of every image uploaded in the admin** (company
logos and banners, hero images, products, gallery photos, news and event covers),
plus the contact messages, FAQ, admin accounts and everything else. Back it up as
if it were your photo library.

```bash
# Daily dump, compressed. --hex-blob keeps the binary image columns safe in the text dump.
mysqldump --single-transaction --hex-blob --default-character-set=utf8mb4 \
  --max-allowed-packet=64M -u <user> -p <database> | gzip > fhs-$(date +%F).sql.gz
```

- **Schedule it** (cron on Linux; Task Scheduler on Windows/WAMP) and **copy the
  files off the server** — a backup on the same disk does not survive the disk.
- Keep several generations (for example 7 daily + 4 weekly + 6 monthly).
- **Test a restore** at least once, into a throwaway database — an untested backup
  is a hope, not a backup:

  ```bash
  mysql -u <user> -p -e "CREATE DATABASE restore_test CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci"
  gunzip -c fhs-2026-10-28.sql.gz | mysql -u <user> -p restore_test
  # then check row counts and open a few images, and drop restore_test
  ```

- Also take a backup immediately before running any migration on production.

## Routine maintenance

- Expired admin sessions are deleted opportunistically each time someone signs in; no
  scheduled job is needed.
- Contact messages are kept until deleted from `/admin/messages`. Delete a person's
  messages when they ask (the privacy policy says you will).
- **Publishing the Privacy Policy and Terms of Use:** `/privacy` and `/terms`
  (`src/data/legal.ts`) are a draft written from what the code does, not legal advice, so
  they are **switched off** (404, no links). Have the owner review them (retention period,
  IP logging, cookies; get the Bangla checked) and then set `legalPages: true` in
  `SHOW_UNVERIFIED_SECTIONS` in `src/data/organization.ts`.

## Large media in git

The hero videos (`public/videos`, ~18 MB) and other large binaries are committed to
git, and every re-encoded version stays in history forever. Consider moving videos to
object storage / a CDN, or Git LFS, so the repository and deploys stay small. The
parked legacy sites' media lives under `legacy/subsidiaries/public/` (see its README).
