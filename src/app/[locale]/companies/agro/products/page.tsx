import AgroPageHeader from "@/components/company/agro/AgroPageHeader";
import AgroProductExplorer from "@/components/company/agro/AgroProductExplorer";
import { agroContent } from "@/data/companies/agro";
import { getSimpleDbProducts } from "@/lib/publicContent";
import { SiteKey } from "@/generated/prisma/enums";
import type { AppLocale } from "@/i18n/routing";

export default async function AgroProductsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const { productsPage } = agroContent[locale as AppLocale];
  const dbProducts = await getSimpleDbProducts(SiteKey.AGRO);
  const products = [...productsPage.products, ...dbProducts];

  return (
    <main className="flex-1 bg-white">
      <AgroPageHeader header={productsPage.header} />

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <p className="max-w-2xl text-lg leading-8 text-neutral-700">{productsPage.intro}</p>

        <div className="mt-10">
          <AgroProductExplorer
            categories={productsPage.categories}
            products={products}
            allLabel={productsPage.allLabel}
            viewDetailsLabel={productsPage.viewDetailsLabel}
            locale={locale as AppLocale}
          />
        </div>
      </section>
    </main>
  );
}
