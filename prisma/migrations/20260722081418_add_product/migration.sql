-- CreateTable
CREATE TABLE `Product` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `site` ENUM('MR_GROUP', 'AGRO', 'AGRO_MEDICINE', 'FEED', 'FILLING_STATION', 'AGRI_TECH') NOT NULL,
    `slug` VARCHAR(220) NOT NULL,
    `category` VARCHAR(120) NOT NULL,
    `name` VARCHAR(200) NOT NULL,
    `tagline` VARCHAR(300) NOT NULL,
    `description` TEXT NOT NULL,
    `benefits` JSON NULL,
    `specs` JSON NULL,
    `imageData` LONGBLOB NOT NULL,
    `imageMimeType` VARCHAR(100) NOT NULL,
    `isPublished` BOOLEAN NOT NULL DEFAULT true,
    `createdById` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `Product_site_idx`(`site`),
    INDEX `Product_createdAt_idx`(`createdAt`),
    UNIQUE INDEX `Product_site_slug_key`(`site`, `slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_createdById_fkey` FOREIGN KEY (`createdById`) REFERENCES `Admin`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
