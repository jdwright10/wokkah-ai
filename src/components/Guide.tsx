
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
              Your AI Implementation Partner
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Wokkah simplifies the complex process of bringing AI into your business by providing a single platform where vision meets execution through AI assistance and expert talent.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">AI-Powered PRD Creation</h3>
                  <p className="text-muted-foreground">
                    Our AI helps translate your business needs into clear technical specifications that developers can follow precisely.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Vetted Talent Matching</h3>
                  <p className="text-muted-foreground">
                    Connect with pre-screened freelancers who specialize in AI implementation and project delivery.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Complete Visibility</h3>
                  <p className="text-muted-foreground">
                    Track progress, communicate directly with your team, and maintain control throughout the entire project lifecycle.
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
