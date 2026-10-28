import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { getCurrentAdmin } from "@/lib/session";
import BarChart, { type BarDatum } from "@/components/admin/BarChart";
import { CompaniesIcon, MediaIcon, MessagesIcon, ProductsIcon } from "@/components/admin/icons";

// Every number on this page comes from the database. Each query is isolated, so
// one failing (or a table that hasn't been migrated yet) shows a dash for that
// figure instead of taking the whole dashboard down.
async function safe<T>(label: string, read: () => Promise<T>, fallback: T): Promise<T> {
  try {
    return await read();
  } catch (error) {
    console.error(`Dashboard: ${label} failed:`, error);
    return fallback;
  }
}

const CHART_MONTHS = 8;
const MONTH_FORMAT = new Intl.DateTimeFormat("en-US", { month: "short" });

function timeAgo(date: Date): string {
  const seconds = Math.max(0, Math.round((Date.now() - date.getTime()) / 1000));
  if (seconds < 60) return "Just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} min ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hour${hours === 1 ? "" : "s"} ago`;
  const days = Math.floor(hours / 24);
  if (days === 1) return "Yesterday";
  if (days < 30) return `${days} days ago`;
  return date.toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" });
}

// Messages per calendar month for the last CHART_MONTHS months, oldest first.
function bucketByMonth(dates: Date[]): BarDatum[] {
  const now = new Date();
  const buckets: BarDatum[] = [];
  const index = new Map<string, number>();
  for (let i = CHART_MONTHS - 1; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    index.set(`${d.getFullYear()}-${d.getMonth()}`, buckets.length);
    buckets.push({ label: MONTH_FORMAT.format(d), value: 0 });
  }
  for (const date of dates) {
    const at = index.get(`${date.getFullYear()}-${date.getMonth()}`);
    if (at !== undefined) buckets[at].value += 1;
  }
  return buckets;
}

type Activity = { text: string; at: Date };

async function loadActivity(): Promise<Activity[]> {
  const take = 4;
  const [news, events, media, products, faqs, messages] = await Promise.all([
    safe("news", () => prisma.newsItem.findMany({ orderBy: { createdAt: "desc" }, take, select: { title: true, createdAt: true } }), []),
    safe("events", () => prisma.eventItem.findMany({ orderBy: { createdAt: "desc" }, take, select: { title: true, createdAt: true } }), []),
    safe("media", () => prisma.mediaItem.findMany({ orderBy: { createdAt: "desc" }, take, select: { title: true, createdAt: true } }), []),
    safe("products", () => prisma.product.findMany({ orderBy: { createdAt: "desc" }, take, select: { name: true, createdAt: true } }), []),
    safe("faq", () => prisma.faqItem.findMany({ orderBy: { createdAt: "desc" }, take, select: { questionEn: true, createdAt: true } }), []),
    safe("messages", () => prisma.contactMessage.findMany({ orderBy: { createdAt: "desc" }, take, select: { name: true, createdAt: true } }), []),
  ]);

  return [
    ...news.map((r) => ({ text: `News “${r.title}” added`, at: r.createdAt })),
    ...events.map((r) => ({ text: `Event “${r.title}” added`, at: r.createdAt })),
    ...media.map((r) => ({ text: `Gallery item “${r.title}” added`, at: r.createdAt })),
    ...products.map((r) => ({ text: `Product “${r.name}” added`, at: r.createdAt })),
    ...faqs.map((r) => ({ text: `FAQ “${r.questionEn}” added`, at: r.createdAt })),
    ...messages.map((r) => ({ text: `New message from ${r.name}`, at: r.createdAt })),
  ]
    .sort((a, b) => b.at.getTime() - a.at.getTime())
    .slice(0, 6);
}

