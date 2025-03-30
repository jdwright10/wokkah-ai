
import React, { useEffect } from 'react';
import MainLayout from '@/layout/MainLayout';
import { Helmet } from 'react-helmet';
import { MessagesSquare } from 'lucide-react';
import DemoRequestForm from '@/components/DemoRequestForm';

const CandidateCommunication = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <Helmet>
        <title>Candidate Communication | Hiring Automation | Wokkah</title>
        <meta name="description" content="Maintain engagement with automated, personalized messaging that keeps candidates informed throughout the process." />
      </Helmet>

      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">Candidate Communication</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold">
              Keep Candidates Engaged Throughout The Process
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Maintain engagement with automated, personalized messaging that keeps candidates informed throughout the hiring process while reflecting your company's voice and values.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 mb-16">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="w-24 h-24 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <MessagesSquare className="h-12 w-12 text-primary" />
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h2 className="text-2xl font-bold mb-4">How Our Candidate Communication Works</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold">Automated Workflow Messages</h3>
                    <p className="text-muted-foreground">Send personalized updates at each stage of the hiring process, from application receipt to final decision.</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold">Multi-Channel Delivery</h3>
                    <p className="text-muted-foreground">Reach candidates through their preferred communication channels including email, SMS, and messaging platforms.</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold">AI-Powered Chat Support</h3>
                    <p className="text-muted-foreground">Provide 24/7 candidate support with intelligent chatbots that can answer common questions about the role and process.</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold">Engagement Analytics</h3>
                    <p className="text-muted-foreground">Track communication effectiveness with open rates, response times, and candidate satisfaction metrics.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <DemoRequestForm serviceName="Candidate Communication" />
        </div>
      </section>
    </MainLayout>
  );
};

export default CandidateCommunication;
