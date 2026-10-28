import type { Metadata } from "next";
import Image from "next/image";
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
    path: "/about/history",
    title:
      locale === "bn"
        ? "আমাদের ইতিহাস ও অগ্রযাত্রা | এফএইচএস এন্টারপ্রাইজ"
        : "Our History & Corporate Journey | FHS Enterprise",
    description:
      locale === "bn"
        ? "ময়মনসিংহের ফুলবাড়িয়ায় এফএইচএস এন্টারপ্রাইজের সূচনা, মেসার্স বাংলাদেশ অটো রাইস মিলের প্রতিষ্ঠা, ভেহিকেল সলিউশনস এবং ডেইলি বাজারের অগ্রযাত্রার ইতিহাস।"
        : "Explore the history of FHS Enterprise in Fulbariya, Mymensingh — from our inception to automated rice milling, automotive care, and retail e-commerce.",
    keywords: [
      "FHS Enterprise History",
      "Bangladesh Auto Rice Mill history",
      "Vehicle Solutions origin",
      "Fulbariya business history",
    ],
    image: "/images/gallery/fhs_history.jpg",
  });
}

function HistoryPageContent() {
  const locale = useLocale() as AppLocale;
  const { history } = getSiteConfig(locale).aboutPages;

  return (
    <>
      <div className="mx-auto max-w-6xl px-6 pt-6 lg:px-8">
        <Breadcrumbs
          locale={locale}
          items={[
            { label: locale === "bn" ? "হোম" : "Home", href: "/" },
            { label: locale === "bn" ? "আমাদের সম্পর্কে" : "About Us", href: "/about" },
            { label: history.title },
          ]}
        />
      </div>

      <section className="mx-auto max-w-6xl px-6 py-12 lg:px-8 lg:py-20">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-20">
        {/* Sticky image */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-black/5 lg:sticky lg:top-24">
          <Image
            src="/images/gallery/fhs_history.jpg"
            alt="FHS Enterprise History"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>

        {/* Narrative */}
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            {history.title}
          </h2>
          <span className="mt-5 block h-1 w-16 rounded-full bg-[#0045A0]" />
          <div className="mt-8 space-y-6">
            {history.paragraphs.map((paragraph, index) => (
              <p
                key={paragraph}
                className={
                  index === 0
                    ? "text-xl leading-9 text-neutral-800"
                    : "text-lg leading-8 text-neutral-600"
                }
              >
                {paragraph}
              </p>
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
export default async function HistoryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <HistoryPageContent />;
}
