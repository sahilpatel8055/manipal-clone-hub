import React, { useRef, useState, useEffect } from 'react';
// Remove icon imports from lucide-react
import { Card } from "@/components/ui/card";

// Import your custom icon images
import degreeIcon from '@/assets/icon/1.jpg';
import courseraIcon from '@/assets/icon/c.jpg';
import scholarshipIcon from '@/assets/icon/s.jpg';
import financeIcon from '@/assets/icon/s1.jpg';
import alumniIcon from '@/assets/icon/3.jpg';
import webinarIcon from '@/assets/icon/2.jpg';
import placementIcon from '@/assets/icon/s.jpg'; // Using the same path as scholarship
import campusIcon from '@/assets/icon/3.jpg'; // Using the same path as alumni

const cards = [
  {
    icon: <img src={degreeIcon} alt="Degree from top university" className="w-16 h-8" />,
    heading: "Degree from top university",
    description: "Graduate with UGC-entitled &\nAICTE approved online degrees which\nare at part with on-campus degree\nprograms.",
  },
  {
    icon: <img src={courseraIcon} alt="Exclusive Coursera access" className="w-16 h-8" />,
    heading: "Exclusive Coursera access",
    description: "Free access to 10K+ courses &\nprofessional certifications from top\nglobal universities.",
  },
  {
    icon: <img src={scholarshipIcon} alt="Scholarships up to 30%" className="w-16 h-8" />,
    heading: "Scholarships up to 30%",
    description: "Avail scholarship benefits under\nmerit,defense, Divyaang, alumni,\nand other categories.",
  },
  {
    icon: <img src={financeIcon} alt="Easy financing options" className="w-16 h-8" />,
    heading: "Easy financing options",
    description: "Improved affordability with\nflexible financing and\nno-cost EMI options.",
  },
  {
    icon: <img src={alumniIcon} alt="Manipal alumni status" className="w-16 h-8" />,
    heading: "Manipal alumni status",
    description: "Become a part of a 2,00,000+ global\nManipal alumni network.",
  },
  {
    icon: <img src={webinarIcon} alt="Weekly webinars with industry leaders" className="w-16 h-8" />,
    heading: "Weekly webinars with\nindustry leaders",
    description: "Stay updated on key industry\ntrends through our weekly webinars\nby industry experts.",
  },
  {
    icon: <img src={placementIcon} alt="100% placement assistance" className="w-16 h-8" />,
    heading: "100% placement assistance",
    description: "Boost your employability quotient\nby acquiring job-ready skills & preparing\nfor interviews to perform\nwell in placement drives.",
  },
  {
    icon: <img src={campusIcon} alt="Campus immersion" className="w-16 h-8" />,
    heading: "Campus immersion",
    description: "Participate in exclusive in-person\nmeetups at campus with your\nbatchmates and faculty.",
  },
];

const ProgramHighlightsSlider = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let scrollInterval: ReturnType<typeof setTimeout> | null = null;
    let scrollTimeout: ReturnType<typeof setTimeout> | null = null;
    const scrollContainer = scrollContainerRef.current;

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (scrollContainer) {
          const cardWidth = scrollContainer.querySelector('.snap-center')?.clientWidth || 0;
          const isAtEnd = Math.ceil(scrollContainer.scrollLeft) + scrollContainer.clientWidth >= scrollContainer.scrollWidth;
          
          if (isAtEnd) {
            scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            scrollContainer.scrollBy({ left: cardWidth + 24, behavior: 'smooth' });
          }
        }
      }, 1000);
    };

    const handleScroll = () => {
      if (scrollContainer) {
        if (scrollInterval) clearInterval(scrollInterval);
        
        if (scrollTimeout) clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          startAutoScroll();
        }, 5000);

        const scrollLeft = scrollContainer.scrollLeft;
        const cardWidth = scrollContainer.querySelector('.snap-center')?.clientWidth || 0;
        const newIndex = Math.round(scrollLeft / (cardWidth + 24));
        setActiveIndex(newIndex);
      }
    };
    
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      startAutoScroll();
    }

    return () => {
      if (scrollInterval) clearInterval(scrollInterval);
      if (scrollTimeout) clearTimeout(scrollTimeout);
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <section className="bg-[#fff7f7] py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Why Students Choose <span className="text-orange-500">Our Program</span>
          </h2>
        </div>

        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-scroll snap-x snap-mandatory gap-6 pb-4 cursor-grab"
            style={{
              WebkitOverflowScrolling: 'touch',
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
              overscrollBehaviorX: 'contain',
              userSelect: 'none',
              touchAction: 'pan-x'
            }}
          >
            <style>
              {`
              .flex::-webkit-scrollbar {
                display: none;
              }
              `}
            </style>
            
            {cards.map((card, index) => (
              <Card
                key={index}
                className="min-w-[90%] sm:min-w-[40%] md:min-w-[25%] lg:min-w-[20%] flex-shrink-0 bg-background shadow-lg p-3.5 border-2 border-gray-200 flex flex-col items-start space-y-4 snap-center rounded-xl"
                style={{
                  height: '15rem',
                }}
              >
                <div className="p-4 bg-primary-light rounded-full w-12 h-12 flex items-center justify-center overflow-hidden">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold">{card.heading}</h3>
                <pre className="text-muted-foreground whitespace-pre-wrap text-sm">{card.description}</pre>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {cards.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
                  index === activeIndex ? 'bg-orange-500 w-6' : 'bg-gray-300 w-2'
                }`}
                onClick={() => {
                  if (scrollContainerRef.current) {
                    const cardWidth = scrollContainerRef.current.querySelector('.snap-center')?.clientWidth || 0;
                    scrollContainerRef.current.scrollTo({
                      left: index * (cardWidth + 24),
                      behavior: 'smooth',
                    });
                  }
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramHighlightsSlider;
