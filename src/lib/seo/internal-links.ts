/**
 * Internal-linking engine.
 *
 * Given any route path, returns 8-15 contextually relevant destinations that
 * follow the AVEDU cluster flow:
 *   University -> Course -> Comparison -> Blog -> Admission -> Fees ->
 *   Scholarship -> Career -> Lead form
 *
 * No page is ever left isolated: if a path has no registry entry, the engine
 * falls back to the cluster hubs.
 */

import {
  CLUSTER_HUB,
  SEO_ROUTES,
  SeoRoute,
  TopicCluster,
  courseRoutes,
  getSeoRoute,
  normalisePath,
  universityRoutes,
} from "@/data/seo/seo-routes";

export interface InternalLink {
  title: string;
  url: string;
  description?: string;
  cluster: TopicCluster;
}

const MIN_LINKS = 8;
const MAX_LINKS = 15;

const toLink = (r: SeoRoute): InternalLink => ({
  title: r.h1,
  url: r.path,
  description: r.description.slice(0, 110),
  cluster: r.cluster,
});

const push = (acc: InternalLink[], seen: Set<string>, link?: InternalLink) => {
  if (!link) return;
  if (seen.has(link.url)) return;
  seen.add(link.url);
  acc.push(link);
};

const byPath = (path: string): SeoRoute | undefined =>
  SEO_ROUTES.find((r) => r.path === path);

/** Deterministic rotation so different pages surface different siblings. */
const rotate = <T,>(items: T[], seed: string): T[] => {
  if (items.length === 0) return items;
  const n =
    Math.abs(
      seed.split("").reduce((acc, ch) => (acc * 31 + ch.charCodeAt(0)) | 0, 7),
    ) % items.length;
  return [...items.slice(n), ...items.slice(0, n)];
};

export const getInternalLinks = (
  rawPath: string,
  limit = MAX_LINKS,
): InternalLink[] => {
  const path = normalisePath(rawPath);
  const current = getSeoRoute(path);
  const links: InternalLink[] = [];
  const seen = new Set<string>([path, current?.path ?? path]);

  // 1. Curated links first.
  current?.related?.forEach((p) => push(links, seen, byPath(p) && toLink(byPath(p)!)));

  const cluster = current?.cluster ?? "home";

  // 2. Entity-driven links (same university, same course).
  if (current?.university) {
    SEO_ROUTES.filter(
      (r) => r.university === current.university && r.path !== current.path,
    ).forEach((r) => push(links, seen, toLink(r)));
  }
  if (current?.course) {
    SEO_ROUTES.filter(
      (r) => r.course === current.course && r.path !== current.path,
    ).forEach((r) => push(links, seen, toLink(r)));
  }

  // 3. Cluster siblings (rotated for variety).
  rotate(
    SEO_ROUTES.filter((r) => r.cluster === cluster && r.path !== current?.path),
    path,
  )
    .slice(0, 4)
    .forEach((r) => push(links, seen, toLink(r)));

  // 4. Cluster flow: the next steps a visitor logically needs.
  const flow: TopicCluster[] =
    cluster === "universities"
      ? ["courses", "comparison", "admission", "fees", "scholarships", "blog"]
      : cluster === "courses"
        ? ["universities", "fees", "eligibility", "admission", "comparison", "blog"]
        : cluster === "comparison"
          ? ["universities", "courses", "fees", "admission", "blog"]
          : cluster === "blog"
            ? ["courses", "universities", "admission", "scholarships", "comparison"]
            : ["universities", "courses", "comparison", "admission", "fees", "scholarships", "blog"];

  flow.forEach((c) => {
    const hub = byPath(CLUSTER_HUB[c]);
    if (hub) push(links, seen, toLink(hub));
  });

  // 5. Top entities, so every page feeds the money pages.
  rotate(universityRoutes(), path)
    .slice(0, 4)
    .forEach((r) => push(links, seen, toLink(r)));
  rotate(courseRoutes(), `${path}x`)
    .slice(0, 4)
    .forEach((r) => push(links, seen, toLink(r)));

  const capped = links.slice(0, Math.max(MIN_LINKS, Math.min(limit, MAX_LINKS)));
  return capped;
};

const prettify = (segment: string): string =>
  segment
    .replace(/-vs-/g, " vs ")
    .split("-")
    .map((w) =>
      ["mba", "mca", "bba", "bca", "ma", "bcom", "mcom", "ba", "smu", "muj", "lpu", "vgu", "ignou", "du", "sol", "emi"].includes(
        w.toLowerCase(),
      )
        ? w.toUpperCase()
        : w.charAt(0).toUpperCase() + w.slice(1),
    )
    .join(" ");

/**
 * Breadcrumb trail for a path.
 * Registry pages: Home > Cluster hub > Page.
 * Dynamic/unregistered pages (e.g. /university/manipal/courses/online-mba):
 * one crumb per URL segment, using registry H1s where they exist.
 */
export const getBreadcrumbs = (
  rawPath: string,
): { name: string; path: string }[] => {
  const path = normalisePath(rawPath);
  const crumbs = [{ name: "Home", path: "/" }];
  if (path === "/") return crumbs;

  const route = getSeoRoute(path);

  if (route) {
    const hub = byPath(CLUSTER_HUB[route.cluster]);
    if (hub && hub.path !== route.path) {
      crumbs.push({ name: hub.h1, path: hub.path });
    }
    crumbs.push({ name: route.h1, path: route.path });
    return crumbs;
  }

  // Fallback: build the trail from URL segments so no page is left without
  // breadcrumbs (dynamic university-course and comparison routes).
  const segments = path.split("/").filter(Boolean);
  let acc = "";
  segments.forEach((segment, i) => {
    acc += `/${segment}`;
    const known = byPath(acc);
    const isLast = i === segments.length - 1;
    // Skip structural-only segments that are not real pages.
    if (!known && !isLast && (segment === "courses" || segment === "compare")) {
      const hubMatch = byPath(`/${segment}`);
      if (hubMatch) crumbs.push({ name: hubMatch.h1, path: hubMatch.path });
      return;
    }
    if (!known && segment === "university") {
      const hub = byPath("/universities");
      if (hub) crumbs.push({ name: hub.h1, path: hub.path });
      return;
    }
    crumbs.push({ name: known?.h1 ?? prettify(segment), path: acc });
  });

  return crumbs;
};

