import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { agroContent } from "@/data/companies/agro";
import { getSimpleDbProducts } from "@/lib/publicContent";
import { SiteKey } from "@/generated/prisma/enums";
import type { AppLocale } from "@/i18n/routing";

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 flex-none text-agro-leaf"
    >
      <path d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  );
}

export function generateStaticParams() {
  return agroContent.en.productsPage.products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const content = agroContent[locale as AppLocale] ?? agroContent.en;
  const product = content.productsPage.products.find((p) => p.slug === slug);
  if (!product) return {};
  return { title: `${product.name} | ${content.name}`, description: product.tagline };
}

export default async function AgroProductDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const content = agroContent[locale as AppLocale];
  const { productsPage } = content;
  const dbProducts = await getSimpleDbProducts(SiteKey.AGRO);
  const products = [...productsPage.products, ...dbProducts];
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const category = productsPage.categories.find((c) => c.slug === product.category);
  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3);

  return (
    <main className="flex-1 bg-white">
      <section className="mx-auto max-w-6xl px-6 pt-10 lg:px-8">
        <a
          href={`/${locale}/products`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-agro-leaf hover:text-agro-forest"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="M11 17 6 12l5-5M6 12h12" />
          </svg>
          {productsPage.backLabel}
        </a>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5">
            <Image
              src={product.image}
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div>
            {category && (
              <span className="inline-block rounded-full bg-agro-cream px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-agro-forest">
                {category.name}
              </span>
            )}
            <h1 className="mt-5 font-display text-3xl font-normal leading-tight text-agro-forest sm:text-4xl">
              {product.name}
            </h1>
            <p className="mt-4 text-lg leading-8 text-neutral-600">{product.tagline}</p>
            <p className="mt-5 text-base leading-7 text-neutral-600">{product.description}</p>

            <a
              href={`/${locale}/contact`}
              className="mt-8 inline-block rounded-full bg-agro-forest px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-agro-green"
            >
              {productsPage.enquireLabel}
            </a>

            <dl className="mt-10 grid grid-cols-1 gap-x-6 gap-y-5 border-t border-neutral-200 pt-8 sm:grid-cols-2">
              {product.specs.map((spec) => (
                <div key={spec.label}>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                    {spec.label}
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-agro-forest">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="bg-agro-cream py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="font-display text-2xl font-normal text-agro-forest sm:text-3xl">
            {productsPage.benefitsHeading}
          </h2>
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
          <h2 className="font-display text-2xl font-normal text-agro-forest sm:text-3xl">
            {productsPage.relatedHeading}
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-7 sm:grid-cols-3">
            {related.map((item) => (
              <a
                key={item.slug}
                href={`/${locale}/products/${item.slug}`}
                className="group flex flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-base font-normal text-agro-forest">{item.name}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-neutral-600">{item.tagline}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
