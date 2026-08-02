import React from "react";
import { Link } from "react-router-dom";
import AuthorityPage from "@/components/ui/authority-page";
import { COMPARE_UNIVERSITIES } from "@/data/comparison-universities";

const Row = ({ items }: { items: string[] }) => (
  <ul className="list-disc pl-5 space-y-1.5">
    {items.map((i) => (
      <li key={i}>{i}</li>
    ))}
  </ul>
);

const OnlineCoursesAdmissionProcess = () => (
  <AuthorityPage
    eyebrow="Admission guide 2026"
    h1="Online Course Admission Process in India (2026)"
    intro="Admission to a UGC-entitled online degree takes 20–30 minutes online and needs no entrance exam at most universities. Here is the exact sequence, the documents you must keep ready, what verification checks, and how long each stage takes."
    facts={[
      { label: "Entrance exam", value: "Not required" },
      { label: "Time to enrol", value: "2–7 days" },
      { label: "Sessions", value: "Jan & July" },
      { label: "Mode", value: "100% online" },
    ]}
    breadcrumbs={[
      { name: "Home", path: "/" },
      { name: "Universities", path: "/universities" },
      { name: "Admission process", path: "/online-courses-admission-process" },
    ]}
    sections={[
      {
        id: "steps",
        heading: "The 7 admission steps, in order",
        content: (
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <strong>Shortlist the university and programme.</strong> Confirm UGC entitlement for
              the exact programme (not just the university) on the DEB portal, then compare fees on{" "}
              <Link to="/comparison" className="text-primary underline">
                our comparison pages
              </Link>
              .
            </li>
            <li>
              <strong>Register.</strong> Create an account with your name as printed on your
              qualifying marksheet, plus a mobile number and email you will keep for 2–3 years.
            </li>
            <li>
              <strong>Fill the application form.</strong> Academic history, specialisation choice
              and, where relevant, your work experience and category (defence, divyangjan,
              government employee) for fee concessions.
            </li>
            <li>
              <strong>Upload documents.</strong> Clear scans under the stated size limit — blurred
              marksheets are the single biggest cause of verification delays.
            </li>
            <li>
              <strong>Pay the fee.</strong> Full year, semester-wise, or no-cost EMI. Always pay on
              the university's own payment gateway and download the receipt.
            </li>
            <li>
              <strong>Verification.</strong> The admission cell validates your eligibility, usually
              in 2–7 working days. You may be asked for a re-upload or a clarification.
            </li>
            <li>
              <strong>Enrolment ID and LMS access.</strong> On approval you receive an enrolment
              number and login for the learning portal. Save both; the enrolment ID is what you
              quote for every future request.
            </li>
          </ol>
        ),
      },
      {
        id: "documents",
        heading: "Documents required",
        content: (
          <>
            <p>Keep both a scan and a photo of each of these before you start:</p>
            <Row
              items={[
                "Class 10 marksheet (date of birth proof)",
                "Class 12 marksheet — required for UG programmes",
                "Graduation marksheets and degree/provisional certificate — required for PG programmes",
                "Government photo ID (Aadhaar, passport, voter ID or driving licence)",
                "Passport-size photograph on a plain background",
                "Signature on white paper",
                "Category or concession proof, if you are claiming one (defence service card, disability certificate, government employee ID)",
                "Migration or transfer certificate — asked for by some universities only",
              ]}
            />
          </>
        ),
      },
      {
        id: "eligibility",
        heading: "Eligibility at a glance",
        content: (
          <Row
            items={[
              "UG (BBA, BCA, BCom, BA): 10+2 pass from a recognised board. No minimum percentage at most universities.",
              "PG (MBA, MCA, MCom, MA): a bachelor's degree of minimum three years, typically with 50% aggregate (45% for reserved categories).",
              "MCA: mathematics at 10+2 or graduation level is required by some universities; bridge courses are offered where it is missing.",
              "Working professionals: work experience is never mandatory for online degrees, but it can win you a fee concession.",
            ]}
          />
        ),
      },
      {
        id: "timeline",
        heading: "Session dates and cut-offs",
        content: (
          <>
            <p>
              Indian online universities run two intakes. The January session normally closes in the
              last week of February, and the July session in the last week of August. Applying in
              the first four weeks of a window matters because:
            </p>
            <Row
              items={[
                "Early-bird scholarships and fee waivers are capped by seat count, not by date alone",
                "Specialisation seats (analytics, fintech, HR) close before general seats",
                "Late enrolment compresses your first-semester study time before internal assessments",
              ]}
            />
          </>
        ),
      },
      {
        id: "verify",
        heading: "How to verify a university before you pay",
        content: (
          <Row
            items={[
              "Check the DEB (Distance Education Bureau) list for the university AND the specific programme and academic session.",
              "Confirm the NAAC grade and its validity period — grades expire and are re-assessed.",
              "For technical programmes such as MCA, check AICTE approval.",
              "If you plan to study or work abroad, check WES recognition.",
              "Reject any agent who asks you to transfer fees to a personal account.",
            ]}
          />
        ),
      },
      {
        id: "universities",
        heading: "Universities currently accepting applications",
        content: (
          <div className="grid sm:grid-cols-2 gap-2">
            {COMPARE_UNIVERSITIES.map((u) => (
              <Link
                key={u.id}
                to={u.path}
                className="rounded-lg border border-border bg-card px-3 py-2 hover:border-primary/40 transition-colors"
              >
                <span className="font-medium text-foreground">{u.shortName}</span>
                <span className="block text-xs text-muted-foreground">
                  {u.naac} • from {u.feePerYear}/year
                </span>
              </Link>
            ))}
          </div>
        ),
      },
    ]}
    faqs={[
      {
        question: "Is there an entrance exam for online degree admission in India?",
        answer:
          "No. Almost every UGC-entitled online university admits students on the basis of qualifying marks alone. A few premium institutes run an internal aptitude test, but no national exam such as CAT or CUET is needed.",
      },
      {
        question: "How long does online admission take?",
        answer:
          "Filling the form takes 20–30 minutes. Document verification and enrolment ID generation typically take 2–7 working days after fee payment.",
      },
      {
        question: "Can I apply without my final-year graduation result?",
        answer:
          "Many universities allow provisional admission with a result-awaited declaration, but you must submit the final marksheet before the first-semester exams or the admission lapses.",
      },
      {
        question: "Is an online degree valid for government jobs and higher study?",
        answer:
          "Yes, provided the university is UGC-entitled for that programme and session. UGC treats such online degrees as equivalent to regular degrees for employment and further education.",
      },
      {
        question: "Can I change my specialisation after admission?",
        answer:
          "Most universities allow one specialisation change before the second semester, sometimes with a small administrative fee. Confirm the policy in writing before you pay.",
      },
    ]}
    pageType="hub"
  />
);

export default OnlineCoursesAdmissionProcess;
