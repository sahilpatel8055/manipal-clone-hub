import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import ToolLayout from "@/components/ui/tool-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { COURSE_CATALOG } from "@/data/tools/finder-data";
import { useCounselingForm } from "@/hooks/use-counseling-form";
import { CheckCircle2 } from "lucide-react";

const QUALIFICATIONS = [
  { value: "12th", label: "12th pass" },
  { value: "diploma", label: "Diploma" },
  { value: "graduate", label: "Graduate (any stream)" },
  { value: "commerce-graduate", label: "Graduate (commerce)" },
  { value: "it-graduate", label: "Graduate (IT / computers)" },
];

const GOALS = [
  "Promotion in my current job",
  "Career switch",
  "Start my own business",
  "Government job / competitive exams",
  "Teaching / academics",
  "Higher salary in tech",
];

const INDUSTRIES = [
  "IT & Software",
  "Banking & Finance",
  "Retail",
  "Manufacturing",
  "Education",
  "Government",
  "Startups",
  "Consulting",
  "Accounting Firms",
  "Media",
];

const INTERESTS = [
  "Business",
  "Technology",
  "Coding",
  "Finance",
  "Accounting",
  "Data",
  "Humanities",
  "Writing",
  "Teaching",
  "Strategy",
  "Marketing",
  "People management",
  "Public service",
];

const SALARIES = [
  { value: "4", label: "₹3-5 LPA" },
  { value: "8", label: "₹6-8 LPA" },
  { value: "12", label: "₹10-12 LPA" },
  { value: "18", label: "₹15 LPA and above" },
];

const CourseFinder = () => {
  const { openForm, CounselingFormComponent } = useCounselingForm();
  const [qualification, setQualification] = useState("graduate");
  const [goal, setGoal] = useState(GOALS[0]);
  const [salary, setSalary] = useState("8");
  const [industry, setIndustry] = useState("IT & Software");
  const [interest, setInterest] = useState("Business");

  const results = useMemo(() => {
    const isGraduate = qualification !== "12th" && qualification !== "diploma";
    const salaryGoal = Number(salary);

    return COURSE_CATALOG.map((c) => {
      const reasons: string[] = [];
      let score = 0;

      if (isGraduate && c.level === "PG") {
        score += 30;
        reasons.push("You already hold a bachelor's degree, so a master's is the next step");
      }
      if (!isGraduate && c.level === "UG") {
        score += 35;
        reasons.push("Matches your current qualification");
      }
      if (isGraduate && c.level === "UG") score -= 25;
      if (!isGraduate && c.level === "PG") score -= 60;

      if (qualification === "commerce-graduate" && ["mcom", "mba"].includes(c.id)) {
        score += 12;
        reasons.push("Builds directly on your commerce background");
      }
      if (qualification === "it-graduate" && ["mca", "mba"].includes(c.id)) {
        score += 12;
        reasons.push("Builds directly on your IT background");
      }
      if (c.industries.includes(industry)) {
        score += 14;
        reasons.push(`Widely hired in ${industry}`);
      }
      if (c.interests.includes(interest)) {
        score += 12;
        reasons.push(`Matches your interest in ${interest.toLowerCase()}`);
      }
      if (c.salaryTo >= salaryGoal) {
        score += 14;
        reasons.push(`Typical package ₹${c.salaryFrom}-${c.salaryTo} LPA meets your salary goal`);
      }
      if (goal.includes("Promotion") && c.id === "mba") {
        score += 15;
        reasons.push("Most requested degree for managerial promotions");
      }
      if (goal.includes("Government") && ["ba", "ma"].includes(c.id)) {
        score += 15;
        reasons.push("Flexible schedule alongside competitive-exam preparation");
      }
      if (goal.includes("Teaching") && ["ma", "mcom"].includes(c.id)) {
        score += 15;
        reasons.push("Eligibility base for UGC-NET and teaching roles");
      }
      if (goal.includes("tech") && ["mca", "bca"].includes(c.id)) {
        score += 15;
        reasons.push("Direct route into higher-paying engineering roles");
      }
      if (goal.includes("business") && ["mba", "bba"].includes(c.id)) {
        score += 12;
        reasons.push("Covers finance, operations and marketing for founders");
      }

      return { c, score, reasons };
    })
      .sort((a, b) => b.score - a.score)
      .slice(0, 4);
  }, [qualification, goal, salary, industry, interest]);

  return (
    <ToolLayout
      h1="Online Course Finder — Pick the Right Degree"
      intro="Tell us your qualification, career goal, salary target, industry and interest. AVEDU recommends the online degree — MBA, MCA, BBA, BCA, BA, B.Com, MA or M.Com — that gets you there fastest."
    >
      <div className="grid lg:grid-cols-[minmax(0,380px)_1fr] gap-6">
        <Card>
          <CardContent className="p-5 space-y-4">
            <h2 className="text-lg font-semibold">About you</h2>
            {[
              { label: "Current qualification", value: qualification, set: setQualification, options: QUALIFICATIONS },
              { label: "Career goal", value: goal, set: setGoal, options: GOALS.map((g) => ({ value: g, label: g })) },
              { label: "Salary goal", value: salary, set: setSalary, options: SALARIES },
              { label: "Preferred industry", value: industry, set: setIndustry, options: INDUSTRIES.map((i) => ({ value: i, label: i })) },
              { label: "Main interest", value: interest, set: setInterest, options: INTERESTS.map((i) => ({ value: i, label: i })) },
            ].map((field) => (
              <div key={field.label} className="space-y-1.5">
                <Label>{field.label}</Label>
                <Select value={field.value} onValueChange={field.set}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {field.options.map((o) => (
                      <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            ))}
            <Button className="w-full" onClick={openForm}>
              Talk to a course counsellor
            </Button>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Recommended courses for you</h2>
          {results.map(({ c, reasons }, i) => (
            <Card key={c.id}>
              <CardContent className="p-5">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <Badge variant="secondary">Recommendation #{i + 1}</Badge>
                    <h3 className="font-bold mt-1.5">
                      <Link to={c.path} className="hover:text-primary hover:underline">{c.name}</Link>
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {c.level} · {c.duration} · ₹{c.salaryFrom}-{c.salaryTo} LPA typical package
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{c.summary}</p>
                <ul className="grid sm:grid-cols-2 gap-1.5 my-3">
                  {reasons.slice(0, 4).map((r) => (
                    <li key={r} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                      {r}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted-foreground mb-3">
                  <span className="font-semibold text-foreground">Eligibility: </span>
                  {c.eligibility}
                </p>
                <div className="flex flex-wrap gap-2">
                  <Button size="sm" asChild><Link to={c.path}>View course</Link></Button>
                  <Button size="sm" variant="outline" asChild>
                    <Link to="/tools/university-finder">Find universities for this course</Link>
                  </Button>
                  <Button size="sm" variant="ghost" onClick={openForm}>Free counselling</Button>
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

export default CourseFinder;
