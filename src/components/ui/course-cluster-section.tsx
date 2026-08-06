import React from "react";
import { Link } from "react-router-dom";
import {
  Award,
  BadgeIndianRupee,
  BookOpen,
  Briefcase,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  CreditCard,
  FileCheck2,
  FileText,
  GraduationCap,
  Layers,
  ShieldCheck,
  TrendingUp,
  UserCheck,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useCounselingForm } from "@/hooks/use-counseling-form";
import { getCourseCluster } from "@/data/course-clusters";

const STEP_ICONS = [ClipboardList, FileText, FileCheck2, CreditCard, GraduationCap];
const STEP_COLORS = [
  "from-rose-500 to-orange-400",
  "from-amber-400 to-yellow-500",
  "from-teal-400 to-emerald-500",
  "from-sky-500 to-indigo-500",
  "from-lime-500 to-green-600",
];

interface Props {
  /** Course key: mba, mca, mcom, ma, bba, bca, bcom, ba */
  courseKey: string;
}

/**
 * Shared, visual "course cluster" block appended to every /courses/* page:
 * quick facts, specialisation cards, university-wise fee table, eligibility,
 * admission timeline, salary bands, who-should-apply and FAQs.
 */
const CourseClusterSection: React.FC<Props> = ({ courseKey }) => {
  const course = getCourseCluster(courseKey);
  const { openForm, CounselingFormComponent } = useCounselingForm();

  if (!course) return null;

  return (
    <>
      {/* Quick facts */}
      <section id="cluster-overview" className="py-10 md:py-14 bg-background scroll-mt-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/15 border-0">
              {course.name} 2026 — complete guide
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              {course.fullName}: fees, specialisations, eligibility & career scope
            </h2>
            <p className="mt-3 text-sm md:text-base text-muted-foreground">
              Everything a {course.level} applicant checks before applying — verified against
              university fee schedules, UGC entitlement lists and NAAC grades.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4">
            {[
              { icon: Layers, label: "Level", value: `${course.level} degree` },
              { icon: CalendarCheck, label: "Duration", value: course.duration },
              { icon: BadgeIndianRupee, label: "Fee range", value: course.feeRange },
              { icon: Award, label: "Specialisations", value: `${course.specialisations.length}+` },
              { icon: ShieldCheck, label: "Recognition", value: "UGC entitled" },
            ].map((f) => (
              <div
                key={f.label}
                className="rounded-xl border border-border bg-card p-3 md:p-4 flex flex-col gap-2"
              >
                <f.icon className="h-5 w-5 text-primary" />
                <span className="text-[0.65rem] md:text-xs uppercase tracking-wide text-muted-foreground">
                  {f.label}
                </span>
                <span className="text-sm md:text-base font-semibold text-foreground leading-snug">
                  {f.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialisations */}
      <section id="cluster-specialisations" className="py-10 md:py-14 bg-muted/40 scroll-mt-28">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            {course.name} specialisations
          </h2>
          <p className="mt-2 text-sm md:text-base text-muted-foreground max-w-3xl">
            Pick the specialisation first — it decides your electives, your project and the roles you
            get shortlisted for.
          </p>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {course.specialisations.map((s, i) => (
              <Card
                key={s.name}
                className="group h-full border-border hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <span
                      className={`shrink-0 h-10 w-10 rounded-xl bg-gradient-to-br ${
                        STEP_COLORS[i % STEP_COLORS.length]
                      } flex items-center justify-center text-white font-bold text-sm`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-foreground leading-snug">{s.name}</h3>
                      <p className="mt-1.5 text-sm text-muted-foreground">{s.blurb}</p>
                      <p className="mt-2 text-xs font-medium text-primary flex items-center gap-1.5">
                        <Briefcase className="h-3.5 w-3.5" /> {s.roles}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* University-wise fees */}
      <section id="cluster-fees" className="py-10 md:py-14 bg-background scroll-mt-28">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            {course.name} fees — university-wise comparison
          </h2>
          <p className="mt-2 text-sm md:text-base text-muted-foreground max-w-3xl">
            Indicative fees for the current session. Semester-wise payment and no-cost EMI are
            available at most private universities; scholarships can reduce the total further.
          </p>

          <div className="mt-6 overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-xs md:text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left p-3 font-semibold">University</th>
                  <th className="text-left p-3 font-semibold">NAAC</th>
                  <th className="text-left p-3 font-semibold">Total fee</th>
                  <th className="text-left p-3 font-semibold">Per semester</th>
                </tr>
              </thead>
              <tbody>
                {course.fees.map((f) => (
                  <tr key={f.university} className="border-t border-border">
                    <td className="p-3">
                      <Link to={f.path} className="font-medium text-primary hover:underline">
                        {f.university}
                      </Link>
                    </td>
                    <td className="p-3">{f.naac}</td>
                    <td className="p-3 font-semibold text-foreground">{f.totalFee}</td>
                    <td className="p-3">{f.perSemester}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <Link to="/tools/fee-calculator" className="text-primary underline">
              Calculate your EMI
            </Link>
            <Link to="/scholarships" className="text-primary underline">
              Check scholarships
            </Link>
            <Link to="/comparison" className="text-primary underline">
              Compare universities
            </Link>
          </div>
        </div>
      </section>

      {/* Eligibility + documents */}
      <section id="cluster-eligibility" className="py-10 md:py-14 bg-muted/40 scroll-mt-28">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-6">
          <Card className="border-border">
            <CardContent className="p-5 md:p-6">
              <h2 className="text-xl md:text-2xl font-bold text-foreground flex items-center gap-2">
                <UserCheck className="h-5 w-5 text-primary" /> {course.name} eligibility
              </h2>
              <ul className="mt-4 space-y-3 text-sm md:text-base text-muted-foreground">
                <li className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span>{course.eligibility}</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span>{course.entrance}</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span>{course.approvals}</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span>No upper age limit for admission</span>
                </li>
              </ul>
              <Button className="mt-5" variant="outline" asChild>
                <Link to="/tools/eligibility-checker">Check my eligibility</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="p-5 md:p-6">
              <h2 className="text-xl md:text-2xl font-bold text-foreground flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" /> Documents required
              </h2>
              <ul className="mt-4 space-y-3 text-sm md:text-base text-muted-foreground">
                {course.documents.map((d) => (
                  <li key={d} className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Admission process timeline */}
      <section id="cluster-admission" className="py-10 md:py-14 bg-background scroll-mt-28">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            {course.name} admission process
          </h2>
          <p className="mt-2 text-sm md:text-base text-muted-foreground max-w-3xl">
            The process is the same across most universities and takes 3–7 working days end to end.
          </p>

          <div className="mt-8 relative">
            <div className="hidden lg:block absolute left-0 right-0 top-[92px] h-0.5 bg-border" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {course.admissionSteps.map((step, i) => {
                const Icon = STEP_ICONS[i % STEP_ICONS.length];
                return (
                  <div key={step.title} className="relative flex flex-col items-center text-center">
                    <div
                      className={`h-20 w-20 rounded-full bg-gradient-to-br ${
                        STEP_COLORS[i % STEP_COLORS.length]
                      } p-[3px] shadow-md`}
                    >
                      <div className="h-full w-full rounded-full bg-card flex items-center justify-center">
                        <Icon className="h-8 w-8 text-foreground" />
                      </div>
                    </div>
                    <span className="hidden lg:block h-6 w-0.5 bg-border" />
                    <span className="hidden lg:block h-3 w-3 rounded-full border-2 border-primary bg-card" />
                    <h3 className="mt-3 font-semibold text-foreground text-sm md:text-base">
                      {i + 1}. {step.title}
                    </h3>
                    <p className="mt-1 text-xs md:text-sm text-muted-foreground">{step.detail}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Salary bands */}
      <section id="cluster-salary" className="py-10 md:py-14 bg-muted/40 scroll-mt-28">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            {course.name} salary & career scope
          </h2>
          <p className="mt-2 text-sm md:text-base text-muted-foreground max-w-3xl">
            Indicative Indian market ranges by experience band. Actual packages depend on your
            specialisation, city and prior experience.
          </p>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {course.salaries.map((s) => (
              <Card key={s.role} className="border-border">
                <CardContent className="p-5">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-foreground">{s.role}</h3>
                  </div>
                  <dl className="mt-4 space-y-2 text-sm">
                    {[
                      ["Entry (0–2 yrs)", s.entry, "w-1/3"],
                      ["Mid (3–7 yrs)", s.mid, "w-2/3"],
                      ["Senior (8+ yrs)", s.senior, "w-full"],
                    ].map(([label, value, width]) => (
                      <div key={label as string}>
                        <div className="flex justify-between text-muted-foreground">
                          <dt>{label}</dt>
                          <dd className="font-semibold text-foreground">{value}</dd>
                        </div>
                        <div className="mt-1 h-1.5 rounded-full bg-border">
                          <div className={`h-1.5 rounded-full bg-primary ${width}`} />
                        </div>
                      </div>
                    ))}
                  </dl>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who should apply + FAQ */}
      <section id="cluster-faq" className="py-10 md:py-14 bg-background scroll-mt-28">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" /> Who should choose {course.name}?
            </h2>
            <ul className="mt-4 space-y-3 text-sm md:text-base text-muted-foreground">
              {course.whoShouldApply.map((w) => (
                <li key={w} className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span>{w}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-2xl border border-primary/20 bg-primary/5 p-5">
              <h3 className="font-bold text-foreground">
                Not sure which university fits your budget?
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Get a free shortlist of UGC-entitled universities for {course.name} based on your
                eligibility and fee comfort.
              </p>
              <Button className="mt-4" onClick={openForm}>
                Talk to a counsellor
              </Button>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              {course.name} FAQs
            </h2>
            <Accordion type="single" collapsible className="mt-4 w-full">
              {course.faqs.map((f, i) => (
                <AccordionItem key={f.question} value={`cluster-faq-${i}`}>
                  <AccordionTrigger className="text-left text-sm md:text-base">
                    {f.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm md:text-base text-muted-foreground">
                    {f.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <CounselingFormComponent />
    </>
  );
};

export default CourseClusterSection;
