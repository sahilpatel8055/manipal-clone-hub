import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import EmbeddedCounselingForm from "@/components/ui/embedded-counseling-form";
import { useCounselingForm } from "@/hooks/use-counseling-form";
import { Star, MapPin, Users, GraduationCap, Award, DollarSign, Clock, Check, Globe, BookOpen } from "lucide-react";
import NavigationHeader from "@/components/ui/navigation-header";
import Footer from "@/components/ui/footer";
import SEOHead from "@/components/ui/seo-head";
import SampleDegreeSection from "@/components/ui/sample-degree-section";
import UniversitySlideshow from "@/components/ui/university-slideshow";
import WhyOnlineProgramsSection from "@/components/ui/why-online-programs-section";
import lpuLogo from "@/assets/lpu-logo.jpg";
import lpuCampus from "@/assets/campus/lpu.png";
import lpuLmsImg from "@/assets/lms/lpu.png";
import { MovingBorderButton } from "@/components/ui/moving-border";

import SectionNavigation from "@/components/ui/section-navigation";

// Import the specific icons for approvals
import ugcIcon from "@/assets/icons/ugc-icon.png";
import aicteIcon from "@/assets/icons/aicte-icon.png";
import naacIcon from "@/assets/icons/naac-icon.png";
import nirfIcon from "@/assets/icons/nirf-icon.png";
import aiuIcon from "@/assets/icons/aiu-icon.png";

// Import course images
import mbaImg from "@/assets/course/mba.jpg";
import bbaImg from "@/assets/course/bba.jpg";
import mcaImg from "@/assets/course/mca.jpg";
import bcaImg from "@/assets/course/bca.jpg";
import baImg from "@/assets/course/ba.jpg";

// Import the degree image
import lpuDegree from "@/assets/lpu.png";
import UniversityComparisonTool from "@/components/ui/university-comparison-tool";
import RelevantBlogsSection from "@/components/ui/relevant-blogs-section";
import SeoBreadcrumbs from "@/components/ui/seo-breadcrumbs";
import RelatedContentSection from "@/components/ui/related-content-section";
import EeatBlock from "@/components/ui/eeat-block";

