
import React, { useEffect, useRef } from 'react';

const Success = () => {
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
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Here's What Success Looks Like
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              When you use Wokkah, you transform how your organization delivers projects:
            </p>
            
            <div className="space-y-6">
              <div className="p-6 bg-green-50 rounded-lg border border-green-100">
                <h3 className="text-xl font-bold mb-2 text-green-700">On-Time Delivery</h3>
                <p className="text-muted-foreground">
                  Projects consistently delivered on time and within budget, with no more missed deadlines.
                </p>
              </div>
              
              <div className="p-6 bg-blue-50 rounded-lg border border-blue-100">
                <h3 className="text-xl font-bold mb-2 text-blue-700">Team Alignment</h3>
                <p className="text-muted-foreground">
                  Everyone knows exactly what they're responsible for and how their work contributes to the bigger picture.
                </p>
              </div>
              
              <div className="p-6 bg-purple-50 rounded-lg border border-purple-100">
                <h3 className="text-xl font-bold mb-2 text-purple-700">Visible Progress</h3>
                <p className="text-muted-foreground">
                  Leaders have real-time visibility into project status, allowing for informed decision-making.
                </p>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop"
              alt="Successful team collaboration"
              className="rounded-xl shadow-lg object-cover w-full h-full aspect-square"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Success;
