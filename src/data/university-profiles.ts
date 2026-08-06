/**
 * University review + admission profiles.
 *
 * Powers /{slug}-review pages (student ratings, pros & cons, placements,
 * support, LMS, value for money, verdict) and /{slug}-admission pages
 * (eligibility, dates, documents, fees, step-by-step process).
 *
 * Data only — no imports, so the SEO registry can consume it safely.
 */

export interface RatingBreakdown {
  label: string;
  score: number; // out of 5
  note: string;
}

export interface StudentReview {
  name: string;
  programme: string;
  year: string;
  rating: number;
  quote: string;
}

export interface AdmissionStep {
  title: string;
  detail: string;
}

export interface UniversityProfile {
  id: string;
  name: string;
  shortName: string;
  /** Existing university hub route. */
  hubPath: string;
  /** /{slug}-review */
  reviewSlug: string;
  /** /{slug}-admission — omitted for universities without an admission page. */
  admissionSlug?: string;
  location: string;
  established: string;
  naac: string;
  approvals: string[];
  overallRating: number;
  reviewCount: number;
  ratings: RatingBreakdown[];
  pros: string[];
  cons: string[];
  placement: {
    summary: string;
    highlights: string[];
    topRecruiters: string[];
    averagePackage: string;
  };
  support: string;
  lms: string;
  valueForMoney: string;
  verdict: string;
  bestFor: string;
  /** Admission-page content */
  admission: {
    sessions: string;
    lastDate: string;
    feeRange: string;
    eligibility: { programme: string; criteria: string }[];
    steps: AdmissionStep[];
    documents: string[];
    scholarships: string[];
    programmes: string[];
  };
  studentReviews: StudentReview[];
}

const COMMON_STEPS: AdmissionStep[] = [
  { title: "Register online", detail: "Create an application account with your name, email and mobile number and verify the OTP." },
  { title: "Fill the application form", detail: "Enter academic history, choose the programme and specialisation, and pay the application fee." },
  { title: "Upload documents", detail: "Upload scanned marksheets, ID proof, photograph and signature in the prescribed format." },
  { title: "Verification", detail: "The admission team verifies eligibility and reverts within 2–5 working days if anything is missing." },
  { title: "Pay the fee", detail: "Pay full, yearly or semester fees, or opt for a no-cost EMI plan through the payment partner." },
  { title: "Get your enrolment ID", detail: "Enrolment number and LMS credentials are issued and the session starts as per the academic calendar." },
];

