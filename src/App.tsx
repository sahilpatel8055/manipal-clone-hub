import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import GlobalIntelligentPopup from "@/components/ui/global-intelligent-popup";
import SEOHead from "@/components/ui/seo-head";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Universities from "./pages/Universities";
import IGNOU from "./pages/university/IGNOU";
import Manipal from "./pages/university/Manipal";
import Uttaranchal from "./pages/university/Uttaranchal";
import VGU from "./pages/university/VGU";
import Sikkim from "./pages/university/Sikkim";
import Amity from "./pages/university/Amity";
import LPU from "./pages/university/LPU";
import Mangalyatan from "./pages/university/Mangalyatan";
import DUSOL from "./pages/university/DUSOL";
import JainUniversity from "./pages/university/JainUniversity";
// Old course pages (from your home page) - DO NOT REMOVE
import OnlineMBA from "./pages/courses/OnlineMBA";
import OnlineTech from "./pages/courses/OnlineTech";
import OnlineBBA from "./pages/courses/OnlineBBA";
import OnlineCommerce from "./pages/courses/OnlineCommerce";
import OnlineArts from "./pages/courses/OnlineArts";
import OnlineMCA from "./pages/courses/OnlineMCA";
import OnlineMCOM from "./pages/courses/OnlineMCOM";
import OnlineMA from "./pages/courses/OnlineMA";
// NEW dynamic course page (general)
import CoursePage from "./pages/course/CoursePage";
// NEW Manipal dynamic course page
import ManipalCoursePage from "./pages/course/ManipalCoursePage";
// NEW Uttaranchal dynamic course page
import UttaranchalCoursePage from "./pages/course/UttaranchalCoursePage";
// NEW VGU dynamic course page
import VguCoursePage from "./pages/course/VguCoursePage";
// NEW Sikkim dynamic course page
import SikkimCoursePage from "./pages/course/SikkimCoursePage";
// NEW Amity dynamic course page
import AmityCoursePage from "./pages/course/AmityCoursePage";
// NEW LPU dynamic course page
import LPUCoursePage from "./pages/course/LPUCoursePage";
// NEW Mangalyatan dynamic course page
import MangalayatanCoursePage from "./pages/course/MangalayatanCoursePage";
// NEW DU SOL dynamic course page
import DUSOLCoursePage from "./pages/course/DUSOLCoursePage";
// NEW Jain dynamic course page
import JainCoursePage from "./pages/course/JainCoursePage";
// Legal pages
import Disclaimer from "./pages/legal/Disclaimer";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsConditions from "./pages/legal/TermsConditions";
import Blog from "./pages/Blog";
import Courses from "./pages/Courses";
import UniversityComparison from "./pages/UniversityComparison";

import OnlineMBAAdmission from "./pages/authority/OnlineMBAAdmission";
import OnlineMBAFees from "./pages/authority/OnlineMBAFees";
import OnlineMBAEligibility from "./pages/authority/OnlineMBAEligibility";
import OnlineBBAAdmission from "./pages/authority/OnlineBBAAdmission";
import OnlineCoursesAdmissionProcess from "./pages/authority/OnlineCoursesAdmissionProcess";
import ScholarshipsPage from "./pages/authority/Scholarships";
import UniversityVsPage from "./pages/comparison/UniversityVsPage";

// Phase 3 — student tools
import UniversityFinder from "./pages/tools/UniversityFinder";
import CourseFinder from "./pages/tools/CourseFinder";
import FeeCalculator from "./pages/tools/FeeCalculator";
import EligibilityChecker from "./pages/tools/EligibilityChecker";
import AdmissionCalendar from "./pages/tools/AdmissionCalendar";
import SearchPage from "./pages/Search";
import Dashboard from "./pages/Dashboard";
import MobileStickyCTA from "@/components/ui/mobile-sticky-cta";
import { recordActivity } from "@/hooks/use-student-activity";
import { getSeoRoute, normalisePath } from "@/data/seo/seo-routes";
import { LEGACY_URL_REDIRECTS } from "@/data/seo/university-urls";
import LegacyCourseRedirect from "@/components/seo/legacy-course-redirect";
import { getBreadcrumbs } from "@/lib/seo/internal-links";

// Component to scroll to top on route change
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return null;
};

/** Records every page view into the local "recently viewed" store. */
const ActivityTracker = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = normalisePath(pathname);
    if (path === "/" || path.startsWith("/dashboard") || path.startsWith("/search")) return;
    const crumbs = getBreadcrumbs(path);
    const title = getSeoRoute(path)?.h1 ?? crumbs[crumbs.length - 1]?.name;
    if (title) recordActivity("recent", { path, title });
  }, [pathname]);

  return null;
};

