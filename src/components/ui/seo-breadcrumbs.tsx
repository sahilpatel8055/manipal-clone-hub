import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { getBreadcrumbs } from "@/lib/seo/internal-links";

/**
 * Visible breadcrumb trail, rendered on every page below the header.
 * The matching BreadcrumbList JSON-LD is emitted by <SEOHead /> from the
 * same source, so visible and structured breadcrumbs never diverge.
 */
const SeoBreadcrumbs = ({ className = "" }: { className?: string }) => {
  const { pathname } = useLocation();
  const crumbs = getBreadcrumbs(pathname);

  if (crumbs.length < 2) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className={`w-full bg-muted/40 border-b border-border ${className}`}
    >
      <ol className="container mx-auto px-4 py-2.5 flex flex-wrap items-center gap-1 text-[0.7rem] sm:text-xs text-muted-foreground">
        {crumbs.map((crumb, i) => {
          const isLast = i === crumbs.length - 1;
          return (
            <li key={crumb.path} className="flex items-center gap-1 min-w-0">
              {i > 0 && <ChevronRight className="h-3 w-3 shrink-0 opacity-60" aria-hidden="true" />}
              {isLast ? (
                <span className="font-medium text-foreground truncate max-w-[16rem]" aria-current="page">
                  {crumb.name}
                </span>
              ) : (
                <Link
                  to={crumb.path}
                  className="hover:text-foreground hover:underline flex items-center gap-1 truncate max-w-[14rem]"
                >
                  {i === 0 && <Home className="h-3 w-3 shrink-0" aria-hidden="true" />}
                  {crumb.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default SeoBreadcrumbs;
