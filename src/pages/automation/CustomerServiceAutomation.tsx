
import React, { useEffect } from 'react';
import MainLayout from '@/layout/MainLayout';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { 
  Building, 
  MessageSquare, 
  BarChart, 
  Users,
  Headphones,
  Calendar
} from 'lucide-react';

const CustomerServiceAutomation = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCalendlySchedule = () => {
    // Open Calendly in a new window
    window.open('https://calendly.com/wokkah/customer-service-automation', '_blank');
  };

  return (
    <MainLayout>
      <Helmet>
        <title>Customer Service Automation Solutions | Wokkah</title>
        <meta name="description" content="Enhance your customer service with AI-powered automation tools that improve response times and customer satisfaction." />
      </Helmet>

      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-pink-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">Customer Service Automation</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold">
              Transform Your Customer Experience with Intelligent Automation
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Deliver exceptional customer support at scale with AI-powered automation that improves response times and customer satisfaction.
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
            {customerServiceFeatures.map((feature, index) => (
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
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Customer Service?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's discuss how our customer service automation solutions can help you improve response times and customer satisfaction. Schedule a no-obligation consultation with our customer service automation experts.
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

const customerServiceFeatures = [
  {
    title: "AI Chatbots",
    description: "Deploy intelligent chatbots that handle common customer inquiries and provide instant support 24/7.",
    icon: <MessageSquare className="h-6 w-6 text-primary" />
  },
  {
    title: "Ticket Automation",
    description: "Automatically route, prioritize, and assign support tickets based on content, urgency, and agent availability.",
    icon: <Headphones className="h-6 w-6 text-primary" />
  },
  {
    title: "Knowledge Base Automation",
    description: "Create and maintain self-service resources that are automatically updated based on common customer issues.",
    icon: <Building className="h-6 w-6 text-primary" />
  },
  {
    title: "Customer Journey Automation",
    description: "Create personalized support experiences based on customer history, behavior, and preferences.",
    icon: <Users className="h-6 w-6 text-primary" />
  },
  {
    title: "Service Analytics",
    description: "Gain actionable insights with automated reporting on response times, resolution rates, and customer satisfaction.",
    icon: <BarChart className="h-6 w-6 text-primary" />
  },
  {
    title: "Omnichannel Support",
    description: "Provide seamless customer service across email, chat, social media, and phone with integrated automation.",
    icon: <Headphones className="h-6 w-6 text-primary" />
  }
];

export default CustomerServiceAutomation;
