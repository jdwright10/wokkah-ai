
import React, { useEffect, useRef } from 'react';
import { Shield, Clock, Zap, MonitorSmartphone, Brain, Database } from 'lucide-react';

const ValueProposition = () => {
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
    <section className="py-20 bg-white">
      <div className="container">
        <div 
          ref={sectionRef} 
          className="text-center max-w-3xl mx-auto mb-16 opacity-0 transition-all duration-700 transform translate-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Choose Wokkah for Your AI Journey
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our comprehensive platform combines AI technology, human expertise, and seamless management to deliver exceptional results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const features = [
  {
    title: "AI-Powered Insights",
    description: "Leverage advanced AI to analyze your business requirements and transform them into actionable technical specifications.",
    icon: <Brain className="h-7 w-7 text-primary" />
  },
  {
    title: "Seamless Integration",
    description: "Our solutions integrate smoothly with your existing systems, minimizing disruption while maximizing impact.",
    icon: <Database className="h-7 w-7 text-primary" />
  },
  {
    title: "End-to-End Management",
    description: "From concept to deployment, our platform provides complete project visibility and control.",
    icon: <MonitorSmartphone className="h-7 w-7 text-primary" />
  },
  {
    title: "Enhanced Security",
    description: "Built-in security protocols ensure your data and AI implementations remain protected at all times.",
    icon: <Shield className="h-7 w-7 text-primary" />
  },
  {
    title: "Accelerated Delivery",
    description: "Reduce time-to-market with our streamlined processes and pre-vetted talent pool.",
    icon: <Clock className="h-7 w-7 text-primary" />
  },
  {
    title: "Scalable Solutions",
    description: "Our AI implementations grow with your business, adapting to changing needs and expanding capabilities.",
    icon: <Zap className="h-7 w-7 text-primary" />
  }
];

export default ValueProposition;
