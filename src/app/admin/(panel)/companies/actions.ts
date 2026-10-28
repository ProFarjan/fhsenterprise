"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/session";
import { isImageValidationError, readAndValidateImage, readOptionalImage } from "@/lib/imageUpload";
import { INTERNAL_COMPANY_SLUGS } from "@/lib/companies";
import { formString } from "@/lib/formData";
import { revalidateLocalized } from "@/lib/revalidate";
import {
  LIMITS,
  describeActionError,
  isNotFoundError,
  lengthError,
  parseIdList,
  positiveInt,
} from "@/lib/actionGuards";

export type CompanyFormState = { error?: string; success?: boolean };

// A page-level `requireAdmin()` check (in the (panel) layout) does not extend
// to Server Actions — Next.js treats every action as its own reachable POST
// endpoint, so each one re-verifies the session itself.

// Companies is a fixed set of subsidiary rows (seeded once from the
// static site content) — there is deliberately no create/delete here, only
// editing the fields on an existing row.

// The parent site's cards/carousel AND every subsidiary's own homepage (each
// prerendered at build time via generateStaticParams — see companies/<sub>/
// page.tsx) all read from the Company table, so a card edit or hero gallery
// change has to invalidate all of them, not just the parent pages. There are
// only a few subdomains and revalidating an unrelated one is cheap, so this
// always does all of them rather than looking up which one actually changed.
function revalidatePublicCompanyPaths() {
  revalidateLocalized("/", "/companies", ...INTERNAL_COMPANY_SLUGS.map((slug) => `/companies/${slug}`));
}

export async function updateCompanyAction(
  _prev: CompanyFormState,
  formData: FormData,
): Promise<CompanyFormState> {
  await requireAdmin();

  const id = positiveInt(formData.get("id"));
  if (id === null) return { error: "Unknown company." };

  const nameEn = formString(formData, "nameEn");
  const nameBn = formString(formData, "nameBn");
  const sectorEn = formString(formData, "sectorEn");
  const sectorBn = formString(formData, "sectorBn");
  const descriptionEn = formString(formData, "descriptionEn");
  const descriptionBn = formString(formData, "descriptionBn");
  const isPublished = formData.get("isPublished") === "on";

  if (!nameEn || !nameBn) return { error: "Name (EN and BN) is required." };
  if (!sectorEn || !sectorBn) return { error: "Sector (EN and BN) is required." };
  if (!descriptionEn || !descriptionBn) return { error: "Description (EN and BN) is required." };

  const tooLong = lengthError([
    ["English name", nameEn, LIMITS.name],
    ["Bangla name", nameBn, LIMITS.name],
    ["English sector", sectorEn, LIMITS.sector],
    ["Bangla sector", sectorBn, LIMITS.sector],
    ["English description", descriptionEn, LIMITS.longText],
    ["Bangla description", descriptionBn, LIMITS.longText],
  ]);
  if (tooLong) return { error: tooLong };

  const logo = await readOptionalImage(formData, "logo");
  if (logo && "error" in logo) return { error: logo.error };
  const banner = await readOptionalImage(formData, "banner");
  if (banner && "error" in banner) return { error: banner.error };

  try {
    await prisma.company.update({
      where: { id },
      data: {
        nameEn,
        nameBn,
        sectorEn,
        sectorBn,
        descriptionEn,
        descriptionBn,
        isPublished,
        ...(logo && { logoData: logo.data, logoMimeType: logo.mimeType }),
        ...(banner && { bannerData: banner.data, bannerMimeType: banner.mimeType }),
      },
    });
  } catch (error) {
    return { error: describeActionError(error, "Couldn't save the company. Please try again.") };
  }

  revalidatePath("/admin/companies");
  revalidatePublicCompanyPaths();
  return { success: true };
}

// Persists a new top-to-bottom order after a drag-and-drop reorder in the
// admin list. Called directly from the client component (not via a <form>),
// which Server Actions support as long as the function is "use server".
export async function reorderCompaniesAction(orderedIds: number[]): Promise<void> {
  await requireAdmin();

  // The argument comes straight from the browser: only accept a bounded list of
  // distinct ids that all exist, so a tampered call can't run an arbitrary
  // transaction or hit rows it shouldn't.
  const ids = parseIdList(orderedIds);
  if (!ids) return;
  const existing = await prisma.company.count({ where: { id: { in: ids } } });
  if (existing !== ids.length) return;

  try {
    await prisma.$transaction(
      ids.map((id, index) =>
        prisma.company.update({ where: { id }, data: { order: index } }),
      ),
    );
  } catch (error) {
    describeActionError(error, "");
    return;
  }

  revalidatePath("/admin/companies");
  revalidatePublicCompanyPaths();
}

export async function togglePublishedAction(formData: FormData): Promise<void> {
  await requireAdmin();

  const id = positiveInt(formData.get("id"));
  if (id === null) return;

  try {
    const current = await prisma.company.findUnique({ where: { id }, select: { isPublished: true } });
    if (!current) return;

    await prisma.company.update({ where: { id }, data: { isPublished: !current.isPublished } });
  } catch (error) {
    describeActionError(error, "");
    return;
  }

  revalidatePath("/admin/companies");
  revalidatePublicCompanyPaths();
}

