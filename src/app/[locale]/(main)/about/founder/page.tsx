import type { Metadata } from "next";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { getSiteConfig } from "@/data/site";
import { buildPageMetadata, getPersonJsonLd } from "@/lib/seo";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import type { AppLocale } from "@/i18n/routing";
import { jsonLdString } from "@/lib/jsonLd";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({
    locale,
    path: "/about/founder",
    title:
      locale === "bn"
        ? "প্রতিষ্ঠাতা ও নেতৃত্ব — ফখরুল হাসান সুটন | এফএইচএস এন্টারপ্রাইজ"
        : "Founder & Leadership — Fakhrul Hasan Suton | FHS Enterprise",
    description:
      locale === "bn"
        ? "এফএইচএস এন্টারপ্রাইজের প্রতিষ্ঠাতা ও প্রোপাইটার ফখরুল হাসান সুটন এবং মেসার্স বাংলাদেশ অটো রাইস মিলের প্রতিষ্ঠাতা মো: সাইফুল ইসলাম বুলবুল-এর জীবন ও নেতৃত্ব দর্শন।"
        : "Learn about Fakhrul Hasan Suton (Proprietor, FHS Enterprise) and Md. Saiful Islam Bulbul (Founder & Director, M/s. Bangladesh Auto Rice Mill) — their vision and leadership in Fulbariya.",
    keywords: [
      "Fakhrul Hasan Suton",
      "Md Saiful Islam Bulbul",
      "FHS Enterprise founder",
      "Bangladesh Auto Rice Mill founder",
      "Proprietor FHS Enterprise",
    ],
    image: "/images/gallery/suton.jpeg",
    type: "profile",
  });
}

export default function FounderPage() {
  const locale = useLocale() as AppLocale;
  const { founder } = getSiteConfig(locale).aboutPages;
  const tAbout = useTranslations("aboutPages");

  const sutonSchema = getPersonJsonLd({
    name: founder.name,
    jobTitle: founder.title,
    image: founder.image,
    worksFor: "FHS Enterprise",
    description: founder.bio.join(" "),
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString(sutonSchema) }}
      />
      <div className="mx-auto max-w-6xl px-6 pt-6 lg:px-8">
        <Breadcrumbs
          locale={locale}
          items={[
            { label: locale === "bn" ? "হোম" : "Home", href: "/" },
            { label: locale === "bn" ? "আমাদের সম্পর্কে" : "About Us", href: "/about" },
            { label: founder.name },
          ]}
        />
      </div>

      <section className="mx-auto max-w-6xl px-6 py-12 lg:px-8 lg:py-20">
      {/* Primary Founder / Proprietor */}
      <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-20">
        {/* Sticky image */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-black/5 lg:sticky lg:top-24">
          <Image
            src={founder.image}
            alt={founder.name}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>

        {/* Narrative */}
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            {founder.name}
          </h2>
          <p className="mt-2 text-lg font-semibold text-[#0045A0]">
            {founder.title}
          </p>
          <span className="mt-5 block h-1 w-16 rounded-full bg-[#0045A0]" />
          
          <div className="mt-8">
            <blockquote className="border-l-4 border-[#0045A0] pl-6 text-xl italic text-neutral-800">
              &quot;{founder.quote}&quot;
            </blockquote>
          </div>

          <div className="mt-8 space-y-6">
            {founder.bio.map((paragraph: string, index: number) => (
              <p
                key={index}
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

          <div className="mt-12 grid grid-cols-2 gap-8 border-t border-neutral-200 pt-10 sm:grid-cols-4">
            {founder.achievements.map((item: { label: string; value: string }) => (
              <div key={item.label}>
                <div className="text-3xl font-bold tracking-tight text-[#0045A0]">
                  {item.value}
                </div>
                <div className="mt-2 text-sm font-medium text-neutral-600">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subsidiary / Concern Leadership */}
      {founder.concernLeaders && founder.concernLeaders.length > 0 && (
        <div className="mt-24 border-t border-neutral-200 pt-20">
          <div className="mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0045A0]">
              {tAbout("subsidiaryLeadership")}
            </span>
            <h3 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              {locale === "bn" ? "অঙ্গপ্রতিষ্ঠান নেতৃত্ব ও প্রতিষ্ঠাতা" : "Subsidiary Founders & Key Leadership"}
            </h3>
          </div>

          <div className="space-y-16">
            {founder.concernLeaders.map((leader) => (
              <div
                key={leader.name}
                className="grid gap-10 rounded-3xl border border-neutral-200 bg-neutral-50/50 p-8 sm:p-12 lg:grid-cols-12 lg:gap-14 lg:items-center"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5 lg:col-span-4">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="lg:col-span-8">
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-[#0045A0]">
                    {leader.company}
                  </span>
                  <h4 className="mt-3 text-2xl font-bold text-neutral-900 sm:text-3xl">
                    {leader.name}
                  </h4>
                  <p className="mt-1 text-base font-semibold text-emerald-700">
                    {leader.title}
                  </p>
                  {leader.quote && (
                    <blockquote className="mt-6 border-l-4 border-emerald-600 pl-4 text-lg italic text-neutral-700">
                      &quot;{leader.quote}&quot;
                    </blockquote>
                  )}
                  <div className="mt-6 space-y-4">
                    {leader.bio.map((p, idx) => (
                      <p key={idx} className="text-base leading-7 text-neutral-600">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      </section>
    </>
  );
}
