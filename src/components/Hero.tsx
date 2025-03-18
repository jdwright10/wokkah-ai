
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

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

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-white to-neutral-50 overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div ref={heroRef} className="w-full lg:w-1/2 text-center lg:text-left opacity-0 transition-all duration-700 transform translate-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight">
              Infuse AI Into Your Company
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 text-balance">
              One platform to create, manage, and deliver your projects with AI-assistance and expert freelancers who bring your vision to life.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="btn-hover-effect">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="btn-hover-effect">
                See How It Works
              </Button>
            </div>
          </div>
          
          <div 
            className="w-full lg:w-1/2 bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-700 transform opacity-0 translate-y-8 animate-fade-in"
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
