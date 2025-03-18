
import React, { useEffect, useRef } from 'react';
import { ShieldCheck, Clock, Zap } from 'lucide-react';

const Guide = () => {
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
    <section ref={sectionRef} className="section bg-white opacity-0 transition-all duration-700 transform translate-y-8">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop"
              alt="Wokkah as your guide"
              className="rounded-xl shadow-lg object-cover w-full h-full aspect-video"
            />
          </div>
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              We Guide You to Project Success
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Wokkah acts as your expert guide, providing AI-powered assistance throughout your project journey. We've helped hundreds of teams transform chaos into clarity.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Experienced Guide</h3>
                  <p className="text-muted-foreground">
                    Our AI platform has been trained on thousands of successful projects across industries.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Clear Process</h3>
                  <p className="text-muted-foreground">
                    We provide a structured framework that eliminates guesswork and keeps everyone aligned.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Ongoing Support</h3>
                  <p className="text-muted-foreground">
                    Our AI assistant is available 24/7 to help remove obstacles and suggest solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
