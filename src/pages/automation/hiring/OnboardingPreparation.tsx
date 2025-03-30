
import React, { useEffect } from 'react';
import MainLayout from '@/layout/MainLayout';
import { Helmet } from 'react-helmet';
import { FileText } from 'lucide-react';
import DemoRequestForm from '@/components/DemoRequestForm';

const OnboardingPreparation = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <Helmet>
        <title>Onboarding Preparation | Hiring Automation | Wokkah</title>
        <meta name="description" content="Streamline the transition from candidate to employee with automated document collection and onboarding workflows." />
      </Helmet>

      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">Onboarding Preparation</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold">
              Seamless Transition From Candidate To Employee
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Streamline the transition from candidate to employee with automated document collection and onboarding workflows that reduce administrative burden and get new hires productive faster.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 mb-16">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="w-24 h-24 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <FileText className="h-12 w-12 text-primary" />
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h2 className="text-2xl font-bold mb-4">How Our Onboarding Preparation Works</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold">Pre-Start Documentation</h3>
                    <p className="text-muted-foreground">Automate the collection and verification of essential paperwork including tax forms, contract signing, and compliance documents.</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold">Equipment & Access Provisioning</h3>
                    <p className="text-muted-foreground">Trigger automated workflows to prepare workspace, technology, and system access before the employee's first day.</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold">Learning Path Creation</h3>
                    <p className="text-muted-foreground">Generate personalized training schedules based on the new hire's role, experience, and skill gaps identified during hiring.</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold">Team Integration</h3>
                    <p className="text-muted-foreground">Facilitate connections with team members and key stakeholders through automated introductions and welcome activities.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <DemoRequestForm serviceName="Onboarding Preparation" />
        </div>
      </section>
    </MainLayout>
  );
};

export default OnboardingPreparation;
