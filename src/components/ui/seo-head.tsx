import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  absoluteUrl,
  getSeoRoute,
  normalisePath,
  SEO_REDIRECTS,
} from '@/data/seo/seo-routes';
import { breadcrumbSchema, organizationSchema, websiteSchema, schemaGraph } from '@/lib/seo/schema';
import { getBreadcrumbs } from '@/lib/seo/internal-links';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object | object[];
  /** Set true only for thin/duplicate routes. */
  noindex?: boolean;
  /** Skip automatic Breadcrumb/Organization/WebSite schema injection. */
  skipBaseSchema?: boolean;
}

const setMeta = (
  selector: string,
  attr: 'name' | 'property',
  key: string,
  content: string,
) => {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const setLink = (rel: string, href: string) => {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
};

/**
 * Per-route head manager: title, description, keywords, canonical, robots,
 * Open Graph, Twitter cards and JSON-LD (page schema + Organization +
 * WebSite/SearchAction + BreadcrumbList).
 *
 * Values fall back to the central SEO route registry, so every route gets a
 * unique title/description even when a page passes nothing.
 */
const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  structuredData,
  noindex = false,
  skipBaseSchema = false,
}) => {
  const location = useLocation();
  const path = normalisePath(location.pathname);
  const route = getSeoRoute(path);

  const finalTitle =
    title ?? route?.title ?? 'AVEDU — Online Degree Admission in India | UGC Approved Universities';
  const finalDescription =
    description ??
    route?.description ??
    'Compare UGC-entitled online degrees from India\'s top universities. Fees, eligibility, placements and free admission counselling in one place.';
  const finalKeywords =
    keywords ??
    route?.keywords ??
    'online degree, distance education, UGC approved universities, online MBA, online BCA, online BBA';
  // Redirect shells canonicalise to their destination.
  const canonicalTarget = SEO_REDIRECTS[path] ?? route?.path ?? path;
  const finalCanonical = canonical ?? absoluteUrl(canonicalTarget);

  const serialisedSchema = JSON.stringify(structuredData ?? null);

  useEffect(() => {
    document.title = finalTitle;

    setMeta('meta[name="description"]', 'name', 'description', finalDescription);
    setMeta('meta[name="keywords"]', 'name', 'keywords', finalKeywords);
    setMeta(
      'meta[name="robots"]',
      'name',
      'robots',
      noindex
        ? 'noindex, follow'
        : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    );

    setLink('canonical', finalCanonical);

    setMeta('meta[property="og:title"]', 'property', 'og:title', finalTitle);
    setMeta('meta[property="og:description"]', 'property', 'og:description', finalDescription);
    setMeta('meta[property="og:url"]', 'property', 'og:url', finalCanonical);
    setMeta('meta[property="og:type"]', 'property', 'og:type', ogType);
    setMeta('meta[property="og:image"]', 'property', 'og:image', ogImage);
    setMeta('meta[property="og:site_name"]', 'property', 'og:site_name', SITE_NAME);
    setMeta('meta[property="og:locale"]', 'property', 'og:locale', 'en_IN');

    setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', finalTitle);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', finalDescription);
    setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', ogImage);

    // ---- JSON-LD ----
    document
      .querySelectorAll('script[type="application/ld+json"][data-dynamic]')
      .forEach((node) => node.remove());

    const nodes: object[] = [];
    if (!skipBaseSchema) {
      nodes.push(organizationSchema(), websiteSchema());
      const crumbs = getBreadcrumbs(path);
      if (crumbs.length > 1) nodes.push(breadcrumbSchema(crumbs));
    }
    const parsed = JSON.parse(serialisedSchema) as object | object[] | null;
    if (Array.isArray(parsed)) nodes.push(...parsed);
    else if (parsed) nodes.push(parsed);

    if (nodes.length) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-dynamic', 'true');
      script.textContent = JSON.stringify(schemaGraph(...nodes));
      document.head.appendChild(script);
    }
  }, [
    finalTitle,
    finalDescription,
    finalKeywords,
    finalCanonical,
    ogImage,
    ogType,
    noindex,
    skipBaseSchema,
    serialisedSchema,
    path,
  ]);

  return null;
};

export default SEOHead;
