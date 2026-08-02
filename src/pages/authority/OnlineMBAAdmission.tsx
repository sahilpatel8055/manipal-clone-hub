import React from "react";
import { Link } from "react-router-dom";
import AuthorityPage from "@/components/ui/authority-page";
import { COMPARE_UNIVERSITIES } from "@/data/comparison-universities";
import { courseSchema } from "@/lib/seo/schema";

const OnlineMBAAdmission = () => (
  <AuthorityPage
    eyebrow="MBA admission 2026"
    h1="Online MBA Admission 2026 — Dates, Documents and Step-by-Step Process"
    intro="Online MBA admission in India runs on two intakes, needs no CAT or MAT score at most universities, and is confirmed within a week of fee payment. This guide covers eligibility, the document checklist, university-wise steps and the dates you should not miss."
    facts={[
      { label: "Intakes", value: "January & July" },
      { label: "Entrance test", value: "Usually waived" },
      { label: "Duration", value: "2 years / 4 sem" },
      { label: "Fees from", value: "₹31,000/year" },
    ]}
    breadcrumbs={[
      { name: "Home", path: "/" },
      { name: "Online MBA", path: "/courses/mba" },
      { name: "Admission", path: "/online-mba-admission" },
    ]}
    structuredData={courseSchema({
      name: "Online MBA",
      path: "/online-mba-admission",
      description:
        "Two-year UGC-entitled online MBA offered by Indian universities, with specialisations in marketing, finance, HR, operations and business analytics.",
      durationISO: "P2Y",
      mode: "online",
      educationalLevel: "Postgraduate",
    })}
    sections={[
      {
        id: "eligibility",
        heading: "Who is eligible",
        content: (
          <ul className="list-disc pl-5 space-y-1.5">
            <li>A bachelor's degree of at least three years from a recognised university.</li>
            <li>
              Typically 50% aggregate in graduation (45% for SC/ST/OBC at most universities).
            </li>
            <li>
              No work experience requirement — but 2+ years of experience can qualify you for a
              professional fee concession.
            </li>
            <li>
              Final-year students can apply provisionally and submit the marksheet before semester-1
              exams.
            </li>
            <li>
              Full criteria, including entrance waivers, are on our{" "}
              <Link to="/online-mba-eligibility" className="text-primary underline">
                online MBA eligibility page
              </Link>
              .
            </li>
          </ul>
        ),
      },
      {
        id: "steps",
        heading: "Admission steps",
        content: (
          <ol className="list-decimal pl-5 space-y-2">
            <li>Shortlist 2–3 universities on fee, NAAC grade and specialisation availability.</li>
            <li>Register on the university portal with your name as on the degree certificate.</li>
            <li>Fill the application: academic history, specialisation, category, work experience.</li>
            <li>Upload scans of 10th, 12th, graduation marksheets, degree, ID and photograph.</li>
            <li>Pay semester-1 fees, full fees, or opt for no-cost EMI.</li>
            <li>Wait 2–7 working days for verification and your enrolment ID.</li>
            <li>Log into the LMS, download semester-1 material and note the internal assessment dates.</li>
          </ol>
        ),
      },
      {
        id: "documents",
        heading: "Document checklist",
        content: (
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Class 10 and Class 12 marksheets</li>
            <li>All graduation marksheets plus degree or provisional certificate</li>
            <li>Government photo ID</li>
            <li>Passport-size photograph and signature scan</li>
            <li>Experience letter, if claiming a professional concession</li>
            <li>Category or defence/divyangjan proof, if claiming a scholarship</li>
          </ul>
        ),
      },
      {
        id: "university-wise",
        heading: "University-wise admission snapshot",
        content: (
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-xs md:text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left p-2 md:p-3 font-semibold">University</th>
                  <th className="text-left p-2 md:p-3 font-semibold">NAAC</th>
                  <th className="text-left p-2 md:p-3 font-semibold">Fee / year</th>
                  <th className="text-left p-2 md:p-3 font-semibold">Exam mode</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE_UNIVERSITIES.map((u) => (
                  <tr key={u.id} className="border-t border-border">
                    <td className="p-2 md:p-3">
                      <Link to={u.path} className="text-primary underline">
                        {u.shortName}
                      </Link>
                    </td>
                    <td className="p-2 md:p-3">{u.naac}</td>
                    <td className="p-2 md:p-3">{u.feePerYear}</td>
                    <td className="p-2 md:p-3">{u.examMode}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ),
      },
      {
        id: "dates",
        heading: "Last dates to remember",
        content: (
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <strong>January session:</strong> applications open in November, close in the last week
              of February; classes begin mid-January to early February.
            </li>
            <li>
              <strong>July session:</strong> applications open in May, close in the last week of
              August; classes begin late July.
            </li>
            <li>
              Scholarship and early-bird windows close 3–4 weeks before the general last date.
            </li>
          </ul>
        ),
      },
      {
        id: "mistakes",
        heading: "Mistakes that delay admission",
        content: (
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Name mismatch between the application and the graduation marksheet.</li>
            <li>Uploading photographs of documents at an angle, or over the size limit.</li>
            <li>Paying an agent instead of the university's own gateway.</li>
            <li>Choosing a specialisation without checking whether it is offered in that session.</li>
            <li>Missing the fee deadline and losing the scholarship you were approved for.</li>
          </ul>
        ),
      },
    ]}
    faqs={[
      {
        question: "Do I need CAT or MAT for an online MBA?",
        answer:
          "No. UGC-entitled online MBA programmes admit on graduation marks. A national entrance score is not required, though a few universities run a short internal aptitude test.",
      },
      {
        question: "What is the last date for online MBA admission 2026?",
        answer:
          "The January intake typically closes at the end of February and the July intake at the end of August. Exact dates vary by university, so confirm on the university page before you apply.",
      },
      {
        question: "Is an online MBA valid for a promotion or a government job?",
        answer:
          "Yes. A UGC-entitled online MBA holds the same status as a regular MBA for employment, promotions and further study.",
      },
      {
        question: "Can I do an online MBA immediately after graduation?",
        answer:
          "Yes, work experience is not mandatory. Freshers form a large share of online MBA enrolments.",
      },
      {
        question: "How much does an online MBA cost in total?",
        answer:
          "Between roughly ₹62,000 at IGNOU and ₹1.7 lakh at premium private universities for the full two years. See our fee comparison page for a university-wise breakdown.",
      },
    ]}
    pageType="course"
  />
);

export default OnlineMBAAdmission;
