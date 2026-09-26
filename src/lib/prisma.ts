// Prisma client singleton — scaffolded for the future admin panel / dynamic
// content phase. Not used by the landing page yet (see src/data/site.ts for
// the current static content source).
//
// Prisma 7 requires a driver adapter for the client to connect (connection
// strings can no longer be passed directly to `new PrismaClient()`). We use
// @prisma/adapter-mariadb, which speaks the MySQL wire protocol and works
// against any standard MySQL server.
//
// The singleton pattern below avoids exhausting DB connections in dev mode,
// where Next.js hot-reloads modules and would otherwise create a new
// PrismaClient on every reload.
import { PrismaClient } from "@/generated/prisma/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function createPrismaClient() {
  // Reads from DATABASE_URL in .env, e.g.
  // mysql://user:password@localhost:3306/mydb
  const adapter = new PrismaMariaDb(process.env.DATABASE_URL ?? "");
  return new PrismaClient({ adapter });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
