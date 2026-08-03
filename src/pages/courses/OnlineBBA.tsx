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
  Briefcase,
  Layers,
  PieChart,
  ClipboardList,
} from "lucide-react";
import bbaIcon from "@/assets/icons/bba-icon.png";
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


const OnlineBBA = () => {
  const { openForm, CounselingFormComponent } = useCounselingForm();
  const [activeTab, setActiveTab] = useState("bba");

  const sections = [
    { id: "top", label: "Home" },
    { id: "stats", label: "Stats" },
    { id: "universities", label: "Universities" },
    { id: "specializations", label: "Specializations" },
    { id: "syllabus", label: "Syllabus" },
    { id: "fee-comparison", label: "Fee Comparison" },
    { id: "skills", label: "Skills" },
    { id: "careers", label: "Careers" },
    { id: "faqs", label: "FAQs" }
  ];

  const topUniversities = [
    {
      name: "Manipal University Online",
      logo: manipalLogo,
      rating: 4.6,
      fees: "₹55,000+/year",
      duration: "3 Years",
      accreditation: "UGC, AICTE, NAAC A+",
    },
    {
      name: "Uttaranchal University",
      logo: uttaranchalLogo,
      rating: 4.5,
      fees: "₹35,000+/year",
      duration: "3 Years",
      accreditation: "UGC, AICTE, NAAC A+",
    },
    {
      name: "Vivekananda Global University",
      logo: vguLogo,
      rating: 4.4,
      fees: "₹30,000+/year",
      duration: "3 Years",
      accreditation: "UGC, AICTE, AIU",
    },
    {
      name: "IGNOU",
      logo: ignouLogo,
      rating: 4.8,
      fees: "₹18,000/year",
      duration: "3 Years",
      accreditation: "UGC, AICTE, NAAC A++",
    },
    {
      name: "Sikkim Manipal University",
      logo: smuLogo,
      rating: 4.5,
      fees: "₹40,000+/year",
      duration: "3 Years",
      accreditation: "UGC, AICTE, NAAC A+",
    },
    {
      name: "Amity University Online",
      logo: amityLogo,
      rating: 4.3,
      fees: "₹50,000+/year",
      duration: "3 Years",
      accreditation: "UGC, AICTE, NAAC A+",
    },
    {
      name: "Lovely Professional University",
      logo: lpuLogo,
      rating: 4.2,
      fees: "₹45,000+/year",
      duration: "3 Years",
      accreditation: "UGC, AICTE, NAAC A+",
    },
    {
      name: "Mangalyatan University",
      logo: mangalyatanLogo,
      rating: 4.1,
      fees: "₹35,000+/year",
      duration: "3 Years",
      accreditation: "UGC, AICTE",
    },
  ];

  const specializations = [
    "Digital Marketing",
    "Finance Management",
    "Human Resource Management",
    "International Business",
    "Marketing Management",
    "Operations Management",
    "Entrepreneurship",
    "Business Analytics",
    "Retail Management",
    "Banking & Insurance",
  ];

  const keyFeatures = [
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
      question: "Is Online BBA degree valid and recognized?",
      answer:
        "Yes, Online BBA from UGC-recognized universities holds the same value as regular BBA. It is accepted by employers and for further studies like MBA.",
    },
    {
      question: "What is the eligibility criteria for Online BBA?",
      answer:
        "Students must have completed 12th grade (10+2) from any stream (Science, Commerce, Arts) with minimum 50% marks from a recognized board.",
    },
    {
      question: "Can I pursue MBA after Online BBA?",
      answer:
        "Yes, Online BBA graduates are eligible for MBA admission in all universities, including top business schools and for CAT, MAT, XAT exams.",
    },
    {
      question: "What are the career prospects after Online BBA?",
      answer:
        "BBA graduates can work in various roles like Business Analyst, Marketing Executive, HR roles, Sales Manager, and can also start their own business.",
    },
    {
      question: "How is Online BBA different from regular BBA?",
      answer:
        "Online BBA offers the same curriculum with flexible timing. Students can learn from anywhere while maintaining work-study balance with live sessions and recorded classes.",
    },
  ];

  // NEW DATA ADDED
  const bbaSyllabus = [
    {
      title: "Year 1",
      subjects: [
        "Principles of Management",
        "Financial Accounting",
        "Business Law",
        "Business Statistics",
        "Microeconomics",
      ],
    },
    {
      title: "Year 2",
      subjects: [
        "Organizational Behavior",
        "Marketing Management",
        "Human Resource Management",
        "Production & Operations Management",
        "Management Accounting",
      ],
    },
    {
      title: "Year 3",
      subjects: [
        "Financial Management",
        "International Business",
        "Strategic Management",
        "Entrepreneurship",
        "Project Work & Viva Voce",
      ],
    },
  ];

  const skillsObtained = [
    {
      skill: "Leadership Skills",
      icon: "Award",
      description:
        "Ability to lead teams, motivate employees, and drive organizational goals.",
    },
    {
      skill: "Strategic Thinking",
      icon: "TrendingUp",
      description:
        "Develop and implement long-term business strategies for growth and sustainability.",
    },
    {
      skill: "Financial Management",
      icon: "DollarSign",
      description:
        "Skills in budgeting, financial analysis, and making informed financial decisions.",
    },
    {
      skill: "Marketing & Sales",
      icon: "Briefcase",
      description:
        "Understanding of market dynamics, customer behavior, and sales strategies.",
    },
    {
      skill: "Business Analytics",
      icon: "PieChart",
      description:
        "Using data to analyze business performance and identify areas for improvement.",
    },
    {
      skill: "Problem Solving",
      icon: "ClipboardList",
      description:
        "Critical thinking to identify, analyze, and solve complex business problems.",
    },
  ];

  const careerScope = {
    roles: [
      {
        role: "Business Analyst",
        salary: "₹4 - 8 LPA",
      },
      {
        role: "Marketing Manager",
        salary: "₹5 - 9 LPA",
      },
      {
        role: "Human Resource Manager",
        salary: "₹4 - 7 LPA",
      },
      {
        role: "Financial Analyst",
        salary: "₹4 - 8 LPA",
      },
      {
        role: "Operations Manager",
        salary: "₹5 - 9 LPA",
      },
      {
        role: "Digital Marketing Specialist",
        salary: "₹3 - 6 LPA",
      },
    ],
  };

  const topRecruiters = [
    "TCS",
    "Amazon",
    "Wipro",
    "HCL",
    "Genpact",
    "Accenture",
    "Infosys",
    "Capgemini",
    "Deloitte",
    "EY",
    "KPMG",
    "PwC",
  ];
  // END OF NEW DATA

  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      <SeoBreadcrumbs />

      {/* Hero Section */}
      <section id="top" className="py-12 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="mb-6">
              <img src={bbaIcon} alt="BBA" className="h-16 w-16 mx-auto mb-4" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Online BBA Programs
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Start your business career with an Online BBA from India's top
              universities. Get comprehensive business education with flexibility
              and industry exposure.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge className="bg-[#0052CC] text-white text-base px-4 py-2">
                <Award className="h-4 w-4 mr-2" />
                UGC Approved
              </Badge>
              <Badge className="bg-[#0052CC] text-white text-base px-4 py-2">
                <Briefcase className="h-4 w-4 mr-2" />
                Industry Ready
              </Badge>
              <Badge className="bg-[#0052CC] text-white text-base px-4 py-2">
                <TrendingUp className="h-4 w-4 mr-2" />
                Career Growth
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
              <div className="text-3xl font-bold text-[#0052CC] mb-2">40+</div>
              <div className="text-gray-600">Universities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0052CC] mb-2">100+</div>
              <div className="text-gray-600">Specializations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0052CC] mb-2">
                3 Years
              </div>
              <div className="text-gray-600">Duration</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0052CC] mb-2">90%</div>
              <div className="text-gray-600">Placement Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Universities */}
      <section id="universities" className="py-16 bg-gradient-to-br from-purple-50 to-lavender-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Top Universities for Online BBA
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from India's leading universities offering UGC-approved
              Online BBA programs
            </p>
          </div>

          <HorizontalUniversityScroll universities={topUniversities} courseType="BBA" />
        </div>
      </section>


      {/* Why Online Programs Section */}
      <WhyOnlineProgramsSection 
        universityName="Top Universities" 
        lmsImagePath="/assets/lms/common.png" 
      />

      {/* Specializations */}
      <section id="specializations" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Popular BBA Specializations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from a wide range of specializations to match your career
              interests
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {specializations.map((spec, index) => (
              <Card
                key={index}
                className="p-3 md:p-4 hover:shadow-md transition-shadow border border-gray-200/60"
              >
                <div className="flex items-center gap-2 md:gap-3">
                  <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-[#0052CC] flex-shrink-0" />
                  <span className="font-medium text-sm md:text-base leading-tight">{spec}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* NEW SECTION: Syllabus */}
      <section id="syllabus" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Online BBA Subjects/Syllabus
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore the comprehensive curriculum designed to build a strong
              foundation in business administration.
            </p>
          </div>
          <div className="flex justify-center mb-8">
            <Tabs
              defaultValue="bba"
              onValueChange={setActiveTab}
              className="w-full md:w-3/4 lg:w-1/2"
            >
              <TabsList className="grid w-full grid-cols-1">
                <TabsTrigger value="bba" className="text-lg">
                  BBA Subjects
                </TabsTrigger>
              </TabsList>
              <TabsContent value="bba" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {bbaSyllabus.map((year, index) => (
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
        courseName="BBA" 
        universities={[
          {
            name: "Manipal University Online",
            logo: manipalLogo,
            courseFee: "₹1,65,000",
            semesterFee: "₹27,500",
            emiOption: "₹9,167/month",
            registrationFee: "₹5,000",
            rating: 4.6,
            coursePagePath: "/university/manipal/courses/online-bba"
          },
          {
            name: "Uttaranchal University",
            logo: uttaranchalLogo,
            courseFee: "₹1,05,000",
            semesterFee: "₹17,500",
            emiOption: "₹5,833/month",
            registrationFee: "₹3,000",
            rating: 4.5,
            coursePagePath: "/university/uttaranchal/online-bba"
          },
          {
            name: "Vivekananda Global University",
            logo: vguLogo,
            courseFee: "₹90,000",
            semesterFee: "₹15,000",
            emiOption: "₹5,000/month",
            registrationFee: "₹2,500",
            rating: 4.4,
            coursePagePath: "/university/vgu/online-bba"
          },
          {
            name: "IGNOU",
            logo: ignouLogo,
            courseFee: "₹54,000",
            semesterFee: "₹9,000",
            emiOption: "₹3,000/month",
            registrationFee: "₹1,500",
            rating: 4.8,
            coursePagePath: "/courses/online-bba"
          },
          {
            name: "Sikkim Manipal University",
            logo: smuLogo,
            courseFee: "₹1,20,000",
            semesterFee: "₹20,000",
            emiOption: "₹6,667/month",
            registrationFee: "₹4,000",
            rating: 4.5,
            coursePagePath: "/university/sikkim/online-bba"
          },
          {
            name: "Amity University Online",
            logo: amityLogo,
            courseFee: "₹1,50,000",
            semesterFee: "₹25,000",
            emiOption: "₹8,333/month",
            registrationFee: "₹4,500",
            rating: 4.3,
            coursePagePath: "/university/amity/online-bba"
          },
          {
            name: "Lovely Professional University",
            logo: lpuLogo,
            courseFee: "₹1,35,000",
            semesterFee: "₹22,500",
            emiOption: "₹7,500/month",
            registrationFee: "₹4,000",
            rating: 4.2,
            coursePagePath: "/university/lpu/online-bba"
          },
          {
            name: "Mangalyatan University",
            logo: mangalyatanLogo,
            courseFee: "₹1,05,000",
            semesterFee: "₹17,500",
            emiOption: "₹5,833/month",
            registrationFee: "₹3,000",
            rating: 4.1,
            coursePagePath: "/university/mangalyatan/online-bba"
          }
        ]}
      />

      {/* NEW SECTION: Skills Obtained */}
      <section id="skills" className="py-16 bg-gradient-to-br from-pink-50 to-purple-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Skills Obtained in Online BBA Course
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Build a strong foundation and acquire in-demand skills for a
              successful management career.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsObtained.map((item, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-shadow bg-white border border-gray-200/60"
              >
                {item.icon === "Award" && (
                  <Award className="h-8 w-8 text-[#0052CC] mx-auto mb-3" />
                )}
                {item.icon === "TrendingUp" && (
                  <TrendingUp className="h-8 w-8 text-[#0052CC] mx-auto mb-3" />
                )}
                {item.icon === "DollarSign" && (
                  <DollarSign className="h-8 w-8 text-[#0052CC] mx-auto mb-3" />
                )}
                {item.icon === "Briefcase" && (
                  <Briefcase className="h-8 w-8 text-[#0052CC] mx-auto mb-3" />
                )}
                {item.icon === "PieChart" && (
                  <PieChart className="h-8 w-8 text-[#0052CC] mx-auto mb-3" />
                )}
                {item.icon === "ClipboardList" && (
                  <ClipboardList className="h-8 w-8 text-[#0052CC] mx-auto mb-3" />
                )}
                <h3 className="font-bold mb-2">{item.skill}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION: Career Scope & Top Recruiters */}
      <section id="careers" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Career Scope & Top Recruiters
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore lucrative career opportunities and top companies hiring BBA
              graduates.
            </p>
          </div>
          <Card className="hover:shadow-lg transition-shadow border border-gray-200/60">
            <CardHeader>
              <h3 className="font-bold text-xl mb-2">
                <Briefcase className="h-6 w-6 inline-block mr-2 text-[#0052CC]" />
                Career Opportunities after BBA
              </h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {careerScope.roles.map((career, index) => (
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

          <div className="mt-8 text-center">
            <h3 className="font-bold text-2xl mb-4">Top Recruiters</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {topRecruiters.map((recruiter, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="text-base px-4 py-2"
                >
                  {recruiter}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* NEW SECTION: Our Students Are Working At */}
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

      {/* Career Opportunities - Original Section, now removed and replaced by the new section */}
      {/* Key Features - This section now follows the new sections */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Online BBA?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience comprehensive business education with modern learning
              methods
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFeatures.map((feature, index) => (
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

      {/* FAQ Section */}
      <section id="faqs" className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about Online BBA programs
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="bg-white border border-gray-200/60"
              >
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
            BBA
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

      <SectionNavigation sections={sections} />
      <RelatedContentSection />
      <EeatBlock />
      <Footer />
      <CounselingFormComponent />
    </div>
  );
};

export default OnlineBBA;
