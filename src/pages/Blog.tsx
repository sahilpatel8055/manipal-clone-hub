import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Calendar, User, ArrowRight, BookOpen, GraduationCap, Users } from "lucide-react";
import NavigationHeader from "@/components/ui/navigation-header";
import Footer from "@/components/ui/footer";
import SEOHead from "@/components/ui/seo-head";
import { Link } from "react-router-dom";
import SeoBreadcrumbs from "@/components/ui/seo-breadcrumbs";
import RelatedContentSection from "@/components/ui/related-content-section";
import EeatBlock from "@/components/ui/eeat-block";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Blog articles for topical authority
  const blogPosts = [
    {
      id: 1,
      title: "Complete Guide to Online MBA Programs in India 2025",
      excerpt: "Everything you need to know about pursuing an online MBA from top universities like Manipal, Amity, and LPU. Compare fees, specializations, and career prospects.",
      category: "MBA Guide",
      readTime: "12 min read",
      publishDate: "2025-01-15",
      author: "Dr. Rajesh Kumar",
      slug: "complete-guide-online-mba-india-2025",
      featured: true,
      tags: ["Online MBA", "Career Growth", "University Comparison"]
    },
    {
      id: 2,
      title: "IGNOU vs Other Universities: Which is Best for Distance Learning?",
      excerpt: "Detailed comparison of IGNOU with private universities for distance education. Pros, cons, and which one suits your career goals.",
      category: "University Comparison",
      readTime: "8 min read",
      publishDate: "2025-01-12",
      author: "Priya Sharma",
      slug: "ignou-vs-private-universities-comparison",
      featured: true,
      tags: ["IGNOU", "Distance Learning", "University Comparison"]
    },
    {
      id: 3,
      title: "Online BCA to MCA: Complete Career Roadmap",
      excerpt: "Step-by-step guide to pursuing BCA and MCA online. Best universities, specializations, and tech career opportunities.",
      category: "Tech Education",
      readTime: "10 min read",
      publishDate: "2025-01-10",
      author: "Amit Verma",
      slug: "online-bca-mca-career-roadmap",
      featured: false,
      tags: ["BCA", "MCA", "Tech Career", "Programming"]
    },
    {
      id: 4,
      title: "UGC Recognition: How to Verify Your Online Degree",
      excerpt: "Complete guide to checking UGC recognition for online degrees. Avoid fake universities and ensure your degree is valid.",
      category: "Degree Verification",
      readTime: "6 min read",
      publishDate: "2025-01-08",
      author: "Dr. Meera Patel",
      slug: "ugc-recognition-verify-online-degree",
      featured: false,
      tags: ["UGC", "Degree Verification", "Accreditation"]
    },
    {
      id: 5,
      title: "Budget-Friendly Online Degrees: Quality Education Under ₹50,000",
      excerpt: "Discover affordable online degree options without compromising quality. Best value universities and financial aid options.",
      category: "Budget Education",
      readTime: "7 min read",
      publishDate: "2025-01-05",
      author: "Neha Singh",
      slug: "budget-friendly-online-degrees-under-50000",
      featured: false,
      tags: ["Budget Education", "Affordable Degrees", "Financial Aid"]
    },
    {
      id: 6,
      title: "Working Professional's Guide to Online MBA",
      excerpt: "How working professionals can successfully complete an online MBA. Time management, employer support, and career benefits.",
      category: "Working Professionals",
      readTime: "9 min read",
      publishDate: "2025-01-03",
      author: "Rohit Agarwal",
      slug: "working-professional-guide-online-mba",
      featured: false,
      tags: ["Working Professionals", "Online MBA", "Career Development"]
    }
  ];

  const categories = ["All", "MBA Guide", "University Comparison", "Tech Education", "Degree Verification", "Budget Education", "Working Professionals"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  const blogStructuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "AVEDU Education Blog",
    "description": "Expert insights on online education, distance learning, and career guidance",
    "url": "https://avedu.in/blog",
    "publisher": {
      "@type": "Organization",
      "name": "AVEDU",
      "logo": "https://avedu.in/lovable-uploads/d1a868cd-cbeb-4c57-9a43-86bb3e758613.png"
    },
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": post.publishDate,
      "author": {
        "@type": "Person",
        "name": post.author
      },
      "url": `https://avedu.in/blog/${post.slug}`
    }))
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="AVEDU Blog - Online Education Insights & Career Guidance"
        description="Expert insights on online education, distance learning, university comparisons, and career guidance. Stay updated with the latest trends in online degree programs."
        keywords="online education blog, distance learning tips, university comparison, career guidance, online degree insights, education articles"
        canonical="https://avedu.in/blog"
        structuredData={blogStructuredData}
      />
      <NavigationHeader />
      <SeoBreadcrumbs />
      
      {/* Hero Section */}
      <section className="bg-gradient-subtle py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Education <span className="text-primary">Insights</span> & Career Guidance
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Expert articles on online education, university comparisons, and career development to help you make informed decisions
            </p>
            
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(category => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className="cursor-pointer px-4 py-2"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {selectedCategory === "All" && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Featured Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map(post => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    </div>
                    <CardTitle className="text-xl hover:text-primary transition-colors">
                      <Link to={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="h-4 w-4" />
                        {post.author}
                        <Calendar className="h-4 w-4 ml-2" />
                        {new Date(post.publishDate).toLocaleDateString()}
                      </div>
                      <Link 
                        to={`/blog/${post.slug}`}
                        className="text-primary hover:text-primary/80 font-medium flex items-center gap-1"
                      >
                        Read More <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            {selectedCategory === "All" ? "Latest Articles" : `${selectedCategory} Articles`}
          </h2>
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No articles found</h3>
              <p className="text-muted-foreground">Try adjusting your search or category filter</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map(post => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs">{post.category}</Badge>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>
                    <CardTitle className="text-lg hover:text-primary transition-colors line-clamp-2">
                      <Link to={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 2).map(tag => (
                        <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.publishDate).toLocaleDateString()}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-light py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Need Personalized Guidance?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get free expert counselling to choose the perfect online degree program for your career goals
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/#counselling">
              <button className="btn-3d px-8 py-3 rounded-lg font-semibold">
                Get Free Counselling
              </button>
            </Link>
            <Link to="/universities">
              <button className="bg-background text-foreground px-8 py-3 rounded-lg font-semibold border border-border hover:bg-muted transition-colors">
                Explore Universities
              </button>
            </Link>
          </div>
        </div>
      </section>

      <RelatedContentSection />

      <EeatBlock />

      <Footer />
    </div>
  );
};

export default Blog;