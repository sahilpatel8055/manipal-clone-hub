import { useCallback, useEffect, useState } from "react";

/**
 * Lightweight, privacy-friendly student activity store (localStorage only).
 * Powers Recently Viewed, Saved Universities, Saved Comparisons and
 * Downloaded Brochures on the student dashboard, plus Smart Related Content.
 */

export interface ActivityItem {
  path: string;
  title: string;
  at: number;
}

const KEYS = {
  recent: "avedu_recently_viewed",
  universities: "avedu_saved_universities",
  comparisons: "avedu_saved_comparisons",
  brochures: "avedu_brochures",
} as const;

export type ActivityKey = keyof typeof KEYS;

const EVENT = "avedu-activity-change";

const read = (key: ActivityKey): ActivityItem[] => {
  try {
    const raw = localStorage.getItem(KEYS[key]);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const write = (key: ActivityKey, items: ActivityItem[]) => {
  try {
    localStorage.setItem(KEYS[key], JSON.stringify(items.slice(0, 30)));
    window.dispatchEvent(new CustomEvent(EVENT, { detail: key }));
  } catch {
    /* storage disabled — feature degrades silently */
  }
};

export const recordActivity = (key: ActivityKey, item: Omit<ActivityItem, "at">) => {
  if (typeof window === "undefined" || !item.path) return;
  const existing = read(key).filter((i) => i.path !== item.path);
  write(key, [{ ...item, at: Date.now() }, ...existing]);
};

export const removeActivity = (key: ActivityKey, path: string) => {
  write(key, read(key).filter((i) => i.path !== path));
};

export const isSaved = (key: ActivityKey, path: string) =>
  read(key).some((i) => i.path === path);

export const useActivity = (key: ActivityKey) => {
  const [items, setItems] = useState<ActivityItem[]>([]);

  const refresh = useCallback(() => setItems(read(key)), [key]);

  useEffect(() => {
    refresh();
    const handler = () => refresh();
    window.addEventListener(EVENT, handler);
    window.addEventListener("storage", handler);
    return () => {
      window.removeEventListener(EVENT, handler);
      window.removeEventListener("storage", handler);
    };
  }, [refresh]);

  const toggle = useCallback(
    (item: Omit<ActivityItem, "at">) => {
      if (isSaved(key, item.path)) removeActivity(key, item.path);
      else recordActivity(key, item);
    },
    [key],
  );

  return { items, toggle, remove: (path: string) => removeActivity(key, path), refresh };
};
