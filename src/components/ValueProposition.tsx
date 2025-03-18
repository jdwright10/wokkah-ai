
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
        <span className="chip reveal-item opacity-0 transition-all duration-700 transform translate-y-8">Trusted By</span>
        <div className="mt-8 grid grid-cols-3 md:grid-cols-6 gap-8 items-center reveal-item opacity-0 transition-all duration-700 transform translate-y-8">
          <img src="https://api.iconify.design/logos:google.svg" alt="Google" className="h-8 mx-auto opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
          <img src="https://api.iconify.design/logos:microsoft.svg" alt="Microsoft" className="h-8 mx-auto opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
          <img src="https://api.iconify.design/logos:ibm.svg" alt="IBM" className="h-8 mx-auto opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
          <img src="https://api.iconify.design/logos:amazon.svg" alt="Amazon" className="h-8 mx-auto opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
          <img src="https://api.iconify.design/logos:slack.svg" alt="Slack" className="h-8 mx-auto opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
          <img src="https://api.iconify.design/logos:adobe.svg" alt="Adobe" className="h-8 mx-auto opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
        </div>
        
        <h2 className="mt-16 text-3xl md:text-4xl font-bold reveal-item opacity-0 transition-all duration-700 transform translate-y-8">
          Build your ideas at the speed of AI
        </h2>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
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
    title: "Collaboration",
    description: "Work together with your team in real-time on AI projects",
    icon: "https://api.iconify.design/lucide:users.svg?color=%230ea5e9"
  },
  {
    title: "Integration",
    description: "Connect with your existing tools and workflows seamlessly",
    icon: "https://api.iconify.design/lucide:plug.svg?color=%230ea5e9"
  },
  {
    title: "Automation",
    description: "Automate repetitive tasks and focus on what matters",
    icon: "https://api.iconify.design/lucide:zap.svg?color=%230ea5e9"
  },
  {
    title: "No-Code",
    description: "Build powerful AI applications without writing code",
    icon: "https://api.iconify.design/lucide:code.svg?color=%230ea5e9"
  }
];

export default ValueProposition;
