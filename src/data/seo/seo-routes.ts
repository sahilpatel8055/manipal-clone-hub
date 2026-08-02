/**
 * AVEDU SEO route registry.
 *
 * Single source of truth for: unique H1 / meta title / meta description /
 * keywords / canonical, topic-cluster membership and sitemap generation.
 * Every public route in src/App.tsx must appear here exactly once.
 *
 * This file contains NO UI. It is data only.
 */

import { COMPARE_PAIRS } from "@/data/comparison-universities";

export const SITE_URL = "https://avedu.in";
export const SITE_NAME = "AVEDU";
export const DEFAULT_OG_IMAGE =
  "https://avedu.in/lovable-uploads/d1a868cd-cbeb-4c57-9a43-86bb3e758613.png";

export type TopicCluster =
  | "universities"
  | "courses"
  | "comparison"
  | "admission"
  | "fees"
  | "eligibility"
  | "placements"
  | "scholarships"
  | "career"
  | "blog"
  | "resources"
  | "news"
  | "legal"
  | "home";

export const CLUSTER_LABEL: Record<TopicCluster, string> = {
  home: "AVEDU",
  universities: "Universities",
  courses: "Courses",
  comparison: "University Comparison",
  admission: "Admission",
  fees: "Fees",
  eligibility: "Eligibility",
  placements: "Placements",
  scholarships: "Scholarships",
  career: "Career Guides",
  blog: "Blog",
  resources: "Student Resources",
  news: "Admission News",
  legal: "Policies",
};

/** Hub page for each cluster — used by breadcrumbs and the linking engine. */
export const CLUSTER_HUB: Record<TopicCluster, string> = {
  home: "/",
  universities: "/universities",
  courses: "/courses",
  comparison: "/comparison",
  admission: "/universities",
  fees: "/courses/mba",
  eligibility: "/courses/mba",
  placements: "/courses",
  scholarships: "/courses",
  career: "/blog",
  blog: "/blog",
  resources: "/blog",
  news: "/blog",
  legal: "/privacy-policy",
};

export interface SeoRoute {
  /** Route path exactly as declared in App.tsx (no params). */
  path: string;
  cluster: TopicCluster;
  /** Unique <h1> intent for the page. */
  h1: string;
  title: string;
  description: string;
  keywords?: string;
  /** Sitemap hints. */
  priority?: string;
  changefreq?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  /** Exclude from sitemap (redirect shells, param routes, legal noise). */
  noSitemap?: boolean;
  /** Entity keys used by the internal-linking engine. */
  university?: string;
  course?: string;
  /** Manually curated extra links (paths). */
  related?: string[];
}

