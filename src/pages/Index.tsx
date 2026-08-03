import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import NavigationHeader from "@/components/ui/navigation-header";
import Footer from "@/components/ui/footer";
import HeroSection from "@/components/ui/hero-section";
import CounsellingSection from "@/components/ui/counselling-section";
import CourseCategories from "@/components/ui/course-categories";
import UniversityGrid from "@/components/ui/university-grid";
import UniversityLogosMarquee from "@/components/ui/university-logos-marquee";
import Slideshow from "@/components/ui/slideshow";
import CareerAssistance from "@/components/ui/career-assistance";
import ConvocationSlider from "@/components/ui/convocation-slider";
import { FlipWords } from "@/components/ui/flip-words";
import { Link } from "react-router-dom";
import { BookOpen, Users, Award, GraduationCap, Star, ArrowRight } from "lucide-react";
import { useCounselingForm } from "@/hooks/use-counseling-form";
import { useSEO } from "@/hooks/use-seo";

// Course Images
import mbaImage from "@/assets/course/mba.jpg";
import bbaImage from "@/assets/course/bba.jpg";
import mcaImage from "@/assets/course/mca.jpg";
import bcaImage from "@/assets/course/bca.jpg";
import baImage from "@/assets/course/ba.jpg";
import bcomImage from "@/assets/course/bcom.jpg";

// University Logos
import ignouLogo from "@/assets/ignou-logo.png";
import manipalLogo from "@/assets/manipal-logo.png";
import amityLogo from "@/assets/amity-logo.jpg";
import lpuLogo from "@/assets/lpu-logo.jpg";
import smuLogo from "@/assets/smu-logo.jpg";
import uttaranchalLogo from "@/assets/uttaranchal-logo.png";
import SeoBreadcrumbs from "@/components/ui/seo-breadcrumbs";
import RelatedContentSection from "@/components/ui/related-content-section";
import EeatBlock from "@/components/ui/eeat-block";

