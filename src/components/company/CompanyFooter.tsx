import { getTranslations } from "next-intl/server";
import type { AppLocale } from "@/i18n/routing";

// Footer shared by the company subdomain sites (see CompanyChrome).
export default async function CompanyFooter({
  tagline,
  locale,
  rootDomain,
}: {
  tagline: string;
  locale: AppLocale;
  rootDomain: string;
}) {
  const t = await getTranslations({ locale, namespace: "companySite" });

  return (
    <footer className="mt-auto border-t border-neutral-200 bg-neutral-950 py-10 text-neutral-400">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 text-center lg:px-8">
        <p className="text-sm">{tagline}</p>
        <p className="text-xs text-neutral-500">
          {t("partOf")}{" "}
          <a href={`//${rootDomain}/${locale}`} className="font-semibold text-brand-blue">
            FHS Enterprise
          </a>
        </p>
      </div>
    </footer>
  );
}
