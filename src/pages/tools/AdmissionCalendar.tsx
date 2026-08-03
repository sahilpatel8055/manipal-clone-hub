import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import ToolLayout from "@/components/ui/tool-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ADMISSION_CALENDAR } from "@/data/tools/finder-data";
import { useCounselingForm } from "@/hooks/use-counseling-form";
import { CalendarDays, Search } from "lucide-react";

const AdmissionCalendar = () => {
  const { openForm, CounselingFormComponent } = useCounselingForm();
  const [query, setQuery] = useState("");

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return ADMISSION_CALENDAR;
    return ADMISSION_CALENDAR.filter((e) =>
      [e.university, e.session, e.admissionLastDate, e.examDate].join(" ").toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <ToolLayout
      h1="Online University Admission Calendar 2026"
      intro="Session-wise admission open dates, last dates, scholarship deadlines, exam dates and result dates for every UGC-entitled online university on AVEDU. Search by university or session."
    >
      <div className="relative max-w-md mb-5">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search university or session (e.g. Manipal, July 2026)"
          className="pl-9"
          aria-label="Search admission calendar"
        />
      </div>

      {/* Desktop table */}
      <div className="hidden md:block overflow-x-auto rounded-xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-muted/50">
            <tr>
              {["University", "Session", "Admission open", "Last date", "Scholarship last date", "Exam date", "Result"].map((h) => (
                <th key={h} className="text-left font-semibold px-4 py-3 whitespace-nowrap">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((e) => (
              <tr key={e.universityId} className="border-t border-border">
                <td className="px-4 py-3">
                  <Link to={e.path} className="font-medium hover:text-primary hover:underline">
                    {e.university}
                  </Link>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">{e.session}</td>
                <td className="px-4 py-3 whitespace-nowrap">{e.admissionOpen}</td>
                <td className="px-4 py-3 whitespace-nowrap font-semibold text-primary">{e.admissionLastDate}</td>
                <td className="px-4 py-3 whitespace-nowrap">{e.scholarshipLastDate}</td>
                <td className="px-4 py-3 whitespace-nowrap">{e.examDate}</td>
                <td className="px-4 py-3 whitespace-nowrap">{e.resultDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden space-y-3">
        {rows.map((e) => (
          <Card key={e.universityId}>
            <CardContent className="p-4">
              <div className="flex items-start justify-between gap-2 mb-2">
                <Link to={e.path} className="font-semibold text-sm hover:text-primary">
                  {e.university}
                </Link>
                <Badge variant="secondary" className="shrink-0">{e.session}</Badge>
              </div>
              <dl className="grid grid-cols-2 gap-y-1.5 text-xs">
                {[
                  ["Admission open", e.admissionOpen],
                  ["Last date", e.admissionLastDate],
                  ["Scholarship last date", e.scholarshipLastDate],
                  ["Exam date", e.examDate],
                  ["Result", e.resultDate],
                ].map(([k, v]) => (
                  <div key={k as string} className="contents">
                    <dt className="text-muted-foreground">{k}</dt>
                    <dd className="font-medium text-right">{v}</dd>
                  </div>
                ))}
              </dl>
            </CardContent>
          </Card>
        ))}
      </div>

      {rows.length === 0 && (
        <p className="text-sm text-muted-foreground">No university matches that search.</p>
      )}

      <div className="mt-6 rounded-xl border border-border bg-muted/30 p-5 flex flex-wrap items-center gap-3">
        <CalendarDays className="h-5 w-5 text-primary" />
        <p className="text-sm text-muted-foreground flex-1 min-w-[240px]">
          Deadlines move every session. Get date alerts and document help from an AVEDU counsellor.
        </p>
        <Button size="sm" onClick={openForm}>Get deadline alerts</Button>
      </div>
      <CounselingFormComponent />
    </ToolLayout>
  );
};

export default AdmissionCalendar;
