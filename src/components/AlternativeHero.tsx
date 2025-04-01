
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AlternativeHero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

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
    
    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <section className="py-20 md:py-28 overflow-hidden bg-gradient-to-b from-purple-50 via-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div 
            ref={heroRef} 
            className="w-full lg:w-1/2 opacity-0 transition-all duration-700 transform translate-y-8"
          >
            <span className="px-4 py-1 rounded-full bg-purple-100 text-purple-800 font-medium text-sm inline-block mb-6">
              AI Solutions for Business
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Automate Your Business with <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">AI Solutions</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              Streamline workflows, reduce costs, and boost productivity with our comprehensive suite of AI-powered business automation tools.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-md"
                asChild
              >
                <Link to="/solutions/business-automation">
                  Explore Solutions <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div 
            ref={imageRef}
            className="w-full lg:w-1/2 opacity-0 transition-all duration-700 delay-300 transform translate-y-8"
          >
            <div className="relative h-[500px]">
              {/* Background decoration blobs */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
              
              {/* Feature cards */}
              <div className="relative z-10 grid grid-cols-2 gap-6 pt-12">
                <div className="bg-white rounded-2xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
                      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path>
                      <path d="M12 3v6"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold">Marketing Automation</h3>
                  <p className="text-muted-foreground mt-2">Automate campaigns and lead nurturing.</p>
                </div>
                
                <div className="bg-white rounded-2xl shadow-lg p-6 mt-8 transform hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold">HR Automation</h3>
                  <p className="text-muted-foreground mt-2">Streamline hiring and onboarding processes.</p>
                </div>
                
                <div className="bg-white rounded-2xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold">Operations</h3>
                  <p className="text-muted-foreground mt-2">Optimize business workflows and processes.</p>
                </div>
                
                <div className="bg-white rounded-2xl shadow-lg p-6 mt-8 transform hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-600">
                      <path d="M20.2 7.8l-7.7 7.7-4-4-5.7 5.7"></path>
                      <path d="M15 7h6v6"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold">Finance</h3>
                  <p className="text-muted-foreground mt-2">Automate invoicing and financial reporting.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlternativeHero;
