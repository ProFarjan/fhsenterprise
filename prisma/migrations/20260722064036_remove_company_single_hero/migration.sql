-- Data already migrated to CompanyHeroImage (see prisma/migrations/*_company_hero_images
-- and the one-off backfill run alongside it) before this column drop.
ALTER TABLE `Company` DROP COLUMN `heroData`,
    DROP COLUMN `heroMimeType`;
