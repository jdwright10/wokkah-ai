
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

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
      className="section bg-gradient-to-r from-primary/10 to-primary/5 opacity-0 transition-all duration-700 transform translate-y-8"
    >
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <span className="chip">Ready to Get Started?</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">
            Are you interested in Wokkah?
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Start building AI-powered applications today. No coding required.
          </p>
          
          <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-hover-effect">
              Request a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="btn-hover-effect">
              Start Free Trial
            </Button>
          </div>
          
          <p className="mt-8 text-muted-foreground">
            Have questions? Contact us at <a href="mailto:support@wokkah.com" className="font-medium text-primary hover:underline">support@wokkah.com</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
