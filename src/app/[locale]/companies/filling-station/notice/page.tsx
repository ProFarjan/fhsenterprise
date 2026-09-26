import FillingPageHeader from "@/components/company/filling/FillingPageHeader";
import FillingNotices from "@/components/company/filling/sections/FillingNotices";
import { fillingStationContent } from "@/data/companies/filling-station";
import type { AppLocale } from "@/i18n/routing";

export default async function FillingNoticePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const content = fillingStationContent[locale as AppLocale];
  const { noticePage } = content;

  return (
    <main className="flex-1 bg-white">
      <FillingPageHeader header={noticePage.header} />

      <section className="mx-auto max-w-3xl px-6 pt-16 text-center lg:px-8 lg:pt-20">
        <p className="text-lg leading-8 text-fuel-steel">{noticePage.intro}</p>
      </section>

      <FillingNotices notices={content.notices} locale={locale} showHeader={false} />
    </main>
  );
}
