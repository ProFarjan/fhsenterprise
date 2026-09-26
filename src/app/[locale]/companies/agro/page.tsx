import AgroHero from "@/components/company/agro/sections/AgroHero";
import AgroBenefits from "@/components/company/agro/sections/AgroBenefits";
import AgroImpact from "@/components/company/agro/sections/AgroImpact";
import AgroNetwork from "@/components/company/agro/sections/AgroNetwork";
import AgroPartners from "@/components/company/agro/sections/AgroPartners";
import AgroNews from "@/components/company/agro/sections/AgroNews";
import AgroCta from "@/components/company/agro/sections/AgroCta";
import HeroSlideshow from "@/components/company/HeroSlideshow";
import { agroContent } from "@/data/companies/agro";
import { getCompanyHeroSlides } from "@/lib/publicContent";
import { SiteKey } from "@/generated/prisma/enums";
import type { AppLocale } from "@/i18n/routing";

export default async function AgroPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const content = agroContent[locale as AppLocale];
  const heroSlides = await getCompanyHeroSlides(SiteKey.AGRO, locale as AppLocale);

  return (
    <main className="flex-1">
      {heroSlides.length > 0 ? <HeroSlideshow slides={heroSlides} /> : <AgroHero hero={content.hero} />}
      <AgroBenefits id="farmers" block={content.farmers} tone="green" imageSide="left" />
      <AgroBenefits id="buyers" block={content.buyers} tone="cream" imageSide="right" />
      <AgroImpact impact={content.impact} />
      <AgroNetwork network={content.network} />
      <AgroPartners partners={content.partners} />
      <AgroNews news={content.news} />
      <AgroCta cta={content.cta} />
    </main>
  );
}
