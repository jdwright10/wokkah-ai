import React, { useEffect } from 'react';
import MainLayout from '@/layout/MainLayout';
import { Helmet } from 'react-helmet';
import { 
  BarChart3, 
  PieChart, 
  Users, 
  Search,
  TrendingUp,
  Globe
} from 'lucide-react';
import DemoRequestForm from '@/components/DemoRequestForm';

const MarketResearch = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <Helmet>
        <title>Market Research & Customer Sentiment Analysis | Wokkah</title>
        <meta name="description" content="Gain valuable insights into market trends and customer sentiment with AI-powered analytics, feedback collection, and sentiment analysis." />
      </Helmet>

      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-orange-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">Market Research</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold">
              Unlock Market Insights with Intelligent Automation
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Understand market trends, customer preferences, and competitive landscapes with our AI-powered market research and sentiment analysis solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {researchFeatures.map((feature, index) => (
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
          
          <DemoRequestForm serviceName="Market Research & Customer Sentiment" />
        </div>
      </section>
    </MainLayout>
  );
};

const researchFeatures = [
  {
    title: "Market Trend Analysis",
    description: "Identify emerging trends, market shifts, and growth opportunities with AI-powered trend analysis.",
    icon: <TrendingUp className="h-6 w-6 text-primary" />
  },
  {
    title: "Customer Sentiment Analysis",
    description: "Understand customer opinions, emotions, and attitudes towards your brand, products, and services.",
    icon: <Users className="h-6 w-6 text-primary" />
  },
  {
    title: "Competitive Intelligence",
    description: "Monitor competitor activities, strategies, and performance to stay ahead in the marketplace.",
    icon: <Search className="h-6 w-6 text-primary" />
  },
  {
    title: "Data Visualization",
    description: "Transform complex market data into easy-to-understand charts, graphs, and dashboards.",
    icon: <PieChart className="h-6 w-6 text-primary" />
  },
  {
    title: "Global Market Research",
    description: "Expand your reach with insights into international markets, cultural nuances, and global trends.",
    icon: <Globe className="h-6 w-6 text-primary" />
  },
  {
    title: "Predictive Analytics",
    description: "Forecast future market conditions, customer behavior, and sales performance with AI-driven predictions.",
    icon: <BarChart3 className="h-6 w-6 text-primary" />
  }
];

export default MarketResearch;
