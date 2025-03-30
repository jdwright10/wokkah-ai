
import React, { useEffect } from 'react';
import MainLayout from '@/layout/MainLayout';
import { Helmet } from 'react-helmet';
import { UserPlus } from 'lucide-react';
import DemoRequestForm from '@/components/DemoRequestForm';

const JobDistribution = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <Helmet>
        <title>Job Distribution | Hiring Automation | Wokkah</title>
        <meta name="description" content="Automatically post open positions to multiple job boards, social media, and career sites to maximize applicant reach." />
      </Helmet>

      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">Job Distribution</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold">
              Amplify Your Job Posting Reach
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Automatically post open positions to multiple job boards, social media, and career sites to maximize applicant reach and find the best talent faster.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 mb-16">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="w-24 h-24 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <UserPlus className="h-12 w-12 text-primary" />
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h2 className="text-2xl font-bold mb-4">How Our Job Distribution Works</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold">Centralized Job Creation</h3>
                    <p className="text-muted-foreground">Create your job posting once in our platform with all details, requirements, and company information.</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold">Multi-Channel Distribution</h3>
                    <p className="text-muted-foreground">Automatically publish to popular job boards, career sites, social media, and your company website with one click.</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold">Smart Optimization</h3>
                    <p className="text-muted-foreground">Our AI optimizes job descriptions for each platform to maximize visibility and candidate engagement.</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold">Applicant Tracking</h3>
                    <p className="text-muted-foreground">Centralize all applications regardless of source, providing unified analytics on hiring campaign performance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <DemoRequestForm serviceName="Job Distribution" />
        </div>
      </section>
    </MainLayout>
  );
};

export default JobDistribution;
