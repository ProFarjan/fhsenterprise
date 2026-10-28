import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import { LEGAL, LEGAL_UPDATED, type LegalKey } from "@/data/legal";
import { SHOW_UNVERIFIED_SECTIONS } from "@/data/organization";
import type { AppLocale } from "@/i18n/routing";
import { buildPageMetadata } from "@/lib/seo";

const lang = (locale: string): AppLocale => (locale === "bn" ? "bn" : "en");

// Shared generateMetadata for /privacy and /terms.
export async function buildLegalMetadata(
  params: Promise<{ locale: string }>,
  kind: LegalKey,
): Promise<Metadata> {
  if (!SHOW_UNVERIFIED_SECTIONS.legalPages) return {};
  const { locale } = await params;
  const doc = LEGAL[kind][lang(locale)];
  return buildPageMetadata({
    locale,
    path: `/${kind}`,
    title: `${doc.title} | FHS Enterprise`,
    description: doc.description,
  });
}

// A plain text document page: the Privacy Policy and the Terms of Use.
export default async function LegalPage({ kind, locale }: { kind: LegalKey; locale: string }) {
  // Unreviewed draft text is not published (see SHOW_UNVERIFIED_SECTIONS).
  if (!SHOW_UNVERIFIED_SECTIONS.legalPages) notFound();
  const l = lang(locale);
  const doc = LEGAL[kind][l];
  const t = await getTranslations({ locale: l, namespace: "legal" });
  const updated = new Date(LEGAL_UPDATED).toLocaleDateString(l === "bn" ? "bn-BD" : "en-GB", {
    dateStyle: "long",
    timeZone: "UTC",
  });

  return (
    // The site header is fixed, hence the top padding.
    <article className="mx-auto w-full max-w-3xl px-6 pb-24 pt-28 lg:px-8">
      <Breadcrumbs
        locale={l}
        items={[{ label: t("home"), href: "/" }, { label: doc.title }]}
      />
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
        {doc.title}
      </h1>
      <p className="mt-3 text-sm text-neutral-500">
        {t("updated")}: <time dateTime={LEGAL_UPDATED}>{updated}</time>
      </p>

      <div className="mt-10 space-y-10">
        {doc.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-xl font-semibold text-neutral-900">{section.heading}</h2>
            <div className="mt-3 space-y-3 leading-7 text-neutral-700">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
