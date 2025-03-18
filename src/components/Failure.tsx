
import React, { useEffect, useRef } from 'react';
import { XCircle } from 'lucide-react';

const Failure = () => {
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
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            What Happens If You Don't Act?
          </h2>
          
          <div className="bg-white p-8 rounded-xl shadow-md border border-red-100">
            <h3 className="text-xl font-bold mb-6 text-red-600 flex items-center">
              <XCircle className="w-6 h-6 mr-2" />
              The Cost of Staying the Course
            </h3>
            
            <div className="space-y-4">
              <div className="p-4 bg-red-50 rounded-lg">
                <p className="font-medium">
                  Without a change in how you execute projects, you risk:
                </p>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-1" />
                  <p>
                    <span className="font-medium">Continued Delays:</span> Projects will keep running behind schedule, frustrating stakeholders and team members.
                  </p>
                </li>
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-1" />
                  <p>
                    <span className="font-medium">Budget Overruns:</span> Without proper visibility and planning, costs will continue to spiral beyond estimates.
                  </p>
                </li>
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-1" />
                  <p>
                    <span className="font-medium">Team Burnout:</span> Confusion and frustration will lead to decreased morale and potentially higher turnover.
                  </p>
                </li>
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-1" />
                  <p>
                    <span className="font-medium">Competitive Disadvantage:</span> While you struggle with execution, competitors who streamline their processes will move faster.
                  </p>
                </li>
              </ul>
              
              <div className="p-4 bg-red-50 rounded-lg mt-6">
                <p className="font-medium text-center">
                  Can your organization afford another year of missed deadlines and unfulfilled potential?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Failure;
