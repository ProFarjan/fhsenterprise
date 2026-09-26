"use client";

import { useActionState, useState, useTransition } from "react";
import { useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";
import Modal from "@/components/admin/Modal";
import { ChevronDownIcon, ChevronUpIcon, CloseIcon } from "@/components/admin/icons";
import { validateImageFileSync } from "@/lib/imageUpload";
import {
  addHeroImageAction,
  removeCompanyImageAction,
  removeHeroImageAction,
  reorderHeroImagesAction,
  updateCompanyAction,
  updateHeroImageAction,
  type CompanyFormState,
} from "@/app/admin/(panel)/companies/actions";
import type { CompanyCardData, CompanyHeroImageData } from "./CompanyCard";

const inputClass =
  "w-full rounded-lg border border-neutral-200 bg-white px-3.5 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-500/20 focus:outline-none";

const smallInputClass =
  "w-full rounded-md border border-neutral-200 bg-white px-2.5 py-1.5 text-xs text-neutral-900 placeholder:text-neutral-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-500/20 focus:outline-none";

type Locale = "en" | "bn";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-lg bg-orange-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-500 disabled:cursor-not-allowed disabled:opacity-70"
    >
      {pending ? "Saving…" : "Save changes"}
    </button>
  );
}

// A single-image field (logo, banner) with an immediate "Remove" action —
// separate from the main "Save changes" submit, since clearing an existing
// image shouldn't require also touching every other field on the form.
function ImageField({
  label,
  name,
  companyId,
  initialUrl,
  hint,
  onError,
  onChanged,
}: {
  label: string;
  name: "logo" | "banner";
  companyId: number;
  initialUrl: string | null;
  hint: string;
  onError: (message: string | null) => void;
  onChanged: () => void;
}) {
  const [currentUrl, setCurrentUrl] = useState(initialUrl);
  const [preview, setPreview] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  function handleRemove() {
    startTransition(async () => {
      const formData = new FormData();
      formData.set("id", String(companyId));
      formData.set("field", name);
      await removeCompanyImageAction(formData);
      setCurrentUrl(null);
      setPreview(null);
      onChanged();
    });
  }

  return (
    <div>
      <label htmlFor={`company-${name}`} className="mb-1.5 block text-sm font-medium text-neutral-700">
        {label}
      </label>
      <div className="flex items-center gap-3">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50">
          {preview || currentUrl ? (
            // eslint-disable-next-line @next/next/no-img-element -- local object URL preview or our own byte-serving route, not an optimizable local asset
            <img src={preview ?? currentUrl ?? ""} alt="" className="h-full w-full object-cover" />
          ) : (
            <span className="text-[10px] text-neutral-400">None</span>
          )}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <input
              id={`company-${name}`}
              name={name}
              type="file"
              accept="image/jpeg,image/png,image/webp,image/gif"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (!file) {
                  onError(null);
                  setPreview(null);
                  return;
                }
                const error = validateImageFileSync(file);
                if (error) {
                  onError(error);
                  setPreview(null);
                  e.target.value = "";
                  return;
                }
                onError(null);
                setPreview(URL.createObjectURL(file));
              }}
              className="block flex-1 text-sm text-neutral-600 file:mr-3 file:rounded-lg file:border-0 file:bg-orange-50 file:px-3 file:py-1.5 file:text-xs file:font-medium file:text-orange-700 hover:file:bg-orange-100"
            />
            {currentUrl && !preview && (
              <button
                type="button"
                onClick={handleRemove}
                disabled={isPending}
                className="shrink-0 text-xs font-medium text-red-600 hover:text-red-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                Remove
              </button>
            )}
          </div>
          <p className="mt-1 text-xs text-neutral-500">{hint}</p>
        </div>
      </div>
    </div>
  );
}

