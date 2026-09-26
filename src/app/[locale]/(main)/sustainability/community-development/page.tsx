import { useLocale } from "next-intl";
import PillarPage from "@/components/sections/sustainability/PillarPage";
import { getSiteConfig } from "@/data/site";
import type { AppLocale } from "@/i18n/routing";

export default function CommunityDevelopmentPage() {
  const siteConfig = getSiteConfig(useLocale() as AppLocale);
  const pillar = siteConfig.sustainabilityPages.pillars.find(
    (p) => p.slug === "community-development",
  )!;
  return <PillarPage pillar={pillar} />;
}
