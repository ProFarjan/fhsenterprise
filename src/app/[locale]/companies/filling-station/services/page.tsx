import FillingPageHeader from "@/components/company/filling/FillingPageHeader";
import FillingServices from "@/components/company/filling/sections/FillingServices";
import FillingProcess from "@/components/company/filling/sections/FillingProcess";
import FillingCta from "@/components/company/filling/sections/FillingCta";
import { fillingStationContent } from "@/data/companies/filling-station";
import type { AppLocale } from "@/i18n/routing";

export default async function FillingServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const content = fillingStationContent[locale as AppLocale];
  const { servicesPage } = content;

  return (
    <main className="flex-1 bg-white">
      <FillingPageHeader header={servicesPage.header} />

      <section className="mx-auto max-w-3xl px-6 pt-16 text-center lg:px-8 lg:pt-20">
        <p className="text-lg leading-8 text-fuel-steel">{servicesPage.intro}</p>
      </section>

      <FillingServices services={content.services} showHeader={false} />
      <FillingProcess process={content.process} />
      <FillingCta cta={content.cta} />
    </main>
  );
}
