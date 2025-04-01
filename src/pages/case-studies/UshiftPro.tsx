
import React, { useEffect, useRef } from 'react';
import MainLayout from '@/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Clock, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const UshiftProCaseStudy = () => {
  const sectionRefs = {
    overview: useRef<HTMLDivElement>(null),
    objectives: useRef<HTMLDivElement>(null),
    solution: useRef<HTMLDivElement>(null),
    results: useRef<HTMLDivElement>(null)
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
    
    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });
    
    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <MainLayout>
      {/* Hero section */}
      <section className="bg-gradient-to-b from-primary/10 to-white pt-32 pb-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                Case Study
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Ushift Pro's Rapid Digital Transformation with Wokkah</h1>
              <p className="text-xl text-muted-foreground mb-8">
                How Wokkah helped Ushift Pro establish a powerful online presence with AI-generated content in record time.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link to="/hire-wokkah">
                    Work With Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg">
                  <a href="https://ushiftpro.com" target="_blank" rel="noopener noreferrer">
                    Visit Ushift Pro
                  </a>
                </Button>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/fa3de825-fbc5-4d9e-ab1b-03becf94e8bb.png" 
                alt="Ushift Pro website on laptop and mobile"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Client Overview */}
      <section ref={sectionRefs.overview} className="py-16 opacity-0 transition-all duration-700 transform translate-y-8">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Client Overview</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ushift Pro is a leadership development platform dedicated to empowering professionals with essential leadership skills through concise, impactful courses tailored for busy schedules. Their offerings include a comprehensive curriculum, interactive content, and AI-powered tools designed to enhance leadership excellence.
            </p>
            <div className="flex items-center gap-4 p-6 bg-primary/5 rounded-lg">
              <div className="h-16 w-16 rounded-full bg-white shadow-md flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Industry</h3>
                <p>Education Technology / Leadership Development</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Project Objectives */}
      <section ref={sectionRefs.objectives} className="py-16 bg-neutral-50 opacity-0 transition-all duration-700 transform translate-y-8">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Project Objectives</h2>
            <p className="text-lg mb-8">
              Ushift Pro aimed to establish a robust online presence that would:
            </p>
            <div className="space-y-4">
              {[
                'Showcase their leadership development programs effectively.',
                'Provide an intuitive user experience for course access and engagement.',
                'Leverage AI-generated video content to enrich the learning experience.',
                'Deliver high-quality, comprehensive content to support their curriculum.'
              ].map((objective, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p>{objective}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Wokkah's Solution */}
      <section ref={sectionRefs.solution} className="py-16 opacity-0 transition-all duration-700 transform translate-y-8">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Wokkah's Solution</h2>
            <p className="text-lg mb-8">
              Wokkah undertook the project with a holistic approach, delivering:
            </p>
            
            <div className="grid gap-8">
              <div className="p-6 border border-neutral-200 rounded-xl">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">1</span>
                  Website Development
                </h3>
                <p>
                  Designed and developed a user-friendly, responsive website that aligns with Ushift Pro's brand identity and facilitates seamless navigation.
                </p>
              </div>
              
              <div className="p-6 border border-neutral-200 rounded-xl">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">2</span>
                  AI-Generated Video Production
                </h3>
                <p>
                  Produced over 900 microlearning videos using advanced AI technologies, ensuring consistency, scalability, and rapid deployment of content.
                </p>
              </div>
              
              <div className="p-6 border border-neutral-200 rounded-xl">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">3</span>
                  Content Creation
                </h3>
                <p>
                  Crafted all necessary written content, including course descriptions, FAQs, and instructional materials, to provide a comprehensive and engaging user experience.
                </p>
              </div>
            </div>
            
            <div className="mt-10 p-6 bg-primary/5 rounded-xl">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Clock className="w-6 h-6 text-primary mr-2" />
                Execution and Timeline
              </h3>
              <p className="mb-4">
                Demonstrating exceptional efficiency, Wokkah completed the entire project within a few days. This swift turnaround was achieved through:
              </p>
              <ul className="space-y-2 pl-6 list-disc">
                <li>Leveraging AI-driven tools for rapid content generation.</li>
                <li>Implementing agile development methodologies to streamline the website creation process.</li>
                <li>Maintaining close collaboration with Ushift Pro to ensure alignment with their vision and objectives.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Results and Impact */}
      <section ref={sectionRefs.results} className="py-16 bg-gradient-to-b from-primary/5 to-white opacity-0 transition-all duration-700 transform translate-y-8">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Results and Impact</h2>
            <p className="text-lg mb-8">
              The partnership between Ushift Pro and Wokkah yielded significant outcomes:
            </p>
            
            <div className="grid gap-6">
              <div className="flex gap-4 p-6 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Enhanced Online Presence</h3>
                  <p>The newly developed website effectively communicates Ushift Pro's offerings, attracting and engaging users.</p>
                </div>
              </div>
              
              <div className="flex gap-4 p-6 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Rich Content Library</h3>
                  <p>The extensive collection of AI-generated videos provides learners with valuable resources, enhancing their educational experience.</p>
                </div>
              </div>
              
              <div className="flex gap-4 p-6 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Operational Efficiency</h3>
                  <p>The rapid development and deployment allowed Ushift Pro to enter the market swiftly, gaining a competitive edge.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Conclusion */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="p-8 bg-primary/5 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
              <p className="text-lg mb-6">
                Wokkah's comprehensive and expedited approach enabled Ushift Pro to achieve a robust digital presence and deliver high-quality leadership development content efficiently. This case exemplifies the power of integrating AI technologies with agile development to meet ambitious project goals within tight timelines.
              </p>
              <Button asChild size="lg">
                <Link to="/hire-wokkah">
                  Start Your Project with Wokkah <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* More Case Studies */}
      <section className="py-16 bg-neutral-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">More Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* For now this is a placeholder for future case studies */}
            <div className="p-6 bg-white rounded-xl shadow-sm border border-neutral-200">
              <h3 className="font-bold text-xl mb-3">Ready to transform your business?</h3>
              <p className="text-muted-foreground mb-4">
                See how Wokkah can help you achieve your digital transformation goals with AI-powered solutions.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/hire-wokkah">
                  Work With Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default UshiftProCaseStudy;