export default async function AdminDashboardPage() {
  const admin = await getCurrentAdmin();
  const firstName = admin?.name.trim().split(/\s+/)[0] || "Admin";

  const monthStart = new Date();
  monthStart.setMonth(monthStart.getMonth() - (CHART_MONTHS - 1), 1);
  monthStart.setHours(0, 0, 0, 0);

  const [
    companies,
    companiesPublished,
    products,
    productsPublished,
    mediaCount,
    newsCount,
    eventCount,
    unread,
    totalMessages,
    recentMessages,
    chartDates,
    activity,
  ] = await Promise.all([
    safe("companies", () => prisma.company.count(), null),
    safe("companies published", () => prisma.company.count({ where: { isPublished: true } }), null),
    safe("products", () => prisma.product.count(), null),
    safe("products published", () => prisma.product.count({ where: { isPublished: true } }), null),
    safe("media", () => prisma.mediaItem.count(), null),
    safe("news", () => prisma.newsItem.count(), null),
    safe("events", () => prisma.eventItem.count(), null),
    safe("unread messages", () => prisma.contactMessage.count({ where: { isRead: false } }), null),
    safe("messages", () => prisma.contactMessage.count(), null),
    safe(
      "recent messages",
      () =>
        prisma.contactMessage.findMany({
          orderBy: { createdAt: "desc" },
          take: 5,
          select: { id: true, name: true, subject: true, createdAt: true, isRead: true },
        }),
      [],
    ),
    safe(
      "message history",
      () =>
        prisma.contactMessage
          .findMany({ where: { createdAt: { gte: monthStart } }, select: { createdAt: true }, take: 10_000 })
          .then((rows) => rows.map((r) => r.createdAt)),
      [] as Date[],
    ),
    loadActivity(),
  ]);

  const dash = (n: number | null) => (n === null ? "–" : String(n));
  const contentTotal =
    mediaCount === null || newsCount === null || eventCount === null
      ? null
      : mediaCount + newsCount + eventCount;

  const STATS = [
    {
      label: "Companies",
      value: dash(companies),
      hint: companiesPublished === null ? "" : `${companiesPublished} published`,
      icon: CompaniesIcon,
      href: "/admin/companies",
    },
    {
      label: "Products",
      value: dash(products),
      hint: productsPublished === null ? "" : `${productsPublished} published`,
      icon: ProductsIcon,
      href: "/admin/products",
    },
    {
      label: "News & Media",
      value: dash(contentTotal),
      hint:
        contentTotal === null
          ? ""
          : `${newsCount} news · ${eventCount} events · ${mediaCount} gallery`,
      icon: MediaIcon,
      href: "/admin/media",
    },
    {
      label: "Unread Messages",
      value: dash(unread),
      hint: totalMessages === null ? "" : `${totalMessages} total`,
      icon: MessagesIcon,
      href: "/admin/messages",
    },
  ];

  const chart = bucketByMonth(chartDates);
  const chartTotal = chart.reduce((sum, d) => sum + d.value, 0);

  return (
    <div className="space-y-6">
      {/* Greeting */}
      <div>
        <h2 className="text-xl font-semibold text-neutral-900">Welcome back, {firstName}</h2>
        <p className="mt-1 text-sm text-neutral-500">
          Here&apos;s what&apos;s happening across FHS Enterprise today.
        </p>
      </div>

      {/* Stat tiles */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {STATS.map((s) => {
          const Icon = s.icon;
          return (
            <Link
              key={s.label}
              href={s.href}
              className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm transition-colors hover:border-blue-200"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-blue-light text-brand-blue">
                <Icon className="h-5 w-5" />
              </span>
              <p className="mt-4 text-2xl font-semibold text-neutral-900 tabular-nums">{s.value}</p>
              <p className="text-sm font-medium text-neutral-500">{s.label}</p>
              {s.hint && <p className="mt-1 text-xs text-neutral-400">{s.hint}</p>}
            </Link>
          );
        })}
      </div>

      {/* Chart + activity */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm lg:col-span-2">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold text-neutral-900">Contact messages</h3>
              <p className="text-xs text-neutral-500">Last {CHART_MONTHS} months</p>
            </div>
            <span className="rounded-md bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-600">
              {chartTotal} received
            </span>
          </div>
          <BarChart data={chart} />
        </div>

        <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
          <h3 className="mb-4 text-sm font-semibold text-neutral-900">Recent activity</h3>
          {activity.length === 0 ? (
            <p className="text-sm text-neutral-500">Nothing yet. New content shows up here.</p>
          ) : (
            <ul className="space-y-4">
              {activity.map((a, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-blue" />
                  <div className="min-w-0">
                    <p className="text-sm break-words text-neutral-700">{a.text}</p>
                    <p className="text-xs text-neutral-400">{timeAgo(a.at)}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Recent messages */}
      <div className="rounded-xl border border-neutral-200 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-neutral-100 px-5 py-4">
          <h3 className="text-sm font-semibold text-neutral-900">Recent messages</h3>
          <Link
            href="/admin/messages"
            className="text-xs font-semibold text-brand-blue hover:text-brand-blue-hover"
          >
            View all
          </Link>
        </div>
        {recentMessages.length === 0 ? (
          <p className="px-5 py-8 text-center text-sm text-neutral-500">
            No messages yet. Contact form submissions appear here.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead>
                <tr className="text-xs text-neutral-400">
                  <th className="px-5 py-3 font-medium">Name</th>
                  <th className="px-5 py-3 font-medium">Subject</th>
                  <th className="px-5 py-3 font-medium">Received</th>
                  <th className="px-5 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {recentMessages.map((m) => (
                  <tr key={m.id} className="hover:bg-neutral-50">
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 text-xs font-semibold text-neutral-600">
                          {m.name.charAt(0).toUpperCase()}
                        </span>
                        <span className="font-medium text-neutral-800">{m.name}</span>
                      </div>
                    </td>
                    <td className="max-w-xs truncate px-5 py-3.5 text-neutral-600">{m.subject}</td>
                    <td className="px-5 py-3.5 whitespace-nowrap text-neutral-400">
                      {timeAgo(m.createdAt)}
                    </td>
                    <td className="px-5 py-3.5">
                      {m.isRead ? (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-500">
                          <span className="h-1.5 w-1.5 rounded-full bg-neutral-400" />
                          Read
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-blue-light px-2.5 py-1 text-xs font-medium text-brand-blue">
                          <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
                          New
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