// One hero slide's image + its own headline/tagline. Image changes
// (remove/reorder) are reported up to HeroGallery; the headline/tagline text
// is saved independently via its own "Save text" button, since a slide's
// copy can be edited any number of times without re-uploading the image.
function HeroSlideCard({
  slide,
  index,
  total,
  disabled,
  onMove,
  onRemove,
}: {
  slide: CompanyHeroImageData;
  index: number;
  total: number;
  disabled: boolean;
  onMove: (index: number, direction: -1 | 1) => void;
  onRemove: (id: number) => void;
}) {
  const [headlineEn, setHeadlineEn] = useState(slide.headlineEn);
  const [headlineBn, setHeadlineBn] = useState(slide.headlineBn);
  const [taglineEn, setTaglineEn] = useState(slide.taglineEn);
  const [taglineBn, setTaglineBn] = useState(slide.taglineBn);
  const [savedValues, setSavedValues] = useState({ headlineEn, headlineBn, taglineEn, taglineBn });
  const [isPending, startTransition] = useTransition();
  const [justSaved, setJustSaved] = useState(false);

  const dirty =
    headlineEn !== savedValues.headlineEn ||
    headlineBn !== savedValues.headlineBn ||
    taglineEn !== savedValues.taglineEn ||
    taglineBn !== savedValues.taglineBn;

  function handleSaveText() {
    startTransition(async () => {
      const formData = new FormData();
      formData.set("id", String(slide.id));
      formData.set("headlineEn", headlineEn);
      formData.set("headlineBn", headlineBn);
      formData.set("taglineEn", taglineEn);
      formData.set("taglineBn", taglineBn);
      await updateHeroImageAction({}, formData);
      setSavedValues({ headlineEn, headlineBn, taglineEn, taglineBn });
      setJustSaved(true);
      setTimeout(() => setJustSaved(false), 1500);
    });
  }

  return (
    <div className="rounded-lg border border-neutral-200 p-3">
      <div className="flex items-start gap-3">
        <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-neutral-200">
          {/* eslint-disable-next-line @next/next/no-img-element -- served from our own byte-serving route, not an optimizable local asset */}
          <img src={slide.url} alt="" className="h-full w-full object-cover" />
        </div>

        <div className="flex-1 space-y-2">
          <div className="grid grid-cols-2 gap-2">
            <input
              value={headlineEn}
              onChange={(e) => setHeadlineEn(e.target.value)}
              placeholder="Headline (EN)"
              maxLength={255}
              className={smallInputClass}
            />
            <input
              value={headlineBn}
              onChange={(e) => setHeadlineBn(e.target.value)}
              placeholder="Headline (BN)"
              maxLength={255}
              className={smallInputClass}
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <textarea
              value={taglineEn}
              onChange={(e) => setTaglineEn(e.target.value)}
              placeholder="Tagline (EN)"
              rows={2}
              className={smallInputClass}
            />
            <textarea
              value={taglineBn}
              onChange={(e) => setTaglineBn(e.target.value)}
              placeholder="Tagline (BN)"
              rows={2}
              className={smallInputClass}
            />
          </div>
        </div>

        <div className="flex shrink-0 flex-col items-center gap-1">
          <button
            type="button"
            onClick={() => onMove(index, -1)}
            disabled={disabled || index === 0}
            aria-label="Move earlier"
            className="rounded-md border border-neutral-200 p-1 text-neutral-500 hover:bg-neutral-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronUpIcon className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            onClick={() => onMove(index, 1)}
            disabled={disabled || index === total - 1}
            aria-label="Move later"
            className="rounded-md border border-neutral-200 p-1 text-neutral-500 hover:bg-neutral-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronDownIcon className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            onClick={() => onRemove(slide.id)}
            disabled={disabled}
            aria-label="Remove hero image"
            className="rounded-md border border-neutral-200 p-1 text-red-500 hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <CloseIcon className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      <div className="mt-2 flex justify-end">
        <button
          type="button"
          onClick={handleSaveText}
          disabled={!dirty || isPending}
          className="rounded-md px-2.5 py-1 text-xs font-medium text-orange-700 hover:bg-orange-50 disabled:cursor-not-allowed disabled:text-neutral-400 disabled:hover:bg-transparent"
        >
          {isPending ? "Saving…" : justSaved ? "Saved" : "Save text"}
        </button>
      </div>
    </div>
  );
}

