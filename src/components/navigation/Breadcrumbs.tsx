import { Link } from "@/i18n/navigation";
import { getBreadcrumbJsonLd } from "@/lib/seo";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumbs({
  items,
  locale = "en",
}: {
  items: BreadcrumbItem[];
  locale?: string;
}) {
  const schemaItems = items.map((item) => ({
    name: item.label,
    path: item.href ?? "",
  }));

  const jsonLd = getBreadcrumbJsonLd(schemaItems, locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="py-4 text-xs sm:text-sm text-neutral-500">
        <ol className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={item.label + index} className="inline-flex items-center gap-1.5 sm:gap-2">
                {index > 0 && (
                  <svg
                    className="h-3 w-3 text-neutral-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9 5 7 7-7 7" />
                  </svg>
                )}
                {isLast || !item.href ? (
                  <span className="font-semibold text-[#0045A0]" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-[#0045A0] hover:underline"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
