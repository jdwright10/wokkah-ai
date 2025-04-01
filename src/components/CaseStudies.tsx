
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CaseStudies = () => {
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
      className="py-16 bg-gradient-to-b from-white to-neutral-50 opacity-0 transition-all duration-700 transform translate-y-8"
    >
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Success Stories</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how Wokkah has helped businesses achieve their digital transformation goals through AI innovation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Ushift Pro Case Study */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-neutral-100 flex flex-col">
            <div className="aspect-video overflow-hidden">
              <img 
                src="/lovable-uploads/516a5532-27cd-40ad-bc6d-8422c3f0479e.png" 
                alt="Ushift Pro website on laptop and mobile" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <div className="mb-4">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  Leadership Development
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Ushift Pro's Rapid Digital Transformation</h3>
              <p className="text-muted-foreground mb-6 flex-grow">
                How Wokkah helped Ushift Pro establish a robust online presence with AI-generated video content through accelerated development.
              </p>
              <div className="mt-auto">
                <Button asChild variant="outline">
                  <Link to="/case-studies/ushift-pro" className="flex items-center">
                    Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Coming Soon Placeholder */}
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl flex flex-col justify-center items-center p-12 text-center border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">More Success Stories Coming Soon</h3>
            <p className="text-muted-foreground mb-6">
              We're working to bring you more examples of how Wokkah is transforming businesses with AI.
            </p>
            <Button asChild>
              <Link to="/hire-wokkah">
                Become Our Next Success Story
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/hire-wokkah">
              Work With Us <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
