import { useTranslations } from "next-intl";
import PageHeader from "@/components/layout/PageHeader";
import MediaTabs from "@/components/sections/media/MediaTabs";

export default function MediaLayout({ children }: { children: React.ReactNode }) {
  const t = useTranslations("pageHeaders.media");
  return (
    <div className="flex-1 bg-white">
      <PageHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
        image="/images/events/summit.jpg"
      />
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <MediaTabs />
      </div>
      <div className="pb-24">{children}</div>
    </div>
  );
}
