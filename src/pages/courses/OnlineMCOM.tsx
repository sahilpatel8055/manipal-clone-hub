import NavigationHeader from "@/components/ui/navigation-header";
import Footer from "@/components/ui/footer";
import CourseClusterSection from "@/components/ui/course-cluster-section";
import SEOHead from "@/components/ui/seo-head";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import WhyOnlineProgramsSection from "@/components/ui/why-online-programs-section";
import { useCounselingForm } from "@/hooks/use-counseling-form";
import SectionNavigation from "@/components/ui/section-navigation";
import RelevantBlogsSection from "@/components/ui/relevant-blogs-section";
import AdmissionProcedureSection from "@/components/ui/admission-procedure-section";
import {
  GraduationCap,
  Clock,
  Users,
  Star,
  CheckCircle,
  Phone,
  BookOpen,
  Award,
  TrendingUp,
  Building,
  Calculator,
  PieChart,
  Briefcase,
  Laptop,
} from "lucide-react";
import financeIcon from "@/assets/icons/finance-icon.png";
import manipalLogo from "@/assets/manipal-logo.png";
import uttaranchalLogo from "@/assets/uttaranchal-logo.png";
import vguLogo from "@/assets/vgu-logo.png";
import ignouLogo from "@/assets/ignou-logo.png";
import hiringPartnersImg from "@/assets/hiring-partners.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import smuLogo from "@/assets/smu-logo.jpg";
import amityLogo from "@/assets/amity-logo.jpg";
import lpuLogo from "@/assets/lpu-logo.jpg";
import mangalyatanLogo from "@/assets/mangalyatan-logo.png";
import HorizontalUniversityScroll from "@/components/ui/horizontal-university-scroll";
import SeoBreadcrumbs from "@/components/ui/seo-breadcrumbs";
import RelatedContentSection from "@/components/ui/related-content-section";
import EeatBlock from "@/components/ui/eeat-block";

