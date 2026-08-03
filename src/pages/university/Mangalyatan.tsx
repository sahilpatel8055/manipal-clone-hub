import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import EmbeddedCounselingForm from "@/components/ui/embedded-counseling-form";
import { useCounselingForm } from "@/hooks/use-counseling-form";
import { Star, MapPin, Users, GraduationCap, Award, DollarSign, BookOpen, Clock, Check } from "lucide-react";
import NavigationHeader from "@/components/ui/navigation-header";
import Footer from "@/components/ui/footer";
import SampleDegreeSection from "@/components/ui/sample-degree-section";
import UniversitySlideshow from "@/components/ui/university-slideshow";
import WhyOnlineProgramsSection from "@/components/ui/why-online-programs-section";
import mangalayatanLogo from "@/assets/mangalyatan-logo.png";
import smuCampus from "@/assets/campus/smu.jpg";
import mangalayatanLmsImg from "@/assets/lms/muj.png";

import SectionNavigation from "@/components/ui/section-navigation";

// Import the specific icons for approvals
import ugcIcon from "@/assets/icons/ugc-icon.png";
import aicteIcon from "@/assets/icons/aicte-icon.png";
import naacIcon from "@/assets/icons/naac-icon.png";
import aiuIcon from "@/assets/icons/aiu-icon.png";

// Import course images
import mbaImg from "@/assets/course/mba.jpg";
import bbaImg from "@/assets/course/bba.jpg";
import mcaImg from "@/assets/course/mca.jpg";
import bcaImg from "@/assets/course/bca.jpg";
import baImg from "@/assets/course/ba.jpg";

// Import the degree image
import mangalayatanDegree from "@/assets/magalyatan.png";
import UniversityComparisonTool from "@/components/ui/university-comparison-tool";
import RelevantBlogsSection from "@/components/ui/relevant-blogs-section";
import SeoBreadcrumbs from "@/components/ui/seo-breadcrumbs";
import RelatedContentSection from "@/components/ui/related-content-section";
import EeatBlock from "@/components/ui/eeat-block";

const Mangalyatan = () => {
  const { openForm, CounselingFormComponent } = useCounselingForm();
  
  const sections = [
    { id: 'top', label: 'Overview' },
    { id: 'about', label: 'About' },
    { id: 'programs', label: 'Programs' },
    { id: 'approvals', label: 'Approvals' },
    { id: 'degree', label: 'Sample Degree' },
    { id: 'courses', label: 'Courses' },
    { id: 'placement', label: 'Placement' },
    { id: 'features', label: 'Features' },
    { id: 'apply', label: 'Apply' }
  ];
  
  const courses = [
    { name: "Online MBA", id: "online-mba", fees: "₹1,20,000", duration: "2 Years", specializations: 8, image: mbaImg },
    { name: "Online BBA", id: "online-bba", fees: "₹80,000", duration: "3 Years", specializations: 6, image: bbaImg },
    { name: "Online MCA", id: "online-mca", fees: "₹1,00,000", duration: "2 Years", specializations: 4, image: mcaImg },
    { name: "Online BCA", id: "online-bca", fees: "₹70,000", duration: "3 Years", specializations: 5, image: bcaImg },
    { name: "Online MA", id: "online-ma", fees: "₹40,000", duration: "2 Years", specializations: 4, image: baImg },
    { name: "Online BA", id: "online-ba", fees: "₹35,000", duration: "3 Years", specializations: 5, image: baImg }
  ];

  const features = [
    "UGC & AICTE Approved",
    "NAAC A Accredited",
    "Affordable Fee Structure",
    "Quality Education",
    "Experienced Faculty",
    "Flexible Learning Options",
    "Career Guidance",
    "Student Support Services"
  ];

  const approvals = [
    { name: "UGC-DEB", description: "University Grants Commission - Distance Education Bureau", icon: ugcIcon },
    { name: "AICTE", description: "All India Council for Technical Education", icon: aicteIcon },
    { name: "AIU", description: "Association of Indian Universities", icon: aiuIcon },
    { name: "NAAC A", description: "National Assessment and Accreditation Council", icon: naacIcon }
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      <SeoBreadcrumbs />
      
      {/* Hero Section with Integrated Slideshow */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-6" id="top">
        <div className="container mx-auto px-4">
          {/* Slideshow at top of section */}
          <div className="mb-8">
            <UniversitySlideshow imageSrc={smuCampus} imageAlt="Mangalyatan University Campus" />
          </div>
          
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                <img src={mangalayatanLogo} alt="Mangalyatan Logo" className="w-20 h-20 rounded-lg object-contain" />
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-2">Mangalyatan University Online</h1>
                  <p className="text-lg text-muted-foreground">NAAC A Accredited University</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                <div className="flex items-center gap-1 bg-primary/10 px-3 py-2 rounded-full">
                  <Star className="w-5 h-5 fill-primary text-primary" />
                  <span className="font-semibold text-primary">4.1</span>
                  <span className="text-muted-foreground">(600+ Reviews)</span>
                </div>
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  Affordable Education
                </Badge>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start gap-6 mb-8 text-sm">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Aligarh, UP</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4 text-primary" />
                  <span>20K+ Students</span>
                </div>
                <div className="flex items-center gap-1">
                  <GraduationCap className="w-4 h-4 text-primary" />
                  <span>18+ Programs</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={openForm}>
                  Apply Now
                </Button>
                <Button variant="outline" size="lg" onClick={openForm}>
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

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">About Mangalyatan University</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                <strong className="text-foreground">Mangalyatan University</strong> is a recognized private university located in Aligarh, Uttar Pradesh. Established with the vision of providing quality education at affordable costs, the university has been serving students across India with its diverse range of academic programs.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                The university offers online undergraduate and postgraduate programs in various disciplines including Management, Computer Applications, Arts, and Commerce. Mangalyatan University's online platform is designed to provide flexibility to working professionals and students who prefer distance learning.
              </p>
              <p className="text-lg leading-relaxed">
                With a commitment to academic excellence and affordability, Mangalyatan University ensures that quality higher education is accessible to students from all backgrounds. The university's programs are designed to meet industry requirements and prepare students for successful careers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Online Programs Section */}
      <WhyOnlineProgramsSection 
        universityName="Mangalyatan University" 
        lmsImagePath={mangalayatanLmsImg}
      />


      {/* Approvals Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Approvals & Accreditations</h2>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {approvals.map((approval, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-center mb-4">
                    <img src={approval.icon} alt={`${approval.name} Icon`} className="w-24 h-24 object-contain" />
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
        universityName="Mangalyatan University" 
        degreeImagePath={mangalayatanDegree}
      />

      {/* Courses Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Courses</h2>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {courses.map((course, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-center mb-4">
                    <img src={course.image} alt={course.name} className="w-16 h-16 object-cover rounded-lg" />
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
                  <Link to={`/university/mangalyatan/${course.id}`}>
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

      {/* Features Section */}
      <section className="py-16 bg-yellow-400">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Why Choose Mangalyatan University?</h2>
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
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Educational Journey?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of students who have chosen Mangalyatan University for affordable quality education. 
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

export default Mangalyatan;
