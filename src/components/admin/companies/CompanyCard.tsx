"use client";

import { ChevronDownIcon, ChevronUpIcon, EditIcon } from "@/components/admin/icons";

export type CompanyHeroImageData = {
  id: number;
  url: string;
  headlineEn: string;
  headlineBn: string;
  taglineEn: string;
  taglineBn: string;
};

export type CompanyCardData = {
  id: number;
  siteLabel: string;
  subdomain: string;
  nameEn: string;
  nameBn: string;
  sectorEn: string;
  sectorBn: string;
  descriptionEn: string;
  descriptionBn: string;
  logoUrl: string | null;
  bannerUrl: string | null;
  heroImages: CompanyHeroImageData[];
  order: number;
  isPublished: boolean;
};

export default function CompanyCard({
  company,
  canMoveUp,
  canMoveDown,
  onMoveUp,
  onMoveDown,
  onTogglePublished,
  onEdit,
  busy,
}: {
  company: CompanyCardData;
  canMoveUp: boolean;
  canMoveDown: boolean;
  onMoveUp: () => void;
  onMoveDown: () => void;
  onTogglePublished: () => void;
  onEdit: () => void;
  busy: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
      <div className="relative aspect-video bg-neutral-100">
        {company.bannerUrl ? (
          // eslint-disable-next-line @next/next/no-img-element -- served from our own byte-serving route, not an optimizable local asset
          <img src={company.bannerUrl} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full items-center justify-center text-xs text-neutral-400">
            No banner uploaded
          </div>
        )}
        <span className="absolute top-2 left-2 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-medium text-white">
          {company.siteLabel}
        </span>
        <span
          className={`absolute top-2 right-2 rounded-full px-2.5 py-1 text-[11px] font-medium ${
            company.isPublished ? "bg-green-600/90 text-white" : "bg-neutral-600/80 text-white"
          }`}
        >
          {company.isPublished ? "Published" : "Hidden"}
        </span>
        {company.logoUrl && (
          <div className="absolute bottom-2 left-2 flex h-10 w-10 items-center justify-center rounded-lg bg-white/95 p-1.5 shadow-md">
            {/* eslint-disable-next-line @next/next/no-img-element -- served from our own byte-serving route, not an optimizable local asset */}
            <img src={company.logoUrl} alt="" loading="lazy" decoding="async" className="h-full w-full object-contain" />
          </div>
        )}
      </div>

      <div className="p-3.5">
        <p className="truncate text-sm font-semibold text-neutral-800">{company.nameEn}</p>
        <p className="mt-0.5 truncate text-xs text-neutral-500">{company.sectorEn}</p>

        <div className="mt-3 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={onMoveUp}
              disabled={!canMoveUp || busy}
              aria-label="Move up"
              className="rounded-md border border-neutral-200 p-1.5 text-neutral-500 hover:bg-neutral-50 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronUpIcon className="h-3.5 w-3.5" />
            </button>
            <button
              type="button"
              onClick={onMoveDown}
              disabled={!canMoveDown || busy}
              aria-label="Move down"
              className="rounded-md border border-neutral-200 p-1.5 text-neutral-500 hover:bg-neutral-50 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronDownIcon className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onTogglePublished}
              disabled={busy}
              className="rounded-lg px-2.5 py-1.5 text-xs font-medium text-neutral-600 hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {company.isPublished ? "Hide" : "Publish"}
            </button>
            <button
              type="button"
              onClick={onEdit}
              className="inline-flex items-center gap-1.5 rounded-lg bg-orange-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-orange-500"
            >
              <EditIcon className="h-3.5 w-3.5" />
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
