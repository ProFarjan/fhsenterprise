/*
  Warnings:

  - You are about to drop the column `heroHeadlineBn` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `heroHeadlineEn` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `heroTaglineBn` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `heroTaglineEn` on the `Company` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Company` DROP COLUMN `heroHeadlineBn`,
    DROP COLUMN `heroHeadlineEn`,
    DROP COLUMN `heroTaglineBn`,
    DROP COLUMN `heroTaglineEn`;

-- AlterTable
ALTER TABLE `CompanyHeroImage` ADD COLUMN `headlineBn` VARCHAR(255) NULL,
    ADD COLUMN `headlineEn` VARCHAR(255) NULL,
    ADD COLUMN `taglineBn` TEXT NULL,
    ADD COLUMN `taglineEn` TEXT NULL;