// A company's hero gallery — several subsidiaries rotate through multiple
// hero slides on their subdomain site, each with its own headline/tagline —
// so this manages a reorderable list of slides rather than a single field.
// Adding/removing/reordering an image takes effect immediately, independent
// of the main "Save changes" button; each slide's text saves independently
// via its own button (see HeroSlideCard).
function HeroGallery({
  companyId,
  initialImages,
  onError,
  onChanged,
}: {
  companyId: number;
  initialImages: CompanyHeroImageData[];
  onError: (message: string | null) => void;
  onChanged: () => void;
}) {
  const [images, setImages] = useState(initialImages);
  const [isPending, startTransition] = useTransition();

  function addImage(file: File) {
    const error = validateImageFileSync(file);
    if (error) {
      onError(error);
      return;
    }
    onError(null);
    startTransition(async () => {
      const formData = new FormData();
      formData.set("companyId", String(companyId));
      formData.set("image", file);
      const result = await addHeroImageAction(formData);
      if (result.error) {
        onError(result.error);
        return;
      }
      if (result.id) {
        setImages((prev) => [
          ...prev,
          {
            id: result.id!,
            url: `/api/companies/hero-images/${result.id}`,
            headlineEn: "",
            headlineBn: "",
            taglineEn: "",
            taglineBn: "",
          },
        ]);
        onChanged();
      }
    });
  }

  function removeImage(id: number) {
    startTransition(async () => {
      const formData = new FormData();
      formData.set("id", String(id));
      await removeHeroImageAction(formData);
      setImages((prev) => prev.filter((img) => img.id !== id));
      onChanged();
    });
  }

  function move(index: number, direction: -1 | 1) {
    const target = index + direction;
    if (target < 0 || target >= images.length) return;
    const next = [...images];
    [next[index], next[target]] = [next[target], next[index]];
    setImages(next);
    startTransition(async () => {
      await reorderHeroImagesAction(next.map((img) => img.id));
      onChanged();
    });
  }

  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-neutral-700">
        Hero gallery
        <span className="ml-1 font-normal text-neutral-400">
          optional — each slide has its own headline and tagline
        </span>
      </label>

      {images.length > 0 && (
        <div className="mb-3 space-y-2">
          {images.map((img, index) => (
            <HeroSlideCard
              key={img.id}
              slide={img}
              index={index}
              total={images.length}
              disabled={isPending}
              onMove={move}
              onRemove={removeImage}
            />
          ))}
        </div>
      )}

      <input
        type="file"
        accept="image/jpeg,image/png,image/webp,image/gif"
        disabled={isPending}
        onChange={(e) => {
          const file = e.target.files?.[0];
          e.target.value = "";
          if (file) addImage(file);
        }}
        className="block w-full text-sm text-neutral-600 file:mr-3 file:rounded-lg file:border-0 file:bg-orange-50 file:px-3 file:py-1.5 file:text-xs file:font-medium file:text-orange-700 hover:file:bg-orange-100"
      />
      <p className="mt-1 text-xs text-neutral-500">
        Add as many hero slides as this company needs, each with its own image, headline, and
        tagline. JPEG, PNG, WEBP, or GIF. Max 5MB each.
      </p>
    </div>
  );
}

