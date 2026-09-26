const { PrismaClient } = require('./src/generated/prisma/client');
const prisma = new PrismaClient();

async function main() {
  const companies = await prisma.company.findMany();
  console.log("Companies in DB:");
  for (const c of companies) {
    console.log(c.subdomain, c.site, c.isPublished);
  }
}

main().finally(() => prisma.$disconnect());
