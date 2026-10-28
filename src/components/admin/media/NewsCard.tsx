import DeleteItemButton from "./DeleteItemButton";
import { deleteNewsAction } from "@/app/admin/(panel)/media/actions";

export type NewsCardData = {
  id: number;
  title: string;
  excerpt: string;
  site: string;
  siteLabel: string;
  coverImageUrl: string;
  dateLabel: string;
};

export default function NewsCard({ item }: { item: NewsCardData }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
      <div className="relative aspect-[16/9] bg-neutral-100">
        {/* eslint-disable-next-line @next/next/no-img-element -- served from our own byte-serving route, not an optimizable local asset */}
        <img src={item.coverImageUrl} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
        <span className="absolute top-2 left-2 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-medium text-white">
          {item.siteLabel}
        </span>
        <div className="absolute top-2 right-2 opacity-0 transition-opacity group-hover:opacity-100">
          <DeleteItemButton id={item.id} itemLabel={item.title} action={deleteNewsAction} />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-3.5">
        <p className="text-xs font-semibold tracking-wide text-orange-600 uppercase">
          {item.dateLabel}
        </p>
        <p className="text-sm font-semibold text-neutral-900">{item.title}</p>
        <p className="line-clamp-2 text-xs text-neutral-500">{item.excerpt}</p>
      </div>
    </div>
  );
}
