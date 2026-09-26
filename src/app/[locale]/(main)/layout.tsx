import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Header is `fixed` so it can float transparently over the homepage's
// full-bleed hero video. Pages without a hero (about/media/etc.) will need
// top padding on their first section — e.g. `pt-20 sm:pt-24` — to clear the
// navbar height.
export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
