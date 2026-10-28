-- Reconcile the `SiteKey` enum with prisma/schema.prisma.
--
-- The earlier migrations built the enum as MR_GROUP / AGRO / AGRO_MEDICINE /
-- FEED / FILLING_STATION / AGRI_TECH / MR_LUBE / MAHIN / RAHIM. The schema was
-- later reduced to FHS_ENTERPRISE / AUTO_RICE_MILL / VEHICLE_SOLUTIONS /
-- DAILY_BAZAR without a migration (the live database was synced with
-- `prisma db push`). Without this file, `prisma migrate deploy` on an empty
-- database produces a schema where every `site = 'FHS_ENTERPRISE'` insert fails.
--
-- IMPORTANT — do NOT run this against a database that was synced with
-- `db push` and already has the 4-value enum; mark it as applied instead:
--     npx prisma migrate resolve --applied 20261028090000_reconcile_site_keys
-- (and the same for every earlier migration — see prisma/README.md).
--
-- For a database that really is at the old migration state this migration:
--   1. widens the enum so old and new values coexist,
--   2. renames MR_GROUP content to FHS_ENTERPRISE,
--   3. DELETES rows that belong to the retired subsidiaries (their sites no
--      longer exist, and Company.site is unique so they cannot be merged),
--   4. narrows the enum to the final four values.
-- On an empty database (fresh install) steps 2-3 are no-ops.

-- 1. Widen --------------------------------------------------------------------
ALTER TABLE `MediaItem` MODIFY `site` ENUM('MR_GROUP', 'AGRO', 'AGRO_MEDICINE', 'FEED', 'FILLING_STATION', 'AGRI_TECH', 'MR_LUBE', 'MAHIN', 'RAHIM', 'FHS_ENTERPRISE', 'AUTO_RICE_MILL', 'VEHICLE_SOLUTIONS', 'DAILY_BAZAR') NOT NULL;
ALTER TABLE `NewsItem` MODIFY `site` ENUM('MR_GROUP', 'AGRO', 'AGRO_MEDICINE', 'FEED', 'FILLING_STATION', 'AGRI_TECH', 'MR_LUBE', 'MAHIN', 'RAHIM', 'FHS_ENTERPRISE', 'AUTO_RICE_MILL', 'VEHICLE_SOLUTIONS', 'DAILY_BAZAR') NOT NULL;
ALTER TABLE `EventItem` MODIFY `site` ENUM('MR_GROUP', 'AGRO', 'AGRO_MEDICINE', 'FEED', 'FILLING_STATION', 'AGRI_TECH', 'MR_LUBE', 'MAHIN', 'RAHIM', 'FHS_ENTERPRISE', 'AUTO_RICE_MILL', 'VEHICLE_SOLUTIONS', 'DAILY_BAZAR') NOT NULL;
ALTER TABLE `Company` MODIFY `site` ENUM('MR_GROUP', 'AGRO', 'AGRO_MEDICINE', 'FEED', 'FILLING_STATION', 'AGRI_TECH', 'MR_LUBE', 'MAHIN', 'RAHIM', 'FHS_ENTERPRISE', 'AUTO_RICE_MILL', 'VEHICLE_SOLUTIONS', 'DAILY_BAZAR') NOT NULL;
ALTER TABLE `Product` MODIFY `site` ENUM('MR_GROUP', 'AGRO', 'AGRO_MEDICINE', 'FEED', 'FILLING_STATION', 'AGRI_TECH', 'MR_LUBE', 'MAHIN', 'RAHIM', 'FHS_ENTERPRISE', 'AUTO_RICE_MILL', 'VEHICLE_SOLUTIONS', 'DAILY_BAZAR') NOT NULL;
ALTER TABLE `FaqItem` MODIFY `site` ENUM('MR_GROUP', 'AGRO', 'AGRO_MEDICINE', 'FEED', 'FILLING_STATION', 'AGRI_TECH', 'MR_LUBE', 'MAHIN', 'RAHIM', 'FHS_ENTERPRISE', 'AUTO_RICE_MILL', 'VEHICLE_SOLUTIONS', 'DAILY_BAZAR') NOT NULL DEFAULT 'FHS_ENTERPRISE';

