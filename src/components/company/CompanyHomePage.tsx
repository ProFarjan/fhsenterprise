import Image from "next/image";
import { getTranslations } from "next-intl/server";
import type { AppLocale } from "@/i18n/routing";
import type { CompanySiteContent, CompanyTheme } from "@/types/company";

// Shared one-page layout (hero/about/products/contact) rendered inside each
// company's CompanyChrome. Content and theme are per-company (see
// src/data/companies/).
export default async function CompanyHomePage({
  content,
  theme,
  locale,
}: {
  content: CompanySiteContent;
  theme: CompanyTheme;
  locale: AppLocale;
}) {
  const t = await getTranslations({ locale, namespace: "companySite" });

  return (
    <main className="flex-1">
      <section className={`relative isolate flex min-h-[420px] items-end overflow-hidden bg-neutral-900`}>
        <Image src={content.heroImage} alt="" fill priority sizes="100vw" className="object-cover opacity-40" />
        <div className={`absolute inset-0 bg-gradient-to-t ${theme.heroFrom} via-black/60 to-black/10`} />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-16 pt-40 lg:px-8 lg:pb-24">
          <span
            className={`inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur`}
          >
            {content.sector}
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {content.name}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-200">{content.tagline}</p>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-4xl scroll-mt-24 px-6 py-16 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{content.about.heading}</h2>
        <p className="mt-4 text-lg leading-8 text-neutral-600">{content.about.body}</p>
      </section>

      <section id="products" className="scroll-mt-24 bg-neutral-50 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{content.products.heading}</h2>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {content.products.items.map((item) => (
              <li
                key={item}
                className={`flex items-center gap-3 rounded-xl border ${theme.accentBorder}/30 bg-white px-4 py-3 text-sm font-medium text-neutral-800 shadow-sm`}
              >
                <span className={`h-2 w-2 flex-none rounded-full ${theme.accentBg}`} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-4xl scroll-mt-24 px-6 py-16 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{content.contact.heading}</h2>
        <dl className="mt-6 space-y-2 text-sm text-neutral-600">
          <div className="flex gap-2">
            <dt className="font-semibold text-neutral-900">{t("email")}:</dt>
            <dd>
              <a href={`mailto:${content.contact.email}`} className="hover:underline">
                {content.contact.email}
              </a>
            </dd>
          </div>
          {content.contact.phone && (
            <div className="flex gap-2">
              <dt className="font-semibold text-neutral-900">{t("phone")}:</dt>
              <dd>
                <a href={`tel:${content.contact.phone.replace(/[^+\d]/g, "")}`} className="hover:underline">
                  {content.contact.phone}
                </a>
              </dd>
            </div>
          )}
          <div className="flex gap-2">
            <dt className="font-semibold text-neutral-900">{t("address")}:</dt>
            <dd>{content.contact.address}</dd>
          </div>
        </dl>
      </section>
    </main>
  );
}
