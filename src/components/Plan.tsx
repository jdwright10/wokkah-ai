
import React, { useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';

const Plan = () => {
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
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Three Simple Steps to Project Success
          </h2>
          <p className="text-lg text-muted-foreground">
            We've simplified project execution down to a proven process that works for teams of all sizes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 relative">
            <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
              1
            </div>
            <h3 className="text-xl font-bold mb-4 pt-2">Connect Your Team</h3>
            <p className="text-muted-foreground mb-6">
              Invite your team members, assign roles, and get everyone on the same page in minutes.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-primary mr-2" />
                <span>Simple onboarding process</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-primary mr-2" />
                <span>Custom permission levels</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-primary mr-2" />
                <span>Integrates with existing tools</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 relative">
            <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
              2
            </div>
            <h3 className="text-xl font-bold mb-4 pt-2">Plan with AI Assistance</h3>
            <p className="text-muted-foreground mb-6">
              Let our AI help you break down complex projects into manageable tasks with realistic timelines.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-primary mr-2" />
                <span>AI-generated project templates</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-primary mr-2" />
                <span>Smart timeline suggestions</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-primary mr-2" />
                <span>Resource allocation guidance</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 relative">
            <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
              3
            </div>
            <h3 className="text-xl font-bold mb-4 pt-2">Execute with Clarity</h3>
            <p className="text-muted-foreground mb-6">
              Track progress, remove bottlenecks, and celebrate wins as your project moves forward.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-primary mr-2" />
                <span>Real-time status dashboards</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-primary mr-2" />
                <span>Automated progress updates</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-primary mr-2" />
                <span>Early issue detection</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plan;
