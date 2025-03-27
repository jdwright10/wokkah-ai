
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
import BreadcrumbNav from '@/components/BreadcrumbNav';
import { Link } from 'react-router-dom';

const PPCAutomation = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Business Automation', path: '/services/business-automation' },
    { label: 'PPC Automation', isCurrent: true }
  ];

  return (
    <MainLayout>
      <Helmet>
        <title>PPC Automation Solutions | Wokkah</title>
        <meta name="description" content="Maximize your pay-per-click advertising results with intelligent automation for bid management, A/B testing, and performance optimization." />
      </Helmet>

      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 via-purple-50 to-white">
        <div className="container">
          <BreadcrumbNav items={breadcrumbItems} className="mb-6" />

          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-purple-700 mb-4">PPC Automation</span>
            
            <div className="flex justify-center items-center gap-8 mb-6">
              <div className="bg-blue-50 p-1 rounded-lg">
                <img 
                  src="/lovable-uploads/fa83c7fc-4532-4096-b65c-54acc2514ee5.png" 
                  alt="Google Ads Logo" 
                  className="h-16 md:h-24"
                />
              </div>
              <div className="bg-blue-50 p-1 rounded-lg">
                <img 
                  src="/lovable-uploads/cbc40028-51d2-4a5c-8397-c478342fe906.png" 
                  alt="Bing Ads Logo" 
                  className="h-12 md:h-20"
                />
              </div>
            </div>

            <h1 className="mt-4 text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">
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
                className="bg-white p-8 rounded-xl shadow-md border border-neutral-100 hover:shadow-xl transition-shadow duration-300 hover:border-purple-200 hover:-translate-y-1 transform transition-transform"
                style={{
                  background: `linear-gradient(135deg, white, ${feature.gradientColor})`,
                  backgroundSize: '200% 200%',
                  animation: 'gradient-shift 5s ease infinite'
                }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-12 mb-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl shadow-sm">
            <div className="w-full md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop" 
                alt="PPC Analytics Dashboard" 
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">Why Choose Our PPC Automation?</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Our intelligent PPC automation platform helps businesses of all sizes maximize their advertising ROI through machine learning and data-driven optimization.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  <span>Eliminates manual bid adjustments</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  <span>Reduces wasted ad spend by up to 30%</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  <span>Improves quality scores across your account</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  <span>24/7 monitoring and optimization</span>
                </li>
              </ul>
            </div>
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
    icon: <MousePointer className="h-6 w-6 text-blue-600" />,
    gradientColor: "rgba(239, 246, 255, 0.8)" // light blue
  },
  {
    title: "Conversion Tracking",
    description: "Track and analyze user actions across your entire funnel to optimize campaigns for meaningful business outcomes.",
    icon: <LineChart className="h-6 w-6 text-purple-600" />,
    gradientColor: "rgba(243, 232, 255, 0.8)" // light purple
  },
  {
    title: "Audience Targeting",
    description: "Leverage AI to identify and target high-value audience segments across multiple advertising platforms.",
    icon: <Target className="h-6 w-6 text-blue-600" />,
    gradientColor: "rgba(239, 246, 255, 0.8)" // light blue
  },
  {
    title: "Performance Analytics",
    description: "Get comprehensive insights with automated reporting and real-time dashboards that reveal optimization opportunities.",
    icon: <BarChart className="h-6 w-6 text-purple-600" />,
    gradientColor: "rgba(243, 232, 255, 0.8)" // light purple
  },
  {
    title: "Ad Creative Optimization",
    description: "Automatically test multiple ad variations and allocate budget to top performers to improve click-through rates.",
    icon: <Zap className="h-6 w-6 text-blue-600" />,
    gradientColor: "rgba(239, 246, 255, 0.8)" // light blue
  },
  {
    title: "Cross-Platform Integration",
    description: "Manage Google Ads, Microsoft Advertising, Facebook Ads, and more from a single integrated automation platform.",
    icon: <Layers className="h-6 w-6 text-purple-600" />,
    gradientColor: "rgba(243, 232, 255, 0.8)" // light purple
  }
];

export default PPCAutomation;
