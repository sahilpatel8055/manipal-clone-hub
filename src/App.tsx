import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Routes, Route, useLocation } from "react-router-dom";
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

// SEO redirect pages
import IGNOUPage from "./pages/seo/IGNOUPage";
import ManipalUniversityPage from "./pages/seo/ManipalUniversityPage";
import UttaranchalOnlinePage from "./pages/seo/UttaranchalOnlinePage";
import VGUOnlinePage from "./pages/seo/VGUOnlinePage";
import AmityOnlinePage from "./pages/seo/AmityOnlinePage";
import { 
  ChandigarhUniversityOnlinePage,
  JainUniversityOnlinePage,
  LPUOnlinePage,
  SikkimManipalOnlinePage,
  DYPatilOnlinePage,
  SymbiosisOnlineLearningPage
} from "./pages/seo/UniversityOnlinePages";
import { 
  OnlineManipalPage,
  AmityOnlineKeywordPage,
  OnlineCUPage,
  IGNOUDistancePage,
  OnlineUUPage
} from "./pages/seo/KeywordPages";
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

          {/* SEO Routes */}
          <Route path="/ignou" element={<IGNOUPage />} />
          <Route path="/manipal-university" element={<ManipalUniversityPage />} />
          <Route path="/uu" element={<UttaranchalOnlinePage />} />
          <Route path="/vgu" element={<VGUOnlinePage />} />
          <Route path="/amity-online" element={<AmityOnlinePage />} />
          <Route path="/chandigarh-university-online" element={<ChandigarhUniversityOnlinePage />} />
          <Route path="/jain-university-online" element={<JainUniversityOnlinePage />} />
          <Route path="/lpu-online" element={<LPUOnlinePage />} />
          <Route path="/sikkim-manipal-online" element={<SikkimManipalOnlinePage />} />
          <Route path="/dy-patil-online" element={<DYPatilOnlinePage />} />
          <Route path="/symbiosis-centre-for-online-learning" element={<SymbiosisOnlineLearningPage />} />

          {/* Keyword SEO Routes */}
          <Route path="/onlinemanipal" element={<OnlineManipalPage />} />
          <Route path="/amityonline" element={<AmityOnlineKeywordPage />} />
          <Route path="/onlinecu" element={<OnlineCUPage />} />
          <Route path="/ignoudistance" element={<IGNOUDistancePage />} />
          <Route path="/onlineuu" element={<OnlineUUPage />} />

          {/* Course Admission SEO Routes */}
          <Route path="/online-mba-admission" element={<OnlineMBAAdmission />} />
          <Route path="/online-mba-fees" element={<OnlineMBAFees />} />
          <Route path="/online-mba-eligibility" element={<OnlineMBAEligibility />} />
          <Route path="/online-bba-admission" element={<OnlineBBAAdmission />} />
          <Route path="/online-courses-admission-process" element={<OnlineCoursesAdmissionProcess />} />
          <Route path="/scholarships" element={<ScholarshipsPage />} />

          {/* University-specific course SEO routes */}
          <Route path="/ignou/online-mba" element={<IGNOU />} />
          <Route path="/ignou/online-mca" element={<IGNOU />} />
          <Route path="/manipal/online-mba" element={<Manipal />} />
          <Route path="/manipal/online-bca" element={<Manipal />} />
          <Route path="/amity/online-mba" element={<Amity />} />
          <Route path="/lpu/online-bba" element={<LPU />} />
          <Route path="/chandigarh-university/online-mcom" element={<Universities />} />

          {/* University pages */}
          <Route path="/university/ignou" element={<IGNOU />} />
          <Route path="/university/manipal" element={<Manipal />} />
          <Route path="/university/uttaranchal" element={<Uttaranchal />} />
          <Route path="/university/vgu" element={<VGU />} />
          <Route path="/university/smu" element={<Sikkim />} />
          <Route path="/university/amity" element={<Amity />} />
          <Route path="/university/lpu" element={<LPU />} />
          <Route path="/university/mangalyatan" element={<Mangalyatan />} />
          <Route path="/university/du-sol" element={<DUSOL />} />
          <Route path="/university/jain" element={<JainUniversity />} />

          {/* Course category pages */}
          <Route path="/courses/mba" element={<OnlineMBA />} />
          <Route path="/courses/mca" element={<OnlineMCA />} />
          <Route path="/courses/mcom" element={<OnlineMCOM />} />
          <Route path="/courses/ma" element={<OnlineMA />} />
          <Route path="/courses/bca" element={<OnlineTech />} />
          <Route path="/courses/bba" element={<OnlineBBA />} />
          <Route path="/courses/bcom" element={<OnlineCommerce />} />
          <Route path="/courses/ba" element={<OnlineArts />} />

          {/* Dynamic university course pages */}
          <Route path="/courses/:courseId" element={<CoursePage />} />
          <Route path="/university/manipal/courses/:courseId" element={<ManipalCoursePage />} />
          <Route path="/university/uttaranchal/:courseId" element={<UttaranchalCoursePage />} />
          <Route path="/university/vgu/:courseId" element={<VguCoursePage />} />
          <Route path="/university/sikkim/:courseId" element={<SikkimCoursePage />} />
          <Route path="/university/amity/:courseId" element={<AmityCoursePage />} />
          <Route path="/university/lpu/:courseId" element={<LPUCoursePage />} />
          <Route path="/university/mangalyatan/:courseId" element={<MangalayatanCoursePage />} />
          <Route path="/university/du-sol/:courseId" element={<DUSOLCoursePage />} />
          <Route path="/university/jain/:courseId" element={<JainCoursePage />} />

          {/* University Comparison Page */}
          <Route path="/comparison" element={<UniversityComparison />} />
          <Route path="/compare/:slug" element={<UniversityVsPage />} />

          {/* Legal pages */}
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </>
  );
};

export default App;
