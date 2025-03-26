
import React, { useEffect } from 'react';
import MainLayout from '@/layout/MainLayout';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { 
  BarChart3, 
  Search, 
  MessageSquare, 
  TrendingUp,
  Calendar,
  Heart,
  Users,
  Globe
} from 'lucide-react';

const MarketResearch = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCalendlySchedule = () => {
    // Open Calendly in a new window
    window.open('https://calendly.com/wokkah/market-research', '_blank');
  };

  return (
    <MainLayout>
      <Helmet>
        <title>Market Research & Customer Sentiment Analysis | Wokkah</title>
        <meta name="description" content="Gain valuable insights into market trends and customer sentiment with AI-powered analytics, feedback collection, and sentiment analysis." />
      </Helmet>

      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-purple-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">Market Research & Customer Sentiment</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold">
              Unlock Valuable Market Insights with AI-Powered Analysis
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Gain a deeper understanding of your market and customers with our comprehensive research and sentiment analysis solutions.
            </p>
            <Button 
              size="lg" 
              className="mt-8"
              onClick={handleCalendlySchedule}
            >
              Schedule a Consultation
            </Button>
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
          
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-md border border-neutral-200">
            <h2 className="text-3xl font-bold mb-6 text-center">Customer Sentiment Analysis in Action</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-100">
                <h3 className="text-xl font-bold mb-4">Before AI Sentiment Analysis</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Manual review of customer feedback taking weeks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Subjective interpretation of customer opinions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Missing valuable insights across multiple channels</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Slow reaction to emerging customer issues</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Limited understanding of emotional context</span>
                  </li>
                </ul>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="text-xl font-bold mb-4">After AI Sentiment Analysis</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Real-time analysis of thousands of customer interactions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Objective measurement of sentiment across channels</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Detection of emerging trends and customer pain points</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Timely responses to customer concerns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Deep understanding of emotional drivers behind feedback</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-10">
              <Button 
                size="lg"
                onClick={handleCalendlySchedule}
              >
                <Calendar className="mr-2" /> Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

const researchFeatures = [
  {
    title: "Customer Sentiment Analysis",
    description: "Analyze customer feedback, reviews, and social media mentions to understand emotional context and satisfaction levels.",
    icon: <Heart className="h-6 w-6 text-primary" />
  },
  {
    title: "Market Trend Analysis",
    description: "Identify emerging trends and predict market changes with AI-powered data analysis and forecasting.",
    icon: <TrendingUp className="h-6 w-6 text-primary" />
  },
  {
    title: "Competitor Intelligence",
    description: "Monitor competitor activities, pricing strategies, and customer sentiment to gain strategic advantages.",
    icon: <Search className="h-6 w-6 text-primary" />
  },
  {
    title: "Customer Feedback Collection",
    description: "Automate the collection and analysis of customer feedback across multiple channels and touchpoints.",
    icon: <MessageSquare className="h-6 w-6 text-primary" />
  },
  {
    title: "Consumer Behavior Analysis",
    description: "Understand consumer behaviors, preferences, and decision-making patterns with comprehensive data analysis.",
    icon: <Users className="h-6 w-6 text-primary" />
  },
  {
    title: "Global Market Insights",
    description: "Gain insights into international markets with localized sentiment analysis and cultural context understanding.",
    icon: <Globe className="h-6 w-6 text-primary" />
  }
];

export default MarketResearch;