// Clears a company's logo or banner without touching anything else — takes
// effect immediately from the editor (not tied to the "Save changes" button).
export async function removeCompanyImageAction(formData: FormData): Promise<{ error?: string }> {
  await requireAdmin();

  const id = positiveInt(formData.get("id"));
  const field = String(formData.get("field") ?? "");
  if (id === null || (field !== "logo" && field !== "banner")) return { error: "Unknown image." };

  try {
    await prisma.company.update({
      where: { id },
      data:
        field === "logo"
          ? { logoData: null, logoMimeType: null }
          : { bannerData: null, bannerMimeType: null },
    });
  } catch (error) {
    return { error: describeActionError(error, "Couldn't remove the image. Please try again.") };
  }

  revalidatePath("/admin/companies");
  revalidatePublicCompanyPaths();
  return {};
}

export type HeroImageActionState = { error?: string; id?: number };

// A company's hero gallery (CompanyHeroImage) is managed independently of
// the main edit form — several subsidiaries rotate through multiple hero
// photos (see the `hero.slides` arrays in
// src/data/companies/{agritech,feed,agro-medicine}.ts), so images are
// added/removed one at a time rather than as a single form field.
export async function addHeroImageAction(formData: FormData): Promise<HeroImageActionState> {
  await requireAdmin();

  const companyId = positiveInt(formData.get("companyId"));
  if (companyId === null) return { error: "Unknown company." };

  const file = formData.get("image");
  if (!(file instanceof File) || file.size === 0) {
    return { error: "Please choose an image file." };
  }
  const validated = await readAndValidateImage(file);
  if (isImageValidationError(validated)) return { error: validated.error };

  let created: { id: number };
  try {
    const highest = await prisma.companyHeroImage.aggregate({
      where: { companyId },
      _max: { order: true },
    });

    created = await prisma.companyHeroImage.create({
      data: {
        companyId,
        order: (highest._max.order ?? -1) + 1,
        imageData: validated.data,
        imageMimeType: validated.mimeType,
      },
      select: { id: true },
    });
  } catch (error) {
    return { error: describeActionError(error, "Couldn't upload the image. Please try again.") };
  }

  revalidatePath("/admin/companies");
  revalidatePublicCompanyPaths();
  return { id: created.id };
}

export type HeroTextFormState = { error?: string; success?: boolean };

// Saves one hero slide's headline/tagline — separate from the image itself
// (which is set once at upload) and from the main company form, so editing
// a slide's copy doesn't require touching anything else.
export async function updateHeroImageAction(
  _prev: HeroTextFormState,
  formData: FormData,
): Promise<HeroTextFormState> {
  await requireAdmin();

  const id = positiveInt(formData.get("id"));
  if (id === null) return { error: "Unknown hero image." };

  const headlineEn = formString(formData, "headlineEn");
  const headlineBn = formString(formData, "headlineBn");
  const taglineEn = formString(formData, "taglineEn");
  const taglineBn = formString(formData, "taglineBn");

  const tooLong = lengthError([
    ["English headline", headlineEn, LIMITS.heroHeadline],
    ["Bangla headline", headlineBn, LIMITS.heroHeadline],
    ["English tagline", taglineEn, LIMITS.shortText],
    ["Bangla tagline", taglineBn, LIMITS.shortText],
  ]);
  if (tooLong) return { error: tooLong };

  try {
    await prisma.companyHeroImage.update({
      where: { id },
      data: {
        headlineEn: headlineEn || null,
        headlineBn: headlineBn || null,
        taglineEn: taglineEn || null,
        taglineBn: taglineBn || null,
      },
    });
  } catch (error) {
    return { error: describeActionError(error, "Couldn't save the slide text. Please try again.") };
  }

  revalidatePath("/admin/companies");
  revalidatePublicCompanyPaths();
  return { success: true };
}

export async function removeHeroImageAction(formData: FormData): Promise<{ error?: string }> {
  await requireAdmin();

  const id = positiveInt(formData.get("id"));
  if (id === null) return { error: "Unknown hero image." };

  try {
    await prisma.companyHeroImage.delete({ where: { id } });
  } catch (error) {
    // Already deleted (another tab, double click) is the outcome we wanted.
    if (!isNotFoundError(error)) {
      return { error: describeActionError(error, "Couldn't remove the slide. Please try again.") };
    }
  }

  revalidatePath("/admin/companies");
  revalidatePublicCompanyPaths();
  return {};
}

// Persists a new order for one company's hero gallery after a reorder in the
// editor. Called directly from the client component, same as
// reorderCompaniesAction above.
export async function reorderHeroImagesAction(orderedIds: number[]): Promise<void> {
  await requireAdmin();

  // Same rule as reorderCompaniesAction, plus: every image must belong to ONE
  // company, so a tampered call can't reshuffle another company's gallery.
  const ids = parseIdList(orderedIds);
  if (!ids) return;
  const rows = await prisma.companyHeroImage.findMany({
    where: { id: { in: ids } },
    select: { companyId: true },
  });
  if (rows.length !== ids.length || new Set(rows.map((r) => r.companyId)).size !== 1) return;

  try {
    await prisma.$transaction(
      ids.map((id, index) =>
        prisma.companyHeroImage.update({ where: { id }, data: { order: index } }),
      ),
    );
  } catch (error) {
    describeActionError(error, "");
    return;
  }

  revalidatePath("/admin/companies");
  revalidatePublicCompanyPaths();
}
