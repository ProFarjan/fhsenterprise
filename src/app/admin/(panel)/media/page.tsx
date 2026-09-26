import { prisma } from "@/lib/prisma";
import { siteLabel, SITE_OPTIONS } from "@/lib/sites";
import { youtubeThumbnailUrl } from "@/lib/youtube";
import MediaNewsClient from "@/components/admin/media/MediaNewsClient";
import type { MediaCardData } from "@/components/admin/media/MediaCard";
import type { NewsCardData } from "@/components/admin/media/NewsCard";
import type { EventCardData } from "@/components/admin/media/EventCard";

function formatDate(date: Date) {
  return date.toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" });
}

export default async function AdminMediaPage() {
  // Bytes columns are deliberately excluded — the browser fetches image
  // pixels from /api/media/[id]/image and /api/news/[id]/image instead, so
  // multi-megabyte blobs never ride along in the page's RSC payload.
  const [mediaRows, newsRows, eventRows] = await Promise.all([
    prisma.mediaItem.findMany({
      orderBy: { createdAt: "desc" },
      select: { id: true, type: true, site: true, title: true, youtubeUrl: true, createdAt: true },
    }),
    prisma.newsItem.findMany({
      orderBy: { date: "desc" },
      select: { id: true, site: true, title: true, excerpt: true, date: true },
    }),
    prisma.eventItem.findMany({
      orderBy: { date: "desc" },
      select: { id: true, site: true, title: true, description: true, location: true, date: true },
    }),
  ]);

  const mediaItems: MediaCardData[] = mediaRows.map((row) => ({
    id: row.id,
    type: row.type,
    title: row.title,
    site: row.site,
    siteLabel: siteLabel(row.site),
    thumbnailUrl:
      row.type === "VIDEO"
        ? (youtubeThumbnailUrl(row.youtubeUrl ?? "") ?? "")
        : `/api/media/${row.id}/image`,
    createdAtLabel: formatDate(row.createdAt),
  }));

  const newsItems: NewsCardData[] = newsRows.map((row) => ({
    id: row.id,
    title: row.title,
    excerpt: row.excerpt,
    site: row.site,
    siteLabel: siteLabel(row.site),
    coverImageUrl: `/api/news/${row.id}/image`,
    dateLabel: formatDate(row.date),
  }));

  const eventItems: EventCardData[] = eventRows.map((row) => ({
    id: row.id,
    title: row.title,
    description: row.description,
    location: row.location,
    site: row.site,
    siteLabel: siteLabel(row.site),
    coverImageUrl: `/api/events/${row.id}/image`,
    dateLabel: formatDate(row.date),
  }));

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-neutral-900">Media & News</h2>
        <p className="mt-1 text-sm text-neutral-500">
          Publish gallery images, YouTube videos, news articles, and events across MR Group sites.
        </p>
      </div>
      <MediaNewsClient
        mediaItems={mediaItems}
        newsItems={newsItems}
        eventItems={eventItems}
        sites={SITE_OPTIONS}
      />
    </div>
  );
}
