import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import ToolLayout from "@/components/ui/tool-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { COURSE_CATALOG, FINDER_UNIVERSITIES, formatINR } from "@/data/tools/finder-data";
import { useCounselingForm } from "@/hooks/use-counseling-form";
import { AlertCircle, CheckCircle2, XCircle } from "lucide-react";

const EligibilityChecker = () => {
  const { openForm, CounselingFormComponent } = useCounselingForm();
  const [tenth, setTenth] = useState("60");
  const [twelfth, setTwelfth] = useState("60");
  const [graduation, setGraduation] = useState("60");
  const [experience, setExperience] = useState("2");
  const [courseId, setCourseId] = useState("mba");

  const course = COURSE_CATALOG.find((c) => c.id === courseId)!;

  const results = useMemo(() => {
    const t10 = Number(tenth) || 0;
    const t12 = Number(twelfth) || 0;
    const grad = Number(graduation) || 0;
    const exp = Number(experience) || 0;

    return FINDER_UNIVERSITIES.map((u) => {
      const offers = u.courses.includes(course.id);
      const notes: string[] = [];
      let eligible = offers;

      if (!offers) notes.push(`${u.shortName} does not offer ${course.shortName} online`);

      if (course.level === "UG") {
        if (t10 < 33) { eligible = false; notes.push("10th pass certificate required"); }
        if (t12 < u.minTwelfthPercent) {
          eligible = false;
          notes.push(`Needs ${u.minTwelfthPercent}% in 12th (you have ${t12}%)`);
        } else if (offers) notes.push(`12th aggregate meets the ${u.minTwelfthPercent}% cut-off`);
      } else {
        if (grad <= 0) { eligible = false; notes.push("A bachelor's degree is mandatory"); }
        else if (grad < u.minGraduationPercent) {
          if (exp >= 2) {
            notes.push(`Below the ${u.minGraduationPercent}% cut-off, but ${exp} yrs work experience is usually considered`);
          } else {
            eligible = false;
            notes.push(`Needs ${u.minGraduationPercent}% in graduation (you have ${grad}%)`);
          }
        } else if (offers) {
          notes.push(`Graduation aggregate meets the ${u.minGraduationPercent}% cut-off`);
        }
        if (exp >= 2 && offers) notes.push("Work experience helps in scholarship and specialisation selection");
      }

      const fee = course.level === "PG" ? u.totalPgFee : u.totalUgFee;
      return { u, eligible, notes, fee };
    }).sort((a, b) => Number(b.eligible) - Number(a.eligible) || a.fee - b.fee);
  }, [tenth, twelfth, graduation, experience, course]);

  const eligibleCount = results.filter((r) => r.eligible).length;

  return (
    <ToolLayout
      h1="Online Degree Eligibility Checker"
      intro="Enter your 10th, 12th and graduation marks plus work experience. AVEDU instantly shows which UGC-entitled online universities you are eligible for — and what is blocking the rest."
    >
      <div className="grid lg:grid-cols-[minmax(0,360px)_1fr] gap-6">
        <Card>
          <CardContent className="p-5 space-y-4">
            <h2 className="text-lg font-semibold">Your academic profile</h2>
            <div className="space-y-1.5">
              <Label>Course you want</Label>
              <Select value={courseId} onValueChange={setCourseId}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {COURSE_CATALOG.map((c) => (
                    <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {[
              { id: "tenth", label: "10th aggregate (%)", value: tenth, set: setTenth },
              { id: "twelfth", label: "12th aggregate (%)", value: twelfth, set: setTwelfth },
              { id: "graduation", label: "Graduation aggregate (% — 0 if not a graduate)", value: graduation, set: setGraduation },
              { id: "experience", label: "Work experience (years)", value: experience, set: setExperience },
            ].map((f) => (
              <div key={f.id} className="space-y-1.5">
                <Label htmlFor={f.id}>{f.label}</Label>
                <Input
                  id={f.id}
                  type="number"
                  min={0}
                  max={100}
                  value={f.value}
                  onChange={(e) => f.set(e.target.value)}
                />
              </div>
            ))}
            <div className="rounded-lg bg-muted/50 p-3 text-xs text-muted-foreground flex gap-2">
              <AlertCircle className="h-4 w-4 shrink-0 text-primary" />
              <span>
                Course-level rule: {course.eligibility}
              </span>
            </div>
            <Button className="w-full" onClick={openForm}>
              Confirm eligibility with a counsellor
            </Button>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold">
            You are eligible for {eligibleCount} of {results.length} universities
          </h2>
          {results.map(({ u, eligible, notes, fee }) => (
            <Card key={u.id} className={eligible ? "" : "opacity-80"}>
              <CardContent className="p-5">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <Badge variant={eligible ? "default" : "secondary"} className="gap-1">
                      {eligible ? <CheckCircle2 className="h-3 w-3" /> : <XCircle className="h-3 w-3" />}
                      {eligible ? "Eligible" : "Not eligible yet"}
                    </Badge>
                    <h3 className="font-bold mt-1.5">
                      <Link to={u.path} className="hover:text-primary hover:underline">{u.name}</Link>
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {u.location} · NAAC {u.naac} · {formatINR(fee)} total fee
                    </p>
                  </div>
                  {eligible && (
                    <Button size="sm" onClick={openForm}>Apply with AVEDU</Button>
                  )}
                </div>
                <ul className="mt-3 space-y-1">
                  {notes.slice(0, 3).map((n) => (
                    <li key={n} className="text-xs text-muted-foreground">• {n}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <CounselingFormComponent />
    </ToolLayout>
  );
};

export default EligibilityChecker;
