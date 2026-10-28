import { notFound } from "next/navigation";
import { useLocale } from "next-intl";
import PillarPage from "@/components/sections/sustainability/PillarPage";
import { getSustainabilityPillar } from "@/data/site";
import type { AppLocale } from "@/i18n/routing";

export default function EnvironmentPage() {
  const pillar = getSustainabilityPillar(useLocale() as AppLocale, "environment");
  if (!pillar) notFound();
  return <PillarPage pillar={pillar} />;
}
