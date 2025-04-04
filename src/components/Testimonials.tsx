
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
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
      className="section bg-gradient-to-b from-neutral-50 to-white opacity-0 transition-all duration-700 transform translate-y-8"
    >
      <div className="container-tight">
        <div className="text-center">
          <span className="chip">What Our Customers Think</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">
            What our customers think about us
          </h2>
        </div>
        
        <div className="mt-12 relative">
          <div className="overflow-hidden rounded-xl bg-white shadow-xl border border-neutral-100">
            <div className="w-full p-8 md:p-12">
              <div className="flex items-center justify-center md:justify-start">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                    alt="Dr. Harry Akinola"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Dr. Harry Akinola</h3>
                  <p className="text-muted-foreground">Director of Innovation, MediTech Solutions</p>
                </div>
              </div>
              
              <div className="mt-6 relative">
                <Quote className="absolute -top-3 -left-3 w-8 h-8 text-primary/20" />
                <p className="text-lg md:text-xl italic text-balance">
                  "Wokkah has revolutionized how we approach our AI integration projects. Their team's expertise helped us implement solutions that have directly improved patient outcomes while reducing administrative overhead by 35%."
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">We've helped grow hundreds of companies</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonialCards.map((card, index) => (
              <div key={index} className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-xl">
                <h4 className="font-bold text-lg mb-2">{card.title}</h4>
                <p className="text-muted-foreground">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const testimonialCards = [
  {
    title: "Scaling startups",
    description: "Helping early-stage companies build and scale faster with AI"
  },
  {
    title: "Enterprise",
    description: "Transforming how large organizations manage projects and innovation"
  },
  {
    title: "Mid-market",
    description: "Providing powerful tools that grow with your business needs"
  }
];

export default Testimonials;
