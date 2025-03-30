
import React, { useEffect } from 'react';
import MainLayout from '@/layout/MainLayout';
import { Helmet } from 'react-helmet';
import { ClipboardCheck } from 'lucide-react';
import DemoRequestForm from '@/components/DemoRequestForm';

const SkillsAssessment = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <Helmet>
        <title>Skills Assessment | Hiring Automation | Wokkah</title>
        <meta name="description" content="Automate pre-employment assessments to evaluate candidates' qualifications and job-readiness with customizable tests." />
      </Helmet>

      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">Skills Assessment</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold">
              Verify Candidate Abilities With Precision
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Automate pre-employment assessments to evaluate candidates' qualifications and job-readiness with customizable tests that accurately predict on-the-job performance.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 mb-16">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="w-24 h-24 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <ClipboardCheck className="h-12 w-12 text-primary" />
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h2 className="text-2xl font-bold mb-4">How Our Skills Assessment Works</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold">Customizable Assessment Library</h3>
                    <p className="text-muted-foreground">Choose from hundreds of pre-built tests for technical skills, soft skills, role-specific knowledge, and cognitive abilities.</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold">Automated Distribution & Proctoring</h3>
                    <p className="text-muted-foreground">Send assessments to candidates with flexible scheduling and AI-powered proctoring to ensure test integrity.</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold">Intelligent Scoring</h3>
                    <p className="text-muted-foreground">Get instant, objective scoring with detailed performance analytics and benchmarking against industry standards.</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold">Predictive Insights</h3>
                    <p className="text-muted-foreground">Leverage AI to predict future job performance based on assessment results and historical hiring data.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <DemoRequestForm serviceName="Skills Assessment" />
        </div>
      </section>
    </MainLayout>
  );
};

export default SkillsAssessment;
