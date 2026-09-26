import { useLocale } from "next-intl";
import PillarPage from "@/components/sections/sustainability/PillarPage";
import { getSiteConfig } from "@/data/site";
import type { AppLocale } from "@/i18n/routing";

export default function EnvironmentPage() {
  const siteConfig = getSiteConfig(useLocale() as AppLocale);
  const pillar = siteConfig.sustainabilityPages.pillars.find((p) => p.slug === "environment")!;
  return <PillarPage pillar={pillar} />;
}
