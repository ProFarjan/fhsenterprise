import { LocationIcon } from "@/components/admin/icons";
import DeleteItemButton from "./DeleteItemButton";
import { deleteEventAction } from "@/app/admin/(panel)/media/actions";

export type EventCardData = {
  id: number;
  title: string;
  description: string;
  location: string;
  site: string;
  siteLabel: string;
  coverImageUrl: string;
  dateLabel: string;
};

export default function EventCard({ item }: { item: EventCardData }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
      <div className="relative aspect-[16/9] bg-neutral-100">
        {/* eslint-disable-next-line @next/next/no-img-element -- served from our own byte-serving route, not an optimizable local asset */}
        <img src={item.coverImageUrl} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
        <span className="absolute top-2 left-2 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-medium text-white">
          {item.siteLabel}
        </span>
        <div className="absolute top-2 right-2 opacity-0 transition-opacity group-hover:opacity-100">
          <DeleteItemButton id={item.id} itemLabel={item.title} action={deleteEventAction} />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-3.5">
        <p className="text-xs font-semibold tracking-wide text-brand-blue uppercase">
          {item.dateLabel}
        </p>
        <p className="text-sm font-semibold text-neutral-900">{item.title}</p>
        <p className="flex items-center gap-1 text-xs text-neutral-500">
          <LocationIcon className="h-3.5 w-3.5 shrink-0" />
          {item.location}
        </p>
        <p className="line-clamp-2 text-xs text-neutral-500">{item.description}</p>
      </div>
    </div>
  );
}
