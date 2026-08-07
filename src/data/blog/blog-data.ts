/**
 * AVEDU knowledge hub — article dataset.
 *
 * Data only, no UI and no React imports beyond static asset URLs.
 * Every article MUST link to at least one university page, one course page,
 * one comparison page and carry FAQs (enforced by the type below).
 */

import mbaCareer from "@/assets/blog/mba-career-guide.jpg";
import onlineLearning from "@/assets/blog/online-learning-guide.jpg";
import uniCompare from "@/assets/blog/university-comparison.jpg";
import placement from "@/assets/placement.jpg";
import heroEducation from "@/assets/hero-education.jpg";
import mujCampus from "@/assets/muj-campus.jpg";
import maheCampus from "@/assets/mahe-campus.jpg";
import programBenefits from "@/assets/program-benifits.jpg";
import courseMba from "@/assets/course/mba.jpg";
import courseMca from "@/assets/course/mca.jpg";
import courseBba from "@/assets/course/bba.jpg";
import courseBca from "@/assets/course/bca.jpg";
import courseBcom from "@/assets/course/bcom.jpg";
import courseBa from "@/assets/course/ba.jpg";

export type CategorySlug =
  | "admission-guide"
  | "career-guide"
  | "university-guide"
  | "course-guide"
  | "comparisons"
  | "fees"
  | "salary"
  | "exams"
  | "education-news"
  | "student-resources";

export interface BlogCategory {
  slug: CategorySlug;
  name: string;
  /** Short label for cards and chips. */
  short: string;
  title: string;
  description: string;
  intro: string;
  keywords: string;
  image: string;
}

export interface BlogAuthor {
  slug: string;
  name: string;
  role: string;
  bio: string;
  credentials: string;
}

export interface ArticleSection {
  id: string;
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  table?: { head: string[]; rows: string[][] };
  note?: string;
}

export interface ArticleFaq {
  question: string;
  answer: string;
}

export interface Article {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  excerpt: string;
  metaDescription: string;
  keywords: string;
  category: CategorySlug;
  tags: string[];
  authorSlug: string;
  reviewedBy?: string;
  publishedAt: string;
  updatedAt: string;
  image: string;
  featured?: boolean;
  sections: ArticleSection[];
  faqs: ArticleFaq[];
  /** Required interlinking targets — keeps every article inside the silo. */
  university: string;
  course: string;
  comparison: string;
  /** Extra hand-picked internal destinations. */
  extraLinks?: string[];
}

export const BLOG_AUTHORS: BlogAuthor[] = [
  {
    slug: "rajesh-kumar",
    name: "Dr. Rajesh Kumar",
    role: "Head of Academic Research, AVEDU",
    bio: "Former university registrar with 18 years in higher-education administration. Tracks UGC-DEB entitlement, NAAC cycles and online programme approvals for AVEDU.",
    credentials: "PhD Management • 18 years in higher education",
  },
  {
    slug: "priya-sharma",
    name: "Priya Sharma",
    role: "Senior Admission Counsellor",
    bio: "Has guided 6,000+ working professionals into UGC-entitled online degrees since 2016. Specialises in eligibility, document verification and scholarship planning.",
    credentials: "MBA • 9 years in admission counselling",
  },
  {
    slug: "amit-verma",
    name: "Amit Verma",
    role: "Careers & Placement Analyst",
    bio: "Reviews salary benchmarks, hiring data and placement outcomes for online degree holders across IT, BFSI, analytics and operations roles.",
    credentials: "MTech • 11 years in talent analytics",
  },
  {
    slug: "neha-singh",
    name: "Neha Singh",
    role: "Education Policy Writer",
    bio: "Covers UGC, AICTE and DEB notifications, admission calendars and fee regulation changes affecting online and distance learners in India.",
    credentials: "MA Journalism • 7 years in education reporting",
  },
];

export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    slug: "admission-guide",
    name: "Admission Guide",
    short: "Admission",
    title: "Online University Admission Guides 2026 — Process, Documents & Dates",
    description:
      "Step-by-step admission guides for UGC-entitled online universities in India: eligibility, documents, application process, deadlines and fee payment.",
    intro:
      "Everything you need to move from shortlist to enrolment: eligibility rules, document checklists, session deadlines, application walk-throughs and the mistakes that cost applicants a full semester.",
    keywords: "online university admission, online degree admission process, admission last date",
    image: heroEducation,
  },
  {
    slug: "career-guide",
    name: "Career Guide",
    short: "Career",
    title: "Career Guides for Online Degree Holders — Roles, Skills & Growth",
    description:
      "Career roadmaps for online MBA, MCA, BBA, BCA and commerce graduates: job roles, skill stacks, promotion timelines and industry demand in India.",
    intro:
      "Which roles actually open up after an online degree, what employers screen for, and how to sequence skills so the degree translates into a promotion rather than a certificate.",
    keywords: "online mba career, jobs after online degree, career growth online mba",
    image: mbaCareer,
  },
  {
    slug: "university-guide",
    name: "University Guide",
    short: "University",
    title: "Online University Guides — Approvals, Reviews & Programme Quality",
    description:
      "In-depth guides to India's online universities: UGC entitlement, NAAC grade, LMS quality, exam pattern, placement support and student reviews.",
    intro:
      "Independent reviews of each UGC-entitled online university — what the prospectus says, what students actually report, and who each institution genuinely suits.",
    keywords: "online university review, ugc approved online university, naac grade online",
    image: mujCampus,
  },
  {
    slug: "course-guide",
    name: "Course Guide",
    short: "Course",
    title: "Online Course Guides — Syllabus, Specialisations & Eligibility",
    description:
      "Programme guides for online MBA, MCA, BBA, BCA, BCom, MCom, BA and MA: syllabus, specialisations, duration, eligibility and who each course suits.",
    intro:
      "Semester-wise syllabus, specialisation trade-offs, credit structure and eligibility for every online programme offered in India.",
    keywords: "online mba syllabus, online mca specialisations, online degree course guide",
    image: courseMba,
  },
  {
    slug: "comparisons",
    name: "Comparisons",
    short: "Compare",
    title: "Online University & Course Comparisons — Side-by-Side Analysis",
    description:
      "Data-backed comparisons of India's online universities and degrees: fees, NAAC grade, exam mode, placement support and degree value compared.",
    intro:
      "Head-to-head breakdowns built from official prospectuses and regulator records — no sponsored rankings, no vague verdicts.",
    keywords: "manipal vs amity online, online university comparison, which online mba is best",
    image: uniCompare,
  },
  {
    slug: "fees",
    name: "Fees",
    short: "Fees",
    title: "Online Degree Fees in India — Total Cost, EMI & Scholarships",
    description:
      "Honest fee breakdowns for online degrees in India: total programme cost, semester fee, exam fee, EMI plans and scholarship waivers.",
    intro:
      "The published fee is rarely the final number. These guides break down semester fees, exam charges, EMI interest and the waivers that actually apply.",
    keywords: "online mba fees, online degree fees india, no cost emi online degree",
    image: programBenefits,
  },
  {
    slug: "salary",
    name: "Salary",
    short: "Salary",
    title: "Salary Guides for Online Degree Graduates in India",
    description:
      "Salary benchmarks after an online MBA, MCA, BBA or BCA in India — by role, experience level, city and industry, with realistic growth curves.",
    intro:
      "Role-wise salary bands sourced from hiring data and reported offers, split by experience so the numbers stay honest for career switchers and freshers alike.",
    keywords: "online mba salary india, mca salary, salary after online degree",
    image: placement,
  },
  {
    slug: "exams",
    name: "Exams",
    short: "Exams",
    title: "Online University Exams — Pattern, Proctoring, Results & Re-attempts",
    description:
      "How online university exams work in India: proctored exam pattern, internal assessment weightage, result timelines, backlog and re-attempt rules.",
    intro:
      "Exam pattern, proctoring rules, internal assessment weightage, result timelines and what happens if you miss or fail a paper.",
    keywords: "online university exam pattern, proctored exam, online mba exam",
    image: onlineLearning,
  },
  {
    slug: "education-news",
    name: "Education News",
    short: "News",
    title: "Online Education News India — UGC, DEB & Admission Updates",
    description:
      "Latest UGC, AICTE and DEB notifications, admission window changes, new online programme approvals and fee regulation updates for Indian learners.",
    intro:
      "Regulator notifications and admission-cycle changes that materially affect online learners — summarised, dated and linked to the source.",
    keywords: "ugc news online degree, deb notification, online education news india",
    image: maheCampus,
  },
  {
    slug: "student-resources",
    name: "Student Resources",
    short: "Resources",
    title: "Student Resources — Checklists, Templates & Study Tools",
    description:
      "Practical resources for online learners: document checklists, study plans, LMS tips, brochure downloads and admission trackers.",
    intro:
      "Checklists, planners and tools that remove the admin friction from studying online while working full time.",
    keywords: "online degree checklist, study plan online mba, student resources",
    image: courseBca,
  },
];

export const getCategory = (slug: string): BlogCategory | undefined =>
  BLOG_CATEGORIES.find((c) => c.slug === slug);

export const getAuthor = (slug: string): BlogAuthor | undefined =>
  BLOG_AUTHORS.find((a) => a.slug === slug);

/* ------------------------------------------------------------------ */
/* Articles                                                            */
/* ------------------------------------------------------------------ */

