import { useTranslations } from "next-intl";
import PageHeader from "@/components/layout/PageHeader";
import SustainabilityTabs from "@/components/sections/sustainability/SustainabilityTabs";

export default function SustainabilityLayout({ children }: { children: React.ReactNode }) {
  const t = useTranslations("pageHeaders.sustainability");
  return (
    <div className="flex-1 bg-white">
      <PageHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
        image="/images/sustainability/environment.jpg"
      />
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <SustainabilityTabs />
      </div>
      <div className="pb-24">{children}</div>
    </div>
  );
}
