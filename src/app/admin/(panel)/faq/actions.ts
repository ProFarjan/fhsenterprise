"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/session";
import { SiteKey } from "@/generated/prisma/enums";
import { formString } from "@/lib/formData";
import { revalidateLocalized } from "@/lib/revalidate";
import {
  LIMITS,
  describeActionError,
  ignoreNotFound,
  lengthError,
  positiveInt,
} from "@/lib/actionGuards";

export type FaqFormState = { error?: string; success?: boolean };

// A page-level `requireAdmin()` check (in the (panel) layout) does not extend
// to Server Actions — Next.js treats every action as its own reachable POST
// endpoint, so each one re-verifies the session itself. Mirrors the pattern in
// src/app/admin/(panel)/media/actions.ts.

// The public FAQ page reads the FaqItem table straight from the database (see
// getFaqs in src/lib/publicContent.ts and about/faq/page.tsx). Next only
// revalidates on demand, so without this a newly added/edited/removed question
// wouldn't appear on the live site until something else invalidated the route.
function revalidateFaqPaths() {
  revalidatePath("/admin/faq");
  revalidateLocalized("/about/faq");
}

function readFaqFields(formData: FormData) {
  return {
    questionEn: formString(formData, "questionEn"),
    questionBn: formString(formData, "questionBn"),
    answerEn: formString(formData, "answerEn"),
    answerBn: formString(formData, "answerBn"),
    order: Number(formData.get("order") ?? 0),
  };
}

function validateFaqFields(f: ReturnType<typeof readFaqFields>): string | null {
  if (!f.questionEn) return "English question is required.";
  if (!f.questionBn) return "Bangla question is required.";
  if (!f.answerEn) return "English answer is required.";
  if (!f.answerBn) return "Bangla answer is required.";
  if (!Number.isFinite(f.order)) return "Order must be a number.";
  if (Math.abs(f.order) > 1_000_000) return "Order is out of range.";
  return lengthError([
    ["English question", f.questionEn, LIMITS.faqQuestion],
    ["Bangla question", f.questionBn, LIMITS.faqQuestion],
    ["English answer", f.answerEn, LIMITS.longText],
    ["Bangla answer", f.answerBn, LIMITS.longText],
  ]);
}

export async function createFaqAction(
  _prev: FaqFormState,
  formData: FormData,
): Promise<FaqFormState> {
  const admin = await requireAdmin();

  const fields = readFaqFields(formData);
  const error = validateFaqFields(fields);
  if (error) return { error };

  try {
    await prisma.faqItem.create({
      data: {
        site: SiteKey.FHS_ENTERPRISE,
        questionEn: fields.questionEn,
        questionBn: fields.questionBn,
        answerEn: fields.answerEn,
        answerBn: fields.answerBn,
        order: Math.trunc(fields.order),
        createdById: admin.id,
      },
    });
  } catch (error) {
    return { error: describeActionError(error, "Couldn't save the FAQ. Please try again.") };
  }

  revalidateFaqPaths();
  return { success: true };
}

export async function updateFaqAction(
  _prev: FaqFormState,
  formData: FormData,
): Promise<FaqFormState> {
  await requireAdmin();

  const id = positiveInt(formData.get("id"));
  if (id === null) return { error: "Invalid FAQ id." };

  const fields = readFaqFields(formData);
  const error = validateFaqFields(fields);
  if (error) return { error };

  const updated = await prisma.faqItem
    .update({
      where: { id },
      data: {
        questionEn: fields.questionEn,
        questionBn: fields.questionBn,
        answerEn: fields.answerEn,
        answerBn: fields.answerBn,
        order: Math.trunc(fields.order),
      },
    })
    .catch(ignoreNotFound);

  if (!updated) return { error: "FAQ not found." };

  revalidateFaqPaths();
  return { success: true };
}

export async function deleteFaqAction(formData: FormData): Promise<void> {
  await requireAdmin();
  const id = positiveInt(formData.get("id"));
  if (id !== null) {
    await prisma.faqItem.delete({ where: { id } }).catch(ignoreNotFound);
  }
  revalidateFaqPaths();
}
