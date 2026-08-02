import React from "react";
import { Link } from "react-router-dom";
import AuthorityPage from "@/components/ui/authority-page";
import { COMPARE_UNIVERSITIES } from "@/data/comparison-universities";

const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;

const OnlineMBAFees = () => (
  <AuthorityPage
    eyebrow="Fee comparison 2026"
    h1="Online MBA Fees in India 2026 — University-wise Comparison"
    intro="Online MBA fees in India range from about ₹62,000 for the full programme at IGNOU to ₹1.7 lakh at premium private universities. This page compares total cost, per-semester outflow, EMI options, scholarships and the charges universities do not advertise."
    facts={[
      { label: "Lowest total", value: "₹62,000" },
      { label: "Typical total", value: "₹1.0–1.5 L" },
      { label: "EMI from", value: "₹4,000/month" },
      { label: "Duration", value: "2 years" },
    ]}
    breadcrumbs={[
      { name: "Home", path: "/" },
      { name: "Online MBA", path: "/courses/mba" },
      { name: "Fees", path: "/online-mba-fees" },
    ]}
    sections={[
      {
        id: "table",
        heading: "University-wise online MBA fees",
        content: (
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-xs md:text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left p-2 md:p-3 font-semibold">University</th>
                  <th className="text-left p-2 md:p-3 font-semibold">Per year</th>
                  <th className="text-left p-2 md:p-3 font-semibold">Per semester</th>
                  <th className="text-left p-2 md:p-3 font-semibold">2-year total</th>
                  <th className="text-left p-2 md:p-3 font-semibold">NAAC</th>
                  <th className="text-left p-2 md:p-3 font-semibold">EMI</th>
                </tr>
              </thead>
              <tbody>
                {[...COMPARE_UNIVERSITIES]
                  .sort((a, b) => a.feeValue - b.feeValue)
                  .map((u) => (
                    <tr key={u.id} className="border-t border-border">
                      <td className="p-2 md:p-3">
                        <Link to={u.path} className="text-primary underline">
                          {u.shortName}
                        </Link>
                      </td>
                      <td className="p-2 md:p-3">{u.feePerYear}</td>
                      <td className="p-2 md:p-3">{inr(Math.round(u.feeValue / 2))}</td>
                      <td className="p-2 md:p-3 font-medium text-foreground">
                        {inr(u.feeValue * 2)}
                      </td>
                      <td className="p-2 md:p-3">{u.naac}</td>
                      <td className="p-2 md:p-3">{u.emi ? "Yes" : "No"}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <p className="p-3 text-xs text-muted-foreground">
              Indicative figures for the 2026 sessions, excluding one-time registration and
              examination charges. Confirm the current fee with the university or an AVEDU counsellor
              before paying.
            </p>
          </div>
        ),
      },
      {
        id: "cheapest",
        heading: "Cheapest vs best-value options",
        content: (
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <strong>Cheapest overall:</strong> IGNOU, at roughly ₹62,000 for two years — the right
              call if your goal is a recognised degree for a government job or eligibility.
            </li>
            <li>
              <strong>Best value under ₹1 lakh:</strong> VGU and SMU keep total cost near ₹80,000
              while remaining UGC-entitled with online proctored exams.
            </li>
            <li>
              <strong>Best value with placement support:</strong> LPU (NAAC A++) and Jain (NAAC A++)
              sit in the middle of the range but include career services.
            </li>
            <li>
              <strong>Premium:</strong> Manipal and Amity cost the most and justify it through
              recruiter reach, WES recognition and brand recall.
            </li>
          </ul>
        ),
      },
      {
        id: "hidden",
        heading: "Charges to check before you pay",
        content: (
          <ul className="list-disc pl-5 space-y-1.5">
            <li>One-time registration or admission processing fee (₹1,000–₹5,000).</li>
            <li>Examination fee per semester, sometimes billed separately from tuition.</li>
            <li>Re-appear or backlog exam fee per subject.</li>
            <li>Convocation and degree dispatch charges in the final semester.</li>
            <li>EMI processing fee if the plan is not genuinely no-cost.</li>
            <li>Specialisation-change fee if you switch after semester 1.</li>
          </ul>
        ),
      },
      {
        id: "emi",
        heading: "EMI and payment options",
        content: (
          <>
            <p>
              Every private university in this comparison offers semester-wise payment, and most run
              no-cost EMI through a lending partner. A ₹1.2 lakh programme typically works out to
              about ₹5,000 per month over 24 months.
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Semester-wise payment is the safest default — you commit ₹25,000–₹40,000 at a time.</li>
              <li>Annual payment often carries a 2–5% discount.</li>
              <li>Check whether the EMI is university-funded (no cost) or a bank loan with interest.</li>
              <li>Keep every receipt; you will need them for employer reimbursement and 80E claims.</li>
            </ul>
          </>
        ),
      },
      {
        id: "scholarships",
        heading: "Reducing the fee",
        content: (
          <p>
            Merit, defence, divyangjan, government-employee and single-girl-child concessions can cut
            10–30% off the tuition. Eligibility and amounts are listed on our{" "}
            <Link to="/scholarships" className="text-primary underline">
              online degree scholarships page
            </Link>
            . Apply in the same window as your admission — most waivers cannot be added
            retrospectively.
          </p>
        ),
      },
    ]}
    faqs={[
      {
        question: "Which university has the cheapest online MBA in India?",
        answer:
          "IGNOU, at approximately ₹62,000 for the complete two-year programme. Among private universities, VGU and SMU are the most affordable at roughly ₹80,000 in total.",
      },
      {
        question: "Can I pay online MBA fees in monthly instalments?",
        answer:
          "Yes. Most private online universities offer no-cost EMI over 12 or 24 months, typically from around ₹4,000–₹6,000 per month.",
      },
      {
        question: "Are examination fees included in the tuition fee?",
        answer:
          "Not always. Several universities bill the examination fee per semester separately, so ask for the full fee schedule in writing.",
      },
      {
        question: "Do online MBA fees qualify for a tax deduction?",
        answer:
          "Interest on an education loan taken for the programme is deductible under Section 80E. Tuition itself is not deductible for self-education.",
      },
      {
        question: "Is a more expensive online MBA better?",
        answer:
          "Only if you will use what you are paying for — recruiter access, alumni network and international recognition. For eligibility or a promotion, a lower-cost UGC-entitled degree delivers the same legal standing.",
      },
    ]}
    pageType="course"
  />
);

export default OnlineMBAFees;
