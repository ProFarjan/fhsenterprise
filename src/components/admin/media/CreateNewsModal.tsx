"use client";

import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import Modal from "@/components/admin/Modal";
import { SITE_OPTIONS } from "@/lib/sites";
import { validateImageFileSync } from "@/lib/imageUpload";
import { createNewsAction, type NewsFormState } from "@/app/admin/(panel)/media/actions";

const inputClass =
  "w-full rounded-lg border border-neutral-200 bg-white px-3.5 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-500/20 focus:outline-none";

function todayIso() {
  return new Date().toLocaleDateString("en-CA"); // YYYY-MM-DD
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-lg bg-orange-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-500 disabled:cursor-not-allowed disabled:opacity-70"
    >
      {pending ? "Publishing…" : "Publish news"}
    </button>
  );
}

export default function CreateNewsModal({
  onClose,
  onCreated,
}: {
  onClose: () => void;
  onCreated: () => void;
}) {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageFileError, setImageFileError] = useState<string | null>(null);

  const action = async (prev: NewsFormState, formData: FormData) => {
    const result = await createNewsAction(prev, formData);
    if (result.success) onCreated();
    return result;
  };
  const [state, formAction] = useActionState<NewsFormState, FormData>(action, {});

  return (
    <Modal title="Add news" onClose={onClose}>
      <form action={formAction} className="space-y-5">
        <div>
          <label htmlFor="news-site" className="mb-1.5 block text-sm font-medium text-neutral-700">
            Site
          </label>
          <select id="news-site" name="site" required className={inputClass} defaultValue="">
            <option value="" disabled>
              Select a site…
            </option>
            {SITE_OPTIONS.map((o) => (
              <option key={o.key} value={o.key}>
                {o.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="news-title" className="mb-1.5 block text-sm font-medium text-neutral-700">
            Title
          </label>
          <input
            id="news-title"
            name="title"
            type="text"
            required
            maxLength={200}
            className={inputClass}
            placeholder="e.g. MR Feed opens new mill"
          />
        </div>

        <div>
          <label htmlFor="news-excerpt" className="mb-1.5 block text-sm font-medium text-neutral-700">
            Excerpt
          </label>
          <textarea
            id="news-excerpt"
            name="excerpt"
            required
            rows={3}
            className={inputClass}
            placeholder="Short summary shown in the news list…"
          />
        </div>

        <div>
          <label htmlFor="news-date" className="mb-1.5 block text-sm font-medium text-neutral-700">
            Date
          </label>
          <input
            id="news-date"
            name="date"
            type="date"
            required
            defaultValue={todayIso()}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="news-cover" className="mb-1.5 block text-sm font-medium text-neutral-700">
            Cover image
          </label>
          <input
            id="news-cover"
            name="coverImage"
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
