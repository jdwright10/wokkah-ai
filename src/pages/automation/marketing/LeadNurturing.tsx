
import React, { useEffect } from 'react';
import MainLayout from '@/layout/MainLayout';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Users, ArrowLeft, Calendar } from 'lucide-react';
import PageHeader from '@/components/talent/PageHeader';

const LeadNurturing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCalendlySchedule = () => {
    window.open('https://calendly.com/wokkah/marketing-automation', '_blank');
  };

  return (
    <MainLayout>
      <Helmet>
        <title>Lead Scoring & Nurturing | Marketing Automation | Wokkah</title>
        <meta name="description" content="Automatically identify your most promising leads and guide them through personalized conversion journeys." />
      </Helmet>

      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container">
          <Link to="/solutions/business-automation/marketing" className="inline-flex items-center text-primary hover:underline mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Marketing Automation
          </Link>
          
          <PageHeader 
            badge="Lead Scoring & Nurturing"
            title="Convert More Leads with Intelligent Nurturing"
            subtitle="Automatically identify your most promising leads and guide them through personalized conversion journeys."
          />
          
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              onClick={handleCalendlySchedule}
            >
              <Calendar className="mr-2" /> Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default LeadNurturing;
