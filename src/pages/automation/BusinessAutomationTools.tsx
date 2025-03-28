
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
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const BusinessAutomationTools = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
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
          
          {/* Featured Automation Solutions */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-10">Featured Automation Solutions</h2>
            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                {featuredSolutions.map((solution) => (
                  <CarouselItem key={solution.title} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="h-full border-none shadow-lg overflow-hidden bg-gradient-to-br from-primary/5 to-white">
                        <CardHeader className="pb-0">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                            {solution.icon}
                          </div>
                          <CardTitle>{solution.title}</CardTitle>
                          <CardDescription className="text-muted-foreground mt-2">
                            {solution.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pt-6">
                          <Link to={solution.link}>
                            <Button variant="outline" className="w-full group">
                              Explore <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </Link>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden md:block">
                <CarouselPrevious className="-left-5 focus:outline-none" />
                <CarouselNext className="-right-5 focus:outline-none" />
              </div>
            </Carousel>
          </div>
          
          {/* All Automation Services */}
          <div>
            <h2 className="text-2xl font-bold text-center mb-10">All Automation Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allAutomationServices.map((service, index) => (
                <Link 
                  key={service.title}
                  to={service.link} 
                  className="group"
                >
                  <div 
                    className="relative overflow-hidden rounded-xl p-6 border border-neutral-100 bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full"
                  >
                    {/* Service icon with colored background */}
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${service.bgColor}`}>
                      {service.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    
                    <span className="inline-flex items-center text-sm font-medium text-primary group-hover:translate-x-1 transition-transform">
                      Learn more <ArrowRight className="ml-1 h-3 w-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

// Featured solutions for the carousel
const featuredSolutions = [
  {
    title: "Marketing Automation",
    description: "Streamline your marketing efforts with AI-powered tools that personalize campaigns and drive conversions.",
    icon: <Megaphone className="h-6 w-6 text-primary" />,
    link: "/solutions/business-automation/marketing"
  },
  {
    title: "Operations Automation",
    description: "Optimize your business operations, increase efficiency, and reduce errors with intelligent process optimization.",
    icon: <Settings className="h-6 w-6 text-primary" />,
    link: "/solutions/business-automation/operations"
  },
  {
    title: "Sales Automation",
    description: "Boost sales efficiency with AI-powered lead management, proposal generation, and pipeline optimization tools.",
    icon: <DollarSign className="h-6 w-6 text-primary" />,
    link: "/solutions/business-automation/sales"
  },
  {
    title: "Amazon Automation",
    description: "Optimize your Amazon listings, automate inventory management, and maximize sales with AI-powered marketplace automation.",
    icon: <ShoppingCart className="h-6 w-6 text-primary" />,
    link: "/solutions/business-automation/amazon"
  }
];

// All automation services
const allAutomationServices = [
  {
    title: "Marketing Automation",
    description: "Streamline your marketing efforts with AI-powered tools that personalize campaigns, optimize content, and drive conversions.",
    icon: <Megaphone className="h-6 w-6 text-white" />,
    link: "/solutions/business-automation/marketing",
    bgColor: "bg-blue-500"
  },
  {
    title: "HR Automation",
    description: "Simplify talent acquisition, onboarding, performance management, and employee engagement with intelligent HR automation.",
    icon: <Users className="h-6 w-6 text-white" />,
    link: "/solutions/business-automation/hr",
    bgColor: "bg-purple-500"
  },
  {
    title: "Operations Automation",
    description: "Optimize your business operations, increase efficiency, and reduce errors with workflow automation and intelligent process optimization.",
    icon: <Settings className="h-6 w-6 text-white" />,
    link: "/solutions/business-automation/operations",
    bgColor: "bg-emerald-500"
  },
  {
    title: "Finance Automation",
    description: "Automate invoicing, expense management, financial reporting, and compliance to improve accuracy and save valuable time.",
    icon: <LineChart className="h-6 w-6 text-white" />,
    link: "/solutions/business-automation/finance",
    bgColor: "bg-amber-500"
  },
  {
    title: "Customer Service Automation",
    description: "Enhance customer support with AI chatbots, automated ticket routing, and intelligent knowledge bases that deliver exceptional service.",
    icon: <Building className="h-6 w-6 text-white" />,
    link: "/solutions/business-automation/customer-service",
    bgColor: "bg-sky-500"
  },
  {
    title: "Manufacturing Automation",
    description: "Streamline production processes, quality control, and supply chain management with intelligent manufacturing automation solutions.",
    icon: <Hammer className="h-6 w-6 text-white" />,
    link: "/solutions/business-automation/manufacturing",
    bgColor: "bg-orange-500"
  },
  {
    title: "Amazon Automation",
    description: "Optimize your Amazon listings, automate inventory management, and maximize sales with AI-powered Amazon marketplace automation.",
    icon: <ShoppingCart className="h-6 w-6 text-white" />,
    link: "/solutions/business-automation/amazon",
    bgColor: "bg-rose-500"
  },
  {
    title: "PPC Automation",
    description: "Enhance your pay-per-click campaigns with intelligent bid management, automated A/B testing, and data-driven optimization.",
    icon: <MousePointer className="h-6 w-6 text-white" />,
    link: "/solutions/business-automation/ppc",
    bgColor: "bg-violet-500"
  },
  {
    title: "Hiring Automation",
    description: "Streamline your recruitment process with automated job posting, applicant screening, interview scheduling, and candidate engagement.",
    icon: <UserPlus className="h-6 w-6 text-white" />,
    link: "/solutions/business-automation/hiring",
    bgColor: "bg-cyan-500"
  },
  {
    title: "Sales Automation",
    description: "Boost sales efficiency and conversion rates with AI-powered lead management, proposal generation, and pipeline optimization tools.",
    icon: <DollarSign className="h-6 w-6 text-white" />,
    link: "/solutions/business-automation/sales",
    bgColor: "bg-indigo-500"
  },
  {
    title: "Market Research & Customer Sentiment",
    description: "Gain valuable insights into market trends and customer sentiment with AI-powered analytics, feedback collection, and sentiment analysis.",
    icon: <BarChart3 className="h-6 w-6 text-white" />,
    link: "/solutions/business-automation/market-research",
    bgColor: "bg-teal-500"
  }
];

export default BusinessAutomationTools;
