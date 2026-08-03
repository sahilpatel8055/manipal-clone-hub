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
  Palette,
  Globe,
  Users2,
  Lightbulb,
  MessageSquare,
  Search,
  ClipboardList,
} from "lucide-react";
import manipalLogo from "@/assets/manipal-logo.png";
import uttaranchalLogo from "@/assets/uttaranchal-logo.png";
import vguLogo from "@/assets/vgu-logo.png";
import ignouLogo from "@/assets/ignou-logo.png";
import hiringPartnersImg from "@/assets/hiring-partners.png";
import smuLogo from "@/assets/smu-logo.jpg";
import amityLogo from "@/assets/amity-logo.jpg";
import lpuLogo from "@/assets/lpu-logo.jpg";
import mangalyatanLogo from "@/assets/mangalyatan-logo.png";
import HorizontalUniversityScroll from "@/components/ui/horizontal-university-scroll";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import SeoBreadcrumbs from "@/components/ui/seo-breadcrumbs";
import RelatedContentSection from "@/components/ui/related-content-section";
import EeatBlock from "@/components/ui/eeat-block";

const OnlineArts = () => {
  const { openForm, CounselingFormComponent } = useCounselingForm();
  const [activeTab, setActiveTab] = useState("ba");

  const sections = [
    { id: "top", label: "Home" },
    { id: "stats", label: "Stats" },
    { id: "universities", label: "Universities" },
    { id: "programs", label: "Programs" },
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
      fees: "₹40,000+/year",
      duration: "3 Years",
      accreditation: "UGC, AICTE, NAAC A+",
    },
    {
      name: "Uttaranchal University",
      logo: uttaranchalLogo,
      rating: 4.5,
      fees: "₹25,000+/year",
      duration: "3 Years",
      accreditation: "UGC, AICTE, NAAC A+",
    },
    {
      name: "Vivekananda Global University",
      logo: vguLogo,
      rating: 4.4,
      fees: "₹22,000+/year",
      duration: "3 Years",
      accreditation: "UGC, AICTE, AIU",
    },
    {
      name: "IGNOU",
      logo: ignouLogo,
      rating: 4.8,
      fees: "₹12,000/year",
      duration: "3 Years",
      accreditation: "UGC, AICTE, NAAC A++",
    },
    {
      name: "Sikkim Manipal University",
      logo: smuLogo,
      rating: 4.5,
      fees: "₹30,000+/year",
      duration: "3 Years",
      accreditation: "UGC, AICTE, NAAC A+",
    },
    {
      name: "Amity University Online",
      logo: amityLogo,
      rating: 4.3,
      fees: "₹35,000+/year",
      duration: "3 Years",
      accreditation: "UGC, AICTE, NAAC A+",
    },
    {
      name: "Lovely Professional University",
      logo: lpuLogo,
      rating: 4.2,
      fees: "₹30,000+/year",
      duration: "3 Years",
      accreditation: "UGC, AICTE, NAAC A+",
    },
    {
      name: "Mangalyatan University",
      logo: mangalyatanLogo,
      rating: 4.1,
      fees: "₹25,000+/year",
      duration: "3 Years",
      accreditation: "UGC, AICTE",
    },
  ];

  const specializations = [
    "English Literature",
    "Psychology",
    "Political Science",
    "History",
    "Sociology",
    "Economics",
    "Philosophy",
    "Public Administration",
    "Social Work",
    "Journalism & Mass Communication",
    "Fine Arts",
    "Languages & Linguistics",
  ];

  const keyFeatures = [
    "Flexible Learning Schedule",
    "Expert Faculty Guidance",
    "Research Methodology Training",
    "Interactive Virtual Classes",
    "Digital Library Access",
    "Assignment & Project Support",
    "Career Counselling",
    "Industry Exposure Programs",
  ];

  const faqs = [
    {
      question: "Is Online BA/MA degree valid for government jobs?",
      answer:
        "Yes, Online BA/MA from UGC-recognized universities is valid for all government jobs, civil services, teaching positions, and further studies like MA, PhD.",
    },
    {
      question: "What is the eligibility criteria for Online BA?",
      answer:
        "Students must have completed 12th grade from any stream (Arts, Commerce, Science) with minimum 50% marks from a recognized board.",
    },
    {
      question: "Can I pursue B.Ed after Online BA?",
      answer:
        "Yes, Online BA graduates are eligible for B.Ed admission in all universities. Many students pursue teaching careers after BA + B.Ed combination.",
    },
    {
      question: "What are the research opportunities in Arts programs?",
      answer:
        "Programs include research methodology, dissertation projects, and opportunities to pursue M.Phil/PhD. Students can specialize in their areas of interest.",
    },
    {
      question: "How are Online Arts programs conducted?",
      answer:
        "Programs include live interactive sessions, recorded lectures, digital study materials, virtual library access, and regular assessments through online platforms.",
    },
  ];

  const baSyllabus = [
    {
      title: "Year 1",
      subjects: [
        "English Literature",
        "Introduction to Sociology",
        "Political Theory",
        "History of India",
        "Psychology Basics",
      ],
    },
    {
      title: "Year 2",
      subjects: [
        "Public Administration",
        "Indian Economy",
        "Social Psychology",
        "Contemporary India",
        "Research Methods",
      ],
    },
    {
      title: "Year 3",
      subjects: [
        "Indian Constitution",
        "International Relations",
        "Developmental Economics",
        "Project Work",
        "Elective Subjects",
      ],
    },
  ];

  const maSyllabus = [
    {
      title: "Year 1",
      subjects: [
        "Advanced Political Theory",
        "Research Methodology",
        "Public Policy Analysis",
        "Indian Government & Politics",
        "Elective Specialization",
      ],
    },
    {
      title: "Year 2",
      subjects: [
        "Human Rights",
        "International Relations",
        "Comparative Public Administration",
        "Dissertation/Thesis",
        "Advanced Specialization",
      ],
    },
  ];

  const skillsObtained = [
    {
      skill: "Critical Thinking",
      icon: "Lightbulb",
      description:
        "Ability to analyze information objectively and make reasoned judgments.",
    },
    {
      skill: "Communication Skills",
      icon: "MessageSquare",
      description:
        "Developing strong verbal and written communication for various contexts.",
    },
    {
      skill: "Research & Analysis",
      icon: "Search",
      description:
        "Skills to conduct in-depth research and analyze complex data and information.",
    },
    {
      skill: "Problem Solving",
      icon: "ClipboardList",
      description:
        "Identifying and solving complex social and organizational problems.",
    },
    {
      skill: "Empathy & Social Awareness",
      icon: "Users2",
      description:
        "Understanding societal issues and the perspectives of different groups.",
    },
    {
      skill: "Public Speaking",
      icon: "Palette",
      description:
        "Confidence and ability to present ideas clearly and persuasively.",
    },
  ];

  const careerScope = {
    roles: [
      { role: "Civil Services (IAS/IPS)", salary: "₹5 - 10 LPA" },
      { role: "Content Writer/Editor", salary: "₹4 - 7 LPA" },
      { role: "Journalist", salary: "₹4 - 8 LPA" },
      { role: "Teacher/Professor", salary: "₹6 - 12 LPA" },
      { role: "Social Worker", salary: "₹3 - 6 LPA" },
      { role: "Public Relations Officer", salary: "₹5 - 9 LPA" },
    ],
  };

  const topRecruiters = [
    "The Hindu",
    "Times of India",
    "Tata Trusts",
    "Teach for India",
    "NGOs",
    "United Nations",
    "Government Sector",
    "EdTech Companies",
    "Publishing Houses",
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
              <Palette className="h-16 w-16 mx-auto mb-4 text-[#0052CC]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Online BA Programs
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Explore the world of humanities and social sciences with Online BA
              programs from India's top universities. Develop critical
              thinking, research skills, and comprehensive knowledge across
              diverse disciplines.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge className="bg-[#0052CC] text-white text-base px-4 py-2">
                <Globe className="h-4 w-4 mr-2" />
                Diverse Subjects
              </Badge>
              <Badge className="bg-[#0052CC] text-white text-base px-4 py-2">
                <Users2 className="h-4 w-4 mr-2" />
                Social Impact
              </Badge>
              <Badge className="bg-[#0052CC] text-white text-base px-4 py-2">
                <Building className="h-4 w-4 mr-2" />
                Government Ready
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
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0052CC] mb-2">40+</div>
              <div className="text-gray-600">Universities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0052CC] mb-2">120+</div>
              <div className="text-gray-600">Specializations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0052CC] mb-2">75%</div>
              <div className="text-gray-600">Government Jobs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0052CC] mb-2">200+</div>
              <div className="text-gray-600">Career Options</div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Universities */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-lavender-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Top Universities for Arts & Humanities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from India's leading universities offering UGC-approved
              online arts programs
            </p>
          </div>

          <HorizontalUniversityScroll universities={topUniversities} courseType="Arts" />
        </div>
      </section>

      {/* Why Online Programs Section */}
      <WhyOnlineProgramsSection 
        universityName="Top Universities" 
        lmsImagePath="/assets/lms/common.png" 
      />

      {/* Specializations */}
      <section id="specializations" className="py-16 bg-gradient-to-br from-purple-50 to-lavender-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Popular Arts & Humanities Specializations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore diverse fields of study in humanities and social sciences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {specializations.map((spec, index) => {
              // Apply special design to the first three items
              const isSpecial = index < 3;
              const cardClass = `
                p-4 transition-all duration-300
                ${isSpecial 
                  ? 'bg-white border-2 border-yellow-400 shadow-[0_0_15px_rgba(255,204,0,0.4)] hover:shadow-xl hover:translate-y-[-5px]' 
                  : 'bg-white border border-gray-200/60 hover:shadow-md'
                }
              `;
              const titleClass = `
                font-medium ${isSpecial ? 'text-lg md:text-xl text-yellow-600' : ''}
              `;

              return (
                <Card
                  key={index}
                  className={cardClass}
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle className={`h-5 w-5 ${isSpecial ? 'text-yellow-500' : 'text-[#0052CC]'}`} />
                    <span className={titleClass}>{spec}</span>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* NEW SECTION: Syllabus */}
      <section id="syllabus" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Arts & Humanities Syllabus
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore the curriculum for both Bachelor's (BA) and Master's (MA)
              Arts programs.
            </p>
          </div>
          <div className="flex justify-center mb-8">
            <Tabs
              defaultValue="ba"
              onValueChange={setActiveTab}
              className="w-full lg:w-3/4"
            >
              <TabsList className="grid w-full grid-cols-2 md:w-3/4 lg:w-1/2 mx-auto">
                <TabsTrigger value="ba" className="text-lg">
                  BA Syllabus
                </TabsTrigger>
                <TabsTrigger value="ma" className="text-lg">
                  MA Syllabus
                </TabsTrigger>
              </TabsList>
              <TabsContent value="ba" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {baSyllabus.map((year, index) => (
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
              <TabsContent value="ma" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {maSyllabus.map((year, index) => (
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
        courseName="BA/MA" 
        universities={[
          {
            name: "Manipal University Online",
            logo: manipalLogo,
            courseFee: "₹1,20,000",
            semesterFee: "₹20,000",
            emiOption: "₹6,667/month",
            registrationFee: "₹5,000",
            rating: 4.6,
            coursePagePath: "/university/manipal/courses/online-ba",
          },
          {
            name: "Uttaranchal University",
            logo: uttaranchalLogo,
            courseFee: "₹75,000",
            semesterFee: "₹12,500",
            emiOption: "₹4,167/month",
            registrationFee: "₹3,000",
            rating: 4.5,
            coursePagePath: "/university/uttaranchal/online-ba",
          },
          {
            name: "Vivekananda Global University",
            logo: vguLogo,
            courseFee: "₹66,000",
            semesterFee: "₹11,000",
            emiOption: "₹3,667/month",
            registrationFee: "₹2,500",
            rating: 4.4,
            coursePagePath: "/university/vgu/online-ba",
          },
          {
            name: "IGNOU",
            logo: ignouLogo,
            courseFee: "₹36,000",
            semesterFee: "₹6,000",
            emiOption: "₹2,000/month",
            registrationFee: "₹1,500",
            rating: 4.8,
            coursePagePath: "/courses/online-ba",
          },
          {
            name: "Sikkim Manipal University",
            logo: smuLogo,
            courseFee: "₹90,000",
            semesterFee: "₹15,000",
            emiOption: "₹5,000/month",
            registrationFee: "₹4,000",
            rating: 4.5,
            coursePagePath: "/university/sikkim/online-ba",
          },
          {
            name: "Amity University Online",
            logo: amityLogo,
            courseFee: "₹1,05,000",
            semesterFee: "₹17,500",
            emiOption: "₹5,833/month",
            registrationFee: "₹4,500",
            rating: 4.3,
            coursePagePath: "/university/amity/online-ba",
          },
          {
            name: "Lovely Professional University",
            logo: lpuLogo,
            courseFee: "₹90,000",
            semesterFee: "₹15,000",
            emiOption: "₹5,000/month",
            registrationFee: "₹4,000",
            rating: 4.2,
            coursePagePath: "/university/lpu/online-ba",
          },
          {
            name: "Mangalyatan University",
            logo: mangalyatanLogo,
            courseFee: "₹75,000",
            semesterFee: "₹12,500",
            emiOption: "₹4,167/month",
            registrationFee: "₹3,000",
            rating: 4.1,
            coursePagePath: "/university/mangalyatan/online-ba",
          },
        ]}
      />

      {/* NEW SECTION: Skills Obtained */}
      <section id="skills" className="py-16 bg-gradient-to-br from-pink-50 to-purple-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Skills Obtained in Arts & Humanities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Acquire valuable skills for both professional and personal growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsObtained.map((item, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-shadow bg-white border border-gray-200/60"
              >
                {item.icon === "Lightbulb" && (
                  <Lightbulb className="h-8 w-8 text-[#0052CC] mx-auto mb-3" />
                )}
                {item.icon === "MessageSquare" && (
                  <MessageSquare className="h-8 w-8 text-[#0052CC] mx-auto mb-3" />
                )}
                {item.icon === "Search" && (
                  <Search className="h-8 w-8 text-[#0052CC] mx-auto mb-3" />
                )}
                {item.icon === "ClipboardList" && (
                  <ClipboardList className="h-8 w-8 text-[#0052CC] mx-auto mb-3" />
                )}
                {item.icon === "Users2" && (
                  <Users2 className="h-8 w-8 text-[#0052CC] mx-auto mb-3" />
                )}
                {item.icon === "Palette" && (
                  <Palette className="h-8 w-8 text-[#0052CC] mx-auto mb-3" />
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
              Discover diverse career paths in government, media, and social
              sectors.
            </p>
          </div>
          <Card className="hover:shadow-lg transition-shadow border border-gray-200/60">
            <CardHeader>
              <h3 className="font-bold text-xl mb-2">
                <Building className="h-6 w-6 inline-block mr-2 text-[#0052CC]" />
                Career Opportunities in Arts & Humanities
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

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Online Arts & Humanities?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Develop critical thinking and research skills with flexible online
              learning
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
      <section id="faqs" className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about Online Arts & Humanities
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
            Ready to Explore Arts & Humanities?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover your passion and build a meaningful career in humanities
            and social sciences
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

export default OnlineArts;
