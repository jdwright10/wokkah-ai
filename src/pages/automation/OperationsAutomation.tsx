
import React, { useEffect } from 'react';
import MainLayout from '@/layout/MainLayout';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { 
  Settings, 
  LayoutGrid, 
  Zap, 
  BarChart2,
  Layers,
  Calendar
} from 'lucide-react';

const OperationsAutomation = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCalendlySchedule = () => {
    // Open Calendly in a new window
    window.open('https://calendly.com/wokkah/operations-automation', '_blank');
  };

  return (
    <MainLayout>
      <Helmet>
        <title>Operations Automation Solutions | Wokkah</title>
        <meta name="description" content="Optimize your business operations with AI-powered automation tools that streamline workflows and boost efficiency." />
      </Helmet>

      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-green-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">Operations Automation</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold">
              Streamline Your Operations with Intelligent Automation
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Optimize workflows, reduce manual tasks, and increase operational efficiency with our AI-powered automation solutions.
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
            {operationsFeatures.map((feature, index) => (
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
            <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Operations?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's discuss how our operations automation solutions can help you streamline processes and boost efficiency. Schedule a no-obligation consultation with our operations automation experts.
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

const operationsFeatures = [
  {
    title: "Workflow Automation",
    description: "Streamline complex business processes with automated workflows that reduce manual tasks and human error.",
    icon: <LayoutGrid className="h-6 w-6 text-primary" />
  },
  {
    title: "Process Optimization",
    description: "Identify bottlenecks and inefficiencies with AI-powered process analysis and continuous improvement.",
    icon: <Settings className="h-6 w-6 text-primary" />
  },
  {
    title: "Task Management",
    description: "Automate task assignment, tracking, and notifications to ensure deadlines are met and nothing falls through the cracks.",
    icon: <Layers className="h-6 w-6 text-primary" />
  },
  {
    title: "Document Processing",
    description: "Extract data from documents, automate approvals, and streamline document management workflows.",
    icon: <Layers className="h-6 w-6 text-primary" />
  },
  {
    title: "Operational Analytics",
    description: "Gain real-time insights into operational performance with automated data collection and visualization.",
    icon: <BarChart2 className="h-6 w-6 text-primary" />
  },
  {
    title: "Integration Automation",
    description: "Connect your business systems and automate data flow between applications without complex coding.",
    icon: <Zap className="h-6 w-6 text-primary" />
  }
];

export default OperationsAutomation;
