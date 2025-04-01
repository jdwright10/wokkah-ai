
import React, { useEffect } from 'react';
import MainLayout from '@/layout/MainLayout';
import { Helmet } from 'react-helmet';
import { 
  Megaphone, 
  Users, 
  Settings, 
  LineChart, 
  Building, 
  Hammer, 
  DollarSign,
  BarChart3,
  ArrowRight,
  Zap,
  ExternalLink,
  Briefcase
} from 'lucide-react';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const BusinessAutomationTools = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Define breadcrumb items
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Solutions', path: '/solutions' },
    { label: 'Business Automation', isCurrent: true }
  ];

  return (
    <MainLayout customBreadcrumbs={<BreadcrumbNav items={breadcrumbItems} className="mb-6" />}>
      <Helmet>
        <title>Business Automation Tools | Wokkah</title>
        <meta name="description" content="Streamline your business with our AI-powered automation tools for marketing, HR, operations, finance, sales, and market research." />
        <meta name="keywords" content="business automation, workflow automation, marketing automation, HR automation, operations automation, finance automation, sales automation, market research automation" />
      </Helmet>

      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-neutral-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">Business Automation</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold">
              Transform Your Business with Intelligent Automation
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Automate repetitive tasks, streamline workflows, and boost productivity across your entire organization with our AI-powered automation solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {automationServices.map((service) => (
              <div 
                key={service.title}
                className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>

          {/* New CTA section matching HomePageCTA */}
          <section className="py-12 md:py-16 bg-gradient-to-r from-blue-100 via-purple-50 to-blue-50 rounded-xl">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">
                  Ready to Infuse AI Into Your Business?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance mb-8">
                  Choose how you'd like to work with Wokkah and start your AI journey today.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                  <Link to="/hire-wokkah" className="w-full">
                    <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-md gap-2">
                      <Briefcase className="h-5 w-5" />
                      Hire Wokkah
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                  </Link>
                  
                  <Link to="/solutions" className="w-full">
                    <Button size="lg" className="w-full bg-purple-600 hover:bg-purple-700 transition-all duration-300 shadow-md gap-2">
                      <Zap className="h-5 w-5" />
                      Explore Solutions
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                  </Link>
                  
                  <a href="https://wokkah.com" target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button size="lg" className="w-full bg-green-600 hover:bg-green-700 transition-all duration-300 shadow-md gap-2">
                      <Users className="h-5 w-5" />
                      Find Talent
                      <ExternalLink className="h-5 w-5" />
                    </Button>
                  </a>
                </div>
                
                <p className="mt-8 text-muted-foreground">
                  No credit card required. Start with a free consultation.
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </MainLayout>
  );
};

const automationServices = [
  {
    title: "Marketing Automation",
    description: "Streamline your marketing efforts with AI-powered tools that personalize campaigns, optimize content, and drive conversions. Includes Amazon and PPC automation.",
    icon: <Megaphone className="h-7 w-7 text-primary" />
  },
  {
    title: "HR Automation",
    description: "Simplify talent acquisition, onboarding, performance management, and employee engagement with intelligent HR and recruiting automation.",
    icon: <Users className="h-7 w-7 text-primary" />
  },
  {
    title: "Operations Automation",
    description: "Optimize your business operations, increase efficiency, and reduce errors with workflow automation and intelligent process optimization.",
    icon: <Settings className="h-7 w-7 text-primary" />
  },
  {
    title: "Finance Automation",
    description: "Automate invoicing, expense management, financial reporting, and compliance to improve accuracy and save valuable time.",
    icon: <LineChart className="h-7 w-7 text-primary" />
  },
  {
    title: "Customer Service Automation",
    description: "Enhance customer support with AI chatbots, automated ticket routing, and intelligent knowledge bases that deliver exceptional service.",
    icon: <Building className="h-7 w-7 text-primary" />
  },
  {
    title: "Manufacturing Automation",
    description: "Streamline production processes, quality control, and supply chain management with intelligent manufacturing automation solutions.",
    icon: <Hammer className="h-7 w-7 text-primary" />
  },
  {
    title: "Sales Automation",
    description: "Boost sales efficiency and conversion rates with AI-powered lead management, proposal generation, and pipeline optimization tools.",
    icon: <DollarSign className="h-7 w-7 text-primary" />
  },
  {
    title: "Market Research & Customer Sentiment",
    description: "Gain valuable insights into market trends and customer sentiment with AI-powered analytics, feedback collection, and sentiment analysis.",
    icon: <BarChart3 className="h-7 w-7 text-primary" />
  }
];

export default BusinessAutomationTools;