const App = () => {
  const location = useLocation();
  
  return (
    <>
      {/* Route-registry driven metadata + base schema for every page.
          Page-level <SEOHead> renders after this and overrides it. */}
      <SEOHead />
      <Toaster />
      <Sonner />
      <ScrollToTop />
      <ActivityTracker />
      {!location.pathname.includes('/courses/mba') && <GlobalIntelligentPopup />}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/universities" element={<Universities />} />

          {/* ---- Legacy URL consolidation (one keyword = one page) ----
              Every historical duplicate redirects to its canonical URL. */}
          {Object.entries(LEGACY_URL_REDIRECTS).map(([from, to]) => (
            <Route key={from} path={from} element={<Navigate to={to} replace />} />
          ))}
          <Route
            path="/university/manipal/courses/:courseId"
            element={<LegacyCourseRedirect uni="manipal" />}
          />
          <Route path="/university/:slug/:courseId" element={<LegacyCourseRedirect />} />

          {/* Course Admission SEO Routes */}
          <Route path="/online-mba-admission" element={<OnlineMBAAdmission />} />
          <Route path="/online-mba-fees" element={<OnlineMBAFees />} />
          <Route path="/online-mba-eligibility" element={<OnlineMBAEligibility />} />
          <Route path="/online-bba-admission" element={<OnlineBBAAdmission />} />
          <Route path="/online-courses-admission-process" element={<OnlineCoursesAdmissionProcess />} />
          <Route path="/scholarships" element={<ScholarshipsPage />} />

          {/* Canonical university pages: /universities/{slug}-online */}
          <Route path="/universities/ignou-online" element={<IGNOU />} />
          <Route path="/universities/manipal-online" element={<Manipal />} />
          <Route path="/universities/uttaranchal-online" element={<Uttaranchal />} />
          <Route path="/universities/vgu-online" element={<VGU />} />
          <Route path="/universities/sikkim-manipal-online" element={<Sikkim />} />
          <Route path="/universities/amity-online" element={<Amity />} />
          <Route path="/universities/lpu-online" element={<LPU />} />
          <Route path="/universities/mangalayatan-online" element={<Mangalyatan />} />
          <Route path="/universities/du-sol-online" element={<DUSOL />} />
          <Route path="/universities/jain-online" element={<JainUniversity />} />

          {/* Course category pages */}
          <Route path="/courses/mba" element={<OnlineMBA />} />
          <Route path="/courses/mca" element={<OnlineMCA />} />
          <Route path="/courses/mcom" element={<OnlineMCOM />} />
          <Route path="/courses/ma" element={<OnlineMA />} />
          <Route path="/courses/bca" element={<OnlineTech />} />
          <Route path="/courses/bba" element={<OnlineBBA />} />
          <Route path="/courses/bcom" element={<OnlineCommerce />} />
          <Route path="/courses/ba" element={<OnlineArts />} />

          {/* Canonical university course pages */}
          <Route path="/courses/:courseId" element={<CoursePage />} />
          <Route path="/universities/manipal-online/courses/:courseId" element={<ManipalCoursePage />} />
          <Route path="/universities/uttaranchal-online/courses/:courseId" element={<UttaranchalCoursePage />} />
          <Route path="/universities/vgu-online/courses/:courseId" element={<VguCoursePage />} />
          <Route path="/universities/sikkim-manipal-online/courses/:courseId" element={<SikkimCoursePage />} />
          <Route path="/universities/amity-online/courses/:courseId" element={<AmityCoursePage />} />
          <Route path="/universities/lpu-online/courses/:courseId" element={<LPUCoursePage />} />
          <Route path="/universities/mangalayatan-online/courses/:courseId" element={<MangalayatanCoursePage />} />
          <Route path="/universities/du-sol-online/courses/:courseId" element={<DUSOLCoursePage />} />
          <Route path="/universities/jain-online/courses/:courseId" element={<JainCoursePage />} />

          {/* University Comparison Page */}
          <Route path="/comparison" element={<UniversityComparison />} />
          <Route path="/compare/:slug" element={<UniversityVsPage />} />

          {/* Legal pages */}
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />

          {/* Phase 3 — student tools */}
          <Route path="/tools/university-finder" element={<UniversityFinder />} />
          <Route path="/tools/course-finder" element={<CourseFinder />} />
          <Route path="/tools/fee-calculator" element={<FeeCalculator />} />
          <Route path="/tools/eligibility-checker" element={<EligibilityChecker />} />
          <Route path="/tools/admission-calendar" element={<AdmissionCalendar />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <MobileStickyCTA />
    </>
  );
};

export default App;
