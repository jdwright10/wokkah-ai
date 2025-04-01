
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Briefcase, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section 
      ref={sectionRef} 
      className="section py-16 md:py-24 bg-gradient-to-r from-blue-100 via-purple-50 to-blue-50 opacity-0 transition-all duration-700 transform translate-y-8"
    >
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">
            Ready to Infuse AI Into Your Business?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance mb-8">
            Choose how you'd like to work with Wokkah and start your AI journey today.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <Link to="/hire-wokkah" className="w-full">
              <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-md gap-2">
                <Briefcase className="h-5 w-5" />
                Hire Wokkah
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            
            <Link to="/solutions/business-automation" className="w-full">
              <Button size="lg" className="w-full bg-purple-600 hover:bg-purple-700 transition-all duration-300 shadow-md gap-2">
                <Zap className="h-5 w-5" />
                Explore Solutions
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
          
          <p className="mt-8 text-muted-foreground">
            No credit card required. Start with a free consultation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
