"use client";

import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import Modal from "@/components/admin/Modal";
import { validateImageFileSync } from "@/lib/imageUpload";
import { categoriesForSite } from "@/lib/productCategories";
import { updateProductAction, type ProductFormState } from "@/app/admin/(panel)/products/actions";
import type { ProductCardData } from "./ProductCard";

const inputClass =
  "w-full rounded-lg border border-neutral-200 bg-white px-3.5 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-blue-400 focus:ring-2 focus:ring-brand-blue/20 focus:outline-none";

function benefitsToText(benefits: string[]): string {
  return benefits.join("\n");
}

function specsToText(specs: { label: string; value: string }[]): string {
  return specs.map((s) => `${s.label}: ${s.value}`).join("\n");
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-lg bg-brand-blue px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-blue-hover disabled:cursor-not-allowed disabled:opacity-70"
    >
      {pending ? "Saving…" : "Save changes"}
    </button>
  );
}

import { SiteKey } from "@/generated/prisma/enums";

export default function EditProductModal({
  product,
  onClose,
  onSaved,
}: {
  product: ProductCardData;
  onClose: () => void;
  onSaved: () => void;
}) {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageFileError, setImageFileError] = useState<string | null>(null);
  const categories = categoriesForSite(product.site as SiteKey);

  const action = async (prev: ProductFormState, formData: FormData) => {
    const result = await updateProductAction(prev, formData);
    if (result.success) onSaved();
    return result;
  };
  const [state, formAction] = useActionState<ProductFormState, FormData>(action, {});

  return (
    <Modal title={`Edit ${product.name}`} onClose={onClose} maxWidthClassName="max-w-2xl">
      <form action={formAction} className="space-y-5">
        <input type="hidden" name="id" value={product.id} />

        <div>
          <span className="mb-1.5 block text-sm font-medium text-neutral-700">Company</span>
          <p className="rounded-lg bg-neutral-50 px-3.5 py-2.5 text-sm text-neutral-600">
            {product.siteLabel}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="edit-category" className="mb-1.5 block text-sm font-medium text-neutral-700">
              Category
            </label>
            <select
              id="edit-category"
              name="category"
              required
              defaultValue={product.category}
              className={inputClass}
            >
              {/* Covers a category value saved before categories were locked
                  to a fixed list per company — keeps it selected instead of
                  silently switching to whichever option renders first. */}
              {!categories.some((c) => c.slug === product.category) && (
                <option value={product.category}>{product.categoryLabel} (existing)</option>
              )}
              {categories.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="edit-name" className="mb-1.5 block text-sm font-medium text-neutral-700">
              Name
            </label>
            <input
              id="edit-name"
              name="name"
              type="text"
              required
              maxLength={200}
              defaultValue={product.name}
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label htmlFor="edit-tagline" className="mb-1.5 block text-sm font-medium text-neutral-700">
            Tagline
          </label>
          <input
            id="edit-tagline"
            name="tagline"
            type="text"
            required
            maxLength={300}
            defaultValue={product.tagline}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="edit-description" className="mb-1.5 block text-sm font-medium text-neutral-700">
            Description
          </label>
          <textarea
            id="edit-description"
            name="description"
            required
            rows={3}
            defaultValue={product.description}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="edit-benefits" className="mb-1.5 block text-sm font-medium text-neutral-700">
            Benefits
            <span className="ml-1 font-normal text-neutral-400">optional — one per line</span>
          </label>
          <textarea
            id="edit-benefits"
            name="benefits"
            rows={3}
            defaultValue={benefitsToText(product.benefits)}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="edit-specs" className="mb-1.5 block text-sm font-medium text-neutral-700">
            Specs
            <span className="ml-1 font-normal text-neutral-400">
              optional — one &quot;Label: Value&quot; per line
            </span>
          </label>
          <textarea
            id="edit-specs"
            name="specs"
            rows={3}
            defaultValue={specsToText(product.specs)}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="edit-image" className="mb-1.5 block text-sm font-medium text-neutral-700">
            Product image
          </label>
          <div className="flex items-center gap-3">
            <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50">
              {/* eslint-disable-next-line @next/next/no-img-element -- local object URL preview or our own byte-serving route, not an optimizable local asset */}
              <img
                src={imagePreview ?? product.imageUrl}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex-1">
              <input
                id="edit-image"
                name="image"
                type="file"
                accept="image/jpeg,image/png,image/webp,image/gif"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (!file) {
                    setImageFileError(null);
                    setImagePreview(null);
                    return;
                  }
                  const error = validateImageFileSync(file);
                  if (error) {
                    setImageFileError(error);
                    setImagePreview(null);
                    e.target.value = "";
                    return;
                  }
                  setImageFileError(null);
                  setImagePreview(URL.createObjectURL(file));
                }}
                className="block w-full text-sm text-neutral-600 file:mr-3 file:rounded-lg file:border-0 file:bg-brand-blue-light file:px-3 file:py-1.5 file:text-xs file:font-medium file:text-brand-blue hover:file:bg-blue-100"
              />
              <p className="mt-1 text-xs text-neutral-500">
                Leave blank to keep the current image. JPEG, PNG, WEBP, or GIF. Max 5MB.
              </p>
            </div>
          </div>
        </div>

        <label className="flex items-center gap-2 text-sm text-neutral-700">
          <input
            type="checkbox"
            name="isPublished"
            defaultChecked={product.isPublished}
            className="h-4 w-4 rounded border-neutral-300 text-brand-blue focus:ring-brand-blue"
          />
          Published <span className="text-neutral-400">(will apply once product pages go live)</span>
        </label>

        {(imageFileError || state.error) && (
          <p role="alert" className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">
            {imageFileError ?? state.error}
          </p>
        )}

        <div className="flex justify-end gap-3 border-t border-neutral-100 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg px-4 py-2.5 text-sm font-medium text-neutral-600 hover:bg-neutral-100"
          >
            Cancel
          </button>
          <SubmitButton />
        </div>
      </form>
    </Modal>
  );
}
