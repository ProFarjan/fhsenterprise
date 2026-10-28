// In-memory, fixed-window rate limiting.
//
// State lives in this Node process only: it resets on restart/redeploy and is
// NOT shared between instances (or serverless invocations), so behind several
// instances the effective limit is `limit × instances`. That is an accepted
// trade-off for a single-server deployment; swap the store for a database
// table or Redis if the site ever runs on more than one instance.
//
// Used for the admin login, password change and the public contact form.

type Entry = { count: number; resetAt: number };

export type RateLimitResult = {
  /** `hit`: this event exceeded the limit. `check`: the next event would. */
  limited: boolean;
  remaining: number;
  retryAfterSeconds: number;
};

export type RateLimiter = {
  /** Records one event for `key` and reports whether it is over the limit. */
  hit(key: string): RateLimitResult;
  /** Reports whether the next event for `key` would be rejected, recording nothing. */
  check(key: string): RateLimitResult;
  /** Forgets `key` (e.g. after a successful login). */
  reset(key: string): void;
};

// One Map per limiter name, kept on globalThis so dev HMR doesn't wipe counters
// (same pattern as the Prisma singleton in src/lib/prisma.ts).
const globalForLimits = globalThis as unknown as {
  rateLimitStores?: Map<string, Map<string, Entry>>;
};
const stores = (globalForLimits.rateLimitStores ??= new Map());

const MAX_KEYS_PER_LIMITER = 10_000;

export function createRateLimiter(options: {
  name: string;
  /** Maximum events allowed per window. */
  limit: number;
  windowMs: number;
}): RateLimiter {
  const { name, limit, windowMs } = options;

  let store = stores.get(name);
  if (!store) {
    store = new Map();
    stores.set(name, store);
  }
  const entries = store;

  // Keeps memory bounded: drop expired windows first, then the oldest keys.
  function prune(now: number) {
    if (entries.size < MAX_KEYS_PER_LIMITER) return;
    for (const [key, entry] of entries) {
      if (entry.resetAt <= now) entries.delete(key);
    }
    for (const key of entries.keys()) {
      if (entries.size < MAX_KEYS_PER_LIMITER) break;
      entries.delete(key);
    }
  }

  function live(key: string, now: number): Entry | undefined {
    const entry = entries.get(key);
    if (!entry) return undefined;
    if (entry.resetAt <= now) {
      entries.delete(key);
      return undefined;
    }
    return entry;
  }

  function result(count: number, resetAt: number, now: number, limited: boolean): RateLimitResult {
    return {
      limited,
      remaining: Math.max(0, limit - count),
      retryAfterSeconds: limited ? Math.max(1, Math.ceil((resetAt - now) / 1000)) : 0,
    };
  }

  return {
    hit(key) {
      const now = Date.now();
      prune(now);
      const entry = live(key, now) ?? { count: 0, resetAt: now + windowMs };
      entry.count += 1;
      entries.set(key, entry);
      return result(entry.count, entry.resetAt, now, entry.count > limit);
    },
    check(key) {
      const now = Date.now();
      const entry = live(key, now);
      if (!entry) return result(0, now, now, false);
      return result(entry.count, entry.resetAt, now, entry.count >= limit);
    },
    reset(key) {
      entries.delete(key);
    },
  };
}
