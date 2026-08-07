import { Link, useLocation } from "react-router-dom";
import { ArrowRight, BookOpen, Building, GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getInternalLinks } from "@/lib/seo/internal-links";
import { universityPath } from "@/data/seo/university-urls";

interface SEOInternalLinksProps {
  pageType: "university" | "course" | "blog" | "hub";
  universityName?: string;
  courseName?: string;
  relatedLinks?: {
    title: string;
    url: string;
    description?: string;
  }[];
}

const SEOInternalLinks: React.FC<SEOInternalLinksProps> = ({
  pageType,
  universityName,
  courseName,
  relatedLinks = []
}) => {
  const getDefaultLinks = () => {
    switch (pageType) {
      case "university":
        return [
          {
            title: "All Online Courses Directory",
            url: "/courses",
            description: "Compare programs across universities"
          },
          {
            title: "University Comparison Guide", 
            url: "/universities",
            description: "Find the best university for your goals"
          },
          {
            title: "Education Blog & Career Tips",
            url: "/blog", 
            description: "Expert advice on course selection"
          }
        ];
      case "course":
        return [
          {
            title: universityName ? `Back to ${universityName} Hub` : "University Hub",
            url: universityName ? universityPath(universityName.toLowerCase().replace(/\s+/g, '-')) : "/universities",
            description: "Explore all programs and university details"
          },
          {
            title: "Compare Similar Courses",
            url: "/courses",
            description: "Find the best program for your career"
          },
          {
            title: "Career Guidance Articles",
            url: "/blog",
            description: "Tips for course selection and career growth"
          }
        ];
      case "blog":
        return [
          {
            title: "Explore All Courses",
            url: "/courses", 
            description: "Find your perfect online degree program"
          },
          {
            title: "Top Universities",
            url: "/universities",
            description: "Compare accredited institutions"
          },
          {
            title: "Free Career Counselling",
            url: "/#counselling",
            description: "Get personalized guidance"
          }
        ];
      case "hub":
        return [
          {
            title: "University Profiles",
            url: "/universities",
            description: "Detailed guides for top institutions"
          },
          {
            title: "Course Comparisons", 
            url: "/courses",
            description: "Find the right program for you"
          },
          {
            title: "Expert Articles",
            url: "/blog",
            description: "Career tips and education insights"
          }
        ];
      default:
        return [];
    }
  };

  const location = useLocation();
  // Curated links win; otherwise the link engine returns 8-15 contextual
  // destinations for the current route, falling back to the static defaults.
  const engineLinks = getInternalLinks(location.pathname).map((l) => ({
    title: l.title,
    url: l.url,
    description: l.description,
  }));
  const links =
    relatedLinks.length > 0
      ? relatedLinks
      : engineLinks.length > 0
        ? engineLinks
        : getDefaultLinks();
  
  const getIcon = (pageType: string) => {
    switch (pageType) {
      case "university":
        return <Building className="w-5 h-5 text-primary" />;
      case "course":
        return <GraduationCap className="w-5 h-5 text-primary" />;
      case "blog":
        return <BookOpen className="w-5 h-5 text-primary" />;
      default:
        return <ArrowRight className="w-5 h-5 text-primary" />;
    }
  };

  return (
    <Card className="bg-gradient-to-r from-primary/5 via-primary/3 to-primary/5 border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          {getIcon(pageType)}
          Related Resources
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-3 gap-4">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.url}
              className="block p-4 bg-background/60 backdrop-blur-sm rounded-lg border border-primary/10 hover:border-primary/30 hover:bg-primary/5 transition-all group"
            >
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {link.title}
                </span>
              </div>
              {link.description && (
                <p className="text-sm text-muted-foreground">
                  {link.description}
                </p>
              )}
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SEOInternalLinks;