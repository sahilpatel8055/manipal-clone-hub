import React from 'react';
import mujLogo from '@/assets/muj_logo-removebg-preview.png';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Star, Award, Users, Globe, BookOpen, TrendingUp, CheckCircle, Heart, Calendar, Phone, Mountain } from "lucide-react";
import SMUCampusImage from "@/assets/campus/smu.jpg";
import RankingsAccreditations from "@/components/RankingsAccreditations";

const SMU = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      

      {/* Hero Section */}
      <section className="pt-32 md:pt-36 pb-16" style={{ backgroundColor: '#F0E6FF' }}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <img src={mujLogo} alt="SMU" className="h-16" />
                <div className="w-px h-16 bg-border"></div>
                <Badge className="bg-success/10 text-success border-success/20">UGC Recognized</Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Sikkim Manipal University
              </h1>
              <h2 className="text-xl text-muted-foreground mb-6">
                Pioneer in Distance Education Since 1995
              </h2>
              
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-lg font-semibold">4.7/5</span>
                <span className="text-muted-foreground">(3000+ Reviews)</span>
              </div>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Sikkim Manipal University (SMU) is a premier institution offering quality education through distance learning mode. With over 25 years of experience in distance education, SMU has been a trusted name for flexible and accessible higher education.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  View Programs
                </Button>
                <Button variant="outline" size="lg">
                  Download Brochure
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={SMUCampusImage} 
                alt="SMU Campus" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">50000+</div>
                  <div className="text-sm">Alumni</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose SMU */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Why Choose Sikkim Manipal University?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <Mountain className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Pioneer in Distance Education</h3>
              <p className="text-muted-foreground">25+ years of excellence in distance learning</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Experienced Faculty</h3>
              <p className="text-muted-foreground">Distinguished academics and industry experts</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Flexible Learning</h3>
              <p className="text-muted-foreground">Study at your own pace from anywhere</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality Study Material</h3>
              <p className="text-muted-foreground">Comprehensive and updated course content</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Affordable Education</h3>
              <p className="text-muted-foreground">Quality education at competitive fees</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">UGC Recognition</h3>
              <p className="text-muted-foreground">Degrees recognized by UGC and employers</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Rankings & Accreditations */}
      <RankingsAccreditations />

      {/* Key Stats */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            SMU at a Glance
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50000+</div>
              <div className="text-lg opacity-90">Alumni Network</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-lg opacity-90">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-lg opacity-90">Programs</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-lg opacity-90">Study Centers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Distance Learning Advantages */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Distance Learning Advantages
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <div className="text-2xl font-bold text-primary mb-2">Flexibility</div>
              <p className="text-muted-foreground">Learn at your own pace and schedule</p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="text-2xl font-bold text-primary mb-2">Accessibility</div>
              <p className="text-muted-foreground">No geographical barriers to education</p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="text-2xl font-bold text-primary mb-2">Affordability</div>
              <p className="text-muted-foreground">Cost-effective quality education</p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="text-2xl font-bold text-primary mb-2">Technology</div>
              <p className="text-muted-foreground">Modern e-learning platforms</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Available Programs */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-10">
            Distance Learning Programs
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Master of Business Administration (MBA)', meta: '2 Years | Management Excellence', href: '/mba-smu', label: 'Explore MBA' },
              { title: 'Master of Computer Applications (MCA)', meta: '2 Years | IT Leadership', href: '/mca-smu', label: 'Explore MCA' },
              { title: 'Bachelor of Arts (BA)', meta: '3 Years | Liberal Arts', href: '/ba-smu', label: 'Explore BA' },
              { title: 'Master of Arts (MA)', meta: '2 Years | Advanced Humanities', href: '/ma-smu', label: 'Explore MA' },
              { title: 'Bachelor of Commerce (BCom)', meta: '3 Years | Commerce Knowledge', href: '/bcom-smu', label: 'Explore BCom' },
              { title: 'Master of Commerce (MCom)', meta: '2 Years | Advanced Commerce', href: '/mcom-smu', label: 'Explore MCom' },
            ].map((p) => (
              <Card key={p.href} className="p-6 hover:shadow-lg transition-all duration-300 flex flex-col">
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-muted-foreground mb-4">{p.meta}</p>
                <a href={p.href} className="mt-auto">
                  <Button className="w-full">{p.label}</Button>
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Start Your SMU Journey
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Take the first step towards your educational goals with SMU's flexible distance learning programs. Our academic counselors are here to help you choose the right program.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>1800-XXX-XXXX (Toll Free)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>Mon - Sat: 9:30 AM - 6:30 PM</span>
                </div>
              </div>
            </div>
            
            <div className="bg-card p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-6">Enquire About Programs</h3>
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full p-3 border border-border rounded-lg"
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full p-3 border border-border rounded-lg"
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full p-3 border border-border rounded-lg"
                />
                <select className="w-full p-3 border border-border rounded-lg">
                  <option>Select Program of Interest</option>
                  <option>Distance MBA</option>
                  <option>Distance MCA</option>
                  <option>Distance BBA</option>
                  <option>Distance BCA</option>
                  <option>Distance BCom</option>
                  <option>Distance MCom</option>
                </select>
                <Button className="w-full">Send Enquiry</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SMU;