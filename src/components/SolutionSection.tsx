
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const SolutionSection = () => {
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
    <section ref={sectionRef} className="section bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="chip reveal-item opacity-0 transition-all duration-700 transform translate-y-8">Unlock Your Potential</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold reveal-item opacity-0 transition-all duration-700 transform translate-y-8">
            Unlock the full potential of Wokkah with a tailor-made experience
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutionItems.map((item, index) => (
            <div 
              key={item.title}
              className="relative p-6 rounded-xl border border-neutral-100 reveal-item opacity-0 transition-all duration-700 transform translate-y-8"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full aspect-square object-cover rounded-lg mb-6"
              />
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center reveal-item opacity-0 transition-all duration-700 transform translate-y-8">
          <Button size="lg">
            View All Features
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

const solutionItems = [
  {
    title: "AI-Powered Suggestions",
    description: "Get intelligent recommendations for your projects",
    image: "https://images.unsplash.com/photo-1677442135993-8cf27c5c0e1f?q=80&w=300&auto=format&fit=crop"
  },
  {
    title: "Real-time Collaboration",
    description: "Work together with your team no matter where they are",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=300&auto=format&fit=crop"
  },
  {
    title: "Customizable Workflows",
    description: "Adapt the platform to your specific needs and processes",
    image: "https://images.unsplash.com/photo-1661956602153-23384936a1d3?q=80&w=300&auto=format&fit=crop"
  },
  {
    title: "Advanced Analytics",
    description: "Track project progress and team performance with detailed insights",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=300&auto=format&fit=crop"
  }
];

export default SolutionSection;
