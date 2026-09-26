import FillingHero from "@/components/company/filling/sections/FillingHero";
import FillingHighlights from "@/components/company/filling/sections/FillingHighlights";
import FillingServices from "@/components/company/filling/sections/FillingServices";
import FillingFeature from "@/components/company/filling/sections/FillingFeature";
import FillingProcess from "@/components/company/filling/sections/FillingProcess";
import FillingNotices from "@/components/company/filling/sections/FillingNotices";
import FillingCta from "@/components/company/filling/sections/FillingCta";
import HeroSlideshow from "@/components/company/HeroSlideshow";
import { fillingStationContent } from "@/data/companies/filling-station";
import { getCompanyHeroSlides } from "@/lib/publicContent";
import { SiteKey } from "@/generated/prisma/enums";
import type { AppLocale } from "@/i18n/routing";

export default async function FillingStationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const content = fillingStationContent[locale as AppLocale];
  const heroSlides = await getCompanyHeroSlides(SiteKey.FILLING_STATION, locale as AppLocale);

  return (
    <main className="flex-1">
      {heroSlides.length > 0 ? (
        <HeroSlideshow slides={heroSlides} />
      ) : (
        <FillingHero hero={content.hero} locale={locale} />
      )}
      <FillingHighlights highlights={content.highlights} />
      <FillingServices services={content.services} />
      <FillingFeature feature={content.feature} />
      <FillingProcess process={content.process} />
      <FillingNotices notices={content.notices} locale={locale} limit={3} />
      <FillingCta cta={content.cta} />
    </main>
  );
}
