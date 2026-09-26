import { prisma } from "@/lib/prisma";
import { siteLabel } from "@/lib/sites";
import CompaniesClient from "@/components/admin/companies/CompaniesClient";
import type { CompanyCardData } from "@/components/admin/companies/CompanyCard";

export default async function AdminCompaniesPage() {
  // Bytes columns are deliberately excluded — the browser fetches image
  // pixels from /api/companies/[id]/{logo,banner} and
  // /api/companies/hero-images/[id] instead, so multi-megabyte blobs never
  // ride along in the page's RSC payload.
  const rows = await prisma.company.findMany({
    orderBy: { order: "asc" },
    select: {
      id: true,
      site: true,
      subdomain: true,
      nameEn: true,
      nameBn: true,
      sectorEn: true,
      sectorBn: true,
      descriptionEn: true,
      descriptionBn: true,
      logoMimeType: true,
      bannerMimeType: true,
      order: true,
      isPublished: true,
      heroImages: {
        orderBy: { order: "asc" },
        select: { id: true, headlineEn: true, headlineBn: true, taglineEn: true, taglineBn: true },
      },
    },
  });

  const companies: CompanyCardData[] = rows.map((row) => ({
    id: row.id,
    siteLabel: siteLabel(row.site),
    subdomain: row.subdomain,
    nameEn: row.nameEn,
    nameBn: row.nameBn,
    sectorEn: row.sectorEn,
    sectorBn: row.sectorBn,
    descriptionEn: row.descriptionEn,
    descriptionBn: row.descriptionBn,
    logoUrl: row.logoMimeType ? `/api/companies/${row.id}/logo` : null,
    bannerUrl: row.bannerMimeType ? `/api/companies/${row.id}/banner` : null,
    heroImages: row.heroImages.map((h) => ({
      id: h.id,
      url: `/api/companies/hero-images/${h.id}`,
      headlineEn: h.headlineEn ?? "",
      headlineBn: h.headlineBn ?? "",
      taglineEn: h.taglineEn ?? "",
      taglineBn: h.taglineBn ?? "",
    })),
    order: row.order,
    isPublished: row.isPublished,
  }));

  return <CompaniesClient companies={companies} />;
}
