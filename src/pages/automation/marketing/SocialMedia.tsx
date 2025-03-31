
import React, { useEffect } from 'react';
import MainLayout from '@/layout/MainLayout';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Share2, ArrowLeft, Calendar } from 'lucide-react';
import PageHeader from '@/components/talent/PageHeader';

const SocialMedia = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCalendlySchedule = () => {
    window.open('https://calendly.com/wokkah/marketing-automation', '_blank');
  };

  return (
    <MainLayout>
      <Helmet>
        <title>Social Media Automation | Marketing Automation | Wokkah</title>
        <meta name="description" content="Schedule, publish, and analyze social media content across multiple platforms from a single dashboard." />
      </Helmet>

      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container">
          <Link to="/solutions/business-automation/marketing" className="inline-flex items-center text-primary hover:underline mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Marketing Automation
          </Link>
          
          <PageHeader 
            badge="Social Media Automation"
            title="Streamline Your Social Media Management"
            subtitle="Schedule, publish, and analyze social media content across multiple platforms from a single dashboard."
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

export default SocialMedia;
