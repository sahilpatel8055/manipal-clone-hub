import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import EmbeddedCounselingForm from "@/components/ui/embedded-counseling-form";
import { useCounselingForm } from "@/hooks/use-counseling-form";
import {
  Star,
  MapPin,
  Users,
  GraduationCap,
  Award,
  DollarSign,
  BookOpen,
  Clock,
  Check,
} from "lucide-react";
import NavigationHeader from "@/components/ui/navigation-header";
import Footer from "@/components/ui/footer";
import UniversitySlideshow from "@/components/ui/university-slideshow";
import duSolLogo from "@/assets/uni_logo/DU_SOL.png";
import duSolDegree from "@/assets/DU sol sample degree.jpg";
import dusolCampus from "@/assets/campus/dusol.jpg";

import { Link } from 'react-router-dom';
import courseData from '../../data/courseData.json';

import ugcIcon from "@/assets/icons/ugc-icon.png";
import aicteIcon from "@/assets/icons/aicte-icon.png";
import wesIcon from "@/assets/icons/wes-icon.png";
import naacIcon from "@/assets/icons/naac-icon.png";
import nirfIcon from "@/assets/icons/nirf-icon.png";
import aiuIcon from "@/assets/icons/aiu-icon.png";

import mbaImg from "@/assets/course/mba.jpg";
import bbaImg from "@/assets/course/bba.jpg";
import mcaImg from "@/assets/course/mca.jpg";
import bcaImg from "@/assets/course/bca.jpg";
import baImg from "@/assets/course/ba.jpg";
import bcomImg from "@/assets/course/bcom.jpg";
import SectionNavigation from "@/components/ui/section-navigation";
import SeoBreadcrumbs from "@/components/ui/seo-breadcrumbs";
import RelatedContentSection from "@/components/ui/related-content-section";
import EeatBlock from "@/components/ui/eeat-block";

const DUSOL = () => {
  const { openForm, CounselingFormComponent } = useCounselingForm();
  
  const sections = [
    { id: 'top', label: 'Overview' },
    { id: 'about', label: 'About' },
    { id: 'programs', label: 'Programs' },
    { id: 'approvals', label: 'Approvals' },
    { id: 'courses', label: 'Courses' },
    { id: 'features', label: 'Features' },
    { id: 'apply', label: 'Apply' }
  ];

  const features = [
    "Flexible online and distance programs",
    "Affordable fees with quality education",
    "Strong alumni network and support",
    "Recognized degrees with UGC approval",
  ];

  const approvals = [
    { name: "UGC-DEB", description: "University Grants Commission - Distance Education Bureau", icon: ugcIcon },
    { name: "AICTE", description: "All India Council for Technical Education", icon: aicteIcon },
    { name: "WES", description: "World Education Services", icon: wesIcon },
    { name: "AIU", description: "Association of Indian Universities", icon: aiuIcon },
    { name: "NAAC A+", description: "National Assessment and Accreditation Council", icon: naacIcon },
    { name: "NIRF", description: "Ranked in University Category", icon: nirfIcon },
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      <SeoBreadcrumbs />

      <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-6" id="top">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <UniversitySlideshow imageSrc={dusolCampus} imageAlt="DU SOL Campus" />
          </div>

          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                <img src={duSolLogo} alt="DU SOL Logo" className="w-20 h-20 rounded-lg" />
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-2">DU SOL</h1>
                  <p className="text-lg text-muted-foreground">School of Open Learning, University of Delhi</p>
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-6 mb-8 text-sm">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>New Delhi, India</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4 text-primary" />
                  <span>500K+ Students</span>
                </div>
                <div className="flex items-center gap-1">
                  <GraduationCap className="w-4 h-4 text-primary" />
                  <span>UG & PG Programs</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg" onClick={openForm}>
                  Apply Now
                </Button>
                <Button variant="outline" className="px-8 py-3 text-lg" onClick={openForm}>
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
            <h2 className="text-3xl font-bold text-center mb-8">About DU SOL</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Delhi University’s School of Open Learning (DU SOL) is a trusted public institution offering flexible online and distance learning programs with the academic legacy of the University of Delhi.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                DU SOL provides UGC-DEB recognized degrees designed for working professionals and fresh graduates, with affordable fees, updated curricula, and robust student support.
              </p>
              <p className="text-lg leading-relaxed">
                With a strong alumni network and industry-oriented learning, DU SOL enables learners to pursue UG and PG programs without compromising on quality or credibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Degree Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-foreground mb-4">Sample Degree</h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-prose">
                DU SOL degrees are recognized by UGC-DEB and accepted for government and private jobs as well as higher education in India and abroad.
              </p>
              <ul className="space-y-4 text-left mx-auto md:mx-0 max-w-sm">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">UGC-DEB Recognized</p>
                    <p className="text-sm text-muted-foreground">Valid for jobs and higher studies across India.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Digital Verification Ready</p>
                    <p className="text-sm text-muted-foreground">Supports online verification with transcripts.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Officially Stamped</p>
                    <p className="text-sm text-muted-foreground">Signed by University authorities with seal.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex-1 max-w-lg mx-auto md:max-w-none">
              <div className="relative p-4 rounded-xl shadow-2xl bg-white transition-transform duration-300 hover:scale-105">
                <img src={duSolDegree} alt="Sample DU SOL Degree" className="w-full h-auto object-contain rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

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

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {Object.entries(courseData).map(([courseId, course]) => {
              let courseImage = baImg;
              if (courseId.includes('mba')) courseImage = mbaImg;
              else if (courseId.includes('bba')) courseImage = bbaImg;
              else if (courseId.includes('mca')) courseImage = mcaImg;
              else if (courseId.includes('bca')) courseImage = bcaImg;
              else if (courseId.includes('bcom')) courseImage = bcomImg;
              else if (courseId.includes('ba') || courseId.includes('ma')) courseImage = baImg;

              return (
                <Card key={courseId} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-center mb-4">
                      <img src={courseImage} alt={course.name} className="w-16 h-16 object-cover rounded-lg" />
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
                    <Link to={`/university/du-sol/${courseId}`}>
                      <Button className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90" variant="outline">
                        View Details
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
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

export default DUSOL;
