/**
 * Course-cluster content used by <CourseClusterSection /> to give every
 * /courses/* page the same depth: specialisation cards, university-wise fee
 * table, eligibility, admission timeline, salary cards, FAQs.
 *
 * Data only — no UI, no imports (consumed by the SEO registry too).
 */

export interface Specialisation {
  name: string;
  blurb: string;
  roles: string;
}

export interface FeeRow {
  university: string;
  path: string;
  totalFee: string;
  perSemester: string;
  naac: string;
}

export interface SalaryRow {
  role: string;
  entry: string;
  mid: string;
  senior: string;
}

export interface CourseCluster {
  /** matches the /courses/:key route */
  key: string;
  name: string;
  fullName: string;
  level: "UG" | "PG";
  duration: string;
  feeRange: string;
  eligibility: string;
  entrance: string;
  approvals: string;
  specialisations: Specialisation[];
  fees: FeeRow[];
  admissionSteps: { title: string; detail: string }[];
  documents: string[];
  salaries: SalaryRow[];
  whoShouldApply: string[];
  faqs: { question: string; answer: string }[];
}

const STEPS_STANDARD = [
  {
    title: "Registration",
    detail: "Fill the application form with your basic and academic details and pay the one-time application fee.",
  },
  {
    title: "Document submission",
    detail: "Upload marksheets, ID proof, photograph and (if applicable) work-experience proof.",
  },
  {
    title: "Document verification",
    detail: "The university verifies your academic eligibility, mobile number and email ID.",
  },
  {
    title: "Fee payment",
    detail: "Pay full, yearly or semester-wise fees, or convert the fee into a no-cost EMI plan.",
  },
  {
    title: "Enrolment confirmed",
    detail: "You receive your enrolment number and LMS credentials, and study material is released.",
  },
];

const DOCS_UG = [
  "Class 10 marksheet",
  "Class 12 marksheet / passing certificate",
  "Government photo ID (Aadhaar / passport)",
  "Passport-size photograph and signature",
  "Category or scholarship proof (if claiming a waiver)",
];

const DOCS_PG = [
  "Graduation marksheets (all years) and degree certificate",
  "Class 10 and 12 marksheets",
  "Government photo ID (Aadhaar / passport)",
  "Passport-size photograph and signature",
  "Work-experience letter or category proof (if applicable)",
];

