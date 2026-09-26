import Modal from "@/components/admin/Modal";
import type { ProductCardData } from "./ProductCard";

export default function ViewProductModal({
  product,
  onClose,
}: {
  product: ProductCardData;
  onClose: () => void;
}) {
  return (
    <Modal title={product.name} onClose={onClose} maxWidthClassName="max-w-2xl">
      <div className="space-y-5">
        {/* eslint-disable-next-line @next/next/no-img-element -- served from our own byte-serving route, not an optimizable local asset */}
        <img src={product.imageUrl} alt="" className="h-56 w-full rounded-lg object-cover" />

        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[11px] font-medium text-neutral-600">
            {product.siteLabel}
          </span>
          <span className="rounded-full bg-orange-50 px-2.5 py-1 text-[11px] font-semibold text-orange-700">
            {product.categoryLabel}
          </span>
          <span
            className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${
              product.isPublished ? "bg-green-50 text-green-700" : "bg-neutral-100 text-neutral-600"
            }`}
          >
            {product.isPublished ? "Published" : "Hidden"}
          </span>
          <span className="text-[11px] text-neutral-400">/{product.slug}</span>
        </div>

        <div>
          <p className="text-sm font-medium text-neutral-500">{product.tagline}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-neutral-800">Description</h3>
          <p className="mt-1.5 text-sm leading-6 whitespace-pre-line text-neutral-600">
            {product.description}
          </p>
        </div>

        {product.benefits.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold text-neutral-800">Benefits</h3>
            <ul className="mt-1.5 list-inside list-disc space-y-1 text-sm text-neutral-600">
              {product.benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </div>
        )}

        {product.specs.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold text-neutral-800">Specs</h3>
            <dl className="mt-1.5 divide-y divide-neutral-100 rounded-lg border border-neutral-100">
              {product.specs.map((spec) => (
                <div key={spec.label} className="flex justify-between gap-4 px-3 py-2 text-sm">
                  <dt className="text-neutral-500">{spec.label}</dt>
                  <dd className="text-right font-medium text-neutral-800">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}

        <p className="text-xs text-neutral-400">Added {product.createdAtLabel}</p>

        <div className="flex justify-end border-t border-neutral-100 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg px-4 py-2.5 text-sm font-medium text-neutral-600 hover:bg-neutral-100"
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
}
