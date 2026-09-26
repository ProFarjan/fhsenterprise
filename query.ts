import "dotenv/config";
import { PrismaClient } from "./src/generated/prisma/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

const prisma = new PrismaClient({
  adapter: new PrismaMariaDb(process.env.DATABASE_URL ?? ""),
});

async function main() {
  const companies = await prisma.company.findMany();
  console.log("Companies in DB:");
  for (const c of companies) {
    console.log(c.subdomain, c.site, c.isPublished);
  }
}

main().finally(() => prisma.$disconnect());
