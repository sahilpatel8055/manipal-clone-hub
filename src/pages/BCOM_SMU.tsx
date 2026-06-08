import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RankingsAccreditations from '@/components/RankingsAccreditations';
import OnlineAdvantagesSection from '@/components/OnlineAdvantagesSection';
import CourseCurriculumSection from '@/components/CourseCurriculumSection';
import CourseFeesSection from '@/components/CourseFeesSection';
import ManipalSampleDegreeSection from '@/components/ManipalSampleDegreeSection';
import SpecializationCard from '@/components/SpecializationCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Clock, Users, Calendar, Award, BookOpen, TrendingUp, DollarSign, Briefcase, BarChart, Calculator } from 'lucide-react';
import smuLogo from '@/assets/smulogo.jpg';

const BCOM_SMU = () => {
  const specializations = [
    { icon: Calculator, title: 'Accounting & Finance' },
    { icon: BarChart, title: 'Banking & Insurance' },
    { icon: TrendingUp, title: 'Marketing Management' },
    { icon: DollarSign, title: 'Financial Markets' },
    { icon: Briefcase, title: 'Business Management' },
    { icon: Award, title: 'International Business' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-800/20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-center gap-4 mb-6">
                  <img src={smuLogo} alt="SMU Logo" className="h-16 w-auto" />
                  <Badge className="bg-green-600 text-white">NAAC A+ Accredited</Badge>
                </div>
                
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    Bachelor of Commerce
                    <span className="block text-2xl md:text-3xl text-muted-foreground mt-2">
                      (Online BCom)
                    </span>
                  </h1>
                  
                  <div className="flex items-center gap-2">
                    <div className="flex text-yellow-400">
                      {[...Array(4)].map((_, i) => (
                        <Award key={i} className="w-5 h-5 fill-current" />
                      ))}
                      <Award className="w-5 h-5 text-gray-300" />
                    </div>
                    <span className="text-lg font-semibold">4.5</span>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  The online Bachelor of Commerce (BCom) from Sikkim Manipal University provides comprehensive 
                  knowledge in commerce, accounting, finance, and business management.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-smooth shadow-primary">
                    Download Brochure
                  </Button>
                  <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
                    Apply Now
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <Card className="p-4 text-center">
                  <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-sm text-muted-foreground">Course duration</div>
                  <div className="font-bold">36 months • 6 Sem</div>
                </Card>
                
                <Card className="p-4 text-center">
                  <BookOpen className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-sm text-muted-foreground">Specialization</div>
                  <div className="font-bold">Multiple</div>
                </Card>
                
                <Card className="p-4 text-center">
                  <DollarSign className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-sm text-muted-foreground">Course fee</div>
                  <div className="font-bold">INR 60,000</div>
                  <div className="text-xs text-muted-foreground">INR 10,000 per semester</div>
                </Card>
                
                <Card className="p-4 text-center">
                  <Calendar className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-sm text-muted-foreground">Last date of admission</div>
                  <div className="font-bold text-green-600">23rd Aug</div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Specializations Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Commerce & Business Specializations
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Build expertise in commerce and business management with our comprehensive specialization options.
              </p>
            </div>

            <div className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory">
              {specializations.map((spec, index) => (
                <SpecializationCard
                  key={index}
                  icon={spec.icon}
                  title={spec.title}
                />
              ))}
            </div>
          </div>
        </section>

        <RankingsAccreditations />
        <OnlineAdvantagesSection />
        <CourseCurriculumSection />
        <ManipalSampleDegreeSection />
        <CourseFeesSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default BCOM_SMU;