export const SEO_ROUTES: SeoRoute[] = [
  {
    path: "/",
    cluster: "home",
    h1: "India's Online University Admission Platform",
    title: "AVEDU — Online Degree Admission in India | UGC Approved Universities",
    description:
      "Compare UGC-entitled online degrees from India's top universities. Fees, eligibility, placements and free admission counselling in one place.",
    keywords:
      "online degree india, ugc approved online university, online mba, distance education, online admission",
    priority: "1.0",
    changefreq: "daily",
  },

  /* ---------------- Universities cluster ---------------- */
  {
    path: "/universities",
    cluster: "universities",
    h1: "Top Online Universities in India",
    title: "Top Online Universities in India 2026 | UGC Approved List — AVEDU",
    description:
      "Explore UGC-entitled online universities in India with NAAC grades, approvals, fees, placements and admission dates. Compare and apply with AVEDU.",
    keywords: "online universities india, ugc approved universities, naac a++ online university",
    priority: "0.9",
    changefreq: "weekly",
  },
  {
    path: "/university/ignou",
    cluster: "universities",
    university: "ignou",
    h1: "IGNOU Online & Distance Education",
    title: "IGNOU Online Admission 2026 — Courses, Fees, Eligibility | AVEDU",
    description:
      "IGNOU online and distance programmes: course list, fee structure, eligibility, admission process, session dates and degree validity explained.",
    keywords: "ignou admission, ignou online mba, ignou fees, ignou distance education",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/university/manipal",
    cluster: "universities",
    university: "manipal",
    h1: "Manipal University Online (MUJ)",
    title: "Online Manipal Admission 2026 — Fees, Courses, Placements | AVEDU",
    description:
      "Online Manipal (MUJ) degrees with NAAC A+ recognition: fees, eligibility, curriculum, LMS, placement support and step-by-step admission process.",
    keywords: "online manipal, manipal university online mba, muj fees",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/university/amity",
    cluster: "universities",
    university: "amity",
    h1: "Amity University Online",
    title: "Amity Online Admission 2026 — Courses, Fees, Reviews | AVEDU",
    description:
      "Amity University Online programmes, fee structure, EMI options, eligibility, placements and accreditation details for 2026 admissions.",
    keywords: "amity online, amity university online mba, amity online fees",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/university/lpu",
    cluster: "universities",
    university: "lpu",
    h1: "LPU Online (Lovely Professional University)",
    title: "LPU Online Admission 2026 — Fees, Courses, Placements | AVEDU",
    description:
      "LPU Online degree programmes: UGC entitlement, NAAC A++ status, fee structure, scholarships, placements and admission timeline.",
    keywords: "lpu online, lpu online mba fees, lovely professional university online",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/university/uttaranchal",
    cluster: "universities",
    university: "uttaranchal",
    h1: "Uttaranchal University Online",
    title: "Uttaranchal University Online Admission 2026 — Fees & Courses | AVEDU",
    description:
      "Uttaranchal University online degrees: approvals, fees, eligibility, semester structure, placements and how to apply for the current session.",
    keywords: "uttaranchal university online, uu online mba, online uu",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/university/vgu",
    cluster: "universities",
    university: "vgu",
    h1: "Vivekananda Global University Online",
    title: "VGU Online Admission 2026 — Courses, Fees, Eligibility | AVEDU",
    description:
      "Vivekananda Global University (VGU) online programmes with UGC entitlement: fees, eligibility, curriculum, placements and admission steps.",
    keywords: "vgu online, vivekananda global university online mba",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/university/smu",
    cluster: "universities",
    university: "sikkim",
    h1: "Sikkim Manipal University Distance & Online",
    title: "Sikkim Manipal University Online Admission 2026 — Fees | AVEDU",
    description:
      "Sikkim Manipal University (SMU) online and distance degrees: fee structure, eligibility, approvals, placements and admission process.",
    keywords: "sikkim manipal university online, smu distance mba",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/university/mangalyatan",
    cluster: "universities",
    university: "mangalyatan",
    h1: "Mangalayatan University Online",
    title: "Mangalayatan University Online Admission 2026 — Fees | AVEDU",
    description:
      "Mangalayatan University Online programmes: UGC-entitled degrees, affordable fees, eligibility, LMS, placements and admission guidance.",
    keywords: "mangalayatan university online, mangalayatan online mba fees",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/university/du-sol",
    cluster: "universities",
    university: "du-sol",
    h1: "DU SOL — School of Open Learning, Delhi University",
    title: "DU SOL Admission 2026 — Courses, Fees, Eligibility | AVEDU",
    description:
      "Delhi University School of Open Learning (DU SOL): programme list, fees, eligibility, exam pattern, degree value and admission process.",
    keywords: "du sol admission, delhi university sol, du sol ba fees",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/university/jain",
    cluster: "universities",
    university: "jain",
    h1: "Jain University Online (JAIN Deemed-to-be University)",
    title: "Jain University Online Admission 2026 — Fees, Courses | AVEDU",
    description:
      "Jain University Online degrees with NAAC A++ recognition: fee structure, EMI, eligibility, specialisations, placements and admission steps.",
    keywords: "jain university online, jain online mba fees",
    priority: "0.8",
    changefreq: "weekly",
  },

  /* ---------------- Courses cluster ---------------- */
  {
    path: "/courses",
    cluster: "courses",
    h1: "Online Degree Courses in India",
    title: "Online Courses in India 2026 — UG & PG Degree List | AVEDU",
    description:
      "Browse online UG and PG courses in India — MBA, MCA, MCom, MA, BBA, BCA, BCom, BA — with fees, duration, eligibility and university options.",
    keywords: "online courses india, online ug pg degree, online mba bca bba",
    priority: "0.9",
    changefreq: "weekly",
  },
  {
    path: "/courses/mba",
    cluster: "courses",
    course: "mba",
    h1: "Online MBA in India",
    title: "Online MBA 2026 — Fees, Specialisations, Universities | AVEDU",
    description:
      "Online MBA in India: UGC-entitled universities, specialisations, two-year curriculum, fees from top colleges, eligibility and placement outcomes.",
    keywords: "online mba, online mba fees, best online mba india",
    priority: "0.9",
    changefreq: "weekly",
  },
  {
    path: "/courses/mca",
    cluster: "courses",
    course: "mca",
    h1: "Online MCA in India",
    title: "Online MCA 2026 — Fees, Syllabus, Top Universities | AVEDU",
    description:
      "Online MCA programmes in India: eligibility, semester-wise syllabus, specialisations, fees, career scope and universities accepting applications.",
    keywords: "online mca, online mca fees, mca distance education",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/courses/mcom",
    cluster: "courses",
    course: "mcom",
    h1: "Online MCom in India",
    title: "Online MCom 2026 — Fees, Syllabus, Universities | AVEDU",
    description:
      "Online MCom degree: eligibility, subjects, duration, fee comparison across UGC-entitled universities and career options in finance and accounting.",
    keywords: "online mcom, mcom online fees, online m.com admission",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/courses/ma",
    cluster: "courses",
    course: "ma",
    h1: "Online MA in India",
    title: "Online MA 2026 — Specialisations, Fees, Eligibility | AVEDU",
    description:
      "Online MA programmes in English, Economics, Sociology, Psychology and more — eligibility, fees, duration and universities offering admission.",
    keywords: "online ma, online ma english, ma distance education",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/courses/bca",
    cluster: "courses",
    course: "bca",
    h1: "Online BCA in India",
    title: "Online BCA 2026 — Fees, Syllabus, Top Universities | AVEDU",
    description:
      "Online BCA degree: three-year curriculum, programming subjects, eligibility after 12th, fees and IT career paths with UGC-entitled universities.",
    keywords: "online bca, bca online fees, best online bca university",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/courses/bba",
    cluster: "courses",
    course: "bba",
    h1: "Online BBA in India",
    title: "Online BBA 2026 — Fees, Specialisations, Admission | AVEDU",
    description:
      "Online BBA programmes: eligibility after 12th, specialisations, semester structure, fees and management career paths across top online universities.",
    keywords: "online bba, bba online fees, online bba admission",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/courses/bcom",
    cluster: "courses",
    course: "bcom",
    h1: "Online BCom in India",
    title: "Online BCom 2026 — Fees, Subjects, Universities | AVEDU",
    description:
      "Online BCom degree: subject list, duration, eligibility, fee comparison and commerce career options with UGC-entitled online universities.",
    keywords: "online bcom, b.com online degree, bcom distance education",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/courses/ba",
    cluster: "courses",
    course: "ba",
    h1: "Online BA in India",
    title: "Online BA 2026 — Subjects, Fees, Admission Process | AVEDU",
    description:
      "Online BA programmes across arts and humanities: subject combinations, eligibility, fees, duration and universities open for admission.",
    keywords: "online ba, ba online degree, online ba admission",
    priority: "0.8",
    changefreq: "weekly",
  },

  /* ------- University × course landing routes (SEO entry points) ------- */
  {
    path: "/ignou/online-mba",
    cluster: "courses",
    university: "ignou",
    course: "mba",
    h1: "IGNOU Online MBA",
    title: "IGNOU Online MBA 2026 — Fees, Eligibility, Admission | AVEDU",
    description:
      "IGNOU Online MBA: fee structure, eligibility, entrance requirement, specialisations, duration and the complete admission process for 2026.",
    priority: "0.7",
    changefreq: "monthly",
  },
  {
    path: "/ignou/online-mca",
    cluster: "courses",
    university: "ignou",
    course: "mca",
    h1: "IGNOU Online MCA",
    title: "IGNOU Online MCA 2026 — Fees, Syllabus, Eligibility | AVEDU",
    description:
      "IGNOU Online MCA programme details: eligibility, semester syllabus, fees, duration, exam pattern and how to apply for the current session.",
    priority: "0.7",
    changefreq: "monthly",
  },
  {
    path: "/manipal/online-mba",
    cluster: "courses",
    university: "manipal",
    course: "mba",
    h1: "Online Manipal MBA",
    title: "Manipal Online MBA 2026 — Fees, Specialisations | AVEDU",
    description:
      "Online Manipal MBA: NAAC A+ university, specialisation list, semester fees with EMI, eligibility, placement support and admission dates.",
    priority: "0.7",
    changefreq: "monthly",
  },
  {
    path: "/manipal/online-bca",
    cluster: "courses",
    university: "manipal",
    course: "bca",
    h1: "Online Manipal BCA",
    title: "Manipal Online BCA 2026 — Fees, Syllabus, Admission | AVEDU",
    description:
      "Online Manipal BCA programme: three-year syllabus, fees and EMI plans, eligibility after 12th, LMS features and placement assistance.",
    priority: "0.7",
    changefreq: "monthly",
  },
  {
    path: "/amity/online-mba",
    cluster: "courses",
    university: "amity",
    course: "mba",
    h1: "Amity Online MBA",
    title: "Amity Online MBA 2026 — Fees, Specialisations, Reviews | AVEDU",
    description:
      "Amity Online MBA: specialisations, total fees and EMI, eligibility, accreditation, alumni network and step-by-step admission process.",
    priority: "0.7",
    changefreq: "monthly",
  },
  {
    path: "/lpu/online-bba",
    cluster: "courses",
    university: "lpu",
    course: "bba",
    h1: "LPU Online BBA",
    title: "LPU Online BBA 2026 — Fees, Eligibility, Placements | AVEDU",
    description:
      "LPU Online BBA: NAAC A++ university, fee structure with scholarships, eligibility after 12th, curriculum and placement support.",
    priority: "0.7",
    changefreq: "monthly",
  },
  {
    path: "/chandigarh-university/online-mcom",
    cluster: "courses",
    university: "chandigarh",
    course: "mcom",
    h1: "Chandigarh University Online MCom",
    title: "Chandigarh University Online MCom 2026 — Fees | AVEDU",
    description:
      "Chandigarh University Online MCom: eligibility, subjects, semester fees, duration and admission guidance from AVEDU counsellors.",
    priority: "0.7",
    changefreq: "monthly",
  },

  /* ---------------- Admission / fees / eligibility clusters ---------------- */
  {
    path: "/online-courses-admission-process",
    cluster: "admission",
    h1: "Online Course Admission Process in India",
    title: "Online Course Admission Process 2026 — Steps & Documents | AVEDU",
    description:
      "Step-by-step admission process for online degrees in India: registration, documents, fee payment, verification, enrolment ID and session start dates.",
    keywords: "online admission process, online degree documents required",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/online-mba-admission",
    cluster: "admission",
    course: "mba",
    h1: "Online MBA Admission 2026",
    title: "Online MBA Admission 2026 — Dates, Documents, Steps | AVEDU",
    description:
      "Online MBA admission 2026: last dates, required documents, entrance requirements, university-wise steps and free counselling to apply.",
    keywords: "online mba admission, mba admission last date",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/online-bba-admission",
    cluster: "admission",
    course: "bba",
    h1: "Online BBA Admission 2026",
    title: "Online BBA Admission 2026 — Eligibility, Dates, Fees | AVEDU",
    description:
      "Online BBA admission 2026: eligibility after 12th, document checklist, session dates, university-wise fees and how to apply online.",
    keywords: "online bba admission, bba admission process",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/online-mba-fees",
    cluster: "fees",
    course: "mba",
    h1: "Online MBA Fees in India",
    title: "Online MBA Fees 2026 — University-wise Fee Comparison | AVEDU",
    description:
      "Compare online MBA fees across Indian universities: total programme cost, semester fees, EMI options, scholarships and hidden charges to check.",
    keywords: "online mba fees, cheapest online mba india, mba fees comparison",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/online-mba-eligibility",
    cluster: "eligibility",
    course: "mba",
    h1: "Online MBA Eligibility Criteria",
    title: "Online MBA Eligibility 2026 — Criteria & Entrance | AVEDU",
    description:
      "Online MBA eligibility: minimum graduation marks, work experience rules, entrance exam waivers and university-wise criteria for 2026 admission.",
    keywords: "online mba eligibility, mba without cat, mba eligibility criteria",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/scholarships",
    cluster: "scholarships",
    h1: "Scholarships for Online Degree Students",
    title: "Online Degree Scholarships 2026 — Eligibility & Amounts | AVEDU",
    description:
      "Scholarships and fee waivers for online degrees in India: merit, defence, divyangjan and government-employee categories with eligibility and amounts.",
    keywords: "online degree scholarship, mba scholarship india, fee waiver online course",
    priority: "0.8",
    changefreq: "weekly",
  },

  /* ---------------- Comparison + content clusters ---------------- */
  {
    path: "/comparison",
    cluster: "comparison",
    h1: "Compare Online Universities Side by Side",
    title: "Compare Online Universities 2026 — Fees vs NAAC vs Placement | AVEDU",
    description:
      "Compare online universities on fees, NAAC grade, UGC entitlement, LMS, flexibility, placements and degree value before you choose a programme.",
    keywords: "compare online universities, lpu vs amity, manipal vs amity",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/blog",
    cluster: "blog",
    h1: "Online Education Blog & Career Guides",
    title: "Online Education Blog — Guides, News, Career Advice | AVEDU",
    description:
      "Expert guides on online degrees: university rankings, fee comparisons, placement reports, degree validity, admission news and career planning.",
    keywords: "online education blog, online degree validity, best online mba universities",
    priority: "0.7",
    changefreq: "daily",
  },

  /* ---------------- Legal / EEAT ---------------- */
  {
    path: "/privacy-policy",
    cluster: "legal",
    h1: "Privacy Policy",
    title: "Privacy Policy — How AVEDU Handles Your Data",
    description:
      "How AVEDU collects, stores and uses the information you share through counselling forms, and the choices you have over your data.",
    priority: "0.3",
    changefreq: "yearly",
  },
  {
    path: "/terms-conditions",
    cluster: "legal",
    h1: "Terms & Conditions",
    title: "Terms & Conditions — Using the AVEDU Platform",
    description:
      "Terms governing the use of AVEDU's admission guidance platform, counselling services, content accuracy and user responsibilities.",
    priority: "0.3",
    changefreq: "yearly",
  },
  {
    path: "/disclaimer",
    cluster: "legal",
    h1: "Disclaimer & Editorial Policy",
    title: "Disclaimer & Editorial Policy — AVEDU",
    description:
      "AVEDU's editorial policy, sourcing standards for university data, review process and disclaimer on fees, approvals and admission information.",
    priority: "0.3",
    changefreq: "yearly",
  },
];

