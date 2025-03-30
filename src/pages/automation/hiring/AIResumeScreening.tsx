
import React, { useEffect } from 'react';
import MainLayout from '@/layout/MainLayout';
import { Helmet } from 'react-helmet';
import { Search } from 'lucide-react';
import DemoRequestForm from '@/components/DemoRequestForm';

const AIResumeScreening = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <Helmet>
        <title>AI Resume Screening | Hiring Automation | Wokkah</title>
        <meta name="description" content="Efficiently analyze resumes and applications to identify the best candidates based on skills, experience, and job requirements." />
      </Helmet>

      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">AI Resume Screening</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold">
              Find The Best Candidates Faster
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Efficiently analyze resumes and applications to identify the best candidates based on skills, experience, and job requirements with our AI-powered screening technology.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 mb-16">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="w-24 h-24 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Search className="h-12 w-12 text-primary" />
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h2 className="text-2xl font-bold mb-4">How Our AI Resume Screening Works</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold">Intelligent Resume Parsing</h3>
                    <p className="text-muted-foreground">Our AI accurately extracts and categorizes information from resumes in any format, including skills, education, work history, and achievements.</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold">Custom Matching Algorithms</h3>
                    <p className="text-muted-foreground">Tailor screening criteria to your specific job requirements, company culture, and industry standards.</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold">Unbiased Evaluation</h3>
                    <p className="text-muted-foreground">Reduce unconscious bias in the screening process with objective, skills-based assessment.</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold">Ranked Candidate Selection</h3>
                    <p className="text-muted-foreground">Receive a prioritized list of top candidates with match scores and highlighted qualifications.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <DemoRequestForm serviceName="AI Resume Screening" />
        </div>
      </section>
    </MainLayout>
  );
};

export default AIResumeScreening;
