"use client";

import { useState } from "react";

export type BarDatum = { label: string; value: number };

// Axis top rounded up so the four gridline steps are whole, readable numbers
// (1/2/5 × 10ⁿ per step) — works for a handful of messages as well as hundreds.
function niceAxisMax(max: number): number {
  const rawStep = Math.max(max, 1) / 4;
  const magnitude = 10 ** Math.floor(Math.log10(rawStep));
  const f = rawStep / magnitude;
  const step = Math.max(1, (f <= 1 ? 1 : f <= 2 ? 2 : f <= 5 ? 5 : 10) * magnitude);
  return step * 4;
}

// A single-series magnitude chart in the FHS Enterprise brand orange. Per the data-viz
// method: one series -> no legend (the card title names it), rounded 4px data
// ends anchored to the baseline, recessive gridlines, and a per-bar hover
// tooltip. Text stays in ink tokens; only the bars carry the brand hue.
export default function BarChart({
  data,
  height = 220,
}: {
  data: BarDatum[];
  height?: number;
}) {
  const [hover, setHover] = useState<number | null>(null);
  const max = Math.max(...data.map((d) => d.value), 1);
  const niceMax = niceAxisMax(max);
  const ticks = [0, 0.25, 0.5, 0.75, 1].map((t) => Math.round(niceMax * t));

  return (
    <div className="w-full">
      <div className="flex" style={{ height }}>
        {/* Y axis ticks */}
        <div className="flex w-10 flex-col justify-between pr-2 text-right text-[11px] text-neutral-400 tabular-nums">
          {[...ticks].reverse().map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>

        {/* Plot */}
        <div className="relative flex-1">
          {/* Gridlines */}
          <div className="absolute inset-0 flex flex-col justify-between">
            {ticks.map((t) => (
              <div key={t} className="border-t border-neutral-100" />
            ))}
          </div>

          {/* Bars */}
          <div className="absolute inset-0 flex items-end gap-1.5">
            {data.map((d, i) => {
              const pct = (d.value / niceMax) * 100;
              const active = hover === i;
              return (
                <div
                  key={d.label}
                  className="group relative flex flex-1 items-end justify-center"
                  onMouseEnter={() => setHover(i)}
                  onMouseLeave={() => setHover(null)}
                >
                  {/* Tooltip */}
                  {active && (
                    <div className="pointer-events-none absolute -top-1 z-10 -translate-y-full rounded-md bg-neutral-900 px-2.5 py-1.5 text-center whitespace-nowrap text-white shadow-lg">
                      <p className="text-xs font-semibold tabular-nums">{d.value}</p>
                      <p className="text-[10px] text-neutral-400">{d.label}</p>
                    </div>
                  )}
                  <div
                    className={`w-full max-w-10 rounded-t-[4px] transition-colors ${
                      active ? "bg-orange-500" : "bg-orange-600"
                    }`}
                    style={{ height: `${Math.max(pct, 1)}%` }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* X axis labels */}
      <div className="mt-2 flex pl-10">
        <div className="flex flex-1 gap-1.5">
          {data.map((d) => (
            <span
              key={d.label}
              className="flex-1 text-center text-[11px] text-neutral-400"
            >
              {d.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
