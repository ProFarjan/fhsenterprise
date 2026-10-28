"use client";

import { useState } from "react";
import { PlusIcon, MediaIcon } from "@/components/admin/icons";
import CreateMediaModal from "./CreateMediaModal";
import CreateNewsModal from "./CreateNewsModal";
import CreateEventModal from "./CreateEventModal";
import MediaCard, { type MediaCardData } from "./MediaCard";
import NewsCard, { type NewsCardData } from "./NewsCard";
import EventCard, { type EventCardData } from "./EventCard";

type Tab = "media" | "news" | "events";

function EmptyState({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-neutral-300 bg-white/60 px-6 py-16 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue-light text-brand-blue">
        <MediaIcon className="h-7 w-7" />
      </span>
      <p className="mt-4 text-sm text-neutral-500">No {label} yet — add the first one.</p>
    </div>
  );
}

export default function MediaNewsClient({
  mediaItems,
  newsItems,
  eventItems,
  sites,
}: {
  mediaItems: MediaCardData[];
  newsItems: NewsCardData[];
  eventItems: EventCardData[];
  sites: { key: string; label: string }[];
}) {
  const [tab, setTab] = useState<Tab>("media");
  const [mediaModalOpen, setMediaModalOpen] = useState(false);
  const [newsModalOpen, setNewsModalOpen] = useState(false);
  const [eventModalOpen, setEventModalOpen] = useState(false);
  const [siteFilter, setSiteFilter] = useState<string>("ALL");

  const filteredMedia =
    siteFilter === "ALL" ? mediaItems : mediaItems.filter((item) => item.site === siteFilter);
  const filteredNews =
    siteFilter === "ALL" ? newsItems : newsItems.filter((item) => item.site === siteFilter);
  const filteredEvents =
    siteFilter === "ALL" ? eventItems : eventItems.filter((item) => item.site === siteFilter);

  const tabs = [
    { key: "media" as const, label: `Media (${filteredMedia.length})` },
    { key: "news" as const, label: `News (${filteredNews.length})` },
    { key: "events" as const, label: `Events (${filteredEvents.length})` },
  ];

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex gap-1 rounded-lg border border-neutral-200 bg-white p-1">
            {tabs.map((t) => (
              <button
                key={t.key}
                type="button"
                onClick={() => setTab(t.key)}
                className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                  tab === t.key
                    ? "bg-brand-blue text-white"
                    : "text-neutral-600 hover:bg-neutral-100"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <label className="inline-flex items-center gap-2 text-sm text-neutral-600">
            <span className="font-medium">Site</span>
            <select
              value={siteFilter}
              onChange={(e) => setSiteFilter(e.target.value)}
              className="rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-800 shadow-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue focus:outline-none"
            >
              <option value="ALL">All sites</option>
              {sites.map((s) => (
                <option key={s.key} value={s.key}>
                  {s.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <button
          type="button"
          onClick={() => {
            if (tab === "media") setMediaModalOpen(true);
            else if (tab === "news") setNewsModalOpen(true);
            else setEventModalOpen(true);
          }}
          className="inline-flex items-center gap-2 rounded-lg bg-brand-blue px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-blue-hover"
        >
          <PlusIcon className="h-4 w-4" />
          {tab === "media" ? "Add media" : tab === "news" ? "Add news" : "Add event"}
        </button>
      </div>

      {tab === "media" ? (
        filteredMedia.length ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredMedia.map((item) => (
              <MediaCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <EmptyState label="media" />
        )
      ) : tab === "news" ? (
        filteredNews.length ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredNews.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <EmptyState label="news" />
        )
      ) : filteredEvents.length ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((item) => (
            <EventCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <EmptyState label="events" />
      )}

      {mediaModalOpen && (
        <CreateMediaModal
          onClose={() => setMediaModalOpen(false)}
          onCreated={() => setMediaModalOpen(false)}
        />
      )}
      {newsModalOpen && (
        <CreateNewsModal
          onClose={() => setNewsModalOpen(false)}
          onCreated={() => setNewsModalOpen(false)}
        />
      )}
      {eventModalOpen && (
        <CreateEventModal
          onClose={() => setEventModalOpen(false)}
          onCreated={() => setEventModalOpen(false)}
        />
      )}
    </div>
  );
}
