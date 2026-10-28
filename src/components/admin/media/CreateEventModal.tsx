"use client";

import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import Modal from "@/components/admin/Modal";
import { SITE_OPTIONS } from "@/lib/sites";
import { validateImageFileSync } from "@/lib/imageUpload";
import { createEventAction, type EventFormState } from "@/app/admin/(panel)/media/actions";

const inputClass =
  "w-full rounded-lg border border-neutral-200 bg-white px-3.5 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-blue-400 focus:ring-2 focus:ring-brand-blue/20 focus:outline-none";

function todayIso() {
  return new Date().toLocaleDateString("en-CA"); // YYYY-MM-DD
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-lg bg-brand-blue px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-blue-hover disabled:cursor-not-allowed disabled:opacity-70"
    >
      {pending ? "Publishing…" : "Publish event"}
    </button>
  );
}

export default function CreateEventModal({
  onClose,
  onCreated,
}: {
  onClose: () => void;
  onCreated: () => void;
}) {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageFileError, setImageFileError] = useState<string | null>(null);

  const action = async (prev: EventFormState, formData: FormData) => {
    const result = await createEventAction(prev, formData);
    if (result.success) onCreated();
    return result;
  };
  const [state, formAction] = useActionState<EventFormState, FormData>(action, {});

  return (
    <Modal title="Add event" onClose={onClose}>
      <form action={formAction} className="space-y-5">
        <div>
          <label htmlFor="event-site" className="mb-1.5 block text-sm font-medium text-neutral-700">
            Site
          </label>
          <select id="event-site" name="site" required className={inputClass} defaultValue="">
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
          <label htmlFor="event-title" className="mb-1.5 block text-sm font-medium text-neutral-700">
            Title
          </label>
          <input
            id="event-title"
            name="title"
            type="text"
            required
            maxLength={200}
            className={inputClass}
            placeholder="e.g. FHS Enterprise Annual Meeting"
          />
        </div>

        <div>
          <label htmlFor="event-location" className="mb-1.5 block text-sm font-medium text-neutral-700">
            Location
          </label>
          <input
            id="event-location"
            name="location"
            type="text"
            required
            maxLength={200}
            className={inputClass}
            placeholder="e.g. Dhaka, Bangladesh"
          />
        </div>

        <div>
          <label htmlFor="event-description" className="mb-1.5 block text-sm font-medium text-neutral-700">
            Description
          </label>
          <textarea
            id="event-description"
            name="description"
            required
            rows={3}
            className={inputClass}
            placeholder="Short description shown on the event card…"
          />
        </div>

        <div>
          <label htmlFor="event-date" className="mb-1.5 block text-sm font-medium text-neutral-700">
            Date
          </label>
          <input
            id="event-date"
            name="date"
            type="date"
            required
            defaultValue={todayIso()}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="event-cover" className="mb-1.5 block text-sm font-medium text-neutral-700">
            Cover image
          </label>
          <input
            id="event-cover"
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
            className="block w-full text-sm text-neutral-600 file:mr-3 file:rounded-lg file:border-0 file:bg-brand-blue-light file:px-3.5 file:py-2 file:text-sm file:font-medium file:text-brand-blue hover:file:bg-blue-100"
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
