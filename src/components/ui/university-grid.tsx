import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Users, GraduationCap, ExternalLink } from "lucide-react";
import universityPlaceholder from "@/assets/university-placeholder.jpg";
import { Link } from "react-router-dom";
import ignouLogo from "@/assets/ignou-logo.png";
import manipalLogo from "@/assets/manipal-logo.png";
import uttaranchalLogo from "@/assets/uttaranchal-logo.png";
import vguLogo from "@/assets/vgu-logo.png";
import smuLogo from "@/assets/smu-logo.jpg";
import amityLogo from "@/assets/amity-logo.jpg";
import lpuLogo from "@/assets/lpu-logo.jpg";
import mangalayatanLogo from "@/assets/mangalyatan-logo.png";
import duSolLogo from "@/assets/uni_logo/DU_SOL.png";
import { universityPath } from "@/data/seo/university-urls";

interface University {
  id: string;
  name: string;
  location: string;
  rating: number;
  students: string;
  ugPrograms: number;
  pgPrograms: number;
  fees: string;
  approvals: string[];
  image?: string;
}

export const universities: University[] = [
  {
    id: "ignou",
    name: "IGNOU",
    location: "New Delhi, India",
    rating: 4.8,
    students: "4M+",
    ugPrograms: 120,
    pgPrograms: 150,
    fees: "₹7,200+/year",
    approvals: ["UGC", "AICTE", "NAAC A++"],
    image: ignouLogo,
  },
  {
    id: "du-sol",
    name: "DU SOL (School of Open Learning)",
    location: "New Delhi, India",
    rating: 4.6,
    students: "500K+",
    ugPrograms: 20,
    pgPrograms: 15,
    fees: "₹6,000+/year",
    approvals: ["UGC", "AICTE", "NAAC A+"],
    image: duSolLogo,
  },
  {
    id: "manipal",
    name: "Manipal University Online",
    location: "Jaipur, India",
    rating: 4.6,
    students: "50K+",
    ugPrograms: 8,
    pgPrograms: 12,
    fees: "₹75,000+/year",
    approvals: ["UGC", "AICTE", "NAAC A+"],
    image: manipalLogo,
  },
  {
    id: "smu",
    name: "Sikkim Manipal University",
    location: "Gangtok, SK",
    rating: 4.4,
    students: "45K+",
    ugPrograms: 20,
    pgPrograms: 18,
    fees: "₹40,000/year",
    approvals: ["UGC", "AICTE", "NAAC A"],
    image: smuLogo,
  },
  {
    id: "uttaranchal",
    name: "Uttaranchal University Online",
    location: "Dehradun, India",
    rating: 4.5,
    students: "25K+",
    ugPrograms: 15,
    pgPrograms: 18,
    fees: "₹45,000+/year",
    approvals: ["UGC", "AICTE", "NAAC A+"],
    image: uttaranchalLogo,
  },
  {
    id: "vgu",
    name: "Vivekananda Global University",
    location: "Jaipur, India",
    rating: 4.4,
    students: "15K+",
    ugPrograms: 12,
    pgPrograms: 15,
    fees: "₹40,000+/year",
    approvals: ["UGC", "AICTE", "AIU"],
    image: vguLogo,
  },
  {
    id: "amity",
    name: "Amity University Online",
    location: "Noida, UP",
    rating: 4.3,
    students: "30K+",
    ugPrograms: 25,
    pgPrograms: 20,
    fees: "₹60,000/year",
    approvals: ["UGC", "AICTE", "NAAC A+"],
    image: amityLogo,
  },
  {
    id: "lpu",
    name: "Lovely Professional University",
    location: "Phagwara, PB",
    rating: 4.4,
    students: "28K+",
    ugPrograms: 30,
    pgPrograms: 22,
    fees: "₹55,000/year",
    approvals: ["UGC", "AICTE", "NAAC A++"],
    image: lpuLogo,
  },
  {
    id: "mangalyatan",
    name: "Mangalyatan University Online",
    location: "Aligarh, UP",
    rating: 4.1,
    students: "20K+",
    ugPrograms: 18,
    pgPrograms: 15,
    fees: "₹35,000/year",
    approvals: ["UGC", "AICTE", "NAAC A"],
    image: mangalayatanLogo,
  },
  {
    id: "jain",
    name: "Jain University Online",
    location: "Bangalore, KA",
    rating: 4.5,
    students: "35K+",
    ugPrograms: 22,
    pgPrograms: 24,
    fees: "₹50,000/year",
    approvals: ["UGC", "AICTE", "NAAC A++"],
    image: "/src/assets/uni_logo/jain.png",
  },
  {
    id: "9",
    name: "Chandigarh University Online",
    location: "Chandigarh, CH",
    rating: 4.2,
    students: "20K+",
    ugPrograms: 18,
    pgPrograms: 16,
    fees: "₹48,000/year",
    approvals: ["UGC", "AICTE", "NAAC A+"],
    image: "/src/assets/uni_logo/cu.png",
  },
  {
    id: "10",
    name: "DY Patil University Online",
    location: "Mumbai, MH",
    rating: 4.3,
    students: "22K+",
    ugPrograms: 20,
    pgPrograms: 18,
    fees: "₹65,000/year",
    approvals: ["UGC", "AICTE", "NAAC A"],
    image: "/src/assets/uni_logo/dpu.png",
  },
  {
    id: "11",
    name: "NMIMS Global Access",
    location: "Mumbai, MH",
    rating: 4.5,
    students: "18K+",
    ugPrograms: 12,
    pgPrograms: 15,
    fees: "₹70,000/year",
    approvals: ["UGC", "AICTE", "NAAC A++"],
    image: "/src/assets/uni_logo/nmims.png",
  },
  {
    id: "12",
    name: "Symbiosis Centre for Distance Learning",
    location: "Pune, MH",
    rating: 4.4,
    students: "25K+",
    ugPrograms: 16,
    pgPrograms: 20,
    fees: "₹68,000/year",
    approvals: ["UGC", "AICTE", "NAAC A+"],
    image: "/src/assets/uni_logo/symb.png",
  },
  {
    id: "13",
    name: "Bharti Vidyapeeth University",
    location: "Pune, MH",
    rating: 4.2,
    students: "15K+",
    ugPrograms: 14,
    pgPrograms: 12,
    fees: "₹52,000/year",
    approvals: ["UGC", "AICTE", "NAAC A"],
    image: "/src/assets/uni_logo/bharti.png",
  },
  {
    id: "14",
    name: "GNA University Online",
    location: "Phagwara, PB",
    rating: 4.1,
    students: "12K+",
    ugPrograms: 15,
    pgPrograms: 18,
    fees: "₹42,000/year",
    approvals: ["UGC", "AICTE", "NAAC A"],
    image: "/src/assets/uni_logo/gna.png",
  },
  {
    id: "15",
    name: "Shoolini University Online",
    location: "Solan, HP",
    rating: 4.3,
    students: "16K+",
    ugPrograms: 18,
    pgPrograms: 14,
    fees: "₹58,000/year",
    approvals: ["UGC", "AICTE", "NAAC A+"],
  },
  {
    id: "16",
    name: "UPES Online",
    location: "Dehradun, UK",
    rating: 4.4,
    students: "24K+",
    ugPrograms: 22,
    pgPrograms: 25,
    fees: "₹72,000/year",
    approvals: ["UGC", "AICTE", "NAAC A"],
    image: "/src/assets/uni_logo/upes.png",
  },
  {
    id: "17",
    name: "Chitkara University Online",
    location: "Chandigarh, CH",
    rating: 4.2,
    students: "14K+",
    ugPrograms: 16,
    pgPrograms: 18,
    fees: "₹50,000/year",
    approvals: ["UGC", "AICTE", "NAAC A+"],
  },
  {
    id: "18",
    name: "Galgotias University Online",
    location: "Greater Noida, UP",
    rating: 4.1,
    students: "13K+",
    ugPrograms: 20,
    pgPrograms: 16,
    fees: "₹46,000/year",
    approvals: ["UGC", "AICTE", "NAAC A"],
  },
  {
    id: "19",
    name: "SRM University Online",
    location: "Chennai, TN",
    rating: 4.3,
    students: "19K+",
    ugPrograms: 24,
    pgPrograms: 20,
    fees: "₹62,000/year",
    approvals: ["UGC", "AICTE", "NAAC A+"],
  },
  {
    id: "20",
    name: "VIT University Online",
    location: "Vellore, TN",
    rating: 4.5,
    students: "21K+",
    ugPrograms: 18,
    pgPrograms: 22,
    fees: "₹75,000/year",
    approvals: ["UGC", "AICTE", "NAAC A++"],
  },
];

