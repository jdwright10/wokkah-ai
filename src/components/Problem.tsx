
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
    <section ref={sectionRef} className="section bg-neutral-50 opacity-0 transition-all duration-700 transform translate-y-8">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Why Do Projects Keep Falling Behind?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 text-left">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100">
              <h3 className="text-xl font-bold mb-4">The Fragmentation Problem</h3>
              <p className="text-muted-foreground">
                Your team is using multiple tools that don't talk to each other. Information gets lost, deadlines slip, and frustration builds.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100">
              <h3 className="text-xl font-bold mb-4">The Complexity Trap</h3>
              <p className="text-muted-foreground">
                Project management tools are often designed for experts, leaving your team confused and resistant to adoption.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100">
              <h3 className="text-xl font-bold mb-4">The Visibility Gap</h3>
              <p className="text-muted-foreground">
                Leaders can't see what's happening across projects, making it impossible to identify bottlenecks until it's too late.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100">
              <h3 className="text-xl font-bold mb-4">The Execution Paralysis</h3>
              <p className="text-muted-foreground">
                Without a clear plan and accountability, teams get stuck in endless planning cycles instead of taking action.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
