import React from 'react';
import mujLogo from '@/assets/muj_logo-removebg-preview.png';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Star, Award, Users, Globe, BookOpen, TrendingUp, CheckCircle, Heart, Calendar, Phone } from "lucide-react";
import MUJCampusImage from "@/assets/campus/muj.jpg";
import RankingsAccreditations from "@/components/RankingsAccreditations";

const MUJ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      

      {/* Hero Section */}
      <section className="pt-32 md:pt-36 pb-16" style={{ backgroundColor: '#F0E6FF' }}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <img src={mujLogo} alt="MUJ" className="h-16" />
                <div className="w-px h-16 bg-border"></div>
                <Badge className="bg-success/10 text-success border-success/20">NAAC A+ Accredited</Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Manipal University Jaipur
              </h1>
              <h2 className="text-xl text-muted-foreground mb-6">
                Excellence in Education Since 2011
              </h2>
              
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-lg font-semibold">4.8/5</span>
                <span className="text-muted-foreground">(2000+ Reviews)</span>
              </div>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Manipal University Jaipur (MUJ) is a self-financed state private university located in Jaipur, Rajasthan. Established in 2011, MUJ is NAAC A+ accredited and offers world-class education with industry-relevant curriculum and excellent placement opportunities.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Explore Courses
                </Button>
                <Button variant="outline" size="lg">
                  Download Brochure
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={MUJCampusImage} 
                alt="MUJ Campus" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">15000+</div>
                  <div className="text-sm">Students</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose MUJ */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Why Choose Manipal University Jaipur?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">NAAC A+ Accredited</h3>
              <p className="text-muted-foreground">Recognized for academic excellence and quality education standards</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Faculty</h3>
              <p className="text-muted-foreground">Learn from industry experts and experienced academicians</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global Recognition</h3>
              <p className="text-muted-foreground">Degrees recognized worldwide with international collaborations</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Industry-Aligned Curriculum</h3>
              <p className="text-muted-foreground">Updated curriculum designed with industry requirements</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Excellent Placements</h3>
              <p className="text-muted-foreground">Strong placement record with top companies</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">State-of-Art Infrastructure</h3>
              <p className="text-muted-foreground">Modern facilities and technology-enabled learning</p>
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
            MUJ at a Glance
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">15000+</div>
              <div className="text-lg opacity-90">Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">Faculty Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">85%</div>
              <div className="text-lg opacity-90">Placement Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">300+</div>
              <div className="text-lg opacity-90">Recruiting Companies</div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Programs */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Online Programs Available
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2">Master of Business Administration (MBA)</h3>
              <p className="text-muted-foreground mb-4">2 Years | Multiple Specializations</p>
              <Button className="w-full">Explore MBA</Button>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2">Master of Computer Applications (MCA)</h3>
              <p className="text-muted-foreground mb-4">2 Years | Tech-focused</p>
              <Button className="w-full">Explore MCA</Button>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2">Bachelor of Business Administration (BBA)</h3>
              <p className="text-muted-foreground mb-4">3 Years | Management Foundation</p>
              <Button className="w-full">Explore BBA</Button>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2">Bachelor of Computer Applications (BCA)</h3>
              <p className="text-muted-foreground mb-4">3 Years | Programming & IT</p>
              <Button className="w-full">Explore BCA</Button>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2">Bachelor of Commerce (BCom)</h3>
              <p className="text-muted-foreground mb-4">3 Years | Commerce & Finance</p>
              <Button className="w-full">Explore BCom</Button>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2">Master of Commerce (MCom)</h3>
              <p className="text-muted-foreground mb-4">2 Years | Advanced Commerce</p>
              <Button className="w-full">Explore MCom</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Get in Touch with MUJ Admissions
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Have questions about our programs? Our admissions team is here to help you make the right choice for your career.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>1800-XXX-XXXX (Toll Free)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
            
            <div className="bg-card p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-6">Request Information</h3>
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
                  <option>Online MBA</option>
                  <option>Online MCA</option>
                  <option>Online BBA</option>
                  <option>Online BCA</option>
                  <option>Online BCom</option>
                  <option>Online MCom</option>
                </select>
                <Button className="w-full">Submit Request</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MUJ;