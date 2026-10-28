"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/session";
import { isSiteKey } from "@/lib/sites";
import { isValidYoutubeUrl } from "@/lib/youtube";
import { isImageValidationError, readAndValidateImage } from "@/lib/imageUpload";
import { MediaType, SiteKey } from "@/generated/prisma/enums";
import { routing } from "@/i18n/routing";
import {
  LIMITS,
  describeActionError,
  ignoreNotFound,
  lengthError,
  positiveInt,
} from "@/lib/actionGuards";

export type MediaFormState = { error?: string; success?: boolean };
export type NewsFormState = { error?: string; success?: boolean };
export type EventFormState = { error?: string; success?: boolean };

// A page-level `requireAdmin()` check (in the (panel) layout) does not extend
// to Server Actions — Next.js treats every action as its own reachable POST
// endpoint, so each one re-verifies the session itself.

// The public pages that read site content straight out of the database
// (see src/app/[locale]/(main)/media/, the filling-station gallery at
// src/app/[locale]/companies/filling-station/gallery/, and the agro gallery
// at src/app/[locale]/companies/agro/gallery/). Next only revalidates on
// demand — without this, a newly created/deleted item wouldn't show up on
// the live site until something else invalidated the route's cache. Only
// FHS_ENTERPRISE is wired to public pages so far.
function revalidatePublicMediaPaths(site: string) {
  for (const locale of routing.locales) {
    if (site === SiteKey.FHS_ENTERPRISE) {
      revalidatePath(`/${locale}`);
      revalidatePath(`/${locale}/media`);
      revalidatePath(`/${locale}/media/news`);
      revalidatePath(`/${locale}/media/gallery`);
      revalidatePath(`/${locale}/media/events`);
    } else if (site === SiteKey.AUTO_RICE_MILL) {
      revalidatePath(`/${locale}/companies/auto-rice-mill/gallery`);
    } else if (site === SiteKey.VEHICLE_SOLUTIONS) {
      revalidatePath(`/${locale}/companies/vehicle-solutions/gallery`);
    }
  }
}

export async function createMediaAction(
  _prev: MediaFormState,
  formData: FormData,
): Promise<MediaFormState> {
  const admin = await requireAdmin();

  const site = String(formData.get("site") ?? "");
  const title = String(formData.get("title") ?? "").trim();
  const type = String(formData.get("type") ?? "");

  if (!isSiteKey(site)) return { error: "Choose a site." };
  if (!title) return { error: "Title is required." };
  const titleTooLong = lengthError([["Title", title, LIMITS.title]]);
  if (titleTooLong) return { error: titleTooLong };
  if (type !== MediaType.IMAGE && type !== MediaType.VIDEO) {
    return { error: "Choose image or video." };
  }

  if (type === MediaType.VIDEO) {
    const youtubeUrl = String(formData.get("youtubeUrl") ?? "").trim();
    if (!isValidYoutubeUrl(youtubeUrl)) {
      return { error: "Enter a valid YouTube link." };
    }
    if (youtubeUrl.length > 500) return { error: "YouTube link must be 500 characters or fewer." };

    try {
      await prisma.mediaItem.create({
        data: { type, site, title, youtubeUrl, createdById: admin.id },
      });
    } catch (error) {
      return { error: describeActionError(error, "Couldn't save the video. Please try again.") };
    }
  } else {
    const file = formData.get("image");
    if (!(file instanceof File) || file.size === 0) {
      return { error: "Please choose an image file." };
    }

    const validated = await readAndValidateImage(file);
    if (isImageValidationError(validated)) return { error: validated.error };

    try {
      await prisma.mediaItem.create({
        data: {
          type,
          site,
          title,
          imageData: validated.data,
          imageMimeType: validated.mimeType,
          createdById: admin.id,
        },
      });
    } catch (error) {
      return { error: describeActionError(error, "Couldn't save the image. Please try again.") };
    }
  }

  revalidatePath("/admin/media");
  revalidatePublicMediaPaths(site);
  return { success: true };
}

export async function deleteMediaAction(formData: FormData): Promise<void> {
  await requireAdmin();
  const id = positiveInt(formData.get("id"));
  if (id !== null) {
    const deleted = await prisma.mediaItem.delete({ where: { id } }).catch(ignoreNotFound);
    if (deleted) revalidatePublicMediaPaths(deleted.site);
  }
  revalidatePath("/admin/media");
}