/** Redirect-only SEO shells: canonicalised to their destination, kept out of the sitemap. */
export const SEO_REDIRECTS: Record<string, string> = {
  "/ignou": "/university/ignou",
  "/manipal-university": "/university/manipal",
  "/uu": "/university/uttaranchal",
  "/vgu": "/university/vgu",
  "/amity-online": "/university/amity",
  "/chandigarh-university-online": "/universities",
  "/jain-university-online": "/university/jain",
  "/lpu-online": "/university/lpu",
  "/sikkim-manipal-online": "/university/smu",
  "/dy-patil-online": "/universities",
  "/symbiosis-centre-for-online-learning": "/universities",
  "/onlinemanipal": "/university/manipal",
  "/amityonline": "/university/amity",
  "/onlinecu": "/universities",
  "/ignoudistance": "/university/ignou",
  "/onlineuu": "/university/uttaranchal",
};

/* ---- Phase 2: auto-generated "X vs Y" comparison routes ---- */
const COMPARISON_ROUTES: SeoRoute[] = COMPARE_PAIRS.map(({ slug, a, b }) => ({
  path: `/compare/${slug}`,
  cluster: "comparison" as TopicCluster,
  h1: `${a.shortName} vs ${b.shortName} Online — Fees, NAAC & Placements`,
  title: `${a.shortName} vs ${b.shortName} Online 2026 — Fees & NAAC Compared | AVEDU`,
  description: `${a.shortName} vs ${b.shortName} online degrees compared: fees (${a.feePerYear} vs ${b.feePerYear}), NAAC grade, exam mode, programmes and placement support.`,
  keywords: `${a.shortName.toLowerCase()} vs ${b.shortName.toLowerCase()}, ${a.shortName.toLowerCase()} or ${b.shortName.toLowerCase()} online`,
  priority: "0.7",
  changefreq: "monthly" as const,
}));

SEO_ROUTES.push(...COMPARISON_ROUTES);

const ROUTE_BY_PATH = new Map(SEO_ROUTES.map((r) => [r.path, r]));

export const normalisePath = (path: string): string => {
  if (!path) return "/";
  const clean = path.split("?")[0].split("#")[0];
  if (clean.length > 1 && clean.endsWith("/")) return clean.slice(0, -1);
  return clean;
};

export const getSeoRoute = (path: string): SeoRoute | undefined => {
  const p = normalisePath(path);
  return ROUTE_BY_PATH.get(p) ?? ROUTE_BY_PATH.get(SEO_REDIRECTS[p] ?? "");
};

export const routesInCluster = (cluster: TopicCluster): SeoRoute[] =>
  SEO_ROUTES.filter((r) => r.cluster === cluster);

export const universityRoutes = (): SeoRoute[] =>
  SEO_ROUTES.filter((r) => r.cluster === "universities" && r.university);

export const courseRoutes = (): SeoRoute[] =>
  SEO_ROUTES.filter((r) => r.cluster === "courses" && r.course && !r.university);

export const absoluteUrl = (path: string): string =>
  `${SITE_URL}${normalisePath(path) === "/" ? "/" : normalisePath(path)}`;
