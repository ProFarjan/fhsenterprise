import SocialIcon from "@/components/icons/SocialIcon";
import type { AppLocale } from "@/i18n/routing";
import type { FillingFooterContent } from "@/types/filling";

// Bespoke ink footer for MR Filling Station: newsletter + contact columns above
// a large brand statement. Anchored with id="contact" so the navbar and CTA
// "Get in touch" links scroll here. Distinct from the generic CompanyFooter.
export default function FillingFooter({
  name,
  footer,
  locale,
  rootDomain,
}: {
  name: string;
  footer: FillingFooterContent;
  locale: AppLocale;
  rootDomain: string;
}) {
  return (
    <footer id="contact" className="mt-auto scroll-mt-20 bg-fuel-ink text-slate-300">
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
                className="min-w-0 flex-1 bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-slate-400 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-fuel-blue px-4 text-sm font-semibold text-white transition-colors hover:bg-fuel-blue-dark"
              >
                {footer.submitLabel}
              </button>
            </form>
            <p className="mt-3 text-xs leading-5 text-slate-500">{footer.consent}</p>
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
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-fuel-blue"
                >
                  <SocialIcon label={social.label} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-8 border-t border-white/10 pt-10 lg:flex-row lg:items-end lg:justify-between">
          <p className="max-w-2xl font-fuel text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-white sm:text-5xl">
            {footer.statement}
          </p>
          <a
            href={`//${rootDomain}/${locale}`}
            className="shrink-0 text-sm font-semibold text-fuel-sky transition-colors hover:text-white"
          >
            {name} · MR Group ↗
          </a>
        </div>

        <p className="mt-10 text-xs text-slate-500">{footer.legal}</p>
      </div>
    </footer>
  );
}
