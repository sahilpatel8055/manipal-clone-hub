import { Link } from "react-router-dom"; // Import Link here
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import EmbeddedCounselingForm from "@/components/ui/embedded-counseling-form";
import { useCounselingForm } from "@/hooks/use-counseling-form";
import { Star, MapPin, Users, GraduationCap, Award, DollarSign, BookOpen, Clock, Check } from "lucide-react";
import NavigationHeader from "@/components/ui/navigation-header";
import Footer from "@/components/ui/footer";
import UniversitySlideshow from "@/components/ui/university-slideshow";
import WhyOnlineProgramsSection from "@/components/ui/why-online-programs-section";
import uttaranchalLogo from "@/assets/uttaranchal-logo.png";
import uttaranchalCampus from "@/assets/campus/uttaranchal.png";
import uttaranchalLmsImg from "@/assets/lms/uu.png";
import { MovingBorderButton } from "@/components/ui/moving-border";

import SectionNavigation from "@/components/ui/section-navigation";

// Import the specific icons for approvals
import ugcIcon from "@/assets/icons/ugc-icon.png";
import aicteIcon from "@/assets/icons/aicte-icon.png";
import naacIcon from "@/assets/icons/naac-icon.png";
import aiuIcon from "@/assets/icons/aiu-icon.png";
import bciIcon from "@/assets/icons/bci-icon.png";
import pciIcon from "@/assets/icons/pci-icon.jpg";

// Import the degree image
import uuDegree from "@/assets/uu-degree.jpg";

// Import the course images
import mbaImg from "@/assets/course/mba.jpg";
import bbaImg from "@/assets/course/bba.jpg";
import mcaImg from "@/assets/course/mca.jpg";
import bcaImg from "@/assets/course/bca.jpg";
import baImg from "@/assets/course/ba.jpg";
import bcomImg from "@/assets/course/bcom.jpg";
import UniversityComparisonTool from "@/components/ui/university-comparison-tool";
import RelevantBlogsSection from "@/components/ui/relevant-blogs-section";
import SeoBreadcrumbs from "@/components/ui/seo-breadcrumbs";
import RelatedContentSection from "@/components/ui/related-content-section";
import EeatBlock from "@/components/ui/eeat-block";

