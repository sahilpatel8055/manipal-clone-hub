import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, DollarSign, Clock, BookOpen, Award, Check, ChevronLeft } from "lucide-react";
import NavigationHeader from "@/components/ui/navigation-header";
import Footer from "@/components/ui/footer";
import SampleDegreeSection from "@/components/ui/sample-degree-section";
import uttaranchalDegree from "@/assets/uu-degree.jpg";
import uttaranchalLogo from "@/assets/uttaranchal-logo.png";
import uttaranchalCourseData from "@/data/uttaranchalCourseData.json";
import EmbeddedCounselingForm from "@/components/ui/embedded-counseling-form";
import CareerAssistance from "@/components/ui/career-assistance";
import SectionNavigation from "@/components/ui/section-navigation";
import hiringPartnersImg from "@/assets/hiring-partners.png";
import WhyOnlineProgramsSection from "@/components/ui/why-online-programs-section";
import uttaranchalLmsImg from "@/assets/lms/uu.png";
import SeoBreadcrumbs from "@/components/ui/seo-breadcrumbs";
import RelatedContentSection from "@/components/ui/related-content-section";
import EeatBlock from "@/components/ui/eeat-block";

const UttaranchalCoursePage = () => {
  const { courseId } = useParams();
  const course = uttaranchalCourseData.courses.find(c => c.id === courseId);

  const sections = [
    { id: 'top', label: 'Overview' },
    { id: 'course-details', label: 'Details' },
    { id: 'specializations', label: 'Specializations' },
    { id: 'career-assistance', label: 'Career Support' },
    { id: 'apply', label: 'Apply Now' }
  ];

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-xl text-muted-foreground">Course not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      <SeoBreadcrumbs />
      <SectionNavigation sections={sections} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-12" id="top">
        <div className="container mx-auto px-4">
          <Link to="/university/uttaranchal" className="flex items-center text-primary hover:underline mb-6">
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back to Uttaranchal University
          </Link>
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                <img src={uttaranchalLogo} alt={`${course.university} Logo`} className="w-16 h-16 rounded-lg object-contain" />
                <div>
                  <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-1">{course.name}</h1>
                  <p className="text-lg text-muted-foreground">{course.university} Online</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                <div className="flex items-center gap-1 bg-primary/10 px-3 py-2 rounded-full">
                  <Star className="w-5 h-5 fill-primary text-primary" />
                  <span className="font-semibold text-primary">{course.rating}</span>
                  <span className="text-muted-foreground">({course.reviews} Reviews)</span>
                </div>
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  {course.level.toUpperCase()} Program
                </Badge>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Apply Now
                </Button>
                <Button variant="outline" size="lg">
                  Download Brochure
                </Button>
              </div>
            </div>
            
            <div className="flex-1 lg:max-w-md">
              <EmbeddedCounselingForm variant="compact" />
            </div>
          </div>
        </div>
      </section>

      {/* Fees & Eligibility Section */}
      <section className="py-16" id="course-details">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary">Fees Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Full Fees:</span>
                  <span className="font-semibold">{course.feesBreakdown.fullFees}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Per Semester:</span>
                  <span className="font-semibold">{course.feesBreakdown.perSemester}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">EMI Option:</span>
                  <span className="font-semibold">{course.feesBreakdown.emi}</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary">Eligibility</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                {course.level === 'ug' ? (
                  <p>10+2 or equivalent with a minimum of 45% aggregate marks from a recognized board.</p>
                ) : (
                  <p>Bachelor's degree in any discipline with a minimum of 45% aggregate marks from a recognized university.</p>
                )}
                <p className="mt-4">*A 5% relaxation is given for SC/ST candidates.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Curriculum & Specializations Section */}
      <section className="py-16" style={{ backgroundColor: '#fff7f7' }} id="specializations">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Curriculum & Specializations</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Curriculum */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary mb-4">Curriculum</h3>
              <div className="space-y-6">
                {course.curriculum.map((year, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <CardTitle className="text-xl mb-4 text-foreground">{year.year}</CardTitle>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      {year.subjects.map((subject, idx) => (
                        <li key={idx}>{subject}</li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </div>

            {/* Specializations */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary mb-4">Specializations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.specializations.map((spec, index) => (
                  <Badge key={index} variant="secondary" className="text-sm px-4 py-2 font-normal justify-center bg-white border border-border/50">
                    {spec}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY OPT FOR UTTARANCHAL UNIVERSITY ONLINE Section */}
      <section className="py-16 bg-yellow-400">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              WHY OPT FOR <br />
              <span className="text-green-600">UTTARANCHAL UNIVERSITY ONLINE?</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Our valued degrees stand out from the crowd and prepare you<br />
              for successful careers with industry-relevant curriculum.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl font-bold text-green-600 mb-2">25+</div>
              <div className="text-sm text-gray-700">Years of Excellence</div>
            </div>
            
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl font-bold text-green-600 mb-2">A+</div>
              <div className="text-sm text-gray-700">NAAC Accreditation</div>
            </div>
            
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl font-bold text-green-600 mb-2">₹8L</div>
              <div className="text-sm text-gray-700">Highest Package</div>
            </div>
            
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl font-bold text-green-600 mb-2">90%</div>
              <div className="text-sm text-gray-700">Placement Rate</div>
            </div>
          </div>
        </div>
        </section>

        {/* Sample Degree Section */}
        <SampleDegreeSection 
          universityName="Uttaranchal University" 
          degreeImagePath={uttaranchalDegree}
        />

        {/* Career Assistance Section */}
        <div id="career-assistance">
          <CareerAssistance />
        </div>

        {/* Career Scope & Top Recruiters Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Career Scope & Top Recruiters</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary">Career Opportunities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { role: "Software Engineer", salary: "₹4 - 8 LPA" },
                  { role: "Business Analyst", salary: "₹5 - 10 LPA" },
                  { role: "Project Manager", salary: "₹7 - 14 LPA" },
                  { role: "Marketing Executive", salary: "₹4 - 8 LPA" },
                  { role: "Financial Analyst", salary: "₹4 - 9 LPA" },
                  { role: "Operations Manager", salary: "₹5 - 12 LPA" }
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
              />
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
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary/10" id="apply">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey with {course.name}?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Apply now to take the first step towards a successful career. Our counselors are here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Apply for Admission
            </Button>
            <Button variant="outline" size="lg">
              Talk to Counselor
            </Button>
          </div>
        </div>
      </section>

      {/* Why Online Programs Section */}
      <WhyOnlineProgramsSection 
        universityName="Uttaranchal University" 
        lmsImagePath={uttaranchalLmsImg} 
      />

      <RelatedContentSection />

      <EeatBlock />

      <Footer />
    </div>
  );
};

export default UttaranchalCoursePage;
