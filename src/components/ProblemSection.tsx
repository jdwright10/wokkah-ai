
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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="chip reveal-item opacity-0 transition-all duration-700 transform translate-y-8">Beyond Just a Tool</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold reveal-item opacity-0 transition-all duration-700 transform translate-y-8">
            More than just a prototyping platform
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featureItems.map((item, index) => (
            <div 
              key={item.title}
              className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 reveal-item opacity-0 transition-all duration-700 transform translate-y-8"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <img src={item.icon} alt={item.title} className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const featureItems = [
  {
    title: "AI Assets",
    description: "Access a library of pre-built AI components and templates to jumpstart your projects",
    icon: "https://api.iconify.design/lucide:box.svg?color=%230ea5e9"
  },
  {
    title: "Customizable View",
    description: "Tailor the interface to match your workflow and preferences",
    icon: "https://api.iconify.design/lucide:layout-dashboard.svg?color=%230ea5e9"
  },
  {
    title: "Interactive Demos",
    description: "Create interactive prototypes to showcase your ideas and get feedback",
    icon: "https://api.iconify.design/lucide:play.svg?color=%230ea5e9"
  },
  {
    title: "API Integration",
    description: "Connect to external data sources and services through our API",
    icon: "https://api.iconify.design/lucide:link.svg?color=%230ea5e9"
  },
  {
    title: "Version Control",
    description: "Track changes and collaborate with your team seamlessly",
    icon: "https://api.iconify.design/lucide:git-branch.svg?color=%230ea5e9"
  },
  {
    title: "Advanced Analytics",
    description: "Gain insights into your projects and team performance",
    icon: "https://api.iconify.design/lucide:bar-chart.svg?color=%230ea5e9"
  }
];

export default ProblemSection;
