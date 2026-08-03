import NavigationHeader from "@/components/ui/navigation-header";
import Footer from "@/components/ui/footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import WhyOnlineProgramsSection from "@/components/ui/why-online-programs-section";
import { useCounselingForm } from "@/hooks/use-counseling-form";
import SectionNavigation from "@/components/ui/section-navigation";
import UniversityComparisonTable from "@/components/ui/university-comparison-table";
import {
  GraduationCap,
  Clock,
  Users,
  Star,
  CheckCircle,
  MapPin,
  Phone,
  Calendar,
  DollarSign,
  BookOpen,
  Award,
  TrendingUp,
  Building,
  Calculator,
  PieChart,
  Briefcase,
  Layers,
  Search,
} from "lucide-react";
import financeIcon from "@/assets/icons/finance-icon.png";
import manipalLogo from "@/assets/manipal-logo.png";
import uttaranchalLogo from "@/assets/uttaranchal-logo.png";
import vguLogo from "@/assets/vgu-logo.png";
import ignouLogo from "@/assets/ignou-logo.png";
import hiringPartnersImg from "@/assets/hiring-partners.png"; // NEW IMPORT
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

const OnlineCommerce = () => {
  const { openForm, CounselingFormComponent } = useCounselingForm();
  const [activeTab, setActiveTab] = useState("bcom");

  const sections = [
    { id: "top", label: "Home" },
    { id: "stats", label: "Stats" },
    { id: "universities", label: "Universities" },
    { id: "specializations", label: "Specializations" },
    { id: "syllabus", label: "Syllabus" },
    { id: "fee-comparison", label: "Fee Comparison" },
    { id: "skills", label: "Skills" },
    { id: "careers", label: "Careers" },
    { id: "faqs", label: "FAQs" },
  ];

  const topUniversities = [
    {
      name: "Manipal University Online",
      logo: manipalLogo,
      rating: 4.6,
      fees: "₹45,000+/year",
      duration: "3 Years",
      accreditation: "UGC, AICTE, NAAC A+",
    },
    {
      name: "Uttaranchal University",
      logo: uttaranchalLogo,
      rating: 4.5,
      fees: "₹30,000+/year",
      duration: "3 Years",
      accreditation: "UGC, AICTE, NAAC A+",
    },
    {
      name: "Vivekananda Global University",
      logo: vguLogo,
      rating: 4.4,
      fees: "₹25,000+/year",
      duration: "3 Years",
      accreditation: "UGC, AICTE, AIU",
    },
    {
      name: "IGNOU",
      logo: ignouLogo,
      rating: 4.8,
      fees: "₹15,000/year",
      duration: "3 Years",
      accreditation: "UGC, AICTE, NAAC A++",
    },
    {
      name: "Sikkim Manipal University",
      logo: smuLogo,
      rating: 4.5,
      fees: "₹35,000+/year",
      duration: "3 Years",
      accreditation: "UGC, AICTE, NAAC A+",
    },
    {
      name: "Amity University Online",
      logo: amityLogo,
      rating: 4.3,
      fees: "₹40,000+/year",
      duration: "3 Years",
      accreditation: "UGC, AICTE, NAAC A+",
    },
    {
      name: "Lovely Professional University",
      logo: lpuLogo,
      rating: 4.2,
      fees: "₹35,000+/year",
      duration: "3 Years",
      accreditation: "UGC, AICTE, NAAC A+",
    },
    {
      name: "Mangalyatan University",
      logo: mangalyatanLogo,
      rating: 4.1,
      fees: "₹30,000+/year",
      duration: "3 Years",
      accreditation: "UGC, AICTE",
    },
  ];

  const specializations = [
    "Accounting & Finance",
    "Banking & Insurance",
    "Taxation & GST",
    "International Business",
    "Financial Management",
    "Cost Accounting",
    "Business Analytics",
    "Investment Management",
    "Corporate Finance",
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

  const careerOpportunities = [
    "Chartered Accountant (CA)",
    "Financial Analyst",
    "Banking Professional",
    "Tax Consultant",
    "Investment Advisor",
    "Accounts Manager",
    "Financial Planner",
    "Auditor",
    "Budget Analyst",
    "Finance Manager",
  ];

  const faqs = [
    {
      question: "Is Online B.Com degree valid for CA/CS preparation?",
      answer:
        "Yes, Online B.Com from UGC-recognized universities is valid for CA, CS, CMA and other professional courses. It provides strong foundation for these careers.",
    },
    {
      question: "What is the eligibility criteria for Online B.Com?",
      answer:
        "Students must have completed 12th grade with Commerce stream (preferred) or any stream with minimum 50% marks from a recognized board.",
    },
    {
      question: "Can I work while pursuing Online Commerce degree?",
      answer:
        "Yes, Online Commerce programs are designed for working professionals with flexible schedules, recorded lectures, and weekend live sessions.",
    },
    {
      question: "What software and tools are covered in the curriculum?",
      answer:
        "Programs include training on Tally, Excel, GST software, financial modeling tools, and other industry-relevant accounting and finance software.",
    },
    {
      question: "What are the career prospects in Banking sector?",
      answer:
        "Commerce graduates can pursue careers in Banking through IBPS, SBI exams, private banking roles, and specialized positions in investment banking and financial services.",
    },
  ];

  const bcomSyllabus = [
    {
      title: "Year 1",
      subjects: [
        "Financial Accounting",
        "Business Laws",
        "Business Management",
        "Economics for Business",
        "Computer Applications in Business",
      ],
    },
    {
      title: "Year 2",
      subjects: [
        "Corporate Accounting",
        "Cost & Management Accounting",
        "Income Tax Laws",
        "Auditing & Corporate Governance",
        "Banking & Insurance",
      ],
    },
    {
      title: "Year 3",
      subjects: [
        "Financial Management",
        "Goods & Services Tax (GST)",
        "E-Commerce & Digital Marketing",
        "International Business",
        "Project Work",
      ],
    },
  ];

  const skillsObtained = [
    {
      skill: "Financial Accounting",
      icon: "Calculator",
      description:
        "Mastery of accounting principles, financial statements analysis, and reporting.",
    },
    {
      skill: "Financial Management",
      icon: "TrendingUp",
      description:
        "Skills in financial planning, investment analysis, and corporate finance strategies.",
    },
    {
      skill: "Taxation & Compliance",
      icon: "Award",
      description:
        "Knowledge of Income Tax, GST, and other regulatory requirements for businesses.",
    },
    {
      skill: "Business & Corporate Laws",
      icon: "Building",
      description:
        "Understanding of legal frameworks governing business operations and contracts.",
    },
    {
      skill: "Business Analytics",
      icon: "PieChart",
      description:
        "Ability to analyze financial data to make informed business decisions.",
    },
    {
      skill: "Investment & Banking",
      icon: "Briefcase",
      description:
        "Knowledge of banking operations, investment products, and capital markets.",
    },
    {
      skill: "Auditing & Reporting",
      icon: "CheckCircle",
      description:
        "Skills in conducting audits, ensuring financial accuracy and transparency.",
    },
    {
      skill: "Tally & ERP Software",
      icon: "Laptop", // Using Laptop for software
      description:
        "Hands-on experience with industry-standard accounting software and tools.",
    },
  ];

  const careerScope = {
    bcom: [
      {
        role: "Accountant",
        salary: "₹3 - 6 LPA",
      },
      {
        role: "Financial Analyst",
        salary: "₹4 - 8 LPA",
      },
      {
        role: "Tax Consultant",
        salary: "₹3.5 - 7 LPA",
      },
      {
        role: "Auditor",
        salary: "₹4 - 7 LPA",
      },
      {
        role: "Investment Banker",
        salary: "₹5 - 10 LPA",
      },
      {
        role: "Banking Professional",
        salary: "₹4 - 9 LPA",
      },
    ],
  };

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

  return (
    <div className="min-h-screen bg-background">
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
              Online BCOM Programs
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Build your career in finance and commerce with Online B.Com
              programs from India's top universities. Get comprehensive
              knowledge in accounting, finance, taxation, and business
              management.
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
      <section className="py-16 bg-gradient-to-br from-purple-50 to-lavender-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Top Universities for Commerce & Finance
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from India's leading universities offering UGC-approved
              online commerce programs
            </p>
          </div>

          <HorizontalUniversityScroll universities={topUniversities} courseType="Commerce" />
        </div>
      </section>
      
      {/* Why Online Programs Section */}
      <WhyOnlineProgramsSection
        universityName="Top Universities"
        lmsImagePath="/assets/lms/common.png"
      />

      {/* Popular Commerce Specializations - Moved Here */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-lavender-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Popular Commerce Specializations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialize in areas that match your career aspirations in finance
              and commerce
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {specializations.map((spec, index) => (
              <Card
                key={index}
                className="p-4 hover:shadow-md transition-shadow bg-white border border-gray-200/60"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#0052CC]" />
                  <span className="font-medium">{spec}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION: Syllabus - Moved Here */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Online B.Com Subjects/Syllabus
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore the comprehensive curriculum designed to build a strong
              foundation in commerce and finance.
            </p>
          </div>
          <div className="flex justify-center mb-8">
            <Tabs
              defaultValue="bcom"
              onValueChange={setActiveTab}
              className="w-full md:w-3/4 lg:w-1/2"
            >
              <TabsList className="grid w-full grid-cols-1">
                <TabsTrigger value="bcom" className="text-lg">
                  B.Com Subjects
                </TabsTrigger>
              </TabsList>
              <TabsContent value="bcom" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {bcomSyllabus.map((year, index) => (
                    <Card
                      key={index}
                      className="hover:shadow-md transition-shadow"
                    >
                      <CardHeader className="bg-gray-100 border-b">
                        <h3 className="font-bold text-lg">{year.title}</h3>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <ul className="list-none space-y-2">
                          {year.subjects.map((subject, idx) => (
                            <li
                              key={idx}
                              className="flex items-center text-gray-700"
                            >
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              {subject}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* University Comparison Table */}
      <UniversityComparisonTable
        courseName="B.Com"
        universities={[
          {
            name: "Manipal University Online",
            logo: manipalLogo,
            courseFee: "₹1,35,000",
            semesterFee: "₹22,500",
            emiOption: "₹7,500/month",
            registrationFee: "₹5,000",
            rating: 4.6,
            coursePagePath: "/university/manipal/courses/online-bcom"
          },
          {
            name: "Uttaranchal University",
            logo: uttaranchalLogo,
            courseFee: "₹90,000",
            semesterFee: "₹15,000",
            emiOption: "₹5,000/month",
            registrationFee: "₹3,000",
            rating: 4.5,
            coursePagePath: "/university/uttaranchal/online-bcom"
          },
          {
            name: "Vivekananda Global University",
            logo: vguLogo,
            courseFee: "₹75,000",
            semesterFee: "₹12,500",
            emiOption: "₹4,167/month",
            registrationFee: "₹2,500",
            rating: 4.4,
            coursePagePath: "/university/vgu/online-bcom"
          },
          {
            name: "IGNOU",
            logo: ignouLogo,
            courseFee: "₹45,000",
            semesterFee: "₹7,500",
            emiOption: "₹2,500/month",
            registrationFee: "₹1,500",
            rating: 4.8,
            coursePagePath: "/courses/online-bcom"
          },
          {
            name: "Sikkim Manipal University",
            logo: smuLogo,
            courseFee: "₹1,05,000",
            semesterFee: "₹17,500",
            emiOption: "₹5,833/month",
            registrationFee: "₹4,000",
            rating: 4.5,
            coursePagePath: "/university/sikkim/online-bcom"
          },
          {
            name: "Amity University Online",
            logo: amityLogo,
            courseFee: "₹1,20,000",
            semesterFee: "₹20,000",
            emiOption: "₹6,667/month",
            registrationFee: "₹4,500",
            rating: 4.3,
            coursePagePath: "/university/amity/online-bcom"
          },
          {
            name: "Lovely Professional University",
            logo: lpuLogo,
            courseFee: "₹1,05,000",
            semesterFee: "₹17,500",
            emiOption: "₹5,833/month",
            registrationFee: "₹4,000",
            rating: 4.2,
            coursePagePath: "/university/lpu/online-bcom"
          },
          {
            name: "Mangalyatan University",
            logo: mangalyatanLogo,
            courseFee: "₹90,000",
            semesterFee: "₹15,000",
            emiOption: "₹5,000/month",
            registrationFee: "₹3,000",
            rating: 4.1,
            coursePagePath: "/university/mangalyatan/online-bcom"
          }
        ]}
      />

      {/* NEW SECTION: Skills Obtained - Moved Here */}
      <section className="py-16 bg-gradient-to-br from-pink-50 to-purple-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Skills Obtained in Online B.Com Course
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Build a strong foundation and acquire in-demand skills for a
              successful career in finance and commerce.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillsObtained.map((item, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-shadow bg-white border border-gray-200/60"
              >
                {item.icon === "Calculator" && (
                  <Calculator className="h-8 w-8 text-[#0052CC] mx-auto mb-3" />
                )}
                {item.icon === "TrendingUp" && (
                  <TrendingUp className="h-8 w-8 text-[#0052CC] mx-auto mb-3" />
                )}
                {item.icon === "Award" && (
                  <Award className="h-8 w-8 text-[#0052CC] mx-auto mb-3" />
                )}
                {item.icon === "Building" && (
                  <Building className="h-8 w-8 text-[#0052CC] mx-auto mb-3" />
                )}
                {item.icon === "PieChart" && (
                  <PieChart className="h-8 w-8 text-[#0052CC] mx-auto mb-3" />
                )}
                {item.icon === "Briefcase" && (
                  <Briefcase className="h-8 w-8 text-[#0052CC] mx-auto mb-3" />
                )}
                {item.icon === "CheckCircle" && (
                  <CheckCircle className="h-8 w-8 text-[#0052CC] mx-auto mb-3" />
                )}
                {item.icon === "Laptop" && (
                  <Briefcase className="h-8 w-8 text-[#0052CC] mx-auto mb-3" />
                )}
                <h3 className="font-bold mb-2">{item.skill}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION: Career Scope & Top Recruiters - Moved Here */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Career Scope & Top Recruiters
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore lucrative career opportunities and top companies hiring
              commerce graduates.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8">
            <Card className="hover:shadow-lg transition-shadow border border-gray-200/60">
              <CardHeader>
                <h3 className="font-bold text-xl mb-2">
                  <Briefcase className="h-6 w-6 inline-block mr-2 text-[#0052CC]" />
                  Career Opportunities after B.Com
                </h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {careerScope.bcom.map((career, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center bg-gray-50 p-4 rounded-md"
                    >
                      <h4 className="font-medium">{career.role}</h4>
                      <Badge variant="secondary" className="text-sm">
                        {career.salary}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Students Are Working At */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-lavender-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Students Are Working At
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our graduates are employed by leading companies across the globe.
            </p>
          </div>
          <div className="mt-8">
            <img
              src={hiringPartnersImg}
              alt="Our Hiring Partners"
              className="mx-auto w-full max-w-6xl rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Online Commerce & Finance?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get industry-relevant skills with practical knowledge and
              professional guidance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFeatures.map((feature, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-shadow bg-white border border-gray-200/60"
              >
                <CheckCircle className="h-8 w-8 text-[#0052CC] mx-auto mb-3" />
                <h3 className="font-bold mb-2">{feature}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about Online Commerce & Finance
              programs
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border border-gray-200/60">
                <CardHeader>
                  <h3 className="font-bold text-lg">{faq.question}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#0052CC] to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Business Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take the first step towards a successful business career with Online
            B.Com
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-[#0052CC] hover:bg-gray-100"
              onClick={openForm}
            >
              <Phone className="h-5 w-5 mr-2" />
              Get Free Counselling
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#0052CC]"
              onClick={openForm}
            >
              <Calendar className="h-5 w-5 mr-2" />
              Book a Demo
            </Button>
          </div>
        </div>
      </section>
      <RelatedContentSection />
      <EeatBlock />
      <Footer />
      <CounselingFormComponent />
    </div>
  );
};

export default OnlineCommerce;
