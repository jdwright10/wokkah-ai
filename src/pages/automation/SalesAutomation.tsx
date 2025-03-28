import React, { useEffect } from 'react';
import MainLayout from '@/layout/MainLayout';
import { Helmet } from 'react-helmet';
import { 
  DollarSign, 
  BarChart, 
  Users, 
  MessageSquare,
  FileText,
  Target
} from 'lucide-react';
import DemoRequestForm from '@/components/DemoRequestForm';

const SalesAutomation = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <Helmet>
        <title>Sales Automation Solutions | Wokkah</title>
        <meta name="description" content="Boost your sales efficiency with AI-powered automation tools for lead management, proposal generation, and pipeline optimization." />
      </Helmet>

      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-orange-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">Sales Automation</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold">
              Accelerate Your Sales with Intelligent Automation
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Drive more revenue with AI-powered sales automation tools that streamline lead management, proposal generation, and pipeline optimization.
            </p>
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
          
          <DemoRequestForm serviceName="Sales Automation" />
        </div>
      </section>
    </MainLayout>
  );
};

const salesFeatures = [
  {
    title: "Lead Scoring & Routing",
    description: "Automatically identify and prioritize your most promising leads, then route them to the right sales reps.",
    icon: <Target className="h-6 w-6 text-primary" />
  },
  {
    title: "Automated Email Campaigns",
    description: "Create personalized email sequences that nurture leads and drive engagement with minimal manual effort.",
    icon: <MessageSquare className="h-6 w-6 text-primary" />
  },
  {
    title: "Proposal Generation",
    description: "Generate customized sales proposals quickly and easily with pre-approved templates and automated data population.",
    icon: <FileText className="h-6 w-6 text-primary" />
  },
  {
    title: "Pipeline Management",
    description: "Visualize your sales pipeline, track deal progress, and identify bottlenecks with automated reporting and analytics.",
    icon: <BarChart className="h-6 w-6 text-primary" />
  },
  {
    title: "Customer Relationship Management",
    description: "Maintain detailed records of customer interactions, preferences, and purchase history for personalized sales experiences.",
    icon: <Users className="h-6 w-6 text-primary" />
  },
  {
    title: "Sales Performance Analytics",
    description: "Gain insights into sales team performance, identify top performers, and optimize sales strategies with automated reporting.",
    icon: <DollarSign className="h-6 w-6 text-primary" />
  }
];

export default SalesAutomation;
