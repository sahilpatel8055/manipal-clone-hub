import { Link } from "react-router-dom";
import { BadgeCheck, CalendarClock, ExternalLink, ShieldCheck, UserRound } from "lucide-react";

interface EeatBlockProps {
  author?: string;
  authorRole?: string;
  reviewedBy?: string;
  reviewerRole?: string;
  /** ISO date (YYYY-MM-DD) of the last verified content update. */
  lastUpdated?: string;
  /** Official sources used to verify the facts on this page. */
  references?: { label: string; url: string }[];
}

const DEFAULT_REFERENCES = [
  { label: "UGC — Distance Education Bureau (recognised programmes)", url: "https://deb.ugc.ac.in/" },
  { label: "AICTE — Approved Institutions", url: "https://www.aicte-india.org/" },
  { label: "NAAC — Accreditation Status", url: "http://www.naac.gov.in/" },
  { label: "NIRF — National Institutional Ranking Framework", url: "https://www.nirfindia.org/" },
];

/**
 * E-E-A-T trust block: who wrote the page, who reviewed it, when it was last
 * verified, the editorial policy and the official sources behind the facts.
 */
const EeatBlock = ({
  author = "AVEDU Admissions Editorial Team",
  authorRole = "Online education research desk",
  reviewedBy = "AVEDU Senior Admission Counsellor",
  reviewerRole = "12+ years advising online degree applicants",
  lastUpdated,
  references = DEFAULT_REFERENCES,
}: EeatBlockProps) => (
  <section className="py-8 bg-background border-t border-border">
    <div className="container mx-auto px-4">
      <div className="rounded-xl border border-border bg-muted/30 p-4 sm:p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="flex items-start gap-2">
            <UserRound className="h-4 w-4 mt-0.5 text-primary shrink-0" aria-hidden="true" />
            <div>
              <div className="font-semibold">Written by {author}</div>
              <div className="text-muted-foreground text-xs">{authorRole}</div>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <BadgeCheck className="h-4 w-4 mt-0.5 text-primary shrink-0" aria-hidden="true" />
            <div>
              <div className="font-semibold">Reviewed by {reviewedBy}</div>
              <div className="text-muted-foreground text-xs">{reviewerRole}</div>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <CalendarClock className="h-4 w-4 mt-0.5 text-primary shrink-0" aria-hidden="true" />
            <div>
              <div className="font-semibold">
                {lastUpdated ? `Last verified ${lastUpdated}` : "Verified against official sources"}
              </div>
              <div className="text-muted-foreground text-xs">
                Fees, approvals and dates are re-checked every admission cycle.
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 pt-4 border-t border-border">
          <div className="flex items-center gap-2 mb-2">
            <ShieldCheck className="h-4 w-4 text-primary" aria-hidden="true" />
            <h2 className="text-sm font-semibold">Editorial policy &amp; official sources</h2>
          </div>
          <p className="text-xs text-muted-foreground mb-3">
            AVEDU publishes only information that can be traced to a university's official
            prospectus or a regulator's public record. We do not accept payment to alter facts,
            rankings or recommendations. Report an inaccuracy and we correct it within 48 hours.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs">
            {references.map((ref) => (
              <li key={ref.url}>
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline"
                >
                  <ExternalLink className="h-3 w-3 shrink-0" aria-hidden="true" />
                  {ref.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-xs text-muted-foreground mt-3">
            Read our{" "}
            <Link to="/disclaimer" className="underline hover:text-primary">
              disclaimer
            </Link>{" "}
            and{" "}
            <Link to="/privacy-policy" className="underline hover:text-primary">
              privacy policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default EeatBlock;
