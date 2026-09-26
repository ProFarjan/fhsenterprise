"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/session";
import { isImageValidationError, readAndValidateImage } from "@/lib/imageUpload";
import { routing } from "@/i18n/routing";
import { COMPANY_SUBDOMAINS } from "@/lib/companies";

export type CompanyFormState = { error?: string; success?: boolean };

// A page-level `requireAdmin()` check (in the (panel) layout) does not extend
// to Server Actions — Next.js treats every action as its own reachable POST
// endpoint, so each one re-verifies the session itself.

// Companies is a fixed set of five subsidiary rows (seeded once from the
// static site content) — there is deliberately no create/delete here, only
// editing the fields on an existing row.

// The parent site's cards/carousel AND every subsidiary's own homepage (each
// prerendered at build time via generateStaticParams — see companies/<sub>/
// page.tsx) all read from the Company table, so a card edit or hero gallery
// change has to invalidate all of them, not just the parent pages. There are
// only five subdomains and revalidating an unrelated one is cheap, so this
// always does all of them rather than looking up which one actually changed.
function revalidatePublicCompanyPaths() {
  for (const locale of routing.locales) {
    revalidatePath(`/${locale}`);
    revalidatePath(`/${locale}/companies`);
    for (const subdomain of COMPANY_SUBDOMAINS) {
      revalidatePath(`/${locale}/companies/${subdomain}`);
    }
  }
}

// Only overwrites an image column when a new file was actually chosen — an
// empty/missing file input means "keep the current image".
async function readOptionalImage(
  formData: FormData,
  field: string,
): Promise<{ data: Uint8Array<ArrayBuffer>; mimeType: string } | null | { error: string }> {
  const file = formData.get(field);
  if (!(file instanceof File) || file.size === 0) return null;

  const validated = await readAndValidateImage(file);
  if (isImageValidationError(validated)) return { error: validated.error };
  return validated;
}

export async function updateCompanyAction(
  _prev: CompanyFormState,
  formData: FormData,
): Promise<CompanyFormState> {
  await requireAdmin();

  const id = Number(formData.get("id"));
  if (!Number.isInteger(id)) return { error: "Unknown company." };

  const nameEn = String(formData.get("nameEn") ?? "").trim();
  const nameBn = String(formData.get("nameBn") ?? "").trim();
  const sectorEn = String(formData.get("sectorEn") ?? "").trim();
  const sectorBn = String(formData.get("sectorBn") ?? "").trim();
  const descriptionEn = String(formData.get("descriptionEn") ?? "").trim();
  const descriptionBn = String(formData.get("descriptionBn") ?? "").trim();
  const isPublished = formData.get("isPublished") === "on";

  if (!nameEn || !nameBn) return { error: "Name (EN and BN) is required." };
  if (!sectorEn || !sectorBn) return { error: "Sector (EN and BN) is required." };
  if (!descriptionEn || !descriptionBn) return { error: "Description (EN and BN) is required." };

  const logo = await readOptionalImage(formData, "logo");
  if (logo && "error" in logo) return { error: logo.error };
  const banner = await readOptionalImage(formData, "banner");
  if (banner && "error" in banner) return { error: banner.error };

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

  revalidatePath("/admin/companies");
  revalidatePublicCompanyPaths();
  return { success: true };
}

// Persists a new top-to-bottom order after a drag-and-drop reorder in the
// admin list. Called directly from the client component (not via a <form>),
// which Server Actions support as long as the function is "use server".
export async function reorderCompaniesAction(orderedIds: number[]): Promise<void> {
  await requireAdmin();

  await prisma.$transaction(
    orderedIds.map((id, index) =>
      prisma.company.update({ where: { id }, data: { order: index } }),
    ),
  );

  revalidatePath("/admin/companies");
  revalidatePublicCompanyPaths();
}

