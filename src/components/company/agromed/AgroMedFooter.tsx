import SocialIcon from "@/components/icons/SocialIcon";
import type { AppLocale } from "@/i18n/routing";
import type { AgroMedFooterContent } from "@/types/agromed";

// Bespoke deep-teal footer for MR Agro Medicine: newsletter + contact columns
// above a large brand statement. Anchored id="contact" for the "Get in touch"
// links. Distinct from the generic CompanyFooter.
export default function AgroMedFooter({
  name,
  footer,
  locale,
  rootDomain,
}: {
  name: string;
  footer: AgroMedFooterContent;
  locale: AppLocale;
  rootDomain: string;
}) {
  return (
    <footer id="contact" className="mt-auto scroll-mt-20 bg-vet-deep text-teal-100/80">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              {footer.newsletterHeading}
            </h3>
            <form className="mt-4 flex overflow-hidden rounded-full bg-white/10 ring-1 ring-white/15">
              <input
                type="email"
                placeholder={footer.emailPlaceholder}
                aria-label={footer.emailPlaceholder}
                className="min-w-0 flex-1 bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-teal-100/50 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-vet-lime px-4 text-sm font-semibold text-vet-deep transition-colors hover:bg-vet-lime/85"
              >
                {footer.submitLabel}
              </button>
            </form>
            <p className="mt-3 text-xs leading-5 text-teal-100/45">{footer.consent}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              {footer.contactHeading}
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href={`mailto:${footer.email}`} className="transition-colors hover:text-white">
                  {footer.email}
                </a>
              </li>
              <li>{footer.phone}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              {footer.addressHeading}
            </h3>
            <address className="mt-4 space-y-1 text-sm not-italic">
              {footer.address.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </address>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              {footer.followHeading}
            </h3>
            <div className="mt-4 flex gap-3">
              {footer.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-vet-teal"
                >
                  <SocialIcon label={social.label} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-8 border-t border-white/10 pt-10 lg:flex-row lg:items-end lg:justify-between">
          <p className="max-w-2xl font-vet text-3xl font-semibold leading-tight text-white sm:text-4xl">
            {footer.statement}
          </p>
          <a
            href={`//${rootDomain}/${locale}`}
            className="shrink-0 text-sm font-semibold text-vet-lime transition-colors hover:text-white"
          >
            {name} · MR Group ↗
          </a>
        </div>

        <p className="mt-10 text-xs text-teal-100/40">{footer.legal}</p>
      </div>
    </footer>
  );
}