const OnlineMCOM = () => {
  const { openForm, CounselingFormComponent } = useCounselingForm();
  const [activeTab, setActiveTab] = useState("mcom");

  const sections = [
    { id: "top", label: "Home" },
    { id: "stats", label: "Stats" },
    { id: "universities", label: "Universities" },
    { id: "specializations", label: "Specializations" },
    { id: "syllabus", label: "Syllabus" },
    { id: "fee-comparison", label: "Fee Comparison" },
    { id: "skills", label: "Skills" },
    { id: "admission", label: "Admission" },
    { id: "careers", label: "Careers" },
    { id: "faqs", label: "FAQs" }
  ];

  const topUniversities = [
    {
      name: "Manipal University Online",
      logo: manipalLogo,
      rating: 4.6,
      fees: "₹45,000+/year",
      duration: "2 Years",
      accreditation: "UGC, AICTE, NAAC A+",
    },
    {
      name: "Uttaranchal University",
      logo: uttaranchalLogo,
      rating: 4.5,
      fees: "₹30,000+/year",
      duration: "2 Years",
      accreditation: "UGC, AICTE, NAAC A+",
    },
    {
      name: "Vivekananda Global University",
      logo: vguLogo,
      rating: 4.4,
      fees: "₹25,000+/year",
      duration: "2 Years",
      accreditation: "UGC, AICTE, AIU",
    },
    {
      name: "IGNOU",
      logo: ignouLogo,
      rating: 4.8,
      fees: "₹15,000/year",
      duration: "2 Years",
      accreditation: "UGC, AICTE, NAAC A++",
    },
    {
      name: "Sikkim Manipal University",
      logo: smuLogo,
      rating: 4.5,
      fees: "₹35,000+/year",
      duration: "2 Years",
      accreditation: "UGC, AICTE, NAAC A+",
    },
    {
      name: "Amity University Online",
      logo: amityLogo,
      rating: 4.3,
      fees: "₹40,000+/year",
      duration: "2 Years",
      accreditation: "UGC, AICTE, NAAC A+",
    },
    {
      name: "Lovely Professional University",
      logo: lpuLogo,
      rating: 4.2,
      fees: "₹35,000+/year",
      duration: "2 Years",
      accreditation: "UGC, AICTE, NAAC A+",
    },
    {
      name: "Mangalyatan University",
      logo: mangalyatanLogo,
      rating: 4.1,
      fees: "₹30,000+/year",
      duration: "2 Years",
      accreditation: "UGC, AICTE",
    },
  ];

  const specializations = [
    "Financial Management",
    "Cost & Management Accounting",
    "Business Analytics",
    "International Finance",
    "Taxation & GST",
    "Corporate Accounting",
    "Investment Management",
    "Banking & Insurance",
    "Auditing & Assurance",
    "Financial Planning",
  ];

  const keyFeatures = [
    "Industry-Updated Curriculum",
    "CA/CS Faculty Guidance",
    "Practical Case Studies",
    "Flexible Learning Schedule",
    "Live Financial Sessions",
    "Accounting Software Training",
    "Industry Internships",
    "Professional Certification Support",
  ];
  
  const bbaKeyFeatures = [
    "Industry-Relevant Curriculum",
    "Case Study Methodology",
    "Expert Faculty from Industry",
    "Flexible Learning Schedule",
    "Live Interactive Sessions",
    "Business Project Work",
    "Internship Opportunities",
    "Career Guidance & Placement",
  ];

  const faqs = [
    {
      question: "Is Online M.Com degree valid for CA/CS preparation?",
      answer:
        "Yes, Online M.Com from UGC-recognized universities is valid for CA, CS, CMA and other professional courses. It provides advanced foundation for these careers.",
    },
    {
      question: "What is the eligibility criteria for Online M.Com?",
      answer:
        "Bachelor's degree in Commerce (B.Com) or equivalent from a recognized university with minimum 50% marks. Some universities may accept graduates from other streams.",
    },
    {
      question: "Can I work while pursuing Online M.Com?",
      answer:
        "Yes, Online M.Com programs are designed for working professionals with flexible schedules, recorded lectures, and weekend live sessions.",
    },
    {
      question: "What software and tools are covered in the curriculum?",
      answer:
        "Programs include advanced training on Tally, Excel, GST software, financial modeling tools, and other industry-relevant accounting and finance software.",
    },
    {
      question: "What are the career prospects after M.Com?",
      answer:
        "M.Com graduates can pursue careers as Finance Manager, Senior Accountant, Financial Analyst, Corporate Analyst, or continue with PhD for academic careers.",
    },
  ];

  const mcomSyllabus = [
    {
      title: "Year 1",
      subjects: [
        "Advanced Financial Accounting",
        "Corporate Financial Management",
        "Advanced Cost Accounting",
        "Managerial Economics",
        "Strategic Management",
      ],
    },
    {
      title: "Year 2",
      subjects: [
        "International Financial Management",
        "Business Environment",
        "E-Commerce & Digital Marketing",
        "Specialization Electives (e.g., Finance, Taxation)",
        "Research Project/Dissertation",
      ],
    },
  ];

  const skillsObtained = [
    {
      skill: "Advanced Financial Accounting",
      icon: "Calculator",
      description:
        "Advanced knowledge of accounting principles, financial statements analysis, and corporate reporting.",
    },
    {
      skill: "Financial Management",
      icon: "TrendingUp",
      description:
        "Advanced skills in financial planning, investment analysis, and corporate finance strategies.",
    },
    {
      skill: "Business Analytics",
      icon: "PieChart",
      description:
        "Advanced ability to analyze financial data and make strategic business decisions.",
    },
    {
      skill: "Taxation & Compliance",
      icon: "Award",
      description:
        "Advanced knowledge of Income Tax, GST, international taxation, and regulatory compliance.",
    },
    {
      skill: "Research & Analysis",
      icon: "Building",
      description:
        "Advanced research methodologies and analytical skills for business problem solving.",
    },
    {
      skill: "Investment & Banking",
      icon: "Briefcase",
      description:
        "Advanced knowledge of investment products, banking operations, and capital markets.",
    },
    {
      skill: "Cost Management",
      icon: "CheckCircle",
      description:
        "Advanced skills in cost accounting, budgeting, and performance evaluation.",
    },
    {
      skill: "ERP & Software",
      icon: "Laptop",
      description:
        "Advanced proficiency with industry-standard accounting software and ERP systems.",
    },
  ];

  const careerScope = [
    {
      role: "Finance Manager",
      salary: "₹8 - 15 LPA",
    },
    {
      role: "Senior Accountant",
      salary: "₹6 - 10 LPA",
    },
    {
      role: "Financial Risk Manager",
      salary: "₹9 - 18 LPA",
    },
    {
      role: "Corporate Analyst",
      salary: "₹7 - 14 LPA",
    },
    {
      role: "Cost & Management Accountant",
      salary: "₹7 - 12 LPA",
    },
    {
      role: "Professor/Lecturer",
      salary: "₹6 - 11 LPA",
    },
  ];

  const topRecruiters = [
    "Deloitte",
    "PwC",
    "EY",
    "KPMG",
    "HDFC Bank",
    "ICICI Bank",
    "HSBC",
    "TCS",
    "Genpact",
    "Accenture",
    "Amazon",
    "Wipro",
  ];

  const comparisonData = [
    {
      name: "Manipal University Online",
      logo: manipalLogo,
      courseFee: "₹90,000",
      semesterFee: "₹22,500",
      emiOption: "₹7,500/month",
      registrationFee: "₹5,000",
      rating: 4.6,
      coursePagePath: "/universities/manipal-online/courses/online-mcom"
    },
    {
      name: "Uttaranchal University",
      logo: uttaranchalLogo,
      courseFee: "₹60,000",
      semesterFee: "₹15,000",
      emiOption: "₹5,000/month",
      registrationFee: "₹3,000",
      rating: 4.5,
      coursePagePath: "/universities/uttaranchal-online/courses/online-mcom"
    },
    {
      name: "Vivekananda Global University",
      logo: vguLogo,
      courseFee: "₹50,000",
      semesterFee: "₹12,500",
      emiOption: "₹4,166/month",
      registrationFee: "₹2,500",
      rating: 4.4,
      coursePagePath: "/universities/vgu-online/courses/online-mcom"
    },
    {
      name: "Lovely Professional University",
      logo: lpuLogo,
      courseFee: "₹70,000",
      semesterFee: "₹17,500",
      emiOption: "₹5,833/month",
      registrationFee: "₹4,000",
      rating: 4.2,
      coursePagePath: "/universities/lpu-online/courses/online-mcom"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Online M.Com Programs - Master of Commerce"
        description="Pursue Online M.Com from top universities. Advanced commerce program with specializations in Financial Management, Business Analytics, Taxation. Get placement assistance and industry-relevant curriculum."
        keywords="online mcom, master of commerce, online commerce masters, mcom degree online"
        canonical="https://avedu.in/courses/mcom"
      />
      <NavigationHeader />
      <SeoBreadcrumbs />

      {/* Hero Section */}
      <section id="top" className="py-12 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="mb-6">
              <img
                src={financeIcon}
                alt="Commerce & Finance"
                className="h-16 w-16 mx-auto mb-4"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Online Master of Commerce (M.Com)
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Advance your career in finance and commerce with Online M.Com programs from India's top universities. 
              Get specialized knowledge in financial management, accounting, and business analytics.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge className="bg-[#0052CC] text-white text-base px-4 py-2">
                <Calculator className="h-4 w-4 mr-2" />
                CA/CS Foundation
              </Badge>
              <Badge className="bg-[#0052CC] text-white text-base px-4 py-2">
                <PieChart className="h-4 w-4 mr-2" />
                Finance Focused
              </Badge>
              <Badge className="bg-[#0052CC] text-white text-base px-4 py-2">
                <Building className="h-4 w-4 mr-2" />
                Banking Ready
              </Badge>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-[#0052CC] hover:bg-[#003d99]" onClick={openForm}>
                <Phone className="h-5 w-5 mr-2" />
                Get Free Counselling
              </Button>
              <Button size="lg" variant="outline" onClick={openForm}>
                <BookOpen className="h-5 w-5 mr-2" />
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      <SectionNavigation sections={sections} />

      {/* Quick Stats */}
      <section id="stats" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0052CC] mb-2">35+</div>
              <div className="text-gray-600">Universities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0052CC] mb-2">80+</div>
              <div className="text-gray-600">Specializations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0052CC] mb-2">85%</div>
              <div className="text-gray-600">Placement Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0052CC] mb-2">300+</div>
              <div className="text-gray-600">Industry Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Universities */}
      <section id="universities" className="py-16 bg-gradient-to-br from-purple-50 to-lavender-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Top Universities for Online M.Com
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from India's leading universities offering UGC-approved online M.Com programs
            </p>
          </div>

          <HorizontalUniversityScroll universities={topUniversities} courseType="M.Com" />
        </div>
      </section>
      
      {/* Why Online Programs Section */}
      <WhyOnlineProgramsSection universityName="Top Universities" lmsImagePath="/assets/lms/common.png" />

      {/* Specializations */}
      <section id="specializations" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              M.Com Specializations
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {specializations.map((spec, index) => (
              <Card key={index} className="text-center p-4">
                <CardContent className="p-0">
                  <span className="font-medium text-sm">{spec}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Syllabus */}
      <section id="syllabus" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">M.Com Curriculum</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Advanced curriculum covering latest concepts in commerce and finance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mcomSyllabus.map((year, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <h3 className="text-xl font-bold text-center">{year.title}</h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {year.subjects.map((subject, subIndex) => (
                      <li key={subIndex} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-[#0052CC] mt-1 flex-shrink-0" />
                        <span className="text-sm">{subject}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills You'll Gain</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillsObtained.map((skill, index) => (
              <Card key={index} className="text-center p-6 h-full">
                <CardContent>
                  <div className="mb-4">
                    {skill.icon === "Calculator" && <Calculator className="h-12 w-12 text-[#0052CC] mx-auto" />}
                    {skill.icon === "TrendingUp" && <TrendingUp className="h-12 w-12 text-[#0052CC] mx-auto" />}
                    {skill.icon === "PieChart" && <PieChart className="h-12 w-12 text-[#0052CC] mx-auto" />}
                    {skill.icon === "Award" && <Award className="h-12 w-12 text-[#0052CC] mx-auto" />}
                    {skill.icon === "Building" && <Building className="h-12 w-12 text-[#0052CC] mx-auto" />}
                    {skill.icon === "Briefcase" && <Briefcase className="h-12 w-12 text-[#0052CC] mx-auto" />}
                    {skill.icon === "CheckCircle" && <CheckCircle className="h-12 w-12 text-[#0052CC] mx-auto" />}
                    {skill.icon === "Laptop" && <Laptop className="h-12 w-12 text-[#0052CC] mx-auto" />}
                  </div>
                  <h3 className="font-bold mb-2">{skill.skill}</h3>
                  <p className="text-sm text-gray-600">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Procedure */}
      <AdmissionProcedureSection courseName="Online M.Com" type="course" />

      {/* Career Scope & Top Recruiters */}
      <section id="careers" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Career Scope & Top Recruiters
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore high-paying career opportunities after completing your Online M.Com
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Career Opportunities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {careerScope.map((career, index) => (
                  <Card key={index} className="p-4">
                    <CardContent className="p-0">
                      <div className="flex justify-between items-center">
                        <h4 className="font-semibold">{career.role}</h4>
                        <Badge className="bg-green-100 text-green-800">
                          {career.salary}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Top Recruiters</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {topRecruiters.map((recruiter, index) => (
                  <Card key={index} className="p-4 text-center">
                    <CardContent className="p-0">
                      <span className="font-medium">{recruiter}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <img
              src={hiringPartnersImg}
              alt="Our students are working at top companies"
              className="mx-auto max-w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      
      {/* Why Choose Online BBA? - New Section Added */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Online M.COM?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience comprehensive business education with modern learning
              methods
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bbaKeyFeatures.map((feature, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-shadow border border-gray-200/60"
              >
                <CheckCircle className="h-8 w-8 text-[#0052CC] mx-auto mb-3" />
                <h3 className="font-bold mb-2">{feature}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <RelevantBlogsSection pageType="course" />
      <CourseClusterSection courseKey="mcom" />
      <RelatedContentSection />
      <EeatBlock />
      <Footer />
      <CounselingFormComponent />
    </div>
  );
};

export default OnlineMCOM;
