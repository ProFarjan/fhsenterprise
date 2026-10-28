import type { Metadata } from "next";
import Image from "next/image";
import { useLocale } from "next-intl";
import { getSiteConfig } from "@/data/site";
import { buildPageMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import type { AppLocale } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import { SHOW_UNVERIFIED_SECTIONS } from "@/data/organization";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({
    locale,
    path: "/about/facilities",
    title:
      locale === "bn"
        ? "আমাদের স্থাপনাসমূহ ও কারখানা | এফএইচএস এন্টারপ্রাইজ"
        : "Facilities & Infrastructure | FHS Enterprise",
    description:
      locale === "bn"
        ? "ময়মনসিংহের ফুলবাড়িয়ায় এফএইচএস এন্টারপ্রাইজের স্বয়ংক্রিয় রাইস মিল কমপ্লেক্স, ভেহিকেল সলিউশনস ওয়ার্কশপ, ডেইলি বাজার কোল্ড হাব এবং কর্পোরেট হেডকোয়ার্টার।"
        : "Discover the modern infrastructure of FHS Enterprise — our automated rice milling plant, automotive diagnostic workshop, and cold chain fulfillment center in Fulbariya.",
    keywords: [
      "FHS Enterprise facilities",
      "Bangladesh Auto Rice Mill plant",
      "Vehicle Solutions workshop",
      "Fulbariya manufacturing plant",
    ],
    image: "/images/facilities/rice-mill-plant.jpg",
  });
}

// Used only if a facility has no image of its own.
const FALLBACK_FACILITY_IMAGE = "/images/gallery/fhs_history.jpg";

function PinIcon() {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
  );
}

function FacilitiesPageContent() {
  const locale = useLocale() as AppLocale;
  const { facilities } = getSiteConfig(locale).aboutPages;

  return (
    <>
      <div className="mx-auto max-w-6xl px-6 pt-6 lg:px-8">
        <Breadcrumbs
          locale={locale}
          items={[
            { label: locale === "bn" ? "হোম" : "Home", href: "/" },
            { label: locale === "bn" ? "আমাদের সম্পর্কে" : "About Us", href: "/about" },
            { label: locale === "bn" ? "স্থাপনাসমূহ" : "Facilities" },
          ]}
        />
      </div>

      <section className="mx-auto max-w-6xl px-6 py-12 lg:px-8 lg:py-20">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {facilities.map((facility) => (
          <article
            key={facility.name}
            className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-2xl"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={facility.image ?? FALLBACK_FACILITY_IMAGE}
                alt={facility.name}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              
              {SHOW_UNVERIFIED_SECTIONS.facilityFigures && facility.capacity && (
                <span className="absolute top-4 right-4 inline-flex items-center rounded-full bg-emerald-600/90 px-3 py-1 text-xs font-semibold text-white shadow-md backdrop-blur">
                  {facility.capacity}
                </span>
              )}

              <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3.5 py-1 text-xs font-semibold uppercase tracking-wide text-[#0045A0] shadow-sm backdrop-blur">
                <PinIcon />
                {facility.location}
              </span>
            </div>
            <div className="p-7">
              <h3 className="text-xl font-bold text-neutral-900 group-hover:text-[#0045A0] transition-colors">
                {facility.name}
              </h3>
              <p className="mt-2.5 leading-7 text-neutral-600">{facility.description}</p>
            </div>
          </article>
        ))}
      </div>
      </section>
    </>
  );
}

// next-intl needs the request locale set before any of its APIs run, and Next
// renders layouts and pages in parallel — so each one sets it itself. That is
// also what lets the page be prerendered instead of rendered on every request.
export default async function FacilitiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <FacilitiesPageContent />;
}
