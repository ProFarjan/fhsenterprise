import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { positiveInt } from "@/lib/actionGuards";
import DeleteItemButton from "@/components/admin/media/DeleteItemButton";
import { MessagesIcon } from "@/components/admin/icons";
import {
  deleteMessageAction,
  markAllMessagesReadAction,
  setMessageReadAction,
} from "./actions";

const PAGE_SIZE = 20;

type SearchParams = { page?: string; filter?: string };

function formatReceived(date: Date): string {
  return date.toLocaleString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Dhaka",
  });
}

function pageHref(page: number, unreadOnly: boolean): string {
  const params = new URLSearchParams();
  if (unreadOnly) params.set("filter", "unread");
  if (page > 1) params.set("page", String(page));
  const query = params.toString();
  return query ? `/admin/messages?${query}` : "/admin/messages";
}

export default async function AdminMessagesPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const sp = await searchParams;
  const unreadOnly = sp.filter === "unread";
  const requestedPage = positiveInt(sp.page) ?? 1;
  const where = unreadOnly ? { isRead: false } : {};

  let loaded: {
    messages: Awaited<ReturnType<typeof prisma.contactMessage.findMany>>;
    total: number;
    unread: number;
  } | null = null;
  let page = requestedPage;

  try {
    const [total, unread] = await Promise.all([
      prisma.contactMessage.count({ where }),
      prisma.contactMessage.count({ where: { isRead: false } }),
    ]);
    // A stale ?page= past the end (e.g. after deleting the last item on it)
    // falls back to the last page instead of an empty list.
    page = Math.min(requestedPage, Math.max(1, Math.ceil(total / PAGE_SIZE)));
    const messages = await prisma.contactMessage.findMany({
      where,
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * PAGE_SIZE,
      take: PAGE_SIZE,
    });
    loaded = { messages, total, unread };
  } catch (error) {
    console.error("Failed to load contact messages:", error);
  }

  if (!loaded) {
    return (
      <div className="space-y-6">
        <Header />
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900">
          Messages couldn&apos;t be loaded. If this is a fresh update, the database may still need
          its latest migration (<code className="font-mono">npx prisma migrate deploy</code>).
        </div>
      </div>
    );
  }

  const { messages, total, unread } = loaded;
  const pageCount = Math.max(1, Math.ceil(total / PAGE_SIZE));

  return (
    <div className="space-y-6">
      <Header />

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="inline-flex rounded-lg border border-neutral-200 bg-white p-1 text-sm">
          <Link
            href="/admin/messages"
            className={`rounded-md px-3 py-1.5 font-medium ${
              unreadOnly ? "text-neutral-600 hover:bg-neutral-50" : "bg-brand-blue text-white"
            }`}
          >
            All
          </Link>
          <Link
            href="/admin/messages?filter=unread"
            className={`rounded-md px-3 py-1.5 font-medium ${
              unreadOnly ? "bg-brand-blue text-white" : "text-neutral-600 hover:bg-neutral-50"
            }`}
          >
            Unread{unread > 0 ? ` (${unread})` : ""}
          </Link>
        </div>

        {unread > 0 && (
          <form action={markAllMessagesReadAction}>
            <button
              type="submit"
              className="rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-sm font-medium text-neutral-700 hover:bg-neutral-50"
            >
              Mark all as read
            </button>
          </form>
        )}
      </div>

      {messages.length === 0 ? (
        <div className="flex flex-col items-center rounded-xl border border-dashed border-neutral-300 bg-white/60 px-6 py-16 text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue-light text-brand-blue">
            <MessagesIcon className="h-7 w-7" />
          </span>
          <p className="mt-4 text-sm font-medium text-neutral-900">
            {unreadOnly ? "No unread messages" : "No messages yet"}
          </p>
          <p className="mt-1 max-w-sm text-sm text-neutral-500">
            Submissions from the website contact form appear here.
          </p>
        </div>
      ) : (
        <ul className="space-y-3">
          {messages.map((m) => (
            // Unread messages start expanded; read ones collapse to one line.
            <li key={m.id} className="rounded-xl border border-neutral-200 bg-white shadow-sm">
              <details open={!m.isRead} className="group">
                <summary className="flex cursor-pointer list-none items-center gap-3 px-5 py-4">
                  <span
                    className={`h-2.5 w-2.5 shrink-0 rounded-full ${
                      m.isRead ? "bg-neutral-300" : "bg-brand-blue"
                    }`}
                    aria-label={m.isRead ? "Read" : "Unread"}
                  />
                  <span className="min-w-0 flex-1">
                    <span
                      className={`block truncate text-sm ${
                        m.isRead ? "font-medium text-neutral-700" : "font-semibold text-neutral-900"
                      }`}
                    >
                      {m.subject}
                    </span>
                    <span className="block truncate text-xs text-neutral-500">
                      {m.name} · {m.email}
                    </span>
                  </span>
                  {!m.emailSent && (
                    <span
                      className="hidden rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-medium text-amber-700 sm:inline"
                      title="The notification email for this message was not sent — it is only stored here."
                    >
                      Email not sent
                    </span>
                  )}
                  <time
                    dateTime={m.createdAt.toISOString()}
                    className="shrink-0 text-xs whitespace-nowrap text-neutral-400"
                  >
                    {formatReceived(m.createdAt)}
                  </time>
                </summary>

                <div className="border-t border-neutral-100 px-5 py-4">
                  <dl className="grid grid-cols-1 gap-x-6 gap-y-1 text-sm sm:grid-cols-2">
                    <div className="flex gap-2">
                      <dt className="text-neutral-400">From</dt>
                      <dd className="text-neutral-800">{m.name}</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="text-neutral-400">Email</dt>
                      <dd>
                        <a
                          href={`mailto:${m.email}`}
                          className="text-brand-blue hover:text-brand-blue-hover"
                        >
                          {m.email}
                        </a>
                      </dd>
                    </div>
                    {m.phone && (
                      <div className="flex gap-2">
                        <dt className="text-neutral-400">Phone</dt>
                        <dd>
                          <a
                            href={`tel:${m.phone}`}
                            className="text-brand-blue hover:text-brand-blue-hover"
                          >
                            {m.phone}
                          </a>
                        </dd>
                      </div>
                    )}
                  </dl>

                  <p className="mt-4 text-sm leading-6 break-words whitespace-pre-wrap text-neutral-700">
                    {m.message}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    <a
                      href={`mailto:${m.email}?subject=${encodeURIComponent(`Re: ${m.subject}`)}`}
                      className="rounded-lg bg-brand-blue px-3 py-1.5 text-sm font-medium text-white hover:bg-brand-blue-hover"
                    >
                      Reply by email
                    </a>
                    <form action={setMessageReadAction}>
                      <input type="hidden" name="id" value={m.id} />
                      <input type="hidden" name="read" value={m.isRead ? "0" : "1"} />
                      <button
                        type="submit"
                        className="rounded-lg border border-neutral-200 px-3 py-1.5 text-sm font-medium text-neutral-700 hover:bg-neutral-50"
                      >
                        {m.isRead ? "Mark as unread" : "Mark as read"}
                      </button>
                    </form>
                    <div className="ml-auto">
                      <DeleteItemButton
                        id={m.id}
                        itemLabel={m.subject}
                        action={deleteMessageAction}
                      />
                    </div>
                  </div>
                </div>
              </details>
            </li>
          ))}
        </ul>
      )}

      {pageCount > 1 && (
        <nav className="flex items-center justify-between text-sm" aria-label="Pagination">
          {page > 1 ? (
            <Link
              href={pageHref(page - 1, unreadOnly)}
              className="rounded-lg border border-neutral-200 bg-white px-3 py-1.5 font-medium text-neutral-700 hover:bg-neutral-50"
            >
              ← Newer
            </Link>
          ) : (
            <span />
          )}
          <span className="text-neutral-500">
            Page {page} of {pageCount}
          </span>
          {page < pageCount ? (
            <Link
              href={pageHref(page + 1, unreadOnly)}
              className="rounded-lg border border-neutral-200 bg-white px-3 py-1.5 font-medium text-neutral-700 hover:bg-neutral-50"
            >
              Older →
            </Link>
          ) : (
            <span />
          )}
        </nav>
      )}
    </div>
  );
}

function Header() {
  return (
    <div>
      <h2 className="text-xl font-semibold text-neutral-900">Messages</h2>
      <p className="mt-1 text-sm text-neutral-500">
        Submissions from the website contact form. Each one is stored here and also emailed to the
        configured address.
      </p>
    </div>
  );
}