export async function createNewsAction(
  _prev: NewsFormState,
  formData: FormData,
): Promise<NewsFormState> {
  const admin = await requireAdmin();

  const site = String(formData.get("site") ?? "");
  const title = String(formData.get("title") ?? "").trim();
  const excerpt = String(formData.get("excerpt") ?? "").trim();
  const dateRaw = String(formData.get("date") ?? "");

  if (!isSiteKey(site)) return { error: "Choose a site." };
  if (!title) return { error: "Title is required." };
  if (!excerpt) return { error: "Excerpt is required." };
  const tooLong = lengthError([
    ["Title", title, LIMITS.title],
    ["Excerpt", excerpt, LIMITS.longText],
  ]);
  if (tooLong) return { error: tooLong };

  const date = new Date(dateRaw);
  if (Number.isNaN(date.getTime())) return { error: "Enter a valid date." };

  const file = formData.get("coverImage");
  if (!(file instanceof File) || file.size === 0) {
    return { error: "Please choose a cover image." };
  }
  const validated = await readAndValidateImage(file);
  if (isImageValidationError(validated)) return { error: validated.error };

  try {
    await prisma.newsItem.create({
      data: {
        site,
        title,
        excerpt,
        date,
        coverImageData: validated.data,
        coverImageMimeType: validated.mimeType,
        createdById: admin.id,
      },
    });
  } catch (error) {
    return { error: describeActionError(error, "Couldn't save the news item. Please try again.") };
  }

  revalidatePath("/admin/media");
  revalidatePublicMediaPaths(site);
  return { success: true };
}

export async function deleteNewsAction(formData: FormData): Promise<void> {
  await requireAdmin();
  const id = positiveInt(formData.get("id"));
  if (id !== null) {
    const deleted = await prisma.newsItem.delete({ where: { id } }).catch(ignoreNotFound);
    if (deleted) revalidatePublicMediaPaths(deleted.site);
  }
  revalidatePath("/admin/media");
}

export async function createEventAction(
  _prev: EventFormState,
  formData: FormData,
): Promise<EventFormState> {
  const admin = await requireAdmin();

  const site = String(formData.get("site") ?? "");
  const title = String(formData.get("title") ?? "").trim();
  const location = String(formData.get("location") ?? "").trim();
  const description = String(formData.get("description") ?? "").trim();
  const dateRaw = String(formData.get("date") ?? "");

  if (!isSiteKey(site)) return { error: "Choose a site." };
  if (!title) return { error: "Title is required." };
  if (!location) return { error: "Location is required." };
  if (!description) return { error: "Description is required." };
  const tooLong = lengthError([
    ["Title", title, LIMITS.title],
    ["Location", location, LIMITS.location],
    ["Description", description, LIMITS.longText],
  ]);
  if (tooLong) return { error: tooLong };

  const date = new Date(dateRaw);
  if (Number.isNaN(date.getTime())) return { error: "Enter a valid date." };

  const file = formData.get("coverImage");
  if (!(file instanceof File) || file.size === 0) {
    return { error: "Please choose a cover image." };
  }
  const validated = await readAndValidateImage(file);
  if (isImageValidationError(validated)) return { error: validated.error };

  try {
    await prisma.eventItem.create({
      data: {
        site,
        title,
        location,
        description,
        date,
        coverImageData: validated.data,
        coverImageMimeType: validated.mimeType,
        createdById: admin.id,
      },
    });
  } catch (error) {
    return { error: describeActionError(error, "Couldn't save the event. Please try again.") };
  }

  revalidatePath("/admin/media");
  revalidatePublicMediaPaths(site);
  return { success: true };
}

export async function deleteEventAction(formData: FormData): Promise<void> {
  await requireAdmin();
  const id = positiveInt(formData.get("id"));
  if (id !== null) {
    const deleted = await prisma.eventItem.delete({ where: { id } }).catch(ignoreNotFound);
    if (deleted) revalidatePublicMediaPaths(deleted.site);
  }
  revalidatePath("/admin/media");
}

