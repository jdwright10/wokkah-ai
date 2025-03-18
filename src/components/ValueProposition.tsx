
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

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
    
    const childElements = sectionRef.current?.querySelectorAll('.reveal-item');
    childElements?.forEach((el) => observer.observe(el));
    
    return () => {
      childElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  return (
    <section ref={sectionRef} className="section bg-white">
      <div className="container-tight text-center">
        <span className="chip reveal-item opacity-0 transition-all duration-700 transform translate-y-8">Our Promise</span>
        <h2 className="mt-4 text-3xl md:text-4xl font-bold reveal-item opacity-0 transition-all duration-700 transform translate-y-8">
          A Home That Works For You
        </h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto reveal-item opacity-0 transition-all duration-700 transform translate-y-8 text-balance">
          We understand that your home is more than just a place to live—it's where your family grows, memories are made, and life happens.
        </p>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {valuePropItems.map((item, index) => (
            <ValuePropItem 
              key={item.title}
              title={item.title}
              description={item.description}
              icon={item.icon}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ValuePropItemProps {
  title: string;
  description: string;
  icon: string;
  delay: number;
}

const ValuePropItem = ({ title, description, icon, delay }: ValuePropItemProps) => {
  return (
    <div 
      className={cn(
        "p-6 rounded-xl transition-all duration-700 transform opacity-0 translate-y-8 reveal-item",
        "hover:shadow-xl hover:-translate-y-1 border border-neutral-100"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 mx-auto">
        <img src={icon} alt={title} className="w-7 h-7" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground text-balance">{description}</p>
    </div>
  );
};

const valuePropItems = [
  {
    title: "Expert Guidance",
    description: "We walk with you every step of the way, from initial concept to final reveal.",
    icon: "https://api.iconify.design/lucide:lightbulb.svg?color=%230ea5e9"
  },
  {
    title: "Quality Craftsmanship",
    description: "Our team of skilled professionals bring precision and care to every detail of your project.",
    icon: "https://api.iconify.design/lucide:star.svg?color=%230ea5e9"
  },
  {
    title: "Transparent Process",
    description: "Clear communication, detailed timelines, and upfront pricing—no surprises.",
    icon: "https://api.iconify.design/lucide:check-circle.svg?color=%230ea5e9"
  }
];

export default ValueProposition;
