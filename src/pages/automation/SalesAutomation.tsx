
import React, { useEffect } from 'react';
import MainLayout from '@/layout/MainLayout';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { 
  DollarSign, 
  Users, 
  MessageSquare, 
  BarChart3,
  Calendar,
  Layers,
  ArrowUpRight
} from 'lucide-react';

const SalesAutomation = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCalendlySchedule = () => {
    // Open Calendly in a new window
    window.open('https://calendly.com/wokkah/sales-automation', '_blank');
  };

  return (
    <MainLayout>
      <Helmet>
        <title>Sales Automation Solutions | Wokkah</title>
        <meta name="description" content="Streamline your sales processes with AI-powered automation tools that enhance lead management, proposal generation, and pipeline optimization." />
      </Helmet>

      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">Sales Automation</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold">
              Transform Your Sales Process with Intelligent Automation
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Boost conversion rates, streamline prospect engagement, and optimize your sales pipeline with our AI-powered sales automation solutions.
            </p>
            <Button 
              size="lg" 
              className="mt-8"
              onClick={handleCalendlySchedule}
            >
              Schedule a Consultation
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {salesFeatures.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-md border border-neutral-200 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Sales Process?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's discuss how our sales automation solutions can help you increase efficiency and drive more revenue. Schedule a no-obligation consultation with our sales automation experts.
            </p>
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

const salesFeatures = [
  {
    title: "Lead Management Automation",
    description: "Automate lead tracking, scoring, and nurturing to ensure no qualified prospects fall through the cracks.",
    icon: <Users className="h-6 w-6 text-primary" />
  },
  {
    title: "Proposal Generation",
    description: "Create customized, professional proposals in minutes with AI-powered templates and content recommendations.",
    icon: <Layers className="h-6 w-6 text-primary" />
  },
  {
    title: "Sales Pipeline Optimization",
    description: "Visualize and optimize your sales pipeline with automated workflows and real-time insights.",
    icon: <BarChart3 className="h-6 w-6 text-primary" />
  },
  {
    title: "Sales Communication",
    description: "Automate follow-ups, appointment scheduling, and personalized messaging to prospects and customers.",
    icon: <MessageSquare className="h-6 w-6 text-primary" />
  },
  {
    title: "Sales Analytics & Forecasting",
    description: "Gain actionable insights with automated reporting on sales metrics, trends, and accurate revenue forecasting.",
    icon: <ArrowUpRight className="h-6 w-6 text-primary" />
  },
  {
    title: "Commission Calculation",
    description: "Streamline sales compensation with automated commission calculations and transparent tracking.",
    icon: <DollarSign className="h-6 w-6 text-primary" />
  }
];

export default SalesAutomation;
