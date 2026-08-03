import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NavigationHeader from "@/components/ui/navigation-header";
import Footer from "@/components/ui/footer";
import EmbeddedCounselingForm from "@/components/ui/embedded-counseling-form";
import { ChevronLeft, ChevronRight, Star, Users, BookOpen, Clock, Award, CheckCircle } from "lucide-react";
import SeoBreadcrumbs from "@/components/ui/seo-breadcrumbs";
import RelatedContentSection from "@/components/ui/related-content-section";
import EeatBlock from "@/components/ui/eeat-block";

// Course data
const courseData = {
  mba: {
    title: "Master of Business Administration (Online MBA)",
    description: "Boost your career with UGC-entitled online MBA from NAAC A+Jain University. Attend live and recorded classes, wherever you are. Learn at your own convenience from the most reputed faculty. Write online proctored exams from the safety of your homes.",
    duration: "24 months | 15-20 hrs/wk",
    fees: {
      indian: "₹2,40,000",
      nri: "USD 2,692",
      nonIndian: "USD 3,140"
    },
    electives: ["Finance", "Marketing", "HRM", "Analytics & Data Science", "BFSI", "IT & FinTech", "Operations Management", "International Business", "Information System Management", "Project Management", "Supply Chain Management"],
    curriculum: {
      "1 Semester": "This semester is all about learning foundational management skills from organisational behaviour and statistics for management to managerial economics and HR management.",
      "2 Semester": "In your second semester, we equip you with analytical and decision making skills. You'll be immersed in new learning about production and financial management. You'll also be given an overview on managing MIS, CRM, and other international systems. We give you an overview of operations research, duality analysis, game theory and simulation.",
      "3 Semester": "Take a deep dive into research methodologies, the legal aspects of business and IP, and choose from ten strategic electives to specialize in an area of your interest.",
      "4 Semester": "In your last semester, we help you understand strategic management and business policy, international business management, and inculcate entrepreneurial skills. You'll get hands-on experience with project work in your chosen area of elective. You'll also have made steady networks through internships, peers, and engaging with our faculty and thought leaders. You're ready to work towards your career goals."
    },
    careerScope: [
      "Business Development Manager",
      "Marketing Manager", 
      "Operations Manager",
      "Financial Analyst",
      "Project Manager",
      "Consultant",
      "Entrepreneur"
    ],
    averageSalary: "₹6-12 LPA"
  },
  mca: {
    title: "Master of Computer Applications",
    description: "Boost your career with an online MCA from Jain University. Attend live and recorded classes, wherever you are. Learn at your own convenience from a top-tier faculty. Write online proctored exams from the safety of your homes.",
    duration: "24 months | 15-20 hrs/wk",
    fees: {
      indian: "₹1,80,000",
      nri: "USD 2,432",
      nonIndian: "USD 2,836"
    },
    electives: [],
    curriculum: {
      "1 Semester": "Foundation subjects including Programming Fundamentals, Mathematics for Computer Applications, and Computer Organization.",
      "2 Semester": "Data Structures, Database Management Systems, Object-Oriented Programming with Java, and Web Technologies.",
      "3 Semester": "Software Engineering, Computer Networks, Operating Systems, and Advanced Java Programming.",
      "4 Semester": "Project Work, Emerging Technologies, Mobile Application Development, and Dissertation."
    },
    careerScope: [
      "Software Developer",
      "System Analyst",
      "Web Developer",
      "Database Administrator",
      "IT Consultant",
      "Project Manager",
      "Software Architect"
    ],
    averageSalary: "₹4-8 LPA"
  },
  bba: {
    title: "Bachelor of Business Administration",
    description: "Obtain an online BBA from Jain University by attending live and recorded classes, wherever you are. Learn at your own convenience from the most reputed faculty. Write online proctored exams from the safety of your homes.",
    duration: "36 months | 15-20 hrs/wk",
    fees: {
      indian: "₹1,50,000",
      nri: "USD 2,046",
      nonIndian: "USD 2,388"
    },
    electives: [],
    curriculum: {
      "1 Year": "Foundation courses in Business Communication, Principles of Management, Business Mathematics, and Economics.",
      "2 Year": "Core subjects including Marketing Management, Financial Management, Human Resource Management, and Operations Management.",
      "3 Year": "Specialization subjects, Business Law, Strategic Management, and Final Project Work."
    },
    careerScope: [
      "Business Analyst",
      "Marketing Executive",
      "HR Executive",
      "Sales Manager",
      "Operations Executive",
      "Banking Professional",
      "Entrepreneur"
    ],
    averageSalary: "₹3-6 LPA"
  },
  bca: {
    title: "Bachelor of Computer Applications",
    description: "Obtain an online BCA from Jain University by attending live and recorded classes, wherever you are. Learn at your own convenience from the most reputed faculty. Write online proctored exams from the safety of your homes.",
    duration: "36 months | 15-20 hrs/wk",
    fees: {
      indian: "₹1,20,000",
      nri: "USD 2,196",
      nonIndian: "USD 2,556"
    },
    electives: [],
    curriculum: {
      "1 Year": "Programming Fundamentals, Computer Fundamentals, Mathematics, and Digital Electronics.",
      "2 Year": "Data Structures, Database Management, Web Technologies, and Object-Oriented Programming.",
      "3 Year": "Software Engineering, Computer Networks, Project Work, and Emerging Technologies."
    },
    careerScope: [
      "Software Developer",
      "Web Developer",
      "System Administrator",
      "Database Administrator",
      "Technical Support",
      "Software Tester",
      "IT Consultant"
    ],
    averageSalary: "₹3-6 LPA"
  },
  bcom: {
    title: "Bachelor of Commerce",
    description: "Obtain an online BCOM from Jain University by attending live and recorded classes, wherever you are. Learn at your own convenience from the most reputed faculty. Write online proctored exams from the safety of your homes.",
    duration: "36 months | 15-20 hrs/wk",
    fees: {
      indian: "₹90,000",
      nri: "USD 1,458",
      nonIndian: "USD 1,698"
    },
    electives: [],
    curriculum: {
      "1 Year": "Financial Accounting, Business Communication, Business Mathematics, and Economics.",
      "2 Year": "Corporate Accounting, Cost Accounting, Business Law, and Taxation.",
      "3 Year": "Financial Management, Auditing, Banking, and Project Work."
    },
    careerScope: [
      "Accountant",
      "Financial Analyst",
      "Tax Consultant",
      "Banking Professional",
      "Auditor",
      "Investment Advisor",
      "Financial Planner"
    ],
    averageSalary: "₹2.5-5 LPA"
  },
  mcom: {
    title: "Master of Commerce",
    description: "Boost your career with an online MCOM from Jain University. Attend live and recorded classes, wherever you are. Learn at your own convenience from the most reputed faculty. Write online proctored exams from the safety of your homes.",
    duration: "24 months | 15-20 hrs/wk",
    fees: {
      indian: "₹1,20,000",
      nri: "USD 1,620",
      nonIndian: "USD 1,892"
    },
    electives: [],
    curriculum: {
      "1 Semester": "Advanced Financial Accounting, Research Methodology, and Management Accounting.",
      "2 Semester": "Corporate Finance, Business Statistics, and International Business.",
      "3 Semester": "Financial Markets, Strategic Management, and Elective Subjects.",
      "4 Semester": "Dissertation, Advanced Taxation, and Project Work."
    },
    careerScope: [
      "Financial Manager",
      "Senior Accountant",
      "Tax Consultant",
      "Investment Banker",
      "Financial Analyst",
      "Audit Manager",
      "Professor/Lecturer"
    ],
    averageSalary: "₹4-8 LPA"
  },
  ma: {
    title: "Master of Arts",
    description: "Explore endless career possibilities with an Online MA from Jain University. Available in English, Sociology, and Political Science.",
    duration: "24 months | 15-20 hrs/wk",
    fees: {
      indian: "₹75,000",
      nri: "USD 1,200",
      nonIndian: "USD 1,400"
    },
    electives: ["English", "Sociology", "Political Science"],
    curriculum: {
      "1 Semester": "Foundation courses in chosen specialization, Research Methodology, and Core Subjects.",
      "2 Semester": "Advanced topics, Literary/Social Theory, and Analytical Studies.",
      "3 Semester": "Specialized papers, Contemporary Issues, and Research Project.",
      "4 Semester": "Dissertation, Advanced Research, and Final Project."
    },
    careerScope: [
      "Content Writer",
      "Social Worker",
      "Research Analyst",
      "Journalist",
      "Teacher/Professor",
      "Civil Services",
      "Public Relations"
    ],
    averageSalary: "₹3-6 LPA"
  }
};

