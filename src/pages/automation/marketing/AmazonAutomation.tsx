
import React, { useEffect } from 'react';
import MainLayout from '@/layout/MainLayout';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { ShoppingCart, BarChart, Package, Search, TrendingUp, Truck, ArrowLeft } from 'lucide-react';
import DemoRequestForm from '@/components/DemoRequestForm';
import { Link } from 'react-router-dom';
import BreadcrumbNav from '@/components/BreadcrumbNav';

const AmazonAutomation = () => {
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
    { label: 'Amazon Automation', isCurrent: true }
  ];

  return (
    <MainLayout customBreadcrumbs={<BreadcrumbNav items={breadcrumbItems} className="mb-6" />}>
      <Helmet>
        <title>Amazon Marketplace Automation | Wokkah</title>
        <meta name="description" content="Maximize your Amazon sales with our automated listing optimization, inventory management, and advertising tools." />
      </Helmet>

      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container">
          <Link to="/solutions/business-automation/marketing" className="inline-flex items-center text-primary hover:underline mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Marketing Automation
          </Link>
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">Amazon Automation</span>
            
            <div className="flex justify-center items-center mb-6">
              <img 
                src="/lovable-uploads/40a2197b-40e9-40ad-9313-bf1e2ed4d10e.png" 
                alt="Amazon Logo" 
                className="h-16 md:h-20"
              />
            </div>
            
            <h1 className="mt-4 text-4xl md:text-5xl font-bold">
              Dominate the Amazon Marketplace with Intelligent Automation
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Streamline your Amazon business operations, optimize listings, manage inventory, and maximize sales with our AI-powered automation solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {amazonFeatures.map((feature, index) => (
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
          
          <DemoRequestForm serviceName="Amazon Automation" />
        </div>
      </section>
    </MainLayout>
  );
};

const amazonFeatures = [
  {
    title: "Listing Optimization",
    description: "Automatically enhance your product listings with keyword-rich titles, descriptions, and bullet points to improve search visibility and conversion rates.",
    icon: <ShoppingCart className="h-6 w-6 text-primary" />
  },
  {
    title: "Inventory Management",
    description: "Intelligently forecast demand, automate reordering, and prevent stockouts with AI-powered inventory management tools.",
    icon: <Package className="h-6 w-6 text-primary" />
  },
  {
    title: "Competitive Analysis",
    description: "Automatically monitor competitor prices, rankings, and strategies to optimize your own listings and maintain competitive advantage.",
    icon: <Search className="h-6 w-6 text-primary" />
  },
  {
    title: "Pricing Optimization",
    description: "Dynamically adjust prices based on competitor moves, demand trends, and profitability thresholds to maximize sales and margins.",
    icon: <TrendingUp className="h-6 w-6 text-primary" />
  },
  {
    title: "Performance Analytics",
    description: "Get comprehensive insights on sales, traffic, conversion rates, and advertising performance across all your Amazon products.",
    icon: <BarChart className="h-6 w-6 text-primary" />
  },
  {
    title: "Fulfillment Automation",
    description: "Streamline order processing, shipping label generation, and customer notifications with automated fulfillment workflows.",
    icon: <Truck className="h-6 w-6 text-primary" />
  }
];

export default AmazonAutomation;
