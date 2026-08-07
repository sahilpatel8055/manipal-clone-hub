import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import EmbeddedCounselingForm from "@/components/ui/embedded-counseling-form";
import { useCounselingForm } from "@/hooks/use-counseling-form";
import { Star, MapPin, Users, GraduationCap, Award, DollarSign, BookOpen, Clock, Check, Globe } from "lucide-react";
import NavigationHeader from "@/components/ui/navigation-header";
import Footer from "@/components/ui/footer";
import SampleDegreeSection from "@/components/ui/sample-degree-section";
import UniversitySlideshow from "@/components/ui/university-slideshow";
import WhyOnlineProgramsSection from "@/components/ui/why-online-programs-section";
import vguLogo from "@/assets/vgu-logo.png";
import vguCampus from "@/assets/campus/vgu.jpg";
import vguLmsImg from "@/assets/lms/vgu.png";
import { MovingBorderButton } from "@/components/ui/moving-border";

import SectionNavigation from "@/components/ui/section-navigation";

// Import the specific icons for approvals
import ugcIcon from "@/assets/icons/ugc-icon.png";
import aicteIcon from "@/assets/icons/aicte-icon.png";
import naacIcon from "@/assets/icons/naac-icon.png";
import wesIcon from "@/assets/icons/wes-icon.png";
import aiuIcon from "@/assets/icons/aiu-icon.png";

// Import course images
import mbaImg from "@/assets/course/mba.jpg";
import bbaImg from "@/assets/course/bba.jpg";
import mcaImg from "@/assets/course/mca.jpg";
import bcaImg from "@/assets/course/bca.jpg";
import baImg from "@/assets/course/ba.jpg";

// Import the degree image
import vguDegree from "@/assets/vgu-degree.jpg";
import bcomImg from "@/assets/course/bcom.jpg";
import UniversityComparisonTool from "@/components/ui/university-comparison-tool";
import RelevantBlogsSection from "@/components/ui/relevant-blogs-section";
import SeoBreadcrumbs from "@/components/ui/seo-breadcrumbs";
import RelatedContentSection from "@/components/ui/related-content-section";
import EeatBlock from "@/components/ui/eeat-block";

const VGU = () => {
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
    { name: "Online MCA", id: "online-mca", fees: "₹96,000", duration: "2 Years", specializations: 3, image: mcaImg },
    { name: "Online M.Com", id: "online-mcom", fees: "₹60,000", duration: "2 Years", specializations: 2, image: bcomImg },
    { name: "Online BBA", id: "online-bba", fees: "₹1,08,000", duration: "3 Years", specializations: 6, image: bbaImg },
    { name: "Online BCA", id: "online-bca", fees: "₹1,20,000", duration: "3 Years", specializations: 4, image: bcaImg },
    { name: "Online B.Com", id: "online-bcom", fees: "₹54,000", duration: "3 Years", specializations: 3, image: bcomImg },
    { name: "Online BA", id: "online-ba", fees: "₹45,000", duration: "3 Years", specializations: 5, image: baImg }
  ];

  const features = [
    "NAAC A+ Accredited",
    "UGC-DEB Approved", 
    "Industry-Aligned Curriculum",
    "Expert Faculty Network",
    "Comprehensive Learning Resources",
    "Career Support Services",
    "Flexible Learning Options",
    "Strong Alumni Network"
  ];

  const approvals = [
    { name: "UGC-DEB", description: "University Grants Commission - Distance Education Bureau", icon: ugcIcon },
    { name: "AICTE", description: "All India Council for Technical Education", icon: aicteIcon },
    { name: "AIU", description: "Association of Indian Universities", icon: aiuIcon },
    { name: "NAAC A+", description: "National Assessment and Accreditation Council", icon: naacIcon },
    { name: "SWAYAM", description: "Study Webs of Active Learning for Young Aspiring Minds", icon: wesIcon }
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
            <UniversitySlideshow imageSrc={vguCampus} imageAlt="Vivekananda Global University Campus" />
          </div>
          
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                <img src={vguLogo} alt="VGU Logo" className="w-20 h-20 rounded-lg object-contain" />
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-2">Vivekananda Global University</h1>
                  <p className="text-lg text-muted-foreground">NAAC A+ Accredited University</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                <div className="flex items-center gap-1 bg-primary/10 px-3 py-2 rounded-full">
                  <Star className="w-5 h-5 fill-primary text-primary" />
                  <span className="font-semibold text-primary">4.3</span>
                  <span className="text-muted-foreground">(800+ Reviews)</span>
                </div>
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  UGC Approved
                </Badge>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start gap-6 mb-8 text-sm">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Jaipur, Rajasthan</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4 text-primary" />
                  <span>25K+ Students</span>
                </div>
                <div className="flex items-center gap-1">
                  <GraduationCap className="w-4 h-4 text-primary" />
                  <span>50+ Programs</span>
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
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">About Vivekananda Global University</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                <strong className="text-foreground">Vivekananda Global University (VGU)</strong> is a premier institution established in 2012 in Jaipur, Rajasthan. Named after the great philosopher and spiritual leader Swami Vivekananda, VGU embodies the values of excellence, innovation, and holistic development in education.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                VGU offers a wide range of undergraduate and postgraduate programs through its online learning platform, designed to meet the diverse needs of modern students. The university combines traditional academic rigor with contemporary teaching methodologies to provide quality education that is both accessible and relevant.
              </p>
              <p className="text-lg leading-relaxed">
                With NAAC A+ accreditation and UGC-DEB approval, VGU's online programs maintain the same academic standards as on-campus courses. The university's commitment to quality education and student success makes it a preferred choice for distance learning in India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Online Programs Section */}
      <WhyOnlineProgramsSection 
        universityName="Vivekananda Global University" 
        lmsImagePath={vguLmsImg}
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
        universityName="Vivekananda Global University" 
        degreeImagePath={vguDegree}
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
                  <Link to={`/universities/vgu-online/courses/${course.id}`}>
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

      {/* What Makes Online VGU Right Choice Section */}
      <section className="py-16 bg-yellow-400">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              What Makes Online VGU Right Choice?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover why thousands of students choose VGU for their online education journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Global Recognition</h3>
              <p className="text-muted-foreground">
                Degrees recognized worldwide with international accreditation and industry partnerships.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Expert Faculty</h3>
              <p className="text-muted-foreground">
                Learn from industry experts and experienced academicians with proven track records.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Flexible Learning</h3>
              <p className="text-muted-foreground">
                Study at your own pace with 24/7 access to learning materials and resources.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Industry-Relevant Curriculum</h3>
              <p className="text-muted-foreground">
                Updated curriculum designed in consultation with industry leaders and professionals.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Career Support</h3>
              <p className="text-muted-foreground">
                Comprehensive placement assistance and career guidance throughout your journey.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Quality Assurance</h3>
              <p className="text-muted-foreground">
                NAAC A+ accredited programs ensuring the highest standards of education quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Vivekananda Global University?</h2>
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
            Join thousands of students who have chosen VGU Online for quality education. 
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

export default VGU;
