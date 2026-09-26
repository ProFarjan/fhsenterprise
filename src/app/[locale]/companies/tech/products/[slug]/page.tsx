import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import AgritechProductCard from "@/components/company/agritech/AgritechProductCard";
import { agritechContent } from "@/data/companies/agritech";
import { getSimpleDbProducts } from "@/lib/publicContent";
import { SiteKey } from "@/generated/prisma/enums";
import type { AppLocale } from "@/i18n/routing";

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 flex-none text-agri-amber-dark">
      <path d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  );
}

export function generateStaticParams() {
  return agritechContent.en.products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const content = agritechContent[locale as AppLocale] ?? agritechContent.en;
  const product = content.products.find((p) => p.slug === slug);
  if (!product) return {};
  return { title: `${product.name} | ${content.name}`, description: product.tagline };
}

export default async function AgritechProductDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const content = agritechContent[locale as AppLocale];
  const { categories, labels } = content;
  const dbProducts = await getSimpleDbProducts(SiteKey.AGRI_TECH);
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
    <main className="flex-1 bg-white">
      <section className="mx-auto max-w-6xl px-6 pt-10 lg:px-8">
        <a
          href={category ? `/${locale}/categories/${category.slug}` : `/${locale}/categories`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-agri-amber-dark hover:text-agri-graphite"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
            <path d="M11 17 6 12l5-5M6 12h12" />
          </svg>
          {labels.backToCategory}
        </a>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5">
            <Image src={product.image} alt="" fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>

          <div>
            {category && (
              <a
                href={`/${locale}/categories/${category.slug}`}
                className="inline-block rounded-full bg-agri-cream px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-agri-graphite transition-colors hover:bg-agri-cream-dark"
              >
                {category.name}
              </a>
            )}
            <h1 className="mt-5 font-agri text-3xl font-bold leading-tight text-agri-graphite sm:text-4xl">
              {product.name}
            </h1>
            <p className="mt-4 text-lg leading-8 text-neutral-600">{product.tagline}</p>
            <p className="mt-5 text-base leading-7 text-neutral-600">{product.description}</p>

            <a
              href={`/${locale}/contact`}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-agri-amber px-7 py-3.5 text-sm font-semibold text-agri-graphite transition-colors hover:bg-agri-gold"
            >
              {labels.enquire}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>

            <dl className="mt-10 grid grid-cols-1 gap-x-6 gap-y-5 border-t border-agri-cream-dark pt-8 sm:grid-cols-2">
              {product.specs.map((spec) => (
                <div key={spec.label}>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-neutral-400">{spec.label}</dt>
                  <dd className="mt-1 text-sm font-semibold text-agri-graphite">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="bg-agri-cream py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="font-agri text-2xl font-bold text-agri-graphite sm:text-3xl">{labels.benefitsHeading}</h2>
          <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
            {product.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <CheckIcon />
                <span className="text-sm leading-6 text-neutral-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {related.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
          <h2 className="font-agri text-2xl font-bold text-agri-graphite sm:text-3xl">{labels.relatedHeading}</h2>
          <div className="mt-8 grid grid-cols-1 gap-7 sm:grid-cols-3">
            {related.map((item) => (
              <AgritechProductCard
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
