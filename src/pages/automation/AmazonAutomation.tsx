
import React, { useEffect } from 'react';
import MainLayout from '@/layout/MainLayout';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { ShoppingCart, BarChart, Package, Search, TrendingUp, Truck } from 'lucide-react';
import DemoRequestForm from '@/components/DemoRequestForm';

const AmazonAutomation = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <Helmet>
        <title>Amazon Marketplace Automation | Wokkah</title>
        <meta name="description" content="Maximize your Amazon sales with our automated listing optimization, inventory management, and advertising tools." />
      </Helmet>

      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">Amazon Automation</span>
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
    description: "Track competitor pricing, promotions, and rankings to position your products effectively in the marketplace.",
    icon: <Search className="h-6 w-6 text-primary" />
  },
  {
    title: "Performance Analytics",
    description: "Get comprehensive insights on product performance, customer behavior, and sales trends with automated reporting and dashboards.",
    icon: <BarChart className="h-6 w-6 text-primary" />
  },
  {
    title: "Advertising Optimization",
    description: "Maximize your advertising ROI with automated bid management, keyword optimization, and campaign adjustments based on performance.",
    icon: <TrendingUp className="h-6 w-6 text-primary" />
  },
  {
    title: "Order Fulfillment",
    description: "Streamline order processing, shipping, and customer communication with intelligent automation tools integrated with Amazon's systems.",
    icon: <Truck className="h-6 w-6 text-primary" />
  }
];

export default AmazonAutomation;
