-- CreateTable
CREATE TABLE `EventItem` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `site` ENUM('MR_GROUP', 'AGRO', 'AGRO_MEDICINE', 'FEED', 'FILLING_STATION') NOT NULL,
    `title` VARCHAR(200) NOT NULL,
    `location` VARCHAR(200) NOT NULL,
    `description` TEXT NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `coverImageData` LONGBLOB NOT NULL,
    `coverImageMimeType` VARCHAR(100) NOT NULL,
    `createdById` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `EventItem_site_idx`(`site`),
    INDEX `EventItem_date_idx`(`date`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `EventItem` ADD CONSTRAINT `EventItem_createdById_fkey` FOREIGN KEY (`createdById`) REFERENCES `Admin`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