export const UNIVERSITY_PROFILES: UniversityProfile[] = [
  {
    id: "lpu",
    name: "Lovely Professional University Online",
    shortName: "LPU",
    hubPath: "/university/lpu",
    reviewSlug: "lpu-review",
    admissionSlug: "lpu-admission",
    location: "Phagwara, Punjab",
    established: "2005",
    naac: "A++",
    approvals: ["UGC entitled", "AICTE", "NAAC A++", "AIU member"],
    overallRating: 4.4,
    reviewCount: 1860,
    ratings: [
      { label: "Academics & curriculum", score: 4.4, note: "Industry-refreshed syllabus with case-based assessments." },
      { label: "Faculty quality", score: 4.3, note: "Mix of full-time campus faculty and industry practitioners." },
      { label: "LMS experience", score: 4.4, note: "Stable portal, recorded plus live sessions, mobile app available." },
      { label: "Placement support", score: 4.1, note: "Division of Career Services shares openings; effort is on the student." },
      { label: "Student support", score: 4.2, note: "Dedicated student mentor, ticket-based query resolution." },
      { label: "Value for money", score: 4.5, note: "NAAC A++ at a mid-range fee with generous scholarships." },
    ],
    pros: [
      "Highest accreditation grade (NAAC A++) among mainstream private online universities",
      "Merit, defence and government-employee scholarships cut the effective fee substantially",
      "Large recruiter ecosystem shared with the campus programmes",
      "Flexible exam slots and reattempt options for working professionals",
    ],
    cons: [
      "Placement assistance is advisory — there is no guaranteed placement",
      "Live-class timings can clash with standard office hours",
      "Response times slow down during peak admission months",
    ],
    placement: {
      summary:
        "LPU Online learners get access to the Division of Career Services: job boards, resume workshops, mock interviews and virtual drives. Outcomes depend heavily on prior work experience.",
      highlights: [
        "Virtual placement drives held multiple times a year",
        "Resume and LinkedIn review by career-services mentors",
        "Alumni referrals across IT, BFSI and FMCG",
      ],
      topRecruiters: ["Cognizant", "Wipro", "HDFC Bank", "Amazon", "Byju's", "Deloitte (support roles)"],
      averagePackage: "₹4–7 LPA for freshers; experienced learners typically see a 20–40% hike",
    },
    support:
      "Each learner is assigned a student mentor. Queries are raised through the student portal, with email and phone escalation. Weekend doubt-clearing sessions run for most core subjects.",
    lms:
      "The LPU e-Connect portal hosts recorded lectures, e-books, practice quizzes and assignment submission. A mobile app allows offline downloads, and live sessions are recorded for later viewing.",
    valueForMoney:
      "At roughly ₹1.70 lakh for a two-year online MBA — before scholarships — LPU offers NAAC A++ recognition at a lower price than Amity or Manipal. For budget-conscious learners who still want a top accreditation grade, the value is strong.",
    verdict:
      "Recommended for students who want the highest NAAC grade without paying premium private-university fees, and who are comfortable driving their own placement effort.",
    bestFor: "NAAC A++ recognition at a mid-range fee",
    admission: {
      sessions: "Two intakes a year — January/February and July/August",
      lastDate: "Applications typically close 2–3 weeks before session start; late admission is allowed with a fee",
      feeRange: "₹1,32,000 (UG) to ₹1,70,000 (PG) total, payable per semester or via no-cost EMI",
      eligibility: [
        { programme: "Online MBA", criteria: "Bachelor's degree in any stream with 50% aggregate (45% for reserved categories)" },
        { programme: "Online MCA", criteria: "BCA / B.Sc IT / bachelor's with mathematics, 50% aggregate" },
        { programme: "Online BBA / BCA / B.Com", criteria: "10+2 pass from a recognised board in any stream" },
        { programme: "Online M.Com / MA", criteria: "Relevant bachelor's degree with 50% aggregate" },
      ],
      steps: COMMON_STEPS,
      documents: [
        "Class 10 and 12 marksheets",
        "Graduation marksheets and degree certificate (for PG)",
        "Government photo ID (Aadhaar / passport)",
        "Passport-size photograph and scanned signature",
        "Category, defence or employer certificate for scholarship claims",
      ],
      scholarships: [
        "Merit scholarship on past academic performance",
        "Defence personnel and their dependants",
        "Divyangjan (differently abled) learners",
        "Government employees and alumni referral benefit",
      ],
      programmes: ["Online MBA", "Online MCA", "Online M.Com", "Online MA", "Online BBA", "Online BCA", "Online B.Com", "Online BA"],
    },
    studentReviews: [
      { name: "Rahul S.", programme: "Online MBA (Finance)", year: "2025 batch", rating: 5, quote: "The scholarship brought my fee below ₹1.4 lakh and the A++ grade helped in my internal promotion case." },
      { name: "Neha K.", programme: "Online BCA", year: "2024 batch", rating: 4, quote: "Recorded lectures are genuinely good. I wish live doubt sessions were later in the evening." },
      { name: "Imran A.", programme: "Online MCA", year: "2025 batch", rating: 4, quote: "Coding assignments were practical. Placement help exists but you have to chase it." },
    ],
  },
  {
    id: "manipal",
    name: "Manipal University Jaipur (Online Manipal)",
    shortName: "Manipal",
    hubPath: "/university/manipal",
    reviewSlug: "manipal-review",
    admissionSlug: "manipal-admission",
    location: "Jaipur, Rajasthan",
    established: "2011",
    naac: "A+",
    approvals: ["UGC entitled", "AICTE", "NAAC A+", "WES recognised"],
    overallRating: 4.6,
    reviewCount: 2400,
    ratings: [
      { label: "Academics & curriculum", score: 4.6, note: "Structured semesters with Coursera-integrated electives." },
      { label: "Faculty quality", score: 4.5, note: "Core Manipal faculty deliver live sessions with recordings." },
      { label: "LMS experience", score: 4.7, note: "Most polished LMS in this set — clean UI, mobile app, analytics." },
      { label: "Placement support", score: 4.4, note: "Dedicated placement cell with recurring virtual drives." },
      { label: "Student support", score: 4.5, note: "Fast ticket resolution and proactive academic reminders." },
      { label: "Value for money", score: 4.2, note: "Premium pricing, justified mainly by brand and placement access." },
    ],
    pros: [
      "Strongest brand recall among online universities with recruiters",
      "WES-recognised degree — useful if you plan to work or study abroad",
      "Free Coursera content access bundled with several programmes",
      "Dedicated placement cell with a large hiring-partner network",
    ],
    cons: [
      "Among the more expensive online programmes",
      "Specialisation catalogue is narrower than Amity's",
      "Scholarships are limited compared with LPU",
    ],
    placement: {
      summary:
        "Online Manipal runs a dedicated placement cell for online learners with virtual drives, employability training and a hiring-partner network of 500+ companies.",
      highlights: [
        "Recurring virtual placement drives for eligible learners",
        "Employability skills modules bundled into the curriculum",
        "Alumni and recruiter network shared with campus programmes",
      ],
      topRecruiters: ["Infosys", "TCS", "Accenture", "ICICI Bank", "Flipkart", "Genpact"],
      averagePackage: "₹5–8 LPA for freshers; strong hikes for candidates with 3+ years of experience",
    },
    support:
      "Programme coordinators handle academic queries, with a student help desk for fees, exams and documents. Escalation paths are clearly published and response times are among the fastest in this comparison.",
    lms:
      "The Online Manipal LMS is the benchmark in this set: clean navigation, recorded and live sessions, e-library access, discussion boards, self-assessment quizzes and a well-rated mobile app.",
    valueForMoney:
      "You pay a premium — roughly ₹1.75 lakh for the online MBA. The return comes from brand recognition, WES recognition and genuine placement infrastructure rather than a lower price.",
    verdict:
      "The safest pick if brand value, LMS quality and placement support matter more than absolute cost. Choose LPU or SMU instead if budget is the deciding factor.",
    bestFor: "Brand value, LMS quality and placement support",
    admission: {
      sessions: "Two intakes a year — January and July, with rolling admissions in between",
      lastDate: "Applications close shortly before each session; extended windows are announced for late applicants",
      feeRange: "₹1,20,000 (UG) to ₹1,75,000 (PG) total, with semester-wise and no-cost EMI options",
      eligibility: [
        { programme: "Online MBA", criteria: "Bachelor's degree with 50% aggregate; internal aptitude test waived with valid CAT/MAT/XAT/CMAT/GMAT score or 2+ years of experience" },
        { programme: "Online MCA", criteria: "Bachelor's degree with mathematics or statistics at 10+2 or graduation level, 50% aggregate" },
        { programme: "Online M.Com / MA", criteria: "Relevant bachelor's degree with 50% aggregate" },
        { programme: "Online BBA / BCA / B.Com / BA", criteria: "10+2 pass with 45–50% aggregate" },
      ],
      steps: COMMON_STEPS,
      documents: [
        "Class 10 and 12 marksheets",
        "Graduation marksheets and provisional/degree certificate (for PG)",
        "Government photo ID (Aadhaar / passport)",
        "Passport-size photograph and scanned signature",
        "Work-experience letter, if claiming an entrance-test waiver",
      ],
      scholarships: [
        "Merit-based scholarship for high scorers",
        "Defence personnel and their dependants",
        "Divyangjan learners",
        "Alumni benefit for Manipal group graduates",
      ],
      programmes: ["Online MBA", "Online MCA", "Online M.Com", "Online MA (JMC)", "Online BBA", "Online BCA", "Online B.Com", "Online BA"],
    },
    studentReviews: [
      { name: "Priya M.", programme: "Online MBA (Marketing)", year: "2025 batch", rating: 5, quote: "The LMS and live sessions are excellent, and my company accepted the degree for an internal band change." },
      { name: "Arjun T.", programme: "Online BCA", year: "2024 batch", rating: 4, quote: "Good structure and support. Fees are on the higher side compared with other universities." },
      { name: "Sneha R.", programme: "Online M.Com", year: "2025 batch", rating: 5, quote: "Query resolution was quick and exam scheduling was flexible around my job." },
    ],
  },
  {
    id: "ignou",
    name: "Indira Gandhi National Open University",
    shortName: "IGNOU",
    hubPath: "/university/ignou",
    reviewSlug: "ignou-review",
    admissionSlug: "ignou-admission",
    location: "New Delhi (nationwide study centres)",
    established: "1985",
    naac: "A++",
    approvals: ["Central University", "UGC", "AICTE", "NAAC A++", "DEB recognised"],
    overallRating: 4.3,
    reviewCount: 5200,
    ratings: [
      { label: "Academics & curriculum", score: 4.3, note: "Well-written self-learning material, slower syllabus refresh." },
      { label: "Faculty quality", score: 4.0, note: "Strong academics, but limited one-to-one interaction." },
      { label: "LMS experience", score: 3.6, note: "eGyanKosh and SWAYAM work, but the interface feels dated." },
      { label: "Placement support", score: 2.8, note: "No dedicated placement cell for ODL learners." },
      { label: "Student support", score: 3.5, note: "Regional centre dependent; quality varies by city." },
      { label: "Value for money", score: 5.0, note: "Unbeatable — full degrees for a fraction of private fees." },
    ],
    pros: [
      "Central university degree with the widest government-job acceptance",
      "Lowest total programme cost in India",
      "Huge programme catalogue and nationwide study-centre network",
      "Self-learning material is genuinely well written and exam-oriented",
    ],
    cons: [
      "No placement cell or structured career support",
      "Term-end exams must be taken at a study centre",
      "Result and evaluation timelines can be slow",
      "Digital experience lags behind private universities",
    ],
    placement: {
      summary:
        "IGNOU does not run placement drives for open and distance learners. The degree is chosen for recognition and affordability, not campus hiring.",
      highlights: [
        "Degree accepted for UPSC, SSC, banking and state-service recruitment",
        "Strong acceptance for higher study and PhD admission",
        "Career support limited to job-notification boards at some regional centres",
      ],
      topRecruiters: ["Public sector recruitment (via competitive exams)", "PSU and government departments", "Private employers accepting UGC degrees"],
      averagePackage: "Not published — outcomes depend on the learner's exam performance or existing job",
    },
    support:
      "Support runs through regional and study centres. Quality varies noticeably by location: metro centres respond faster, while smaller centres can be slow during admission and exam periods.",
    lms:
      "Learning happens through printed and PDF self-learning material, eGyanKosh, SWAYAM/SWAYAM PRABHA video lectures and counselling sessions at study centres. Functional, but not a modern LMS experience.",
    valueForMoney:
      "Unmatched. A full MBA costs around ₹62,000 and a BA around ₹22,000 — five to eight times cheaper than private online universities with the same legal degree validity.",
    verdict:
      "The right choice for government-job aspirants and cost-sensitive learners. Choose a private online university instead if you need placement support and a modern LMS.",
    bestFor: "Lowest fees and government-job acceptance",
    admission: {
      sessions: "Two cycles a year — January and July",
      lastDate: "Each cycle stays open for several weeks and is usually extended once; re-registration follows the same calendar",
      feeRange: "₹22,000 (BA) to ₹62,000 (MBA) total programme fee",
      eligibility: [
        { programme: "MBA", criteria: "Bachelor's degree with 50% aggregate (45% for reserved categories)" },
        { programme: "MCA", criteria: "Bachelor's degree with mathematics at 10+2 or graduation level" },
        { programme: "M.Com / MA", criteria: "Bachelor's degree in any discipline" },
        { programme: "BA / B.Com / BCA / BBA", criteria: "10+2 pass or BPP for candidates without formal 12th" },
      ],
      steps: [
        { title: "Register on the Samarth portal", detail: "Create an applicant account on the IGNOU admission portal with a valid email and mobile number." },
        { title: "Fill the admission form", detail: "Select programme, medium, regional centre and study centre carefully — changing them later is difficult." },
        { title: "Upload documents", detail: "Upload photograph, signature, marksheets and category certificate within the prescribed file-size limits." },
        { title: "Pay the programme fee", detail: "Pay online through net banking, card or UPI; the fee is programme-wise, not semester-wise, for most courses." },
        { title: "Confirmation and material", detail: "Admission is confirmed after regional-centre verification; study material is dispatched or made available digitally." },
        { title: "Re-registration", detail: "Register for the next year or semester within the announced window to stay in the programme." },
      ],
      documents: [
        "Class 10 and 12 marksheets",
        "Graduation marksheet and degree certificate (for PG)",
        "Category / BPL / PwD certificate where applicable",
        "Experience certificate for programmes that require it",
        "Photograph and signature in the prescribed size",
      ],
      scholarships: [
        "Government SC/ST/OBC scholarship reimbursement via the National Scholarship Portal",
        "Fee exemption for jail inmates and specific categories",
        "PwD fee concessions",
      ],
      programmes: ["MBA", "MCA", "M.Com", "MA (multiple subjects)", "BA", "B.Com", "BBA", "BCA", "PG diplomas and certificates"],
    },
    studentReviews: [
      { name: "Vikas P.", programme: "MA (Political Science)", year: "2024 batch", rating: 5, quote: "Perfect for UPSC preparation — cheap, flexible and the study material doubles as revision notes." },
      { name: "Ananya D.", programme: "MBA", year: "2025 batch", rating: 4, quote: "Great value, but you must be self-driven. Do not expect placement help." },
      { name: "Sourav B.", programme: "B.Com", year: "2023 batch", rating: 4, quote: "Degree got accepted for my bank exam without any question. Result timelines were slow though." },
    ],
  },
  {
    id: "jain",
    name: "Jain (Deemed-to-be University) Online",
    shortName: "Jain",
    hubPath: "/university/jain",
    reviewSlug: "jain-review",
    admissionSlug: "jain-admission",
    location: "Bengaluru, Karnataka",
    established: "1990",
    naac: "A++",
    approvals: ["UGC entitled", "AICTE", "NAAC A++", "Deemed-to-be University"],
    overallRating: 4.5,
    reviewCount: 1450,
    ratings: [
      { label: "Academics & curriculum", score: 4.5, note: "Analytics and fintech electives are unusually current." },
      { label: "Faculty quality", score: 4.4, note: "Bengaluru-based industry faculty in electives." },
      { label: "LMS experience", score: 4.3, note: "Clean portal with live weekend sessions and recordings." },
      { label: "Placement support", score: 4.2, note: "Placement assistance plus interview and resume training." },
      { label: "Student support", score: 4.3, note: "Responsive counsellors, structured onboarding." },
      { label: "Value for money", score: 4.5, note: "NAAC A++ with fees below Amity and Manipal." },
    ],
    pros: [
      "NAAC A++ with a strong South India employer base",
      "Industry-aligned electives in analytics, fintech and digital marketing",
      "Weekend live sessions suit full-time workers",
      "Competitive fees for a deemed university of this grade",
    ],
    cons: [
      "Recruiter network is strongest in and around Bengaluru",
      "Brand recall in North India is lower than Amity or Manipal",
      "Elective availability depends on batch size",
    ],
    placement: {
      summary:
        "Jain Online provides placement assistance through its career services team: profile building, mock interviews and access to hiring partners concentrated in Bengaluru's IT and startup ecosystem.",
      highlights: [
        "Resume, LinkedIn and interview preparation workshops",
        "Access to Bengaluru startup and IT hiring partners",
        "Industry-mentor sessions in analytics and fintech electives",
      ],
      topRecruiters: ["Infosys", "Wipro", "Mindtree", "Razorpay (support roles)", "Deloitte", "Concentrix"],
      averagePackage: "₹4.5–7.5 LPA for freshers, higher for analytics specialisations",
    },
    support:
      "Dedicated student relationship managers handle academic and administrative queries. Onboarding is structured, with orientation sessions before every semester.",
    lms:
      "The Jain Online LMS offers recorded modules, weekend live classes, discussion forums, e-library access and self-assessments, with a mobile-friendly interface.",
    valueForMoney:
      "Around ₹1.6 lakh for the online MBA with NAAC A++ recognition places Jain between LPU and Manipal on price while matching LPU on accreditation grade.",
    verdict:
      "Best suited to learners targeting South Indian employers or analytics/fintech roles who want an A++ university at a moderate fee.",
    bestFor: "Bengaluru recruiter access and analytics electives",
    admission: {
      sessions: "Rolling admissions with major intakes in January and July",
      lastDate: "Applications close a few weeks before session start; late entries are accommodated where seats remain",
      feeRange: "₹1,10,000 (UG) to ₹1,60,000 (PG) total, with semester-wise payment and EMI",
      eligibility: [
        { programme: "Online MBA", criteria: "Bachelor's degree with 50% aggregate; work experience preferred but not mandatory" },
        { programme: "Online MCA", criteria: "BCA / B.Sc IT / bachelor's with mathematics, 50% aggregate" },
        { programme: "Online M.Com / MA", criteria: "Relevant bachelor's degree with 50% aggregate" },
        { programme: "Online BBA / BCA / B.Com / BA", criteria: "10+2 pass from a recognised board" },
      ],
      steps: COMMON_STEPS,
      documents: [
        "Class 10 and 12 marksheets",
        "Graduation marksheets and degree certificate (for PG)",
        "Government photo ID (Aadhaar / passport)",
        "Passport-size photograph and scanned signature",
        "Work-experience proof, if applicable",
      ],
      scholarships: [
        "Merit scholarship on academic performance",
        "Defence and paramilitary category waiver",
        "Divyangjan learners",
        "Early-bird fee benefit in some sessions",
      ],
      programmes: ["Online MBA", "Online MCA", "Online M.Com", "Online MA", "Online BBA", "Online BCA", "Online B.Com", "Online BA"],
    },
    studentReviews: [
      { name: "Kiran V.", programme: "Online MBA (Business Analytics)", year: "2025 batch", rating: 5, quote: "The analytics electives were hands-on and helped me move into a data role in Bengaluru." },
      { name: "Meghna S.", programme: "Online B.Com", year: "2024 batch", rating: 4, quote: "Support team is responsive. Live classes are only on weekends, which worked for me." },
      { name: "Rohit N.", programme: "Online MCA", year: "2025 batch", rating: 4, quote: "Good faculty, fair fees. Placement help is real but Bengaluru-centric." },
    ],
  },
  {
    id: "amity",
    name: "Amity University Online",
    shortName: "Amity",
    hubPath: "/university/amity",
    reviewSlug: "amity-review",
    admissionSlug: "amity-admission",
    location: "Noida, Uttar Pradesh",
    established: "2005",
    naac: "A+",
    approvals: ["UGC entitled", "AICTE", "NAAC A+", "WES recognised"],
    overallRating: 4.3,
    reviewCount: 3100,
    ratings: [
      { label: "Academics & curriculum", score: 4.3, note: "Widest specialisation catalogue; depth varies by elective." },
      { label: "Faculty quality", score: 4.2, note: "Large faculty pool, experience differs across specialisations." },
      { label: "LMS experience", score: 4.2, note: "Feature-rich portal, occasional load issues near exams." },
      { label: "Placement support", score: 4.1, note: "Amity Career Services plus a very large alumni network." },
      { label: "Student support", score: 4.0, note: "Good during admission; slower after enrolment in peak months." },
      { label: "Value for money", score: 4.0, note: "Premium fees offset by EMI plans and brand reach." },
    ],
    pros: [
      "Largest choice of specialisations among Indian online universities",
      "Global alumni base of 2 lakh+ and international student support",
      "WES recognition helps for overseas employment and study",
      "EMI plans start under ₹5,000 per month",
    ],
    cons: [
      "Fees are at the top end of the online market",
      "Support response slows down during peak admission cycles",
      "Elective quality is uneven across the very large catalogue",
    ],
    placement: {
      summary:
        "Amity Career Services provides job boards, employability training and virtual drives, backed by one of India's largest private-university alumni networks.",
      highlights: [
        "Virtual job fairs and recruiter connect sessions",
        "Career-readiness modules and interview preparation",
        "Alumni network across India, the Middle East and the UK",
      ],
      topRecruiters: ["Amazon", "HCL", "IBM", "Kotak Mahindra Bank", "Tech Mahindra", "Airtel"],
      averagePackage: "₹4.5–8 LPA depending on specialisation and prior experience",
    },
    support:
      "Support is handled by programme coordinators and a central help desk, with an active student portal for tickets, documents and exam scheduling.",
    lms:
      "The Amity Online LMS carries recorded lectures, e-books, live sessions, assignment submission, discussion boards and proctored exam scheduling, with a companion mobile app.",
    valueForMoney:
      "Around ₹1.8 lakh for the online MBA makes Amity one of the costlier options. The value case rests on specialisation choice, brand reach and international recognition rather than price.",
    verdict:
      "Pick Amity when you need a specific specialisation that other universities do not offer, or when international recognition matters. Choose LPU or Jain for a similar degree at lower cost.",
    bestFor: "Widest specialisation choice and international reach",
    admission: {
      sessions: "Multiple intakes through the year, with main cycles in January and July",
      lastDate: "Rolling — applications are accepted until the batch fills for each cycle",
      feeRange: "₹1,25,000 (UG) to ₹1,80,000 (PG) total, with EMI from under ₹5,000/month",
      eligibility: [
        { programme: "Online MBA", criteria: "Bachelor's degree with 50% aggregate in any discipline" },
        { programme: "Online MCA", criteria: "BCA / B.Sc IT / bachelor's with mathematics, 50% aggregate" },
        { programme: "Online M.Com / MA", criteria: "Relevant bachelor's degree with 50% aggregate" },
        { programme: "Online BBA / BCA / B.Com / BA", criteria: "10+2 pass from a recognised board" },
      ],
      steps: COMMON_STEPS,
      documents: [
        "Class 10 and 12 marksheets",
        "Graduation marksheets and degree certificate (for PG)",
        "Government photo ID (Aadhaar / passport)",
        "Passport-size photograph and scanned signature",
        "Category or defence certificate for waivers",
      ],
      scholarships: [
        "Merit scholarship based on previous qualification",
        "Defence personnel and dependants",
        "Divyangjan learners",
        "Amity alumni benefit",
      ],
      programmes: ["Online MBA", "Online MCA", "Online M.Com", "Online MA", "Online BBA", "Online BCA", "Online B.Com", "Online BA", "PG diplomas"],
    },
    studentReviews: [
      { name: "Sanjay K.", programme: "Online MBA (IT & FinTech)", year: "2025 batch", rating: 4, quote: "The specialisation I wanted was only available at Amity. Content was solid, fees were steep." },
      { name: "Farah Q.", programme: "Online BBA", year: "2024 batch", rating: 4, quote: "LMS has everything, though it slows down close to exam dates." },
      { name: "Deepak J.", programme: "Online MA (JMC)", year: "2025 batch", rating: 5, quote: "Faculty interaction in live sessions was better than I expected for an online degree." },
    ],
  },
  {
    id: "du-sol",
    name: "DU SOL — School of Open Learning, University of Delhi",
    shortName: "DU SOL",
    hubPath: "/university/du-sol",
    reviewSlug: "du-sol-review",
    location: "New Delhi",
    established: "1962",
    naac: "A+",
    approvals: ["University of Delhi", "UGC-DEB recognised", "NAAC A+ (DU)"],
    overallRating: 4.0,
    reviewCount: 2750,
    ratings: [
      { label: "Academics & curriculum", score: 4.2, note: "Delhi University syllabus, identical to regular programmes." },
      { label: "Faculty quality", score: 3.9, note: "DU-affiliated faculty; contact classes are limited." },
      { label: "LMS experience", score: 3.4, note: "Basic portal and PDF study material; no modern LMS." },
      { label: "Placement support", score: 2.7, note: "No placement cell for SOL learners." },
      { label: "Student support", score: 3.3, note: "Administrative processes can be slow and queue-driven." },
      { label: "Value for money", score: 4.8, note: "A Delhi University degree for a few thousand rupees a year." },
    ],
    pros: [
      "Degree awarded by the University of Delhi — high recognition value",
      "Among the cheapest graduation options in India",
      "Same syllabus as DU regular programmes",
      "Strong acceptance for competitive exams and higher study",
    ],
    cons: [
      "No placement support at all",
      "Exams and many processes are Delhi-centric",
      "Digital learning experience is minimal",
      "Administrative timelines can be slow",
    ],
    placement: {
      summary:
        "SOL does not conduct placements. Students typically use the degree for competitive-exam eligibility, higher study or to formalise an existing job.",
      highlights: [
        "Degree accepted for UPSC, SSC, banking and state services",
        "Valid for PG admission across Indian universities",
        "Alumni base spread across government services",
      ],
      topRecruiters: ["Government recruitment through competitive exams", "Private employers accepting UGC degrees"],
      averagePackage: "Not published",
    },
    support:
      "Support is largely administrative and centre-based. Learners should plan around published schedules, since query resolution can take time during admission and exam periods.",
    lms:
      "Learning is based on printed and downloadable study material, with limited recorded lectures and weekend contact classes at selected centres.",
    valueForMoney:
      "Exceptional on paper: a University of Delhi degree for roughly ₹26,000–₹32,000 for the whole programme. The trade-off is the absence of support services.",
    verdict:
      "Choose DU SOL for the Delhi University name at minimal cost, particularly for competitive-exam eligibility. Avoid it if you need placement help or a structured online experience.",
    bestFor: "A University of Delhi degree at minimal cost",
    admission: {
      sessions: "One main admission cycle a year, typically opening after the DU regular admission process",
      lastDate: "Announced by SOL each session; extensions are common",
      feeRange: "₹26,000 – ₹32,000 for the full programme",
      eligibility: [
        { programme: "BA (Programme) / B.Com", criteria: "10+2 pass from a recognised board" },
        { programme: "BA (Hons) English / Political Science", criteria: "10+2 with the subject-specific criteria announced each year" },
        { programme: "MA / M.Com", criteria: "Relevant bachelor's degree from a recognised university" },
      ],
      steps: [
        { title: "Register on the SOL portal", detail: "Create an account on the SOL admission portal during the announced window." },
        { title: "Fill the application", detail: "Choose your programme and medium of instruction and enter academic details." },
        { title: "Upload documents", detail: "Upload marksheets, photograph, signature and category certificate." },
        { title: "Pay the fee", detail: "Pay the programme fee online; the amount is among the lowest in India." },
        { title: "Confirmation", detail: "Admission is confirmed after verification and study material is released." },
      ],
      documents: [
        "Class 10 and 12 marksheets",
        "Graduation marksheet and degree certificate (for PG)",
        "Aadhaar or other government photo ID",
        "Photograph and signature",
        "Category certificate where applicable",
      ],
      scholarships: ["Government category scholarships via the National Scholarship Portal", "Fee concessions for eligible categories"],
      programmes: ["BA (Programme)", "BA (Hons)", "B.Com", "B.Com (Hons)", "MA", "M.Com"],
    },
    studentReviews: [
      { name: "Aditya R.", programme: "B.Com", year: "2024 batch", rating: 4, quote: "A DU degree at this fee is unbeatable. Just be ready to manage everything yourself." },
      { name: "Pooja L.", programme: "BA (Programme)", year: "2023 batch", rating: 4, quote: "Study material is fine and the degree helped me clear the graduation requirement for SSC." },
      { name: "Nikhil G.", programme: "MA (English)", year: "2025 batch", rating: 4, quote: "Content is DU-standard, but there is almost no digital support." },
    ],
  },
];

export const getUniversityProfileByReviewSlug = (slug?: string): UniversityProfile | undefined =>
  UNIVERSITY_PROFILES.find((u) => u.reviewSlug === slug);

export const getUniversityProfileByAdmissionSlug = (slug?: string): UniversityProfile | undefined =>
  UNIVERSITY_PROFILES.find((u) => u.admissionSlug === slug);

export const getUniversityProfile = (id: string): UniversityProfile | undefined =>
  UNIVERSITY_PROFILES.find((u) => u.id === id);