-- 2. Rename the parent site's content -----------------------------------------
UPDATE `MediaItem` SET `site` = 'FHS_ENTERPRISE' WHERE `site` = 'MR_GROUP';
UPDATE `NewsItem` SET `site` = 'FHS_ENTERPRISE' WHERE `site` = 'MR_GROUP';
UPDATE `EventItem` SET `site` = 'FHS_ENTERPRISE' WHERE `site` = 'MR_GROUP';
UPDATE `Company` SET `site` = 'FHS_ENTERPRISE' WHERE `site` = 'MR_GROUP';
UPDATE `Product` SET `site` = 'FHS_ENTERPRISE' WHERE `site` = 'MR_GROUP';
UPDATE `FaqItem` SET `site` = 'FHS_ENTERPRISE' WHERE `site` = 'MR_GROUP';

-- 3. Remove content of retired subsidiaries (CompanyHeroImage cascades) --------
DELETE FROM `MediaItem` WHERE `site` IN ('AGRO', 'AGRO_MEDICINE', 'FEED', 'FILLING_STATION', 'AGRI_TECH', 'MR_LUBE', 'MAHIN', 'RAHIM');
DELETE FROM `NewsItem` WHERE `site` IN ('AGRO', 'AGRO_MEDICINE', 'FEED', 'FILLING_STATION', 'AGRI_TECH', 'MR_LUBE', 'MAHIN', 'RAHIM');
DELETE FROM `EventItem` WHERE `site` IN ('AGRO', 'AGRO_MEDICINE', 'FEED', 'FILLING_STATION', 'AGRI_TECH', 'MR_LUBE', 'MAHIN', 'RAHIM');
DELETE FROM `Company` WHERE `site` IN ('AGRO', 'AGRO_MEDICINE', 'FEED', 'FILLING_STATION', 'AGRI_TECH', 'MR_LUBE', 'MAHIN', 'RAHIM');
DELETE FROM `Product` WHERE `site` IN ('AGRO', 'AGRO_MEDICINE', 'FEED', 'FILLING_STATION', 'AGRI_TECH', 'MR_LUBE', 'MAHIN', 'RAHIM');
DELETE FROM `FaqItem` WHERE `site` IN ('AGRO', 'AGRO_MEDICINE', 'FEED', 'FILLING_STATION', 'AGRI_TECH', 'MR_LUBE', 'MAHIN', 'RAHIM');

-- 4. Narrow to the final enum --------------------------------------------------
ALTER TABLE `MediaItem` MODIFY `site` ENUM('FHS_ENTERPRISE', 'AUTO_RICE_MILL', 'VEHICLE_SOLUTIONS', 'DAILY_BAZAR') NOT NULL;
ALTER TABLE `NewsItem` MODIFY `site` ENUM('FHS_ENTERPRISE', 'AUTO_RICE_MILL', 'VEHICLE_SOLUTIONS', 'DAILY_BAZAR') NOT NULL;
ALTER TABLE `EventItem` MODIFY `site` ENUM('FHS_ENTERPRISE', 'AUTO_RICE_MILL', 'VEHICLE_SOLUTIONS', 'DAILY_BAZAR') NOT NULL;
ALTER TABLE `Company` MODIFY `site` ENUM('FHS_ENTERPRISE', 'AUTO_RICE_MILL', 'VEHICLE_SOLUTIONS', 'DAILY_BAZAR') NOT NULL;
ALTER TABLE `Product` MODIFY `site` ENUM('FHS_ENTERPRISE', 'AUTO_RICE_MILL', 'VEHICLE_SOLUTIONS', 'DAILY_BAZAR') NOT NULL;
ALTER TABLE `FaqItem` MODIFY `site` ENUM('FHS_ENTERPRISE', 'AUTO_RICE_MILL', 'VEHICLE_SOLUTIONS', 'DAILY_BAZAR') NOT NULL DEFAULT 'FHS_ENTERPRISE';
