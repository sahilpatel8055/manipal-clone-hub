import React from "react";
import { Link } from "react-router-dom";
import AuthorityPage from "@/components/ui/authority-page";

const Scholarships = () => (
  <AuthorityPage
    eyebrow="Scholarships 2026"
    h1="Scholarships & Fee Waivers for Online Degrees in India (2026)"
    intro="Most UGC-entitled online universities in India offer a 10–30% fee concession under merit, defence, divyangjan, government-employee and single-girl-child categories. This page lists who qualifies, how much you can save, and when to apply so the waiver is not lost."
    facts={[
      { label: "Typical waiver", value: "10–30%" },
      { label: "Apply with", value: "Admission form" },
      { label: "Proof needed", value: "Yes" },
      { label: "Retrospective", value: "Rarely allowed" },
    ]}
    breadcrumbs={[
      { name: "Home", path: "/" },
      { name: "Courses", path: "/courses" },
      { name: "Scholarships", path: "/scholarships" },
    ]}
    sections={[
      {
        id: "categories",
        heading: "Scholarship categories and typical amounts",
        content: (
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-xs md:text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left p-2 md:p-3 font-semibold">Category</th>
                  <th className="text-left p-2 md:p-3 font-semibold">Who qualifies</th>
                  <th className="text-left p-2 md:p-3 font-semibold">Typical waiver</th>
                  <th className="text-left p-2 md:p-3 font-semibold">Proof</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Merit", "60%+ in the qualifying exam (higher slabs above 75%)", "10–25%", "Marksheet"],
                  ["Defence", "Serving or retired armed forces personnel and dependants", "20–30%", "Service card / discharge book"],
                  ["Divyangjan", "40% or more benchmark disability", "20–30%", "Disability certificate"],
                  ["Government employee", "Central, state or PSU employees", "10–20%", "Employee ID / letter"],
                  ["Single girl child", "Only child of the family, female candidate", "10–20%", "Affidavit / declaration"],
                  ["Alumni", "Prior degree from the same university", "10%", "Enrolment number"],
                  ["Early bird", "Admission within the first weeks of the intake", "5–15%", "Automatic"],
                  ["Group / corporate", "3+ employees from one organisation", "10–20%", "HR letter"],
                ].map((row) => (
                  <tr key={row[0]} className="border-t border-border">
                    <td className="p-2 md:p-3 font-medium text-foreground">{row[0]}</td>
                    <td className="p-2 md:p-3">{row[1]}</td>
                    <td className="p-2 md:p-3">{row[2]}</td>
                    <td className="p-2 md:p-3">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="p-3 text-xs text-muted-foreground">
              Indicative ranges across Manipal, Amity, LPU, Jain, SMU, Uttaranchal and VGU for the
              2026 sessions. Slabs and caps are revised every intake.
            </p>
          </div>
        ),
      },
      {
        id: "government",
        heading: "Government schemes you can combine",
        content: (
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <strong>National Scholarship Portal (NSP):</strong> central and state schemes for
              minority, SC/ST/OBC and merit candidates. Apply on scholarships.gov.in in the same
              academic year.
            </li>
            <li>
              <strong>State post-matric scholarships:</strong> most states cover distance and online
              learners; check your state's social-welfare portal.
            </li>
            <li>
              <strong>Vidya Lakshmi education loans:</strong> useful when the university does not offer
              no-cost EMI; interest qualifies for the Section 80E deduction.
            </li>
            <li>
              <strong>Employer reimbursement:</strong> many IT and BFSI employers fund 50–100% of an
              online degree against a service commitment. Ask HR before you pay.
            </li>
          </ul>
        ),
      },
      {
        id: "how-to-apply",
        heading: "How to claim a waiver correctly",
        content: (
          <ol className="list-decimal pl-5 space-y-2">
            <li>Select the category on the admission form itself, before payment.</li>
            <li>Upload the supporting document at the same time — not after verification.</li>
            <li>Ask for the revised fee schedule in writing before you transfer any money.</li>
            <li>
              Confirm whether the waiver applies to every semester or only the first — this is the most
              common misunderstanding.
            </li>
            <li>Keep the approval email; you will need it if the semester-2 invoice ignores the waiver.</li>
          </ol>
        ),
      },
      {
        id: "stacking",
        heading: "Can you stack two concessions?",
        content: (
          <p>
            Usually no. University waivers are applied on a "highest single benefit" basis, so a
            defence concession and a merit concession will not add up. A university waiver plus an
            external government scholarship (NSP or a state scheme) generally can be combined, because
            the funding sources are different. Get this confirmed in writing.
          </p>
        ),
      },
      {
        id: "next",
        heading: "Pick the programme first, then the waiver",
        content: (
          <p>
            A 20% waiver on an expensive programme can still cost more than a cheaper university with
            no waiver at all. Compare the net payable amount using our{" "}
            <Link to="/online-mba-fees" className="text-primary underline">
              online MBA fee comparison
            </Link>{" "}
            and the{" "}
            <Link to="/comparison" className="text-primary underline">
              university comparison
            </Link>{" "}
            before you commit.
          </p>
        ),
      },
    ]}
    faqs={[
      {
        question: "Are scholarships available for online degrees in India?",
        answer:
          "Yes. Most UGC-entitled online universities offer merit, defence, divyangjan, government-employee and single-girl-child concessions worth 10–30% of tuition, and central or state scholarships can apply on top.",
      },
      {
        question: "Can I apply for a scholarship after paying my fees?",
        answer:
          "Rarely. Almost all university waivers must be claimed on the admission form before payment; retrospective adjustments are at the university's discretion.",
      },
      {
        question: "Do defence personnel get a fee concession for online degrees?",
        answer:
          "Yes, typically 20–30% for serving and retired armed forces personnel and their dependants, against a service card or discharge book.",
      },
      {
        question: "Is an education loan available for an online degree?",
        answer:
          "Yes, for UGC-entitled programmes. Many universities also run no-cost EMI, which is usually cheaper than a bank loan.",
      },
      {
        question: "Do scholarships apply to every semester?",
        answer:
          "Not always. Some are one-time first-semester concessions while others run for the full programme, sometimes subject to maintaining a minimum grade. Confirm this in writing.",
      },
    ]}
    pageType="hub"
  />
);

export default Scholarships;
