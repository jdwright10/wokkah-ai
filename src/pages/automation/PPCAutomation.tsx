
import React, { useEffect } from 'react';
import MainLayout from '@/layout/MainLayout';
import { Helmet } from 'react-helmet';
import { 
  MousePointer, 
  BarChart, 
  Search, 
  Target,
  TrendingUp,
  LineChart
} from 'lucide-react';
import DemoRequestForm from '@/components/DemoRequestForm';

const PPCAutomation = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <Helmet>
        <title>PPC Automation Solutions | Wokkah</title>
        <meta name="description" content="Maximize your PPC ROI with our AI-powered automation tools for bid management, keyword optimization, and ad campaign management." />
      </Helmet>

      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-orange-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">PPC Automation</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold">
              Dominate Your Market with Intelligent PPC Automation
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Drive more qualified leads, increase conversions, and maximize your advertising ROI with our AI-powered PPC automation solutions.
            </p>
          </div>
          
          {/* Trusted By Companies Section */}
          <div className="mb-16">
            <p className="text-center text-sm font-medium text-muted-foreground mb-6">OPTIMIZE ADS ON ALL PLATFORMS</p>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
              <img src="https://api.iconify.design/logos:google.svg" alt="Google" className="h-8 mx-auto opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="https://api.iconify.design/logos:facebook.svg" alt="Facebook" className="h-8 mx-auto opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="https://api.iconify.design/logos:amazon.svg?height=32" alt="Amazon" className="h-8 mx-auto opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="https://api.iconify.design/logos:microsoft.svg" alt="Microsoft" className="h-8 mx-auto opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="https://api.iconify.design/logos:adobe.svg" alt="Adobe" className="h-8 mx-auto opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="https://api.iconify.design/logos:shopify.svg" alt="Shopify" className="h-8 mx-auto opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
            </div>
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
    title: "Automated Bid Management",
    description: "Optimize bids in real-time based on performance data to maximize ROI and minimize wasted ad spend.",
    icon: <MousePointer className="h-6 w-6 text-primary" />
  },
  {
    title: "Keyword Optimization",
    description: "Discover high-performing keywords, eliminate underperforming ones, and refine your keyword strategy with AI-powered insights.",
    icon: <Search className="h-6 w-6 text-primary" />
  },
  {
    title: "Ad Copy Testing",
    description: "Automatically test multiple ad variations to identify the most effective messaging and improve click-through rates.",
    icon: <Target className="h-6 w-6 text-primary" />
  },
  {
    title: "Conversion Tracking",
    description: "Track conversions accurately and attribute them to specific keywords, ads, and campaigns for data-driven optimization.",
    icon: <BarChart className="h-6 w-6 text-primary" />
  },
  {
    title: "Performance Reporting",
    description: "Get automated reports and dashboards that provide clear insights into campaign performance, trends, and opportunities.",
    icon: <LineChart className="h-6 w-6 text-primary" />
  },
  {
    title: "Budget Optimization",
    description: "Allocate your budget across campaigns and channels based on performance to maximize overall ROI.",
    icon: <TrendingUp className="h-6 w-6 text-primary" />
  }
];

export default PPCAutomation;
