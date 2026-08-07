/**
 * Comparison dataset for auto-generated "X vs Y" authority pages (Phase 2).
 *
 * No imports on purpose: src/data/seo/seo-routes.ts consumes this file, so it
 * must stay dependency-free to avoid a circular import.
 */

export interface CompareUniversity {
  id: string;
  name: string;
  shortName: string;
  /** Existing university hub route. */
  path: string;
  location: string;
  established: string;
  naac: string;
  approvals: string[];
  /** Indicative online MBA-level fee, per year. */
  feePerYear: string;
  feeValue: number;
  emi: boolean;
  examMode: string;
  rating: number;
  ugPrograms: number;
  pgPrograms: number;
  placementSupport: string;
  bestFor: string;
  highlights: string[];
}

export const COMPARE_UNIVERSITIES: CompareUniversity[] = [
  {
    id: "manipal",
    name: "Manipal University Jaipur (Online Manipal)",
    shortName: "Manipal",
    path: "/universities/manipal-online",
    location: "Jaipur, Rajasthan",
    established: "2011",
    naac: "A+",
    approvals: ["UGC entitled", "AICTE", "NAAC A+", "WES recognised"],
    feePerYear: "₹75,000",
    feeValue: 75000,
    emi: true,
    examMode: "Online, proctored",
    rating: 4.6,
    ugPrograms: 8,
    pgPrograms: 12,
    placementSupport: "Dedicated placement cell with 500+ hiring partners",
    bestFor: "Brand value and placement support",
    highlights: [
      "Strong recruiter network and Coursera content access",
      "Structured LMS with recorded plus live sessions",
      "WES-recognised degree, useful for working abroad",
    ],
  },
  {
    id: "amity",
    name: "Amity University Online",
    shortName: "Amity",
    path: "/universities/amity-online",
    location: "Noida, Uttar Pradesh",
    established: "2005",
    naac: "A+",
    approvals: ["UGC entitled", "AICTE", "NAAC A+", "WES recognised"],
    feePerYear: "₹60,000",
    feeValue: 60000,
    emi: true,
    examMode: "Online, proctored",
    rating: 4.3,
    ugPrograms: 25,
    pgPrograms: 20,
    placementSupport: "Amity Career Services with alumni network of 2L+",
    bestFor: "Widest specialisation choice",
    highlights: [
      "Largest online specialisation catalogue among private universities",
      "Global alumni base and international student support",
      "Flexible EMI plans starting under ₹5,000/month",
    ],
  },
  {
    id: "lpu",
    name: "Lovely Professional University Online",
    shortName: "LPU",
    path: "/universities/lpu-online",
    location: "Phagwara, Punjab",
    established: "2005",
    naac: "A++",
    approvals: ["UGC entitled", "AICTE", "NAAC A++"],
    feePerYear: "₹55,000",
    feeValue: 55000,
    emi: true,
    examMode: "Online, proctored",
    rating: 4.4,
    ugPrograms: 30,
    pgPrograms: 22,
    placementSupport: "Division of Career Services, industry mentorship",
    bestFor: "NAAC A++ at a mid-range fee",
    highlights: [
      "Highest NAAC grade (A++) in this comparison set",
      "Merit and category scholarships reduce effective fees",
      "Large campus recruitment ecosystem shared with online learners",
    ],
  },
  {
    id: "jain",
    name: "Jain (Deemed-to-be University) Online",
    shortName: "Jain",
    path: "/universities/jain-online",
    location: "Bengaluru, Karnataka",
    established: "1990",
    naac: "A++",
    approvals: ["UGC entitled", "AICTE", "NAAC A++"],
    feePerYear: "₹50,000",
    feeValue: 50000,
    emi: true,
    examMode: "Online, proctored",
    rating: 4.5,
    ugPrograms: 22,
    pgPrograms: 24,
    placementSupport: "Placement assistance plus resume and interview training",
    bestFor: "Bengaluru recruiter access",
    highlights: [
      "NAAC A++ with a strong South India employer base",
      "Industry-aligned electives in analytics and fintech",
      "Live doubt-clearing sessions on weekends",
    ],
  },
  {
    id: "ignou",
    name: "Indira Gandhi National Open University",
    shortName: "IGNOU",
    path: "/universities/ignou-online",
    location: "New Delhi",
    established: "1985",
    naac: "A++",
    approvals: ["UGC", "AICTE", "NAAC A++", "Central University"],
    feePerYear: "₹31,000",
    feeValue: 31000,
    emi: false,
    examMode: "Term-end exam at study centre",
    rating: 4.8,
    ugPrograms: 120,
    pgPrograms: 150,
    placementSupport: "No dedicated placement cell for ODL learners",
    bestFor: "Lowest fees and government-job acceptance",
    highlights: [
      "Central university degree accepted for all government recruitment",
      "Lowest total programme cost in India",
      "Study centre network across every state",
    ],
  },
  {
    id: "smu",
    name: "Sikkim Manipal University",
    shortName: "SMU",
    path: "/universities/sikkim-manipal-online",
    location: "Gangtok, Sikkim",
    established: "1995",
    naac: "A",
    approvals: ["UGC entitled", "AICTE", "NAAC A"],
    feePerYear: "₹40,000",
    feeValue: 40000,
    emi: true,
    examMode: "Online, proctored",
    rating: 4.4,
    ugPrograms: 20,
    pgPrograms: 18,
    placementSupport: "Career guidance and Manipal group hiring network",
    bestFor: "Manipal-group degree on a budget",
    highlights: [
      "State university under the Manipal education group",
      "Affordable semester-wise fee structure",
      "Long track record in distance management education",
    ],
  },
  {
    id: "uttaranchal",
    name: "Uttaranchal University Online",
    shortName: "Uttaranchal",
    path: "/universities/uttaranchal-online",
    location: "Dehradun, Uttarakhand",
    established: "2013",
    naac: "A+",
    approvals: ["UGC entitled", "AICTE", "NAAC A+"],
    feePerYear: "₹45,000",
    feeValue: 45000,
    emi: true,
    examMode: "Online, proctored",
    rating: 4.5,
    ugPrograms: 15,
    pgPrograms: 18,
    placementSupport: "Placement cell with regional employer tie-ups",
    bestFor: "Low fees with modern LMS",
    highlights: [
      "NAAC A+ with one of the lowest private-university fees",
      "Simple document-based admission, no entrance test",
      "Mobile-first learning app for working professionals",
    ],
  },
  {
    id: "vgu",
    name: "Vivekananda Global University Online",
    shortName: "VGU",
    path: "/universities/vgu-online",
    location: "Jaipur, Rajasthan",
    established: "2012",
    naac: "A+",
    approvals: ["UGC entitled", "AICTE", "AIU"],
    feePerYear: "₹40,000",
    feeValue: 40000,
    emi: true,
    examMode: "Online, proctored",
    rating: 4.4,
    ugPrograms: 12,
    pgPrograms: 15,
    placementSupport: "Career services with internship support",
    bestFor: "Budget PG degrees",
    highlights: [
      "Among the most affordable UGC-entitled online PG degrees",
      "Semester-wise payment with no cost EMI",
      "Small batch live sessions",
    ],
  },
];

export const compareById = (id: string): CompareUniversity | undefined =>
  COMPARE_UNIVERSITIES.find((u) => u.id === id);

export interface ComparePair {
  slug: string;
  a: CompareUniversity;
  b: CompareUniversity;
}

/** Every unordered pair, in registry order, as `a-vs-b`. */
export const COMPARE_PAIRS: ComparePair[] = COMPARE_UNIVERSITIES.flatMap((a, i) =>
  COMPARE_UNIVERSITIES.slice(i + 1).map((b) => ({
    slug: `${a.id}-vs-${b.id}`,
    a,
    b,
  })),
);

export const getComparePair = (slug?: string): ComparePair | undefined => {
  if (!slug) return undefined;
  const clean = slug.toLowerCase();
  const direct = COMPARE_PAIRS.find((p) => p.slug === clean);
  if (direct) return direct;
  // Accept the reversed slug too, so /compare/amity-vs-manipal resolves.
  const [left, right] = clean.split("-vs-");
  return COMPARE_PAIRS.find((p) => p.a.id === right && p.b.id === left);
};
