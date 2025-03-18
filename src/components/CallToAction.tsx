
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
          <span className="chip">Ready to Transform Your Home?</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">
            Start your journey to a beautiful, functional home today
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Take the first step toward creating the home you've always wanted. Our team is ready to bring your vision to life.
          </p>
          
          <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-hover-effect">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="btn-hover-effect">
              View Our Portfolio
            </Button>
          </div>
          
          <p className="mt-8 text-muted-foreground">
            Have questions? Call us at <a href="tel:+11234567890" className="font-medium text-primary hover:underline">+1 (123) 456-7890</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
