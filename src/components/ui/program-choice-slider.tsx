import React, { useRef, useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";

interface ProgramChoiceSliderProps {
  universityType?: 'uttaranchal' | 'vgu' | 'sikkim' | 'default';
}

const ProgramChoiceSlider: React.FC<ProgramChoiceSliderProps> = ({ universityType = 'default' }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Card content with variations based on university
  const getCardContent = () => {
    const baseCards = [
      {
        heading: "Degree from top-ranked university",
        description: "Graduate with UGC-entitled &\nAICTE approved online degrees which\nare at par with on-campus degree\nprograms.",
      },
      {
        heading: getCard2Heading(),
        description: "Free access to 10K+ courses &\nprofessional certifications from top\nglobal universities.",
      },
      {
        heading: "Scholarships up to 30%",
        description: "Avail scholarship benefits under\nmerit, defense, Divyaang, alumni,\nand other categories.",
      },
      {
        heading: "Easy financing options",
        description: "Improved affordability with\nflexible financing and\nno-cost EMI options.",
      },
      {
        heading: "Alumni status",
        description: getCard5Description(),
      },
      {
        heading: "Weekly webinars with\nindustry leaders",
        description: "Stay updated on key industry\ntrends through our weekly webinars\nby industry experts.",
      },
      {
        heading: "100% placement assistance",
        description: "Boost your employability quotient\nby acquiring job-ready skills & preparing\nfor interviews to perform\nwell in placement drives.",
      },
      {
        heading: "Campus immersion",
        description: "Participate in exclusive in-person\nmeetups at campus with your\nbatchmates and faculty.",
      },
    ];

    return baseCards;
  };

  // Get card 2 heading based on university type
  function getCard2Heading() {
    switch (universityType) {
      case 'uttaranchal':
        return "Exclusive INFOSYS Certificates";
      case 'vgu':
        return "Exclusive LinkedIn certificates";
      default:
        return "Exclusive Add Certificates";
    }
  }

  // Get card 5 description based on university type
  function getCard5Description() {
    switch (universityType) {
      case 'sikkim':
        return "Become a part of a 2,00,000+ global\nalumni network.";
      default:
        return "Become a part of a 1,10,000+ global\nalumni network.";
    }
  }

  const cards = getCardContent();

  // Get icon colors for cards
  const getIconColor = (index: number) => {
    const colors = ['#ff8c00', '#4285f4', '#f4b400', '#0f9d58', '#9c27b0', '#ff5722', '#795548', '#607d8b'];
    return colors[index % colors.length];
  };

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
    <section className="py-12 md:py-16" style={{ backgroundColor: '#fff7f7' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Why Students Choose <span style={{ color: '#ff8c00' }}>Our Program</span>
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
              touchAction: 'pan-y pan-x'
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
                className="min-w-[90%] sm:min-w-[40%] md:min-w-[25%] lg:min-w-[20%] flex-shrink-0 bg-background shadow-lg p-6 border border-gray-200 flex flex-col items-start space-y-4 snap-center rounded-xl"
                style={{
                  height: '15rem',
                }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" 
                       style={{ backgroundColor: getIconColor(index) }}>
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold leading-tight mb-2">{card.heading}</h3>
                    <pre className="text-muted-foreground whitespace-pre-wrap text-sm leading-relaxed">{card.description}</pre>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {cards.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
                  index === activeIndex ? 'w-6' : 'w-2'
                }`}
                style={{
                  backgroundColor: index === activeIndex ? '#ff8c00' : '#d1d5db'
                }}
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

export default ProgramChoiceSlider;