const JainCoursePage = () => {
  const { courseId } = useParams();
  const course = courseData[courseId as keyof typeof courseData];
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Rankings data
  const rankings = [
    {
      logo: "/src/assets/approvals/wes-logo.png",
      title: "Degrees Evaluated by - World Education Services"
    },
    {
      logo: "/src/assets/approvals/ugc-logo.png", 
      title: "UGC-entitled Online Degrees Equivalent to Campus Degree"
    },
    {
      logo: "/src/assets/approvals/aicte-logo.png",
      title: "AICTE Norms Compliant"
    },
    {
      logo: "/src/assets/approvals/qs-logo.png",
      title: "Degrees Evaluated by -International Qualifications Assessment Service"
    },
    {
      logo: "/src/assets/approvals/nirf-logo.png",
      title: "Amongst India's top 100 Universities in 2024"
    }
  ];

  // Advantages data
  const advantages = [
    {
      icon: "📚",
      title: "A business education for the future",
      description: "We provide quality mentorship and our faculty amplifies the value of real world insights and allows you to create your own path to success with confidence. Our pedagogy introduces real world case studies that will enhance and develop your critical thinking skills."
    },
    {
      icon: "⏰",
      title: "Learn at your pace",
      description: "Our courses are designed for you to engage and learn at your own pace. Explore our extensive e-libraries, access your learning material online anytime, anywhere. Attend live/recorded lectures and talks that work for your schedule."
    },
    {
      icon: "💻",
      title: "Enhanced digital platform",
      description: "Our digital platform is built for a comprehensive learning experience. It allows for immersive learning and easy, responsive accessibility to online pedagogy. Access lessons and class engagement even on low bandwidth Internet."
    },
    {
      icon: "👨‍🏫",
      title: "Experienced faculty",
      description: "Our faculty comprises experienced individuals who are experts in their fields. Well over half of our faculty are Ph.D. holders in their respective subjects. They amplify the value of practical insights."
    }
  ];

  // Program benefits
  const benefits = [
    "Broader worldview",
    "Better job opportunities", 
    "Improved strategic thinking",
    "Increased earning potential",
    "Effective communication skills"
  ];

  // Admission process steps
  const admissionSteps = [
    {
      step: "1",
      title: "Application",
      description: "Submit your online application with required documents"
    },
    {
      step: "2", 
      title: "Document Verification",
      description: "Our team will verify your submitted documents"
    },
    {
      step: "3",
      title: "Fee Payment",
      description: "Pay the course fees as per the payment schedule"
    },
    {
      step: "4",
      title: "Course Access",
      description: "Get access to your course materials and start learning"
    }
  ];

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const scrollLeft = scrollContainer.scrollLeft;
      const cardWidth = scrollContainer.children[0]?.clientWidth || 0;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setActiveIndex(newIndex);
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCard = (index: number) => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const cardWidth = scrollContainer.children[0]?.clientWidth || 0;
    scrollContainer.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth'
    });
  };

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="min-h-screen bg-background font-inter">
      <NavigationHeader />
      <SeoBreadcrumbs />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                {course.title}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {course.description}
              </p>
              
              {course.electives.length > 0 && (
                <div className="space-y-3">
                  <p className="font-semibold text-foreground">Electives available:</p>
                  <div className="flex flex-wrap gap-2">
                    {course.electives.map((elective, index) => (
                      <Badge key={index} variant="secondary" className="px-3 py-1">
                        {elective}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <Card className="p-4">
                  <div className="flex items-center gap-3">
                    <Award className="h-8 w-8 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">UGC-entitled degree from a</p>
                      <p className="font-semibold">NAAC A+ accredited university</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-4">
                  <div className="flex items-center gap-3">
                    <Clock className="h-8 w-8 text-primary" />
                    <div>
                      <p className="font-semibold">{course.duration}</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4">
                  <div className="flex items-center gap-3">
                    <BookOpen className="h-8 w-8 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Free access to</p>
                      <p className="font-semibold">paid Coursera content</p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-primary">{course.fees.indian}</p>
                      <p className="text-sm text-muted-foreground">Indians</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-primary">{course.fees.nri}</p>
                      <p className="text-sm text-muted-foreground">Non-Resident Indians</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-primary">{course.fees.nonIndian}</p>
                      <p className="text-sm text-muted-foreground">Non-Indians</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">Program fee is all inclusive</p>
                  <p className="text-sm font-semibold text-destructive">
                    Last date of admission: August 23 | Limited seats available!
                  </p>
                  <Button className="w-full" size="lg">
                    DOWNLOAD BROCHURE
                  </Button>
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <EmbeddedCounselingForm />
            </div>
          </div>
        </div>
      </section>

      {/* Rankings & Accreditations */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="relative">
            <div 
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-scroll scrollbar-hide snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {rankings.map((ranking, index) => (
                <Card key={index} className="flex-shrink-0 w-80 snap-center">
                  <CardContent className="p-6 text-center">
                    <img 
                      src={ranking.logo} 
                      alt={ranking.title}
                      className="h-16 mx-auto mb-4 object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/src/assets/university-placeholder.jpg';
                      }}
                    />
                    <p className="font-semibold text-sm">{ranking.title}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Navigation dots */}
            <div className="flex justify-center mt-6 gap-2">
              {rankings.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToCard(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeIndex ? 'bg-primary' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview - Online Jain Advantages */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Online Jain advantages
            </h2>
            <p className="text-lg text-muted-foreground">
              Here's what you can expect from our courses
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center mb-16">
            <div className="space-y-8">
              {advantages.map((advantage, index) => (
                <Card key={index} className="p-6">
                  <div className="flex gap-4">
                    <div className="text-2xl">{advantage.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                      <p className="text-muted-foreground">{advantage.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            
            <div className="flex justify-center">
              <img 
                src="/src/assets/lms/common.png" 
                alt="Online Learning Platform"
                className="max-w-full h-auto rounded-lg shadow-lg"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/src/assets/university-placeholder.jpg';
                }}
              />
            </div>
          </div>

          {/* Program Benefits */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">We prepare you for the future</h3>
            <h4 className="text-xl font-semibold mb-8 text-primary">Programme benefits</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {benefits.map((benefit, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <p className="font-medium">{benefit}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Course Curriculum */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Course Curriculum
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive curriculum designed for industry readiness
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue={Object.keys(course.curriculum)[0]} className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
                {Object.keys(course.curriculum).map((semester) => (
                  <TabsTrigger key={semester} value={semester} className="text-sm">
                    {semester}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {Object.entries(course.curriculum).map(([semester, description]) => (
                <TabsContent key={semester} value={semester}>
                  <Card className="p-8">
                    <h3 className="text-xl font-semibold mb-4">{semester}</h3>
                    <p className="text-muted-foreground leading-relaxed">{description}</p>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Course Fee */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Program fee
            </h2>
            <p className="text-lg text-muted-foreground">
              We offer flexible payment options that allow students to pay their fees in semester-wise instalments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 text-center">
              <h3 className="text-lg font-semibold mb-4">Indians</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Total course fee</p>
                  <p className="text-2xl font-bold text-primary">{course.fees.indian}</p>
                  <p className="text-xs text-muted-foreground">Inclusive of all taxes</p>
                </div>
                <Button className="w-full">ENROLL NOW</Button>
              </div>
            </Card>

            <Card className="p-6 text-center border-primary border-2">
              <h3 className="text-lg font-semibold mb-4">Non-Resident Indians</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Total course fee</p>
                  <p className="text-2xl font-bold text-primary">{course.fees.nri}</p>
                  <p className="text-xs text-muted-foreground">Inclusive of all taxes</p>
                </div>
                <Button className="w-full">ENROLL NOW</Button>
              </div>
            </Card>

            <Card className="p-6 text-center">
              <h3 className="text-lg font-semibold mb-4">Non-Indians</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Total course fee</p>
                  <p className="text-2xl font-bold text-primary">{course.fees.nonIndian}</p>
                  <p className="text-xs text-muted-foreground">Inclusive of all taxes</p>
                </div>
                <Button className="w-full">ENROLL NOW</Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Admission Process
            </h2>
            <p className="text-lg text-muted-foreground">
              Simple and streamlined admission process
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {admissionSteps.map((step, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Get a prestigious degree */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Get a prestigious degree
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Globally recognized and widely accepted by governments and organizations, the online degrees offered by Jain University are at par with on-campus degrees and open doors to better professional opportunities.
            </p>
          </div>

          <div className="flex justify-center items-center gap-8">
            <img 
              src="/src/assets/manipal-1stdegree.jpg" 
              alt="Sample Degree Front"
              className="max-w-md h-auto rounded-lg shadow-lg"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/src/assets/university-placeholder.jpg';
              }}
            />
            <img 
              src="/src/assets/manipal-2nddegree.jpg" 
              alt="Sample Degree Back"
              className="max-w-md h-auto rounded-lg shadow-lg"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/src/assets/university-placeholder.jpg';
              }}
            />
          </div>
        </div>
      </section>

      {/* Career Scope */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Career Scope
            </h2>
            <p className="text-lg text-muted-foreground">
              Diverse career opportunities await our graduates
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Popular Career Paths</h3>
              <div className="grid grid-cols-1 gap-4">
                {course.careerScope.map((career, index) => (
                  <Card key={index} className="p-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <p className="font-medium">{career}</p>
                    </div>
                  </Card>
                ))}
              </div>
              <div className="mt-6 p-4 bg-card rounded-lg border">
                <p className="text-lg font-semibold text-primary">Average Salary Range</p>
                <p className="text-2xl font-bold">{course.averageSalary}</p>
              </div>
            </div>

            <div className="text-center">
              <img 
                src="/src/assets/placement.jpg" 
                alt="Career Opportunities"
                className="max-w-full h-auto rounded-lg shadow-lg"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/src/assets/university-placeholder.jpg';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our students are working at */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our students are working at
            </h2>
            <p className="text-lg text-muted-foreground">
              Leading companies trust our graduates
            </p>
          </div>

          <div className="flex justify-center">
            <img 
              src="/src/assets/hiring-partners.png" 
              alt="Hiring Partners"
              className="max-w-full h-auto"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/src/assets/university-placeholder.jpg';
              }}
            />
          </div>
        </div>
      </section>

      <RelatedContentSection />

      <EeatBlock />

      <Footer />
    </div>
  );
};

export default JainCoursePage;