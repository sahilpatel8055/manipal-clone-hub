import React from "react";
import { Link } from "react-router-dom";
import AuthorityPage from "@/components/ui/authority-page";
import { COMPARE_UNIVERSITIES } from "@/data/comparison-universities";

const OnlineMBAEligibility = () => (
  <AuthorityPage
    eyebrow="Eligibility 2026"
    h1="Online MBA Eligibility Criteria 2026 — Marks, Experience and Entrance"
    intro="You need a three-year bachelor's degree with about 50% aggregate to join an online MBA in India. No CAT, MAT or XAT score is required at UGC-entitled universities. This page sets out the exact criteria, relaxations, and the edge cases that get applications rejected."
    facts={[
      { label: "Minimum degree", value: "3-year bachelor's" },
      { label: "Typical marks", value: "50% aggregate" },
      { label: "Entrance exam", value: "Not required" },
      { label: "Work experience", value: "Optional" },
    ]}
    breadcrumbs={[
      { name: "Home", path: "/" },
      { name: "Online MBA", path: "/courses/mba" },
      { name: "Eligibility", path: "/online-mba-eligibility" },
    ]}
    sections={[
      {
        id: "core",
        heading: "Core eligibility criteria",
        content: (
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <strong>Degree:</strong> a bachelor's degree of minimum three years from a UGC-recognised
              university, in any stream.
            </li>
            <li>
              <strong>Marks:</strong> 50% aggregate is the common bar; 45% for SC/ST/OBC candidates at
              most universities. IGNOU sets no minimum percentage.
            </li>
            <li>
              <strong>Entrance exam:</strong> not required. Universities admit on graduation marks;
              some run a short internal aptitude test that is waived for candidates with a valid
              CAT/MAT/CMAT score or two years of work experience.
            </li>
            <li>
              <strong>Age:</strong> no upper or lower age limit.
            </li>
            <li>
              <strong>Work experience:</strong> never mandatory. Where it exists, it can unlock a fee
              concession or an entrance waiver.
            </li>
          </ul>
        ),
      },
      {
        id: "relaxations",
        heading: "Relaxations and special cases",
        content: (
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <strong>Reserved categories:</strong> 5% relaxation in the aggregate requirement at most
              private universities.
            </li>
            <li>
              <strong>Defence personnel and dependants:</strong> relaxed marks plus a fee concession at
              Manipal, Amity, LPU and Jain.
            </li>
            <li>
              <strong>Divyangjan candidates:</strong> relaxed criteria and dedicated fee waivers.
            </li>
            <li>
              <strong>Three-year diploma holders:</strong> eligible only if the diploma is followed by
              a recognised bachelor's degree — a diploma alone is not enough.
            </li>
            <li>
              <strong>Open-university graduates:</strong> fully eligible when the degree is UGC-entitled
              (IGNOU, DU SOL, state open universities).
            </li>
          </ul>
        ),
      },
      {
        id: "rejections",
        heading: "Why applications get rejected",
        content: (
          <ul className="list-disc pl-5 space-y-1.5">
            <li>A two-year bachelor's degree from an older curriculum, without a bridge qualification.</li>
            <li>A degree from an institution not in the UGC list, or from an unrecognised foreign body.</li>
            <li>Aggregate calculated on best-of subjects instead of the full course, falling under 50%.</li>
            <li>Name mismatch between marksheets, ID and application form.</li>
            <li>Result-awaited candidates who never submit the final marksheet before semester-1 exams.</li>
          </ul>
        ),
      },
      {
        id: "university-wise",
        heading: "University-wise criteria",
        content: (
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-xs md:text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left p-2 md:p-3 font-semibold">University</th>
                  <th className="text-left p-2 md:p-3 font-semibold">Minimum marks</th>
                  <th className="text-left p-2 md:p-3 font-semibold">Entrance</th>
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
                    <td className="p-2 md:p-3">
                      {u.id === "ignou" ? "No minimum" : "50% (45% reserved)"}
                    </td>
                    <td className="p-2 md:p-3">
                      {u.id === "ignou" ? "Not required" : "Waived / internal test"}
                    </td>
                    <td className="p-2 md:p-3">{u.examMode}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ),
      },
      {
        id: "next",
        heading: "You are eligible — what next",
        content: (
          <p>
            Move straight to the{" "}
            <Link to="/online-mba-admission" className="text-primary underline">
              admission process
            </Link>{" "}
            and check the{" "}
            <Link to="/online-mba-fees" className="text-primary underline">
              fee comparison
            </Link>{" "}
            before you shortlist. If your marks sit near the cut-off, speak to a counsellor first —
            two of the universities above assess borderline cases individually.
          </p>
        ),
      },
    ]}
    faqs={[
      {
        question: "Can I do an online MBA with less than 50% in graduation?",
        answer:
          "Yes at IGNOU, which has no minimum percentage, and at some private universities that assess borderline cases individually or accept work experience in lieu of marks.",
      },
      {
        question: "Is CAT required for an online MBA?",
        answer:
          "No. Online MBA admission in India is based on graduation marks; CAT, MAT and XAT scores are optional and mainly used to waive an internal aptitude test.",
      },
      {
        question: "Am I eligible with a BA or BCom degree?",
        answer:
          "Yes. Any three-year bachelor's degree in any stream qualifies you for an online MBA.",
      },
      {
        question: "Can final-year students apply?",
        answer:
          "Yes, provisionally. You must submit the final marksheet before the first-semester examinations or the admission is cancelled.",
      },
      {
        question: "Do I need work experience for an online MBA?",
        answer:
          "No. Work experience is optional and only matters for fee concessions, entrance waivers or executive-format programmes.",
      },
    ]}
    pageType="course"
  />
);

export default OnlineMBAEligibility;
