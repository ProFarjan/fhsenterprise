"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

// Error boundary for every page under /[locale]. It sits inside the locale
// layout, so the document shell, fonts and translations are still available.
// (Errors thrown by the locale layout itself are caught by src/app/global-error.tsx.)
export default function LocaleError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  const t = useTranslations("errors");

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex flex-1 items-center justify-center px-6 py-24">
      <div className="max-w-md text-center" role="alert">
        <h1 className="text-2xl font-bold tracking-tight text-neutral-900">{t("title")}</h1>
        <p className="mt-3 text-neutral-600">{t("description")}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => unstable_retry()}
            className="rounded-full bg-brand-blue px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-blue-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
          >
            {t("retry")}
          </button>
          <Link
            href="/"
            className="rounded-full border border-neutral-300 px-6 py-2.5 text-sm font-semibold text-neutral-700 transition-colors hover:bg-neutral-100"
          >
            {t("home")}
          </Link>
        </div>
      </div>
    </main>
  );
}
