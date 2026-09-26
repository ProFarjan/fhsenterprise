import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import MahinProductCard from "@/components/company/mahin/MahinProductCard";
import MahinIcon from "@/components/company/mahin/MahinIcon";
import { mahinContent } from "@/data/companies/mahin";
import { getSimpleDbProducts } from "@/lib/publicContent";
import { SiteKey } from "@/generated/prisma/enums";
import type { AppLocale } from "@/i18n/routing";

export function generateStaticParams() {
  return mahinContent.en.categories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}): Promise<Metadata> {
  const { locale, category: slug } = await params;
  const content = mahinContent[locale as AppLocale] ?? mahinContent.en;
  const category = content.categories.find((c) => c.slug === slug);
  if (!category) return {};
  return { title: `${category.name} | ${content.name}`, description: category.description };
}

export default async function MahinCategoryPage({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}) {
  const { locale, category: slug } = await params;
  const content = mahinContent[locale as AppLocale];
  const { categories, labels } = content;
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  const dbProducts = await getSimpleDbProducts(SiteKey.MAHIN);
  const products = [...content.products, ...dbProducts];
  const items = products.filter((p) => p.category === category.slug);

  return (
    <main className="flex-1 bg-mahin-mist">
      <header className="relative isolate flex min-h-[340px] items-end overflow-hidden bg-mahin-cloud">
        <Image src={category.image} alt="" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-mahin-mist via-mahin-mist/85 to-mahin-mist/45" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-14 pt-32 lg:px-8 lg:pb-16">
          <a
            href={`/${locale}/categories`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-mahin-flame-dark transition-colors hover:text-mahin-navy"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <path d="M11 17 6 12l5-5M6 12h12" />
            </svg>
            {labels.backToCategories}
          </a>
          <div className="mt-5 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-mahin-flame text-white shadow-lg">
              <MahinIcon name={category.icon} className="h-7 w-7" />
            </div>
            <div>
              <h1 className="font-mahin text-4xl font-bold leading-tight tracking-tight text-mahin-navy sm:text-5xl">{category.name}</h1>
              <p className="mt-1 text-sm font-semibold text-mahin-flame-dark">
                {items.length} {labels.productsCount}
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-xl text-base leading-7 text-mahin-slate">{category.description}</p>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((product) => (
            <MahinProductCard
              key={product.slug}
              product={product}
              categoryName={category.name}
              viewDetailsLabel={labels.viewDetails}
              locale={locale as AppLocale}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
