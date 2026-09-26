import { PlayIcon } from "@/components/admin/icons";
import DeleteItemButton from "./DeleteItemButton";
import { deleteMediaAction } from "@/app/admin/(panel)/media/actions";

export type MediaCardData = {
  id: number;
  type: "IMAGE" | "VIDEO";
  title: string;
  site: string;
  siteLabel: string;
  thumbnailUrl: string;
  createdAtLabel: string;
};

export default function MediaCard({ item }: { item: MediaCardData }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
      <div className="relative aspect-video bg-neutral-100">
        {/* eslint-disable-next-line @next/next/no-img-element -- served from our own byte-serving route or the YouTube CDN, not an optimizable local asset */}
        <img src={item.thumbnailUrl} alt="" className="h-full w-full object-cover" />
        {item.type === "VIDEO" && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/95 shadow-lg">
              <PlayIcon className="ml-0.5 h-5 w-5 text-orange-600" />
            </div>
          </div>
        )}
        <span className="absolute top-2 left-2 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-medium text-white">
          {item.siteLabel}
        </span>
        <div className="absolute top-2 right-2 opacity-0 transition-opacity group-hover:opacity-100">
          <DeleteItemButton id={item.id} itemLabel={item.title} action={deleteMediaAction} />
        </div>
      </div>
      <div className="p-3.5">
        <p className="truncate text-sm font-medium text-neutral-800">{item.title}</p>
        <p className="mt-0.5 text-xs text-neutral-400">{item.createdAtLabel}</p>
      </div>
    </div>
  );
}
