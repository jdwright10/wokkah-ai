
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-white to-neutral-50 overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <span className="chip animate-fade-in opacity-0">Project Execution Platform</span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight animate-fade-in opacity-0 animate-delay-100">
              The AI-Powered Platform for Seamless Project Execution
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 animate-fade-in opacity-0 animate-delay-200 text-balance">
              Build collaborative AI applications without writing a single line of code. From ideation to deployment, we've got you covered.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in opacity-0 animate-delay-300">
              <Button size="lg" className="btn-hover-effect">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="btn-hover-effect">
                Book a Demo
              </Button>
            </div>
          </div>
          
          <div 
            ref={videoRef}
            className="w-full lg:w-1/2 bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-700 transform opacity-0 translate-y-8"
          >
            <div className="relative aspect-video w-full rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-neutral-900/10 flex items-center justify-center group cursor-pointer">
                <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <ArrowRight size={30} className="text-primary ml-1" />
                </div>
              </div>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-100 to-purple-100" />
              <img 
                src="/lovable-uploads/d5c5ce1f-63a0-4dd0-9172-bf41b0921a63.png" 
                alt="Wokkah AI Platform"
                className="object-cover w-full h-full opacity-70"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
