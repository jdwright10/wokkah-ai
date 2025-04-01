
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Zap, Users, ArrowRight, ExternalLink } from 'lucide-react';

const HomeOptions = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
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
    <section id="home-options" className="py-16 bg-white">
      <div className="container">
        <div 
          ref={sectionRef} 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 opacity-0 transition-all duration-700 transform translate-y-8"
        >
          {/* Option 1: Hire Wokkah */}
          <Card className="shadow-md hover:shadow-lg transition-shadow border-t-4 border-t-blue-500">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Briefcase className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle className="text-xl">Hire Wokkah to Create Your Project</CardTitle>
              <CardDescription>
                Get expert assistance to bring your vision to life with our team of professionals
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our team of experts will handle everything from planning to execution, 
                ensuring your project is completed to the highest standards.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full group" asChild>
                <Link to="/hire-wokkah">
                  Get Started <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Option 2: Business Automation - Removed "Turnkey" */}
          <Card className="shadow-md hover:shadow-lg transition-shadow border-t-4 border-t-purple-500">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle className="text-xl">Solutions for Business Automation</CardTitle>
              <CardDescription>
                Streamline operations and boost productivity with our automation tools
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Transform your business processes with AI-powered automation solutions 
                designed to save time, reduce errors, and increase efficiency.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full group" asChild>
                <Link to="/solutions/business-automation">
                  Explore Solutions <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Option 3: Find Talent - Updated to link to wokkah.com */}
          <Card className="shadow-md hover:shadow-lg transition-shadow border-t-4 border-t-green-500">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle className="text-xl">Freelance Marketplace</CardTitle>
              <CardDescription>
                Connect with skilled professionals for your specific project needs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Browse our curated network of pre-vetted freelancers and find the 
                perfect talent to bring your ideas to reality on your terms.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full group" asChild>
                <a href="https://wokkah.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full">
                  Find Talent <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HomeOptions;
