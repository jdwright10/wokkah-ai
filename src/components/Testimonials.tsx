
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
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
      className="section bg-gradient-to-b from-neutral-50 to-white opacity-0 transition-all duration-700 transform translate-y-8"
    >
      <div className="container-tight">
        <div className="text-center">
          <span className="chip">Happy Homeowners</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">
            What our clients are saying
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Don't just take our word for it—hear from homeowners who've experienced our difference firsthand.
          </p>
        </div>
        
        <div className="mt-12 relative">
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
                  <div className="flex items-center justify-center md:justify-start">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{testimonial.name}</h3>
                      <p className="text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 relative">
                    <Quote className="absolute -top-3 -left-3 w-8 h-8 text-primary/20" />
                    <p className="text-lg md:text-xl italic text-balance">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  
                  <div className="mt-6 flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i} 
                          className={cn(
                            "w-5 h-5 mr-1", 
                            i < testimonial.rating ? "text-yellow-400" : "text-gray-300"
                          )}
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 text-muted-foreground">{testimonial.project}</span>
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
    name: "Michael & Sarah Johnson",
    location: "San Francisco, CA",
    quote: "Working with Wokkah transformed our outdated kitchen into a stunning space that's now the heart of our home. The team was professional, transparent, and truly cared about our vision.",
    rating: 5,
    project: "Kitchen Remodel",
    avatar: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
  },
  {
    name: "Jennifer Williams",
    location: "Los Angeles, CA",
    quote: "I was nervous about renovating my bathroom, but Wokkah made the process so easy. They handled everything from design to execution, and the results exceeded my expectations.",
    rating: 5,
    project: "Bathroom Renovation",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
  },
  {
    name: "Robert & Lisa Chen",
    location: "Seattle, WA",
    quote: "Our whole-home renovation could have been overwhelming, but Wokkah's organized approach and constant communication made it stress-free. We love our transformed space!",
    rating: 5,
    project: "Whole Home Renovation",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
  }
];

export default Testimonials;
