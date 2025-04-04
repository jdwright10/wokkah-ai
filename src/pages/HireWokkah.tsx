
import React, { useEffect, useState } from 'react';
import MainLayout from '@/layout/MainLayout';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Briefcase, Calendar, Brain } from 'lucide-react';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import ProjectRequirementsForm from '@/components/hire/ProjectRequirementsForm';
import NextSteps from '@/components/hire/NextSteps';
import { toast } from 'sonner';

const HireWokkah = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Hire Wokkah', isCurrent: true }
  ];

  const handleFormSubmit = async (values: any) => {
    // Demo implementation - in a real app, you would send this to your backend
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Submitted project requirements:', values);
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleScheduleMeeting = () => {
    // Open the Calendly link
    window.open('https://calendly.com/iyanu-wokkah/30min', '_blank');
    toast.success("Opening scheduling calendar...");
  };

  return (
    <MainLayout customBreadcrumbs={<BreadcrumbNav items={breadcrumbItems} className="mb-6" />}>
      <Helmet>
        <title>Hire Wokkah for Your Project | Wokkah</title>
        <meta name="description" content="Let Wokkah's team of experts bring your project to life. Submit your requirements and we'll handle the rest." />
      </Helmet>

      <section className="pt-12 pb-16 bg-gradient-to-b from-white to-neutral-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="chip inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
              <Briefcase className="inline-block w-4 h-4 mr-1" /> Hire Wokkah
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold">
              Let Our Experts Bring Your Project to Life
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Share your project requirements and our team will handle everything from planning to execution, ensuring your vision becomes reality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ProjectRequirementsForm 
                onFormSubmit={handleFormSubmit}
                onScheduleMeeting={handleScheduleMeeting}
                isSubmitting={isSubmitting}
                isSubmitted={isSubmitted}
              />
              
              {/* Success Stories section removed */}
            </div>
            
            <div className="space-y-8">
              <NextSteps />
            </div>
          </div>
          
          <div className="mt-24 bg-primary/5 rounded-xl p-8 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Prefer to Talk First?</h3>
                  <p className="text-muted-foreground">
                    If you'd like to discuss your project before submitting requirements, you can schedule a no-obligation consultation with our team.
                  </p>
                </div>
              </div>
              <Button onClick={handleScheduleMeeting} size="lg" className="whitespace-nowrap">
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default HireWokkah;
