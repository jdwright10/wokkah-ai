
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { cn } from '@/lib/utils';

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

  const scrollToOptions = () => {
    const optionsSection = document.querySelector('#home-options');
    if (optionsSection) {
      optionsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div ref={heroRef} className="w-full lg:w-1/2 text-center lg:text-left opacity-0 transition-all duration-700 transform translate-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">
              Transform Your Business with AI-Powered Solutions
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 text-balance">
              Streamline operations, reduce costs, and boost productivity with our all-in-one AI platform.
            </p>
            <div className="mt-8 flex justify-center lg:justify-start">
              <Button 
                size="lg" 
                onClick={scrollToOptions}
                className="bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 transition-all duration-300 shadow-md"
              >
                Explore Solutions
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div 
            className={cn(
              "w-full lg:w-1/2 rounded-xl shadow-2xl overflow-hidden",
              "transition-all duration-700 transform opacity-0 translate-y-8 animate-fade-in"
            )}
          >
            <AspectRatio ratio={16/9} className="w-full">
              <img 
                src="/lovable-uploads/9058d7e7-8964-4e5a-a94b-29597f5a8c2a.png" 
                alt="Person using laptop with digital document icons" 
                className="w-full h-full object-cover rounded-xl"
              />
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
