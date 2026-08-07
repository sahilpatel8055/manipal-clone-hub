import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MovingBorderButton } from "@/components/ui/moving-border";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import EmbeddedCounselingForm from "@/components/ui/embedded-counseling-form";
import { useCounselingForm } from "@/hooks/use-counseling-form";
import { Star, MapPin, Users, GraduationCap, Award, DollarSign, BookOpen, Clock, Check } from "lucide-react";
import NavigationHeader from "@/components/ui/navigation-header";
import Footer from "@/components/ui/footer";
import FlippableDegreeSection from "@/components/ui/flippable-degree-section";
import UniversitySlideshow from "@/components/ui/university-slideshow";
import WhyOnlineProgramsSection from "@/components/ui/why-online-programs-section";
import smuLogo from "@/assets/smu-logo.jpg";
import smuCampus from "@/assets/campus/smu.jpg";
import smuLmsImg from "@/assets/lms/muj.png";

import SectionNavigation from "@/components/ui/section-navigation";

// Import the specific icons for approvals
import ugcIcon from "@/assets/icons/ugc-icon.png";
import aicteIcon from "@/assets/icons/aicte-icon.png";
import naacIcon from "@/assets/icons/naac-icon.png";
import wesIcon from "@/assets/icons/wes-icon.png";
import aiuIcon from "@/assets/icons/aiu-icon.png";

// Import the specific icons for approvals
import mbaImg from "@/assets/course/mba.jpg";
import bbaImg from "@/assets/course/bba.jpg";
import mcaImg from "@/assets/course/mca.jpg";
import bcaImg from "@/assets/course/bca.jpg";
import baImg from "@/assets/course/ba.jpg";

// Import the degree images
import sikkimFront from "@/assets/smu.png";
import sikkimBack from "@/assets/manipal-2nddegree.jpg";
import UniversityComparisonTool from "@/components/ui/university-comparison-tool";
import RelevantBlogsSection from "@/components/ui/relevant-blogs-section";
import SeoBreadcrumbs from "@/components/ui/seo-breadcrumbs";
import RelatedContentSection from "@/components/ui/related-content-section";
import EeatBlock from "@/components/ui/eeat-block";

