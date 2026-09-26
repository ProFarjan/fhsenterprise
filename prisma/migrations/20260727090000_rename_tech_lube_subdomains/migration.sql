-- Shorten two company subdomains: agri-tech.<domain> -> tech.<domain> and
-- mr-lube.<domain> -> lube.<domain>. The `subdomain` column is what the public
-- company cards build their links from (src/lib/companies.ts companyUrl), and
-- it must match the folder under src/app/[locale]/companies/, which was renamed
-- in the same change. The SiteKey enum values (AGRI_TECH / MR_LUBE) are
-- internal and deliberately left alone.
UPDATE `Company` SET `subdomain` = 'tech' WHERE `subdomain` = 'agri-tech';
UPDATE `Company` SET `subdomain` = 'lube' WHERE `subdomain` = 'mr-lube';
