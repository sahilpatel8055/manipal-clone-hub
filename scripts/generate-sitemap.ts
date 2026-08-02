/**
 * Regenerates public/sitemap.xml from the SEO route registry.
 * Run with: bunx tsx scripts/generate-sitemap.ts
 * Also runs automatically via the predev / prebuild npm hooks.
 *
 * <lastmod> is intentionally omitted: the project has no authoritative
 * per-page modification timestamp, and a build-time date is not one.
 */
import { writeFileSync } from "fs";
import { resolve } from "path";
import { SEO_ROUTES, SITE_URL } from "../src/data/seo/seo-routes";

const urls = SEO_ROUTES.filter((r) => !r.noSitemap).map((r) =>
  [
    "  <url>",
    `    <loc>${SITE_URL}${r.path}</loc>`,
    r.changefreq ? `    <changefreq>${r.changefreq}</changefreq>` : null,
    r.priority ? `    <priority>${r.priority}</priority>` : null,
    "  </url>",
  ]
    .filter(Boolean)
    .join("\n"),
);

const xml = [
  `<?xml version="1.0" encoding="UTF-8"?>`,
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
  ...urls,
  `</urlset>`,
].join("\n");

writeFileSync(resolve("public/sitemap.xml"), `${xml}\n`);
console.log(`sitemap.xml written (${urls.length} entries)`);
