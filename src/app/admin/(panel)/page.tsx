import Link from "next/link";
import BarChart, { type BarDatum } from "@/components/admin/BarChart";
import {
  CompaniesIcon,
  MessagesIcon,
  ProductsIcon,
  MediaIcon,
  TrendDownIcon,
  TrendUpIcon,
} from "@/components/admin/icons";

// ---- Demo data ----------------------------------------------------------
// Static placeholder figures. When the Prisma models land, these become live
// counts (see prisma/schema.prisma).

const STATS = [
  {
    label: "Companies",
    value: "5",
    delta: "+1",
    up: true,
    hint: "vs. last quarter",
    icon: CompaniesIcon,
  },
  {
    label: "Products",
    value: "184",
    delta: "+12",
    up: true,
    hint: "added this month",
    icon: ProductsIcon,
  },
  {
    label: "News & Media",
    value: "37",
    delta: "+3",
    up: true,
    hint: "published this month",
    icon: MediaIcon,
  },
  {
    label: "New Messages",
    value: "4",
    delta: "-2",
    up: false,
    hint: "vs. last week",
    icon: MessagesIcon,
  },
];

const ENQUIRIES: BarDatum[] = [
  { label: "Dec", value: 62 },
  { label: "Jan", value: 84 },
  { label: "Feb", value: 71 },
  { label: "Mar", value: 96 },
  { label: "Apr", value: 120 },
  { label: "May", value: 108 },
  { label: "Jun", value: 143 },
  { label: "Jul", value: 131 },
];

const MESSAGES = [
  {
    name: "Rafiqul Islam",
    company: "MR Agro",
    subject: "Bulk order enquiry — seeds",
    time: "12 min ago",
    status: "new",
  },
  {
    name: "Nasima Akter",
    company: "MR Feed",
    subject: "Dealer partnership request",
    time: "1 hour ago",
    status: "new",
  },
  {
    name: "Tanvir Ahmed",
    company: "MR Filling Station",
    subject: "Fuel supply schedule question",
    time: "3 hours ago",
    status: "read",
  },
  {
    name: "Shirin Sultana",
    company: "MR Agro Medicine",
    subject: "Product availability — vaccines",
    time: "Yesterday",
    status: "read",
  },
  {
    name: "Kamal Hossain",
    company: "MR Group",
    subject: "Career / internship enquiry",
    time: "Yesterday",
    status: "read",
  },
];

const ACTIVITY = [
  { text: "New product “Layer Starter Feed” added to MR Feed", time: "25 min ago" },
  { text: "News article published in Media & News", time: "2 hours ago" },
  { text: "MR Agro Medicine product catalog updated", time: "5 hours ago" },
  { text: "Homepage hero banner replaced", time: "Yesterday" },
  { text: "3 contact messages archived", time: "2 days ago" },
];

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      {/* Greeting */}
      <div>
        <h2 className="text-xl font-semibold text-neutral-900">
          Welcome back, Admin
        </h2>
        <p className="mt-1 text-sm text-neutral-500">
          Here&apos;s what&apos;s happening across MR Group today.
        </p>
      </div>

      {/* Stat tiles */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {STATS.map((s) => {
          const Icon = s.icon;
          const Trend = s.up ? TrendUpIcon : TrendDownIcon;
          return (
            <div
              key={s.label}
              className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
                  <Icon className="h-5 w-5" />
                </span>
                <span
                  className={`inline-flex items-center gap-1 text-xs font-semibold ${
                    s.up ? "text-green-600" : "text-red-500"
                  }`}
                >
                  <Trend className="h-3.5 w-3.5" />
                  {s.delta}
                </span>
              </div>
              <p className="mt-4 text-2xl font-semibold text-neutral-900 tabular-nums">
                {s.value}
              </p>
              <p className="text-sm font-medium text-neutral-500">{s.label}</p>
              <p className="mt-1 text-xs text-neutral-400">{s.hint}</p>
            </div>
          );
        })}
      </div>

      {/* Chart + activity */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm lg:col-span-2">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold text-neutral-900">
                Contact enquiries
              </h3>
              <p className="text-xs text-neutral-500">Last 8 months</p>
            </div>
            <span className="rounded-md bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-600">
              Monthly
            </span>
          </div>
          <BarChart data={ENQUIRIES} />
        </div>

        <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
          <h3 className="mb-4 text-sm font-semibold text-neutral-900">
            Recent activity
          </h3>
          <ul className="space-y-4">
            {ACTIVITY.map((a, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                <div>
                  <p className="text-sm text-neutral-700">{a.text}</p>
                  <p className="text-xs text-neutral-400">{a.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Recent messages */}
      <div className="rounded-xl border border-neutral-200 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-neutral-100 px-5 py-4">
          <h3 className="text-sm font-semibold text-neutral-900">
            Recent messages
          </h3>
          <Link
            href="/admin/messages"
            className="text-xs font-semibold text-orange-600 hover:text-orange-500"
          >
            View all
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="text-xs text-neutral-400">
                <th className="px-5 py-3 font-medium">Name</th>
                <th className="px-5 py-3 font-medium">Company</th>
                <th className="px-5 py-3 font-medium">Subject</th>
                <th className="px-5 py-3 font-medium">Received</th>
                <th className="px-5 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {MESSAGES.map((m, i) => (
                <tr key={i} className="hover:bg-neutral-50">
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 text-xs font-semibold text-neutral-600">
                        {m.name.charAt(0)}
                      </span>
                      <span className="font-medium text-neutral-800">{m.name}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3.5 text-neutral-600">{m.company}</td>
                  <td className="px-5 py-3.5 text-neutral-600">{m.subject}</td>
                  <td className="px-5 py-3.5 whitespace-nowrap text-neutral-400">
                    {m.time}
                  </td>
                  <td className="px-5 py-3.5">
                    {m.status === "new" ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 px-2.5 py-1 text-xs font-medium text-orange-700">
                        <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                        New
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-500">
                        <span className="h-1.5 w-1.5 rounded-full bg-neutral-400" />
                        Read
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