export const COURSE_CLUSTERS: CourseCluster[] = [
  {
    key: "mba",
    name: "Online MBA",
    fullName: "Master of Business Administration (Online)",
    level: "PG",
    duration: "2 years / 4 semesters",
    feeRange: "₹62,000 – ₹1,80,000 (total)",
    eligibility: "Bachelor's degree in any stream with 50% aggregate (45% for reserved categories)",
    entrance: "No CAT/MAT required at most universities; some offer their own waiver test",
    approvals: "UGC entitled, AICTE approved where applicable, NAAC A / A+ / A++ universities",
    specialisations: [
      { name: "Marketing Management", blurb: "Brand strategy, consumer behaviour, sales and channel management.", roles: "Brand Manager, Area Sales Manager" },
      { name: "Finance", blurb: "Corporate finance, valuation, investment analysis and financial reporting.", roles: "Financial Analyst, Credit Manager" },
      { name: "Human Resource Management", blurb: "Talent acquisition, HR analytics, compensation and labour law.", roles: "HR Business Partner, TA Lead" },
      { name: "Business Analytics & Data Science", blurb: "Statistics, Python/R, visualisation and predictive modelling for business.", roles: "Business Analyst, Data Analyst" },
      { name: "Digital Marketing", blurb: "SEO, performance marketing, marketing automation and analytics.", roles: "Digital Marketing Manager, Growth Lead" },
      { name: "Operations & Supply Chain", blurb: "Lean operations, logistics, procurement and quality systems.", roles: "Operations Manager, SCM Analyst" },
      { name: "Information Technology & FinTech", blurb: "IT strategy, product management, payments and banking technology.", roles: "IT Project Manager, Product Analyst" },
      { name: "International Business", blurb: "Global trade, export-import policy and cross-border strategy.", roles: "Export Manager, Trade Analyst" },
      { name: "Healthcare & Hospital Management", blurb: "Hospital operations, health economics and healthcare compliance.", roles: "Hospital Administrator" },
      { name: "BFSI (Banking & Insurance)", blurb: "Retail banking, risk, insurance products and regulatory frameworks.", roles: "Relationship Manager, Risk Analyst" },
    ],
    fees: [
      { university: "Manipal University Jaipur (Online)", path: "/universities/manipal-online", totalFee: "₹1,75,000", perSemester: "₹43,750", naac: "A+" },
      { university: "Amity University Online", path: "/universities/amity-online", totalFee: "₹1,80,000", perSemester: "₹45,000", naac: "A+" },
      { university: "LPU Online", path: "/universities/lpu-online", totalFee: "₹1,70,000", perSemester: "₹42,500", naac: "A++" },
      { university: "Jain University Online", path: "/universities/jain-online", totalFee: "₹1,60,000", perSemester: "₹40,000", naac: "A++" },
      { university: "Sikkim Manipal University", path: "/universities/sikkim-manipal-online", totalFee: "₹1,20,000", perSemester: "₹30,000", naac: "A" },
      { university: "Uttaranchal University Online", path: "/universities/uttaranchal-online", totalFee: "₹1,10,000", perSemester: "₹27,500", naac: "A+" },
      { university: "Mangalayatan University Online", path: "/universities/mangalayatan-online", totalFee: "₹1,60,000", perSemester: "₹40,000", naac: "A+" },
      { university: "IGNOU", path: "/universities/ignou-online", totalFee: "₹62,000", perSemester: "₹15,500", naac: "A++" },
    ],
    admissionSteps: STEPS_STANDARD,
    documents: DOCS_PG,
    salaries: [
      { role: "Business Analyst", entry: "₹4.5 LPA", mid: "₹9 LPA", senior: "₹18 LPA" },
      { role: "Marketing Manager", entry: "₹5 LPA", mid: "₹11 LPA", senior: "₹22 LPA" },
      { role: "Finance Manager", entry: "₹5.5 LPA", mid: "₹12 LPA", senior: "₹25 LPA" },
      { role: "HR Business Partner", entry: "₹4 LPA", mid: "₹9 LPA", senior: "₹18 LPA" },
      { role: "Operations Manager", entry: "₹4.5 LPA", mid: "₹10 LPA", senior: "₹20 LPA" },
    ],
    whoShouldApply: [
      "Working professionals who need a managerial qualification without leaving the job",
      "Graduates targeting a switch from a technical to a business role",
      "Family-business owners formalising finance, marketing and operations knowledge",
      "Candidates who want a UGC-entitled PG degree without a CAT/MAT score",
    ],
    faqs: [
      { question: "Is an online MBA valid for jobs and promotions?", answer: "Yes. A UGC-entitled online MBA carries the same legal standing as an on-campus MBA under UGC (Online Programmes) Regulations 2020, and is accepted for private jobs, government recruitment and PhD admission." },
      { question: "Can I do an online MBA without CAT or MAT?", answer: "Yes. Most UGC-entitled universities admit students on the basis of graduation marks; some conduct a short internal aptitude test that is waived for candidates with work experience or a valid CAT/MAT/XAT score." },
      { question: "How much does an online MBA cost in India?", answer: "Total fees range from about ₹62,000 at IGNOU to ₹1,80,000 at leading private universities, payable per semester or through no-cost EMI." },
      { question: "How are exams conducted?", answer: "Private universities use online proctored exams you can take from home; IGNOU and some state universities use term-end exams at a study centre." },
    ],
  },
  {
    key: "mca",
    name: "Online MCA",
    fullName: "Master of Computer Applications (Online)",
    level: "PG",
    duration: "2 years / 4 semesters",
    feeRange: "₹58,000 – ₹1,70,000 (total)",
    eligibility: "BCA / B.Sc IT / any bachelor's degree with mathematics or statistics, 50% aggregate",
    entrance: "No national entrance test required at most online universities",
    approvals: "UGC entitled, AICTE approved where applicable",
    specialisations: [
      { name: "Artificial Intelligence & Machine Learning", blurb: "Neural networks, NLP and applied ML with Python.", roles: "ML Engineer, AI Developer" },
      { name: "Data Science & Analytics", blurb: "Big data, statistics, visualisation and data engineering basics.", roles: "Data Scientist, Data Engineer" },
      { name: "Cloud Computing & DevOps", blurb: "AWS/Azure architecture, containers, CI/CD pipelines.", roles: "Cloud Engineer, DevOps Engineer" },
      { name: "Cyber Security", blurb: "Network security, ethical hacking, forensics and compliance.", roles: "Security Analyst, SOC Engineer" },
      { name: "Full Stack Development", blurb: "Java/Python backends with modern JavaScript front-ends.", roles: "Full Stack Developer" },
      { name: "Mobile Application Development", blurb: "Android, iOS and cross-platform app engineering.", roles: "Mobile App Developer" },
    ],
    fees: [
      { university: "Manipal University Jaipur (Online)", path: "/universities/manipal-online", totalFee: "₹1,60,000", perSemester: "₹40,000", naac: "A+" },
      { university: "Amity University Online", path: "/universities/amity-online", totalFee: "₹1,70,000", perSemester: "₹42,500", naac: "A+" },
      { university: "LPU Online", path: "/universities/lpu-online", totalFee: "₹1,50,000", perSemester: "₹37,500", naac: "A++" },
      { university: "Jain University Online", path: "/universities/jain-online", totalFee: "₹1,40,000", perSemester: "₹35,000", naac: "A++" },
      { university: "Uttaranchal University Online", path: "/universities/uttaranchal-online", totalFee: "₹1,05,000", perSemester: "₹26,250", naac: "A+" },
      { university: "IGNOU", path: "/universities/ignou-online", totalFee: "₹58,000", perSemester: "₹14,500", naac: "A++" },
    ],
    admissionSteps: STEPS_STANDARD,
    documents: DOCS_PG,
    salaries: [
      { role: "Software Developer", entry: "₹4 LPA", mid: "₹10 LPA", senior: "₹22 LPA" },
      { role: "Data Scientist", entry: "₹6 LPA", mid: "₹14 LPA", senior: "₹28 LPA" },
      { role: "Cloud Engineer", entry: "₹5 LPA", mid: "₹12 LPA", senior: "₹24 LPA" },
      { role: "Cyber Security Analyst", entry: "₹5 LPA", mid: "₹11 LPA", senior: "₹22 LPA" },
    ],
    whoShouldApply: [
      "BCA/B.Sc graduates who want a PG technical qualification",
      "Working IT professionals aiming at senior developer or architect roles",
      "Non-IT graduates with mathematics who want to move into software",
    ],
    faqs: [
      { question: "Is an online MCA accepted by IT companies?", answer: "Yes, when the degree is UGC entitled. Recruiters assess the university's accreditation and your practical skills; the online mode itself is not a disqualifier." },
      { question: "Do I need mathematics to apply?", answer: "Most universities require mathematics or statistics at 10+2 or graduation level; some offer a bridge course instead." },
      { question: "Are practicals and projects included?", answer: "Yes. Programmes include virtual labs, coding assignments and a final semester project evaluated by faculty." },
    ],
  },
  {
    key: "mcom",
    name: "Online MCom",
    fullName: "Master of Commerce (Online)",
    level: "PG",
    duration: "2 years / 4 semesters",
    feeRange: "₹30,000 – ₹1,20,000 (total)",
    eligibility: "B.Com / BBA / any bachelor's degree with 50% aggregate",
    entrance: "Merit-based admission, no entrance exam",
    approvals: "UGC entitled universities",
    specialisations: [
      { name: "Accounting & Finance", blurb: "Advanced financial reporting, IFRS and corporate accounting.", roles: "Accounts Manager, Finance Executive" },
      { name: "Taxation", blurb: "Direct tax, GST compliance and tax planning.", roles: "Tax Consultant, GST Practitioner" },
      { name: "Banking & Insurance", blurb: "Banking operations, credit appraisal and insurance products.", roles: "Banking Officer, Credit Analyst" },
      { name: "International Finance", blurb: "Forex, global markets and international financial management.", roles: "Treasury Analyst" },
      { name: "Business Analytics", blurb: "Excel, SQL and dashboards applied to commerce data.", roles: "Commerce Analyst" },
    ],
    fees: [
      { university: "Manipal University Jaipur (Online)", path: "/universities/manipal-online", totalFee: "₹1,00,000", perSemester: "₹25,000", naac: "A+" },
      { university: "Amity University Online", path: "/universities/amity-online", totalFee: "₹1,20,000", perSemester: "₹30,000", naac: "A+" },
      { university: "Jain University Online", path: "/universities/jain-online", totalFee: "₹90,000", perSemester: "₹22,500", naac: "A++" },
      { university: "Sikkim Manipal University", path: "/universities/sikkim-manipal-online", totalFee: "₹72,000", perSemester: "₹18,000", naac: "A" },
      { university: "IGNOU", path: "/universities/ignou-online", totalFee: "₹30,000", perSemester: "₹7,500", naac: "A++" },
    ],
    admissionSteps: STEPS_STANDARD,
    documents: DOCS_PG,
    salaries: [
      { role: "Accounts Manager", entry: "₹3.5 LPA", mid: "₹8 LPA", senior: "₹16 LPA" },
      { role: "Tax Consultant", entry: "₹3.5 LPA", mid: "₹9 LPA", senior: "₹18 LPA" },
      { role: "Financial Analyst", entry: "₹4 LPA", mid: "₹10 LPA", senior: "₹20 LPA" },
    ],
    whoShouldApply: [
      "B.Com graduates preparing for CA/CS/CMA alongside a PG degree",
      "Accounting professionals who need a master's for promotion",
      "Aspirants for banking and commerce teaching eligibility (NET/SET)",
    ],
    faqs: [
      { question: "Is an online MCom valid for UGC NET?", answer: "Yes. A UGC-entitled online MCom from a recognised university makes you eligible to appear for UGC NET in commerce." },
      { question: "Can I pursue MCom with a job?", answer: "Yes. Recorded lectures, weekend live classes and online exams are designed for working candidates." },
    ],
  },
  {
    key: "ma",
    name: "Online MA",
    fullName: "Master of Arts (Online)",
    level: "PG",
    duration: "2 years / 4 semesters",
    feeRange: "₹25,000 – ₹1,00,000 (total)",
    eligibility: "Bachelor's degree in any stream with 45–50% aggregate",
    entrance: "Merit-based admission, no entrance exam",
    approvals: "UGC entitled universities",
    specialisations: [
      { name: "English", blurb: "Literature, literary theory and academic writing.", roles: "Content Lead, Lecturer" },
      { name: "Economics", blurb: "Micro, macro, econometrics and public policy.", roles: "Research Analyst, Policy Associate" },
      { name: "Sociology", blurb: "Social theory, research methods and development studies.", roles: "Social Researcher, NGO Programme Officer" },
      { name: "Psychology", blurb: "Cognitive, organisational and counselling psychology foundations.", roles: "HR Associate, Counselling Assistant" },
      { name: "Political Science / Public Administration", blurb: "Governance, international relations and administration.", roles: "Civil-services aspirant, Policy Analyst" },
      { name: "Journalism & Mass Communication", blurb: "Reporting, digital media and communication strategy.", roles: "Journalist, Communications Executive" },
    ],
    fees: [
      { university: "Amity University Online", path: "/universities/amity-online", totalFee: "₹1,00,000", perSemester: "₹25,000", naac: "A+" },
      { university: "Manipal University Jaipur (Online)", path: "/universities/manipal-online", totalFee: "₹90,000", perSemester: "₹22,500", naac: "A+" },
      { university: "Jain University Online", path: "/universities/jain-online", totalFee: "₹80,000", perSemester: "₹20,000", naac: "A++" },
      { university: "DU SOL", path: "/universities/du-sol-online", totalFee: "₹28,000", perSemester: "₹7,000", naac: "A+" },
      { university: "IGNOU", path: "/universities/ignou-online", totalFee: "₹25,000", perSemester: "₹6,250", naac: "A++" },
    ],
    admissionSteps: STEPS_STANDARD,
    documents: DOCS_PG,
    salaries: [
      { role: "Content Manager", entry: "₹3.5 LPA", mid: "₹8 LPA", senior: "₹16 LPA" },
      { role: "Research Analyst", entry: "₹4 LPA", mid: "₹9 LPA", senior: "₹18 LPA" },
      { role: "Assistant Professor (post NET)", entry: "₹5 LPA", mid: "₹9 LPA", senior: "₹15 LPA" },
    ],
    whoShouldApply: [
      "UPSC and state PSC aspirants who need an affordable, flexible PG degree",
      "Teachers and content professionals seeking subject depth",
      "Graduates planning a PhD in humanities or social sciences",
    ],
    faqs: [
      { question: "Which online MA specialisation has the best scope?", answer: "Economics and Psychology lead for analytics and HR roles, English and Journalism for content and communications, and Political Science for civil-services preparation." },
      { question: "Is an online MA enough for a teaching job?", answer: "For college teaching you also need UGC NET; for school teaching a B.Ed is usually required alongside the MA." },
    ],
  },
  {
    key: "bba",
    name: "Online BBA",
    fullName: "Bachelor of Business Administration (Online)",
    level: "UG",
    duration: "3 years / 6 semesters",
    feeRange: "₹45,000 – ₹1,50,000 (total)",
    eligibility: "Pass in 10+2 from a recognised board, any stream",
    entrance: "No entrance exam; direct admission on 12th marks",
    approvals: "UGC entitled universities",
    specialisations: [
      { name: "Marketing", blurb: "Sales, brand basics and consumer behaviour.", roles: "Sales Executive, Marketing Associate" },
      { name: "Finance", blurb: "Accounting, financial markets and corporate finance basics.", roles: "Finance Associate" },
      { name: "Human Resource Management", blurb: "Recruitment, payroll and employee relations.", roles: "HR Executive" },
      { name: "Digital Marketing", blurb: "SEO, social media and paid campaigns.", roles: "Digital Marketing Executive" },
      { name: "International Business", blurb: "Global trade and export documentation.", roles: "Trade Executive" },
      { name: "Logistics & Supply Chain", blurb: "Warehousing, transport and inventory planning.", roles: "Supply Chain Executive" },
    ],
    fees: [
      { university: "Manipal University Jaipur (Online)", path: "/universities/manipal-online", totalFee: "₹1,35,000", perSemester: "₹22,500", naac: "A+" },
      { university: "Amity University Online", path: "/universities/amity-online", totalFee: "₹1,40,000", perSemester: "₹23,333", naac: "A+" },
      { university: "LPU Online", path: "/universities/lpu-online", totalFee: "₹1,32,000", perSemester: "₹22,000", naac: "A++" },
      { university: "Mangalayatan University Online", path: "/universities/mangalayatan-online", totalFee: "₹1,25,000", perSemester: "₹20,833", naac: "A+" },
      { university: "Uttaranchal University Online", path: "/universities/uttaranchal-online", totalFee: "₹90,000", perSemester: "₹15,000", naac: "A+" },
      { university: "IGNOU", path: "/universities/ignou-online", totalFee: "₹45,000", perSemester: "₹7,500", naac: "A++" },
    ],
    admissionSteps: STEPS_STANDARD,
    documents: DOCS_UG,
    salaries: [
      { role: "Marketing Executive", entry: "₹3 LPA", mid: "₹6 LPA", senior: "₹12 LPA" },
      { role: "HR Executive", entry: "₹2.8 LPA", mid: "₹6 LPA", senior: "₹11 LPA" },
      { role: "Business Development Manager", entry: "₹3.5 LPA", mid: "₹8 LPA", senior: "₹15 LPA" },
    ],
    whoShouldApply: [
      "12th-pass students who want a management degree with schedule flexibility",
      "Early-career employees formalising a graduation degree",
      "Students planning an MBA immediately after graduation",
    ],
    faqs: [
      { question: "Can I do an online BBA right after 12th?", answer: "Yes. A 10+2 pass from any recognised board in any stream is the only requirement at most UGC-entitled universities." },
      { question: "Is an online BBA accepted for MBA admission?", answer: "Yes, including at IIMs and central universities, as long as the BBA is from a UGC-entitled university." },
    ],
  },
  {
    key: "bca",
    name: "Online BCA",
    fullName: "Bachelor of Computer Applications (Online)",
    level: "UG",
    duration: "3 years / 6 semesters",
    feeRange: "₹45,000 – ₹1,45,000 (total)",
    eligibility: "Pass in 10+2 in any stream (mathematics preferred at some universities)",
    entrance: "No entrance exam; merit-based admission",
    approvals: "UGC entitled universities",
    specialisations: [
      { name: "Data Science", blurb: "Python, statistics and data visualisation fundamentals.", roles: "Junior Data Analyst" },
      { name: "Cloud Computing", blurb: "Cloud fundamentals, virtualisation and deployment.", roles: "Cloud Support Engineer" },
      { name: "Cyber Security", blurb: "Network security basics and ethical hacking.", roles: "Security Associate" },
      { name: "Full Stack / Web Development", blurb: "HTML, CSS, JavaScript, databases and frameworks.", roles: "Web Developer" },
      { name: "Artificial Intelligence", blurb: "Intro to ML, data handling and AI tools.", roles: "AI Trainee" },
    ],
    fees: [
      { university: "Manipal University Jaipur (Online)", path: "/universities/manipal-online", totalFee: "₹1,35,000", perSemester: "₹22,500", naac: "A+" },
      { university: "Amity University Online", path: "/universities/amity-online", totalFee: "₹1,40,000", perSemester: "₹23,333", naac: "A+" },
      { university: "LPU Online", path: "/universities/lpu-online", totalFee: "₹1,32,000", perSemester: "₹22,000", naac: "A++" },
      { university: "Mangalayatan University Online", path: "/universities/mangalayatan-online", totalFee: "₹1,25,000", perSemester: "₹20,833", naac: "A+" },
      { university: "IGNOU", path: "/universities/ignou-online", totalFee: "₹45,000", perSemester: "₹7,500", naac: "A++" },
    ],
    admissionSteps: STEPS_STANDARD,
    documents: DOCS_UG,
    salaries: [
      { role: "Software Developer (fresher)", entry: "₹3.5 LPA", mid: "₹8 LPA", senior: "₹16 LPA" },
      { role: "Web Developer", entry: "₹3 LPA", mid: "₹7 LPA", senior: "₹14 LPA" },
      { role: "Data Analyst", entry: "₹4 LPA", mid: "₹9 LPA", senior: "₹18 LPA" },
    ],
    whoShouldApply: [
      "12th-pass students targeting an IT career without a B.Tech budget",
      "Working support/BPO staff moving into development roles",
      "Students who plan an MCA or M.Sc IT afterwards",
    ],
    faqs: [
      { question: "Is an online BCA good for a software job?", answer: "Yes, if you pair the degree with a project portfolio and one core stack. Recruiters check the university's UGC entitlement and your practical skills." },
      { question: "Is mathematics compulsory for online BCA?", answer: "Several universities admit students from any stream; a few require mathematics in 12th or a bridge course in the first semester." },
    ],
  },
  {
    key: "bcom",
    name: "Online BCom",
    fullName: "Bachelor of Commerce (Online)",
    level: "UG",
    duration: "3 years / 6 semesters",
    feeRange: "₹30,000 – ₹1,25,000 (total)",
    eligibility: "Pass in 10+2, commerce stream preferred but not mandatory",
    entrance: "Merit-based admission",
    approvals: "UGC entitled universities",
    specialisations: [
      { name: "Accounting & Finance", blurb: "Financial accounting, cost accounting and auditing.", roles: "Accountant, Audit Assistant" },
      { name: "Taxation", blurb: "Income tax and GST fundamentals with practical filing.", roles: "Tax Assistant" },
      { name: "Banking & Insurance", blurb: "Banking operations, insurance and financial services.", roles: "Banking Associate" },
      { name: "Corporate Accounting", blurb: "Company accounts, compliance and reporting.", roles: "Finance Executive" },
      { name: "Financial Markets", blurb: "Equity, derivatives and portfolio basics.", roles: "Dealer, Equity Analyst Trainee" },
    ],
    fees: [
      { university: "Manipal University Jaipur (Online)", path: "/universities/manipal-online", totalFee: "₹1,20,000", perSemester: "₹20,000", naac: "A+" },
      { university: "Amity University Online", path: "/universities/amity-online", totalFee: "₹1,25,000", perSemester: "₹20,833", naac: "A+" },
      { university: "Jain University Online", path: "/universities/jain-online", totalFee: "₹1,10,000", perSemester: "₹18,333", naac: "A++" },
      { university: "DU SOL", path: "/universities/du-sol-online", totalFee: "₹32,000", perSemester: "₹5,333", naac: "A+" },
      { university: "IGNOU", path: "/universities/ignou-online", totalFee: "₹30,000", perSemester: "₹5,000", naac: "A++" },
    ],
    admissionSteps: STEPS_STANDARD,
    documents: DOCS_UG,
    salaries: [
      { role: "Accountant", entry: "₹2.8 LPA", mid: "₹6 LPA", senior: "₹12 LPA" },
      { role: "Audit Assistant", entry: "₹3 LPA", mid: "₹7 LPA", senior: "₹13 LPA" },
      { role: "Banking Associate", entry: "₹3.2 LPA", mid: "₹7 LPA", senior: "₹14 LPA" },
    ],
    whoShouldApply: [
      "CA/CS/CMA aspirants who need a flexible graduation degree",
      "Accounts staff without a formal degree",
      "Bank-exam aspirants who need graduation eligibility quickly",
    ],
    faqs: [
      { question: "Is an online BCom valid for bank exams?", answer: "Yes. IBPS, SBI and RRB accept graduation from any UGC-recognised university, including online mode." },
      { question: "Can I do CA along with an online BCom?", answer: "Yes, and it is a common combination because the online schedule leaves time for CA coaching." },
    ],
  },
  {
    key: "ba",
    name: "Online BA",
    fullName: "Bachelor of Arts (Online)",
    level: "UG",
    duration: "3 years / 6 semesters",
    feeRange: "₹22,000 – ₹1,00,000 (total)",
    eligibility: "Pass in 10+2 from a recognised board",
    entrance: "Merit-based admission",
    approvals: "UGC entitled universities",
    specialisations: [
      { name: "English", blurb: "Literature, communication and writing skills.", roles: "Content Writer, Editor" },
      { name: "Economics", blurb: "Micro and macro economics with statistics.", roles: "Research Assistant" },
      { name: "Political Science", blurb: "Indian polity, governance and international relations.", roles: "Civil-services aspirant" },
      { name: "Sociology", blurb: "Society, social change and research methods.", roles: "Field Researcher" },
      { name: "Psychology", blurb: "Foundations of human behaviour and applied psychology.", roles: "Psychology Assistant" },
      { name: "Journalism & Mass Communication", blurb: "News writing, media production and digital media.", roles: "Media Executive" },
    ],
    fees: [
      { university: "Amity University Online", path: "/universities/amity-online", totalFee: "₹1,00,000", perSemester: "₹16,667", naac: "A+" },
      { university: "Manipal University Jaipur (Online)", path: "/universities/manipal-online", totalFee: "₹90,000", perSemester: "₹15,000", naac: "A+" },
      { university: "Sikkim Manipal University", path: "/universities/sikkim-manipal-online", totalFee: "₹66,000", perSemester: "₹11,000", naac: "A" },
      { university: "DU SOL", path: "/universities/du-sol-online", totalFee: "₹26,000", perSemester: "₹4,333", naac: "A+" },
      { university: "IGNOU", path: "/universities/ignou-online", totalFee: "₹22,000", perSemester: "₹3,667", naac: "A++" },
    ],
    admissionSteps: STEPS_STANDARD,
    documents: DOCS_UG,
    salaries: [
      { role: "Content Writer", entry: "₹2.8 LPA", mid: "₹6 LPA", senior: "₹12 LPA" },
      { role: "Customer Success Executive", entry: "₹3 LPA", mid: "₹6.5 LPA", senior: "₹12 LPA" },
      { role: "Government clerical / SSC roles", entry: "₹3 LPA", mid: "₹5.5 LPA", senior: "₹9 LPA" },
    ],
    whoShouldApply: [
      "SSC, UPSC and state PSC aspirants who need graduation at low cost",
      "Working candidates completing an interrupted degree",
      "Students planning an MA, LLB or B.Ed later",
    ],
    faqs: [
      { question: "Is an online BA accepted for government jobs?", answer: "Yes. UGC-recognised online and open-learning BA degrees are treated as equivalent to regular degrees for government recruitment." },
      { question: "Which is cheaper, IGNOU BA or a private online BA?", answer: "IGNOU is the cheapest at roughly ₹22,000 total; private universities charge more but offer structured LMS, live classes and faster evaluation." },
    ],
  },
];

export const getCourseCluster = (key?: string): CourseCluster | undefined =>
  COURSE_CLUSTERS.find((c) => c.key === key);
