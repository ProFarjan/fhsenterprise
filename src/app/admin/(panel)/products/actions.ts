"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/session";
import { isSiteKey } from "@/lib/sites";
import { isImageValidationError, readAndValidateImage } from "@/lib/imageUpload";
import { isValidCategory } from "@/lib/productCategories";
import { Prisma } from "@/generated/prisma/client";

export type ProductFormState = { error?: string; success?: boolean };

// A page-level `requireAdmin()` check (in the (panel) layout) does not extend
// to Server Actions — Next.js treats every action as its own reachable POST
// endpoint, so each one re-verifies the session itself.

// Admin-side CRUD only for now — no subsidiary's public site reads from
// Product yet (see the model's comment in prisma/schema.prisma), so there is
// no revalidatePublicPaths() here the way Media/Companies have one. Only the
// admin list itself needs revalidating.

function slugify(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 200);
}

// One benefit per line — blank lines dropped.
function parseBenefits(raw: string): string[] {
  return raw
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

// "Label: Value" per line — lines without a colon are dropped rather than
// rejecting the whole form, since a mistyped line shouldn't block saving the
// rest of the product.
function parseSpecs(raw: string): { label: string; value: string }[] {
  return raw
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const colon = line.indexOf(":");
      if (colon === -1) return null;
      const label = line.slice(0, colon).trim();
      const value = line.slice(colon + 1).trim();
      if (!label || !value) return null;
      return { label, value };
    })
    .filter((spec): spec is { label: string; value: string } => spec !== null);
}

export async function createProductAction(
  _prev: ProductFormState,
  formData: FormData,
): Promise<ProductFormState> {
  const admin = await requireAdmin();

  const site = String(formData.get("site") ?? "");
  const category = String(formData.get("category") ?? "").trim();
  const name = String(formData.get("name") ?? "").trim();
  const tagline = String(formData.get("tagline") ?? "").trim();
  const description = String(formData.get("description") ?? "").trim();
  const benefitsRaw = String(formData.get("benefits") ?? "");
  const specsRaw = String(formData.get("specs") ?? "");
  const isPublished = formData.get("isPublished") === "on";

  if (!isSiteKey(site)) return { error: "Choose a company." };
  if (!isValidCategory(site, category)) return { error: "Choose a valid category for this company." };
  if (!name) return { error: "Name is required." };
  if (!tagline) return { error: "Tagline is required." };
  if (!description) return { error: "Description is required." };

  const file = formData.get("image");
  if (!(file instanceof File) || file.size === 0) {
    return { error: "Please choose a product image." };
  }
  const validated = await readAndValidateImage(file);
  if (isImageValidationError(validated)) return { error: validated.error };

  const benefits = parseBenefits(benefitsRaw);
  const specs = parseSpecs(specsRaw);

  const baseSlug = slugify(name) || "product";
  let slug = baseSlug;
  for (let suffix = 2; ; suffix++) {
    const existing = await prisma.product.findUnique({
      where: { site_slug: { site, slug } },
      select: { id: true },
    });
    if (!existing) break;
    slug = `${baseSlug}-${suffix}`;
  }

  await prisma.product.create({
    data: {
      site,
      slug,
      category,
      name,
      tagline,
      description,
      benefits: benefits.length > 0 ? benefits : undefined,
      specs: specs.length > 0 ? specs : undefined,
      imageData: validated.data,
      imageMimeType: validated.mimeType,
      isPublished,
      createdById: admin.id,
    },
  });

  revalidatePath("/admin/products");
  return { success: true };
}

// Company (site) and slug are fixed at creation and not editable here —
// changing which subsidiary a product belongs to, or its URL-friendly id,
// is rare enough to not be worth the slug-collision handling it would need.
export async function updateProductAction(
  _prev: ProductFormState,
  formData: FormData,
): Promise<ProductFormState> {
  await requireAdmin();

  const id = Number(formData.get("id"));
  if (!Number.isInteger(id)) return { error: "Unknown product." };

  const current = await prisma.product.findUnique({ where: { id }, select: { site: true } });
  if (!current) return { error: "Unknown product." };

  const category = String(formData.get("category") ?? "").trim();
  const name = String(formData.get("name") ?? "").trim();
  const tagline = String(formData.get("tagline") ?? "").trim();
  const description = String(formData.get("description") ?? "").trim();
  const benefitsRaw = String(formData.get("benefits") ?? "");
  const specsRaw = String(formData.get("specs") ?? "");
  const isPublished = formData.get("isPublished") === "on";

  if (!isValidCategory(current.site, category)) {
    return { error: "Choose a valid category for this company." };
  }
  if (!name) return { error: "Name is required." };
  if (!tagline) return { error: "Tagline is required." };
  if (!description) return { error: "Description is required." };

  // Replacing the image is optional — an empty file input keeps the current one.
  const file = formData.get("image");
  let image: { data: Uint8Array<ArrayBuffer>; mimeType: string } | null = null;
  if (file instanceof File && file.size > 0) {
    const validated = await readAndValidateImage(file);
    if (isImageValidationError(validated)) return { error: validated.error };
    image = validated;
  }

  const benefits = parseBenefits(benefitsRaw);
  const specs = parseSpecs(specsRaw);

  await prisma.product.update({
    where: { id },
    data: {
      category,
      name,
      tagline,
      description,
      benefits: benefits.length > 0 ? benefits : Prisma.DbNull,
      specs: specs.length > 0 ? specs : Prisma.DbNull,
      isPublished,
      ...(image && { imageData: image.data, imageMimeType: image.mimeType }),
    },
  });

  revalidatePath("/admin/products");
  return { success: true };
}

export async function deleteProductAction(formData: FormData): Promise<void> {
  await requireAdmin();
  const id = Number(formData.get("id"));
  if (Number.isInteger(id)) {
    await prisma.product.delete({ where: { id } }).catch(() => null);
  }
  revalidatePath("/admin/products");
}
