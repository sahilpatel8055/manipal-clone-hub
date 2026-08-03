import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import ToolLayout from "@/components/ui/tool-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { COURSE_CATALOG, FINDER_STATES, FINDER_UNIVERSITIES, formatINR } from "@/data/tools/finder-data";
import { useCounselingForm } from "@/hooks/use-counseling-form";
import { CheckCircle2, Star } from "lucide-react";

const BUDGETS = [
  { value: "60000", label: "Under ₹60,000 total" },
  { value: "90000", label: "Under ₹90,000 total" },
  { value: "120000", label: "Under ₹1.2 lakh total" },
  { value: "200000", label: "No strict budget" },
];

const UniversityFinder = () => {
  const { openForm, CounselingFormComponent } = useCounselingForm();
  const [course, setCourse] = useState("mba");
  const [level, setLevel] = useState<"PG" | "UG">("PG");
  const [budget, setBudget] = useState("120000");
  const [state, setState] = useState("any");
  const [working, setWorking] = useState(true);
  const [placement, setPlacement] = useState(true);
  const [scholarship, setScholarship] = useState(false);
  const [emi, setEmi] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const results = useMemo(() => {
    const budgetValue = Number(budget);
    return FINDER_UNIVERSITIES.map((u) => {
      const fee = level === "PG" ? u.totalPgFee : u.totalUgFee;
      const reasons: string[] = [];
      let score = 0;

      if (u.courses.includes(course)) {
        score += 30;
        reasons.push("Offers your selected programme");
      }
      if (fee <= budgetValue) {
        score += 25;
        reasons.push(`Total fee ${formatINR(fee)} fits your budget`);
      } else {
        score -= 15;
      }
      if (state !== "any" && u.state === state) {
        score += 10;
        reasons.push(`Based in ${u.state}`);
      }
      if (working && u.workingProfessionalFriendly) {
        score += 10;
        reasons.push("Weekend live classes and recorded lectures");
      }
      if (placement) {
        score += u.placementScore * 4;
        if (u.placementScore >= 4) reasons.push("Strong placement and career support");
      }
      if (scholarship) {
        if (u.scholarship) {
          score += 12;
          reasons.push(`Scholarship up to ${u.maxScholarshipPercent}%`);
        } else score -= 12;
      }
      if (emi) {
        if (u.emi) {
          score += 12;
          reasons.push("No-cost EMI available");
        } else score -= 15;
      }
      score += u.rating * 2;

      return { u, fee, score, reasons };
    })
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);
  }, [course, level, budget, state, working, placement, scholarship, emi]);

  const levelCourses = COURSE_CATALOG.filter((c) => c.level === level);

  return (
    <ToolLayout
      h1="Online University Finder — Get Your Best-Fit University"
      intro="Answer eight quick questions about your course, budget, work status and priorities. AVEDU ranks UGC-entitled online universities that actually match your profile — no guesswork, no spam."
    >
      <div className="grid lg:grid-cols-[minmax(0,380px)_1fr] gap-6">
        <Card>
          <CardContent className="p-5 space-y-4">
            <h2 className="text-lg font-semibold">Your preferences</h2>

            <div className="space-y-1.5">
              <Label>Degree level</Label>
              <Select
                value={level}
                onValueChange={(v) => {
                  setLevel(v as "PG" | "UG");
                  setCourse(v === "PG" ? "mba" : "bba");
                }}
              >
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="PG">Postgraduate (PG)</SelectItem>
                  <SelectItem value="UG">Undergraduate (UG)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1.5">
              <Label>Course</Label>
              <Select value={course} onValueChange={setCourse}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {levelCourses.map((c) => (
                    <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1.5">
              <Label>Budget (total programme fee)</Label>
              <Select value={budget} onValueChange={setBudget}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {BUDGETS.map((b) => (
                    <SelectItem key={b.value} value={b.value}>{b.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1.5">
              <Label>Preferred state</Label>
              <Select value={state} onValueChange={setState}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">No preference</SelectItem>
                  {FINDER_STATES.map((s) => (
                    <SelectItem key={s} value={s}>{s}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2.5 pt-1">
              {[
                { id: "working", label: "I am a working professional", value: working, set: setWorking },
                { id: "placement", label: "Placement support is a priority", value: placement, set: setPlacement },
                { id: "scholarship", label: "I need a scholarship", value: scholarship, set: setScholarship },
                { id: "emi", label: "I need EMI / instalments", value: emi, set: setEmi },
              ].map((f) => (
                <div key={f.id} className="flex items-center gap-2">
                  <Checkbox
                    id={f.id}
                    checked={f.value}
                    onCheckedChange={(v) => f.set(Boolean(v))}
                  />
                  <Label htmlFor={f.id} className="text-sm font-normal cursor-pointer">
                    {f.label}
                  </Label>
                </div>
              ))}
            </div>

            <Button className="w-full" onClick={() => setSubmitted(true)}>
              Show my best-fit universities
            </Button>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold">
            {submitted ? "Your top matches" : "Live matches (updates as you choose)"}
          </h2>
          {results.map(({ u, fee, reasons }, i) => (
            <Card key={u.id}>
              <CardContent className="p-5">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">Match #{i + 1}</Badge>
                      <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                        <Star className="h-3 w-3 fill-current" /> {u.rating}
                      </span>
                    </div>
                    <h3 className="font-bold mt-1.5">
                      <Link to={u.path} className="hover:text-primary hover:underline">
                        {u.name}
                      </Link>
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {u.location} · NAAC {u.naac} · {u.approvals.slice(0, 2).join(", ")}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold">{formatINR(fee)}</div>
                    <div className="text-[0.7rem] text-muted-foreground">total programme fee</div>
                  </div>
                </div>
                <ul className="grid sm:grid-cols-2 gap-1.5 my-3">
                  {reasons.slice(0, 4).map((r) => (
                    <li key={r} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                      {r}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Button size="sm" onClick={openForm}>Get admission help</Button>
                  <Button size="sm" variant="outline" asChild>
                    <Link to={u.path}>View university</Link>
                  </Button>
                  <Button size="sm" variant="ghost" asChild>
                    <Link to="/tools/fee-calculator">Calculate fee &amp; EMI</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <CounselingFormComponent />
    </ToolLayout>
  );
};

export default UniversityFinder;
