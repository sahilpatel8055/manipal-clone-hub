/**
 * Phase 3 tooling dataset.
 *
 * Extends the Phase 2 comparison registry with the attributes the University
 * Finder, Course Finder, Fee Calculator, Eligibility Checker and Admission
 * Calendar need. Data only — no UI, no side effects.
 */

import { COMPARE_UNIVERSITIES, CompareUniversity } from "@/data/comparison-universities";

export type DegreeLevel = "UG" | "PG";

export interface FinderUniversity extends CompareUniversity {
  /** Indian state used by the "preferred state" filter. */
  state: string;
  /** 1-5 strength of placement/career support. */
  placementScore: number;
  /** Scholarship available on merit / category / defence. */
  scholarship: boolean;
  /** Suited to working professionals (weekend live classes, recorded lectures). */
  workingProfessionalFriendly: boolean;
  /** Course ids offered (matches COURSE_CATALOG ids). */
  courses: string[];
  /** Typical total programme fee for a PG programme. */
  totalPgFee: number;
  /** Typical total programme fee for a UG programme. */
  totalUgFee: number;
  /** Max scholarship as a percentage of total fee. */
  maxScholarshipPercent: number;
  /** Minimum graduation aggregate (%) expected for PG admission. */
  minGraduationPercent: number;
  /** Minimum 12th aggregate (%) expected for UG admission. */
  minTwelfthPercent: number;
}

const EXTRA: Record<
  string,
  Omit<FinderUniversity, keyof CompareUniversity>
> = {
  manipal: {
    state: "Rajasthan",
    placementScore: 5,
    scholarship: true,
    workingProfessionalFriendly: true,
    courses: ["mba", "mca", "mcom", "ma", "bba", "bca", "bcom", "ba"],
    totalPgFee: 150000,
    totalUgFee: 135000,
    maxScholarshipPercent: 20,
    minGraduationPercent: 50,
    minTwelfthPercent: 50,
  },
  amity: {
    state: "Uttar Pradesh",
    placementScore: 4,
    scholarship: true,
    workingProfessionalFriendly: true,
    courses: ["mba", "mca", "mcom", "ma", "bba", "bca", "bcom", "ba"],
    totalPgFee: 120000,
    totalUgFee: 99000,
    maxScholarshipPercent: 30,
    minGraduationPercent: 50,
    minTwelfthPercent: 50,
  },
  lpu: {
    state: "Punjab",
    placementScore: 4,
    scholarship: true,
    workingProfessionalFriendly: true,
    courses: ["mba", "mca", "mcom", "ma", "bba", "bca", "bcom", "ba"],
    totalPgFee: 110000,
    totalUgFee: 90000,
    maxScholarshipPercent: 30,
    minGraduationPercent: 50,
    minTwelfthPercent: 50,
  },
  jain: {
    state: "Karnataka",
    placementScore: 4,
    scholarship: true,
    workingProfessionalFriendly: true,
    courses: ["mba", "mca", "mcom", "ma", "bba", "bca", "bcom", "ba"],
    totalPgFee: 100000,
    totalUgFee: 85000,
    maxScholarshipPercent: 25,
    minGraduationPercent: 50,
    minTwelfthPercent: 45,
  },
  ignou: {
    state: "Delhi",
    placementScore: 2,
    scholarship: false,
    workingProfessionalFriendly: true,
    courses: ["mba", "mca", "mcom", "ma", "bba", "bca", "bcom", "ba"],
    totalPgFee: 62000,
    totalUgFee: 45000,
    maxScholarshipPercent: 0,
    minGraduationPercent: 45,
    minTwelfthPercent: 40,
  },
  smu: {
    state: "Sikkim",
    placementScore: 3,
    scholarship: true,
    workingProfessionalFriendly: true,
    courses: ["mba", "mca", "mcom", "bba", "bca", "bcom"],
    totalPgFee: 80000,
    totalUgFee: 72000,
    maxScholarshipPercent: 20,
    minGraduationPercent: 45,
    minTwelfthPercent: 45,
  },
  uttaranchal: {
    state: "Uttarakhand",
    placementScore: 3,
    scholarship: true,
    workingProfessionalFriendly: true,
    courses: ["mba", "mca", "mcom", "ma", "bba", "bca", "bcom", "ba"],
    totalPgFee: 90000,
    totalUgFee: 75000,
    maxScholarshipPercent: 25,
    minGraduationPercent: 45,
    minTwelfthPercent: 45,
  },
  vgu: {
    state: "Rajasthan",
    placementScore: 3,
    scholarship: true,
    workingProfessionalFriendly: true,
    courses: ["mba", "mca", "bba", "bca", "bcom", "ba"],
    totalPgFee: 80000,
    totalUgFee: 66000,
    maxScholarshipPercent: 25,
    minGraduationPercent: 45,
    minTwelfthPercent: 40,
  },
};

