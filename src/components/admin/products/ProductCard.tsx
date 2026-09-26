import DeleteItemButton from "@/components/admin/media/DeleteItemButton";
import { EditIcon, EyeIcon } from "@/components/admin/icons";
import { deleteProductAction } from "@/app/admin/(panel)/products/actions";
import type { ProductSpec } from "@/lib/productJson";

export type ProductCardData = {
  id: number;
  site: string;
  siteLabel: string;
  slug: string;
  category: string;
  categoryLabel: string;
  name: string;
  tagline: string;
  description: string;
  benefits: string[];
  specs: ProductSpec[];
  imageUrl: string;
  isPublished: boolean;
  createdAtLabel: string;
};

export default function ProductCard({
  product,
  onView,
  onEdit,
}: {
  product: ProductCardData;
  onView: () => void;
  onEdit: () => void;
}) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
      <div className="relative aspect-video bg-neutral-100">
        {/* eslint-disable-next-line @next/next/no-img-element -- served from our own byte-serving route, not an optimizable local asset */}
        <img src={product.imageUrl} alt="" className="h-full w-full object-cover" />
        <span className="absolute top-2 left-2 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-medium text-white">
          {product.siteLabel}
        </span>
        <span
          className={`absolute top-2 right-2 rounded-full px-2.5 py-1 text-[11px] font-medium ${
            product.isPublished ? "bg-green-600/90 text-white" : "bg-neutral-600/80 text-white"
          }`}
        >
          {product.isPublished ? "Published" : "Hidden"}
        </span>
        <div className="absolute bottom-2 right-2 flex gap-1.5 opacity-0 transition-opacity group-hover:opacity-100">
          <button
            type="button"
            onClick={onView}
            aria-label="View"
            className="rounded-lg bg-white/90 p-1.5 text-neutral-500 shadow-sm transition-colors hover:bg-neutral-100 hover:text-neutral-700"
          >
            <EyeIcon className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={onEdit}
            aria-label="Edit"
            className="rounded-lg bg-white/90 p-1.5 text-neutral-500 shadow-sm transition-colors hover:bg-orange-50 hover:text-orange-600"
          >
            <EditIcon className="h-4 w-4" />
          </button>
          <DeleteItemButton id={product.id} itemLabel={product.name} action={deleteProductAction} />
        </div>
      </div>
      <div className="p-3.5">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-orange-600">
          {product.categoryLabel}
        </p>
        <p className="mt-0.5 truncate text-sm font-medium text-neutral-800">{product.name}</p>
        <p className="mt-0.5 truncate text-xs text-neutral-500">{product.tagline}</p>
        <p className="mt-1.5 text-xs text-neutral-400">{product.createdAtLabel}</p>
      </div>
    </div>
  );
}
