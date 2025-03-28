import React, { useEffect } from 'react';
import MainLayout from '@/layout/MainLayout';
import { Helmet } from 'react-helmet';
import { 
  Settings, 
  BarChart, 
  Workflow, 
  FileText,
  Clock,
  Calendar
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import DemoRequestForm from '@/components/DemoRequestForm';

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
        <meta name="description" content="Streamline your business operations with AI-powered automation tools that enhance efficiency, reduce costs, and improve decision-making." />
      </Helmet>

      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-orange-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">Operations Automation</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold">
              Transform Your Business Operations with Intelligent Automation
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Optimize workflows, streamline processes, and improve efficiency across your organization with our AI-powered operations automation solutions.
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
          
          <DemoRequestForm serviceName="Operations Automation" />
        </div>
      </section>
    </MainLayout>
  );
};

const operationsFeatures = [
  {
    title: "Workflow Automation",
    description: "Automate repetitive tasks, streamline processes, and improve efficiency with custom workflow automation solutions.",
    icon: <Workflow className="h-6 w-6 text-primary" />
  },
  {
    title: "Process Optimization",
    description: "Identify bottlenecks, eliminate waste, and optimize processes with AI-powered process analysis and improvement tools.",
    icon: <Settings className="h-6 w-6 text-primary" />
  },
  {
    title: "Document Automation",
    description: "Automate document creation, routing, and approval to reduce errors and improve compliance.",
    icon: <FileText className="h-6 w-6 text-primary" />
  },
  {
    title: "Task Management",
    description: "Assign tasks, track progress, and manage deadlines with automated task management tools.",
    icon: <Clock className="h-6 w-6 text-primary" />
  },
  {
    title: "Performance Monitoring",
    description: "Monitor key performance indicators (KPIs) and track progress towards goals with automated performance dashboards.",
    icon: <BarChart className="h-6 w-6 text-primary" />
  },
  {
    title: "Scheduling Automation",
    description: "Automate scheduling of meetings, appointments, and events to save time and improve coordination.",
    icon: <Calendar className="h-6 w-6 text-primary" />
  }
];

export default OperationsAutomation;
