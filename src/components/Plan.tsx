
import React, { useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';

const Plan = () => {
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
    <section ref={sectionRef} className="section bg-neutral-50 opacity-0 transition-all duration-700 transform translate-y-8">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Three Simple Steps to AI Implementation
          </h2>
          <p className="text-lg text-muted-foreground">
            We've simplified the complex process of bringing AI into your business down to these key steps.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 relative">
            <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
              1
            </div>
            <h3 className="text-xl font-bold mb-4 pt-2">Create Your Vision</h3>
            <p className="text-muted-foreground mb-6">
              Use our AI assistant to turn your business idea into a clear, detailed Product Requirements Document.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-primary mr-2" />
                <span>AI-guided requirements gathering</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-primary mr-2" />
                <span>Clear project scope definition</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-primary mr-2" />
                <span>Business-to-technical translation</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 relative">
            <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
              2
            </div>
            <h3 className="text-xl font-bold mb-4 pt-2">Match With Talent</h3>
            <p className="text-muted-foreground mb-6">
              Connect with pre-vetted AI specialists and developers who have the exact skills your project needs.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-primary mr-2" />
                <span>Skill-based matching algorithm</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-primary mr-2" />
                <span>Verified expertise and experience</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-primary mr-2" />
                <span>Transparent pricing and timelines</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 relative">
            <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
              3
            </div>
            <h3 className="text-xl font-bold mb-4 pt-2">Oversee Your Project</h3>
            <p className="text-muted-foreground mb-6">
              Maintain full visibility and control as your AI solution comes to life with our built-in project management tools.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-primary mr-2" />
                <span>Real-time progress tracking</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-primary mr-2" />
                <span>Direct communication channels</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-primary mr-2" />
                <span>Milestone-based payment system</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plan;
