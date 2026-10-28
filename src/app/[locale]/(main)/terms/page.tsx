import { setRequestLocale } from "next-intl/server";
import LegalPage, { buildLegalMetadata } from "@/components/sections/LegalPage";

type Props = { params: Promise<{ locale: string }> };

export function generateMetadata({ params }: Props) {
  return buildLegalMetadata(params, "terms");
}

export default async function TermsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <LegalPage kind="terms" locale={locale} />;
}