export default function EditCompanyModal({
  company,
  onClose,
  onSaved,
}: {
  company: CompanyCardData;
  onClose: () => void;
  onSaved: () => void;
}) {
  const router = useRouter();
  const [locale, setLocale] = useState<Locale>("en");
  const [imageError, setImageError] = useState<string | null>(null);

  const action = async (prev: CompanyFormState, formData: FormData) => {
    const result = await updateCompanyAction(prev, formData);
    if (result.success) onSaved();
    return result;
  };
  const [state, formAction] = useActionState<CompanyFormState, FormData>(action, {});

  return (
    <Modal title={`Edit ${company.nameEn}`} onClose={onClose} maxWidthClassName="max-w-2xl">
      <form action={formAction} className="space-y-5">
        <input type="hidden" name="id" value={company.id} />

        <div className="inline-flex gap-1 rounded-lg border border-neutral-200 bg-neutral-50 p-1">
          {(["en", "bn"] as const).map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => setLocale(l)}
              className={`rounded-md px-4 py-1.5 text-sm font-medium transition-colors ${
                locale === l ? "bg-white text-neutral-900 shadow-sm" : "text-neutral-500 hover:text-neutral-800"
              }`}
            >
              {l === "en" ? "English" : "বাংলা"}
            </button>
          ))}
        </div>

        {/* Both locales stay mounted (just visually hidden) so the form
            submits every field regardless of which tab is active. */}
        {(["en", "bn"] as const).map((l) => (
          <div key={l} className={`space-y-4 ${locale === l ? "" : "hidden"}`}>
            <div>
              <label htmlFor={`name-${l}`} className="mb-1.5 block text-sm font-medium text-neutral-700">
                Name ({l.toUpperCase()})
              </label>
              <input
                id={`name-${l}`}
                name={l === "en" ? "nameEn" : "nameBn"}
                type="text"
                required
                maxLength={200}
                defaultValue={l === "en" ? company.nameEn : company.nameBn}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor={`sector-${l}`} className="mb-1.5 block text-sm font-medium text-neutral-700">
                Sector ({l.toUpperCase()})
              </label>
              <input
                id={`sector-${l}`}
                name={l === "en" ? "sectorEn" : "sectorBn"}
                type="text"
                required
                maxLength={120}
                defaultValue={l === "en" ? company.sectorEn : company.sectorBn}
                className={inputClass}
              />
            </div>

            <div>
              <label
                htmlFor={`description-${l}`}
                className="mb-1.5 block text-sm font-medium text-neutral-700"
              >
                Description ({l.toUpperCase()})
              </label>
              <textarea
                id={`description-${l}`}
                name={l === "en" ? "descriptionEn" : "descriptionBn"}
                required
                rows={3}
                defaultValue={l === "en" ? company.descriptionEn : company.descriptionBn}
                className={inputClass}
              />
            </div>
          </div>
        ))}

        <div className="space-y-4 border-t border-neutral-100 pt-4">
          <ImageField
            label="Logo"
            name="logo"
            companyId={company.id}
            initialUrl={company.logoUrl}
            hint="Square logo shown on the company card. JPEG, PNG, WEBP, or GIF. Max 5MB."
            onError={setImageError}
            onChanged={() => router.refresh()}
          />
          <ImageField
            label="Banner"
            name="banner"
            companyId={company.id}
            initialUrl={company.bannerUrl}
            hint="Wide image behind the company card. JPEG, PNG, WEBP, or GIF. Max 5MB."
            onError={setImageError}
            onChanged={() => router.refresh()}
          />
          <HeroGallery
            companyId={company.id}
            initialImages={company.heroImages}
            onError={setImageError}
            onChanged={() => router.refresh()}
          />
        </div>

        <label className="flex items-center gap-2 text-sm text-neutral-700">
          <input
            type="checkbox"
            name="isPublished"
            defaultChecked={company.isPublished}
            className="h-4 w-4 rounded border-neutral-300 text-orange-600 focus:ring-orange-500"
          />
          Published on the public site
        </label>

        {(imageError || state.error) && (
          <p role="alert" className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">
            {imageError ?? state.error}
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
