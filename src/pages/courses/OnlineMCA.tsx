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
  Code,
  Laptop,
  Briefcase,
  Layers,
  Search,
  ClipboardList // Added the import for ClipboardList
} from "lucide-react";
import techIcon from "@/assets/icons/tech-icon.png";
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

const OnlineMCA = () => {
  const { openForm, CounselingFormComponent } = useCounselingForm();
  const [activeTab, setActiveTab] = useState("mca");

  const sections = [
    { id: "top", label: "Home" },
    { id: "stats", label: "Stats" },
    { id: "universities", label: "Universities" },
    { id: "specializations", label: "Specializations" },
    { id: "features", label: "Features" },
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
      fees: "₹60,000+/year",
      duration: "2 Years",
      accreditation: "UGC, AICTE, NAAC A+",
    },
    {
      name: "Uttaranchal University",
      logo: uttaranchalLogo,
      rating: 4.5,
      fees: "₹35,000+/year",
      duration: "2 Years",
      accreditation: "UGC, AICTE, NAAC A+",
    },
    {
      name: "Vivekananda Global University",
      logo: vguLogo,
      rating: 4.4,
      fees: "₹30,000+/year",
      duration: "2 Years",
      accreditation: "UGC, AICTE, AIU",
    },
    {
      name: "IGNOU",
      logo: ignouLogo,
      rating: 4.8,
      fees: "₹15,000+/year",
      duration: "2 Years",
      accreditation: "UGC, AICTE, NAAC A++",
    },
    {
      name: "Sikkim Manipal University",
      logo: smuLogo,
      rating: 4.5,
      fees: "₹45,000+/year",
      duration: "2 Years",
      accreditation: "UGC, AICTE, NAAC A+",
    },
    {
      name: "Amity University Online",
      logo: amityLogo,
      rating: 4.3,
      fees: "₹55,000+/year",
      duration: "2 Years",
      accreditation: "UGC, AICTE, NAAC A+",
    },
    {
      name: "Lovely Professional University",
      logo: lpuLogo,
      rating: 4.2,
      fees: "₹40,000+/year",
      duration: "2 Years",
      accreditation: "UGC, AICTE, NAAC A+",
    },
    {
      name: "Mangalyatan University",
      logo: mangalyatanLogo,
      rating: 4.1,
      fees: "₹35,000+/year",
      duration: "2 Years",
      accreditation: "UGC, AICTE",
    },
  ];

  const specializations = [
    "Software Engineering",
    "AI & Machine Learning",
    "Data Science",
    "Cloud Computing",
    "Cyber Security",
    "Mobile App Development",
    "Data Analytics",
    "Full stack development",
    "Block chain",
  ];

  const keyFeatures = [
    "Industry-Relevant Curriculum",
    "Virtual Labs & Projects",
    "Expert Faculty from Tech Industry",
    "Flexible Learning Schedule",
    "Live Coding Sessions",
    "Hands-on Programming Practice",
    "Industry Internships",
    "Career Placement Support",
  ];

  const faqs = [
    {
      question: "Is Online MCA degree valid for jobs?",
      answer:
        "Yes, Online MCA from UGC-recognized universities is valid and accepted by employers in IT industry and for higher studies like PhD.",
    },
    {
      question: "What programming languages are covered in MCA?",
      answer:
        "MCA covers popular languages like Java, Python, C++, JavaScript, PHP, and emerging technologies like AI/ML frameworks, Cloud Computing.",
    },
    {
      question: "Do I get hands-on coding experience in online MCA?",
      answer:
        "Yes, programs include virtual labs, coding assignments, live programming sessions, and industry projects for practical experience.",
    },
    {
      question: "What are the career opportunities after MCA?",
      answer:
        "Graduates can work as Software Architect, Data Scientist, Cloud Architect, Cybersecurity Expert, IT Project Manager, Machine Learning Engineer.",
    },
    {
      question: "What is the eligibility for MCA admission?",
      answer:
        "Bachelor's degree in any stream with Mathematics as a subject in 10+2 or graduation. Some universities may require entrance exams.",
    },
  ];

  const mcaSyllabus = [
    {
      title: "Semester 1",
      subjects: [
        "Advanced Data Structures & Algorithms",
        "Software Engineering",
        "Database Management Systems",
        "Operating Systems",
        "Mathematical Foundations for Computer Applications",
      ],
    },
    {
      title: "Semester 2",
      subjects: [
        "Java Programming",
        "Web Technologies",
        "Cloud Computing",
        "AI & Machine Learning",
        "Computer Networks",
      ],
    },
    {
      title: "Semester 3",
      subjects: [
        "Python Programming for Data Science",
        "Cyber Security",
        "Mobile Computing",
        "Design & Analysis of Algorithms",
        "Distributed Systems",
      ],
    },
    {
      title: "Semester 4",
      subjects: [
        "Big Data Analytics",
        "Internet of Things (IoT)",
        "Advanced Software Project Management",
        "Elective Specialization",
        "Major Project/Dissertation",
      ],
    },
  ];

  const skillsObtained = [
    {
      skill: "Programming Languages",
      icon: "Code",
      description:
        "Advanced proficiency in languages like Java, Python, C++, and JavaScript for enterprise software development.",
    },
    {
      skill: "Data Structures & Algorithms",
      icon: "Layers",
      description:
        "Expertise in designing efficient algorithms and data structures for complex problem solving.",
    },
    {
      skill: "Database Management",
      icon: "Search",
      description:
        "Advanced database design, optimization, and management using SQL, NoSQL, and Big Data technologies.",
    },
    {
      skill: "Software Architecture",
      icon: "Building",
      description:
        "Skills in designing scalable software architectures and system design patterns.",
    },
    {
      skill: "Cloud Computing",
      icon: "Building",
      description:
        "Expertise in cloud platforms like AWS, Azure, and Google Cloud for scalable applications.",
    },
    {
      skill: "AI & Machine Learning",
      icon: "TrendingUp",
      description:
        "Knowledge of AI/ML algorithms, deep learning, and data science for intelligent applications.",
    },
    {
      skill: "Cybersecurity",
      icon: "Award",
      description:
        "Understanding of security protocols, ethical hacking, and data protection measures.",
    },
    {
      skill: "Project Management",
      icon: "Briefcase",
      description:
        "Skills in managing IT projects, agile methodologies, and team leadership.",
    },
  ];

  const careerScope = [
    {
      role: "Software Architect",
      salary: "₹12 - 20 LPA",
    },
    {
      role: "Data Scientist",
      salary: "₹10 - 18 LPA",
    },
    {
      role: "Cloud Architect",
      salary: "₹15 - 25 LPA",
    },
    {
      role: "Cybersecurity Expert",
      salary: "₹10 - 16 LPA",
    },
    {
      role: "IT Project Manager",
      salary: "₹10 - 20 LPA",
    },
    {
      role: "Machine Learning Engineer",
      salary: "₹11 - 22 LPA",
    },
  ];

  const topRecruiters = [
    "TCS",
    "Wipro",
    "Infosys",
    "Accenture",
    "HCL",
    "IBM",
    "Cognizant",
    "Microsoft",
    "Samsung",
    "Amazon",
    "Capgemini",
    "Dell",
    "HP",
  ];

  const comparisonData = [
    {
      name: "Manipal University Online",
      logo: manipalLogo,
      courseFee: "₹1,20,000",
      semesterFee: "₹30,000",
      emiOption: "₹10,000/month",
      registrationFee: "₹5,000",
      rating: 4.6,
      coursePagePath: "/university/manipal/online-mca"
    },
    {
      name: "Uttaranchal University",
      logo: uttaranchalLogo,
      courseFee: "₹70,000",
      semesterFee: "₹17,500",
      emiOption: "₹5,833/month",
      registrationFee: "₹3,000",
      rating: 4.5,
      coursePagePath: "/university/uttaranchal/online-mca"
    },
    {
      name: "Vivekananda Global University",
      logo: vguLogo,
      courseFee: "₹60,000",
      semesterFee: "₹15,000",
      emiOption: "₹5,000/month",
      registrationFee: "₹2,500",
      rating: 4.4,
      coursePagePath: "/university/vgu/online-mca"
    },
    {
      name: "Lovely Professional University",
      logo: lpuLogo,
      courseFee: "₹80,000",
      semesterFee: "₹20,000",
      emiOption: "₹6,667/month",
      registrationFee: "₹4,000",
      rating: 4.2,
      coursePagePath: "/university/lpu/online-mca"
    },
  ];

  const admissionSteps = [
    {
      step: "Step 1: Check Eligibility",
      description: "Ensure you meet the minimum academic qualifications for the program.",
      icon: <CheckCircle className="h-6 w-6 text-green-500" />
    },
    {
      step: "Step 2: Fill out the Application Form",
      description: "Complete the online application form on our website or the university's portal.",
      icon: <ClipboardList className="h-6 w-6 text-blue-500" />
    },
    {
      step: "Step 3: Submit Documents",
      description: "Upload necessary documents like mark sheets, ID proof, and photographs.",
      icon: <Layers className="h-6 w-6 text-yellow-500" />
    },
    {
      step: "Step 4: Pay Fees",
      description: "Make the payment for the registration and course fees via the provided payment gateway.",
      icon: <Phone className="h-6 w-6 text-purple-500" />
    },
    {
      step: "Step 5: Confirmation & Enrollment",
      description: "After verification, you will receive an enrollment confirmation and access to the learning portal.",
      icon: <Award className="h-6 w-6 text-orange-500" />
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* SEOHead */}
      <SEOHead
        title="Online MCA Programs - Master of Computer Applications"
        description="Pursue Online MCA from top universities. Advanced computer applications program with specializations in AI, Cloud Computing, Data Science. Get placement assistance and industry-relevant curriculum."
        keywords="online MCA, master computer applications, online computer science masters, MCA degree online"
        canonical="https://avedu.in/courses/mca"
      />
      <NavigationHeader />
      <SeoBreadcrumbs />

      {/* Hero Section */}
      <section id="top" className="py-12 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="mb-6">
              <img
                src={techIcon}
                alt="Technology"
                className="h-16 w-16 mx-auto mb-4"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Online Master of Computer Applications (MCA)
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Advance your tech career with Online MCA programs from India's top universities.
              Get specialized knowledge in software engineering, AI, and emerging technologies.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge className="bg-[#0052CC] text-white text-base px-4 py-2">
                <Code className="h-4 w-4 mr-2" />
                Advanced Curriculum
              </Badge>
              <Badge className="bg-[#0052CC] text-white text-base px-4 py-2">
                <Laptop className="h-4 w-4 mr-2" />
                Virtual Labs
              </Badge>
              <Badge className="bg-[#0052CC] text-white text-base px-4 py-2">
                <Building className="h-4 w-4 mr-2" />
                Industry Projects
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
              <div className="text-3xl font-bold text-[#0052CC] mb-2">10+</div>
              <div className="text-gray-600">Specializations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0052CC] mb-2">
                2 Years
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

      <SectionNavigation sections={sections} />

      {/* Top Universities */}
      <section id="universities" className="py-16 bg-gradient-to-br from-purple-50 to-lavender-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Top Universities for Online MCA
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from India's leading universities offering UGC-approved online MCA programs
            </p>
          </div>

          <HorizontalUniversityScroll universities={topUniversities} courseType="MCA" />
        </div>
      </section>

      {/* Why Online Programs Section */}
      <WhyOnlineProgramsSection universityName="Top Universities" lmsImagePath="/assets/lms/common.png" />

      {/* Specializations */}
      <section id="specializations" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Popular MCA Specializations
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

      {/* Syllabus */}
      <section id="syllabus" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">MCA Curriculum</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive curriculum covering latest technologies and industry practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mcaSyllabus.map((semester, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <h3 className="text-xl font-bold text-center">{semester.title}</h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {semester.subjects.map((subject, subIndex) => (
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

      {/* Admission Procedure */}
      <AdmissionProcedureSection courseName="Online MCA" type="course" />

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
                    {skill.icon === "Code" && <Code className="h-12 w-12 text-[#0052CC] mx-auto" />}
                    {skill.icon === "Layers" && <Layers className="h-12 w-12 text-[#0052CC] mx-auto" />}
                    {skill.icon === "Search" && <Search className="h-12 w-12 text-[#0052CC] mx-auto" />}
                    {skill.icon === "Building" && <Building className="h-12 w-12 text-[#0052CC] mx-auto" />}
                    {skill.icon === "TrendingUp" && <TrendingUp className="h-12 w-12 text-[#0052CC] mx-auto" />}
                    {skill.icon === "Award" && <Award className="h-12 w-12 text-[#0052CC] mx-auto" />}
                    {skill.icon === "Briefcase" && <Briefcase className="h-12 w-12 text-[#0052CC] mx-auto" />}
                  </div>
                  <h3 className="font-bold mb-2">{skill.skill}</h3>
                  <p className="text-sm text-gray-600">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Career Scope & Top Recruiters */}
      <section id="careers" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Career Scope & Top Recruiters
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore high-paying career opportunities after completing your Online MCA
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

      {/* Key Features */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Online MCA?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFeatures.map((feature, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent>
                  <CheckCircle className="h-8 w-8 text-[#0052CC] mx-auto mb-4" />
                  <h3 className="font-semibold">{feature}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <RelevantBlogsSection pageType="course" />
      
      <RelatedContentSection />
      
      <EeatBlock />
      
      <Footer />
      <CounselingFormComponent />
    </div>
  );
};

export default OnlineMCA;
