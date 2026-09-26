import { getLocale } from "next-intl/server";
import { getFaqs } from "@/lib/publicContent";
import FaqAccordion from "@/components/sections/about/FaqAccordion";
import type { AppLocale } from "@/i18n/routing";

// Reads the admin-managed FAQ list (FaqItem table) on the server and hands it
// to the client accordion for the open/closed UI. getFaqs falls back to the
// static site config when no admin rows exist yet, so the page is never empty.
export default async function FaqPage() {
  const locale = (await getLocale()) as AppLocale;
  const faqs = await getFaqs(locale);

  return <FaqAccordion faqs={faqs} />;
}
