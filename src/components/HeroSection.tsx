import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Award, Play } from 'lucide-react';
import heroImage from '@/assets/ChatGPT_Image_Aug_22__2025__02_36_01_PM-removebg-preview.png';
import ugcIcon from '@/assets/icons/ugc.png';
import React, { useState, useEffect } from 'react';
import CounselingForm from './CounselingForm';

// New component for the counting animation
const AnimatedNumber = ({ endValue, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * endValue));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [endValue, duration]);

  return <>{count}</>;
};

const HeroSection = () => {
  return (
    <section className="relative min-h-[60vh] md:min-h-[70vh] flex hero-pattern overflow-hidden pt-4 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Content */}
          <div className="lg:col-span-5 space-y-8">
            {/* UGC Badge */}
            <div className="flex items-center space-x-2">
              <img src={ugcIcon} alt="UGC Entitled" className="w-5 h-5" />
              <Badge variant="secondary" className="px-3 py-1 text-sm font-medium">
                UGC-Entitled
              </Badge>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Education That
                <br />
                Powers Your{' '}
                <span className="relative">
                  <span className="text-gradient">Ambition</span>
                  <svg 
                    className="absolute -bottom-2 left-0 w-full h-3 text-primary/30" 
                    viewBox="0 0 100 10" 
                    preserveAspectRatio="none"
                  >
                    <path 
                      d="M0,8 Q25,2 50,6 T100,4" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      fill="none"
                      className="animate-pulse"
                    />
                  </svg>
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Online degree programs & courses from{' '}
                <span className="text-primary font-semibold">Manipal Universities</span>.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 transition-smooth shadow-primary text-lg px-8 py-6"
              >
                Apply Now
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth text-lg px-8 py-6"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Video
              </Button>
            </div>

            {/* Stats with Animation */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">
                  <AnimatedNumber endValue={50000} />+
                </div>
                <div className="text-sm text-muted-foreground">Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">
                  <AnimatedNumber endValue={100} />+
                </div>
                <div className="text-sm text-muted-foreground">Programs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">
                  <AnimatedNumber endValue={95} />%
                </div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Center Image */}
          <div className="lg:col-span-4 relative flex justify-center items-center"> 
            <div className="relative w-full flex items-center justify-center">
              <img
                src={heroImage}
                alt="Successful student giving thumbs up"
                className="w-full h-auto object-contain rounded-2xl lg:h-[400px] lg:w-auto" 
              />
              
              {/* Floating Badge */}
              <div className="absolute top-8 left-8 bg-primary text-primary-foreground rounded-full p-3 shadow-primary">
                <div className="text-center">
                  <div className="text-lg font-bold">360°</div>
                  <div className="text-xs">DEGREE OF SUCCESS</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Counseling Form */}
          <div className="lg:col-span-3 flex justify-end items-start">
            <div className="w-full max-w-sm">
              <CounselingForm />
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-primary/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default HeroSection;
