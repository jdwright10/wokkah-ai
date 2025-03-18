
import React, { useEffect, useRef } from 'react';

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
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2">
            <span className="chip reveal-item opacity-0 transition-all duration-700 transform translate-y-8">The Solution</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold reveal-item opacity-0 transition-all duration-700 transform translate-y-8">
              Our proven process makes home transformation simple
            </h2>
            <p className="mt-6 text-lg text-muted-foreground reveal-item opacity-0 transition-all duration-700 transform translate-y-8 text-balance">
              We've designed a seamless renovation experience that puts you at the center, with clear communication and expert guidance every step of the way.
            </p>
            
            <div className="mt-8 space-y-6">
              {solutionItems.map((item, index) => (
                <div 
                  key={item.title}
                  className="flex items-start gap-4 reveal-item opacity-0 transition-all duration-700 transform translate-y-8"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-500 text-xl">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">{item.title}</h3>
                    <p className="text-muted-foreground mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-xl transform -rotate-3 scale-105"></div>
              <img 
                src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1626&q=80" 
                alt="Our renovation solution" 
                className="relative z-10 rounded-xl shadow-xl w-full object-cover reveal-item opacity-0 transition-all duration-700 transform translate-y-8"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const solutionItems = [
  {
    title: "Personalized Planning",
    description: "We take the time to understand your needs, style preferences, and budget to create a customized renovation plan."
  },
  {
    title: "Expert Project Management",
    description: "Our team handles all the details, scheduling, and coordination, so you don't have to worry about a thing."
  },
  {
    title: "Quality-Focused Execution",
    description: "Every nail, tile, and finish is implemented with precision and care by our skilled craftsmen."
  },
  {
    title: "Transparent Communication",
    description: "Regular updates and clear timeline expectations keep you informed every step of the way."
  }
];

export default SolutionSection;
