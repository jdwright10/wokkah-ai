
import React, { useEffect } from 'react';
import MainLayout from '@/layout/MainLayout';
import { Helmet } from 'react-helmet';
import { Calendar } from 'lucide-react';
import DemoRequestForm from '@/components/DemoRequestForm';

const InterviewScheduling = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <Helmet>
        <title>Interview Scheduling | Hiring Automation | Wokkah</title>
        <meta name="description" content="Eliminate scheduling hassles with automated calendar coordination between candidates and hiring managers." />
      </Helmet>

      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">Interview Scheduling</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold">
              Streamline Your Interview Process
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Eliminate scheduling hassles with automated calendar coordination between candidates and hiring managers, reducing time-to-hire and improving the candidate experience.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 mb-16">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="w-24 h-24 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Calendar className="h-12 w-12 text-primary" />
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h2 className="text-2xl font-bold mb-4">How Our Interview Scheduling Works</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold">Calendar Integration</h3>
                    <p className="text-muted-foreground">Seamlessly sync with Google Calendar, Outlook, and other calendar systems to automatically detect availability.</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold">Self-Service Booking</h3>
                    <p className="text-muted-foreground">Allow candidates to select interview times from available slots, eliminating back-and-forth emails.</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold">Panel Coordination</h3>
                    <p className="text-muted-foreground">Easily schedule complex panel interviews by finding optimal times when all interviewers are available.</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold">Automated Reminders</h3>
                    <p className="text-muted-foreground">Send customized reminders to both candidates and interviewers to reduce no-shows and last-minute cancellations.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <DemoRequestForm serviceName="Interview Scheduling" />
        </div>
      </section>
    </MainLayout>
  );
};

export default InterviewScheduling;