const Uttaranchal = () => {
  const { openForm, CounselingFormComponent } = useCounselingForm();

  const sections = [
    { id: "top", label: "Home" },
    { id: "about", label: "About" },
    { id: "programs", label: "Programs" },
    { id: "approvals", label: "Approvals" },
    { id: "degree", label: "Sample Degree" },
    { id: "courses", label: "Courses" },
    { id: "why-choose", label: "Why Choose" },
    { id: "features", label: "Features" },
    { id: "apply", label: "Apply Now" }
  ];
  
  const courses = [
    { name: "Online MBA", id: "online-mba", fees: "₹1,80,000", duration: "2 Years", specializations: 8, image: mbaImg },
    { name: "Online BBA", id: "online-bba", fees: "₹1,50,000", duration: "3 Years", specializations: 6, image: bbaImg },
    { name: "Online MCA", id: "online-mca", fees: "₹1,50,000", duration: "2 Years", specializations: 4, image: mcaImg },
    { name: "Online BCA", id: "online-bca", fees: "₹1,20,000", duration: "3 Years", specializations: 5, image: bcaImg },
    { name: "Online MA", id: "online-ma", fees: "₹90,000", duration: "2 Years", specializations: 3, image: baImg },
    { name: "Online BA", id: "online-ba", fees: "₹70,000", duration: "3 Years", specializations: 4, image: baImg },
    { name: "Online B.Com", id: "online-bcom", fees: "₹70,000", duration: "3 Years", specializations: 2, image: bcomImg }
  ];

  const features = [
    "NAAC A+ accredited university",
    "Advanced Learning Management System",
    "Industry-aligned curriculum",
    "Live interactive sessions with faculty",
    "Virtual labs and practical sessions",
    "Placement assistance and career guidance",
    "Flexible payment options available",
    "Alumni network across industries"
  ];

  const approvals = [
    { name: "UGC", description: "University Grants Commission Approved", icon: ugcIcon },
    { name: "AICTE", description: "All India Council for Technical Education", icon: aicteIcon },
    { name: "AIU", description: "Association of Indian Universities", icon: aiuIcon },
    { name: "NAAC A+", description: "National Assessment and Accreditation Council", icon: naacIcon },
    { name: "BCI", description: "Bar Council of India", icon: bciIcon },
    { name: "PCI", description: "Pharmacy Council of India", icon: pciIcon }
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
            <UniversitySlideshow imageSrc={uttaranchalCampus} imageAlt="Uttaranchal University Campus" />
          </div>
          
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                <img src={uttaranchalLogo} alt="Uttaranchal Logo" className="w-20 h-20 rounded-lg object-contain" />
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-2">Uttaranchal University Online</h1>
                  <p className="text-lg text-muted-foreground">Accredited with grade A+ by NAAC</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                <div className="flex items-center gap-1 bg-primary/10 px-3 py-2 rounded-full">
                  <Star className="w-5 h-5 fill-primary text-primary" />
                  <span className="font-semibold text-primary">4.5</span>
                  <span className="text-muted-foreground">(703 Reviews)</span>
                </div>
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  NAAC A+ Accredited
                </Badge>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start gap-6 mb-8 text-sm">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Dehradun, India</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4 text-primary" />
                  <span>25K+ Students</span>
                </div>
                <div className="flex items-center gap-1">
                  <GraduationCap className="w-4 h-4 text-primary" />
                  <span>5 Programs</span>
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

      {/* About Section */}
      <section className="py-16" id="about">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">About Uttaranchal University Online</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                <strong className="text-foreground">Uttaranchal University</strong> is a leading private university located in Dehradun, Uttarakhand. Established in 2013, the university has quickly gained recognition for its commitment to providing quality education and research opportunities. The university is accredited with NAAC A+ grade, ensuring high standards of academic excellence.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                The university offers a wide range of online programs designed to meet the evolving needs of students and industry. With state-of-the-art learning management systems and experienced faculty, Uttaranchal University Online provides an immersive learning experience that combines theoretical knowledge with practical application.
              </p>
              <p className="text-lg leading-relaxed">
                The online programs are designed to offer flexibility to working professionals and students who cannot attend regular classes. The university maintains the same academic rigor and quality as its on-campus programs, ensuring that online students receive a comprehensive education that prepares them for successful careers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Online Programs Section */}
      <WhyOnlineProgramsSection 
        universityName="Uttaranchal University" 
        lmsImagePath={uttaranchalLmsImg}
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
      <section className="py-16" id="degree">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left side: Description */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-foreground mb-4">Sample Degree</h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-prose">
                The degrees offered by Uttaranchal University Online are valid and recognized by various government bodies, making them suitable for all career opportunities.
              </p>
              <ul className="space-y-4 text-left mx-auto md:mx-0 max-w-sm">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">UGC-DEB & AICTE Approved</p>
                    <p className="text-sm text-muted-foreground">The degrees are fully valid for government, private, and overseas jobs or higher studies.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Digital Verification</p>
                    <p className="text-sm text-muted-foreground">Supports online QR-code-based verification for authenticity.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Officially Stamped</p>
                    <p className="text-sm text-muted-foreground">Authenticated with the official university seal.</p>
                  </div>
                </li>
              </ul>
            </div>
            {/* Right side: Image */}
            <div className="flex-1 max-w-lg mx-auto md:max-w-none">
              <div className="relative p-4 rounded-xl shadow-2xl bg-white transition-transform duration-300 hover:scale-105">
                <img
                  src={uuDegree}
                  alt="Uttaranchal University Sample Degree"
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

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
                  <Link to={`/universities/uttaranchal-online/courses/${course.id}`}>
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

      {/* NEW: Why Opt for Uttaranchal University Online Section */}
      <section className="py-16 bg-yellow-400" id="why-choose">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              WHY OPT FOR <br />
              <span className="text-green-600">UTTARANCHAL UNIVERSITY ONLINE?</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Our valued degrees stand out from the crowd and prepare you<br />
              for a job at industry-leading companies.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left side: Image */}
            <div className="flex-1 max-w-lg mx-auto lg:max-w-none">
              <div className="relative">
                <img 
                  src="/lovable-uploads/c2569d69-4e00-4d39-bec8-f13408f1fc79.png" 
                  alt="Student studying online" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
            
            {/* Right side: Content */}
            <div className="flex-1 space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">01</div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Prodigious faculty and World-Class Curriculum</h3>
                  <p className="text-sm text-muted-foreground">Our intensive MBA curriculum hones your skills in business including finance, marketing, and Human resource.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">02</div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">1-on-1 Personalised Mentorship</h3>
                  <p className="text-sm text-muted-foreground">To provide support at every step, a dedicated mentor is assigned to each student.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">03</div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Reputed Degree from a Top Ranked University</h3>
                  <p className="text-sm text-muted-foreground">With NAAC A+ Grade, Uttaranchal University stands tall in the league of top universities in the country, and its degrees are highly valued and recognised by top corporates in India.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">04</div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Integrated LMS & e-library</h3>
                  <p className="text-sm text-muted-foreground">With thousands of e-books at your disposal, the Integrated Learning Management System is there to assist students 24x7.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">05</div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Job Assistance</h3>
                  <p className="text-sm text-muted-foreground">We provide complete placement assistance for your selection in a reputed organization.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30" id="features">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Why Choose Uttaranchal University?</h2>
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
            Join thousands of students who have chosen Uttaranchal University Online for quality education. 
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

      <SectionNavigation sections={sections} />
      <RelatedContentSection />
      <EeatBlock />
      <Footer />
      <CounselingFormComponent />
    </div>
  );
};

export default Uttaranchal;
