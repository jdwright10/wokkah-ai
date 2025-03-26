
import React, { useEffect } from 'react';
import MainLayout from '@/layout/MainLayout';
import { Helmet } from 'react-helmet';
import { 
  MousePointer, 
  LineChart, 
  Target, 
  BarChart, 
  Zap, 
  Layers 
} from 'lucide-react';
import DemoRequestForm from '@/components/DemoRequestForm';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from 'react-router-dom';

const PPCAutomation = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <Helmet>
        <title>PPC Automation Solutions | Wokkah</title>
        <meta name="description" content="Maximize your pay-per-click advertising results with intelligent automation for bid management, A/B testing, and performance optimization." />
      </Helmet>

      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/services">Services</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/services/business-automation">Business Automation</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>PPC Automation</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">PPC Automation</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold">
              Supercharge Your PPC Campaigns with Intelligent Automation
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Optimize bids, improve quality scores, and drive better ROI with our AI-powered pay-per-click automation solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {ppcFeatures.map((feature, index) => (
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
          
          <DemoRequestForm serviceName="PPC Automation" />
        </div>
      </section>
    </MainLayout>
  );
};

const ppcFeatures = [
  {
    title: "Smart Bid Management",
    description: "Automatically adjust bids based on performance data, competition, and conversion potential to maximize ROI.",
    icon: <MousePointer className="h-6 w-6 text-primary" />
  },
  {
    title: "Conversion Tracking",
    description: "Track and analyze user actions across your entire funnel to optimize campaigns for meaningful business outcomes.",
    icon: <LineChart className="h-6 w-6 text-primary" />
  },
  {
    title: "Audience Targeting",
    description: "Leverage AI to identify and target high-value audience segments across multiple advertising platforms.",
    icon: <Target className="h-6 w-6 text-primary" />
  },
  {
    title: "Performance Analytics",
    description: "Get comprehensive insights with automated reporting and real-time dashboards that reveal optimization opportunities.",
    icon: <BarChart className="h-6 w-6 text-primary" />
  },
  {
    title: "Ad Creative Optimization",
    description: "Automatically test multiple ad variations and allocate budget to top performers to improve click-through rates.",
    icon: <Zap className="h-6 w-6 text-primary" />
  },
  {
    title: "Cross-Platform Integration",
    description: "Manage Google Ads, Microsoft Advertising, Facebook Ads, and more from a single integrated automation platform.",
    icon: <Layers className="h-6 w-6 text-primary" />
  }
];

export default PPCAutomation;
