
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const SocialProof = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
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
      <div className="container-tight">
        <div className="text-center mb-12">
          <span className="chip">Customer Success Stories</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">
            Teams That Have Transformed Their Project Execution
          </h2>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden rounded-xl bg-white shadow-xl border border-neutral-100">
            <div 
              className="transition-transform duration-500 ease-in-out flex"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="w-full flex-shrink-0 p-8 md:p-12"
                >
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-full md:w-1/3">
                      <div className="aspect-square rounded-xl overflow-hidden mb-4">
                        <img 
                          src={testimonial.image}
                          alt={`${testimonial.company} team`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-center md:text-left">
                        <h3 className="font-bold text-lg">{testimonial.name}</h3>
                        <p className="text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                      </div>
                    </div>
                    
                    <div className="w-full md:w-2/3">
                      <div className="relative">
                        <Quote className="absolute -top-3 -left-3 w-8 h-8 text-primary/20" />
                        <p className="text-lg md:text-xl italic mb-6 text-balance">
                          "{testimonial.quote}"
                        </p>
                        
                        <div className="mt-6">
                          <h4 className="font-bold text-primary">Results:</h4>
                          <ul className="mt-3 space-y-2">
                            {testimonial.results.map((result, idx) => (
                              <li key={idx} className="flex items-center">
                                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                                {result}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 left-4">
            <button 
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 right-4">
            <button 
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          
          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full mx-1 transition-colors",
                  index === currentIndex ? "bg-primary" : "bg-neutral-300"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Project Director",
    company: "GlobalTech",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=300&auto=format&fit=crop",
    quote: "Before Wokkah, we were constantly fighting fires and missing deadlines. Now our projects run smoothly and our team actually enjoys the process. The AI assistance feels like having an extra team member who never sleeps.",
    results: [
      "40% faster project completion",
      "Reduced meeting time by 60%",
      "Improved team satisfaction scores by 45%"
    ]
  },
  {
    name: "Marcus Johnson",
    role: "Head of Operations",
    company: "Nexus Solutions",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=300&auto=format&fit=crop",
    quote: "As our company grew, our project management became increasingly complex. Wokkah simplified everything with its intuitive interface and powerful AI capabilities. Now even our most junior team members can contribute effectively.",
    results: [
      "Scaled from 5 to 25 concurrent projects",
      "Onboarding time reduced from weeks to days",
      "93% of team members report feeling more confident"
    ]
  },
  {
    name: "Anisha Patel",
    role: "CEO",
    company: "InnovateCorp",
    image: "https://images.unsplash.com/photo-1565793298595-7303321a4154?q=80&w=300&auto=format&fit=crop",
    quote: "When investors ask how we manage to execute so rapidly with a small team, I always mention Wokkah. It's our secret weapon for staying agile while maintaining quality. The ROI has been incredible - it paid for itself in the first month.",
    results: [
      "Launched 12 new products in 18 months",
      "Reduced project costs by 35%",
      "Attracted $3.5M in additional investment"
    ]
  }
];

export default SocialProof;
