
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

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
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div ref={heroRef} className="w-full lg:w-1/2 text-center lg:text-left opacity-0 transition-all duration-700 transform translate-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">
              Infuse the Power of AI Into Your Company
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 text-balance">
              One platform to create, manage, and deliver your projects with AI-assistance and expert freelancers who bring your vision to life.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 transition-all duration-300 shadow-md">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-purple-400 text-purple-700 hover:bg-purple-50 transition-colors">
                See How It Works
              </Button>
            </div>
          </div>
          
          <div 
            className="w-full lg:w-1/2 bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-700 transform opacity-0 translate-y-8 animate-fade-in"
          >
            <AspectRatio ratio={16/9} className="w-full">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/bh2Odj8PfdY?start=62" 
                title="Wokkah AI Platform Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
