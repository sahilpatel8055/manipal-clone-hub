
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface University {
  name: string;
  logo: string;
  rating: number;
  fees: string;
  duration: string;
  accreditation: string;
}

interface HorizontalUniversityScrollProps {
  universities: University[];
  courseType?: string;
}

const HorizontalUniversityScroll = ({ universities = [], courseType = "" }: HorizontalUniversityScrollProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
      const newScrollLeft = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const getUniversityLink = (universityName: string) => {
    if (universityName.toLowerCase().includes('manipal')) return '/universities/manipal-online';
    if (universityName.toLowerCase().includes('uttaranchal')) return '/universities/uttaranchal-online';
    if (universityName.toLowerCase().includes('vivekananda')) return '/universities/vgu-online';
    if (universityName.toLowerCase().includes('sikkim')) return '/universities/sikkim-manipal-online';
    if (universityName.toLowerCase().includes('amity')) return '/universities/amity-online';
    if (universityName.toLowerCase().includes('lovely') || universityName.toLowerCase().includes('lpu')) return '/universities/lpu-online';
    if (universityName.toLowerCase().includes('mangalyatan')) return '/universities/mangalayatan-online';
    if (universityName.toLowerCase().includes('du sol') || universityName.toLowerCase().includes('school of open learning')) return '/universities/du-sol-online';
    return '/universities/ignou-online';
  };

  // Handle empty universities array
  if (!universities || universities.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">No universities available to display.</p>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Navigation Buttons */}
      <div className="flex justify-end gap-2 mb-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => scroll('left')}
          disabled={!canScrollLeft}
          className={cn("h-8 w-8 p-0", !canScrollLeft && "opacity-50")}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => scroll('right')}
          disabled={!canScrollRight}
          className={cn("h-8 w-8 p-0", !canScrollRight && "opacity-50")}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Scrollable Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onScroll={checkScrollButtons}
      >
        {universities.map((university, index) => (
          <Card
            key={index}
            className="flex-shrink-0 w-64 sm:w-72 hover:shadow-lg transition-shadow bg-white border border-gray-200/60"
          >
            <CardHeader className="text-center pb-3">
              <img
                src={university.logo}
                alt={university.name}
                className="h-16 w-16 object-contain mx-auto mb-3"
              />
              <h3 className="font-bold text-lg leading-tight">
                {university.name}
              </h3>
              <div className="flex items-center justify-center gap-1 mt-2">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{university.rating}</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-center">
                <div className="font-bold text-[#0052CC] text-lg">
                  {university.fees}
                </div>
                <div className="text-sm text-gray-600">Annual Fees</div>
              </div>
              <div className="text-center">
                <div className="font-medium">{university.duration}</div>
                <div className="text-sm text-gray-600">Program Duration</div>
              </div>
              <div className="text-center">
                <Badge variant="secondary" className="text-xs">
                  {university.accreditation}
                </Badge>
              </div>
              <Link to={getUniversityLink(university.name)}>
                <Button className="w-full bg-[#0052CC] hover:bg-[#003d99]">
                  View Details
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HorizontalUniversityScroll;
