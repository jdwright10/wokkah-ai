
import React, { useEffect, useRef } from 'react';

const ProblemSection = () => {
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
    
    const childElements = sectionRef.current?.querySelectorAll('.reveal-item');
    childElements?.forEach((el) => observer.observe(el));
    
    return () => {
      childElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  return (
    <section ref={sectionRef} className="section bg-neutral-50">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent rounded-xl transform rotate-3 scale-105"></div>
              <img 
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="Home renovation challenges" 
                className="relative z-10 rounded-xl shadow-xl w-full object-cover reveal-item opacity-0 transition-all duration-700 transform translate-y-8"
              />
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <span className="chip reveal-item opacity-0 transition-all duration-700 transform translate-y-8">The Challenge</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold reveal-item opacity-0 transition-all duration-700 transform translate-y-8">
              Home renovation doesn't have to be stressful
            </h2>
            <p className="mt-6 text-lg text-muted-foreground reveal-item opacity-0 transition-all duration-700 transform translate-y-8 text-balance">
              Many homeowners feel overwhelmed by the renovation process. From finding reliable contractors to managing budgets and timelines, the challenges can seem endless.
            </p>
            
            <div className="mt-8 space-y-6">
              {problemItems.map((item, index) => (
                <div 
                  key={item}
                  className="flex items-start gap-4 reveal-item opacity-0 transition-all duration-700 transform translate-y-8"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-500 text-xl">✕</span>
                  </div>
                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const problemItems = [
  "Dealing with unpredictable timelines and contractors who don't show up",
  "Being overwhelmed by technical decisions you're not prepared to make",
  "Going over budget with unexpected costs and changes",
  "Living with renovation chaos and disruption for too long"
];

export default ProblemSection;
