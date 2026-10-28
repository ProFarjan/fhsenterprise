import { notFound } from "next/navigation";

// Catch-all for unknown URLs under /[locale]. Throwing notFound() here (instead
// of letting the router fall through to the root not-found) renders
// (main)/not-found.tsx — translated, and wrapped in the site Header/Footer.
export default function CatchAllNotFound() {
  notFound();
}
