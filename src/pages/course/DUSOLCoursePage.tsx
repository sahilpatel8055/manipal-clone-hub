import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, IndianRupee, Users, Award, Star } from "lucide-react";
import NavigationHeader from "@/components/ui/navigation-header";
import Footer from "@/components/ui/footer";
import EmbeddedCounselingForm from "@/components/ui/embedded-counseling-form";
import SectionNavigation from "@/components/ui/section-navigation";
import { useCounselingForm } from "@/hooks/use-counseling-form";
import courseData from "@/data/courseData.json";
import duSolDegree from "@/assets/DU sol sample degree.jpg";
import SeoBreadcrumbs from "@/components/ui/seo-breadcrumbs";
import RelatedContentSection from "@/components/ui/related-content-section";
import EeatBlock from "@/components/ui/eeat-block";

const DUSOLCoursePage = () => {
  const { courseId } = useParams();
  const { openForm, CounselingFormComponent } = useCounselingForm();
  const course = courseId ? courseData[courseId] : null;

  if (!course) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold">Course not found!</h1>
      </div>
    );
  }

  const sections = [
    { id: "hero", label: "Overview" },
    { id: "sample-degree", label: "Sample Degree" },
    { id: "highlights", label: "Highlights" },
    { id: "features", label: "Features" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <NavigationHeader />
      <SeoBreadcrumbs />
      <SectionNavigation sections={sections} />

      <section id="hero" className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-yellow-500 text-blue-900 mb-4">DU SOL {course.name} Program</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {course.name} Admission 2025 - Online {course.name} from DU SOL
              </h1>
              <p className="text-xl mb-8 text-blue-100">{course.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-yellow-300" />
                  <span>{course.duration} Duration</span>
                </div>
                <div className="flex items-center">
                  <IndianRupee className="h-5 w-5 mr-2 text-yellow-300" />
                  <span>{course.fees} Total Fee</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-yellow-300" />
                  <span>Online/Distance Mode</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 mr-2 text-yellow-300" />
                  <span>UGC Recognized</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button onClick={openForm} className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-8 py-3 text-lg">
                  Apply Now
                </Button>
                <Button variant="outline" onClick={openForm} className="border-white text-white hover:bg-white hover:text-blue-900 font-bold px-8 py-3 text-lg">
                  Download Brochure
                </Button>
              </div>
            </div>

            <div className="w-full">
              <EmbeddedCounselingForm variant="compact" />
            </div>
          </div>
        </div>
      </section>

      {/* Sample Degree Section */}
      <section id="sample-degree" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Sample DU SOL Degree Certificate</h2>
            <p className="text-xl text-gray-600">Your DU SOL degree will look like this</p>
          </div>
          <div className="flex justify-center">
            <div className="max-w-md w-full">
              <img src={duSolDegree} alt="DU SOL Sample Degree Certificate" className="w-full h-auto rounded-lg shadow-2xl border-4 border-blue-100" />
            </div>
          </div>
        </div>
      </section>

      {course.highlights && course.highlights.length > 0 && (
        <section id="highlights" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">DU SOL {course.name} Program Highlights</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {course.highlights.map((highlight, index) => (
                <Card key={index} className="text-center p-6">
                  <h3 className="font-bold text-lg mb-2">{highlight.title}</h3>
                  <p className="text-gray-600">{highlight.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {course.keyFeatures && course.keyFeatures.length > 0 && (
        <section id="features" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Online {course.name} Stands Out</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {course.keyFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <RelatedContentSection />

      <EeatBlock />

      <Footer />
      <CounselingFormComponent />
    </div>
  );
};

export default DUSOLCoursePage;
