import { NextResponse } from "next/server";
import { getClientIpFromRequest } from "@/lib/clientIp";
import { sendContactEmail } from "@/lib/mailer";
import { prisma } from "@/lib/prisma";
import { createRateLimiter } from "@/lib/rateLimit";

// No single address, spaces, commas/semicolons (a second recipient smuggled
// into Reply-To) or angle brackets ("Name <addr>" forms).
const EMAIL_PATTERN = /^[^\s@,;<>()"'\\]+@[^\s@,;<>()"'\\]+\.[^\s@,;<>()"'\\]+$/;

const MAX_BODY_BYTES = 20_000;
const MAX_LENGTH = { name: 100, email: 254, phone: 30, subject: 200, message: 5_000 } as const;

// Unauthenticated endpoint that sends real email, so it is throttled per client
// address and, as a backstop (the address is unknown without a trusted proxy
// header), overall. In-memory — see src/lib/rateLimit.ts.
const contactByIp = createRateLimiter({ name: "contact-ip", limit: 5, windowMs: 10 * 60 * 1000 });
const contactGlobal = createRateLimiter({ name: "contact-global", limit: 60, windowMs: 60 * 60 * 1000 });

function tooMany(retryAfterSeconds: number) {
  return NextResponse.json(
    { error: "Too many messages. Please try again later." },
    { status: 429, headers: { "Retry-After": String(retryAfterSeconds) } },
  );
}

export async function POST(request: Request) {
  // Every request counts — including invalid ones — so the limit also covers
  // scripts probing the validation.
  const ip = getClientIpFromRequest(request);
  const limited = [contactGlobal.hit("*"), ...(ip ? [contactByIp.hit(ip)] : [])].find((r) => r.limited);
  if (limited) return tooMany(limited.retryAfterSeconds);

  const declaredLength = Number(request.headers.get("content-length") ?? 0);
  if (declaredLength > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "Request body too large." }, { status: 413 });
  }

  let body: unknown;
  try {
    const raw = await request.text();
    if (raw.length > MAX_BODY_BYTES) {
      return NextResponse.json({ error: "Request body too large." }, { status: 413 });
    }
    body = JSON.parse(raw);
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, phone, subject, message, website } = (body ?? {}) as Record<string, unknown>;

  // Honeypot: the form renders a hidden "website" field no human fills in.
  // Pretend success so the bot learns nothing, and send nothing.
  if (typeof website === "string" && website.trim()) {
    return NextResponse.json({ success: true });
  }

  if (
    typeof name !== "string" ||
    !name.trim() ||
    typeof email !== "string" ||
    !email.trim() ||
    typeof subject !== "string" ||
    !subject.trim() ||
    typeof message !== "string" ||
    !message.trim()
  ) {
    return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
  }

  const cleanPhone = typeof phone === "string" && phone.trim() ? phone.trim() : undefined;

  if (
    name.trim().length > MAX_LENGTH.name ||
    email.trim().length > MAX_LENGTH.email ||
    (cleanPhone?.length ?? 0) > MAX_LENGTH.phone ||
    subject.trim().length > MAX_LENGTH.subject ||
    message.trim().length > MAX_LENGTH.message
  ) {
    return NextResponse.json({ error: "One of the fields is too long." }, { status: 400 });
  }

  // These end up in mail headers (From name, Subject, Reply-To): no line breaks.
  if ([name, email, subject, cleanPhone ?? ""].some((value) => /[\r\n]/.test(value))) {
    return NextResponse.json({ error: "Invalid characters in the form." }, { status: 400 });
  }

  if (!EMAIL_PATTERN.test(email.trim())) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  const payload = {
    name: name.trim(),
    email: email.trim(),
    phone: cleanPhone,
    subject: subject.trim(),
    message: message.trim(),
  };

  // Two independent channels, so one failing never loses the lead:
  //  1. store it (read in /admin/messages), 2. email it.
  // The submitter only sees an error if BOTH fail.
  let storedId: number | null = null;
  try {
    const row = await prisma.contactMessage.create({
      data: {
        ...payload,
        ipAddress: ip,
        userAgent: request.headers.get("user-agent")?.slice(0, 255) ?? null,
      },
      select: { id: true },
    });
    storedId = row.id;
  } catch (error) {
    console.error("Failed to store contact message:", error);
  }

  let emailed = false;
  try {
    await sendContactEmail(payload);
    emailed = true;
  } catch (error) {
    console.error("Failed to send contact email:", error);
  }

  if (storedId !== null && emailed) {
    // Best-effort bookkeeping: shown in the admin so a failed notification is visible.
    prisma.contactMessage
      .update({ where: { id: storedId }, data: { emailSent: true } })
      .catch((error) => console.error("Failed to flag contact message as emailed:", error));
  }

  if (storedId === null && !emailed) {
    return NextResponse.json(
      { error: "We couldn't send your message right now. Please try again later." },
      { status: 500 },
    );
  }
  return NextResponse.json({ success: true });
}
