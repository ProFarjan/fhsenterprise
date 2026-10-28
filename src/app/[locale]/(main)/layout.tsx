import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { setRequestLocale } from "next-intl/server";

// Header is `fixed` so it can float transparently over the homepage's
// full-bleed hero video. Pages without a hero (about/media/etc.) will need
// top padding on their first section — e.g. `pt-20 sm:pt-24` — to clear the
// navbar height.
function MainLayoutContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <Header />
      {/* tabIndex={-1}: the skip link in <Header> moves focus here. */}
      <main id="main" tabIndex={-1} className="flex flex-1 flex-col focus:outline-none">
        {children}
      </main>
      <Footer />
    </div>
  );
}

// next-intl needs the request locale set before any of its APIs run, and Next
// renders layouts and pages in parallel — so each one sets it itself. That is
// also what lets the page be prerendered instead of rendered on every request.
export default async function MainLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <MainLayoutContent>{children}</MainLayoutContent>;
}
