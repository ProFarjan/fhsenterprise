import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import PillarPage from "@/components/sections/sustainability/PillarPage";
import { getSustainabilityPillar } from "@/data/site";
import type { AppLocale } from "@/i18n/routing";
import { buildPillarMetadata } from "../pillarMetadata";

type Props = { params: Promise<{ locale: string }> };

export function generateMetadata({ params }: Props) {
  return buildPillarMetadata(params, "health");
}

export default async function HealthPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const pillar = getSustainabilityPillar(locale as AppLocale, "health");
  if (!pillar) notFound();
  return <PillarPage pillar={pillar} />;
}
