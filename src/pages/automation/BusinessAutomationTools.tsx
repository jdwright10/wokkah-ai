
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
  DollarSign,
  BarChart3,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { AspectRatio } from '@/components/ui/aspect-ratio';

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
          
          {/* Featured Automation Solutions - Redesigned layout */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-center mb-10">Featured Automation Solutions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredSolutionsNew.map((solution, index) => (
                <Link 
                  key={solution.title} 
                  to={solution.link}
                  className="group"
                >
                  <div className={`relative overflow-hidden rounded-xl shadow-lg ${solution.bgGradient} h-full`}>
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300"></div>
                    <div className="p-8 flex flex-col h-full">
                      <div className="flex gap-6 items-start mb-6">
                        <div className="w-16 h-16 rounded-lg bg-white/90 flex items-center justify-center shrink-0">
                          {solution.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{solution.title}</h3>
                          <p className="text-white/80">{solution.description}</p>
                        </div>
                      </div>
                      
                      {solution.features && (
                        <ul className="mt-4 space-y-2 mb-6 text-white/90">
                          {solution.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <ArrowRight className="h-5 w-5 shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      
                      <div className="mt-auto pt-4">
                        <Button variant="outline-white" className="w-full group-hover:bg-white/90 transition-colors">
                          Explore <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          
          {/* All Automation Services - Alternative layout */}
          <div>
            <h2 className="text-2xl font-bold text-center mb-10">All Automation Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {allAutomationServices.map((service, index) => (
                <Link 
                  key={service.title}
                  to={service.link} 
                  className="group"
                >
                  <Card className="h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border-none">
                    <div className={`${service.bgColor} h-2`}></div>
                    <div className="p-1">
                      <AspectRatio ratio={4/1} className="overflow-hidden">
                        <div className={`w-full h-full flex items-center justify-center ${service.bgColor} bg-opacity-10`}>
                          <div className={`text-white ${service.bgColor} w-14 h-14 rounded-full flex items-center justify-center`}>
                            {service.icon}
                          </div>
                        </div>
                      </AspectRatio>
                    </div>
                    
                    <CardHeader className="pt-3">
                      <CardTitle className="group-hover:text-primary transition-colors">{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <span className="inline-flex items-center text-sm font-medium text-primary group-hover:translate-x-1 transition-transform">
                        Learn more <ArrowRight className="ml-1 h-3 w-3" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

// Featured solutions with new design
const featuredSolutionsNew = [
  {
    title: "Marketing Automation",
    description: "Transform your marketing with AI-powered tools that deliver personalized campaigns and maximize ROI.",
    icon: <Megaphone className="h-8 w-8 text-blue-600" />,
    link: "/solutions/business-automation/marketing",
    bgGradient: "bg-gradient-to-r from-blue-600 to-indigo-700",
    features: [
      "AI-powered content generation",
      "Campaign performance analytics",
      "Social media and advertising automation"
    ]
  },
  {
    title: "HR Automation",
    description: "Streamline hiring, onboarding, and employee management with intelligent automation tools.",
    icon: <Users className="h-8 w-8 text-purple-600" />,
    link: "/solutions/business-automation/hr",
    bgGradient: "bg-gradient-to-r from-purple-600 to-violet-700",
    features: [
      "Automated recruitment and screening",
      "Seamless onboarding workflows",
      "Employee engagement and performance tracking"
    ]
  },
  {
    title: "Operations Automation",
    description: "Streamline workflows, reduce errors, and increase efficiency across your entire organization.",
    icon: <Settings className="h-8 w-8 text-emerald-600" />,
    link: "/solutions/business-automation/operations",
    bgGradient: "bg-gradient-to-r from-emerald-500 to-teal-600",
    features: [
      "Process optimization and workflow mapping",
      "Intelligent document processing",
      "Real-time performance monitoring"
    ]
  },
  {
    title: "Sales Automation",
    description: "Close more deals with AI-powered lead scoring, pipeline management, and proposal generation.",
    icon: <DollarSign className="h-8 w-8 text-violet-600" />,
    link: "/solutions/business-automation/sales",
    bgGradient: "bg-gradient-to-r from-violet-600 to-purple-700",
    features: [
      "Intelligent lead scoring and qualification",
      "Automated follow-ups and engagement",
      "Sales performance analytics and forecasting"
    ]
  }
];

// All automation services with redesigned cards
const allAutomationServices = [
  {
    title: "Marketing Automation",
    description: "Streamline your marketing efforts with AI-powered tools for campaigns, social media, PPC, and Amazon marketplace management.",
    icon: <Megaphone className="h-6 w-6" />,
    link: "/solutions/business-automation/marketing",
    bgColor: "bg-blue-500"
  },
  {
    title: "HR Automation",
    description: "Simplify talent acquisition, onboarding, performance management, and employee engagement with intelligent HR automation.",
    icon: <Users className="h-6 w-6" />,
    link: "/solutions/business-automation/hr",
    bgColor: "bg-purple-500"
  },
  {
    title: "Operations Automation",
    description: "Optimize your business operations, increase efficiency, and reduce errors with workflow automation and intelligent process optimization.",
    icon: <Settings className="h-6 w-6" />,
    link: "/solutions/business-automation/operations",
    bgColor: "bg-emerald-500"
  },
  {
    title: "Finance Automation",
    description: "Automate invoicing, expense management, financial reporting, and compliance to improve accuracy and save valuable time.",
    icon: <LineChart className="h-6 w-6" />,
    link: "/solutions/business-automation/finance",
    bgColor: "bg-amber-500"
  },
  {
    title: "Customer Service Automation",
    description: "Enhance customer support with AI chatbots, automated ticket routing, and intelligent knowledge bases that deliver exceptional service.",
    icon: <Building className="h-6 w-6" />,
    link: "/solutions/business-automation/customer-service",
    bgColor: "bg-sky-500"
  },
  {
    title: "Manufacturing Automation",
    description: "Streamline production processes, quality control, and supply chain management with intelligent manufacturing automation solutions.",
    icon: <Hammer className="h-6 w-6" />,
    link: "/solutions/business-automation/manufacturing",
    bgColor: "bg-orange-500"
  },
  {
    title: "Sales Automation",
    description: "Boost sales efficiency and conversion rates with AI-powered lead management, proposal generation, and pipeline optimization tools.",
    icon: <DollarSign className="h-6 w-6" />,
    link: "/solutions/business-automation/sales",
    bgColor: "bg-indigo-500"
  },
  {
    title: "Market Research & Customer Sentiment",
    description: "Gain valuable insights into market trends and customer sentiment with AI-powered analytics, feedback collection, and sentiment analysis.",
    icon: <BarChart3 className="h-6 w-6" />,
    link: "/solutions/business-automation/market-research",
    bgColor: "bg-teal-500"
  }
];

export default BusinessAutomationTools;
