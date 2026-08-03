import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import ToolLayout from "@/components/ui/tool-layout";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SaveButton from "@/components/ui/save-button";
import { SEO_ROUTES, CLUSTER_LABEL, TopicCluster } from "@/data/seo/seo-routes";
import { Search as SearchIcon } from "lucide-react";

const FILTERS: { key: string; label: string; clusters: TopicCluster[] }[] = [
  { key: "all", label: "Everything", clusters: [] },
  { key: "universities", label: "Universities", clusters: ["universities"] },
  { key: "courses", label: "Courses", clusters: ["courses"] },
  { key: "comparison", label: "Comparisons", clusters: ["comparison"] },
  { key: "blog", label: "Blogs & guides", clusters: ["blog", "career", "resources", "news"] },
  {
    key: "admission",
    label: "Admission, fees & scholarships",
    clusters: ["admission", "fees", "eligibility", "scholarships", "placements"],
  },
];

const POPULAR = [
  "Online MBA",
  "Manipal",
  "Amity vs LPU",
  "IGNOU fees",
  "Online MCA",
  "Scholarships",
  "BBA admission",
  "Jain University",
];

const searchable = SEO_ROUTES.filter((r) => r.cluster !== "legal" && r.cluster !== "home");

const score = (haystack: string, q: string) => {
  const h = haystack.toLowerCase();
  if (h.startsWith(q)) return 3;
  if (h.includes(q)) return 2;
  return q.split(" ").every((w) => w.length > 1 && h.includes(w)) ? 1 : 0;
};

const SearchPage = () => {
  const [params, setParams] = useSearchParams();
  const [query, setQuery] = useState(params.get("q") ?? "");
  const [filter, setFilter] = useState(params.get("type") ?? "all");

  useEffect(() => {
    const next = new URLSearchParams();
    if (query) next.set("q", query);
    if (filter !== "all") next.set("type", filter);
    setParams(next, { replace: true });
  }, [query, filter, setParams]);

  const active = FILTERS.find((f) => f.key === filter) ?? FILTERS[0];

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const pool = active.clusters.length
      ? searchable.filter((r) => active.clusters.includes(r.cluster))
      : searchable;
    if (!q) return pool.slice(0, 24);
    return pool
      .map((r) => ({
        r,
        s: Math.max(
          score(r.h1, q) * 3,
          score(r.title, q) * 2,
          score(r.keywords ?? "", q),
          score(r.path.replace(/[-/]/g, " "), q) * 2,
        ),
      }))
      .filter((x) => x.s > 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, 30)
      .map((x) => x.r);
  }, [query, active]);

  const suggestions = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];
    return searchable
      .filter((r) => r.h1.toLowerCase().includes(q))
      .slice(0, 6);
  }, [query]);

  return (
    <ToolLayout
      h1="Search AVEDU — Universities, Courses, Comparisons & Guides"
      intro="One search box for every online university, degree programme, X-vs-Y comparison and admission guide on AVEDU."
    >
      <div className="max-w-2xl">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search universities, courses, comparisons, blogs…"
            className="pl-9 h-12"
            aria-label="Search AVEDU"
            autoComplete="off"
          />
        </div>

        {suggestions.length > 0 && (
          <ul className="mt-2 rounded-lg border border-border bg-card divide-y divide-border overflow-hidden">
            {suggestions.map((s) => (
              <li key={s.path}>
                <Link to={s.path} className="flex items-center justify-between gap-3 px-3 py-2 text-sm hover:bg-muted">
                  <span className="truncate">{s.h1}</span>
                  <Badge variant="secondary" className="shrink-0">{CLUSTER_LABEL[s.cluster]}</Badge>
                </Link>
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-2 mt-4">
          {FILTERS.map((f) => (
            <Button
              key={f.key}
              size="sm"
              variant={f.key === filter ? "default" : "outline"}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </Button>
          ))}
        </div>

        <div className="mt-4">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
            Popular searches
          </h2>
          <div className="flex flex-wrap gap-2">
            {POPULAR.map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setQuery(p)}
                className="text-xs rounded-full border border-border px-3 py-1 hover:border-primary hover:text-primary"
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="mt-8">
        <h2 className="text-lg font-semibold mb-3">
          {query ? `${results.length} results for "${query}"` : "Browse everything on AVEDU"}
        </h2>
        <ul className="grid md:grid-cols-2 gap-3">
          {results.map((r) => (
            <li key={r.path} className="rounded-xl border border-border p-4">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <Badge variant="secondary" className="mb-1.5">{CLUSTER_LABEL[r.cluster]}</Badge>
                  <h3 className="font-semibold text-sm">
                    <Link to={r.path} className="hover:text-primary hover:underline">{r.h1}</Link>
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{r.description}</p>
                </div>
                {(r.cluster === "universities" || r.cluster === "comparison") && (
                  <SaveButton
                    storeKey={r.cluster === "universities" ? "universities" : "comparisons"}
                    path={r.path}
                    title={r.h1}
                  />
                )}
              </div>
            </li>
          ))}
        </ul>
        {query && results.length === 0 && (
          <p className="text-sm text-muted-foreground">
            Nothing matched. Try a university name, a course like “MBA”, or{" "}
            <Link to="/tools/university-finder" className="underline hover:text-primary">
              use the University Finder
            </Link>
            .
          </p>
        )}
      </section>
    </ToolLayout>
  );
};

export default SearchPage;
