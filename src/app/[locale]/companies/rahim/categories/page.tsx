import Image from "next/image";
import RahimPageHeader from "@/components/company/rahim/RahimPageHeader";
import RahimIcon from "@/components/company/rahim/RahimIcon";
import { rahimContent } from "@/data/companies/rahim";
import { getSimpleDbProducts } from "@/lib/publicContent";
import { SiteKey } from "@/generated/prisma/enums";
import type { AppLocale } from "@/i18n/routing";

export default async function RahimCategoriesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const content = rahimContent[locale as AppLocale];
  const { categoriesPage, categories, labels } = content;
  const dbProducts = await getSimpleDbProducts(SiteKey.RAHIM);
  const products = [...content.products, ...dbProducts];

  const countFor = (slug: string) => products.filter((p) => p.category === slug).length;

  return (
    <main className="flex-1 bg-rahim-frost">
      <RahimPageHeader header={categoriesPage.header} />

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <p className="max-w-2xl text-lg leading-8 text-rahim-steel">{categoriesPage.intro}</p>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <a
              key={category.slug}
              href={`/${locale}/categories/${category.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-rahim-line bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-rahim-cyan/50 hover:shadow-2xl hover:shadow-rahim-slate/10"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-rahim-cloud">
                <Image
                  src={category.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 25vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rahim-slate/25 via-rahim-slate/5 to-transparent" />
                <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-xl bg-rahim-cyan text-white shadow-lg">
                  <RahimIcon name={category.icon} className="h-6 w-6" />
                </div>
                <span className="absolute bottom-5 left-5 rounded-full bg-rahim-slate/85 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  {countFor(category.slug)} {labels.productsCount}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <p className="text-xs font-semibold uppercase tracking-wide text-rahim-cyan-dark">{category.tagline}</p>
                <h2 className="mt-1.5 font-rahim text-2xl font-bold text-rahim-slate">{category.name}</h2>
                <p className="mt-3 flex-1 text-sm leading-6 text-rahim-steel">{category.description}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-rahim-cyan-dark">
                  {content.categoriesSection.exploreLabel}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 transition-transform group-hover:translate-x-1">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
