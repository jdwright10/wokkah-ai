
import React, { useEffect, useRef } from 'react';

const Problem = () => {
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
    <section ref={sectionRef} className="section py-16 md:py-24 bg-neutral-50 opacity-0 transition-all duration-700 transform translate-y-8">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Why is Implementing AI So Challenging?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 text-left">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100">
              <h3 className="text-xl font-bold mb-4">The Talent Gap</h3>
              <p className="text-muted-foreground">
                Finding the right AI specialists and developers who understand your business needs is time-consuming and expensive.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100">
              <h3 className="text-xl font-bold mb-4">The Communication Barrier</h3>
              <p className="text-muted-foreground">
                Translating your business vision into technical specifications that developers can implement accurately is frustrating.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100">
              <h3 className="text-xl font-bold mb-4">The Visibility Problem</h3>
              <p className="text-muted-foreground">
                Not knowing what's happening with your project leads to anxiety, scope creep, and mismatched expectations.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100">
              <h3 className="text-xl font-bold mb-4">The Integration Challenge</h3>
              <p className="text-muted-foreground">
                Connecting AI solutions with your existing systems and workflows often feels like an overwhelming technical puzzle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
