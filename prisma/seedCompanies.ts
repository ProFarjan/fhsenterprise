import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { SiteKey } from "../src/generated/prisma/enums";
import { siteConfigEn } from "../src/data/site.en";
import { siteConfigBn } from "../src/data/site.bn";

// One-time backfill: creates the initial Company rows (see prisma/schema.prisma)
// from the static company cards in src/data/site.en.ts / site.bn.ts, so
// /admin/companies has real starting content instead of five blank forms.
//
//   npm run db:seed:companies
//
// Safe to re-run: upserts on `subdomain`, so it only fills in text fields —
// it never touches images or `order`/`isPublished` on a row that already
// exists (those are edited from the admin panel afterwards).

const prisma = new PrismaClient({
  adapter: new PrismaMariaDb(process.env.DATABASE_URL ?? ""),
});

const SUBDOMAIN_TO_SITE: Record<string, SiteKey> = {
  "auto-rice-mill": SiteKey.AUTO_RICE_MILL,
  "vehicle-solutions": SiteKey.VEHICLE_SOLUTIONS,
  "daily-bazar.fhsenterprise.com": SiteKey.DAILY_BAZAR,
};

async function main() {
  const enCompanies = siteConfigEn.companies;
  const bnBySubdomain = new Map(siteConfigBn.companies.map((c) => [c.subdomain, c]));

  for (const [index, en] of enCompanies.entries()) {
    const site = SUBDOMAIN_TO_SITE[en.subdomain];
    if (!site) {
      console.warn(`  ! Skipping unknown subdomain "${en.subdomain}" — add it to SUBDOMAIN_TO_SITE first.`);
      continue;
    }

    const bn = bnBySubdomain.get(en.subdomain);
    if (!bn) {
      console.warn(`  ! No Bangla entry for subdomain "${en.subdomain}" — skipping.`);
      continue;
    }

    await prisma.company.upsert({
      where: { subdomain: en.subdomain },
      create: {
        site,
        subdomain: en.subdomain,
        nameEn: en.name,
        nameBn: bn.name,
        sectorEn: en.sector,
        sectorBn: bn.sector,
        descriptionEn: en.description,
        descriptionBn: bn.description,
        order: index,
      },
      update: {
        nameEn: en.name,
        nameBn: bn.name,
        sectorEn: en.sector,
        sectorBn: bn.sector,
        descriptionEn: en.description,
        descriptionBn: bn.description,
      },
    });

    console.log(`  ✓ ${en.subdomain} (${site})`);
  }

  console.log("\n✓ Companies seeded. Logo/banner/hero images and ordering can now be edited at /admin/companies.");
}

main()
  .catch((error) => {
    console.error("\n✗ Seed failed:", error instanceof Error ? error.message : error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
