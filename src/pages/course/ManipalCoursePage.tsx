import { Link, useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NavigationHeader from "@/components/ui/navigation-header";
import Footer from "@/components/ui/footer";
import SEOHead from "@/components/ui/seo-head";
import manipalCourseData from "@/data/manipalCourseData.json";
import manipalLogo from "@/assets/manipal-logo.png";
import {
  BookOpen,
  DollarSign,
  Award,
  Clock,
  BriefcaseBusiness,
  Star,
  Download,
  Users,
  Banknote,
  LineChart,
  Cloud,
  Shield,
  Bot,
  Code,
  Laptop,
  MessageSquare,
  Globe,
  Headphones
} from "lucide-react";
import EmbeddedCounselingForm from "@/components/ui/embedded-counseling-form";
import CareerAssistance from "@/components/ui/career-assistance";
import hiringPartnersImg from "@/assets/hiring-partners.png";
import WhyOnlineProgramsSection from "@/components/ui/why-online-programs-section";
import SectionNavigation from "@/components/ui/section-navigation";
import manipalLmsImg from "@/assets/lms/muj.png";
import { useCounselingForm } from "@/hooks/use-counseling-form";
import LeadGenerationEnhancements from "@/components/ui/lead-generation-enhancements";
import RelevantBlogsSection from "@/components/ui/relevant-blogs-section";
import SeoBreadcrumbs from "@/components/ui/seo-breadcrumbs";
import RelatedContentSection from "@/components/ui/related-content-section";
import EeatBlock from "@/components/ui/eeat-block";

// Updated specializationIcons mapping to use Lucide-React icons
const specializationIcons = {
  "Digital Marketing": LineChart,
  "Marketing": LineChart,
  "Analytics and Data Science": LineChart,
  "IT & FinTech": Laptop,
  "Finance": Banknote,
  "Human Resource Management": Users,
  "BFSI": Banknote,
  "Operations Management": BriefcaseBusiness,
  "Data Science": LineChart,
  "Cloud Computing": Cloud,
  "Cyber Security": Shield,
  "Artificial Intelligence": Bot,
  "Full Stack Development": Code,
  "Financial Accounting": Banknote,
  "Business Finance": Banknote,
  "Journalism": MessageSquare,
  "Public Relations": Headphones,
  "Accounts & Finance": Banknote
};

const ManipalCoursePage = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const course = manipalCourseData.courses.find((c) => c.id === courseId);

  if (!course) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold">Course not found.</h1>
      </div>
    );
  }

  const CourseSpecializationIcon = ({ spec }: { spec: string }) => {
    const IconComponent = specializationIcons[spec as keyof typeof specializationIcons];
    if (!IconComponent) return <Award className="w-6 h-6 text-primary" />; // Fallback icon
    return <IconComponent className="w-6 h-6 text-primary" />;
  };

  const sections = [
    { id: "hero", label: "Overview" },
    { id: "fees", label: "Fees" },
    { id: "curriculum", label: "Curriculum" },
    { id: "specializations", label: "Specializations" },
    { id: "why-online", label: "Why Online" },
    { id: "career", label: "Career" },
    { id: "placement", label: "Placement" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title={`${course.name} Online - Manipal University | Fee ₹${course.feesBreakdown.fullFees} | 100% Placement`}
        description={`Study ${course.name} online from Manipal University. Total fee ${course.feesBreakdown.fullFees}, ${course.duration} duration, ${course.specializations.length} specializations. NAAC A++ accredited with placement assistance.`}
        keywords={`${course.name} online, Manipal University ${course.name}, online ${course.name} fees, ${course.name} placement, distance education`}
        canonical={`https://avedu.in/universities/manipal-online/courses/${course.id}`}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Course",
          "name": `${course.name} - Manipal University Online`,
          "description": `${course.name} program offered by Manipal University through online mode`,
          "provider": {
            "@type": "Organization",
            "name": "Manipal University",
            "sameAs": "https://manipal.edu"
          },
          "offers": {
            "@type": "Offer",
            "category": "Educational",
            "price": course.feesBreakdown.fullFees.replace('₹', '').replace(',', ''),
            "priceCurrency": "INR"
          },
          "courseMode": "Online",
          "educationalLevel": course.level === 'ug' ? 'Undergraduate' : 'Postgraduate',
          "timeRequired": course.duration,
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": course.rating,
            "reviewCount": course.reviews
          }
        }}
      />
      <NavigationHeader />
      <SeoBreadcrumbs />
      <SectionNavigation sections={sections} />

      {/* Header Section */}
      <section id="hero" className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                <img
                  src={manipalLogo}
                  alt={`${course.university} Logo`}
                  className="w-16 h-16 rounded-lg object-contain"
                  loading="lazy"
                />
                <div>
                  <h1 className="text-4xl font-bold text-foreground">
                    {course.name}
                  </h1>
                  <p className="text-xl text-muted-foreground mt-2">
                    {course.university}
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Award className="w-4 h-4 text-primary" />
                  <span>{course.level.toUpperCase()} Program</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-primary fill-primary" />
                  <span>{course.rating} ({course.reviews} Reviews)</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-6">
                <Button size="lg">Apply Now</Button>
                <Button variant="outline" size="lg">
                  <Download className="w-4 h-4 mr-2" />
                  Download Brochure
                </Button>
              </div>
            </div>
            
            {/* Counseling Form */}
            <div className="flex-1 lg:max-w-md">
              <EmbeddedCounselingForm variant="compact" />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">

        {/* Fees Card Section */}
        <section id="fees">
        <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-2">
          <DollarSign className="w-8 h-8 text-primary" /> Online {course.name} Fee
        </h2>
        <Card className="bg-card p-6 shadow-md">
          <Tabs defaultValue="indian">
            <TabsList className="mb-4">
              <TabsTrigger value="indian">Indian Nationals</TabsTrigger>
              <TabsTrigger value="nri">Non-Resident Indians</TabsTrigger>
              <TabsTrigger value="foreign">Foreign Nationals</TabsTrigger>
            </TabsList>
            <TabsContent value="indian">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 rounded-lg bg-primary/10 border border-primary/20">
                <div className="flex flex-col justify-center">
                  <p className="text-xl font-semibold text-muted-foreground">
                    Full Course Fee ({course.level === 'ug' ? 'Six' : 'Four'} semesters)
                  </p>
                  <p className="text-4xl font-bold text-primary mt-2">
                    {course.feesBreakdown.fullFees}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Inclusive of all taxes
                  </p>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-xl font-semibold text-muted-foreground">
                    Each Semester Fee
                  </p>
                  <p className="text-4xl font-bold text-primary mt-2">
                    {course.feesBreakdown.perSemester}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Inclusive of all taxes
                  </p>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-xl font-semibold text-muted-foreground">
                    EMI Starting at
                  </p>
                  <p className="text-4xl font-bold text-primary mt-2">
                    {course.feesBreakdown.emi}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Terms & conditions apply
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </Card>
        </section>

        {/* Curriculum Section */}
        <section id="curriculum" style={{ backgroundColor: '#fff1f1' }} className="p-8 rounded-lg mt-12">
          <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-2">
            <BookOpen className="w-8 h-8 text-primary" /> Online {course.name} Curriculum
          </h2>
          <Card className="bg-card p-6 shadow-md">
          <p className="text-muted-foreground mb-6">
            Explore a list of all subjects (semester wise) covered in our {course.level.toUpperCase()} program.
          </p>
          <Tabs defaultValue={course.curriculum[0]?.year}>
            <TabsList className="mb-4">
              {course.curriculum.map((year, index) => (
                <TabsTrigger key={index} value={year.year}>
                  {year.year}
                </TabsTrigger>
              ))}
            </TabsList>
            {course.curriculum.map((year, index) => (
              <TabsContent key={index} value={year.year}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {year.subjects.map((subject, sIndex) => (
                    <Card key={sIndex} className="bg-secondary p-4">
                      <p>{subject}</p>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </Card>
        </section>

        {/* Specializations Section */}
        <section id="specializations" style={{ backgroundColor: '#fff1f1' }} className="p-8 rounded-lg mt-12">
          <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-2">
            <BriefcaseBusiness className="w-8 h-8 text-primary" /> {course.name} Specializations Offered
          </h2>
          <Card className="bg-card p-6 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {course.specializations.map((spec, index) => (
              <Card key={index} className="flex items-center gap-4 p-4 hover:bg-secondary transition-colors">
                <CourseSpecializationIcon spec={spec} />
                <span className="font-semibold">{spec}</span>
              </Card>
            ))}
          </div>
        </Card>
        </section>

        {/* Why Online Programs Section */}
        <div id="why-online">
        <WhyOnlineProgramsSection 
          universityName="Manipal University" 
          lmsImagePath={manipalLmsImg} 
        />
        </div>

        {/* Career Assistance Section */}
        <div id="career">
        <CareerAssistance />
        </div>

        {/* Experience 100% Placement Support Section */}
        <section id="placement" className="py-16 bg-yellow-400 mt-12 rounded-lg">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Experience 100% Placement
                <br />
                <span className="text-green-600">Support For Your Career Success</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Our dedicated placement team works tirelessly to connect you with top employers
                <br />
                across industries for guaranteed career advancement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
                <div className="text-sm text-gray-700">Placement Assistance</div>
              </div>
              
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
                <div className="text-sm text-gray-700">Hiring Partners</div>
              </div>
              
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-4xl font-bold text-green-600 mb-2">₹12L</div>
                <div className="text-sm text-gray-700">Highest Package</div>
              </div>
              
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-4xl font-bold text-green-600 mb-2">₹5.5L</div>
                <div className="text-sm text-gray-700">Average Package</div>
              </div>
            </div>
          </div>
        </section>

        {/* Career Scope & Top Recruiters Section */}
        <section className="py-16 bg-white mt-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Career Scope & Top Recruiters</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-primary">Career Opportunities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { role: "Business Analyst", salary: "₹6 - 12 LPA" },
                    { role: "Product Manager", salary: "₹8 - 18 LPA" },
                    { role: "Marketing Manager", salary: "₹7 - 15 LPA" },
                    { role: "Operations Manager", salary: "₹6 - 14 LPA" },
                    { role: "Financial Analyst", salary: "₹5 - 10 LPA" },
                    { role: "HR Manager", salary: "₹6 - 12 LPA" }
                  ].map((career, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium">{career.role}</span>
                      <span className="text-primary font-semibold">{career.salary}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-6 text-primary">Top Recruiters</h3>
                <img 
                  src={hiringPartnersImg} 
                  alt="Top Hiring Partners" 
                  className="w-full max-w-md mx-auto rounded-lg shadow-md"
                  loading="lazy"
                />
              </div>
            </div>
            
            {/* Hub-and-Spoke Internal Links */}
            <div className="bg-primary/5 p-6 rounded-lg mt-12">
              <h3 className="text-xl font-semibold text-foreground mb-4">Related Resources</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <Link to="/universities/manipal-online" className="text-primary hover:underline font-medium">
                  ← Back to Manipal University Hub
                </Link>
                <Link to="/courses" className="text-primary hover:underline font-medium">
                  → Compare with Other Courses
                </Link>
                <Link to="/blog" className="text-primary hover:underline font-medium">
                  → Read Career Guidance Articles
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Our Students Are Working At Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Our Students Are Working At</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Many companies actively recruit graduates from diverse industries including consulting, finance, FMCG, technology, and logistics.
            </p>
            <div className="flex justify-center">
              <img 
                src={hiringPartnersImg} 
                alt="Companies where our students work" 
                className="max-w-full h-auto rounded-lg shadow-md"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </div>

      {/* Relevant Blogs Section */}
      <RelevantBlogsSection 
        pageType="mba" 
        title="MBA Career & Guidance Articles"
        maxBlogs={3}
      />

      <RelatedContentSection />

      <EeatBlock />

      <Footer />
    </div>
  );
};

export default ManipalCoursePage;