const LPU = () => {
  const { openForm, CounselingFormComponent } = useCounselingForm();
  
  const sections = [
    { id: 'top', label: 'Overview' },
    { id: 'about', label: 'About' },
    { id: 'programs', label: 'Programs' },
    { id: 'approvals', label: 'Approvals' },
    { id: 'degree', label: 'Sample Degree' },
    { id: 'courses', label: 'Courses' },
    { id: 'more-than-degree', label: 'Benefits' },
    { id: 'features', label: 'Features' },
    { id: 'apply', label: 'Apply' }
  ];
  
  const courses = [
    { name: "Online MBA", id: "online-mba", fees: "₹1,80,000", duration: "2 Years", specializations: 10, image: mbaImg },
    { name: "Online BBA", id: "online-bba", fees: "₹1,20,000", duration: "3 Years", specializations: 8, image: bbaImg },
    { name: "Online MCA", id: "online-mca", fees: "₹1,50,000", duration: "2 Years", specializations: 5, image: mcaImg },
    { name: "Online BCA", id: "online-bca", fees: "₹90,000", duration: "3 Years", specializations: 6, image: bcaImg },
    { name: "Online MA", id: "online-ma", fees: "₹60,000", duration: "2 Years", specializations: 4, image: baImg },
    { name: "Online BA", id: "online-ba", fees: "₹45,000", duration: "3 Years", specializations: 6, image: baImg }
  ];

  const features = [
    "NAAC A++ Accredited",
    "Industry-Relevant Curriculum",
    "Global Faculty Network",
    "Comprehensive Placement Support",
    "Flexible Learning Modules",
    "Technology-Enhanced Learning",
    "Scholarship Opportunities",
    "International Exposure Programs"
  ];

  const approvals = [
    { name: "UGC-DEB", description: "University Grants Commission - Distance Education Bureau", icon: ugcIcon },
    { name: "AICTE", description: "All India Council for Technical Education", icon: aicteIcon },
    { name: "AIU", description: "Association of Indian Universities", icon: aiuIcon },
    { name: "NAAC A++", description: "National Assessment and Accreditation Council", icon: naacIcon },
    { name: "NIRF", description: "National Institutional Ranking Framework", icon: nirfIcon }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="LPU Distance Education | Online Degree Programs | UGC Approved Courses"
        description="Join LPU Distance Education with 100+ online programs. NAAC A++ rated, UGC-DEB approved. Flexible learning, industry partnerships & placement support."
        keywords="LPU distance education, LPU online courses, Lovely Professional University online, UGC approved distance learning"
        canonical="https://avedu.in/university/lpu"
      />
      <NavigationHeader />
      <SeoBreadcrumbs />
      
      {/* Hero Section with Moving Border Buttons */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-6" id="top">
        <div className="container mx-auto px-4">
          {/* Slideshow at top of section */}
          <div className="mb-8">
            <UniversitySlideshow imageSrc={lpuCampus} imageAlt="Lovely Professional University Campus" />
          </div>
          
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                <img src={lpuLogo} alt="LPU Logo" className="w-20 h-20 rounded-lg object-contain" loading="lazy" />
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-2">Lovely Professional University</h1>
                  <p className="text-lg text-muted-foreground">NAAC A++ Accredited University</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                <div className="flex items-center gap-1 bg-primary/10 px-3 py-2 rounded-full">
                  <Star className="w-5 h-5 fill-primary text-primary" />
                  <span className="font-semibold text-primary">4.4</span>
                  <span className="text-muted-foreground">(950+ Reviews)</span>
                </div>
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  NAAC A++
                </Badge>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start gap-6 mb-8 text-sm">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Phagwara, Punjab</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4 text-primary" />
                  <span>28K+ Students</span>
                </div>
                <div className="flex items-center gap-1">
                  <GraduationCap className="w-4 h-4 text-primary" />
                  <span>30+ Programs</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <MovingBorderButton 
                  borderRadius="0.5rem"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg"
                  onClick={openForm}
                >
                  Apply Now
                </MovingBorderButton>
                <MovingBorderButton 
                  borderRadius="0.5rem"
                  className="border border-input bg-background hover:bg-accent hover:text-accent-foreground px-8 py-3 text-lg"
                  onClick={openForm}
                >
                  Download Brochure
                </MovingBorderButton>
              </div>
            </div>
            
            <div className="flex-1 lg:max-w-md">
              <EmbeddedCounselingForm variant="compact" />
            </div>
          </div>
        </div>
      </section>

      <SectionNavigation sections={sections} />
      
      {/* About Section */}
      <section className="py-16" id="about">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">About Lovely Professional University</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                <strong className="text-foreground">Lovely Professional University (LPU)</strong> is one of India's largest private universities, established in 2005. Located in Punjab, LPU has earned recognition for its innovative teaching methodologies, diverse academic programs, and strong industry connections. The university has been consistently ranked among the top institutions in India.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                LPU Online offers a comprehensive range of undergraduate and postgraduate programs designed to meet the evolving needs of the industry. The online platform combines cutting-edge technology with experienced faculty to deliver quality education that is accessible, flexible, and industry-relevant.
              </p>
              <p className="text-lg leading-relaxed">
                With a focus on practical learning and skill development, LPU Online ensures that students are well-prepared for their careers. The university's strong placement record and extensive alumni network provide excellent opportunities for career advancement and professional growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Online Programs Section */}
      <WhyOnlineProgramsSection 
        universityName="Lovely Professional University" 
        lmsImagePath={lpuLmsImg}
      />


      {/* Approvals Section */}
      <section className="py-16 bg-muted/30" id="approvals">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Approvals & Accreditations</h2>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {approvals.map((approval, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-center mb-4">
                    <img src={approval.icon} alt={`${approval.name} Icon`} className="w-24 h-24 object-contain" loading="lazy" />
                  </div>
                  <CardTitle className="text-lg text-primary">{approval.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{approval.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Degree Section */}
      <SampleDegreeSection 
        universityName="Lovely Professional University" 
        degreeImagePath={lpuDegree}
      />

      {/* Courses Section */}
      <section className="py-16" id="courses">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Courses</h2>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {courses.map((course, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-center mb-4">
                    <img src={course.image} alt={course.name} className="w-16 h-16 object-cover rounded-lg" loading="lazy" />
                  </div>
                  <CardTitle className="text-lg text-center">{course.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-primary" />
                    <span className="font-semibold">{course.fees}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-primary" />
                    <span>{course.specializations} Specializations</span>
                  </div>
                  <Link to={`/university/lpu/${course.id}`}>
                    <Button className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90" variant="outline">
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Get More than Just a Degree Section */}
      <section className="py-16 bg-yellow-400" id="more-than-degree">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get More than Just a <span className="text-primary">Degree</span></h2>
            <p className="text-lg text-muted-foreground">Comprehensive learning experience designed for your success</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg border border-border/50 text-center">
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold mb-2">Global Recognition</h3>
              <p className="text-sm text-muted-foreground">Degrees recognized worldwide for career advancement and higher studies opportunities.</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border/50 text-center">
              <div className="bg-green-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold mb-2">Industry Mentorship</h3>
              <p className="text-sm text-muted-foreground">Learn from industry experts and professionals with real-world experience and insights.</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border/50 text-center">
              <div className="bg-orange-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-bold mb-2">Skill Certification</h3>
              <p className="text-sm text-muted-foreground">Earn industry-relevant certifications alongside your degree for enhanced employability.</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border/50 text-center">
              <div className="bg-purple-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold mb-2">Flexible Learning</h3>
              <p className="text-sm text-muted-foreground">Study at your own pace with flexible schedules that fit your lifestyle and commitments.</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border/50 text-center">
              <div className="bg-red-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-bold mb-2">Career Support</h3>
              <p className="text-sm text-muted-foreground">Comprehensive placement assistance and career guidance throughout your academic journey.</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border/50 text-center">
              <div className="bg-teal-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="font-bold mb-2">Alumni Network</h3>
              <p className="text-sm text-muted-foreground">Join a strong network of successful alumni across various industries and sectors globally.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Changed background to sunny yellow */}
      <section className="py-16 bg-muted/30" id="features">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Lovely Professional University?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-white/90 rounded-lg border border-yellow-300">
                <div className="flex-shrink-0 w-2 h-2 bg-gray-900 rounded-full mt-2"></div>
                <p className="text-sm text-gray-800">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* University Comparison Tool */}
      <UniversityComparisonTool />

      {/* Relevant Blogs Section */}
      <RelevantBlogsSection pageType="university" title="University Comparison & Selection Guide" />

      {/* CTA Section */}
      <section className="py-16 bg-primary/10" id="apply">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Educational Journey?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of students who have chosen Lovely Professional University for quality online education. 
            Apply now and take the first step towards your future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={openForm}>
              Apply for Admission
            </Button>
            <Button variant="outline" size="lg" onClick={openForm}>
              Talk to Counselor
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

export default LPU;
