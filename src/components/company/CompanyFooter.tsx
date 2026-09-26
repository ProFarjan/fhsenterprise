import { getTranslations } from "next-intl/server";
import type { AppLocale } from "@/i18n/routing";

// Generic footer shared by company subdomain sites that don't have a fully
// bespoke footer yet (see CompanyChrome). Companies with a custom design
// (e.g. agro) render their own footer instead of this one.
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
          <a href={`//${rootDomain}/${locale}`} className="font-semibold text-orange-500">
            MR Group
          </a>
        </p>
      </div>
    </footer>
  );
}
