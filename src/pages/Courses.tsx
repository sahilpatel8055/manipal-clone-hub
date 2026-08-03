import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import NavigationHeader from "@/components/ui/navigation-header";
import Footer from "@/components/ui/footer";
import SEOHead from "@/components/ui/seo-head";
import { Search, Clock, Award, TrendingUp, Users, Star, ArrowRight, BookOpen, DollarSign } from "lucide-react";
import EmbeddedCounselingForm from "@/components/ui/embedded-counseling-form";

// Course hub images
import mbaImg from "@/assets/course/mba.jpg";
import bbaImg from "@/assets/course/bba.jpg";
import mcaImg from "@/assets/course/mca.jpg";
import bcaImg from "@/assets/course/bca.jpg";
import baImg from "@/assets/course/ba.jpg";
import bcomImg from "@/assets/course/bcom.jpg";
import SeoBreadcrumbs from "@/components/ui/seo-breadcrumbs";
import RelatedContentSection from "@/components/ui/related-content-section";
import EeatBlock from "@/components/ui/eeat-block";

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("All");

  // Main course categories with SEO-optimized data
  const mainCourses = [
    {
      id: "mba",
      name: "Online MBA",
      level: "PG",
      duration: "2 Years",
      image: mbaImg,
      startingFee: "₹1,80,000",
      description: "Master of Business Administration - Transform your career with strategic business knowledge",
      universities: ["Manipal", "Amity", "LPU", "VGU", "Uttaranchal"],
      specializations: ["Finance", "Marketing", "HR", "Operations", "IT"],
      avgPackage: "₹8-15 LPA",
      topRecruiters: ["TCS", "Infosys", "Wipro", "Accenture"],
      keywords: "online MBA degree, distance MBA, MBA online courses, best MBA colleges"
    },
    {
      id: "bba", 
      name: "Online BBA",
      level: "UG",
      duration: "3 Years",
      image: bbaImg,
      startingFee: "₹1,20,000",
      description: "Bachelor of Business Administration - Build strong business fundamentals for management careers",
      universities: ["Manipal", "Amity", "LPU", "IGNOU"],
      specializations: ["Marketing", "Finance", "International Business", "Entrepreneurship"],
      avgPackage: "₹4-8 LPA",
      topRecruiters: ["ICICI", "HDFC", "Flipkart", "Amazon"],
      keywords: "online BBA degree, distance BBA, BBA online courses, best BBA colleges"
    },
    {
      id: "mca",
      name: "Online MCA", 
      level: "PG",
      duration: "2 Years",
      image: mcaImg,
      startingFee: "₹1,40,000",
      description: "Master of Computer Applications - Advanced programming and software development skills",
      universities: ["Manipal", "IGNOU", "VGU", "Uttaranchal"],
      specializations: ["Software Development", "Data Science", "Cybersecurity", "AI/ML"],
      avgPackage: "₹6-12 LPA",
      topRecruiters: ["Google", "Microsoft", "Amazon", "IBM"],
      keywords: "online MCA degree, distance MCA, MCA online courses, computer applications"
    },
    {
      id: "bca",
      name: "Online BCA",
      level: "UG", 
      duration: "3 Years",
      image: bcaImg,
      startingFee: "₹90,000",
      description: "Bachelor of Computer Applications - Foundation in programming and computer science",
      universities: ["Manipal", "IGNOU", "LPU", "Amity"],
      specializations: ["Web Development", "Mobile Development", "Database Management", "Graphics Design"],
      avgPackage: "₹3-6 LPA",
      topRecruiters: ["TCS", "Tech Mahindra", "Cognizant", "HCL"],
      keywords: "online BCA degree, distance BCA, BCA online courses, computer applications bachelor"
    },
    {
      id: "ba",
      name: "Online BA",
      level: "UG",
      duration: "3 Years", 
      image: baImg,
      startingFee: "₹45,000",
      description: "Bachelor of Arts - Liberal arts education with diverse specialization options",
      universities: ["IGNOU", "DU SOL", "Manipal", "Amity"],
      specializations: ["English", "Psychology", "Political Science", "Economics"],
      avgPackage: "₹2-5 LPA",
      topRecruiters: ["Government Sector", "NGOs", "Media Houses", "Educational Institutions"],
      keywords: "online BA degree, distance BA, BA online courses, bachelor of arts"
    },
    {
      id: "bcom",
      name: "Online B.Com",
      level: "UG",
      duration: "3 Years",
      image: bcomImg,
      startingFee: "₹40,000", 
      description: "Bachelor of Commerce - Comprehensive understanding of commerce, accounting, and business",
      universities: ["IGNOU", "DU SOL", "Manipal", "Amity"],
      specializations: ["Accounting", "Banking", "Taxation", "Finance"],
      avgPackage: "₹3-6 LPA",
      topRecruiters: ["Banks", "Financial Institutions", "Accounting Firms", "Corporates"],
      keywords: "online B.Com degree, distance B.Com, B.Com online courses, bachelor of commerce"
    },
    {
      id: "ma",
      name: "Online MA",
      level: "PG",
      duration: "2 Years",
      image: baImg,
      startingFee: "₹50,000",
      description: "Master of Arts - Advanced studies in humanities and social sciences with research focus",
      universities: ["IGNOU", "DU SOL", "Manipal", "Uttaranchal"],
      specializations: ["English", "Psychology", "Political Science", "History", "Sociology"],
      avgPackage: "₹3-7 LPA",
      topRecruiters: ["Government Sector", "Education Institutions", "NGOs", "Media Houses"],
      keywords: "online MA degree, distance MA, MA online courses, master of arts"
    },
    {
      id: "mcom",
      name: "Online M.Com",
      level: "PG", 
      duration: "2 Years",
      image: bcomImg,
      startingFee: "₹60,000",
      description: "Master of Commerce - Advanced business and commerce studies with specialization in finance and accounting",
      universities: ["IGNOU", "DU SOL", "Manipal", "Uttaranchal"],
      specializations: ["Accounting", "Finance", "Taxation", "Banking", "International Business"],
      avgPackage: "₹4-8 LPA",
      topRecruiters: ["Banks", "Financial Services", "Audit Firms", "Corporates", "Government"],
      keywords: "online M.Com degree, distance M.Com, M.Com online courses, master of commerce"
    }
  ];

  const levels = ["All", "UG", "PG"];

  const filteredCourses = mainCourses.filter(course => {
    const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.specializations.some(spec => spec.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesLevel = selectedLevel === "All" || course.level === selectedLevel;
    return matchesSearch && matchesLevel;
  });

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Online UG & PG Courses - Distance Learning Programs",
    "description": "Complete directory of online degree courses from top universities in India",
    "url": "https://avedu.in/courses",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": mainCourses.map((course, index) => ({
        "@type": "Course",
        "position": index + 1,
        "name": course.name,
        "description": course.description,
        "provider": {
          "@type": "Organization",
          "name": "AVEDU"
        },
        "url": `https://avedu.in/courses/${course.id}`,
        "courseMode": "Online",
        "educationalLevel": course.level === 'UG' ? 'Undergraduate' : 'Postgraduate'
      }))
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Best Online UG & PG Courses 2025 | UGC Approved Distance Learning | AVEDU"
        description="Explore 100+ online degree courses from top Indian universities. UGC approved programs including MBA, BBA, MCA, BCA, BA, B.Com. Free counselling and placement support."
        keywords="online degree courses, distance learning, UGC approved online courses, best online universities, online MBA, online BBA, online MCA, online BCA"
        canonical="https://avedu.in/courses"
        structuredData={structuredData}
      />
      <NavigationHeader />
      <SeoBreadcrumbs />
      
      {/* Hero Section */}
      <section className="bg-gradient-subtle py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Explore <span className="text-primary">Online Courses</span> from Top Universities
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Choose from 100+ UGC approved online degree programs. Get expert guidance to find the perfect course for your career goals and budget.
            </p>
            
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                {levels.map(level => (
                  <Badge
                    key={level}
                    variant={selectedLevel === level ? "default" : "outline"}
                    className="cursor-pointer px-4 py-2"
                    onClick={() => setSelectedLevel(level)}
                  >
                    {level}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Courses Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Popular Online Degree Programs</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover career-focused online courses designed by top universities. Each program is crafted to provide industry-relevant skills and knowledge.
            </p>
          </div>

          {filteredCourses.length === 0 ? (
            <div className="text-center py-16">
              <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No courses found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map(course => (
                <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                  <div className="relative">
                    <img 
                      src={course.image} 
                      alt={`${course.name} Online Course`}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-primary-foreground">
                        {course.level} Program
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                        <Star className="w-3 h-3 mr-1 fill-primary text-primary" />
                        4.5+
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {course.name}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {course.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4 text-primary" />
                        <span className="font-semibold">{course.startingFee}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-4 h-4 text-primary" />
                        <span>{course.avgPackage}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4 text-primary" />
                        <span>{course.universities.length}+ Unis</span>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium text-foreground mb-2">Top Specializations:</p>
                      <div className="flex flex-wrap gap-1">
                        {course.specializations.slice(0, 3).map(spec => (
                          <Badge key={spec} variant="outline" className="text-xs">
                            {spec}
                          </Badge>
                        ))}
                        {course.specializations.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{course.specializations.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Link 
                        to={
                          course.id === "bca" || course.id === "mca" 
                            ? "/courses/engineering" 
                            : course.id === "ba" || course.id === "ma"
                            ? "/courses/arts"
                            : course.id === "bcom" || course.id === "mcom"
                            ? "/courses/commerce"
                            : `/courses/${course.id}`
                        } 
                        className="flex-1"
                      >
                        <Button className="w-full" size="sm">
                          View Details <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </Link>
                      <Button variant="outline" size="sm">
                        Compare
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Browse by Categories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Business & Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Build leadership skills with MBA, BBA, and specialized management programs
                </p>
                <Link to="/courses/business">
                  <Button variant="outline">Explore Business Courses</Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Technology & IT</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Master programming and tech skills with MCA, BCA, and IT specializations
                </p>
                <Link to="/courses/engineering">
                  <Button variant="outline">Explore Tech Courses</Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Arts & Commerce</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Explore diverse fields with BA, B.Com, and liberal arts programs
                </p>
                <div className="flex flex-col gap-2">
                  <Link to="/courses/arts">
                    <Button variant="outline">Explore Arts Courses</Button>
                  </Link>
                  <Link to="/courses/commerce">
                    <Button variant="outline">Explore Commerce Courses</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-primary rounded-2xl p-8 lg:p-12 text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Need Help Choosing the Right Course?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Get personalized course recommendations based on your career goals, budget, and preferences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <EmbeddedCounselingForm variant="compact" />
            </div>
          </div>
        </div>
      </section>

      <RelatedContentSection />

      <EeatBlock />

      <Footer />
    </div>
  );
};

export default Courses;