import React from "react";
import { Link, useParams } from "react-router-dom";
import { Check, X } from "lucide-react";
import AuthorityPage from "@/components/ui/authority-page";
import NotFound from "@/pages/NotFound";
import {
  COMPARE_PAIRS,
  CompareUniversity,
  getComparePair,
} from "@/data/comparison-universities";

const Bool = ({ value }: { value: boolean }) =>
  value ? (
    <span className="inline-flex items-center gap-1 text-green-600">
      <Check className="h-4 w-4" /> Yes
    </span>
  ) : (
    <span className="inline-flex items-center gap-1 text-muted-foreground">
      <X className="h-4 w-4" /> No
    </span>
  );

const ComparisonTable = ({ a, b }: { a: CompareUniversity; b: CompareUniversity }) => {
  const rows: { label: string; a: React.ReactNode; b: React.ReactNode }[] = [
    { label: "Established", a: a.established, b: b.established },
    { label: "Location", a: a.location, b: b.location },
    { label: "NAAC grade", a: a.naac, b: b.naac },
    { label: "Approvals", a: a.approvals.join(", "), b: b.approvals.join(", ") },
    { label: "Indicative fee / year", a: a.feePerYear, b: b.feePerYear },
    { label: "No-cost EMI", a: <Bool value={a.emi} />, b: <Bool value={b.emi} /> },
    { label: "Examination mode", a: a.examMode, b: b.examMode },
    { label: "UG programmes", a: String(a.ugPrograms), b: String(b.ugPrograms) },
    { label: "PG programmes", a: String(a.pgPrograms), b: String(b.pgPrograms) },
    { label: "Placement support", a: a.placementSupport, b: b.placementSupport },
    { label: "Student rating", a: `${a.rating} / 5`, b: `${b.rating} / 5` },
    { label: "Best for", a: a.bestFor, b: b.bestFor },
  ];

  return (
    <div className="overflow-x-auto rounded-xl border border-border">
      <table className="w-full text-xs md:text-sm">
        <thead className="bg-muted">
          <tr>
            <th className="text-left p-2 md:p-3 font-semibold">Parameter</th>
            <th className="text-left p-2 md:p-3 font-semibold">{a.shortName}</th>
            <th className="text-left p-2 md:p-3 font-semibold">{b.shortName}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.label} className="border-t border-border">
              <td className="p-2 md:p-3 font-medium text-foreground whitespace-nowrap">{r.label}</td>
              <td className="p-2 md:p-3">{r.a}</td>
              <td className="p-2 md:p-3">{r.b}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const UniversityVsPage = () => {
  const { slug } = useParams();
  const pair = getComparePair(slug);

  if (!pair) return <NotFound />;

  const { a, b } = pair;
  const cheaper = a.feeValue <= b.feeValue ? a : b;
  const costlier = cheaper.id === a.id ? b : a;
  const feeGap = Math.abs(a.feeValue - b.feeValue) * 2;

  const related = COMPARE_PAIRS.filter(
    (p) => p.slug !== pair.slug && (p.a.id === a.id || p.b.id === a.id || p.a.id === b.id || p.b.id === b.id),
  ).slice(0, 8);

  return (
    <AuthorityPage
      eyebrow="University comparison 2026"
      h1={`${a.shortName} vs ${b.shortName} Online — Fees, NAAC, Placements Compared`}
      intro={`${a.name} and ${b.name} are both UGC-entitled online universities, but they suit different students. This side-by-side comparison covers fees, accreditation, examination mode, programme range and placement support so you can pick on evidence rather than advertising.`}
      facts={[
        { label: `${a.shortName} fee/yr`, value: a.feePerYear },
        { label: `${b.shortName} fee/yr`, value: b.feePerYear },
        { label: "NAAC", value: `${a.naac} vs ${b.naac}` },
        { label: "Lower cost", value: cheaper.shortName },
      ]}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Compare universities", path: "/comparison" },
        { name: `${a.shortName} vs ${b.shortName}`, path: `/compare/${pair.slug}` },
      ]}
      sections={[
        {
          id: "table",
          heading: `${a.shortName} vs ${b.shortName}: side-by-side`,
          content: <ComparisonTable a={a} b={b} />,
        },
        {
          id: "fees",
          heading: "Fee difference over the full programme",
          content: (
            <p>
              {cheaper.shortName} is the cheaper option at {cheaper.feePerYear} per year against{" "}
              {costlier.feePerYear} for {costlier.shortName} — a difference of roughly ₹
              {feeGap.toLocaleString("en-IN")} across a two-year PG programme. Whether that gap is
              worth paying depends on placement support and brand reach:{" "}
              {costlier.placementSupport.toLowerCase()}. See the{" "}
              <Link to="/online-mba-fees" className="text-primary underline">
                full fee comparison
              </Link>{" "}
              and the{" "}
              <Link to="/scholarships" className="text-primary underline">
                available waivers
              </Link>{" "}
              before deciding.
            </p>
          ),
        },
        {
          id: "strengths",
          heading: "Where each university wins",
          content: (
            <div className="grid md:grid-cols-2 gap-4">
              {[a, b].map((u) => (
                <div key={u.id} className="rounded-xl border border-border bg-card p-4">
                  <h3 className="font-semibold text-foreground mb-2">{u.shortName}</h3>
                  <ul className="list-disc pl-5 space-y-1.5">
                    {u.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                  <Link
                    to={u.path}
                    className="inline-block mt-3 text-sm text-primary underline"
                  >
                    Full {u.shortName} review
                  </Link>
                </div>
              ))}
            </div>
          ),
        },
        {
          id: "verdict",
          heading: "Which one should you choose?",
          content: (
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                <strong>Choose {a.shortName}</strong> if your priority is {a.bestFor.toLowerCase()}.
              </li>
              <li>
                <strong>Choose {b.shortName}</strong> if your priority is {b.bestFor.toLowerCase()}.
              </li>
              <li>
                <strong>On budget alone</strong>, {cheaper.shortName} costs less over the full
                programme.
              </li>
              <li>
                <strong>On accreditation alone</strong>,{" "}
                {a.naac === b.naac
                  ? `both hold NAAC ${a.naac}, so use fees and placement support as the tie-breaker`
                  : `${(a.naac > b.naac ? a : b).shortName} holds the higher NAAC grade (${
                      a.naac > b.naac ? a.naac : b.naac
                    })`}
                .
              </li>
              <li>
                Both degrees carry identical legal standing for jobs and higher study as long as the
                programme is UGC-entitled for your admission session.
              </li>
            </ul>
          ),
        },
        {
          id: "related",
          heading: "Other comparisons",
          content: (
            <div className="grid sm:grid-cols-2 gap-2">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to={`/compare/${p.slug}`}
                  className="rounded-lg border border-border bg-card px-3 py-2 text-foreground hover:border-primary/40 transition-colors"
                >
                  {p.a.shortName} vs {p.b.shortName}
                </Link>
              ))}
            </div>
          ),
        },
      ]}
      faqs={[
        {
          question: `Is ${a.shortName} better than ${b.shortName} for an online degree?`,
          answer: `Neither is universally better. ${a.shortName} is stronger for ${a.bestFor.toLowerCase()}, while ${b.shortName} is stronger for ${b.bestFor.toLowerCase()}. Both are UGC-entitled, so the degree validity is the same.`,
        },
        {
          question: `Which is cheaper, ${a.shortName} or ${b.shortName}?`,
          answer: `${cheaper.shortName} is cheaper at ${cheaper.feePerYear} per year compared with ${costlier.feePerYear} at ${costlier.shortName}, before any scholarship or waiver.`,
        },
        {
          question: `Are ${a.shortName} and ${b.shortName} online degrees valid for government jobs?`,
          answer:
            "Yes. Online degrees from UGC-entitled universities are treated as equivalent to regular degrees for government recruitment and higher study.",
        },
        {
          question: `What is the difference in examination mode?`,
          answer: `${a.shortName} conducts exams via ${a.examMode.toLowerCase()}, while ${b.shortName} uses ${b.examMode.toLowerCase()}.`,
        },
      ]}
      pageType="university"
      ctaTitle={`Still torn between ${a.shortName} and ${b.shortName}?`}
    />
  );
};

export default UniversityVsPage;
