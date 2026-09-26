import { getTranslations } from "next-intl/server";
import PageHeader from "@/components/layout/PageHeader";
import CompanyExplorer from "@/components/sections/companies/CompanyExplorer";
import { getCompanies } from "@/lib/publicContent";
import type { AppLocale } from "@/i18n/routing";

export default async function CompaniesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const [t, companies] = await Promise.all([
    getTranslations("pageHeaders.companies"),
    getCompanies(locale as AppLocale),
  ]);

  return (
    <div className="flex-1 bg-white">
      <PageHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
        image="/images/gallery/distribution.jpg"
      />
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <CompanyExplorer companies={companies} />
      </div>
    </div>
  );
}
