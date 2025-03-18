
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Partners = () => {
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
    <section 
      ref={sectionRef} 
      className="section bg-white opacity-0 transition-all duration-700 transform translate-y-8"
    >
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="chip">Find Experts</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">
            Find experts for every phase of your project
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Connect with our network of certified partners to help you get the most out of Wokkah
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
          {partners.map((partner, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-4 hover:shadow-md rounded-lg transition-all">
              <img src={partner.logo} alt={partner.name} className="h-10 mb-2" />
              <span className="text-sm font-medium">{partner.name}</span>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button>
            View All Partners
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

const partners = [
  { name: "Google", logo: "https://api.iconify.design/logos:google.svg" },
  { name: "Microsoft", logo: "https://api.iconify.design/logos:microsoft.svg" },
  { name: "IBM", logo: "https://api.iconify.design/logos:ibm.svg" },
  { name: "AWS", logo: "https://api.iconify.design/logos:aws.svg" },
  { name: "Oracle", logo: "https://api.iconify.design/logos:oracle.svg" },
  { name: "Slack", logo: "https://api.iconify.design/logos:slack.svg" },
  { name: "Salesforce", logo: "https://api.iconify.design/logos:salesforce.svg" },
  { name: "Adobe", logo: "https://api.iconify.design/logos:adobe.svg" },
  { name: "Zoom", logo: "https://api.iconify.design/logos:zoom.svg" },
  { name: "GitHub", logo: "https://api.iconify.design/logos:github-icon.svg" },
  { name: "Atlassian", logo: "https://api.iconify.design/logos:atlassian.svg" },
  { name: "Figma", logo: "https://api.iconify.design/logos:figma.svg" }
];

export default Partners;
