import type { Metadata } from "next";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { getSiteConfig } from "@/data/site";
import { buildPageMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import type { AppLocale } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({
    locale,
    path: "/about/mission-vision",
    title:
      locale === "bn"
        ? "আমাদের লক্ষ্য ও দৃষ্টিভঙ্গি | এফএইচএস এন্টারপ্রাইজ"
        : "Mission, Vision & Core Values | FHS Enterprise",
    description:
      locale === "bn"
        ? "এফএইচএস এন্টারপ্রাইজের সুদূরপ্রসারী ভিশন, জনকল্যাণমুখী মিশন এবং ৬টি মৌলিক ব্যবসায়িক মূল্যবোধ।"
        : "Explore our corporate mission, long-term vision, and 6 core operating values at FHS Enterprise in Fulbariya, Mymensingh.",
    keywords: [
      "FHS Enterprise mission",
      "FHS Enterprise vision",
      "corporate values",
      "sustainable business Fulbariya",
    ],
    image: "/images/gallery/fhs_mission.jpg",
  });
}

function MissionVisionPageContent() {
  const locale = useLocale() as AppLocale;
  const { missionVision } = getSiteConfig(locale).aboutPages;
  const tAbout = useTranslations("aboutPages");

  const bands = [
    { label: tAbout("mission"), text: missionVision.mission, image: "/images/gallery/fhs_mission.jpg" },
    { label: tAbout("vision"), text: missionVision.vision, image: "/images/gallery/fhs_vision.jpg" },
  ];

  return (
    <>
      <div className="mx-auto max-w-6xl px-6 pt-6 lg:px-8">
        <Breadcrumbs
          locale={locale}
          items={[
            { label: locale === "bn" ? "হোম" : "Home", href: "/" },
            { label: locale === "bn" ? "আমাদের সম্পর্কে" : "About Us", href: "/about" },
            { label: locale === "bn" ? "লক্ষ্য ও দৃষ্টিভঙ্গি" : "Mission & Vision" },
          ]}
        />
      </div>

      <section className="mx-auto max-w-6xl px-6 py-12 lg:px-8 lg:py-20">
      <div className="space-y-16 lg:space-y-24">
        {bands.map((band, index) => (
          <div
            key={band.label}
            className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20"
          >
            <div className={index % 2 === 1 ? "lg:order-2" : ""}>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0045A0]">
                <span className="h-px w-8 bg-[#0045A0]" />
                {band.label}
              </span>
              <p className="mt-6 text-2xl font-medium leading-relaxed text-neutral-800 sm:text-3xl sm:leading-[1.4]">
                {band.text}
              </p>
            </div>
            <div
              className={`relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-black/5 ${
                index % 2 === 1 ? "lg:order-1" : ""
              }`}
            >
              <Image
                src={band.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        ))}

        {/* Core values */}
        <div className="rounded-3xl bg-neutral-950 p-10 sm:p-14">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            {tAbout("coreValues")}
          </h3>
          <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {missionVision.values.map((value, index) => (
              <div key={value} className="flex items-baseline gap-4 border-t border-white/10 pt-5">
                <span className="font-mono text-sm text-emerald-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-lg font-semibold text-white">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      </section>
    </>
  );
}

// next-intl needs the request locale set before any of its APIs run, and Next
// renders layouts and pages in parallel — so each one sets it itself. That is
// also what lets the page be prerendered instead of rendered on every request.
export default async function MissionVisionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <MissionVisionPageContent />;
}
