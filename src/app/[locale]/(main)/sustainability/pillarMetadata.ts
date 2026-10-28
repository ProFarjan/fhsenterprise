import type { Metadata } from "next";
import { getSiteConfig, getSustainabilityPillar } from "@/data/site";
import type { AppLocale } from "@/i18n/routing";
import { buildPageMetadata } from "@/lib/seo";

// Shared generateMetadata for the four /sustainability/<pillar> pages. Without
// it they inherited the overview's title, description and canonical URL, which
// told search engines every pillar was a duplicate of /sustainability.
// A pillar with no content renders a 404, so it gets no metadata.
export async function buildPillarMetadata(
  params: Promise<{ locale: string }>,
  slug: string,
): Promise<Metadata> {
  const { locale } = await params;
  const pillar = getSustainabilityPillar(locale as AppLocale, slug);
  if (!pillar) return {};

  return buildPageMetadata({
    locale,
    path: `/sustainability/${slug}`,
    title: `${pillar.title} | ${getSiteConfig(locale as AppLocale).groupName}`,
    description: pillar.summary,
    image: pillar.image,
  });
}
