
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MainLayout from '@/layout/MainLayout';
import { Helmet } from 'react-helmet';

const CaseStudies = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <Helmet>
        <title>Case Studies | Wokkah - AI Solutions for Business</title>
        <meta name="description" content="See how Wokkah has helped businesses achieve their digital transformation goals through AI innovation" />
      </Helmet>

      <section className="pt-32 pb-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Success Stories</h1>
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
          
          <div className="text-center mt-8">
            <h2 className="text-2xl font-bold mb-4">Ready to create your own success story?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how Wokkah's AI solutions can transform your business operations and drive exceptional results.
            </p>
            <Button asChild size="lg">
              <Link to="/hire-wokkah" className="flex items-center">
                Work With Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default CaseStudies;
