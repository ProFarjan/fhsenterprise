import type { RahimContent } from "@/types/rahim";
import type { AppLocale } from "@/i18n/routing";

// Closing call-to-action band in cyan, linking to the contact page.
export default function RahimCta({
  cta,
  buttonHref = "/contact",
  locale,
}: {
  cta: RahimContent["cta"];
  buttonHref?: string;
  locale: AppLocale;
}) {
  return (
    <section className="bg-rahim-cyan">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-6 py-16 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <h2 className="font-rahim text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">{cta.heading}</h2>
          <p className="mt-4 text-lg leading-8 text-white/90">{cta.body}</p>
        </div>
        <a
          href={`/${locale}${buttonHref}`}
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-rahim-slate px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-rahim-slate-light"
        >
          {cta.button}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
