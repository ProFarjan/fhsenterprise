# Database notes

## Baselining a database that was created with `prisma db push`

The live database was synced with `prisma db push`, so it has the final schema
but no (or an incomplete) `_prisma_migrations` history. Do **not** run
`migrate deploy` against it. Instead, after taking a backup, mark every
migration as already applied:

```bash
mysqldump --single-transaction -u <user> -p <database> > backup-$(date +%F).sql

for m in prisma/migrations/*/; do
  npx prisma migrate resolve --applied "$(basename "$m")"
done

npx prisma migrate status   # should report "Database schema is up to date"
```

The migration `20261028090000_reconcile_site_keys` exists so that a **fresh**
database built from the migration history ends up with the same `SiteKey` enum
as `schema.prisma`. On a `db push` database it must only be marked as applied.

## Fresh install

```bash
npm run prisma:generate
npx prisma migrate deploy
npm run db:seed              # first admin (interactive)
npm run db:seed:companies    # Company rows for the three subsidiaries
```

## Verifying the history matches the schema

Against a throw-away database (never the live one):

```bash
npx prisma migrate diff \
  --from-migrations prisma/migrations \
  --to-schema prisma/schema.prisma \
  --shadow-database-url "mysql://user:pass@localhost:3306/shadow_scratch" \
  --exit-code
```

Exit code 0 means the migrations reproduce `schema.prisma` exactly.