const UniversityCard = ({ university, onOpenCounseling }: { university: University; onOpenCounseling?: () => void }) => {
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
          {university.approvals.map((approval) => (
            <Badge key={approval} variant="secondary" className="text-[0.6rem] px-1 py-0.5">
              {approval}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-1.5 w-full">
          <Link to={universityPath(university.id)}>
            <Button variant="outline" size="sm" className="gap-0.5 w-full text-[0.65rem] py-1 sm:py-1.5 h-auto bg-primary text-primary-foreground hover:bg-primary/90">
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

interface UniversityGridProps {
  onOpenCounseling?: () => void;
}

const UniversityGrid: React.FC<UniversityGridProps> = ({ onOpenCounseling }) => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white border border-gray-200/50 rounded-lg mx-4 my-8" id="universities">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <Badge className="bg-primary-light text-primary mb-4">
            <strong>Top Universities</strong>
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
            <strong>Explore Over 100+ Universities in India</strong>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from India's top universities offering UGC-approved online degrees. 
            All universities are carefully selected and verified by our experts.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-12">
          {universities.filter(u => u.id !== 'mangalyatan').slice(0, 8).map((university) => (
            <UniversityCard key={university.id} university={university} onOpenCounseling={onOpenCounseling} />
          ))}
        </div>

        <div className="text-center">
          <Link to="/universities">
            <Button size="lg" variant="outline" className="gap-2">
              View All Universities
              <ExternalLink className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UniversityGrid;
