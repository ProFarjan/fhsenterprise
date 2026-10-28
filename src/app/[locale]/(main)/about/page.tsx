import type { Metadata } from "next";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { getSiteConfig } from "@/data/site";
import { buildPageMetadata, SITE_URL } from "@/lib/seo";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import type { AppLocale } from "@/i18n/routing";
import { jsonLdString } from "@/lib/jsonLd";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({
    locale,
    path: "/about",
    title:
      locale === "bn"
        ? "আমাদের পরিচিতি ও রূপরেখা | এফএইচএস এন্টারপ্রাইজ"
        : "About FHS Enterprise | Overview, Concerns & Vision",
    description:
      locale === "bn"
        ? "এফএইচএস এন্টারপ্রাইজ ময়মনসিংহের ফুলবাড়িয়ায় অবস্থিত একটি অগ্রগামী গ্রুপ অব কোম্পানিজ — মেসার্স বাংলাদেশ অটো রাইস মিল, ভেহিকেল সলিউশনস এবং ডেইলি বাজার সুপার শপ।"
        : "Learn about FHS Enterprise in Fulbariya, Mymensingh. A diversified group operating M/s. Bangladesh Auto Rice Mill, Vehicle Solutions, and Daily Bazar.",
    keywords: [
      "About FHS Enterprise",
      "FHS Enterprise Fulbariya",
      "M/s Bangladesh Auto Rice Mill",
      "Vehicle Solutions Mymensingh",
      "Daily Bazar super shop",
    ],
    image: "/images/gallery/overview.png",
  });
}

function AboutOverviewPageContent() {
  const locale = useLocale() as AppLocale;
  const { about } = getSiteConfig(locale);
  const t = useTranslations("pageHeaders.about");
  const tTabs = useTranslations("tabs");

  const quickLinks = [
    {
      title: tTabs("history"),
      description: locale === "bn" ? "আমাদের শুরু, রূপান্তর ও ফুলবাড়িয়ায় বিকাশ পর্ব।" : "Our roots, growth, and transformation in Fulbariya.",
      href: "/about/history",
    },
    {
      title: tTabs("founder"),
      description: locale === "bn" ? "প্রতিষ্ঠাতা ও ব্যবস্থাপনা নেতৃত্বের অনুপ্রেরণাদায়ী দর্শন।" : "Visionary leadership and entrepreneurial guidance.",
      href: "/about/founder",
    },
    {
      title: tTabs("missionVision"),
      description: locale === "bn" ? "ভবিষ্যতের পথচলা এবং নৈতিক ব্যবসায়িক মূল্যবোধ।" : "Our strategic goals, aspirations, and ethical values.",
      href: "/about/mission-vision",
    },
    {
      title: tTabs("milestones"),
      description: locale === "bn" ? "২০১৪ থেকে ২০২৬ পর্যন্ত অর্জিত ঐতিহাসিক সাফল্য।" : "Key milestones from our inception to nationwide leadership.",
      href: "/about/milestones",
    },
    {
      title: tTabs("facilities"),
      description: locale === "bn" ? "অত্যাধুনিক অটো রাইস মিল, ওয়ার্কশপ ও কোল্ড চেইন হাব।" : "State-of-the-art milling complex, workshops, and fulfillment hubs.",
      href: "/about/facilities",
    },
    {
      title: tTabs("faq"),
      description: locale === "bn" ? "সাধারণ প্রশ্ন ও ব্যবসায়িক অংশীদারিত্বের তথ্য।" : "Common questions about our operations and partnership.",
      href: "/about/faq",
    },
  ];

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: locale === "bn" ? "এফএইচএস এন্টারপ্রাইজ সম্পর্কে" : "About FHS Enterprise",
    url: `${SITE_URL}/${locale}/about`,
    description: about.description,
    mainEntity: {
      "@type": "Organization",
      name: "FHS Enterprise",
      alternateName: "এফএইচএস এন্টারপ্রাইজ",
      url: SITE_URL,
      logo: `${SITE_URL}/logos/fhs_logo.png`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString(aboutSchema) }}
      />
      <div className="mx-auto max-w-6xl px-6 pt-6 lg:px-8">
        <Breadcrumbs
          locale={locale}
          items={[
            { label: locale === "bn" ? "হোম" : "Home", href: "/" },
            { label: t("title") },
          ]}
        />
      </div>

      {/* Intro band: text + image */}
      <section className="mx-auto max-w-6xl px-6 py-12 lg:px-8 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0045A0]">
              <span className="h-px w-8 bg-[#0045A0]" />
              {t("eyebrow")}
            </span>
            <p className="mt-6 text-2xl font-medium leading-relaxed text-neutral-800 sm:text-[1.75rem] sm:leading-[1.5]">
              {about.description}
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-black/5">
            <Image
              src="/images/gallery/overview.png"
              alt=""
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Pillars — dark band */}
      <section className="bg-neutral-950">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {about.points.map((point, index) => (
              <div key={point} className="group">
                <span className="block text-5xl font-bold leading-none text-emerald-400 group-hover:text-emerald-300 transition-colors">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mt-4 block h-px w-full bg-white/10" />
                <p className="mt-4 text-lg font-medium leading-7 text-white">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore About subpages */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0045A0]">
            {locale === "bn" ? "অন্বেষণ করুন" : "Explore"}
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            {locale === "bn" ? "আমাদের বিস্তারিত পথচলা" : "Discover More About Us"}
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {quickLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative rounded-2xl border border-neutral-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
            >
              <h3 className="text-xl font-bold text-neutral-900 group-hover:text-[#0045A0] transition-colors">
                {item.title} →
              </h3>
              <p className="mt-3 text-sm leading-6 text-neutral-600">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

// next-intl needs the request locale set before any of its APIs run, and Next
// renders layouts and pages in parallel — so each one sets it itself. That is
// also what lets the page be prerendered instead of rendered on every request.
export default async function AboutOverviewPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <AboutOverviewPageContent />;
}
