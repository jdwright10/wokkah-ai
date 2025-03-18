
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

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
            <span className="chip animate-fade-in opacity-0">Transform Your Home</span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight animate-fade-in opacity-0 animate-delay-100">
              Create the home you've always dreamed of
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 animate-fade-in opacity-0 animate-delay-200 text-balance">
              We guide you through a proven process that transforms your living space into a reflection of your unique style and needs.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in opacity-0 animate-delay-300">
              <Button size="lg" className="btn-hover-effect">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="btn-hover-effect">
                See Our Work
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
                  <Play size={30} className="text-primary ml-1" />
                </div>
              </div>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-100 to-purple-100" />
              <img 
                src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="Beautiful home interior"
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
