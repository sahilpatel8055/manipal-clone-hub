import NavigationHeader from "@/components/ui/navigation-header";
import Footer from "@/components/ui/footer";
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
  Palette,
  Globe,
  Users2,
  Lightbulb,
  MessageSquare,
  Search,
  ClipboardList,
  Calendar
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

const OnlineMA = () => {
  const { openForm, CounselingFormComponent } = useCounselingForm();
  const [activeTab, setActiveTab] = useState("ma");

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
      fees: "₹40,000+/year",
      duration: "2 Years",
      accreditation: "UGC, AICTE, NAAC A+",
    },
    {
      name: "Uttaranchal University",
      logo: uttaranchalLogo,
      rating: 4.5,
      fees: "₹25,000+/year",
      duration: "2 Years",
      accreditation: "UGC, AICTE, NAAC A+",
    },
    {
      name: "Vivekananda Global University",
      logo: vguLogo,
      rating: 4.4,
      fees: "₹22,000+/year",
      duration: "2 Years",
      accreditation: "UGC, AICTE, AIU",
    },
    {
      name: "IGNOU",
      logo: ignouLogo,
      rating: 4.8,
      fees: "₹12,000/year",
      duration: "2 Years",
      accreditation: "UGC, AICTE, NAAC A++",
    },
    {
      name: "Sikkim Manipal University",
      logo: smuLogo,
      rating: 4.5,
      fees: "₹30,000+/year",
      duration: "2 Years",
      accreditation: "UGC, AICTE, NAAC A+",
    },
    {
      name: "Amity University Online",
      logo: amityLogo,
      rating: 4.3,
      fees: "₹35,000+/year",
      duration: "2 Years",
      accreditation: "UGC, AICTE, NAAC A+",
    },
    {
      name: "Lovely Professional University",
      logo: lpuLogo,
      rating: 4.2,
      fees: "₹30,000+/year",
      duration: "2 Years",
      accreditation: "UGC, AICTE, NAAC A+",
    },
    {
      name: "Mangalyatan University",
      logo: mangalyatanLogo,
      rating: 4.1,
      fees: "₹25,000+/year",
      duration: "2 Years",
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
      question: "Is Online MA degree valid for government jobs?",
      answer:
        "Yes, Online MA from UGC-recognized universities is valid for all government jobs, civil services, teaching positions, and further studies like M.Phil, PhD.",
    },
    {
      question: "What is the eligibility criteria for Online MA?",
      answer:
        "Bachelor's degree in Arts or any relevant field from a recognized university with minimum 50% marks. Some specializations may have specific subject requirements.",
    },
    {
      question: "Can I pursue PhD after Online MA?",
      answer:
        "Yes, Online MA degree from UGC-recognized universities is valid for PhD admission. You can pursue research in your chosen specialization.",
    },
    {
      question: "What are the career opportunities after MA?",
      answer:
        "MA graduates can work in education, civil services, research, media, NGOs, public administration, and various government and private sector roles.",
    },
    {
      question: "Is there any age limit for Online MA admission?",
      answer:
        "Generally, there is no upper age limit for Online MA programs. However, some universities may have specific age criteria for certain specializations.",
    },
  ];

  const maSyllabus = [
    {
      title: "Year 1",
      subjects: [
        "Research Methodology",
        "Core Subject - Specialization I",
        "Core Subject - Specialization II",
        "Elective Subject I",
        "Dissertation/Project Work I",
      ],
    },
    {
      title: "Year 2",
      subjects: [
        "Advanced Research Methods",
        "Core Subject - Specialization III",
        "Core Subject - Specialization IV",
        "Elective Subject II",
        "Major Dissertation/Project Work",
      ],
    },
  ];

  const skillsObtained = [
    {
      skill: "Research & Analysis",
      icon: "Search",
      description:
        "Advanced research methodologies, data analysis, and critical thinking skills for academic and professional research.",
    },
    {
      skill: "Communication Skills",
      icon: "MessageSquare",
      description:
        "Enhanced verbal and written communication skills for effective professional and academic interactions.",
    },
    {
      skill: "Critical Thinking",
      icon: "Lightbulb",
      description:
        "Advanced analytical and critical thinking abilities for problem-solving and decision-making.",
    },
    {
      skill: "Subject Expertise",
      icon: "ClipboardList",
      description:
        "Deep knowledge and expertise in chosen specialization area with latest developments and theories.",
    },
    {
      skill: "Project Management",
      icon: "Users2",
      description:
        "Skills in planning, executing, and managing projects in academic and professional settings.",
    },
    {
      skill: "Cultural Understanding",
      icon: "Globe",
      description:
        "Enhanced understanding of cultural, social, and historical contexts in chosen field of study.",
    },
    {
      skill: "Academic Writing",
      icon: "Palette",
      description:
        "Advanced academic writing skills for research papers, reports, and professional documentation.",
    },
    {
      skill: "Public Speaking",
      icon: "Building",
      description:
        "Confidence and skills in public speaking, presentations, and academic discussions.",
    },
  ];

  const careerScope = [
    {
      role: "Lecturer/Professor",
      salary: "₹4 - 10 LPA",
    },
    {
      role: "Research Analyst",
      salary: "₹3 - 8 LPA",
    },
    {
      role: "Civil Services Officer",
      salary: "₹6 - 15 LPA",
    },
    {
      role: "Content Writer",
      salary: "₹3 - 7 LPA",
    },
    {
      role: "Social Worker",
      salary: "₹3 - 6 LPA",
    },
    {
      role: "Journalist",
      salary: "₹3 - 8 LPA",
    },
  ];

  const topRecruiters = [
    "Government Organizations",
    "Educational Institutions",
    "Research Organizations",
    "NGOs",
    "Media Companies",
    "Publishing Houses",
    "Think Tanks",
    "Cultural Organizations",
    "Museums",
    "Libraries",
    "Consulting Firms",
    "Private Companies",
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Online MA Programs - Master of Arts"
        description="Pursue Online MA from top universities. Advanced arts program with specializations in Psychology, English Literature, Political Science, History. Get placement assistance and research opportunities."
        keywords="online ma, master of arts, online arts masters, ma degree online"
        canonical="https://avedu.in/courses/ma"
      />
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
              Online Master of Arts (MA)
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Advance your knowledge in humanities and social sciences with Online MA programs from India's top universities. 
              Get specialized expertise in your chosen field with research opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge className="bg-[#0052CC] text-white text-base px-4 py-2">
                <Palette className="h-4 w-4 mr-2" />
                Research Focused
              </Badge>
              <Badge className="bg-[#0052CC] text-white text-base px-4 py-2">
                <Globe className="h-4 w-4 mr-2" />
                Multiple Specializations
              </Badge>
              <Badge className="bg-[#0052CC] text-white text-base px-4 py-2">
                <Building className="h-4 w-4 mr-2" />
                Career Ready
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
              <div className="text-3xl font-bold text-[#0052CC] mb-2">40+</div>
              <div className="text-gray-600">Universities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0052CC] mb-2">100+</div>
              <div className="text-gray-600">Specializations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0052CC] mb-2">80%</div>
              <div className="text-gray-600">Placement Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0052CC] mb-2">250+</div>
              <div className="text-gray-600">Career Opportunities</div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Universities */}
      <section id="universities" className="py-16 bg-gradient-to-br from-purple-50 to-lavender-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Top Universities for Online MA
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from India's leading universities offering UGC-approved online MA programs
            </p>
          </div>

          <HorizontalUniversityScroll universities={topUniversities} courseType="MA" />
        </div>
      </section>

      {/* Why Online Programs Section */}
      <WhyOnlineProgramsSection universityName="Top Universities" lmsImagePath="/assets/lms/common.png" />
      
      {/* Specializations */}
      <section id="specializations" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              MA Specializations
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">MA Curriculum</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Advanced curriculum focusing on research and specialized knowledge
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {maSyllabus.map((year, index) => (
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
                    {skill.icon === "Search" && <Search className="h-12 w-12 text-[#0052CC] mx-auto" />}
                    {skill.icon === "MessageSquare" && <MessageSquare className="h-12 w-12 text-[#0052CC] mx-auto" />}
                    {skill.icon === "Lightbulb" && <Lightbulb className="h-12 w-12 text-[#0052CC] mx-auto" />}
                    {skill.icon === "ClipboardList" && <ClipboardList className="h-12 w-12 text-[#0052CC] mx-auto" />}
                    {skill.icon === "Users2" && <Users2 className="h-12 w-12 text-[#0052CC] mx-auto" />}
                    {skill.icon === "Globe" && <Globe className="h-12 w-12 text-[#0052CC] mx-auto" />}
                    {skill.icon === "Palette" && <Palette className="h-12 w-12 text-[#0052CC] mx-auto" />}
                    {skill.icon === "Building" && <Building className="h-12 w-12 text-[#0052CC] mx-auto" />}
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
      <AdmissionProcedureSection courseName="Online MA" type="course" />

      {/* Career Scope & Top Recruiters */}
      <section id="careers" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Career Scope & Top Recruiters
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore diverse career opportunities after completing your Online MA
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {topRecruiters.map((recruiter, index) => (
                  <Card key={index} className="p-4 text-center">
                    <CardContent className="p-0">
                      <span className="font-medium text-sm">{recruiter}</span>
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
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Online Arts & Humanities?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Develop critical thinking and research skills with flexible online learning
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
      <RelevantBlogsSection pageType="course" />
      <RelatedContentSection />
      <EeatBlock />
      <Footer />
      <CounselingFormComponent />
    </div>
  );
};

export default OnlineMA;
