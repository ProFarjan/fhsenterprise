import type { Metadata } from "next";
import { useLocale } from "next-intl";
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
    path: "/about/milestones",
    title:
      locale === "bn"
        ? "আমাদের মাইলফলক ও সাফল্য | এফএইচএস এন্টারপ্রাইজ"
        : "Corporate Milestones & Timeline | FHS Enterprise",
    description:
      locale === "bn"
        ? "২০১৪ থেকে ২০২৬ পর্যন্ত এফএইচএস এন্টারপ্রাইজ, মেসার্স বাংলাদেশ অটো রাইস মিল, ভেহিকেল সলিউশনস এবং ডেইলি বাজারের উল্লেখযোগ্য মাইলফলক।"
        : "Key milestones of FHS Enterprise from 2014 through 2026 — automated milling milestones, automotive expansion, and e-commerce launch.",
    keywords: [
      "FHS Enterprise milestones",
      "corporate timeline",
      "Bangladesh Auto Rice Mill timeline",
      "business achievements Fulbariya",
    ],
  });
}

function MilestonesPageContent() {
  const locale = useLocale() as AppLocale;
  const { milestones } = getSiteConfig(locale).aboutPages;

  return (
    <>
      <div className="mx-auto max-w-4xl px-6 pt-6 lg:px-8">
        <Breadcrumbs
          locale={locale}
          items={[
            { label: locale === "bn" ? "হোম" : "Home", href: "/" },
            { label: locale === "bn" ? "আমাদের সম্পর্কে" : "About Us", href: "/about" },
            { label: locale === "bn" ? "মাইলফলক" : "Milestones" },
          ]}
        />
      </div>

      <section className="mx-auto max-w-4xl px-6 py-12 lg:px-8 lg:py-20">
      <ol className="relative">
        {/* Spine */}
        <span className="absolute left-2 top-3 h-[calc(100%-2rem)] w-0.5 bg-gradient-to-b from-[#0045A0] via-blue-300 to-transparent sm:left-[7.5rem]" />

        {milestones.map((milestone) => (
          <li
            key={milestone.year}
            className="relative grid grid-cols-1 gap-4 pb-12 pl-12 last:pb-0 sm:grid-cols-[7rem_1fr] sm:gap-10 sm:pl-0"
          >
            {/* Year */}
            <span className="text-3xl font-bold text-neutral-900 sm:text-right sm:text-4xl">
              {milestone.year}
            </span>

            {/* Node */}
            <span className="absolute left-0 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#0045A0] ring-4 ring-blue-100 sm:left-[6.85rem]">
              <span className="h-2 w-2 rounded-full bg-white" />
            </span>

            {/* Content */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl sm:ml-4">
              <h3 className="text-xl font-bold text-neutral-900">{milestone.title}</h3>
              <p className="mt-2 leading-8 text-neutral-600">{milestone.description}</p>
            </div>
          </li>
        ))}
      </ol>
      </section>
    </>
  );
}

// next-intl needs the request locale set before any of its APIs run, and Next
// renders layouts and pages in parallel — so each one sets it itself. That is
// also what lets the page be prerendered instead of rendered on every request.
export default async function MilestonesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <MilestonesPageContent />;
}
