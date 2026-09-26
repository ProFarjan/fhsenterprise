-- CreateTable
CREATE TABLE `FaqItem` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `site` ENUM('MR_GROUP', 'AGRO', 'AGRO_MEDICINE', 'FEED', 'FILLING_STATION', 'AGRI_TECH', 'MR_LUBE', 'MAHIN', 'RAHIM') NOT NULL DEFAULT 'MR_GROUP',
    `questionEn` VARCHAR(500) NOT NULL,
    `questionBn` VARCHAR(500) NOT NULL,
    `answerEn` TEXT NOT NULL,
    `answerBn` TEXT NOT NULL,
    `order` INTEGER NOT NULL DEFAULT 0,
    `isPublished` BOOLEAN NOT NULL DEFAULT true,
    `createdById` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `FaqItem_site_order_idx`(`site`, `order`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `FaqItem` ADD CONSTRAINT `FaqItem_createdById_fkey` FOREIGN KEY (`createdById`) REFERENCES `Admin`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
