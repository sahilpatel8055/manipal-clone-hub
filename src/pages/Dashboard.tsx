import { Link } from "react-router-dom";
import ToolLayout from "@/components/ui/tool-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ActivityKey, useActivity } from "@/hooks/use-student-activity";
import { useCounselingForm } from "@/hooks/use-counseling-form";
import { Bookmark, Clock, FileDown, GitCompare, X } from "lucide-react";

const SECTIONS: {
  key: ActivityKey;
  title: string;
  empty: string;
  icon: typeof Clock;
  cta: { label: string; to: string };
}[] = [
  {
    key: "recent",
    title: "Recently viewed",
    empty: "Pages you open on AVEDU appear here automatically.",
    icon: Clock,
    cta: { label: "Browse universities", to: "/universities" },
  },
  {
    key: "universities",
    title: "Saved universities",
    empty: "Save a university from search or the University Finder to shortlist it.",
    icon: Bookmark,
    cta: { label: "Find your university", to: "/tools/university-finder" },
  },
  {
    key: "comparisons",
    title: "Saved comparisons",
    empty: "Save any X vs Y comparison to revisit it later.",
    icon: GitCompare,
    cta: { label: "Compare universities", to: "/comparison" },
  },
  {
    key: "brochures",
    title: "Downloaded brochures",
    empty: "Brochures you request from a counsellor are listed here.",
    icon: FileDown,
    cta: { label: "Request a brochure", to: "/universities" },
  },
];

const Section = ({ section }: { section: (typeof SECTIONS)[number] }) => {
  const { items, remove } = useActivity(section.key);
  const Icon = section.icon;

  return (
    <Card>
      <CardContent className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <Icon className="h-4 w-4 text-primary" />
          <h2 className="font-semibold">{section.title}</h2>
          <span className="text-xs text-muted-foreground">({items.length})</span>
        </div>
        {items.length === 0 ? (
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">{section.empty}</p>
            <Button size="sm" variant="outline" asChild>
              <Link to={section.cta.to}>{section.cta.label}</Link>
            </Button>
          </div>
        ) : (
          <ul className="divide-y divide-border">
            {items.slice(0, 10).map((item) => (
              <li key={item.path} className="flex items-center justify-between gap-2 py-2">
                <Link to={item.path} className="text-sm hover:text-primary hover:underline truncate">
                  {item.title}
                </Link>
                <button
                  type="button"
                  onClick={() => remove(item.path)}
                  aria-label={`Remove ${item.title}`}
                  className="text-muted-foreground hover:text-foreground shrink-0"
                >
                  <X className="h-4 w-4" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
};

const Dashboard = () => {
  const { openForm, CounselingFormComponent } = useCounselingForm();

  return (
    <ToolLayout
      h1="My AVEDU Dashboard"
      intro="Your shortlist in one place: recently viewed pages, saved universities, saved comparisons and requested brochures. Stored privately in this browser — no login needed."
    >
      <div className="grid md:grid-cols-2 gap-4">
        {SECTIONS.map((s) => (
          <Section key={s.key} section={s} />
        ))}
      </div>
      <div className="mt-6 rounded-xl border border-border bg-muted/30 p-5 flex flex-wrap items-center gap-3">
        <p className="text-sm text-muted-foreground flex-1 min-w-[240px]">
          Ready to shortlist properly? A counsellor can compare your saved universities on fees,
          scholarships and placements — free.
        </p>
        <Button size="sm" onClick={openForm}>Get free counselling</Button>
      </div>
      <CounselingFormComponent />
    </ToolLayout>
  );
};

export default Dashboard;
