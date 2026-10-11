INSERT INTO mr_group.Company (site, subdomain, nameEn, nameBn, sectorEn, sectorBn, descriptionEn, descriptionBn, isPublished, `order`, updatedAt) 
VALUES ('DAILY_BAZAR', 'dailybazar.fhsenterprise.com', 'Daily Bazar', 'Daily Bazar', 'Ecommerce', 'Ecommerce', 'Online ecommerce shop for all kinds of bazar goods.', 'Online ecommerce shop for all kinds of bazar goods.', 1, 2, NOW()) 
ON DUPLICATE KEY UPDATE site='DAILY_BAZAR';
