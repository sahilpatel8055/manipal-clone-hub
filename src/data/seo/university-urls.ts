/**
 * Canonical university URL map (Phase 1 — SEO foundation).
 *
 * One university = one indexable URL: /universities/{slug}-online
 * One university course = /universities/{slug}-online/courses/{courseId}
 *
 * Every historical URL for the same entity lives in LEGACY_URL_REDIRECTS and is
 * redirected to its canonical twin so no two URLs target the same keyword.
 *
 * Data only — no UI, no imports.
 */

export interface UniversityUrlEntry {
  /** Internal key used in data files and legacy /university/{key} routes. */
  key: string;
  /** Canonical slug segment (without the /universities/ prefix). */
  slug: string;
  /** Extra legacy keys that pointed at the same university. */
  aliases?: string[];
}

export const UNIVERSITY_URLS: UniversityUrlEntry[] = [
  { key: "manipal", slug: "manipal-online" },
  { key: "ignou", slug: "ignou-online" },
  { key: "amity", slug: "amity-online" },
  { key: "lpu", slug: "lpu-online" },
  { key: "uttaranchal", slug: "uttaranchal-online" },
  { key: "vgu", slug: "vgu-online" },
  { key: "jain", slug: "jain-online" },
  { key: "mangalyatan", slug: "mangalayatan-online", aliases: ["mangalayatan"] },
  { key: "du-sol", slug: "du-sol-online", aliases: ["dusol", "du"] },
  { key: "smu", slug: "sikkim-manipal-online", aliases: ["sikkim"] },
];

const SLUG_BY_KEY = new Map<string, string>();
UNIVERSITY_URLS.forEach((u) => {
  SLUG_BY_KEY.set(u.key, u.slug);
  u.aliases?.forEach((a) => SLUG_BY_KEY.set(a, u.slug));
});

/** Canonical pillar URL for a university key. Unknown keys fall back to the hub. */
export const universityPath = (key?: string): string => {
  if (!key) return "/universities";
  const slug = SLUG_BY_KEY.get(key.toLowerCase());
  return slug ? `/universities/${slug}` : "/universities";
};

/** Canonical university-course URL. */
export const universityCoursePath = (key: string, courseId: string): string => {
  const base = universityPath(key);
  return base === "/universities" ? "/courses" : `${base}/courses/${courseId}`;
};

/**
 * Exact-path redirect map: legacy URL -> canonical URL.
 * Consolidates every duplicate that previously targeted the same keyword.
 */
export const LEGACY_URL_REDIRECTS: Record<string, string> = {
  /* --- old /university/{key} pillars --- */
  "/university/manipal": "/universities/manipal-online",
  "/university/ignou": "/universities/ignou-online",
  "/university/amity": "/universities/amity-online",
  "/university/lpu": "/universities/lpu-online",
  "/university/uttaranchal": "/universities/uttaranchal-online",
  "/university/vgu": "/universities/vgu-online",
  "/university/jain": "/universities/jain-online",
  "/university/mangalyatan": "/universities/mangalayatan-online",
  "/university/du-sol": "/universities/du-sol-online",
  "/university/smu": "/universities/sikkim-manipal-online",

  /* --- keyword-shell duplicates of the same pillars --- */
  "/ignou": "/universities/ignou-online",
  "/ignoudistance": "/universities/ignou-online",
  "/manipal-university": "/universities/manipal-online",
  "/onlinemanipal": "/universities/manipal-online",
  "/amity-online": "/universities/amity-online",
  "/amityonline": "/universities/amity-online",
  "/lpu-online": "/universities/lpu-online",
  "/jain-university-online": "/universities/jain-online",
  "/uu": "/universities/uttaranchal-online",
  "/onlineuu": "/universities/uttaranchal-online",
  "/vgu": "/universities/vgu-online",
  "/sikkim-manipal-online": "/universities/sikkim-manipal-online",

  /* --- universities we do not have a page for yet: send to the hub --- */
  "/chandigarh-university-online": "/universities",
  "/onlinecu": "/universities",
  "/dy-patil-online": "/universities",
  "/symbiosis-centre-for-online-learning": "/universities",

  /* --- thin university x course shells that duplicated pillar content --- */
  "/manipal/online-mba": "/universities/manipal-online/courses/online-mba",
  "/manipal/online-bca": "/universities/manipal-online/courses/online-bca",
  "/amity/online-mba": "/universities/amity-online/courses/online-mba",
  "/lpu/online-bba": "/universities/lpu-online/courses/online-bba",
  "/ignou/online-mba": "/universities/ignou-online",
  "/ignou/online-mca": "/universities/ignou-online",
  "/chandigarh-university/online-mcom": "/courses/mcom",
};

/** Legacy university course paths are redirected with their courseId preserved. */
export const legacyUniversityCourseRedirect = (
  key: string,
  courseId?: string,
): string => (courseId ? universityCoursePath(key, courseId) : universityPath(key));
