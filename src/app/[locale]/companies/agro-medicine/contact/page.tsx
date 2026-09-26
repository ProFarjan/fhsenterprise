import type { Metadata } from "next";
import AgroMedPageHeader from "@/components/company/agromed/AgroMedPageHeader";
import AgroMedContactForm from "@/components/company/agromed/AgroMedContactForm";
import SocialIcon from "@/components/icons/SocialIcon";
import { agroMedicineContent } from "@/data/companies/agro-medicine";
import type { AppLocale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const content = agroMedicineContent[locale as AppLocale] ?? agroMedicineContent.en;
  return {
    title: `${content.contactPage.header.title} · ${content.name}`,
    description: content.contactPage.header.description,
  };
}

export default async function AgroMedContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const content = agroMedicineContent[locale as AppLocale];
  const { contactPage, footer } = content;

  return (
    <main className="flex-1 bg-white">
      <AgroMedPageHeader header={contactPage.header} />

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 overflow-hidden rounded-3xl ring-1 ring-vet-line shadow-xl shadow-vet-ink/5 lg:grid-cols-5">
          {/* Info panel */}
          <div className="relative overflow-hidden bg-vet-deep p-10 text-white lg:col-span-2">
            <h2 className="font-vet text-2xl font-semibold">{contactPage.formHeading}</h2>
            <p className="mt-3 text-teal-50/80">{contactPage.formIntro}</p>

            <div className="mt-10 space-y-6 border-t border-white/10 pt-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-vet-lime">
                  {contactPage.officeHeading}
                </p>
                <address className="mt-2 space-y-1 text-sm not-italic text-teal-50/85">
                  {footer.address.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </address>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-vet-lime">
                  {contactPage.emailLabel}
                </p>
                <a
                  href={`mailto:${footer.email}`}
                  className="mt-1 block text-sm text-teal-50/85 transition-colors hover:text-white"
                >
                  {footer.email}
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-vet-lime">
                  {contactPage.phoneLabel}
                </p>
                <a
                  href={`tel:${footer.phone.replace(/[^+0-9]/g, "")}`}
                  className="mt-1 block text-sm text-teal-50/85 transition-colors hover:text-white"
                >
                  {footer.phone}
                </a>
              </div>
            </div>

            <div className="mt-10 border-t border-white/10 pt-8">
              <p className="text-xs font-semibold uppercase tracking-wide text-vet-lime">
                {contactPage.followHeading}
              </p>
              <div className="mt-3 flex gap-4">
                {footer.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-teal-50/85 transition-colors hover:bg-vet-lime hover:text-vet-deep"
                  >
                    <SocialIcon label={social.label} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="p-8 sm:p-10 lg:col-span-3">
            <AgroMedContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
