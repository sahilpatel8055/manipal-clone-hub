/**
 * JSON-LD schema builders for AVEDU.
 * Pure functions — no React, no side effects.
 */

import {
  SITE_NAME,
  SITE_URL,
  DEFAULT_OG_IMAGE,
  absoluteUrl,
} from "@/data/seo/seo-routes";

const ORG_ID = `${SITE_URL}/#organization`;
const SITE_ID = `${SITE_URL}/#website`;

export const organizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": ORG_ID,
  name: SITE_NAME,
  alternateName: "AVEDU Education Services",
  url: SITE_URL,
  logo: DEFAULT_OG_IMAGE,
  description:
    "AVEDU helps Indian students compare UGC-entitled online universities and complete admission with free expert counselling.",
  address: { "@type": "PostalAddress", addressCountry: "IN" },
  areaServed: "IN",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "admissions",
    availableLanguage: ["English", "Hindi"],
  },
  sameAs: [
    "https://www.facebook.com/avedu",
    "https://www.linkedin.com/company/avedu",
    "https://twitter.com/avedu",
  ],
});

export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": SITE_ID,
  url: SITE_URL,
  name: SITE_NAME,
  publisher: { "@id": ORG_ID },
  inLanguage: "en-IN",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/courses?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
});

export interface Crumb {
  name: string;
  path: string;
}

export const breadcrumbSchema = (crumbs: Crumb[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: crumbs.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.name,
    item: absoluteUrl(c.path),
  })),
});

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqSchema = (faqs: FaqItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
});

export interface UniversitySchemaInput {
  name: string;
  path: string;
  description: string;
  logo?: string;
  city?: string;
  state?: string;
  founded?: string;
  accreditation?: string[];
  sameAs?: string[];
  ratingValue?: number;
  reviewCount?: number;
}

export const universitySchema = (u: UniversitySchemaInput) => ({
  "@context": "https://schema.org",
  "@type": "CollegeOrUniversity",
  "@id": `${absoluteUrl(u.path)}#university`,
  name: u.name,
  url: absoluteUrl(u.path),
  description: u.description,
  ...(u.logo ? { logo: u.logo } : {}),
  ...(u.founded ? { foundingDate: u.founded } : {}),
  address: {
    "@type": "PostalAddress",
    ...(u.city ? { addressLocality: u.city } : {}),
    ...(u.state ? { addressRegion: u.state } : {}),
    addressCountry: "IN",
  },
  ...(u.accreditation?.length
    ? {
        hasCredential: u.accreditation.map((a) => ({
          "@type": "EducationalOccupationalCredential",
          credentialCategory: a,
        })),
      }
    : {}),
  ...(u.sameAs?.length ? { sameAs: u.sameAs } : {}),
  ...(u.ratingValue && u.reviewCount
    ? {
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: u.ratingValue,
          reviewCount: u.reviewCount,
          bestRating: 5,
          worstRating: 1,
        },
      }
    : {}),
});

export interface CourseSchemaInput {
  name: string;
  path: string;
  description: string;
  providerName?: string;
  providerUrl?: string;
  /** e.g. "P2Y" for 2 years */
  durationISO?: string;
  mode?: "online" | "blended";
  feeAmount?: number;
  educationalLevel?: string;
}

export const courseSchema = (c: CourseSchemaInput) => ({
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": `${absoluteUrl(c.path)}#course`,
  name: c.name,
  url: absoluteUrl(c.path),
  description: c.description,
  ...(c.educationalLevel ? { educationalLevel: c.educationalLevel } : {}),
  provider: c.providerName
    ? {
        "@type": "CollegeOrUniversity",
        name: c.providerName,
        ...(c.providerUrl ? { url: c.providerUrl } : {}),
      }
    : { "@id": ORG_ID },
  inLanguage: "en-IN",
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: c.mode === "blended" ? "Blended" : "Online",
    ...(c.durationISO ? { courseWorkload: c.durationISO } : {}),
  },
  ...(typeof c.feeAmount === "number"
    ? {
        offers: {
          "@type": "Offer",
          category: "Tuition",
          price: c.feeAmount,
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
          url: absoluteUrl(c.path),
        },
      }
    : {}),
});

export interface ArticleSchemaInput {
  headline: string;
  path: string;
  description: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
  reviewerName?: string;
}

export const articleSchema = (a: ArticleSchemaInput) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: a.headline,
  description: a.description,
  mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(a.path) },
  image: a.image ?? DEFAULT_OG_IMAGE,
  ...(a.datePublished ? { datePublished: a.datePublished } : {}),
  ...(a.dateModified ? { dateModified: a.dateModified } : {}),
  author: {
    "@type": a.authorName ? "Person" : "Organization",
    name: a.authorName ?? SITE_NAME,
  },
  ...(a.reviewerName
    ? { reviewedBy: { "@type": "Person", name: a.reviewerName } }
    : {}),
  publisher: { "@id": ORG_ID },
});

export interface ReviewSchemaInput {
  itemName: string;
  itemType?: "CollegeOrUniversity" | "Course";
  ratingValue: number;
  reviewCount: number;
}

export const aggregateReviewSchema = (r: ReviewSchemaInput) => ({
  "@context": "https://schema.org",
  "@type": r.itemType ?? "CollegeOrUniversity",
  name: r.itemName,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: r.ratingValue,
    reviewCount: r.reviewCount,
    bestRating: 5,
    worstRating: 1,
  },
});

/** Combine several schema objects into one @graph document. */
export const schemaGraph = (...nodes: object[]) => ({
  "@context": "https://schema.org",
  "@graph": nodes.map((n) => {
    const { "@context": _ctx, ...rest } = n as Record<string, unknown>;
    return rest;
  }),
});
