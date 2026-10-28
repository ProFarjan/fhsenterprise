import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Liveness + database check for uptime monitors and deploy health checks.
//   200 {"status":"ok"}        the app is up and the database answers
//   503 {"status":"degraded"}  the app is up but the database does not answer
// Reveals nothing about the environment. Never cached.
export const dynamic = "force-dynamic";

const DATABASE_TIMEOUT_MS = 3000;

export async function GET() {
  const noStore = { "Cache-Control": "no-store" };

  try {
    // Don't make a monitor wait out the connection pool's own (much longer)
    // timeout when the database is down.
    await Promise.race([
      prisma.$queryRaw`SELECT 1`,
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("database check timed out")), DATABASE_TIMEOUT_MS),
      ),
    ]);
    return NextResponse.json({ status: "ok", database: "up" }, { headers: noStore });
  } catch (error) {
    console.error("Health check: database unavailable:", error);
    return NextResponse.json(
      { status: "degraded", database: "down" },
      { status: 503, headers: noStore },
    );
  }
}
