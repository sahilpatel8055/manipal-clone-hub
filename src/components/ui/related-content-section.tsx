import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { getInternalLinks, InternalLink } from "@/lib/seo/internal-links";
import { CLUSTER_LABEL, TopicCluster } from "@/data/seo/seo-routes";

/** Silo groups shown as separate columns, in visitor-journey order. */
const GROUPS: { heading: string; clusters: TopicCluster[] }[] = [
  { heading: "Related Universities", clusters: ["universities"] },
  { heading: "Related Courses", clusters: ["courses"] },
  { heading: "Compare Universities", clusters: ["comparison"] },
  {
    heading: "Admission, Fees & Scholarships",
    clusters: ["admission", "fees", "eligibility", "scholarships", "placements"],
  },
  { heading: "Guides & Blogs", clusters: ["blog", "career", "resources", "news"] },
];

/**
 * Silo-aware related content block. Rendered near the bottom of every page so
 * no page stays isolated: 8-15 contextual links across the AVEDU silos
 * (University -> University Course -> Course -> Comparison -> Admission ->
 * Fees -> Scholarships -> Career -> Blogs -> Lead form).
 */
const RelatedContentSection = ({ limit = 15 }: { limit?: number }) => {
  const { pathname } = useLocation();
  const links = getInternalLinks(pathname, limit);
  if (links.length === 0) return null;

  const used = new Set<string>();
  const columns = GROUPS.map((group) => {
    const items = links.filter(
      (l) => group.clusters.includes(l.cluster) && !used.has(l.url),
    );
    items.forEach((l) => used.add(l.url));
    return { heading: group.heading, items: items.slice(0, 6) };
  }).filter((c) => c.items.length > 0);

  const leftovers = links.filter((l) => !used.has(l.url));
  if (leftovers.length) {
    columns.push({ heading: "Students Also Viewed", items: leftovers.slice(0, 6) });
  }

  return (
    <section className="py-10 md:py-12 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-1">Explore More on AVEDU</h2>
        <p className="text-sm text-muted-foreground mb-6">
          Handpicked universities, programmes, comparisons and admission guides related to this page.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-sm font-semibold mb-2 uppercase tracking-wide text-muted-foreground">
                {col.heading}
              </h3>
              <ul className="space-y-1.5">
                {col.items.map((item: InternalLink) => (
                  <li key={item.url}>
                    <Link
                      to={item.url}
                      title={item.description}
                      className="group flex items-start gap-1.5 text-sm text-foreground hover:text-primary hover:underline"
                    >
                      <ArrowRight className="h-3.5 w-3.5 mt-0.5 shrink-0 opacity-50 group-hover:opacity-100" aria-hidden="true" />
                      <span>
                        {item.title}
                        <span className="sr-only"> — {CLUSTER_LABEL[item.cluster]}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedContentSection;
