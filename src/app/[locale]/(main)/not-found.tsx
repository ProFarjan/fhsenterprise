import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

// Localized 404 rendered inside the (main) layout (Header + Footer). Reached via
// notFound() from any page under (main) and via the catch-all [...rest] route
// for unknown URLs. The Header is `fixed`, hence the top padding.
export default async function MainNotFound() {
  const t = await getTranslations("notFound");

  return (
    <main className="flex flex-1 items-center justify-center px-6 pb-24 pt-40">
      <div className="max-w-md text-center">
        <p className="text-6xl font-bold tracking-tight text-brand-blue">{t("code")}</p>
        <h1 className="mt-4 text-2xl font-semibold text-neutral-900">{t("title")}</h1>
        <p className="mt-3 text-neutral-600">{t("description")}</p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-brand-blue px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-blue-hover"
        >
          {t("home")}
        </Link>
      </div>
    </main>
  );
}