export const FINDER_UNIVERSITIES: FinderUniversity[] = COMPARE_UNIVERSITIES.map(
  (u) => ({ ...u, ...(EXTRA[u.id] ?? EXTRA.ignou) }),
);

export const FINDER_STATES = Array.from(
  new Set(FINDER_UNIVERSITIES.map((u) => u.state)),
).sort();

export interface CatalogCourse {
  id: string;
  name: string;
  shortName: string;
  level: DegreeLevel;
  path: string;
  duration: string;
  durationYears: number;
  eligibility: string;
  /** Career fields the course feeds into. */
  careers: string[];
  industries: string[];
  interests: string[];
  /** Indicative starting salary band in LPA. */
  salaryFrom: number;
  salaryTo: number;
  summary: string;
}

export const COURSE_CATALOG: CatalogCourse[] = [
  {
    id: "mba",
    name: "Online MBA",
    shortName: "MBA",
    level: "PG",
    path: "/courses/mba",
    duration: "2 years",
    durationYears: 2,
    eligibility: "Bachelor's degree in any stream with 50% aggregate (45% for reserved categories).",
    careers: ["Management", "Leadership", "Consulting", "Entrepreneurship"],
    industries: ["Banking & Finance", "IT & Software", "Manufacturing", "Consulting", "Retail"],
    interests: ["Business", "People management", "Strategy", "Finance"],
    salaryFrom: 6,
    salaryTo: 18,
    summary: "The strongest promotion lever for working professionals moving into managerial roles.",
  },
  {
    id: "mca",
    name: "Online MCA",
    shortName: "MCA",
    level: "PG",
    path: "/courses/mca",
    duration: "2 years",
    durationYears: 2,
    eligibility: "BCA / B.Sc IT / any bachelor's degree with mathematics at 10+2 or graduation level.",
    careers: ["Software Development", "Data Engineering", "Cloud", "Cyber Security"],
    industries: ["IT & Software", "Startups", "Government IT"],
    interests: ["Technology", "Coding", "Data"],
    salaryFrom: 5,
    salaryTo: 16,
    summary: "Technical PG for IT professionals who need a formal master's for senior engineering roles.",
  },
  {
    id: "mcom",
    name: "Online M.Com",
    shortName: "M.Com",
    level: "PG",
    path: "/courses/mcom",
    duration: "2 years",
    durationYears: 2,
    eligibility: "B.Com or an equivalent commerce bachelor's degree with 50% aggregate.",
    careers: ["Accounting", "Taxation", "Audit", "Teaching"],
    industries: ["Banking & Finance", "Accounting Firms", "Education"],
    interests: ["Accounting", "Finance", "Teaching"],
    salaryFrom: 3.5,
    salaryTo: 10,
    summary: "Specialist commerce master's for accounting, taxation and finance career tracks.",
  },
  {
    id: "ma",
    name: "Online MA",
    shortName: "MA",
    level: "PG",
    path: "/courses/ma",
    duration: "2 years",
    durationYears: 2,
    eligibility: "Bachelor's degree in any stream from a recognised university.",
    careers: ["Teaching", "Civil Services", "Content & Media", "Public Policy"],
    industries: ["Education", "Government", "Media"],
    interests: ["Humanities", "Writing", "Teaching", "Public service"],
    salaryFrom: 3,
    salaryTo: 9,
    summary: "Flexible arts master's for teaching, UGC-NET and competitive-exam aspirants.",
  },
  {
    id: "bba",
    name: "Online BBA",
    shortName: "BBA",
    level: "UG",
    path: "/courses/bba",
    duration: "3 years",
    durationYears: 3,
    eligibility: "10+2 pass in any stream from a recognised board.",
    careers: ["Sales", "Marketing", "Operations", "Business Analysis"],
    industries: ["Retail", "Banking & Finance", "Startups", "Consulting"],
    interests: ["Business", "Marketing", "People management"],
    salaryFrom: 3,
    salaryTo: 8,
    summary: "Entry route into management careers, and the natural feeder degree into an MBA.",
  },
  {
    id: "bca",
    name: "Online BCA",
    shortName: "BCA",
    level: "UG",
    path: "/courses/bca",
    duration: "3 years",
    durationYears: 3,
    eligibility: "10+2 pass in any stream (mathematics preferred) from a recognised board.",
    careers: ["Software Development", "Support Engineering", "Web Development"],
    industries: ["IT & Software", "Startups"],
    interests: ["Technology", "Coding", "Data"],
    salaryFrom: 2.5,
    salaryTo: 7,
    summary: "Technology bachelor's for students starting an IT career without a campus degree.",
  },
  {
    id: "bcom",
    name: "Online B.Com",
    shortName: "B.Com",
    level: "UG",
    path: "/courses/bcom",
    duration: "3 years",
    durationYears: 3,
    eligibility: "10+2 pass, commerce preferred but any stream accepted.",
    careers: ["Accounting", "Banking", "Taxation", "CA/CS support roles"],
    industries: ["Banking & Finance", "Accounting Firms", "Retail"],
    interests: ["Accounting", "Finance"],
    salaryFrom: 2.5,
    salaryTo: 7,
    summary: "Commerce bachelor's that pairs well with CA, CS and banking exam preparation.",
  },
  {
    id: "ba",
    name: "Online BA",
    shortName: "BA",
    level: "UG",
    path: "/courses/ba",
    duration: "3 years",
    durationYears: 3,
    eligibility: "10+2 pass in any stream from a recognised board.",
    careers: ["Teaching", "Civil Services", "Content & Media", "Administration"],
    industries: ["Education", "Government", "Media"],
    interests: ["Humanities", "Writing", "Public service"],
    salaryFrom: 2,
    salaryTo: 6,
    summary: "Most flexible bachelor's degree for government-exam aspirants and career switchers.",
  },
];

