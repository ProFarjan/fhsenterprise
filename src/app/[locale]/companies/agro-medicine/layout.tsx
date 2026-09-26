import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Poppins } from "next/font/google";
import { hasLocale } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import AgroMedNavbar from "@/components/company/agromed/AgroMedNavbar";
import AgroMedFooter from "@/components/company/agromed/AgroMedFooter";
import { agroMedicineContent } from "@/data/companies/agro-medicine";
import { getRootDomain } from "@/lib/companies";
import { getCompanyLogo } from "@/lib/publicContent";
import { SiteKey } from "@/generated/prisma/enums";
import { routing, type AppLocale } from "@/i18n/routing";

// Friendly, rounded geometric sans for MR Agro Medicine's headings (via
// `font-vet`, wired to --font-poppins in globals.css). Scoped to this subtree.
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const content = agroMedicineContent[locale as AppLocale] ?? agroMedicineContent.en;
  return { title: `${content.name} | MR Group`, description: content.tagline };
}

export default async function AgroMedicineLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const content = agroMedicineContent[locale as AppLocale];
  const t = await getTranslations({ locale, namespace: "companySite" });
  const rootDomain = getRootDomain();
  const logoUrl = await getCompanyLogo(SiteKey.AGRO_MEDICINE);

  return (
    <div className={`${poppins.variable} flex min-h-full flex-1 flex-col bg-white text-vet-ink`}>
      <AgroMedNavbar
        name={content.name}
        logoUrl={logoUrl}
        nav={content.nav ?? []}
        locale={locale as AppLocale}
        rootDomain={rootDomain}
        backToGroupLabel={t("backToGroup")}
      />
      {children}
      <AgroMedFooter
        name={content.name}
        footer={content.footer}
        locale={locale as AppLocale}
        rootDomain={rootDomain}
      />
    </div>
  );
}
