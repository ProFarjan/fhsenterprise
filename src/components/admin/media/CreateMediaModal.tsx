"use client";

import { useActionState, useMemo, useState } from "react";
import { useFormStatus } from "react-dom";
import Modal from "@/components/admin/Modal";
import { ImageIcon, VideoIcon } from "@/components/admin/icons";
import { SITE_OPTIONS } from "@/lib/sites";
import { validateImageFileSync } from "@/lib/imageUpload";
import { youtubeThumbnailUrl } from "@/lib/youtube";
import { MediaType } from "@/generated/prisma/enums";
import { createMediaAction, type MediaFormState } from "@/app/admin/(panel)/media/actions";

const inputClass =
  "w-full rounded-lg border border-neutral-200 bg-white px-3.5 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-blue-400 focus:ring-2 focus:ring-brand-blue/20 focus:outline-none";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-lg bg-brand-blue px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-blue-hover disabled:cursor-not-allowed disabled:opacity-70"
    >
      {pending ? "Adding…" : "Add media"}
    </button>
  );
}

export default function CreateMediaModal({
  onClose,
  onCreated,
}: {
  onClose: () => void;
  onCreated: () => void;
}) {
  const [type, setType] = useState<"IMAGE" | "VIDEO">(MediaType.IMAGE);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageFileError, setImageFileError] = useState<string | null>(null);
  const [youtubeUrl, setYoutubeUrl] = useState("");

  const action = async (prev: MediaFormState, formData: FormData) => {
    const result = await createMediaAction(prev, formData);
    if (result.success) onCreated();
    return result;
  };
  const [state, formAction] = useActionState<MediaFormState, FormData>(action, {});

  const thumbnail = useMemo(() => youtubeThumbnailUrl(youtubeUrl), [youtubeUrl]);

  return (
    <Modal title="Add media" onClose={onClose}>
      <form action={formAction} className="space-y-5">
        {/* Type toggle */}
        <div>
          <span className="mb-1.5 block text-sm font-medium text-neutral-700">Type</span>
          <div className="grid grid-cols-2 gap-2">
            {(
              [
                { value: MediaType.IMAGE, label: "Image", Icon: ImageIcon },
                { value: MediaType.VIDEO, label: "Video (YouTube)", Icon: VideoIcon },
              ] as const
            ).map(({ value, label, Icon }) => (
              <label
                key={value}
                className={`flex cursor-pointer items-center justify-center gap-2 rounded-lg border px-3 py-2.5 text-sm font-medium transition-colors ${
                  type === value
                    ? "border-brand-blue bg-brand-blue-light text-brand-blue"
                    : "border-neutral-200 text-neutral-600 hover:bg-neutral-50"
                }`}
              >
                <input
                  type="radio"
                  name="type"
                  value={value}
                  checked={type === value}
                  onChange={() => setType(value)}
                  className="sr-only"
                />
                <Icon className="h-4 w-4" />
                {label}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="site" className="mb-1.5 block text-sm font-medium text-neutral-700">
            Site
          </label>
          <select id="site" name="site" required className={inputClass} defaultValue="">
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
          <label htmlFor="title" className="mb-1.5 block text-sm font-medium text-neutral-700">
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            required
            maxLength={200}
            className={inputClass}
            placeholder="e.g. Farm harvest day"
          />
        </div>

        {type === MediaType.IMAGE ? (
          <div key="image-field">
            <label htmlFor="image" className="mb-1.5 block text-sm font-medium text-neutral-700">
              Image file
            </label>
            <input
              id="image"
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
              <img
                src={imagePreview}
                alt=""
                className="mt-3 h-36 w-full rounded-lg object-cover"
              />
            )}
          </div>
        ) : (
          <div key="video-field">
            <label htmlFor="youtubeUrl" className="mb-1.5 block text-sm font-medium text-neutral-700">
              YouTube link
            </label>
            <input
              id="youtubeUrl"
              name="youtubeUrl"
              type="url"
              required
              value={youtubeUrl}
              onChange={(e) => setYoutubeUrl(e.target.value)}
              className={inputClass}
              placeholder="https://www.youtube.com/watch?v=…"
            />
            {thumbnail && (
              // eslint-disable-next-line @next/next/no-img-element -- external YouTube CDN thumbnail, not a local asset
              <img src={thumbnail} alt="" className="mt-3 h-36 w-full rounded-lg object-cover" />
            )}
          </div>
        )}

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
