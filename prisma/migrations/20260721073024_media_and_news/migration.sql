-- CreateTable
CREATE TABLE `MediaItem` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` ENUM('IMAGE', 'VIDEO') NOT NULL,
    `site` ENUM('MR_GROUP', 'AGRO', 'AGRO_MEDICINE', 'FEED', 'FILLING_STATION') NOT NULL,
    `title` VARCHAR(200) NOT NULL,
    `imageData` LONGBLOB NULL,
    `imageMimeType` VARCHAR(100) NULL,
    `youtubeUrl` VARCHAR(500) NULL,
    `createdById` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `MediaItem_site_idx`(`site`),
    INDEX `MediaItem_createdAt_idx`(`createdAt`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `NewsItem` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `site` ENUM('MR_GROUP', 'AGRO', 'AGRO_MEDICINE', 'FEED', 'FILLING_STATION') NOT NULL,
    `title` VARCHAR(200) NOT NULL,
    `excerpt` TEXT NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `coverImageData` LONGBLOB NOT NULL,
    `coverImageMimeType` VARCHAR(100) NOT NULL,
    `createdById` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `NewsItem_site_idx`(`site`),
    INDEX `NewsItem_date_idx`(`date`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `MediaItem` ADD CONSTRAINT `MediaItem_createdById_fkey` FOREIGN KEY (`createdById`) REFERENCES `Admin`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `NewsItem` ADD CONSTRAINT `NewsItem_createdById_fkey` FOREIGN KEY (`createdById`) REFERENCES `Admin`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
