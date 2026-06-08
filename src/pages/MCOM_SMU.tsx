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
import { Clock, Calendar, Award, BookOpen, TrendingUp, DollarSign, Briefcase, BarChart, Calculator } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import smuLogo from '@/assets/smulogo.jpg';

const MCOM_SMU = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  const specializations = [
    { icon: Calculator, title: 'Advanced Accounting' },
    { icon: BarChart, title: 'Financial Analysis' },
    { icon: TrendingUp, title: 'Strategic Management' },
    { icon: DollarSign, title: 'Corporate Finance' },
    { icon: Briefcase, title: 'Business Analytics' },
    { icon: Award, title: 'International Trade' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <section className="relative pt-32 md:pt-36 pb-16 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-800/20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-center gap-4 mb-6">
                  <img src={smuLogo} alt="SMU Logo" className="h-16 w-auto" />
                  <Badge className="bg-green-600 text-white">NAAC A+ Accredited</Badge>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Master of Commerce
                  <span className="block text-2xl md:text-3xl text-muted-foreground mt-2">
                    (Online MCom)
                  </span>
                </h1>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The online Master of Commerce (MCom) from Sikkim Manipal University offers advanced study 
                  in commerce and business management with specialized focus areas.
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
                  <div className="font-bold">24 months • 4 Sem</div>
                </Card>
                
                <Card className="p-4 text-center">
                  <DollarSign className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-sm text-muted-foreground">Course fee</div>
                  <div className="font-bold">INR 52,000</div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Advanced Commerce Specializations</h2>
            </div>
            <div className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory">
              {specializations.map((spec, index) => (
                <SpecializationCard key={index} icon={spec.icon} title={spec.title} />
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

export default MCOM_SMU;