const Sikkim = () => {
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
    { name: "Online MBA", id: "online-mba", fees: "₹60,000", duration: "2 Years", specializations: 8, image: mbaImg },
    { name: "Online MCA", id: "online-mca", fees: "₹60,000", duration: "2 Years", specializations: 4, image: mcaImg },
    { name: "Online BCA", id: "online-bca", fees: "₹40,000", duration: "3 Years", specializations: 5, image: bcaImg },
    { name: "Online BBA", id: "online-bba", fees: "₹40,000", duration: "3 Years", specializations: 6, image: bbaImg },
    { name: "Online MA", id: "online-ma", fees: "₹25,000", duration: "2 Years", specializations: 3, image: baImg },
    { name: "Online BA", id: "online-ba", fees: "₹25,000", duration: "3 Years", specializations: 4, image: baImg }
  ];

  const features = [
    "UGC & AICTE Approved Programs",
    "WES Recognized Degrees",
    "Flexible Learning Schedule",
    "Industry-Aligned Curriculum",
    "Expert Faculty Support",
    "Placement Assistance",
    "EMI Payment Options",
    "Student Support Services"
  ];

  const approvals = [
    { name: "UGC-DEB", description: "University Grants Commission - Distance Education Bureau", icon: ugcIcon },
    { name: "AICTE", description: "All India Council for Technical Education", icon: aicteIcon },
    { name: "AIU", description: "Association of Indian Universities", icon: aiuIcon },
    { name: "NAAC A", description: "National Assessment and Accreditation Council", icon: naacIcon },
    { name: "WES", description: "World Education Services Recognition", icon: wesIcon }
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      <SeoBreadcrumbs />
      
      {/* Hero Section with Moving Border Buttons */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-6" id="top">
        <div className="container mx-auto px-4">
          {/* Slideshow at top of section */}
          <div className="mb-8">
            <UniversitySlideshow imageSrc={smuCampus} imageAlt="Sikkim Manipal University Campus" />
          </div>
          
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                <img src={smuLogo} alt="Sikkim Manipal Logo" className="w-20 h-20 rounded-lg object-contain" />
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-2">Sikkim Manipal University</h1>
                  <p className="text-lg text-muted-foreground">NAAC A Accredited University</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                <div className="flex items-center gap-1 bg-primary/10 px-3 py-2 rounded-full">
                  <Star className="w-5 h-5 fill-primary text-primary" />
                  <span className="font-semibold text-primary">4.4</span>
                  <span className="text-muted-foreground">(1200+ Reviews)</span>
                </div>
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  WES Recognized
                </Badge>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start gap-6 mb-8 text-sm">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Gangtok, Sikkim</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4 text-primary" />
                  <span>45K+ Students</span>
                </div>
                <div className="flex items-center gap-1">
                  <GraduationCap className="w-4 h-4 text-primary" />
                  <span>20+ Programs</span>
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
            <h2 className="text-3xl font-bold text-center mb-8">About Sikkim Manipal University</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                <strong className="text-foreground">Sikkim Manipal University (SMU)</strong> is a state private university established in 1995 through a unique partnership between the Government of Sikkim and Manipal Academy of Higher Education. SMU is recognized by the University Grants Commission (UGC) and holds the distinction of being one of the first universities in India to offer online education.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                The university offers a comprehensive range of online undergraduate and postgraduate programs in various disciplines including Management, Computer Applications, and Arts. SMU's online programs are designed to provide flexible learning opportunities for working professionals and students who cannot attend regular campus-based classes.
              </p>
              <p className="text-lg leading-relaxed">
                SMU's degrees are recognized by major international organizations including WES (World Education Services), making them valuable for global career opportunities. The university maintains high academic standards and provides comprehensive support to online students through its advanced learning management system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Online Programs Section */}
      <WhyOnlineProgramsSection 
        universityName="Sikkim Manipal University" 
        lmsImagePath={smuLmsImg}
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
      <FlippableDegreeSection 
        universityName="Sikkim Manipal University" 
        frontImagePath={sikkimFront}
        backImagePath={sikkimBack}
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
                  <Link to={`/universities/sikkim-manipal-online/courses/${course.id}`}>
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

      {/* Experience 100% Placement Support Section - Changed to Sunny Yellow */}
      <section className="py-16 bg-yellow-400" id="placement">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left side: Image */}
            <div className="flex-1 max-w-lg mx-auto md:max-w-none">
              <div className="relative p-4 rounded-xl shadow-2xl bg-white">
                <div className="bg-blue-600 text-white px-4 py-2 rounded-full inline-block mb-4">
                  <span className="font-bold">LEADING RECRUITERS</span>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-white p-2 rounded text-center">SPINNY</div>
                    <div className="bg-white p-2 rounded text-center">DELHIVERY</div>
                    <div className="bg-white p-2 rounded text-center">InsuranceDeKho</div>
                    <div className="bg-white p-2 rounded text-center">Mahindra Finance</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side: Content */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Experience <span className="bg-yellow-400 px-2 py-1 rounded">100%</span> Placement
              </h2>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Support For Your Career Success
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Unlock your career potential with job-ready skills and expert placement support.
              </p>
              <Button className="bg-primary hover:bg-primary/90 mb-6">
                Learn More →
              </Button>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                <div className="text-center">
                  <h4 className="text-2xl font-bold text-foreground">10,000<sup>+</sup></h4>
                  <p className="text-sm text-muted-foreground">Learners offered placement assistance</p>
                </div>
                <div className="text-center">
                  <h4 className="text-2xl font-bold text-foreground">20,000<sup>+</sup></h4>
                  <p className="text-sm text-muted-foreground">Opportunities created</p>
                </div>
                <div className="text-center">
                  <h4 className="text-2xl font-bold text-foreground">500<sup>+</sup></h4>
                  <p className="text-sm text-muted-foreground">Hiring partners</p>
                </div>
                <div className="text-center">
                  <h4 className="text-2xl font-bold text-foreground">1,000<sup>+</sup></h4>
                  <p className="text-sm text-muted-foreground">Industry-readiness programs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Back to original background */}
      <section className="py-16 bg-muted/30" id="features">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Why Choose Sikkim Manipal University?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-lg border">
                <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></div>
                <p className="text-sm text-foreground">{feature}</p>
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
            Join thousands of students who have chosen Sikkim Manipal University for quality online education. 
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

export default Sikkim;
