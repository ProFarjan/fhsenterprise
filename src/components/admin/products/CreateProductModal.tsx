"use client";

import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import Modal from "@/components/admin/Modal";
import { validateImageFileSync } from "@/lib/imageUpload";
import { categoriesForSite } from "@/lib/productCategories";
import { createProductAction, type ProductFormState } from "@/app/admin/(panel)/products/actions";
import { SiteKey } from "@/generated/prisma/enums";

const inputClass =
  "w-full rounded-lg border border-neutral-200 bg-white px-3.5 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-500/20 focus:outline-none";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-lg bg-orange-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-500 disabled:cursor-not-allowed disabled:opacity-70"
    >
      {pending ? "Adding…" : "Add product"}
    </button>
  );
}

export default function CreateProductModal({
  sites,
  onClose,
  onCreated,
}: {
  sites: { key: string; label: string }[];
  onClose: () => void;
  onCreated: () => void;
}) {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageFileError, setImageFileError] = useState<string | null>(null);
  const [site, setSite] = useState("");
  const categories = categoriesForSite(site as SiteKey);
  // A product needs a category, and a company with none configured can't take
  // one (the category field is required) — don't offer it as a dead end.
  const productSites = sites.filter((s) => categoriesForSite(s.key as SiteKey).length > 0);

  const action = async (prev: ProductFormState, formData: FormData) => {
    const result = await createProductAction(prev, formData);
    if (result.success) onCreated();
    return result;
  };
  const [state, formAction] = useActionState<ProductFormState, FormData>(action, {});

  return (
    <Modal title="Add product" onClose={onClose} maxWidthClassName="max-w-2xl">
      <form action={formAction} className="space-y-5">
        <div>
          <label htmlFor="product-site" className="mb-1.5 block text-sm font-medium text-neutral-700">
            Company
          </label>
          <select
            id="product-site"
            name="site"
            required
            className={inputClass}
            value={site}
            onChange={(e) => setSite(e.target.value)}
          >
            <option value="" disabled>
              Select a company…
            </option>
            {productSites.map((s) => (
              <option key={s.key} value={s.key}>
                {s.label}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="product-category" className="mb-1.5 block text-sm font-medium text-neutral-700">
              Category
            </label>
            <select
              key={site}
              id="product-category"
              name="category"
              required
              disabled={!site}
              className={inputClass}
              defaultValue=""
            >
              <option value="" disabled>
                {site ? "Select a category…" : "Choose a company first"}
              </option>
              {categories.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.name}
                </option>
              ))}
            </select>
            {site && categories.length === 0 && (
              <p className="mt-1.5 text-xs text-neutral-500">
                This company has no product categories set up.
              </p>
            )}
          </div>
          <div>
            <label htmlFor="product-name" className="mb-1.5 block text-sm font-medium text-neutral-700">
              Name
            </label>
            <input
              id="product-name"
              name="name"
              type="text"
              required
              maxLength={200}
              className={inputClass}
              placeholder="e.g. Dairy Gold"
            />
          </div>
        </div>

        <div>
          <label htmlFor="product-tagline" className="mb-1.5 block text-sm font-medium text-neutral-700">
            Tagline
          </label>
          <input
            id="product-tagline"
            name="tagline"
            type="text"
            required
            maxLength={300}
            className={inputClass}
            placeholder="Short one-line pitch shown on the product card…"
          />
        </div>

        <div>
          <label htmlFor="product-description" className="mb-1.5 block text-sm font-medium text-neutral-700">
            Description
          </label>
          <textarea
            id="product-description"
            name="description"
            required
            rows={3}
            className={inputClass}
            placeholder="Full description shown on the product detail page…"
          />
        </div>

        <div>
          <label htmlFor="product-benefits" className="mb-1.5 block text-sm font-medium text-neutral-700">
            Benefits
            <span className="ml-1 font-normal text-neutral-400">optional — one per line</span>
          </label>
          <textarea
            id="product-benefits"
            name="benefits"
            rows={3}
            className={inputClass}
            placeholder={"Fast-acting\nVet-approved\nEasy to store"}
          />
        </div>

        <div>
          <label htmlFor="product-specs" className="mb-1.5 block text-sm font-medium text-neutral-700">
            Specs
            <span className="ml-1 font-normal text-neutral-400">optional — one &quot;Label: Value&quot; per line</span>
          </label>
          <textarea
            id="product-specs"
            name="specs"
            rows={3}
            className={inputClass}
            placeholder={"Pack size: 500ml\nForm: Liquid"}
          />
        </div>

        <div>
          <label htmlFor="product-image" className="mb-1.5 block text-sm font-medium text-neutral-700">
            Product image
          </label>
          <input
            id="product-image"
            name="image"
            type="file"
            accept="image/jpeg,image/png,image/webp,image/gif"
            required
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
                e.target.value = ""; // reject the file so `required` still blocks submit
                return;
              }
              setImageFileError(null);
              setImagePreview(URL.createObjectURL(file));
            }}
            className="block w-full text-sm text-neutral-600 file:mr-3 file:rounded-lg file:border-0 file:bg-orange-50 file:px-3.5 file:py-2 file:text-sm file:font-medium file:text-orange-700 hover:file:bg-orange-100"
          />
          <p className="mt-1.5 text-xs text-neutral-500">JPEG, PNG, WEBP, or GIF. Max 5MB.</p>
          {imageFileError && (
            <p role="alert" className="mt-1.5 text-xs text-red-600">
              {imageFileError}
            </p>
          )}
          {imagePreview && (
            // eslint-disable-next-line @next/next/no-img-element -- local object URL preview, not a served asset
            <img src={imagePreview} alt="" className="mt-3 h-36 w-full rounded-lg object-cover" />
          )}
        </div>

        <label className="flex items-center gap-2 text-sm text-neutral-700">
          <input
            type="checkbox"
            name="isPublished"
            defaultChecked
            className="h-4 w-4 rounded border-neutral-300 text-orange-600 focus:ring-orange-500"
          />
          Published <span className="text-neutral-400">(will apply once product pages go live)</span>
        </label>

        {state.error && (
          <p role="alert" className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">
            {state.error}
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
