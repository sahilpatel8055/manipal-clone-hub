import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import ToolLayout from "@/components/ui/tool-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { COURSE_CATALOG, FINDER_UNIVERSITIES, formatINR } from "@/data/tools/finder-data";
import { useCounselingForm } from "@/hooks/use-counseling-form";

const FeeCalculator = () => {
  const { openForm, CounselingFormComponent } = useCounselingForm();
  const [uniId, setUniId] = useState(FINDER_UNIVERSITIES[0].id);
  const [courseId, setCourseId] = useState("mba");
  const [scholarshipPct, setScholarshipPct] = useState([10]);
  const [tenure, setTenure] = useState("12");

  const uni = FINDER_UNIVERSITIES.find((u) => u.id === uniId)!;
  const course = COURSE_CATALOG.find((c) => c.id === courseId)!;

  const calc = useMemo(() => {
    const total = course.level === "PG" ? uni.totalPgFee : uni.totalUgFee;
    const maxPct = uni.maxScholarshipPercent;
    const appliedPct = Math.min(scholarshipPct[0], maxPct);
    const scholarship = (total * appliedPct) / 100;
    const payable = total - scholarship;
    const semesters = course.durationYears * 2;
    const months = Number(tenure);
    const emi = payable / months;
    return {
      total,
      appliedPct,
      maxPct,
      scholarship,
      payable,
      semesterFee: payable / semesters,
      yearlyFee: payable / course.durationYears,
      emi,
      semesters,
    };
  }, [uni, course, scholarshipPct, tenure]);

  const rows = [
    { label: "Total programme fee", value: formatINR(calc.total) },
    { label: `Scholarship (${calc.appliedPct}% applied, max ${calc.maxPct}%)`, value: `− ${formatINR(calc.scholarship)}` },
    { label: "Net payable fee", value: formatINR(calc.payable), strong: true },
    { label: `Semester fee (${calc.semesters} semesters)`, value: formatINR(calc.semesterFee) },
    { label: "Yearly cost", value: formatINR(calc.yearlyFee) },
    { label: `EMI for ${tenure} months`, value: `${formatINR(calc.emi)} / month`, strong: true },
  ];

  return (
    <ToolLayout
      h1="Online Degree Fee, Scholarship & EMI Calculator"
      intro="Work out the real cost of an online degree: total fee, scholarship discount, semester fee, yearly cost and your monthly no-cost EMI — before you apply."
    >
      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-5 space-y-5">
            <h2 className="text-lg font-semibold">Your programme</h2>
            <div className="space-y-1.5">
              <Label>University</Label>
              <Select value={uniId} onValueChange={setUniId}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {FINDER_UNIVERSITIES.map((u) => (
                    <SelectItem key={u.id} value={u.id}>{u.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label>Course</Label>
              <Select value={courseId} onValueChange={setCourseId}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {COURSE_CATALOG.filter((c) => uni.courses.includes(c.id)).map((c) => (
                    <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Expected scholarship: {scholarshipPct[0]}%</Label>
              <Slider
                value={scholarshipPct}
                onValueChange={setScholarshipPct}
                min={0}
                max={50}
                step={5}
              />
              <p className="text-xs text-muted-foreground">
                {uni.shortName} currently offers up to {uni.maxScholarshipPercent}% on merit, defence
                and category scholarships — anything above that is capped in the result.
              </p>
            </div>
            <div className="space-y-1.5">
              <Label>EMI tenure</Label>
              <Select value={tenure} onValueChange={setTenure}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {["6", "9", "12", "18", "24"].map((t) => (
                    <SelectItem key={t} value={t}>{t} months</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground">
                {uni.emi
                  ? "No-cost EMI is available at this university through partner lenders."
                  : "This university does not offer EMI; the figure below is an indicative instalment plan."}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5">
            <h2 className="text-lg font-semibold mb-4">Your cost breakdown</h2>
            <dl className="divide-y divide-border">
              {rows.map((r) => (
                <div key={r.label} className="flex items-center justify-between gap-4 py-3">
                  <dt className={`text-sm ${r.strong ? "font-semibold" : "text-muted-foreground"}`}>
                    {r.label}
                  </dt>
                  <dd className={`text-sm text-right ${r.strong ? "font-bold text-primary" : "font-medium"}`}>
                    {r.value}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="text-xs text-muted-foreground mt-4">
              Figures are indicative and verified each admission cycle against the university's
              official fee notification. Exam and re-registration charges may apply.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <Button size="sm" onClick={openForm}>Get exact fee quote</Button>
              <Button size="sm" variant="outline" asChild><Link to={uni.path}>View {uni.shortName}</Link></Button>
              <Button size="sm" variant="ghost" asChild><Link to="/scholarships">Scholarships</Link></Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <CounselingFormComponent />
    </ToolLayout>
  );
};

export default FeeCalculator;
