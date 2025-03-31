
import React, { useEffect } from 'react';
import MainLayout from '@/layout/MainLayout';
import { Helmet } from 'react-helmet';
import { MousePointer, TrendingUp, Target, BarChart, CreditCard, Zap, ArrowLeft } from 'lucide-react';
import DemoRequestForm from '@/components/DemoRequestForm';
import { Link } from 'react-router-dom';
import BreadcrumbNav from '@/components/BreadcrumbNav';

const PPCAutomation = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Define breadcrumb items
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Solutions', path: '/solutions' },
    { label: 'Business Automation', path: '/solutions/business-automation' },
    { label: 'Marketing Automation', path: '/solutions/business-automation/marketing' },
    { label: 'PPC Automation', isCurrent: true }
  ];

  return (
    <MainLayout customBreadcrumbs={<BreadcrumbNav items={breadcrumbItems} className="mb-6" />}>
      <Helmet>
        <title>PPC Advertising Automation | Wokkah</title>
        <meta name="description" content="Optimize your pay-per-click campaigns with our AI-powered bid management, ad creation, and performance analytics tools." />
      </Helmet>

      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container">
          <Link to="/solutions/business-automation/marketing" className="inline-flex items-center text-primary hover:underline mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Marketing Automation
          </Link>
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">PPC Automation</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold">
              Maximize ROI with Intelligent PPC Campaign Automation
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Enhance your pay-per-click campaigns with intelligent bid management, automated A/B testing, and data-driven optimization across all major ad platforms.
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
    title: "Intelligent Bid Management",
    description: "Automatically adjust bids based on real-time performance data, competition, conversion likelihood, and ROI targets.",
    icon: <MousePointer className="h-6 w-6 text-primary" />
  },
  {
    title: "Cross-Platform Campaigns",
    description: "Manage and optimize campaigns across Google Ads, Meta Ads, Microsoft Ads, and other platforms from a single dashboard.",
    icon: <Zap className="h-6 w-6 text-primary" />
  },
  {
    title: "Automated A/B Testing",
    description: "Continuously test ad variations, landing pages, and targeting options to discover the highest-performing combinations.",
    icon: <Target className="h-6 w-6 text-primary" />
  },
  {
    title: "Performance Analytics",
    description: "Get detailed insights into campaign performance with customizable dashboards and automated reporting.",
    icon: <BarChart className="h-6 w-6 text-primary" />
  },
  {
    title: "Budget Optimization",
    description: "Automatically allocate spend across campaigns, ad groups, and keywords based on performance to maximize ROI.",
    icon: <CreditCard className="h-6 w-6 text-primary" />
  },
  {
    title: "Conversion Tracking",
    description: "Track and attribute conversions across the entire customer journey for accurate performance measurement.",
    icon: <TrendingUp className="h-6 w-6 text-primary" />
  }
];

export default PPCAutomation;
