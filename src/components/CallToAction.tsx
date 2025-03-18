
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
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
            Join hundreds of companies that have simplified their AI implementation journey with Wokkah.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/pricing">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 transition-all duration-300 shadow-md">
                See Pricing Plans
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-purple-400 text-purple-700 hover:bg-purple-50 transition-colors">
              Schedule a Demo
            </Button>
          </div>
          
          <p className="mt-8 text-muted-foreground">
            No credit card required. 14-day free trial.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
