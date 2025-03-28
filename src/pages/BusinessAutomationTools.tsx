
import React, { useEffect } from 'react';
import MainLayout from '@/layout/MainLayout';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { 
  Megaphone, 
  Users, 
  Settings, 
  LineChart, 
  Building, 
  Hammer, 
  ShoppingCart,
  MousePointer,
  UserPlus,
  BarChart3,
  DollarSign
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import BreadcrumbNav from '@/components/BreadcrumbNav';

const BusinessAutomationTools = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Solutions', path: '/solutions' },
    { label: 'Business Automation', isCurrent: true }
  ];

  return (
    <MainLayout>
      <Helmet>
        <title>Business Automation Tools | Wokkah</title>
        <meta name="description" content="Streamline your business with our AI-powered automation tools for marketing, HR, operations, finance, sales, and market research." />
        <meta name="keywords" content="business automation, workflow automation, marketing automation, HR automation, operations automation, finance automation, sales automation, market research automation" />
      </Helmet>

      <section className="section pt-32 pb-16 bg-gradient-to-b from-white to-neutral-50">
        <div className="container">
          <BreadcrumbNav items={breadcrumbItems} className="mb-6" />
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">Business Automation</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold">
              Transform Your Business with Intelligent Automation
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Automate repetitive tasks, streamline workflows, and boost productivity across your entire organization with our AI-powered automation solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {automationServices.map((service) => (
              <div 
                key={service.title}
                className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <Link to={service.link}>
                  <Button className="w-full group">
                    Learn More <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

const automationServices = [
  {
    title: "Marketing Automation",
    description: "Streamline your marketing efforts with AI-powered tools that personalize campaigns, optimize content, and drive conversions.",
    icon: <Megaphone className="h-7 w-7 text-primary" />,
    link: "/solutions/business-automation/marketing"
  },
  {
    title: "HR Automation",
    description: "Simplify talent acquisition, onboarding, performance management, and employee engagement with intelligent HR automation.",
    icon: <Users className="h-7 w-7 text-primary" />,
    link: "/solutions/business-automation/hr"
  },
  {
    title: "Operations Automation",
    description: "Optimize your business operations, increase efficiency, and reduce errors with workflow automation and intelligent process optimization.",
    icon: <Settings className="h-7 w-7 text-primary" />,
    link: "/solutions/business-automation/operations"
  },
  {
    title: "Finance Automation",
    description: "Automate invoicing, expense management, financial reporting, and compliance to improve accuracy and save valuable time.",
    icon: <LineChart className="h-7 w-7 text-primary" />,
    link: "/solutions/business-automation/finance"
  },
  {
    title: "Customer Service Automation",
    description: "Enhance customer support with AI chatbots, automated ticket routing, and intelligent knowledge bases that deliver exceptional service.",
    icon: <Building className="h-7 w-7 text-primary" />,
    link: "/solutions/business-automation/customer-service"
  },
  {
    title: "Manufacturing Automation",
    description: "Streamline production processes, quality control, and supply chain management with intelligent manufacturing automation solutions.",
    icon: <Hammer className="h-7 w-7 text-primary" />,
    link: "/solutions/business-automation/manufacturing"
  },
  {
    title: "Amazon Automation",
    description: "Optimize your Amazon listings, automate inventory management, and maximize sales with AI-powered Amazon marketplace automation.",
    icon: <ShoppingCart className="h-7 w-7 text-primary" />,
    link: "/solutions/business-automation/amazon"
  },
  {
    title: "PPC Automation",
    description: "Enhance your pay-per-click campaigns with intelligent bid management, automated A/B testing, and data-driven optimization.",
    icon: <MousePointer className="h-7 w-7 text-primary" />,
    link: "/solutions/business-automation/ppc"
  },
  {
    title: "Hiring Automation",
    description: "Streamline your recruitment process with automated job posting, applicant screening, interview scheduling, and candidate engagement.",
    icon: <UserPlus className="h-7 w-7 text-primary" />,
    link: "/solutions/business-automation/hiring"
  },
  {
    title: "Sales Automation",
    description: "Boost sales efficiency and conversion rates with AI-powered lead management, proposal generation, and pipeline optimization tools.",
    icon: <DollarSign className="h-7 w-7 text-primary" />,
    link: "/solutions/business-automation/sales"
  },
  {
    title: "Market Research & Customer Sentiment",
    description: "Gain valuable insights into market trends and customer sentiment with AI-powered analytics, feedback collection, and sentiment analysis.",
    icon: <BarChart3 className="h-7 w-7 text-primary" />,
    link: "/solutions/business-automation/market-research"
  }
];

export default BusinessAutomationTools;
