import React, { useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Phone, Video, MessageCircle, Download, MapPin, Calendar, GraduationCap, Users, DollarSign, Award } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import SEOHead from '@/components/ui/seo-head';
import SeoBreadcrumbs from '@/components/ui/seo-breadcrumbs';
import RelatedContentSection from '@/components/ui/related-content-section';
import EeatBlock from '@/components/ui/eeat-block';

// Sample universities data - you can extend this
const universitiesData = {
  manipal: {
    name: "Manipal University",
    logo: "/src/assets/manipal-logo.png",
    established: "1953",
    naacGrade: "A++",
    location: "Karnataka",
    rating: 4.6,
    sampleCertificate: "/src/assets/manipal-1stdegree.jpg",
    eligibility: "Bachelor's degree with 50% marks",
    educationMode: "Online",
    examinationMode: "Online",
    naacRating: "A++",
    emiFacility: "Yes",
    fee: "₹73,000/Sem",
    approvals: ["UGC", "AICTE", "NAAC"]
  },
  amity: {
    name: "Amity University",
    logo: "/src/assets/amity-logo.jpg",
    established: "2005",
    naacGrade: "A+",
    location: "Uttar Pradesh",
    rating: 4.3,
    sampleCertificate: "/src/assets/amity.png",
    eligibility: "Bachelor's degree with 50% marks",
    educationMode: "Online",
    examinationMode: "Online", 
    naacRating: "A+",
    emiFacility: "Yes",
    fee: "₹65,000/Sem",
    approvals: ["UGC", "AICTE", "NAAC"]
  },
  lpu: {
    name: "LPU University",
    logo: "/src/assets/lpu-logo.jpg",
    established: "2005",
    naacGrade: "A+",
    location: "Punjab",
    rating: 4.2,
    sampleCertificate: "/src/assets/lpu.png",
    eligibility: "Bachelor's degree with 50% marks",
    educationMode: "Online",
    examinationMode: "Online",
    naacRating: "A+", 
    emiFacility: "Yes",
    fee: "₹55,000/Sem",
    approvals: ["UGC", "AICTE", "NAAC"]
  }
};

const UniversityComparison = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);
  
  // Get universities from URL params or default selection
  const compareParam = searchParams.get('universities');
  const selectedUniversities = compareParam ? compareParam.split(',') : ['manipal', 'amity', 'lpu'];
  
  const universities = selectedUniversities.map(id => universitiesData[id as keyof typeof universitiesData]).filter(Boolean);

  const handleContact = (type: 'whatsapp' | 'video' | 'toll') => {
    toast({
      title: "Contact Initiated",
      description: `Our counselor will connect with you via ${type} shortly.`,
    });
  };

  const handleApply = (universityName: string) => {
    toast({
      title: "Application Started",
      description: `Redirecting to ${universityName} application form...`,
    });
  };

  const comparisonFactors = [
    { key: 'established', label: 'Established', icon: Calendar },
    { key: 'naacGrade', label: 'NAAC Grade', icon: Award },
    { key: 'location', label: 'Location', icon: MapPin },
    { key: 'rating', label: 'Rating', icon: Star },
    { key: 'eligibility', label: 'Eligibility', icon: GraduationCap },
    { key: 'educationMode', label: 'Education Mode', icon: Users },
    { key: 'examinationMode', label: 'Examination Mode', icon: Users },
    { key: 'naacRating', label: 'NAAC Rating', icon: Award },
    { key: 'emiFacility', label: 'EMI Facility', icon: DollarSign },
    { key: 'fee', label: 'Fee', icon: DollarSign },
  ];

  return (
    <>
      <SEOHead
        title="University Comparison - Compare Top Online Universities"
        description="Compare top online universities side by side. Detailed comparison of fees, ratings, facilities, and more to help you choose the best university."
        keywords="university comparison, online education, university fees, NAAC rating, online degrees"
      />
      
      <SeoBreadcrumbs />

      <div className="min-h-screen bg-background py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              University Comparison
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Compare universities side by side to make an informed decision about your education
            </p>
          </div>

          {/* Mobile/Tablet: 3 columns layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {universities.map((university, index) => (
              <Card key={index} className="relative">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full p-2 shadow-lg">
                    <img 
                      src={university.logo} 
                      alt={`${university.name} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <CardTitle className="text-lg font-semibold">{university.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {comparisonFactors.map((factor) => {
                    const Icon = factor.icon;
                    const value = university[factor.key as keyof typeof university];
                    
                    return (
                      <div key={factor.key} className="bg-muted/30 rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <Icon className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium text-muted-foreground">{factor.label}</span>
                        </div>
                        <div className="text-sm font-semibold text-foreground">
                          {factor.key === 'rating' ? (
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              {value}
                            </div>
                          ) : factor.key === 'location' ? (
                            <div className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {value}
                            </div>
                          ) : (
                            value
                          )}
                        </div>
                      </div>
                    );
                  })}

                  {/* Sample Certificate */}
                  <div className="bg-muted/30 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-muted-foreground">Sample Certificate</span>
                    </div>
                    <button 
                      onClick={() => setSelectedCertificate(university.sampleCertificate)}
                      className="text-sm text-primary hover:underline flex items-center gap-1"
                    >
                      📄 View Sample
                    </button>
                  </div>

                  {/* Contact Options */}
                  <div className="space-y-2">
                    <Button 
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                      onClick={() => handleContact('whatsapp')}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => handleContact('video')}
                    >
                      <Video className="w-4 h-4 mr-2" />
                      Video Call
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => handleContact('toll')}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Toll Free
                    </Button>
                  </div>

                  {/* Fee and Apply */}
                  <div className="border-t pt-4">
                    <div className="text-center mb-3">
                      <span className="text-2xl font-bold text-primary">{university.fee}</span>
                    </div>
                    <Button 
                      className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                      onClick={() => handleApply(university.name)}
                    >
                      Apply Now
                    </Button>
                    {university.emiFacility === 'Yes' && (
                      <p className="text-xs text-green-600 text-center mt-2">💰 EMI Available</p>
                    )}
                  </div>

                  {/* Approvals */}
                  <div className="border-t pt-4">
                    <p className="text-sm font-medium text-muted-foreground mb-2">Approvals</p>
                    <div className="flex flex-wrap gap-2">
                      {university.approvals.map((approval) => (
                        <Badge key={approval} variant="secondary" className="text-xs">
                          {approval}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Download Comparison */}
          <div className="text-center">
            <Button variant="outline" className="bg-green-600 hover:bg-green-700 text-white border-green-600">
              <Download className="w-4 h-4 mr-2" />
              Download Comparison
            </Button>
          </div>
        </div>

        {/* Certificate Modal */}
        {selectedCertificate && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedCertificate(null)}
          >
            <div className="max-w-3xl max-h-[90vh] overflow-auto">
              <img 
                src={selectedCertificate} 
                alt="Sample Certificate" 
                className="w-full h-auto"
              />
            </div>
          </div>
        )}
      </div>

      <EeatBlock />
      <RelatedContentSection />
    </>
  );
};

export default UniversityComparison;