export async function togglePublishedAction(formData: FormData): Promise<void> {
  await requireAdmin();

  const id = Number(formData.get("id"));
  if (!Number.isInteger(id)) return;

  const current = await prisma.company.findUnique({ where: { id }, select: { isPublished: true } });
  if (!current) return;

  await prisma.company.update({ where: { id }, data: { isPublished: !current.isPublished } });

  revalidatePath("/admin/companies");
  revalidatePublicCompanyPaths();
}

// Clears a company's logo or banner without touching anything else — takes
// effect immediately from the editor (not tied to the "Save changes" button).
export async function removeCompanyImageAction(formData: FormData): Promise<void> {
  await requireAdmin();

  const id = Number(formData.get("id"));
  const field = String(formData.get("field") ?? "");
  if (!Number.isInteger(id)) return;

  if (field === "logo") {
    await prisma.company.update({ where: { id }, data: { logoData: null, logoMimeType: null } });
  } else if (field === "banner") {
    await prisma.company.update({ where: { id }, data: { bannerData: null, bannerMimeType: null } });
  } else {
    return;
  }

  revalidatePath("/admin/companies");
  revalidatePublicCompanyPaths();
}

export type HeroImageActionState = { error?: string; id?: number };

// A company's hero gallery (CompanyHeroImage) is managed independently of
// the main edit form — several subsidiaries rotate through multiple hero
// photos (see the `hero.slides` arrays in
// src/data/companies/{agritech,feed,agro-medicine}.ts), so images are
// added/removed one at a time rather than as a single form field.
export async function addHeroImageAction(formData: FormData): Promise<HeroImageActionState> {
  await requireAdmin();

  const companyId = Number(formData.get("companyId"));
  if (!Number.isInteger(companyId)) return { error: "Unknown company." };

  const file = formData.get("image");
  if (!(file instanceof File) || file.size === 0) {
    return { error: "Please choose an image file." };
  }
  const validated = await readAndValidateImage(file);
  if (isImageValidationError(validated)) return { error: validated.error };

  const highest = await prisma.companyHeroImage.aggregate({
    where: { companyId },
    _max: { order: true },
  });

  const created = await prisma.companyHeroImage.create({
    data: {
      companyId,
      order: (highest._max.order ?? -1) + 1,
      imageData: validated.data,
      imageMimeType: validated.mimeType,
    },
    select: { id: true },
  });

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

  const id = Number(formData.get("id"));
  if (!Number.isInteger(id)) return { error: "Unknown hero image." };

  const headlineEn = String(formData.get("headlineEn") ?? "").trim();
  const headlineBn = String(formData.get("headlineBn") ?? "").trim();
  const taglineEn = String(formData.get("taglineEn") ?? "").trim();
  const taglineBn = String(formData.get("taglineBn") ?? "").trim();

  await prisma.companyHeroImage.update({
    where: { id },
    data: {
      headlineEn: headlineEn || null,
      headlineBn: headlineBn || null,
      taglineEn: taglineEn || null,
      taglineBn: taglineBn || null,
    },
  });

  revalidatePath("/admin/companies");
  revalidatePublicCompanyPaths();
  return { success: true };
}

export async function removeHeroImageAction(formData: FormData): Promise<void> {
  await requireAdmin();

  const id = Number(formData.get("id"));
  if (Number.isInteger(id)) {
    await prisma.companyHeroImage.delete({ where: { id } }).catch(() => null);
  }

  revalidatePath("/admin/companies");
  revalidatePublicCompanyPaths();
}

// Persists a new order for one company's hero gallery after a reorder in the
// editor. Called directly from the client component, same as
// reorderCompaniesAction above.
export async function reorderHeroImagesAction(orderedIds: number[]): Promise<void> {
  await requireAdmin();

  await prisma.$transaction(
    orderedIds.map((id, index) =>
      prisma.companyHeroImage.update({ where: { id }, data: { order: index } }),
    ),
  );

  revalidatePath("/admin/companies");
  revalidatePublicCompanyPaths();
}
