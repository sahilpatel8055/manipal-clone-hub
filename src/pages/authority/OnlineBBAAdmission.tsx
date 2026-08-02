import React from "react";
import { Link } from "react-router-dom";
import AuthorityPage from "@/components/ui/authority-page";
import { COMPARE_UNIVERSITIES } from "@/data/comparison-universities";

const OnlineBBAAdmission = () => (
  <AuthorityPage
    eyebrow="BBA admission 2026"
    h1="Online BBA Admission 2026 — Eligibility, Dates and Fees"
    intro="An online BBA is a three-year UGC-entitled management degree open to anyone who has cleared 10+2, with no entrance exam and no minimum percentage at most universities. Here is what admission takes, what it costs, and which universities are open right now."
    facts={[
      { label: "Eligibility", value: "10+2 pass" },
      { label: "Duration", value: "3 years / 6 sem" },
      { label: "Fees from", value: "₹35,000/year" },
      { label: "Intakes", value: "January & July" },
    ]}
    breadcrumbs={[
      { name: "Home", path: "/" },
      { name: "Online BBA", path: "/courses/bba" },
      { name: "Admission", path: "/online-bba-admission" },
    ]}
    sections={[
      {
        id: "eligibility",
        heading: "Eligibility after 12th",
        content: (
          <ul className="list-disc pl-5 space-y-1.5">
            <li>10+2 from any recognised board, in any stream — commerce is not compulsory.</li>
            <li>No minimum aggregate at most private online universities; IGNOU has none either.</li>
            <li>Open-school (NIOS) and diploma-holder candidates are accepted.</li>
            <li>No upper age limit, so working candidates completing a degree late are eligible.</li>
          </ul>
        ),
      },
      {
        id: "steps",
        heading: "Step-by-step admission",
        content: (
          <ol className="list-decimal pl-5 space-y-2">
            <li>Pick the university and, if offered, the BBA specialisation.</li>
            <li>Register with your name exactly as on the Class 12 marksheet.</li>
            <li>Upload Class 10 and Class 12 marksheets, ID, photo and signature.</li>
            <li>Pay semester-1 fees or set up no-cost EMI.</li>
            <li>Receive your enrolment ID and LMS credentials in 2–7 working days.</li>
          </ol>
        ),
      },
      {
        id: "specialisations",
        heading: "Specialisations worth choosing",
        content: (
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <strong>Marketing</strong> — widest entry-level hiring, and the easiest to pair with a
              digital-marketing certification.
            </li>
            <li>
              <strong>Finance</strong> — the natural route into an MBA Finance or CFA path.
            </li>
            <li>
              <strong>Human resource management</strong> — steady demand in IT services and BPO.
            </li>
            <li>
              <strong>Business analytics</strong> — highest starting salaries, but expect to
              self-learn Excel, SQL and Power BI alongside.
            </li>
            <li>
              <strong>International business</strong> — pick it only if you have a specific export,
              logistics or overseas plan.
            </li>
          </ul>
        ),
      },
      {
        id: "fees",
        heading: "University-wise BBA fees",
        content: (
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-xs md:text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left p-2 md:p-3 font-semibold">University</th>
                  <th className="text-left p-2 md:p-3 font-semibold">NAAC</th>
                  <th className="text-left p-2 md:p-3 font-semibold">Indicative fee / year</th>
                  <th className="text-left p-2 md:p-3 font-semibold">EMI</th>
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
                    <td className="p-2 md:p-3">{u.emi ? "Yes" : "No"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="p-3 text-xs text-muted-foreground">
              UG fees are usually lower than the PG figures shown for the same university. Confirm
              the exact BBA fee with a counsellor before paying.
            </p>
          </div>
        ),
      },
      {
        id: "after-bba",
        heading: "What you can do after an online BBA",
        content: (
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <Link to="/courses/mba" className="text-primary underline">
                Online MBA
              </Link>{" "}
              — the most common next step, and an online BBA is accepted for admission.
            </li>
            <li>Entry-level roles in sales, operations, HR coordination and business support.</li>
            <li>Professional courses: CA foundation route, CFA level 1, digital marketing certifications.</li>
            <li>Government exams that require any graduate degree.</li>
          </ul>
        ),
      },
    ]}
    faqs={[
      {
        question: "Can I take admission in an online BBA without maths in 12th?",
        answer:
          "Yes. BBA has no subject restriction — arts, commerce and science students are all eligible.",
      },
      {
        question: "Is an online BBA accepted for an MBA later?",
        answer:
          "Yes, provided the BBA is from a UGC-entitled university. It is treated as a regular three-year bachelor's degree.",
      },
      {
        question: "What is the total cost of an online BBA?",
        answer:
          "Roughly ₹45,000 at IGNOU to about ₹1.6 lakh at premium private universities for all three years, usually payable semester-wise.",
      },
      {
        question: "Do online BBA students get placement support?",
        answer:
          "Private universities such as Manipal, LPU, Amity and Jain extend their career-services teams to online learners. IGNOU does not run a placement cell for ODL students.",
      },
      {
        question: "How long does BBA admission take to confirm?",
        answer:
          "Two to seven working days after fee payment, assuming your uploaded documents are legible and your name matches across them.",
      },
    ]}
    pageType="course"
  />
);

export default OnlineBBAAdmission;
