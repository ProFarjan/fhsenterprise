-- Product images can be replaced in place (updateProductAction), so the image
-- URL needs a version. Existing rows start with their creation time.
ALTER TABLE `Product` ADD COLUMN `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
UPDATE `Product` SET `updatedAt` = `createdAt`;
