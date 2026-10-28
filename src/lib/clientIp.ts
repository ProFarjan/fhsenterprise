import { headers } from "next/headers";

// Best-effort client address for rate limiting and audit rows.
//
// `X-Forwarded-For` is a comma-separated chain that every proxy APPENDS to, so
// the LEFT-most entry is whatever the client chose to send and is trivially
// spoofed. Only the entries added by our own proxies can be trusted: with N
// trusted proxy hops in front of the app, the client address is the Nth entry
// from the RIGHT. Set TRUSTED_PROXY_HOPS to match the deployment:
//   1 (default) - one reverse proxy / load balancer / CDN in front of Node
//   0           - Node is exposed directly; the header cannot be trusted, so
//                 no address is available from a Route Handler or Server Action
export function pickClientIp(forwardedFor: string | null, hops: number): string | null {
  if (!forwardedFor || hops < 1) return null;
  const chain = forwardedFor
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean);
  if (chain.length < hops) return null;
  return chain[chain.length - hops].slice(0, 45); // 45 = longest IPv6 text form
}

function trustedHops(): number {
  const raw = Number(process.env.TRUSTED_PROXY_HOPS ?? "1");
  return Number.isInteger(raw) && raw >= 0 ? raw : 1;
}

export async function getClientIp(): Promise<string | null> {
  const headerList = await headers();
  return pickClientIp(headerList.get("x-forwarded-for"), trustedHops());
}

// Same, for Route Handlers that already hold the Request.
export function getClientIpFromRequest(request: Request): string | null {
  return pickClientIp(request.headers.get("x-forwarded-for"), trustedHops());
}
