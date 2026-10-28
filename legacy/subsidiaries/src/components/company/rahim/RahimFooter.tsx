import SocialIcon from "@/components/icons/SocialIcon";
import type { AppLocale } from "@/i18n/routing";
import type { RahimFooterContent } from "@/types/rahim";
import type { NavItem } from "@/types/content";

function MoleculeMark() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
      <circle cx="12" cy="6" r="2" />
      <circle cx="6" cy="17" r="2" />
      <circle cx="18" cy="17" r="2" />
      <path d="M11 7.7 7 15.3M13 7.7l4 7.6M8 17h8" />
    </svg>
  );
}

// Bespoke slate footer for Rahim Enterprise: brand blurb + explore/contact/follow
// columns above the legal line, with a thin cyan top edge. Modelled on the
// sibling company footers.
export default function RahimFooter({
  name,
  footer,
  nav,
  locale,
  rootDomain,
}: {
  name: string;
  footer: RahimFooterContent;
  nav: NavItem[];
  locale: AppLocale;
  rootDomain: string;
}) {
  const resolveHref = (href: string) => (href.startsWith("#") ? `/${locale}${href}` : `/${locale}${href === "/" ? "" : href}`);
  const exploreLinks = nav.filter((item) => item.href !== "/");

  return (
    <footer className="mt-auto border-t-4 border-rahim-cyan bg-rahim-slate text-white/65">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 text-rahim-ice">
              <MoleculeMark />
              <span className="font-rahim text-lg font-bold text-white">{name}</span>
            </div>
            <p className="mt-4 text-sm leading-6 text-white/55">{footer.blurb}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">{footer.exploreHeading}</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {exploreLinks.map((item) => (
                <li key={item.href}>
                  <a href={resolveHref(item.href)} className="transition-colors hover:text-rahim-ice">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">{footer.contactHeading}</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href={`mailto:${footer.email}`} className="transition-colors hover:text-rahim-ice">
                  {footer.email}
                </a>
              </li>
              <li>{footer.phone}</li>
            </ul>
            <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-white">{footer.addressHeading}</h3>
            <address className="mt-3 space-y-1 text-sm not-italic">
              {footer.address.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </address>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">{footer.followHeading}</h3>
            <div className="mt-4 flex gap-3">
              {footer.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-rahim-cyan hover:text-white"
                >
                  <SocialIcon label={social.label} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/40">{footer.legal}</p>
          <a
            href={`//${rootDomain}/${locale}`}
            className="text-sm font-semibold text-rahim-ice transition-colors hover:text-white"
          >
            {name} · MR Group ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
