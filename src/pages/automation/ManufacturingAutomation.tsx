
import React, { useEffect } from 'react';
import MainLayout from '@/layout/MainLayout';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { 
  Hammer, 
  Truck, 
  PackageCheck, 
  BarChart2,
  Settings,
  Calendar
} from 'lucide-react';

const ManufacturingAutomation = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCalendlySchedule = () => {
    // Open Calendly in a new window
    window.open('https://calendly.com/wokkah/manufacturing-automation', '_blank');
  };

  return (
    <MainLayout>
      <Helmet>
        <title>Manufacturing Automation Solutions | Wokkah</title>
        <meta name="description" content="Optimize your manufacturing operations with AI-powered automation tools that enhance production efficiency and quality control." />
      </Helmet>

      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-cyan-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">Manufacturing Automation</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold">
              Transform Your Manufacturing with Intelligent Automation
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Optimize production processes, quality control, and supply chain management with our AI-powered manufacturing automation solutions.
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
            {manufacturingFeatures.map((feature, index) => (
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
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Manufacturing Operations?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's discuss how our manufacturing automation solutions can help you improve efficiency, quality, and supply chain management. Schedule a no-obligation consultation with our manufacturing automation experts.
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

const manufacturingFeatures = [
  {
    title: "Production Automation",
    description: "Optimize manufacturing processes with intelligent automation that improves throughput, reduces waste, and ensures consistency.",
    icon: <Hammer className="h-6 w-6 text-primary" />
  },
  {
    title: "Supply Chain Automation",
    description: "Streamline inventory management, procurement, and logistics with end-to-end supply chain automation.",
    icon: <Truck className="h-6 w-6 text-primary" />
  },
  {
    title: "Quality Control Automation",
    description: "Implement AI-powered quality inspection and testing to identify defects and ensure product quality.",
    icon: <PackageCheck className="h-6 w-6 text-primary" />
  },
  {
    title: "Predictive Maintenance",
    description: "Prevent equipment failures and downtime with AI-driven predictive maintenance alerts and scheduling.",
    icon: <Settings className="h-6 w-6 text-primary" />
  },
  {
    title: "Manufacturing Analytics",
    description: "Gain actionable insights with automated reporting on production efficiency, quality metrics, and operational performance.",
    icon: <BarChart2 className="h-6 w-6 text-primary" />
  },
  {
    title: "Process Optimization",
    description: "Continuously improve manufacturing processes with AI analysis that identifies bottlenecks and improvement opportunities.",
    icon: <Settings className="h-6 w-6 text-primary" />
  }
];

export default ManufacturingAutomation;
