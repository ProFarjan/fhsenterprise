import { prisma } from "@/lib/prisma";
import { SiteKey } from "@/generated/prisma/enums";
import FaqClient from "@/components/admin/faq/FaqClient";
import type { FaqCardData } from "@/components/admin/faq/FaqCard";

export default async function AdminFaqPage() {
  const rows = await prisma.faqItem.findMany({
    where: { site: SiteKey.FHS_ENTERPRISE },
    orderBy: [{ order: "asc" }, { createdAt: "asc" }],
    select: {
      id: true,
      order: true,
      questionEn: true,
      questionBn: true,
      answerEn: true,
      answerBn: true,
    },
  });

  const faqs: FaqCardData[] = rows.map((row) => ({
    id: row.id,
    order: row.order,
    questionEn: row.questionEn,
    questionBn: row.questionBn,
    answerEn: row.answerEn,
    answerBn: row.answerBn,
  }));

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-neutral-900">FAQ</h2>
        <p className="mt-1 text-sm text-neutral-500">
          Manage the questions on the MR Group About &gt; FAQ page. Each answer is shown in the
          visitor&apos;s language, so both English and Bangla are required.
        </p>
      </div>
      <FaqClient faqs={faqs} />
    </div>
  );
}
