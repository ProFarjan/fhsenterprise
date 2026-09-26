import LubePageHeader from "@/components/company/mrlube/LubePageHeader";
import ContactForm from "@/components/sections/contact/ContactForm";
import SocialIcon from "@/components/icons/SocialIcon";
import { mrlubeContent } from "@/data/companies/mrlube";
import type { AppLocale } from "@/i18n/routing";

export default async function LubeContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const content = mrlubeContent[locale as AppLocale];
  const { contactPage, footer } = content;

  return (
    <main className="flex-1 bg-lube-cream">
      <LubePageHeader header={contactPage.header} />

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 overflow-hidden rounded-lg border border-lube-line shadow-sm lg:grid-cols-5">
          <div className="relative overflow-hidden bg-lube-ink p-10 text-white lg:col-span-2">
            <h2 className="font-lube text-2xl font-bold uppercase tracking-wide">{contactPage.formHeading}</h2>
            <p className="mt-3 text-white/70">{contactPage.formIntro}</p>

            <div className="mt-10 space-y-5 border-t border-white/10 pt-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-lube-red">{contactPage.officeHeading}</p>
                <address className="mt-2 space-y-1 text-sm not-italic text-white/75">
                  {footer.address.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </address>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-lube-red">{contactPage.emailLabel}</p>
                <a href={`mailto:${footer.email}`} className="mt-1 block text-sm text-white/75 hover:text-white">
                  {footer.email}
                </a>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-lube-red">{contactPage.phoneLabel}</p>
                <p className="mt-1 text-sm text-white/75">{footer.phone}</p>
              </div>
            </div>

            <div className="mt-10 flex gap-4 border-t border-white/10 pt-8">
              {footer.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-lube-red hover:text-white"
                >
                  <SocialIcon label={social.label} />
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 sm:p-10 lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