export const ARTICLES: Article[] = [
  {
    slug: "online-mba-admission-process-2026",
    title: "Online MBA Admission Process 2026: Step-by-Step Guide",
    h1: "Online MBA Admission Process 2026 — Complete Step-by-Step Guide",
    metaTitle: "Online MBA Admission Process 2026 — Steps, Documents & Dates | AVEDU",
    excerpt:
      "From shortlisting a UGC-entitled university to paying the first semester fee — the exact 9-step online MBA admission process, documents required and the deadlines that decide your session.",
    metaDescription:
      "Complete online MBA admission process for 2026: eligibility, documents, application steps, fee payment, enrolment number and session deadlines explained.",
    keywords: "online mba admission 2026, online mba admission process, mba admission documents",
    category: "admission-guide",
    tags: ["Online MBA", "Admission", "Documents", "Working Professionals"],
    authorSlug: "priya-sharma",
    reviewedBy: "Dr. Rajesh Kumar",
    publishedAt: "2026-01-08",
    updatedAt: "2026-07-22",
    image: heroEducation,
    featured: true,
    university: "/universities/manipal-online",
    course: "/courses/mba",
    comparison: "/compare/manipal-vs-amity",
    extraLinks: ["/online-mba-fees", "/tools/eligibility-checker", "/scholarships"],
    sections: [
      {
        id: "overview",
        heading: "How online MBA admission actually works",
        paragraphs: [
          "Online MBA admission in India is entitlement-driven, not entrance-driven. There is no CAT or MAT requirement at any UGC-entitled online university — admission is granted on your graduation marks, and the only real gate is whether the university holds valid UGC-DEB entitlement for the session you are joining.",
          "That single fact changes how you should apply. Instead of preparing for a test, your effort goes into verifying entitlement, choosing the right specialisation, and submitting a clean document set before the session cut-off. Applications submitted after the cut-off are rolled into the next cycle, which costs six months.",
        ],
        bullets: [
          "Two admission cycles every year: January (Spring) and July (Fall).",
          "No entrance exam at UGC-entitled online universities.",
          "Eligibility: bachelor's degree in any discipline, typically 50% aggregate (45% for reserved categories).",
          "Provisional admission is possible while your final-year result is awaited at several universities.",
        ],
      },
      {
        id: "steps",
        heading: "The 9 steps, in order",
        paragraphs: [
          "Follow the sequence below exactly. The most common cause of a delayed enrolment number is doing step 6 before step 4 — paying the fee before the eligibility check clears, which forces a manual reconciliation.",
        ],
        bullets: [
          "1. Shortlist 2–3 universities and confirm each one's UGC-DEB entitlement for your admission session.",
          "2. Pick the specialisation. Changing it after enrolment usually costs a semester.",
          "3. Register on the university portal with a mobile number and email you will keep for two years.",
          "4. Upload documents and wait for the eligibility verification result (24–72 hours).",
          "5. Apply the scholarship or waiver code before generating the fee challan — codes cannot be applied retroactively.",
          "6. Pay the first semester fee or set up the no-cost EMI mandate.",
          "7. Receive the enrolment number and LMS credentials (3–10 working days).",
          "8. Complete the induction module and check that all subjects appear in the LMS.",
          "9. Note the internal assessment and term-end exam dates for semester one.",
        ],
      },
      {
        id: "documents",
        heading: "Documents required",
        table: {
          head: ["Document", "Format", "Why it is checked"],
          rows: [
            ["Class 10 marksheet", "PDF/JPG under 2 MB", "Date of birth verification"],
            ["Class 12 marksheet", "PDF/JPG under 2 MB", "Academic continuity"],
            ["Graduation marksheets (all years)", "PDF", "Eligibility percentage"],
            ["Degree certificate or provisional certificate", "PDF", "Proof of completion"],
            ["Photo ID (Aadhaar / passport)", "PDF/JPG", "Identity and address"],
            ["Passport photo", "JPG, white background", "ID card and degree"],
            ["Work experience letter", "PDF", "Optional; unlocks some scholarships"],
            ["Category certificate", "PDF", "Fee relaxation, where applicable"],
          ],
        },
        note: "Scan in colour at 200–300 DPI. Greyscale scans are the single most common rejection reason.",
      },
      {
        id: "deadlines",
        heading: "Session deadlines you cannot miss",
        paragraphs: [
          "Each university publishes an admission-open date and a last date, plus a separate — and usually earlier — scholarship last date. Applicants routinely meet the admission deadline and miss the waiver by two weeks.",
          "Track every date for every university in one place on the AVEDU admission calendar, and set a reminder for the scholarship cut-off rather than the admission cut-off.",
        ],
      },
      {
        id: "choosing",
        heading: "Choosing between universities before you apply",
        paragraphs: [
          "Fee is the easiest variable to compare and the least predictive of outcome. Weigh placement support, recruiter reach, exam flexibility and LMS quality alongside it. A ₹40,000 gap over two years is roughly ₹1,600 a month — less than a single salary increment the stronger network might unlock.",
          "Run a side-by-side comparison before you commit; the differences in exam mode and placement support are larger than the differences in fee.",
        ],
      },
      {
        id: "mistakes",
        heading: "Five mistakes that cost applicants a semester",
        bullets: [
          "Assuming a university is entitled because it was entitled last year — entitlement is renewed session by session.",
          "Paying the fee before the scholarship code is applied.",
          "Uploading a provisional certificate without the marksheets that support the percentage.",
          "Registering with a work email that gets deactivated when the job changes.",
          "Choosing a specialisation for its name rather than for the electives it unlocks in semester three.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is there an entrance exam for an online MBA in India?",
        answer:
          "No. UGC-entitled online MBA programmes in India admit on graduation marks. Some universities run a short internal aptitude assessment, but it is not an elimination test.",
      },
      {
        question: "How long does online MBA admission take end to end?",
        answer:
          "Typically 5–12 working days from document upload to enrolment number, provided your documents are colour scans and your eligibility clears on the first check.",
      },
      {
        question: "Can I get admission with a 3-year degree and backlogs?",
        answer:
          "Backlogs must be cleared and reflected on the final marksheet before the eligibility check. A provisional certificate is accepted at most universities while the degree certificate is pending.",
      },
      {
        question: "Is an online MBA degree valid for government jobs?",
        answer:
          "Yes, provided the programme is UGC-entitled for your admission session. UGC treats online, distance and on-campus degrees as equivalent for employment and higher study.",
      },
    ],
  },

  {
    slug: "online-mba-salary-in-india",
    title: "Online MBA Salary in India 2026: Role-Wise Benchmarks",
    h1: "Online MBA Salary in India 2026 — Realistic Role-Wise Benchmarks",
    metaTitle: "Online MBA Salary in India 2026 — Role & Experience Wise | AVEDU",
    excerpt:
      "What an online MBA actually pays in India, split by role, experience band and city — plus the specialisations with the steepest salary curve and the ones that plateau.",
    metaDescription:
      "Online MBA salary in India 2026 by role, experience and city. Realistic pay bands for finance, marketing, HR, operations and analytics MBA graduates.",
    keywords: "online mba salary india, mba salary after online degree, mba specialisation salary",
    category: "salary",
    tags: ["Online MBA", "Salary", "Career Growth"],
    authorSlug: "amit-verma",
    reviewedBy: "Dr. Rajesh Kumar",
    publishedAt: "2026-02-14",
    updatedAt: "2026-08-01",
    image: placement,
    featured: true,
    university: "/universities/amity-online",
    course: "/courses/mba",
    comparison: "/compare/amity-vs-lpu",
    extraLinks: ["/online-mba-admission", "/tools/university-finder"],
    sections: [
      {
        id: "reality",
        heading: "Set the baseline correctly",
        paragraphs: [
          "An online MBA is a promotion instrument, not a placement instrument. The salary jump it produces comes overwhelmingly from internal movement — a step from executive to manager, or from delivery into a business-facing role — rather than from a campus offer.",
          "That means the honest benchmark is not a fresher CTC. It is the delta between what you earn today and what the same employer pays the grade above you. Across the profiles we track, that delta lands between 25% and 45% within 18 months of completion for candidates who already had 3+ years of experience.",
        ],
      },
      {
        id: "bands",
        heading: "Salary bands by role and experience",
        table: {
          head: ["Role", "0–2 yrs", "3–6 yrs", "7+ yrs"],
          rows: [
            ["Business / Data Analyst", "₹4.5–7 LPA", "₹8–14 LPA", "₹15–24 LPA"],
            ["Finance Manager", "₹5–7 LPA", "₹9–15 LPA", "₹18–30 LPA"],
            ["Marketing Manager", "₹4.5–6.5 LPA", "₹8–14 LPA", "₹16–28 LPA"],
            ["HR Business Partner", "₹4–6 LPA", "₹7–12 LPA", "₹14–22 LPA"],
            ["Operations / Supply Chain", "₹4–6 LPA", "₹7.5–13 LPA", "₹15–25 LPA"],
            ["Product Manager", "₹6–9 LPA", "₹12–20 LPA", "₹22–40 LPA"],
            ["IT Project Manager", "₹6–8 LPA", "₹11–18 LPA", "₹20–35 LPA"],
          ],
        },
        note: "Bands reflect reported offers for online and part-time MBA holders in India, not full-time residential MBA placements.",
      },
      {
        id: "specialisation",
        heading: "Which specialisation pays most",
        paragraphs: [
          "Business analytics and finance carry the steepest curve because both convert directly into measurable output. Marketing pays well only when paired with performance-marketing tooling. HR and general management have the flattest curve but the highest role stability.",
        ],
        bullets: [
          "Business Analytics — highest early growth; strongest when combined with SQL and Power BI.",
          "Finance — strongest long-run ceiling, especially with a CFA or NISM certification alongside.",
          "Operations & Supply Chain — steady, manufacturing and e-commerce heavy.",
          "Marketing — wide range; digital-heavy roles outpay traditional brand roles.",
          "HR — stable, lower ceiling, fastest route to a people-manager title.",
        ],
      },
      {
        id: "city",
        heading: "City multipliers",
        table: {
          head: ["City", "Multiplier vs national median", "Strongest sectors"],
          rows: [
            ["Bengaluru", "1.25×", "Tech, product, analytics"],
            ["Mumbai", "1.20×", "BFSI, media, consulting"],
            ["Delhi NCR", "1.15×", "Consulting, FMCG, e-commerce"],
            ["Hyderabad", "1.10×", "Tech, pharma, GCCs"],
            ["Pune", "1.05×", "IT services, manufacturing"],
            ["Tier-2 cities", "0.80×", "Operations, BFSI branches"],
          ],
        },
      },
      {
        id: "maximise",
        heading: "How to actually capture the increment",
        bullets: [
          "Tell your manager you are enrolled in semester one, not after you graduate — succession planning happens 12 months ahead.",
          "Pick capstone and elective projects that use your employer's live data, with permission.",
          "Stack one hard tool per semester: SQL, Excel modelling, Power BI, then a domain certification.",
          "Update your title and skills on hiring platforms at graduation, not before — recruiters filter on completed qualifications.",
        ],
      },
      {
        id: "vs-regular",
        heading: "Online MBA vs regular MBA on pay",
        paragraphs: [
          "For a candidate with zero experience, a residential MBA from a ranked institute still pays materially more because it comes with a placement process. For a candidate with 3+ years of experience who keeps working, the online route usually wins on net financial outcome: no salary forgone, a fraction of the fee, and a comparable increment.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do companies pay less for an online MBA?",
        answer:
          "Pay is set by role and grade, not by delivery mode. Employers do not run separate salary bands for online degrees; what changes is access — online MBAs rarely come with a campus placement process.",
      },
      {
        question: "What is a realistic salary hike after an online MBA?",
        answer:
          "25–45% within 18 months of completion for candidates with 3+ years of prior experience who move into a people-manager or business-facing role.",
      },
      {
        question: "Which online MBA specialisation has the highest salary?",
        answer:
          "Business analytics and finance report the highest medians, with product management highest at senior levels for candidates already in tech.",
      },
    ],
  },

  {
    slug: "online-mba-fees-in-india-full-breakdown",
    title: "Online MBA Fees in India 2026: The Full Cost Breakdown",
    h1: "Online MBA Fees in India 2026 — Total Cost, Hidden Charges & EMI",
    metaTitle: "Online MBA Fees India 2026 — University-Wise Total Cost | AVEDU",
    excerpt:
      "University-wise online MBA fees, plus the charges that never appear in the brochure: exam fees, re-attempt fees, convocation and EMI interest. With a worked two-year cost model.",
    metaDescription:
      "Online MBA fees in India 2026 compared university-wise, including semester fee, exam fee, EMI cost and scholarship waivers. Full two-year cost model.",
    keywords: "online mba fees, online mba fee structure, cheapest online mba india, mba emi",
    category: "fees",
    tags: ["Fees", "EMI", "Scholarships", "Online MBA"],
    authorSlug: "neha-singh",
    reviewedBy: "Priya Sharma",
    publishedAt: "2026-01-19",
    updatedAt: "2026-07-30",
    image: programBenefits,
    featured: true,
    university: "/universities/lpu-online",
    course: "/courses/mba",
    comparison: "/compare/manipal-vs-lpu",
    extraLinks: ["/tools/fee-calculator", "/scholarships", "/online-mba-fees"],
    sections: [
      {
        id: "range",
        heading: "What an online MBA costs in 2026",
        paragraphs: [
          "Across UGC-entitled universities, a two-year online MBA in India costs between ₹60,000 and ₹1.8 lakh in total tuition. The spread is driven by brand and placement infrastructure, not by curriculum — the syllabus is broadly regulated and looks similar across institutions.",
          "Treat the advertised 'per year' figure as tuition only. The number you should budget is tuition plus examination fees plus one re-attempt buffer plus convocation.",
        ],
      },
      {
        id: "university-wise",
        heading: "University-wise indicative fees",
        table: {
          head: ["University", "Fee / year", "Two-year tuition", "No-cost EMI"],
          rows: [
            ["IGNOU", "₹31,000", "₹62,000", "No"],
            ["Amity University Online", "₹60,000", "₹1,20,000", "Yes"],
            ["LPU Online", "₹55,000", "₹1,10,000", "Yes"],
            ["Manipal University Jaipur", "₹75,000", "₹1,50,000", "Yes"],
            ["Jain University Online", "₹60,000", "₹1,20,000", "Yes"],
            ["Uttaranchal University", "₹45,000", "₹90,000", "Yes"],
            ["Vivekananda Global University", "₹40,000", "₹80,000", "Yes"],
          ],
        },
        note: "Indicative tuition for the online MBA. Confirm the current figure on the university's official fee page before paying.",
      },
      {
        id: "hidden",
        heading: "Charges the brochure leaves out",
        bullets: [
          "Examination fee: ₹500–₹1,500 per paper per term at several universities.",
          "Re-attempt fee: charged per paper; budget one buffer attempt across two years.",
          "Convocation and degree dispatch: ₹2,000–₹5,000, one time.",
          "Transcript or WES evaluation copies: ₹1,000–₹3,000 each, if you plan to work abroad.",
          "EMI interest: 'no-cost' EMI is genuinely zero-interest only when the university absorbs the subvention — otherwise expect 12–16% annualised.",
        ],
      },
      {
        id: "model",
        heading: "Worked two-year cost model",
        table: {
          head: ["Line item", "Low estimate", "High estimate"],
          rows: [
            ["Tuition (2 years)", "₹62,000", "₹1,50,000"],
            ["Exam fees (4 terms)", "₹4,000", "₹18,000"],
            ["Re-attempt buffer", "₹0", "₹6,000"],
            ["Convocation & degree", "₹2,000", "₹5,000"],
            ["Total", "₹68,000", "₹1,79,000"],
          ],
        },
      },
      {
        id: "scholarships",
        heading: "Waivers that genuinely reduce the bill",
        paragraphs: [
          "Most universities run four waiver categories: merit (graduation percentage), defence and their dependants, government employees, and single-instalment payment. Waivers stack only where the prospectus says so — usually they do not.",
          "The single-payment discount is the most reliable: 5–10% off total tuition for paying the full programme upfront. If you have the cash and no better use for it, that beats most EMI arithmetic.",
        ],
      },
      {
        id: "cheap-vs-value",
        heading: "Cheapest is not always cheapest",
        paragraphs: [
          "IGNOU is the lowest-cost UGC-entitled route by a wide margin and remains the right answer for cost-first learners. It also has the longest support turnaround and the least placement infrastructure. If your goal is a promotion inside a corporate employer, the ₹50,000–₹80,000 premium at a private university typically buys placement support, a faster LMS and a shorter degree-dispatch cycle.",
        ],
      },
    ],
    faqs: [
      {
        question: "Which is the cheapest UGC-approved online MBA in India?",
        answer:
          "IGNOU, at roughly ₹62,000 for the full programme. Among private universities, Vivekananda Global University and Uttaranchal University sit at the lower end.",
      },
      {
        question: "Is no-cost EMI really free?",
        answer:
          "Only when the university pays the interest subvention to the lender. Ask for the total repayable amount in writing; if it exceeds the tuition, it is not no-cost.",
      },
      {
        question: "Can I pay online MBA fees semester by semester?",
        answer:
          "Yes. Every private online university in India bills per semester, and most also offer monthly EMI through a lending partner.",
      },
    ],
  },

  {
    slug: "is-online-mba-worth-it",
    title: "Is an Online MBA Worth It in 2026? An Evidence-Based Answer",
    h1: "Is an Online MBA Worth It in 2026?",
    metaTitle: "Is an Online MBA Worth It in 2026? Honest Analysis | AVEDU",
    excerpt:
      "Who an online MBA pays off for, who it does not, and the four conditions that separate the two — with a break-even calculation you can run against your own salary.",
    metaDescription:
      "Is an online MBA worth it in 2026? Return on investment, employer acceptance, break-even maths and the profiles where an online MBA does not pay off.",
    keywords: "is online mba worth it, online mba value, online mba roi",
    category: "career-guide",
    tags: ["Online MBA", "ROI", "Career Growth", "Working Professionals"],
    authorSlug: "amit-verma",
    reviewedBy: "Dr. Rajesh Kumar",
    publishedAt: "2026-03-02",
    updatedAt: "2026-07-18",
    image: mbaCareer,
    featured: true,
    university: "/universities/manipal-online",
    course: "/courses/mba",
    comparison: "/compare/manipal-vs-jain",
    extraLinks: ["/tools/fee-calculator", "/online-mba-eligibility"],
    sections: [
      {
        id: "short-answer",
        heading: "The short answer",
        paragraphs: [
          "An online MBA is worth it if you are already employed, have at least two years of experience, and are blocked from a promotion by a formal qualification requirement. It is usually not worth it if you are a fresher hoping the degree will produce a job offer on its own.",
          "The distinction matters because the degree does not generate opportunity — it removes a filter. If no filter is blocking you, removing one changes nothing.",
        ],
      },
      {
        id: "break-even",
        heading: "Run the break-even yourself",
        paragraphs: [
          "Take total cost including exam fees. Divide by the monthly increment you expect. That is your break-even in months. Anything under 24 months is a strong case; over 48 months, reconsider.",
          "Worked example: ₹1,20,000 total cost, current CTC ₹8 LPA, expected post-degree CTC ₹10.5 LPA. Monthly increment ≈ ₹20,800. Break-even ≈ 6 months. The forgone-salary term is zero because you never stopped working — which is the entire financial argument for the online route.",
        ],
      },
      {
        id: "employers",
        heading: "Do employers accept it?",
        paragraphs: [
          "UGC treats an entitled online degree as equivalent to its on-campus counterpart for employment and further study, and central government recruitment follows that position. Private employers largely do too, with two practical exceptions: a handful of consulting and investment-banking entry programmes recruit exclusively from residential campuses, and some legacy HR policies still specify 'full-time'.",
          "Verify entitlement on the UGC-DEB portal for your specific admission session and keep the screenshot. That one document resolves almost every verification query later.",
        ],
      },
      {
        id: "worth-it-for",
        heading: "Profiles where it clearly pays",
        bullets: [
          "Mid-career professionals blocked by a 'PG required' clause for the next grade.",
          "Engineers moving from delivery into product, program or business roles.",
          "Family-business operators who need structured finance and operations grounding.",
          "Career returners rebuilding a formal credential alongside part-time work.",
          "Government and PSU employees where a PG degree carries fixed pay-scale weightage.",
        ],
      },
      {
        id: "not-worth-it",
        heading: "Profiles where it does not",
        bullets: [
          "Freshers expecting placement — the online route rarely includes a campus process.",
          "Anyone targeting tier-1 consulting or IB entry programmes.",
          "Candidates who need the peer network more than the credential.",
          "Anyone unable to commit 8–10 hours a week for two years; a lapsed enrolment is a pure loss.",
        ],
      },
      {
        id: "choose-well",
        heading: "If you go ahead, choose on the right variables",
        paragraphs: [
          "Rank universities on entitlement, exam flexibility, LMS quality and placement support before fee. Then compare your two finalists side by side and check what each waives before you pay.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is an online MBA respected by employers in India?",
        answer:
          "Yes, when the programme is UGC-entitled. Employers assess role fit and experience; degree mode is rarely a screening criterion outside a few elite entry programmes.",
      },
      {
        question: "Can I do a PhD after an online MBA?",
        answer:
          "Yes. A UGC-entitled online MBA is equivalent to a regular MBA for higher study, including PhD admission and UGC-NET eligibility.",
      },
      {
        question: "How many hours per week does an online MBA need?",
        answer:
          "Plan for 8–10 hours a week during a normal term and 15+ in the two weeks before term-end exams.",
      },
    ],
  },

  {
    slug: "manipal-vs-amity-online-which-is-better",
    title: "Manipal vs Amity Online 2026: Which One Should You Pick?",
    h1: "Manipal vs Amity Online 2026 — A Decision Guide",
    metaTitle: "Manipal vs Amity Online 2026 — Fees, NAAC & Placements | AVEDU",
    excerpt:
      "Two of India's most-searched online universities compared on the variables that actually change outcomes: entitlement, fee, exam flexibility, specialisation depth and recruiter reach.",
    metaDescription:
      "Manipal University Jaipur vs Amity University Online 2026: fees, NAAC grade, specialisations, exam mode and placement support compared side by side.",
    keywords: "manipal vs amity online, online manipal or amity, best online mba university",
    category: "comparisons",
    tags: ["Manipal", "Amity", "University Comparison", "Online MBA"],
    authorSlug: "rajesh-kumar",
    reviewedBy: "Priya Sharma",
    publishedAt: "2026-02-03",
    updatedAt: "2026-08-02",
    image: uniCompare,
    university: "/universities/manipal-online",
    course: "/courses/mba",
    comparison: "/compare/manipal-vs-amity",
    extraLinks: ["/universities/amity-online", "/comparison", "/tools/university-finder"],
    sections: [
      {
        id: "snapshot",
        heading: "Snapshot",
        table: {
          head: ["Parameter", "Manipal University Jaipur", "Amity University Online"],
          rows: [
            ["Established", "2011", "2005"],
            ["NAAC", "A+", "A+"],
            ["Online MBA fee / year", "₹75,000", "₹60,000"],
            ["Specialisations", "Focused, deep", "Widest catalogue"],
            ["Exam mode", "Online proctored", "Online proctored"],
            ["Placement support", "500+ hiring partners", "2L+ alumni network"],
            ["Best for", "Brand and recruiter reach", "Specialisation choice and price"],
          ],
        },
      },
      {
        id: "brand",
        heading: "Brand and recruiter reach",
        paragraphs: [
          "Manipal carries stronger recall with corporate HR teams, particularly in IT services and BFSI, and its placement cell is the more active of the two in arranging virtual drives. Amity's advantage is scale — a very large alumni base that is genuinely useful for lateral referrals, especially in NCR.",
        ],
      },
      {
        id: "cost",
        heading: "Cost over the full programme",
        paragraphs: [
          "Amity is roughly ₹30,000 cheaper across a two-year MBA. Both offer no-cost EMI and merit waivers. On a monthly basis the difference is about ₹1,250 — small enough that it should not be the deciding variable unless your budget is genuinely tight.",
        ],
      },
      {
        id: "curriculum",
        heading: "Curriculum and specialisations",
        paragraphs: [
          "Amity offers the broader specialisation catalogue, including several niche combinations. Manipal offers fewer specialisations but pairs them with Coursera content access, which materially improves the analytics and technology electives.",
          "If your target specialisation is mainstream — finance, marketing, HR, operations, analytics — both cover it well. If it is niche, check Amity first.",
        ],
      },
      {
        id: "student-experience",
        heading: "LMS, support and exams",
        bullets: [
          "Both run fully online proctored term-end exams with slot selection.",
          "Manipal's LMS is the more stable of the two, with reliable recorded-session availability.",
          "Amity's support turnaround is slower at peak admission periods; plan document queries early.",
          "Both accept provisional admission pending final-year results.",
        ],
      },
      {
        id: "verdict",
        heading: "Verdict",
        bullets: [
          "Choose Manipal if placement support and recruiter recall matter most.",
          "Choose Amity if you want a niche specialisation or the lower total cost.",
          "On legal validity the two are identical — both are UGC-entitled and both degrees are equivalent to on-campus ones.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is Manipal or Amity better for an online MBA?",
        answer:
          "Manipal for placement support and brand recall; Amity for specialisation breadth and a lower fee. Both hold NAAC A+ and UGC entitlement.",
      },
      {
        question: "Which is cheaper, Manipal or Amity online?",
        answer:
          "Amity, by roughly ₹30,000 across a two-year online MBA.",
      },
      {
        question: "Do both offer no-cost EMI?",
        answer: "Yes, both offer monthly EMI plans through lending partners, subject to eligibility.",
      },
    ],
  },

  {
    slug: "online-mca-syllabus-and-specialisations",
    title: "Online MCA Syllabus & Specialisations 2026",
    h1: "Online MCA Syllabus, Specialisations and Career Paths 2026",
    metaTitle: "Online MCA Syllabus 2026 — Semester-Wise & Specialisations | AVEDU",
    excerpt:
      "Semester-wise online MCA syllabus, the six specialisations that matter, project requirements and how the programme maps to real developer and data roles.",
    metaDescription:
      "Online MCA syllabus 2026 semester-wise, with specialisations in AI, data science, cyber security and cloud, eligibility, duration and career outcomes.",
    keywords: "online mca syllabus, mca specialisations, online mca eligibility",
    category: "course-guide",
    tags: ["Online MCA", "Syllabus", "Tech Career"],
    authorSlug: "amit-verma",
    publishedAt: "2026-01-28",
    updatedAt: "2026-06-25",
    image: courseMca,
    university: "/universities/ignou-online",
    course: "/courses/mca",
    comparison: "/compare/manipal-vs-ignou",
    extraLinks: ["/courses/bca", "/tools/eligibility-checker"],
    sections: [
      {
        id: "structure",
        heading: "Programme structure",
        paragraphs: [
          "The online MCA is a two-year, four-semester postgraduate programme worth roughly 80–90 credits. Semesters one and two are common across specialisations; three and four carry the electives and the capstone project.",
        ],
        bullets: [
          "Duration: 2 years (4 semesters); maximum span usually 4 years.",
          "Eligibility: BCA, B.Sc IT/CS, or any bachelor's degree with mathematics at 10+2 or graduation level.",
          "Assessment: 30% internal, 70% proctored term-end exam, at most universities.",
        ],
      },
      {
        id: "syllabus",
        heading: "Semester-wise syllabus",
        table: {
          head: ["Semester", "Core subjects"],
          rows: [
            [
              "I",
              "Problem Solving & Programming (C), Computer Organisation, Discrete Mathematics, Database Management Systems, Communication Skills",
            ],
            [
              "II",
              "Object-Oriented Programming (Java), Data Structures & Algorithms, Operating Systems, Software Engineering, Computer Networks",
            ],
            [
              "III",
              "Web Technologies, Machine Learning fundamentals, Cloud Computing, Specialisation elective I, Mini project",
            ],
            [
              "IV",
              "Specialisation elective II, Advanced elective, Capstone project and viva",
            ],
          ],
        },
      },
      {
        id: "specialisations",
        heading: "Specialisations worth choosing",
        bullets: [
          "Data Science & Analytics — strongest hiring demand; needs comfort with statistics.",
          "Artificial Intelligence & Machine Learning — high ceiling, steepest workload.",
          "Cyber Security — stable demand, best paired with a CEH or CompTIA certification.",
          "Cloud Computing & DevOps — most direct route to a salary bump for existing IT staff.",
          "Full-Stack Development — best fit for career switchers with no coding background.",
          "Software Engineering (general) — safest when your employer values the credential, not the specialism.",
        ],
      },
      {
        id: "project",
        heading: "The capstone project",
        paragraphs: [
          "Semester four is dominated by the capstone. Universities accept workplace projects with an employer NOC, which is the single best way to compress effort: you get credit for work you were already doing, and a defensible portfolio artefact.",
        ],
      },
      {
        id: "careers",
        heading: "Roles this maps to",
        table: {
          head: ["Role", "Entry pay", "Core skills the syllabus covers"],
          rows: [
            ["Software Developer", "₹4–7 LPA", "DSA, Java, DBMS"],
            ["Data Analyst", "₹4.5–8 LPA", "SQL, ML fundamentals, statistics"],
            ["Cloud / DevOps Engineer", "₹6–11 LPA", "Cloud computing, networks, OS"],
            ["Cyber Security Analyst", "₹5–9 LPA", "Networks, security elective"],
            ["Systems Analyst", "₹5–8 LPA", "Software engineering, DBMS"],
          ],
        },
      },
      {
        id: "choosing-university",
        heading: "Choosing where to study it",
        paragraphs: [
          "For MCA specifically, weigh lab and project support over brand. IGNOU remains the cost leader; private universities are worth the premium mainly for LMS quality and faster evaluation cycles. Compare your shortlist before applying.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is an online MCA valid for IT jobs?",
        answer:
          "Yes, when UGC-entitled. IT employers hire on skills demonstrated in interviews and projects; the degree clears the eligibility filter.",
      },
      {
        question: "Can I do an online MCA without mathematics in 12th?",
        answer:
          "Most universities require mathematics at 10+2 or graduation level. Some accept a bridge course in the first semester instead.",
      },
      {
        question: "How long is an online MCA?",
        answer: "Two years across four semesters, with a maximum completion span of up to four years.",
      },
    ],
  },

  {
    slug: "online-bba-vs-bcom-which-degree",
    title: "Online BBA vs BCom: Which Degree Should You Choose?",
    h1: "Online BBA vs BCom — Choosing the Right Undergraduate Degree",
    metaTitle: "Online BBA vs BCom 2026 — Syllabus, Careers & Salary | AVEDU",
    excerpt:
      "BBA builds managers, BCom builds finance specialists. A clear comparison of syllabus, career ceiling, higher-study routes and salary for online undergraduates.",
    metaDescription:
      "Online BBA vs BCom compared: syllabus, career paths, salary, higher study options and which degree suits management versus finance ambitions.",
    keywords: "bba vs bcom, online bba, online bcom, which degree is better",
    category: "course-guide",
    tags: ["Online BBA", "Online BCom", "Undergraduate", "Career Guide"],
    authorSlug: "priya-sharma",
    publishedAt: "2026-02-20",
    updatedAt: "2026-07-05",
    image: courseBba,
    university: "/universities/lpu-online",
    course: "/courses/bba",
    comparison: "/compare/lpu-vs-jain",
    extraLinks: ["/courses/bcom", "/courses/mba", "/tools/course-finder"],
    sections: [
      {
        id: "difference",
        heading: "The core difference",
        paragraphs: [
          "BBA is a breadth degree: marketing, HR, operations, strategy and a light finance layer. BCom is a depth degree in accounting, taxation, audit and corporate law. Both are three-year UGC-entitled undergraduate programmes available fully online.",
          "Pick BBA if you want to manage people and processes. Pick BCom if you want to be the person who owns the numbers — or if you intend to sit for CA, CS or CMA alongside.",
        ],
      },
      {
        id: "syllabus",
        heading: "Syllabus compared",
        table: {
          head: ["Area", "BBA", "BCom"],
          rows: [
            ["Accounting", "Introductory", "Financial, cost, corporate, advanced"],
            ["Taxation", "Overview only", "Direct and indirect, in depth"],
            ["Marketing", "Core + electives", "Single introductory paper"],
            ["HR & OB", "Core", "Minimal"],
            ["Business law", "Overview", "Corporate and mercantile law"],
            ["Analytics", "Business analytics elective", "Statistics and financial analysis"],
          ],
        },
      },
      {
        id: "careers",
        heading: "Where each degree leads",
        bullets: [
          "BBA → management trainee, sales and business development, HR executive, operations coordinator, marketing associate.",
          "BCom → accountant, audit associate, taxation assistant, banking officer, financial analyst.",
          "Both → MBA after graduation; BCom additionally feeds CA, CS, CMA and MCom.",
        ],
      },
      {
        id: "salary",
        heading: "Entry salary reality",
        table: {
          head: ["Degree", "Fresher pay", "After 5 years", "Common ceiling without PG"],
          rows: [
            ["Online BBA", "₹2.5–4 LPA", "₹6–10 LPA", "Team lead / assistant manager"],
            ["Online BCom", "₹2.4–3.8 LPA", "₹5.5–9 LPA", "Senior accountant / audit senior"],
          ],
        },
        note: "Both degrees hit their ceiling without a postgraduate qualification or professional certification. Plan the next step at admission, not at graduation.",
      },
      {
        id: "who",
        heading: "Decision shortcuts",
        bullets: [
          "Family business to run → BBA.",
          "CA, CS or CMA in parallel → BCom, for syllabus overlap.",
          "Government banking exams → BCom.",
          "Uncertain, but people-facing → BBA.",
          "Want the fastest route to an MBA → either; both are accepted.",
        ],
      },
      {
        id: "where",
        heading: "Where to study it online",
        paragraphs: [
          "Undergraduate online programmes vary more in support quality than in syllabus. Prioritise universities with responsive evaluation cycles and clear exam calendars, and run a comparison of your two finalists before paying the first semester fee.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is an online BBA valid for an MBA admission?",
        answer:
          "Yes. A UGC-entitled online BBA is accepted for MBA admission at Indian universities, including for entrance-based programmes.",
      },
      {
        question: "Which pays more, BBA or BCom?",
        answer:
          "Entry salaries are close. BCom edges ahead in finance-heavy roles; BBA scales faster into management once paired with an MBA.",
      },
      {
        question: "Can I do CA with an online BCom?",
        answer:
          "Yes. CA registration requires a recognised degree, and a UGC-entitled online BCom qualifies for the direct-entry route.",
      },
    ],
  },

  {
    slug: "ugc-deb-entitlement-how-to-verify",
    title: "UGC-DEB Entitlement: How to Verify an Online Degree Is Valid",
    h1: "UGC-DEB Entitlement — How to Verify Your Online Degree Is Valid",
    metaTitle: "UGC-DEB Entitlement Check 2026 — Verify an Online Degree | AVEDU",
    excerpt:
      "A four-minute verification routine that tells you whether a university's online programme is legally valid for your admission session — and what to do if it is not.",
    metaDescription:
      "How to verify UGC-DEB entitlement for an online degree in India, what entitlement covers, and the red flags that indicate an invalid programme.",
    keywords: "ugc deb entitlement, is online degree valid, verify online university",
    category: "university-guide",
    tags: ["UGC", "Accreditation", "Degree Verification"],
    authorSlug: "rajesh-kumar",
    reviewedBy: "Neha Singh",
    publishedAt: "2026-01-05",
    updatedAt: "2026-07-28",
    image: maheCampus,
    featured: true,
    university: "/universities/ignou-online",
    course: "/courses/mba",
    comparison: "/compare/ignou-vs-smu",
    extraLinks: ["/universities", "/online-courses-admission-process"],
    sections: [
      {
        id: "what",
        heading: "What entitlement actually means",
        paragraphs: [
          "UGC-DEB entitlement is permission granted to a specific university, for specific programmes, for a specific academic session, to offer those programmes in online or distance mode. It is not a blanket status. A university can be entitled for an online MBA and not for an online MCA in the same year.",
          "This is why 'UGC approved university' on a marketing page proves nothing. The question is whether your programme is entitled for your session.",
        ],
      },
      {
        id: "how",
        heading: "The four-minute verification routine",
        bullets: [
          "1. Open the UGC-DEB public portal and search the university by name.",
          "2. Open the entitlement list for the current academic session — not an archived year.",
          "3. Confirm your exact programme and level appear (e.g. 'Master of Business Administration — Online').",
          "4. Screenshot the listing with the session visible and save it with your admission documents.",
        ],
        note: "Repeat this check at the start of each academic year while you are enrolled. Entitlement is renewed session by session.",
      },
      {
        id: "naac",
        heading: "NAAC, AICTE and WES — what each adds",
        table: {
          head: ["Body", "What it certifies", "Does it affect degree validity?"],
          rows: [
            ["UGC-DEB", "Permission to offer the programme online", "Yes — this is the one that matters"],
            ["NAAC", "Institutional quality grade (A++ to C)", "No, but affects employer perception"],
            ["AICTE", "Technical/management programme approval", "Indirectly, for technical programmes"],
            ["WES", "Credential recognition abroad", "Only for overseas employment or study"],
          ],
        },
      },
      {
        id: "red-flags",
        heading: "Red flags",
        bullets: [
          "'Approved by' claims with no session or programme named.",
          "A one-year 'MBA' — UGC-entitled Indian MBAs are two years.",
          "Guaranteed placement in writing at the point of sale.",
          "Pressure to pay before the eligibility verification result is issued.",
          "Fee collected into a personal or agency account rather than the university's.",
        ],
      },
      {
        id: "already-enrolled",
        heading: "If you are already enrolled somewhere unverified",
        paragraphs: [
          "Request the entitlement letter for your admission session in writing. If the university cannot produce it, escalate to UGC-DEB with your fee receipts and stop further payments. Credits from a non-entitled programme cannot be transferred, so the sooner you exit the less is lost.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is a UGC-entitled online degree equal to a regular degree?",
        answer:
          "Yes. UGC has explicitly stated that online, distance and conventional degrees are treated as equivalent for employment and higher education.",
      },
      {
        question: "Does NAAC grade affect degree validity?",
        answer:
          "No. NAAC measures institutional quality and influences employer perception, but validity comes from UGC-DEB entitlement alone.",
      },
      {
        question: "How often should I re-check entitlement?",
        answer: "Once at admission and once at the start of every subsequent academic session.",
      },
    ],
  },

  {
    slug: "online-university-exam-pattern-proctoring",
    title: "Online University Exams: Pattern, Proctoring and Results",
    h1: "Online University Exam Pattern, Proctoring Rules and Results",
    metaTitle: "Online University Exam Pattern 2026 — Proctoring & Results | AVEDU",
    excerpt:
      "How proctored online exams are conducted in India, internal assessment weightage, what triggers a flag, result timelines and the re-attempt process.",
    metaDescription:
      "Online university exam pattern in India: proctored exam rules, internal assessment weightage, technical requirements, result timelines and re-attempt policy.",
    keywords: "online university exam pattern, proctored exam rules, online exam result",
    category: "exams",
    tags: ["Exams", "Proctoring", "Assessment"],
    authorSlug: "neha-singh",
    publishedAt: "2026-03-11",
    updatedAt: "2026-07-12",
    image: onlineLearning,
    university: "/universities/amity-online",
    course: "/courses/mba",
    comparison: "/compare/amity-vs-ignou",
    extraLinks: ["/tools/admission-calendar", "/courses/mca"],
    sections: [
      {
        id: "weightage",
        heading: "How marks are split",
        paragraphs: [
          "Nearly every online university in India uses a 30:70 split — 30% internal assessment across the term, 70% term-end examination. The internal component is the easier 30% to secure and the most commonly neglected.",
        ],
        table: {
          head: ["Component", "Weight", "Typical format"],
          rows: [
            ["Assignments", "15–20%", "2–3 written submissions per subject"],
            ["Quizzes / MCQs", "10–15%", "LMS-based, multiple attempts allowed"],
            ["Discussion participation", "0–5%", "Forum posts, at some universities"],
            ["Term-end exam", "70%", "Proctored, 2–3 hours"],
          ],
        },
      },
      {
        id: "proctoring",
        heading: "How proctoring works",
        bullets: [
          "AI proctoring records webcam, screen and audio; a human reviews only flagged segments.",
          "You choose a slot from an exam window, usually spread across 7–10 days.",
          "Identity is verified with a photo ID at the start of the session.",
          "A 360° room scan is required at some universities before the paper unlocks.",
        ],
      },
      {
        id: "flags",
        heading: "What actually triggers a flag",
        bullets: [
          "Leaving the camera frame for more than a few seconds.",
          "A second face or voice detected in the room.",
          "Switching browser tabs or opening another application.",
          "Extended downward gaze consistent with reading off-screen.",
          "Multiple disconnections in a short window.",
        ],
        note: "A flag is not an automatic failure. It routes the recording to human review, which usually clears benign cases.",
      },
      {
        id: "setup",
        heading: "Technical setup that avoids trouble",
        bullets: [
          "Wired or 5 GHz connection at 5+ Mbps upload.",
          "Charged laptop plus a mobile hotspot as backup.",
          "Plain wall behind you, door closed, phone out of frame.",
          "Run the university's system-check utility 24 hours before, not on the day.",
        ],
      },
      {
        id: "results",
        heading: "Results, re-attempts and backlogs",
        paragraphs: [
          "Results are typically published 3–6 weeks after the exam window closes. A failed paper becomes a backlog carried to the next term-end window; you continue to the next semester in the meantime at most universities.",
          "Re-attempts are charged per paper. There is normally a cap on total backlogs carried at once — check your programme handbook, as exceeding it can pause your progression.",
        ],
      },
    ],
    faqs: [
      {
        question: "Are online university exams open book?",
        answer:
          "Some universities run open-book term-end papers with application-style questions; most run closed-book proctored papers. Check your programme handbook.",
      },
      {
        question: "What happens if my internet drops during an online exam?",
        answer:
          "The platform normally saves progress and lets you rejoin within the session. Raise a ticket immediately with a screenshot; universities have a documented technical-failure remedy.",
      },
      {
        question: "How long do online exam results take?",
        answer: "Usually 3–6 weeks after the exam window closes.",
      },
    ],
  },

  {
    slug: "online-degree-document-checklist",
    title: "Online Degree Document Checklist (Downloadable)",
    h1: "Online Degree Admission Document Checklist",
    metaTitle: "Online Degree Document Checklist 2026 — Full List | AVEDU",
    excerpt:
      "Every document required for online degree admission in India, the correct scan format, and the six rejection reasons that delay enrolment by a week or more.",
    metaDescription:
      "Complete document checklist for online degree admission in India: marksheets, ID proof, photos, work experience and category certificates with format rules.",
    keywords: "online admission documents, document checklist online degree, admission documents india",
    category: "student-resources",
    tags: ["Documents", "Admission", "Checklist"],
    authorSlug: "priya-sharma",
    publishedAt: "2026-02-26",
    updatedAt: "2026-06-30",
    image: courseBcom,
    university: "/universities/jain-online",
    course: "/courses/bba",
    comparison: "/compare/jain-vs-ignou",
    extraLinks: ["/online-courses-admission-process", "/tools/eligibility-checker"],
    sections: [
      {
        id: "core",
        heading: "Core documents (everyone)",
        bullets: [
          "Class 10 marksheet and passing certificate.",
          "Class 12 marksheet and passing certificate.",
          "All graduation marksheets (for PG applicants).",
          "Degree or provisional certificate (for PG applicants).",
          "Government photo ID — Aadhaar, passport, voter ID or driving licence.",
          "Recent passport-size photograph on a white background.",
          "Signature scan on plain white paper.",
        ],
      },
      {
        id: "conditional",
        heading: "Conditional documents",
        table: {
          head: ["Situation", "Additional document"],
          rows: [
            ["Claiming category relaxation", "Caste / category certificate"],
            ["Claiming a work-experience waiver", "Employer letter on letterhead with dates"],
            ["Defence category waiver", "Service record or dependant card"],
            ["Government employee waiver", "Employee ID and department letter"],
            ["Foreign qualification", "Equivalence certificate from AIU"],
            ["Name mismatch across documents", "Gazette notification or affidavit"],
          ],
        },
      },
      {
        id: "format",
        heading: "Format rules that prevent rejection",
        bullets: [
          "Colour scans at 200–300 DPI — greyscale is the top rejection cause.",
          "PDF for multi-page documents, JPG for photo and signature.",
          "Each file under 2 MB unless the portal states otherwise.",
          "File names without spaces or special characters.",
          "All four corners of the document visible; no cropped edges.",
        ],
      },
      {
        id: "rejections",
        heading: "Six reasons documents get rejected",
        bullets: [
          "Photo of a document taken on a phone at an angle instead of a flat scan.",
          "Marksheet uploaded without the reverse side carrying the grading key.",
          "Provisional certificate uploaded without supporting marksheets.",
          "Signature scanned from a scrap of paper with visible lines.",
          "Work experience letter without a date range or authorised signatory.",
          "Aadhaar with a masked number where the portal requires the full one.",
        ],
      },
      {
        id: "next",
        heading: "After documents are verified",
        paragraphs: [
          "Once verification clears, apply your scholarship code, then generate the fee challan. Reversing that order is the most common reason a waiver is lost. Run the eligibility checker first if you are unsure which universities you qualify for.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do I need original documents for online admission?",
        answer:
          "Only scans at the application stage. Originals may be requested at convocation or for verification if a discrepancy is flagged.",
      },
      {
        question: "Can I apply without a degree certificate?",
        answer:
          "Yes, a provisional certificate with all-year marksheets is accepted at most universities for provisional admission.",
      },
      {
        question: "Is an Aadhaar card mandatory?",
        answer:
          "Any government photo ID is accepted. Aadhaar is the fastest to verify but a passport, voter ID or driving licence works.",
      },
    ],
  },

  {
    slug: "ugc-deb-2026-notifications-what-changed",
    title: "UGC & DEB Updates 2026: What Changed for Online Learners",
    h1: "UGC and DEB Updates 2026 — What Changed for Online Learners",
    metaTitle: "UGC DEB Updates 2026 — Online Education Rule Changes | AVEDU",
    excerpt:
      "A dated summary of the regulator changes that affect online learners this cycle: entitlement renewals, programme approvals, exam norms and fee transparency requirements.",
    metaDescription:
      "UGC and DEB updates for 2026 affecting online degree students in India: entitlement renewals, new programme approvals, exam norms and fee disclosure rules.",
    keywords: "ugc news 2026, deb notification 2026, online education rules india",
    category: "education-news",
    tags: ["UGC", "Policy", "News"],
    authorSlug: "neha-singh",
    reviewedBy: "Dr. Rajesh Kumar",
    publishedAt: "2026-04-04",
    updatedAt: "2026-08-03",
    image: heroEducation,
    university: "/universities/du-sol-online",
    course: "/courses/ma",
    comparison: "/compare/ignou-vs-uttaranchal",
    extraLinks: ["/universities", "/tools/admission-calendar"],
    sections: [
      {
        id: "entitlement",
        heading: "Entitlement lists are now session-tagged more strictly",
        paragraphs: [
          "The DEB portal now surfaces entitlement by academic session rather than by calendar year, which makes it materially easier to confirm whether a specific programme is covered for a January or July intake. Applicants should verify against the session they are actually joining, not the current listing default.",
        ],
      },
      {
        id: "programmes",
        heading: "Programme approvals",
        paragraphs: [
          "Approvals continue to expand in management, computer applications and commerce, while several technical and practical-heavy programmes remain outside online mode. If a university markets an online programme in a laboratory-dependent discipline, check the entitlement list before believing it.",
        ],
      },
      {
        id: "fees",
        heading: "Fee transparency",
        bullets: [
          "Universities are expected to publish the complete fee structure, including examination and re-attempt charges, on a public page.",
          "Refund timelines on cancellation before session start must be stated up front.",
          "Third-party agents cannot collect fees into non-university accounts.",
        ],
      },
      {
        id: "exams",
        heading: "Examination norms",
        paragraphs: [
          "Proctored term-end examinations remain mandatory for online programmes, with universities required to document a technical-failure remedy for candidates who lose connectivity mid-paper. Keep screenshots and ticket numbers if this happens to you — the remedy is only enforceable with evidence.",
        ],
      },
      {
        id: "what-to-do",
        heading: "What learners should do this cycle",
        bullets: [
          "Re-verify entitlement for your session before paying any fee.",
          "Download and save the published fee structure page as a PDF at admission.",
          "Track scholarship deadlines separately from admission deadlines.",
          "Keep every payment receipt tied to a university-issued reference number.",
        ],
        note: "Always confirm details against the official UGC and DEB notifications; this summary is a starting point, not a substitute for the source document.",
      },
    ],
    faqs: [
      {
        question: "Where can I check official UGC updates for online degrees?",
        answer:
          "The UGC website and the DEB portal publish notifications and the session-wise entitlement list. Always verify against the source rather than a university's marketing page.",
      },
      {
        question: "Have online degree rules changed for government jobs?",
        answer:
          "No. UGC-entitled online degrees remain equivalent to regular degrees for public employment and higher study.",
      },
    ],
  },

  {
    slug: "best-online-universities-for-working-professionals",
    title: "Best Online Universities for Working Professionals in 2026",
    h1: "Best Online Universities in India for Working Professionals",
    metaTitle: "Best Online Universities for Working Professionals 2026 | AVEDU",
    excerpt:
      "Ranked on the four variables that matter when you have a full-time job: exam slot flexibility, recorded-session quality, evaluation turnaround and employer recognition.",
    metaDescription:
      "The best online universities in India for working professionals in 2026, compared on exam flexibility, LMS quality, support turnaround and employer recognition.",
    keywords: "best online university for working professionals, online mba working professionals",
    category: "university-guide",
    tags: ["Working Professionals", "University Comparison", "Online MBA"],
    authorSlug: "priya-sharma",
    reviewedBy: "Amit Verma",
    publishedAt: "2026-03-22",
    updatedAt: "2026-07-26",
    image: mujCampus,
    university: "/universities/manipal-online",
    course: "/courses/mba",
    comparison: "/compare/manipal-vs-uttaranchal",
    extraLinks: ["/tools/university-finder", "/universities", "/comparison"],
    sections: [
      {
        id: "criteria",
        heading: "The four criteria that matter",
        paragraphs: [
          "Rankings built on brand alone mislead working professionals. When you are studying at 10 pm after a full day, what determines whether you finish is scheduling flexibility and support responsiveness — not the NAAC grade.",
        ],
        bullets: [
          "Exam slot flexibility — how wide the term-end window is and whether weekend slots exist.",
          "Recorded sessions — availability, retention period and playback speed control.",
          "Evaluation turnaround — how fast assignments and results are returned.",
          "Employer recognition — recall with corporate HR in your sector.",
        ],
      },
      {
        id: "shortlist",
        heading: "The shortlist",
        table: {
          head: ["University", "Exam flexibility", "Best suited to"],
          rows: [
            ["Manipal University Jaipur", "Wide window, weekend slots", "Corporate professionals seeking brand recall"],
            ["Amity University Online", "Wide window", "Niche specialisations at a lower fee"],
            ["LPU Online", "Moderate", "Balanced fee and support"],
            ["Jain University Online", "Moderate", "Bengaluru-centric hiring networks"],
            ["Uttaranchal University", "Moderate", "Budget-conscious professionals"],
            ["IGNOU", "Fixed term-end schedule", "Lowest total cost"],
          ],
        },
      },
      {
        id: "time",
        heading: "Time budgeting that survives a real job",
        bullets: [
          "Block two fixed weekday evenings and one weekend morning — consistency beats volume.",
          "Watch recorded lectures at 1.5× and take notes only on frameworks, not narration.",
          "Submit assignments in week two of the term window, never the last week.",
          "Reserve the fortnight before term-end exams; decline optional work travel in it.",
        ],
      },
      {
        id: "employer",
        heading: "Getting employer support",
        paragraphs: [
          "Around a third of Indian employers reimburse part of an online degree's fee under a learning and development policy, and many more will approve exam-day flexibility if asked in writing. Both are far easier to secure at enrolment than mid-programme.",
        ],
      },
      {
        id: "next",
        heading: "Narrow it down",
        paragraphs: [
          "Run the university finder with your budget, state and course, then compare the top two side by side before you apply. The differences that matter show up in the comparison table, not the brochure.",
        ],
      },
    ],
    faqs: [
      {
        question: "Which online university is best for working professionals?",
        answer:
          "Manipal University Jaipur and Amity University Online lead on exam flexibility and recorded-session quality; IGNOU leads on cost.",
      },
      {
        question: "Can I study an online degree with a full-time job?",
        answer:
          "Yes — that is the primary use case. Budget 8–10 hours a week and protect the fortnight before term-end exams.",
      },
      {
        question: "Will my employer pay for my online degree?",
        answer:
          "Many Indian employers reimburse part of the fee under L&D policies. Ask before enrolling and get the approval in writing.",
      },
    ],
  },

  {
    slug: "career-after-online-bca",
    title: "Career After Online BCA: Roles, Skills and Salary",
    h1: "Career After an Online BCA — Roles, Skills and Salary Path",
    metaTitle: "Career After Online BCA 2026 — Jobs, Skills & Salary | AVEDU",
    excerpt:
      "An online BCA opens the door; the skill stack decides how far you walk through it. Roles, the exact tools employers screen for, and the salary curve over five years.",
    metaDescription:
      "Career options after an online BCA in India: job roles, required skills, salary bands, higher study routes and how to build a hireable portfolio.",
    keywords: "career after bca, online bca jobs, bca salary india",
    category: "career-guide",
    tags: ["Online BCA", "Tech Career", "Salary"],
    authorSlug: "amit-verma",
    publishedAt: "2026-04-15",
    updatedAt: "2026-07-20",
    image: courseBca,
    university: "/universities/vgu-online",
    course: "/courses/bca",
    comparison: "/compare/manipal-vs-vgu",
    extraLinks: ["/courses/mca", "/tools/course-finder"],
    sections: [
      {
        id: "reality",
        heading: "What a BCA gets you and what it does not",
        paragraphs: [
          "A BCA clears the degree filter for entry-level IT roles. It does not, on its own, demonstrate that you can build software. Employers hiring BCA graduates screen on a portfolio and a live coding round; the degree only determines whether you are invited to it.",
          "Treat the three years as a container for building four to six deployed projects. Graduates who do this convert interviews at roughly three times the rate of those who do not.",
        ],
      },
      {
        id: "roles",
        heading: "Roles you can target",
        table: {
          head: ["Role", "Entry pay", "Skills employers screen for"],
          rows: [
            ["Frontend Developer", "₹3–5.5 LPA", "HTML, CSS, JavaScript, React"],
            ["Backend Developer", "₹3.5–6 LPA", "Node/Java/Python, SQL, REST APIs"],
            ["QA / Test Engineer", "₹3–5 LPA", "Manual testing, Selenium, JIRA"],
            ["Support / Systems Engineer", "₹2.8–4.5 LPA", "OS, networking, ticketing tools"],
            ["Data Analyst (junior)", "₹3.5–6 LPA", "SQL, Excel, Power BI"],
            ["Cloud Associate", "₹4–7 LPA", "AWS or Azure fundamentals"],
          ],
        },
      },
      {
        id: "stack",
        heading: "A year-by-year skill plan",
        bullets: [
          "Year 1 — programming fundamentals in one language, Git, and two small deployed projects.",
          "Year 2 — SQL to a genuinely competent level, plus a framework (React or Spring) and one team project.",
          "Year 3 — a cloud certification, a capstone that solves a real problem, and interview practice on DSA.",
        ],
      },
      {
        id: "higher-study",
        heading: "Higher study after BCA",
        paragraphs: [
          "An online MCA is the natural continuation and the standard route to senior technical roles or a government IT post. An MBA suits BCA graduates who intend to move into product, program or pre-sales work rather than deeper engineering.",
        ],
      },
      {
        id: "portfolio",
        heading: "Building a portfolio that survives screening",
        bullets: [
          "Deploy everything — a GitHub repository with no live URL is discounted heavily.",
          "Write a two-paragraph README stating the problem, the stack and the trade-offs.",
          "One substantial project beats five tutorial clones.",
          "Contribute a documented fix to one open-source project.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is an online BCA good enough for IT jobs?",
        answer:
          "Yes, when UGC-entitled. IT employers hire on demonstrated skill; the degree clears the eligibility filter for entry-level roles.",
      },
      {
        question: "What is the starting salary after an online BCA?",
        answer:
          "₹2.8–6 LPA depending on role and skill stack, with development and analytics roles at the upper end.",
      },
      {
        question: "Should I do MCA or MBA after BCA?",
        answer:
          "MCA for deeper technical roles and government IT posts; MBA if you want to move into product, program or business-facing work.",
      },
    ],
  },

  {
    slug: "online-ma-and-mcom-guide",
    title: "Online MA and MCom: Programme Guide and Career Value",
    h1: "Online MA and MCom — Programme Guide, Specialisations and Careers",
    metaTitle: "Online MA & MCom 2026 — Syllabus, Careers & Eligibility | AVEDU",
    excerpt:
      "Two underrated postgraduate routes: who each suits, the specialisations that hire, teaching and civil-services value, and how they compare with an MBA.",
    metaDescription:
      "Online MA and MCom programme guide 2026: specialisations, eligibility, syllabus, careers in teaching, government and finance, and comparison with an MBA.",
    keywords: "online ma, online mcom, ma vs mba, mcom career",
    category: "course-guide",
    tags: ["Online MA", "Online MCom", "Postgraduate", "Teaching"],
    authorSlug: "rajesh-kumar",
    publishedAt: "2026-05-06",
    updatedAt: "2026-07-15",
    image: courseBa,
    university: "/universities/du-sol-online",
    course: "/courses/ma",
    comparison: "/compare/ignou-vs-vgu",
    extraLinks: ["/courses/mcom", "/courses/ba", "/universities/ignou-online"],
    sections: [
      {
        id: "who",
        heading: "Who these programmes are for",
        paragraphs: [
          "An online MA suits candidates heading into teaching, content, policy, social work, psychology-adjacent roles or the civil services. An online MCom suits accountants, banking staff and finance executives who need a postgraduate credential without leaving work.",
          "Both are two-year, four-semester UGC-entitled postgraduate degrees and both qualify you for UGC-NET, PhD admission and government pay-scale weightage.",
        ],
      },
      {
        id: "ma-specialisations",
        heading: "MA specialisations that hire",
        bullets: [
          "English — teaching, content, editorial, communications.",
          "Economics — policy research, banking, analytics-adjacent roles.",
          "Public Administration — civil services preparation, PSU roles.",
          "Sociology — development sector, NGO programme roles.",
          "Political Science — journalism, policy, competitive exams.",
          "Psychology — counselling support roles (clinical practice needs further licensing).",
        ],
      },
      {
        id: "mcom-specialisations",
        heading: "MCom specialisations that hire",
        bullets: [
          "Accounting & Finance — the default; broadest employer acceptance.",
          "Taxation — direct route into tax practice and compliance roles.",
          "Banking & Insurance — aligned with BFSI recruitment.",
          "Business Analytics — the highest-growth MCom variant.",
        ],
      },
      {
        id: "careers",
        heading: "Career and salary outlook",
        table: {
          head: ["Path", "Typical entry pay", "Notes"],
          rows: [
            ["Assistant Professor (post-NET)", "₹5–8 LPA", "NET or PhD required"],
            ["School / college teaching", "₹3–6 LPA", "B.Ed needed for school roles"],
            ["Content & editorial", "₹3.5–7 LPA", "Strongest for MA English"],
            ["Banking officer", "₹4–7 LPA", "MCom preferred, exam-driven"],
            ["Tax / audit associate", "₹3.5–6.5 LPA", "MCom Taxation"],
            ["Policy / development sector", "₹4–8 LPA", "MA Economics, Public Admin"],
          ],
        },
      },
      {
        id: "vs-mba",
        heading: "MA/MCom vs MBA",
        paragraphs: [
          "An MBA is broader and more corporate; MA and MCom are deeper and more academic. If your target role sits inside a corporate management hierarchy, the MBA usually converts better. If it sits in teaching, research, government or specialist finance, MA or MCom is the more direct — and cheaper — route.",
        ],
      },
      {
        id: "where",
        heading: "Where to study",
        paragraphs: [
          "IGNOU and DU SOL dominate on cost and acceptance for MA and MCom; private universities compete on LMS quality and faster evaluation. Compare your shortlist before applying.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is an online MA valid for UGC-NET?",
        answer:
          "Yes. A UGC-entitled online MA makes you eligible for UGC-NET and for PhD admission.",
      },
      {
        question: "Which is better, MCom or MBA in finance?",
        answer:
          "MCom for depth in accounting, taxation and audit; MBA Finance for corporate finance and management-track roles.",
      },
      {
        question: "Can I become a teacher with an online MA?",
        answer:
          "Yes. School teaching also requires a B.Ed, and college lectureship requires UGC-NET or a PhD.",
      },
    ],
  },

  {
    slug: "online-mba-eligibility-criteria-explained",
    title: "Online MBA Eligibility Criteria Explained (2026)",
    h1: "Online MBA Eligibility Criteria in India — Fully Explained",
    metaTitle: "Online MBA Eligibility 2026 — Marks, Degree & Experience | AVEDU",
    excerpt:
      "The exact eligibility rules for an online MBA: minimum marks, accepted degrees, backlogs, work-experience requirements and the relaxations most applicants miss.",
    metaDescription:
      "Online MBA eligibility criteria in India 2026: minimum graduation percentage, accepted degrees, backlog rules, work experience and category relaxations.",
    keywords: "online mba eligibility, mba eligibility criteria, mba minimum percentage",
    category: "admission-guide",
    tags: ["Eligibility", "Online MBA", "Admission"],
    authorSlug: "priya-sharma",
    publishedAt: "2026-05-19",
    updatedAt: "2026-07-31",
    image: courseMba,
    university: "/universities/uttaranchal-online",
    course: "/courses/mba",
    comparison: "/compare/lpu-vs-uttaranchal",
    extraLinks: ["/online-mba-eligibility", "/tools/eligibility-checker", "/online-mba-admission"],
    sections: [
      {
        id: "baseline",
        heading: "The baseline rule",
        paragraphs: [
          "A bachelor's degree of at least three years in any discipline from a UGC-recognised university, with a minimum aggregate of 50% (typically 45% for SC/ST/OBC categories). That is the whole eligibility bar at most UGC-entitled online universities.",
          "There is no entrance exam, no age limit and no mandatory work experience for the standard online MBA.",
        ],
      },
      {
        id: "table",
        heading: "Eligibility at a glance",
        table: {
          head: ["Criterion", "Requirement", "Common relaxation"],
          rows: [
            ["Qualifying degree", "3-year bachelor's, any stream", "—"],
            ["Minimum marks", "50% aggregate", "45% for reserved categories"],
            ["Entrance exam", "Not required", "—"],
            ["Work experience", "Not required", "Waives marks shortfall at some universities"],
            ["Age limit", "None", "—"],
            ["Backlogs", "Must be cleared", "Provisional admission pending final result"],
          ],
        },
      },
      {
        id: "edge-cases",
        heading: "Edge cases that trip applicants up",
        bullets: [
          "CGPA instead of percentage — use the university's stated conversion factor, not a generic ×9.5.",
          "Degrees from state open universities — valid if UGC-recognised; carry the recognition proof.",
          "Foreign degrees — need an AIU equivalence certificate.",
          "Three-year diploma plus lateral entry degree — accepted if the final degree is UGC-recognised.",
          "Final-year students — provisional admission at most universities, confirmed once the result is uploaded.",
        ],
      },
      {
        id: "shortfall",
        heading: "If you are below 50%",
        paragraphs: [
          "Several universities accept documented work experience in place of a marks shortfall, typically two or more years in a relevant role. Others admit into a bridge or foundation pathway. Neither is universal — check the specific prospectus rather than assuming.",
          "Run the eligibility checker with your actual marks and experience to see which universities currently clear you.",
        ],
      },
      {
        id: "specialisation-rules",
        heading: "Specialisation-specific requirements",
        bullets: [
          "MBA Business Analytics — mathematics at 10+2 preferred at some universities.",
          "MBA Healthcare Management — a healthcare background preferred, rarely mandatory.",
          "MBA IT / Systems — a technical degree preferred, not required.",
          "Dual specialisation — usually requires no additional eligibility, only a higher fee.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the minimum percentage for an online MBA?",
        answer:
          "50% aggregate in graduation at most universities, with 45% for reserved categories. Some accept work experience against a shortfall.",
      },
      {
        question: "Can I do an online MBA without work experience?",
        answer: "Yes. Work experience is optional for standard online MBA programmes in India.",
      },
      {
        question: "Is there an age limit for an online MBA?",
        answer: "No. UGC-entitled online MBA programmes have no upper age limit.",
      },
    ],
  },

  {
    slug: "online-degree-vs-distance-education",
    title: "Online Degree vs Distance Education: What Is the Difference?",
    h1: "Online Degree vs Distance Education — The Real Difference",
    metaTitle: "Online Degree vs Distance Education 2026 — Compared | AVEDU",
    excerpt:
      "Both are UGC-recognised and both are valid. The differences that matter are delivery, exam mode, support and pace — and they change who each mode suits.",
    metaDescription:
      "Online degree vs distance education in India: delivery mode, exams, fees, validity, support and which mode suits working professionals better.",
    keywords: "online vs distance education, distance degree validity, online degree difference",
    category: "university-guide",
    tags: ["Distance Learning", "Online Degree", "UGC"],
    authorSlug: "rajesh-kumar",
    publishedAt: "2026-06-02",
    updatedAt: "2026-07-24",
    image: onlineLearning,
    university: "/universities/ignou-online",
    course: "/courses/bcom",
    comparison: "/compare/ignou-vs-smu",
    extraLinks: ["/universities", "/universities/du-sol-online"],
    sections: [
      {
        id: "definition",
        heading: "The regulatory distinction",
        paragraphs: [
          "Both modes fall under the UGC Open and Distance Learning and Online Programmes Regulations. 'Distance' means printed or downloadable self-learning material with periodic contact classes and, usually, a physical term-end examination at a study centre. 'Online' means the entire programme — content, interaction, assessment and examination — runs through a learning platform.",
          "Degrees from either mode are equivalent to on-campus degrees for employment and higher study, provided the programme is entitled for your session.",
        ],
      },
      {
        id: "compare",
        heading: "Side by side",
        table: {
          head: ["Parameter", "Online", "Distance"],
          rows: [
            ["Content delivery", "LMS, live and recorded sessions", "Printed/PDF self-learning material"],
            ["Faculty interaction", "Live classes, forums", "Optional contact classes"],
            ["Examination", "Proctored, from home", "Usually at a study centre"],
            ["Fee range", "₹40,000–₹90,000 / year", "₹8,000–₹35,000 / year"],
            ["Support turnaround", "Faster, ticket-based", "Slower, centre-dependent"],
            ["Best for", "Working professionals needing flexibility", "Cost-first learners"],
          ],
        },
      },
      {
        id: "choose",
        heading: "Which should you choose?",
        bullets: [
          "Choose online if you travel, work shifts, or cannot reach a study centre for exams.",
          "Choose distance if total cost is the binding constraint and you can attend a centre.",
          "Choose online if you want structured live teaching rather than self-study from a booklet.",
          "Either way, verify entitlement for your programme and session before paying.",
        ],
      },
      {
        id: "validity",
        heading: "Validity for jobs and higher study",
        paragraphs: [
          "Both are accepted for central and state government employment, PSU recruitment, UGC-NET, PhD admission and overseas study, subject to entitlement. Employers do not maintain separate eligibility bands for online versus distance degrees.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is an online degree better than a distance degree?",
        answer:
          "Neither is inherently better. Online offers more structure and flexibility at a higher fee; distance is cheaper but more self-directed.",
      },
      {
        question: "Are distance degrees valid for government jobs?",
        answer:
          "Yes, when the programme holds UGC-DEB recognition for your admission session.",
      },
      {
        question: "Which is cheaper?",
        answer: "Distance education, often by a factor of three to five compared with private online universities.",
      },
    ],
  },

  {
    slug: "scholarships-for-online-degrees-india",
    title: "Scholarships for Online Degrees in India: Who Actually Qualifies",
    h1: "Scholarships and Fee Waivers for Online Degrees in India",
    metaTitle: "Online Degree Scholarships India 2026 — Waivers & Eligibility | AVEDU",
    excerpt:
      "The five waiver categories every online university runs, how much each is worth, whether they stack, and the deadline that catches out most applicants.",
    metaDescription:
      "Scholarships and fee waivers for online degrees in India 2026: merit, defence, government employee, alumni and single-payment discounts with eligibility rules.",
    keywords: "online degree scholarship, mba fee waiver, defence scholarship online mba",
    category: "fees",
    tags: ["Scholarships", "Fees", "Waivers"],
    authorSlug: "neha-singh",
    reviewedBy: "Priya Sharma",
    publishedAt: "2026-06-16",
    updatedAt: "2026-08-04",
    image: programBenefits,
    university: "/universities/amity-online",
    course: "/courses/mba",
    comparison: "/compare/amity-vs-jain",
    extraLinks: ["/scholarships", "/tools/fee-calculator"],
    sections: [
      {
        id: "categories",
        heading: "The five waiver categories",
        table: {
          head: ["Category", "Typical waiver", "Proof required"],
          rows: [
            ["Merit (graduation %)", "10–25%", "Final-year marksheet"],
            ["Defence personnel & dependants", "20–30%", "Service record / dependant card"],
            ["Government employees", "10–20%", "Employee ID and department letter"],
            ["Alumni / sibling", "5–15%", "Previous enrolment number"],
            ["Single full payment", "5–10%", "None — applied at checkout"],
          ],
        },
        note: "Waiver percentages apply to tuition only, never to examination or convocation charges.",
      },
      {
        id: "stacking",
        heading: "Do waivers stack?",
        paragraphs: [
          "Almost never. Most universities apply the single highest waiver you qualify for, with the single-payment discount occasionally allowed on top. Ask for the stacking rule in writing before you choose which code to apply — the difference can be ₹20,000 or more.",
        ],
      },
      {
        id: "deadline",
        heading: "The deadline that catches people out",
        paragraphs: [
          "The scholarship last date is separate from — and usually two to three weeks earlier than — the admission last date. Applicants who meet the admission deadline routinely lose the waiver. Track both dates on the admission calendar and set the reminder against the earlier one.",
        ],
      },
      {
        id: "external",
        heading: "External and government schemes",
        bullets: [
          "National Scholarship Portal schemes — applicable to some distance and online programmes; check the scheme's mode clause.",
          "State government minority and category scholarships — vary by state, often accept online enrolment.",
          "Employer L&D reimbursement — the largest single source of funding, and the most underused.",
          "Education loans — available for UGC-entitled online degrees at most banks, though at lower ticket sizes.",
        ],
      },
      {
        id: "sequence",
        heading: "Apply in the right order",
        bullets: [
          "1. Complete document verification.",
          "2. Ask admissions in writing which waivers you qualify for and whether they stack.",
          "3. Apply the chosen code.",
          "4. Confirm the discounted amount on the challan.",
          "5. Only then pay.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I get a scholarship for an online MBA?",
        answer:
          "Yes. Merit, defence, government-employee, alumni and single-payment waivers are offered at most private online universities, typically 5–30% of tuition.",
      },
      {
        question: "Can I apply a scholarship after paying the fee?",
        answer:
          "Usually not. Waiver codes must be applied before the fee challan is generated.",
      },
      {
        question: "Is an education loan available for an online degree?",
        answer:
          "Yes, most banks lend against UGC-entitled online programmes, though sanctioned amounts are lower than for residential courses.",
      },
    ],
  },

  {
    slug: "how-to-choose-an-online-university",
    title: "How to Choose an Online University: A 7-Filter Framework",
    h1: "How to Choose an Online University — A 7-Filter Framework",
    metaTitle: "How to Choose an Online University in India 2026 | AVEDU",
    excerpt:
      "Seven filters applied in order, from entitlement to exit support. Run them in sequence and a list of twenty universities collapses to two in under an hour.",
    metaDescription:
      "A practical 7-filter framework for choosing an online university in India: entitlement, programme fit, exam mode, cost, support, placements and exit outcomes.",
    keywords: "how to choose online university, best online university india, online university checklist",
    category: "student-resources",
    tags: ["Decision Guide", "University Comparison", "Checklist"],
    authorSlug: "rajesh-kumar",
    reviewedBy: "Priya Sharma",
    publishedAt: "2026-06-28",
    updatedAt: "2026-08-01",
    image: uniCompare,
    university: "/universities/jain-online",
    course: "/courses/mba",
    comparison: "/compare/jain-vs-smu",
    extraLinks: ["/tools/university-finder", "/comparison", "/universities"],
    sections: [
      {
        id: "order",
        heading: "Why order matters",
        paragraphs: [
          "Most applicants start with fee and end with entitlement. Reverse that. Filters one and two are binary — a university either passes or is eliminated — and applying them first removes most of the list before you spend time on judgement calls.",
        ],
      },
      {
        id: "filters",
        heading: "The seven filters",
        bullets: [
          "1. Entitlement — is your exact programme UGC-DEB entitled for your session? Binary.",
          "2. Programme fit — does the specialisation you want actually exist, with real electives? Binary.",
          "3. Exam mode — can you sit the term-end exam from home, in a slot that fits your job?",
          "4. Total cost — tuition plus exam fees plus one re-attempt buffer, not the headline number.",
          "5. Support responsiveness — email admissions a specific question and time the reply.",
          "6. Placement infrastructure — is there a named cell with a hiring-partner list, or only a portal?",
          "7. Exit outcomes — degree dispatch timeline, transcript process and WES readiness if you may work abroad.",
        ],
      },
      {
        id: "test",
        heading: "The support test that predicts everything",
        paragraphs: [
          "Before applying, send each shortlisted university one specific, slightly awkward question — for example, the exact re-attempt fee per paper. The speed and precision of the answer is the single best available proxy for how you will be treated for the next two years.",
        ],
      },
      {
        id: "shortlist",
        heading: "From seven filters to two universities",
        paragraphs: [
          "Filters one and two typically cut a twenty-university list to six. Filters three and four cut it to three. Filters five to seven decide between the last two. Use the university finder to run the first four filters automatically, then compare the finalists side by side.",
        ],
      },
      {
        id: "ignore",
        heading: "What to ignore",
        bullets: [
          "Unverifiable 'highest package' claims.",
          "Rankings published by the university itself.",
          "Free laptop or tablet offers — they are priced into the fee.",
          "Counsellor urgency about seats 'closing today' in an online programme with no seat cap.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the most important factor when choosing an online university?",
        answer:
          "UGC-DEB entitlement for your exact programme and admission session. Everything else is a preference; this one determines whether the degree is valid.",
      },
      {
        question: "How many universities should I shortlist?",
        answer:
          "Two or three. More than that produces decision paralysis without improving the outcome.",
      },
      {
        question: "Do online universities have seat limits?",
        answer:
          "Rarely. Urgency about 'seats closing' in an online programme is usually a sales tactic; the real deadline is the session cut-off.",
      },
    ],
  },

  {
    slug: "lpu-vs-jain-online-comparison",
    title: "LPU vs Jain University Online: A Direct Comparison",
    h1: "LPU Online vs Jain University Online — Direct Comparison 2026",
    metaTitle: "LPU vs Jain Online 2026 — Fees, Placements & Programmes | AVEDU",
    excerpt:
      "Two strong mid-tier options with very different centres of gravity — north Indian scale versus Bengaluru's hiring ecosystem. Compared on fee, programmes and outcomes.",
    metaDescription:
      "LPU Online vs Jain University Online 2026: fees, NAAC grade, programme range, exam mode, placement support and which university suits which student.",
    keywords: "lpu vs jain online, jain online mba, lpu online mba",
    category: "comparisons",
    tags: ["LPU", "Jain University", "University Comparison"],
    authorSlug: "priya-sharma",
    publishedAt: "2026-07-08",
    updatedAt: "2026-08-02",
    image: uniCompare,
    university: "/universities/lpu-online",
    course: "/courses/mba",
    comparison: "/compare/lpu-vs-jain",
    extraLinks: ["/universities/jain-online", "/comparison", "/tools/fee-calculator"],
    sections: [
      {
        id: "snapshot",
        heading: "Snapshot",
        table: {
          head: ["Parameter", "LPU Online", "Jain University Online"],
          rows: [
            ["Location", "Phagwara, Punjab", "Bengaluru, Karnataka"],
            ["NAAC", "A++", "A++"],
            ["Online MBA fee / year", "₹55,000", "₹60,000"],
            ["Programme range", "Broad UG and PG", "Strong PG, focused UG"],
            ["Exam mode", "Online proctored", "Online proctored"],
            ["Hiring ecosystem", "North India, pan-India campus brand", "Bengaluru tech and startups"],
          ],
        },
      },
      {
        id: "geography",
        heading: "Geography is the real differentiator",
        paragraphs: [
          "LPU's advantage is scale and pan-India recall built on a very large residential campus. Jain's advantage is location — its alumni and recruiter density in Bengaluru is materially higher, which matters if you are in or targeting the tech and startup ecosystem there.",
        ],
      },
      {
        id: "cost",
        heading: "Cost",
        paragraphs: [
          "LPU is marginally cheaper at roughly ₹10,000 less across a two-year MBA. Both offer no-cost EMI and merit waivers, so the effective difference after waivers is often negligible. Model both with your actual waiver eligibility before deciding.",
        ],
      },
      {
        id: "programmes",
        heading: "Programme range",
        bullets: [
          "LPU — wider undergraduate catalogue; good if you are choosing a BBA, BCA or BCom.",
          "Jain — stronger postgraduate depth, especially in management and commerce.",
          "Both are UGC-entitled and NAAC A++ accredited.",
        ],
      },
      {
        id: "verdict",
        heading: "Verdict",
        bullets: [
          "Choose LPU for undergraduate programmes and north-Indian employer recall.",
          "Choose Jain if you work in or are targeting Bengaluru.",
          "On degree validity there is nothing to separate them.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is LPU or Jain better for an online MBA?",
        answer:
          "Both hold NAAC A++ and UGC entitlement. LPU suits north-India employer recall and undergraduate programmes; Jain suits Bengaluru-focused careers.",
      },
      {
        question: "Which is cheaper, LPU or Jain online?",
        answer: "LPU, by roughly ₹10,000 across a two-year online MBA before waivers.",
      },
    ],
  },

  {
    slug: "study-plan-for-working-professionals",
    title: "A Realistic Study Plan for Working Professionals",
    h1: "A Realistic Weekly Study Plan for Working Professionals",
    metaTitle: "Online Degree Study Plan for Working Professionals | AVEDU",
    excerpt:
      "A ten-hour weekly template that survives a full-time job, plus the term-level rhythm that keeps assignments off your critical path and exams stress-free.",
    metaDescription:
      "A realistic weekly study plan for working professionals doing an online degree in India: time blocks, term rhythm, assignment strategy and exam preparation.",
    keywords: "study plan online mba, time management online degree, working professional study",
    category: "student-resources",
    tags: ["Study Plan", "Working Professionals", "Productivity"],
    authorSlug: "priya-sharma",
    publishedAt: "2026-07-16",
    updatedAt: "2026-07-29",
    image: onlineLearning,
    university: "/universities/uttaranchal-online",
    course: "/courses/bba",
    comparison: "/compare/uttaranchal-vs-vgu",
    extraLinks: ["/tools/admission-calendar", "/courses/mba"],
    sections: [
      {
        id: "budget",
        heading: "The ten-hour week",
        table: {
          head: ["Slot", "Duration", "Activity"],
          rows: [
            ["Tue 9–11 pm", "2 h", "Recorded lectures at 1.5×, framework notes only"],
            ["Thu 9–11 pm", "2 h", "Recorded lectures + LMS quizzes"],
            ["Sat 8–11 am", "3 h", "Assignment drafting, deep work"],
            ["Sun 8–10 am", "2 h", "Revision, forum posts, next-week planning"],
            ["Flex", "1 h", "Buffer for the week that goes wrong"],
          ],
        },
        note: "Two fixed weekday evenings plus one weekend morning beats an unplanned twenty-hour weekend every time.",
      },
      {
        id: "term",
        heading: "Term-level rhythm",
        bullets: [
          "Weeks 1–2 — read the full syllabus and note every deadline in one calendar.",
          "Weeks 3–6 — lecture consumption; submit assignment one early.",
          "Weeks 7–10 — assignments two and three; keep quizzes current.",
          "Weeks 11–12 — revision only; nothing new introduced.",
          "Exam fortnight — past papers, no work travel, exam slot booked on day one of the window.",
        ],
      },
      {
        id: "assignments",
        heading: "Assignment strategy",
        paragraphs: [
          "Assignments are the cheapest marks in the programme and the most commonly lost. Submit in week two of the window rather than the last day: portals slow down at the deadline, and late submissions attract a penalty that no amount of exam performance recovers.",
          "Wherever the brief allows, base the assignment on your own workplace. It halves research time and produces a better answer.",
        ],
      },
      {
        id: "exam-prep",
        heading: "Exam preparation that fits a job",
        bullets: [
          "Two past papers per subject beats re-reading the module.",
          "Book the earliest exam slot in the window — it leaves room for a technical-failure re-book.",
          "Run the system check 24 hours before, not on exam day.",
          "Sleep is a study technique; a 2 am cram before a proctored paper costs more than it adds.",
        ],
      },
      {
        id: "sustain",
        heading: "Staying enrolled",
        paragraphs: [
          "The dropout risk in online programmes peaks in semester two, when novelty fades and work pressure returns. The countermeasures are unglamorous: a fixed schedule, one study partner from your cohort, and a visible countdown to graduation.",
        ],
      },
    ],
    faqs: [
      {
        question: "How many hours a week does an online degree need?",
        answer:
          "Around 8–10 hours during a normal term and 15+ in the fortnight before term-end exams.",
      },
      {
        question: "Can I finish an online degree faster?",
        answer:
          "No. UGC mandates the minimum programme duration — two years for PG and three for UG. You can only take longer, not less.",
      },
      {
        question: "What if I miss a term-end exam?",
        answer:
          "The paper becomes a backlog and is attempted in the next exam window, with a per-paper re-attempt fee.",
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Derived indexes                                                     */
/* ------------------------------------------------------------------ */

export const ARTICLE_BY_SLUG = new Map(ARTICLES.map((a) => [a.slug, a]));

export const ALL_TAGS = Array.from(
  new Set(ARTICLES.flatMap((a) => a.tags)),
).sort();

export const tagSlug = (tag: string): string =>
  tag.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export const tagFromSlug = (slug: string): string | undefined =>
  ALL_TAGS.find((t) => tagSlug(t) === slug);