const Index = () => {
  const { openForm, CounselingFormComponent } = useCounselingForm();
  
  // SEO optimization for homepage
  useSEO({
    title: "AVEDU - Best Online UG & PG Courses | Expert Counselling | avedu.in",
    description: "Find the perfect online UG & PG courses from 100+ top Indian universities. Get free expert counselling to choose the best degree for your career goals and budget.",
    keywords: "online degree, distance education, UGC approved universities, online MBA, online BCA, online BBA, IGNOU, Manipal online, Amity online, online graduation, career counselling, distance learning India",
    canonical: "https://avedu.in/",
    ogImage: "https://avedu.in/lovable-uploads/d1a868cd-cbeb-4c57-9a43-86bb3e758613.png",
    ogType: "website",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "AVEDU",
      "url": "https://avedu.in",
      "logo": "https://avedu.in/lovable-uploads/d1a868cd-cbeb-4c57-9a43-86bb3e758613.png",
      "description": "Leading educational counselling platform for online and distance education in India",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "5000"
      }
    }
  });
  
  const universities = [
    {
      id: "ignou",
      name: "IGNOU",
      logo: ignouLogo,
      description: "Indira Gandhi National Open University",
      route: "/university/ignou"
    },
    {
      id: "manipal",
      name: "Manipal University Online",
      logo: manipalLogo,
      description: "Premier Private University",
      route: "/university/manipal"
    },
    {
      id: "amity",
      name: "Amity University Online",
      logo: amityLogo,
      description: "Leading Private University",
      route: "/university/amity"
    },
    {
      id: "lpu",
      name: "Lovely Professional University",
      logo: lpuLogo,
      description: "Top Ranked University",
      route: "/university/lpu"
    },
    {
      id: "sikkim",
      name: "Sikkim Manipal University",
      logo: smuLogo,
      description: "Distance Learning Pioneer",
      route: "/university/sikkim"
    },
    {
      id: "uttaranchal",
      name: "Uttaranchal University",
      logo: uttaranchalLogo,
      description: "Innovation in Education",
      route: "/university/uttaranchal"
    }
  ];

  // Transform universities data for HorizontalUniversityScroll component
  const horizontalScrollUniversities = universities.map(uni => ({
    name: uni.name,
    logo: uni.logo,
    rating: 4.5,
    fees: "₹50,000+",
    duration: "1-3 Years",
    accreditation: "UGC Approved"
  }));

  // Words for FlipWords animation with blue color
  const flipWords = ["Online Course", "Learning Path", "Career Path", "Flexible Course"];

  const homePageStructuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "AVEDU",
    "url": "https://avedu.in",
    "logo": "https://avedu.in/lovable-uploads/d1a868cd-cbeb-4c57-9a43-86bb3e758613.png",
    "description": "Leading educational counselling platform for online and distance education in India",
    "educationalCredentialAwarded": [
      "Online MBA", "Online BBA", "Online BCA", "Online MCA", "Online BCOM", "Online BA", "Online MA"
    ],
    "offers": {
      "@type": "Offer",
      "category": "Education",
      "description": "Free educational counselling and course guidance"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Online Degree Programs",
      "itemListElement": [
        {
          "@type": "Course",
          "name": "Online MBA",
          "description": "Master of Business Administration online program",
          "provider": {
            "@type": "Organization",
            "name": "AVEDU"
          }
        },
        {
          "@type": "Course", 
          "name": "Online BBA",
          "description": "Bachelor of Business Administration online program",
          "provider": {
            "@type": "Organization",
            "name": "AVEDU"
          }
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      <SeoBreadcrumbs />
      
      {/* 1st Section - Hero with FlipWords */}
      <section className="relative bg-gradient-subtle py-4 sm:py-6 lg:py-8 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center">
            {/* Content */}
            <div className="space-y-4 sm:space-y-6">
              <div className="space-y-3">
                <Badge className="bg-primary-light text-primary font-semibold animate-fade-in-up">
                  <strong>#1 Educational Counselling Platform</strong>
                </Badge>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight animate-slide-in-left">
                  <strong>Find Your Perfect</strong>
                  <span className="bg-gradient-hero bg-clip-text text-transparent block">
                    <FlipWords words={flipWords} className="font-bold text-blue-600" />
                  </span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-lg animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                  Get expert counselling and choose from 100+ universities across India. 
                  Find the best UG & PG programs that fit your budget and career goals.
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6">
                <div className="text-center">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-1 text-primary text-lg sm:text-xl lg:text-2xl font-bold">
                    <Users className="h-4 w-4 sm:h-5 w-5 lg:h-6 w-6" />
                    50K+
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Students Guided</p>
                </div>
                <div className="text-center">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-1 text-primary text-lg sm:text-xl lg:text-2xl font-bold">
                    <GraduationCap className="h-4 w-4 sm:h-5 w-5 lg:h-6 w-6" />
                    100+
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Universities</p>
                </div>
                <div className="text-center">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-1 text-primary text-lg sm:text-xl lg:text-2xl font-bold">
                    <Star className="h-4 w-4 sm:h-5 w-5 lg:h-6 w-6 fill-current" />
                    4.8/5
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Student Rating</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:opacity-90 gap-2 shadow-primary text-sm sm:text-base"
                  onClick={() => document.getElementById('counselling')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Free Counselling
                  <ArrowRight className="h-4 w-4 sm:h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="gap-2 text-sm sm:text-base"
                  onClick={() => document.getElementById('universities')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Award className="h-4 w-4 sm:h-5 w-5" />
                  Explore Universities
                </Button>
              </div>

              <div className="text-xs sm:text-sm text-muted-foreground">
                ✅ 100% Free Counselling • ✅ Expert Career Guidance • ✅ Budget-Friendly Options
              </div>
            </div>

            {/* Hero Slideshow */}
            <div className="relative mt-6 lg:mt-0">
              <Slideshow />
              
              {/* Floating Stats Card */}
              <Card className="absolute -bottom-3 sm:-bottom-6 -left-3 sm:-left-6 p-3 sm:p-4 shadow-card bg-card/95 backdrop-blur">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="bg-success-light p-1.5 sm:p-2 rounded-full">
                    <Award className="h-4 w-4 sm:h-5 w-5 text-success" />
                  </div>
                  <div>
                    <p className="font-semibold text-xs sm:text-sm">UGC Approved</p>
                    <p className="text-xs text-muted-foreground">All Universities</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* 2nd Section - University Logos Marquee */}
      <UniversityLogosMarquee />

      {/* 3rd Section - Find Your Perfect Online Course with Course Categories and FlipWords */}
      <section id="programs" className="pt-16 pb-6 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Find Your Perfect <span className="text-blue-600"><FlipWords words={flipWords} className="font-bold text-blue-600" /></span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose from our comprehensive range of online degree programs designed to advance your career
            </p>
          </div>
          
          <CourseCategories titleOverrides={{
            mba: "Online MBA",
            btech: "Online BCA / MCA",
            bba: "Online BBA",
            bcom: "Online BCOM / MCOM",
            ba: "Online BA/MA"
          }} />
        </div>
      </section>

      {/* 4th Section - Universities Grid */}
      <UniversityGrid onOpenCounseling={openForm} />
      
      {/* 5th Section - Convocation Gallery */}
      <ConvocationSlider />
      
      {/* 6th Section - Career Assistance */}
      <CareerAssistance />

      {/* 7th Section - Counselling */}
      <CounsellingSection onOpenCounseling={openForm} />
      
      <RelatedContentSection />
      
      <EeatBlock />
      
      <Footer />
      <CounselingFormComponent />
    </div>
  );
};

export default Index;
