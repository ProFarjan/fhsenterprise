import type { Metadata } from "next";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import ContactForm from "@/components/sections/contact/ContactForm";
import SocialIcon from "@/components/icons/SocialIcon";
import { MapPinIcon, MailIcon, PhoneIcon } from "@/components/icons/ContactIcons";
import { getSiteConfig } from "@/data/site";
import { buildPageMetadata, SITE_URL } from "@/lib/seo";
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
    path: "/contact",
    title:
      locale === "bn"
        ? "যোগাযোগ ও প্রধান কার্যালয় | এফএইচএস এন্টারপ্রাইজ"
        : "Contact Us & Head Office | FHS Enterprise",
    description:
      locale === "bn"
        ? "এফএইচএস এন্টারপ্রাইজের সাথে যোগাযোগ করুন। প্রধান কার্যালয়: ফুলবাড়িয়া, ময়মনসিংহ। ফোন: +880 123456789, ইমেইল: info@fhsenterprise.com"
        : "Get in touch with FHS Enterprise in Fulbariya, Mymensingh. Inquiries for Bangladesh Auto Rice Mill, Vehicle Solutions, and Daily Bazar partnerships.",
    keywords: [
      "Contact FHS Enterprise",
      "FHS Enterprise address Fulbariya",
      "Bangladesh Auto Rice Mill contact",
      "Vehicle Solutions phone",
      "Mymensingh office",
    ],
  });
}

export default function ContactPage() {
  const locale = useLocale() as AppLocale;
  const { contact, socials } = getSiteConfig(locale);
  const t = useTranslations("contactPage");
  const tCommon = useTranslations("common");
  const tHome = useTranslations("home.contact");

  const infoItems = [
    { label: t("visitUs"), value: contact.address, icon: MapPinIcon, href: undefined as string | undefined },
    { label: t("emailUs"), value: contact.email, icon: MailIcon, href: `mailto:${contact.email}` },
    {
      label: t("callUs"),
      value: contact.phone,
      icon: PhoneIcon,
      href: `tel:${contact.phone.replace(/[^+\d]/g, "")}`,
    },
  ];

  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: locale === "bn" ? "যোগাযোগ | এফএইচএস এন্টারপ্রাইজ" : "Contact FHS Enterprise",
    url: `${SITE_URL}/${locale}/contact`,
    mainEntity: {
      "@type": "LocalBusiness",
      name: "FHS Enterprise",
      telephone: contact.phone,
      email: contact.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: contact.address,
        addressLocality: "Fulbariya",
        addressRegion: "Mymensingh",
        addressCountry: "BD",
      },
    },
  };

  return (
    <div className="flex-1 bg-neutral-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString(contactJsonLd) }}
      />
      <section className="relative overflow-hidden bg-neutral-950 pb-20 pt-24 sm:pt-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_rgba(0,69,160,0.35),_transparent_55%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle,_rgba(255,255,255,0.08)_1px,_transparent_1px)] bg-size-[28px_28px] opacity-40" />

        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <span className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-blue-300">
            {tHome("badge")}
          </span>
          <h1 className="mx-auto mt-5 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
            {t("heading")}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-neutral-300">{contact.description}</p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 pt-4 lg:px-8">
        <Breadcrumbs
          locale={locale}
          items={[
            { label: locale === "bn" ? "হোম" : "Home", href: "/" },
            { label: locale === "bn" ? "যোগাযোগ" : "Contact" },
          ]}
        />
      </div>

      <div className="relative mx-auto mt-6 max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {infoItems.map((item) => {
            const Icon = item.icon;
            const card = (
              <div className="group flex h-full flex-col items-start gap-4 rounded-2xl border border-neutral-200 bg-white p-6 shadow-lg shadow-neutral-900/5 transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0045A0] text-white transition-transform group-hover:scale-110">
                  <Icon />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-[#0045A0]">
                    {item.label}
                  </p>
                  <p className="mt-1 font-medium text-neutral-900">{item.value}</p>
                </div>
              </div>
            );

            return item.href ? (
              <Link key={item.label} href={item.href} className="block">
                {card}
              </Link>
            ) : (
              <div key={item.label}>{card}</div>
            );
          })}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="grid grid-cols-1 overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-xl shadow-neutral-900/5 lg:grid-cols-5">
          <div className="relative overflow-hidden bg-neutral-950 p-10 text-white lg:col-span-2">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(0,69,160,0.35),_transparent_60%)]" />

            <h2 className="text-2xl font-bold">{tCommon("sendMessage")}</h2>
            <p className="mt-3 text-neutral-400">{t("formIntro")}</p>

            <div className="mt-10 space-y-5 border-t border-white/10 pt-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                  {t("headOffice")}
                </p>
                <p className="mt-1 text-sm text-neutral-300">{contact.address}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                  {tCommon("email")}
                </p>
                <p className="mt-1 text-sm text-neutral-300">{contact.email}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                  {tCommon("phone")}
                </p>
                <p className="mt-1 text-sm text-neutral-300">{contact.phone}</p>
              </div>
            </div>

            <div className="mt-10 flex gap-4 border-t border-white/10 pt-8">
              {socials.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-neutral-300 transition-colors hover:bg-[#0045A0] hover:text-white"
                >
                  <SocialIcon label={social.label} />
                </Link>
              ))}
            </div>
          </div>

          <div className="p-8 sm:p-10 lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
