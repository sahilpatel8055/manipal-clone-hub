import React from "react";
import NavigationHeader from "@/components/ui/navigation-header";
import Footer from "@/components/ui/footer";
import { universities } from "@/components/ui/university-grid";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Users, GraduationCap, ExternalLink } from "lucide-react";
import universityPlaceholder from "@/assets/university-placeholder.jpg";
import { Link } from "react-router-dom";
import { useCounselingForm } from "@/hooks/use-counseling-form";
import SeoBreadcrumbs from "@/components/ui/seo-breadcrumbs";
import RelatedContentSection from "@/components/ui/related-content-section";
import EeatBlock from "@/components/ui/eeat-block";

const UniversityCard = ({ university, onOpenCounseling }: { university: any, onOpenCounseling?: () => void }) => {
  return (
    <Card className="h-full rounded-xl bg-[#f5f3ff] border border-gray-200 shadow-[inset_0_1px_3px_rgba(255,255,255,0.6),_0_2px_6px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_10px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 group">
      <CardHeader className="pb-0.5 sm:pb-1">
        <div className="aspect-video w-full bg-muted rounded-lg overflow-hidden mb-1 sm:mb-2">
          <img 
            src={university.image || universityPlaceholder}
            alt={university.name}
            className="w-full h-full object-contain p-0.5 sm:p-1 group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="space-y-0.5 sm:space-y-1">
          <h3 className="font-bold text-xs sm:text-sm lg:text-base leading-tight text-gray-900">{university.name}</h3>
          <div className="flex items-center gap-0.5 text-[0.65rem] text-muted-foreground">
            <MapPin className="h-2.5 w-2.5 sm:h-3 w-3" />
            {university.location}
          </div>
        </div>
      </CardHeader>

      <CardContent className="pb-0.5 sm:pb-1 space-y-1 sm:space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-0.5">
            <Star className="h-2.5 w-2.5 sm:h-3 w-3 fill-primary text-primary" />
            <span className="font-medium text-[0.65rem] sm:text-xs">{university.rating}</span>
          </div>
          <div className="flex items-center gap-0.5 text-[0.65rem] text-muted-foreground">
            <Users className="h-2.5 w-2.5 sm:h-3 w-3" />
            <span className="text-[0.65rem]">{university.students}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-1">
          <div className="text-center p-1 sm:p-1.5 bg-indigo-100 rounded-lg">
            <div className="font-semibold text-indigo-700 text-xs sm:text-sm">{university.ugPrograms}</div>
            <div className="text-[0.65rem] text-muted-foreground">UG Courses</div>
          </div>
          <div className="text-center p-1 sm:p-1.5 bg-indigo-100 rounded-lg">
            <div className="font-semibold text-indigo-700 text-xs sm:text-sm">{university.pgPrograms}</div>
            <div className="text-[0.65rem] text-muted-foreground">PG Courses</div>
          </div>
        </div>

        <div className="text-center p-1.5 sm:p-2 bg-green-100 rounded-lg">
          <div className="font-semibold text-green-700 text-xs sm:text-sm">{university.fees}</div>
          <div className="text-[0.65rem] text-muted-foreground">Starting Fees</div>
        </div>

        <div className="flex flex-wrap gap-0.5">
          {university.approvals.map((approval: string) => (
            <Badge key={approval} variant="secondary" className="text-[0.6rem] px-1 py-0.5">
              {approval}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-1.5 w-full">
          <Link to={`/university/${university.id}`}>
            <Button variant="outline" size="sm" className="gap-0.5 w-full text-[0.65rem] py-1 sm:py-1.5 h-auto">
              <GraduationCap className="h-2.5 w-2.5 sm:h-3 w-3" />
              View Courses
            </Button>
          </Link>
          <Button size="sm" className="gap-0.5 w-full text-[0.65rem] py-1 sm:py-1.5 h-auto" onClick={onOpenCounseling}>
            <ExternalLink className="h-2.5 w-2.5 sm:h-3 w-3" />
            Apply Now
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

const Universities = () => {
  const { openForm, CounselingFormComponent } = useCounselingForm();

  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      <SeoBreadcrumbs />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Top Universities in India
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Explore over 100+ UGC-approved universities offering online degree programs. 
              Find the perfect university that matches your career goals and budget.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-[#0052CC] text-white text-base px-4 py-2">
                UGC Approved
              </Badge>
              <Badge className="bg-[#0052CC] text-white text-base px-4 py-2">
                AICTE Recognized
              </Badge>
              <Badge className="bg-[#0052CC] text-white text-base px-4 py-2">
                Industry Relevant
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Universities Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
{universities.map((university) => (
              <UniversityCard key={university.id} university={university} onOpenCounseling={openForm} />
            ))}
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

export default Universities;