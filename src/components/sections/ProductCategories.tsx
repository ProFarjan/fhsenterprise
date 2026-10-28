import { useLocale, useTranslations } from "next-intl";
import { getSiteConfig } from "@/data/site";
import type { AppLocale } from "@/i18n/routing";
import type { ProductCategoryIcon } from "@/types/content";

const ICON_PATHS: Record<ProductCategoryIcon, string> = {
  grain:
    "M9 3h6l-.75 3h-4.5L9 3Zm.75 3C7.5 7.5 5.25 10.5 5.25 13.875 5.25 17.8 8.25 21 12 21s6.75-3.2 6.75-7.125C18.75 10.5 16.5 7.5 14.25 6M9.75 12h4.5m-4.5 3.75h4.5",
  cog: "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 0 1 0 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 0 1 0-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281Z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
  leaf: "M12 3c4.5 1.5 7.5 5.5 7.5 9.75A7.5 7.5 0 0 1 12 20.25a7.5 7.5 0 0 1-7.5-7.5C4.5 8.5 7.5 4.5 12 3Zm0 3v11.25",
};

function CategoryIcon({ icon }: { icon: ProductCategoryIcon }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={ICON_PATHS[icon]} />
    </svg>
  );
}

export default function ProductCategories() {
  const { productCategories } = getSiteConfig(useLocale() as AppLocale);
  const t = useTranslations("home.products");

  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_rgba(0,69,160,0.06),_transparent_55%)]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="inline-block rounded-full border border-[#0045a0]/20 bg-[#0045a0]/5 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[#0045a0]">
              {t("badge")}
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              {t("headingPrefix")} <span className="text-[#0045a0]">{t("headingHighlight")}</span>
            </h2>
            <div className="mt-3 flex items-center gap-2">
              <span className="h-1 w-12 rounded-full bg-[#0045a0]" />
              <span className="h-1 w-8 rounded-full bg-[#097b33]" />
            </div>
            <p className="mt-2 text-lg text-neutral-600">{t("subheading")}</p>
          </div>
          <p className="max-w-md text-sm leading-6 text-neutral-600">{t("description")}</p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((category, idx) => (
            <div
              key={category.name}
              className="group flex flex-col gap-4 rounded-3xl border border-neutral-200 bg-neutral-50 p-7 transition-all hover:-translate-y-1 hover:border-[#0045a0]/40 hover:bg-white hover:shadow-xl"
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-2xl text-white transition-transform group-hover:scale-110 shadow-sm ${
                  idx % 2 === 0 ? "bg-[#0045a0]" : "bg-[#097b33]"
                }`}
              >
                <CategoryIcon icon={category.icon} />
              </div>

              <div>
                <h3 className="text-lg font-bold leading-snug text-neutral-900">
                  {category.name}
                </h3>
                <p className="mt-1 text-xs font-semibold text-[#097b33]">{category.company}</p>
              </div>

              <ul className="mt-auto flex flex-wrap gap-1.5 pt-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-white px-3 py-1 text-xs font-medium text-neutral-700 ring-1 ring-neutral-200 transition-colors group-hover:bg-[#0045a0]/5 group-hover:text-[#0045a0] group-hover:ring-[#0045a0]/20"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
