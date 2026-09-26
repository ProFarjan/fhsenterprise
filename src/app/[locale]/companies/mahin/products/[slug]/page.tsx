import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import MahinProductCard from "@/components/company/mahin/MahinProductCard";
import { mahinContent } from "@/data/companies/mahin";
import { getSimpleDbProducts } from "@/lib/publicContent";
import { SiteKey } from "@/generated/prisma/enums";
import type { AppLocale } from "@/i18n/routing";

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 flex-none text-mahin-flame-dark">
      <path d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  );
}

export function generateStaticParams() {
  return mahinContent.en.products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const content = mahinContent[locale as AppLocale] ?? mahinContent.en;
  const product = content.products.find((p) => p.slug === slug);
  if (!product) return {};
  return { title: `${product.name} | ${content.name}`, description: product.tagline };
}

export default async function MahinProductDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const content = mahinContent[locale as AppLocale];
  const { categories, labels } = content;
  const dbProducts = await getSimpleDbProducts(SiteKey.MAHIN);
  const products = [...content.products, ...dbProducts];
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const category = categories.find((c) => c.slug === product.category);
  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3);

  return (
    <main className="flex-1 bg-mahin-mist">
      <section className="mx-auto max-w-6xl px-6 pt-10 lg:px-8">
        <a
          href={category ? `/${locale}/categories/${category.slug}` : `/${locale}/categories`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-mahin-flame-dark hover:text-mahin-navy"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
            <path d="M11 17 6 12l5-5M6 12h12" />
          </svg>
          {labels.backToCategory}
        </a>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-mahin-line bg-white shadow-sm">
            <Image src={product.image} alt="" fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>

          <div>
            {category && (
              <a
                href={`/${locale}/categories/${category.slug}`}
                className="inline-block rounded-full bg-mahin-flame px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-mahin-flame-dark"
              >
                {category.name}
              </a>
            )}
            <h1 className="mt-5 font-mahin text-3xl font-bold leading-tight tracking-tight text-mahin-navy sm:text-4xl">
              {product.name}
            </h1>
            <p className="mt-4 text-lg leading-8 text-mahin-slate">{product.tagline}</p>
            <p className="mt-5 text-base leading-7 text-mahin-slate">{product.description}</p>

            <a
              href={`/${locale}/contact`}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-mahin-flame px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-mahin-flame-dark"
            >
              {labels.enquire}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>

            <dl className="mt-10 grid grid-cols-1 gap-x-6 gap-y-5 border-t border-mahin-line pt-8 sm:grid-cols-2">
              {product.specs.map((spec) => (
                <div key={spec.label}>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-mahin-slate">{spec.label}</dt>
                  <dd className="mt-1 text-sm font-semibold text-mahin-navy">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="font-mahin text-2xl font-bold text-mahin-navy sm:text-3xl">{labels.benefitsHeading}</h2>
          <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
            {product.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <CheckIcon />
                <span className="text-sm leading-6 text-mahin-slate">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {related.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
          <h2 className="font-mahin text-2xl font-bold text-mahin-navy sm:text-3xl">{labels.relatedHeading}</h2>
          <div className="mt-8 grid grid-cols-1 gap-7 sm:grid-cols-3">
            {related.map((item) => (
              <MahinProductCard
                key={item.slug}
                product={item}
                viewDetailsLabel={labels.viewDetails}
                locale={locale as AppLocale}
              />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
