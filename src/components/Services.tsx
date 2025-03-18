
import React, { useEffect, useRef } from 'react';
import { 
  Code, 
  Brain, 
  Plug, 
  Shield, 
  AppWindow, 
  GraduationCap, 
  Megaphone 
} from 'lucide-react';

const Services = () => {
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
    <section ref={sectionRef} className="section bg-gradient-to-b from-white to-neutral-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="chip reveal-item opacity-0 transition-all duration-700 transform translate-y-8">Our Services</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold reveal-item opacity-0 transition-all duration-700 transform translate-y-8">
            Expert Services to Infuse AI into Your Business
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto reveal-item opacity-0 transition-all duration-700 transform translate-y-8">
            From concept to deployment, our platform connects you with expert freelancers for all your AI implementation needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceItems.map((item, index) => (
            <div 
              key={item.title}
              className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 reveal-item opacity-0 transition-all duration-700 transform translate-y-8"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                {item.icon}
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

const serviceItems = [
  {
    title: "Web Design",
    description: "Create responsive, modern websites that engage users and drive conversions",
    icon: <Code className="h-7 w-7 text-primary" />
  },
  {
    title: "AI Agent Creation",
    description: "Develop custom AI agents tailored to your unique business needs",
    icon: <Brain className="h-7 w-7 text-primary" />
  },
  {
    title: "AI Integration",
    description: "Seamlessly integrate AI capabilities into your existing systems and workflows",
    icon: <Plug className="h-7 w-7 text-primary" />
  },
  {
    title: "Cybersecurity",
    description: "Protect your business with AI-enhanced security solutions and protocols",
    icon: <Shield className="h-7 w-7 text-primary" />
  },
  {
    title: "App Development",
    description: "Build cross-platform applications with powerful AI features",
    icon: <AppWindow className="h-7 w-7 text-primary" />
  },
  {
    title: "Training Courses",
    description: "Develop AI-assisted training programs to upskill your team",
    icon: <GraduationCap className="h-7 w-7 text-primary" />
  },
  {
    title: "Marketing Automation",
    description: "Enhance your marketing efforts with AI-powered automation and insights",
    icon: <Megaphone className="h-7 w-7 text-primary" />
  },
  {
    title: "Machine Learning",
    description: "Implement custom machine learning solutions to extract value from your data",
    icon: <Brain className="h-7 w-7 text-primary" />
  }
];

export default Services;