export const courseById = (id: string) => COURSE_CATALOG.find((c) => c.id === id);

export interface AdmissionEvent {
  university: string;
  universityId: string;
  path: string;
  session: string;
  admissionOpen: string;
  admissionLastDate: string;
  scholarshipLastDate: string;
  examDate: string;
  resultDate: string;
}

/**
 * Indicative session calendar. Dates are verified against university notices
 * each session — always confirm the final date with an AVEDU counsellor.
 */
export const ADMISSION_CALENDAR: AdmissionEvent[] = [
  {
    university: "Manipal University Jaipur (Online Manipal)",
    universityId: "manipal",
    path: "/university/manipal",
    session: "July 2026",
    admissionOpen: "1 Apr 2026",
    admissionLastDate: "31 Jul 2026",
    scholarshipLastDate: "15 Jul 2026",
    examDate: "Nov 2026",
    resultDate: "Dec 2026",
  },
  {
    university: "Amity University Online",
    universityId: "amity",
    path: "/university/amity",
    session: "July 2026",
    admissionOpen: "15 Mar 2026",
    admissionLastDate: "31 Aug 2026",
    scholarshipLastDate: "31 Jul 2026",
    examDate: "Dec 2026",
    resultDate: "Jan 2027",
  },
  {
    university: "LPU Online",
    universityId: "lpu",
    path: "/university/lpu",
    session: "August 2026",
    admissionOpen: "1 Apr 2026",
    admissionLastDate: "31 Aug 2026",
    scholarshipLastDate: "15 Aug 2026",
    examDate: "Dec 2026",
    resultDate: "Jan 2027",
  },
  {
    university: "Jain University Online",
    universityId: "jain",
    path: "/university/jain",
    session: "July 2026",
    admissionOpen: "1 Apr 2026",
    admissionLastDate: "31 Jul 2026",
    scholarshipLastDate: "20 Jul 2026",
    examDate: "Nov 2026",
    resultDate: "Dec 2026",
  },
  {
    university: "IGNOU",
    universityId: "ignou",
    path: "/university/ignou",
    session: "July 2026",
    admissionOpen: "1 May 2026",
    admissionLastDate: "31 Jul 2026",
    scholarshipLastDate: "Not applicable",
    examDate: "Jun & Dec (TEE)",
    resultDate: "Within 45 days of TEE",
  },
  {
    university: "Sikkim Manipal University",
    universityId: "smu",
    path: "/university/smu",
    session: "July 2026",
    admissionOpen: "1 Apr 2026",
    admissionLastDate: "31 Jul 2026",
    scholarshipLastDate: "15 Jul 2026",
    examDate: "Nov 2026",
    resultDate: "Dec 2026",
  },
  {
    university: "Uttaranchal University Online",
    universityId: "uttaranchal",
    path: "/university/uttaranchal",
    session: "July 2026",
    admissionOpen: "1 Apr 2026",
    admissionLastDate: "15 Aug 2026",
    scholarshipLastDate: "31 Jul 2026",
    examDate: "Nov 2026",
    resultDate: "Dec 2026",
  },
  {
    university: "VGU Online",
    universityId: "vgu",
    path: "/university/vgu",
    session: "July 2026",
    admissionOpen: "1 Apr 2026",
    admissionLastDate: "31 Aug 2026",
    scholarshipLastDate: "15 Aug 2026",
    examDate: "Dec 2026",
    resultDate: "Jan 2027",
  },
];

export const formatINR = (value: number): string =>
  `₹${Math.round(value).toLocaleString("en-IN")}`;
