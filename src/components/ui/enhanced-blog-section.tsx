import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, BookOpen, GraduationCap, DollarSign } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishDate: string;
  internalLinks: Array<{
    text: string;
    url: string;
    type: 'university' | 'course' | 'general';
  }>;
  keywords: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: "manipal-mba-complete-guide",
    title: "Manipal University Online MBA: Complete Guide 2024",
    excerpt: "Comprehensive guide covering fees, specializations, placement records, and admission process for Manipal University Online MBA program.",
    category: "University Guides",
    readTime: "8 min read",
    publishDate: "2024-01-15",
    internalLinks: [
      { text: "Manipal University Details", url: "/universities/manipal-online", type: "university" },
      { text: "Online MBA Course", url: "/universities/manipal-online/courses/online-mba", type: "course" },
      { text: "Compare MBA Programs", url: "/courses/online-mba", type: "general" }
    ],
    keywords: ["Manipal MBA", "online MBA fees", "MBA placement", "distance MBA"]
  },
  {
    id: "online-vs-regular-degree",
    title: "Online vs Regular Degree: Which is Better in 2024?",
    excerpt: "Detailed comparison of online and regular degrees including recognition, career prospects, and employer perception.",
    category: "Career Guidance",
    readTime: "6 min read",
    publishDate: "2024-01-10",
    internalLinks: [
      { text: "UGC Approved Universities", url: "/universities", type: "general" },
      { text: "Online BBA Programs", url: "/courses/online-bba", type: "general" }
    ],
    keywords: ["online degree", "distance education", "career prospects", "degree comparison"]
  },
  {
    id: "amity-university-online-review",
    title: "Amity University Online: Detailed Review & Analysis",
    excerpt: "In-depth review of Amity University's online programs including course quality, faculty, and student experiences.",
    category: "University Reviews",
    readTime: "10 min read",
    publishDate: "2024-01-08",
    internalLinks: [
      { text: "Amity University Programs", url: "/universities/amity-online", type: "university" },
      { text: "Amity BCA Course", url: "/universities/amity-online/courses/online-bca", type: "course" }
    ],
    keywords: ["Amity online", "university review", "online programs", "student experience"]
  },
  {
    id: "best-online-universities-india",
    title: "Top 10 Best Online Universities in India 2024",
    excerpt: "Comprehensive ranking of India's best online universities based on accreditation, course quality, and placement records.",
    category: "Rankings",
    readTime: "12 min read",
    publishDate: "2024-01-05",
    internalLinks: [
      { text: "View All Universities", url: "/universities", type: "general" },
      { text: "Manipal University", url: "/universities/manipal-online", type: "university" },
      { text: "LPU Online", url: "/universities/lpu-online", type: "university" },
      { text: "VGU Programs", url: "/universities/vgu-online", type: "university" }
    ],
    keywords: ["best online universities", "UGC approved", "distance education ranking", "online degree"]
  },
  {
    id: "online-mba-placement-guide",
    title: "Online MBA Placement Guide: Salary, Companies & Tips",
    excerpt: "Complete guide to online MBA placements including average salary packages, top recruiting companies, and placement tips.",
    category: "Placement Guide",
    readTime: "9 min read",
    publishDate: "2024-01-03",
    internalLinks: [
      { text: "MBA Programs", url: "/courses/online-mba", type: "general" },
      { text: "Manipal MBA", url: "/universities/manipal-online/courses/online-mba", type: "course" },
      { text: "Amity MBA", url: "/universities/amity-online/courses/online-mba", type: "course" }
    ],
    keywords: ["MBA placement", "online MBA salary", "career opportunities", "job prospects"]
  },
  {
    id: "distance-education-myths",
    title: "5 Common Myths About Distance Education Debunked",
    excerpt: "Addressing common misconceptions about distance education and providing facts about online degree recognition and quality.",
    category: "Educational Insights",
    readTime: "7 min read",
    publishDate: "2024-01-01",
    internalLinks: [
      { text: "UGC Guidelines", url: "/legal/terms-conditions", type: "general" },
      { text: "Online Degree Benefits", url: "/courses/online-commerce", type: "general" }
    ],
    keywords: ["distance education myths", "online degree recognition", "UGC guidelines", "education quality"]
  }
];

const EnhancedBlogSection = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "University Guides":
        return <GraduationCap className="w-4 h-4" />;
      case "Career Guidance":
        return <BookOpen className="w-4 h-4" />;
      case "Placement Guide":
        return <DollarSign className="w-4 h-4" />;
      default:
        return <BookOpen className="w-4 h-4" />;
    }
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Latest Articles & Guides</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert insights and comprehensive guides to help you choose the best online education path
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {blogPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="flex items-center gap-1">
                    {getCategoryIcon(post.category)}
                    {post.category}
                  </Badge>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.publishDate).toLocaleDateString()}
                  </div>
                </div>
                <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </div>

                {/* Internal Links for SEO */}
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold text-foreground">Related:</h4>
                  <div className="flex flex-wrap gap-1">
                    {post.internalLinks.slice(0, 2).map((link, index) => (
                      <Link 
                        key={index} 
                        to={link.url}
                        className="text-xs bg-primary/10 text-primary px-2 py-1 rounded hover:bg-primary/20 transition-colors"
                      >
                        {link.text}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <Link 
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-primary/5 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Need Personalized Guidance?</h3>
            <p className="text-muted-foreground mb-6">
              Our education counselors can help you choose the right online program based on your career goals and budget.
            </p>
            <Link to="/universities" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
              Explore All Universities
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedBlogSection;