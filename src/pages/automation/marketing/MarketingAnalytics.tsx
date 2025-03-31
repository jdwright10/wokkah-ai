
import React, { useEffect } from 'react';
import MainLayout from '@/layout/MainLayout';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  BarChart, 
  ArrowLeft, 
  Calendar, 
  PieChart, 
  LineChart, 
  TrendingUp, 
  Target, 
  Zap,
  Download,
  Bell,
  Mail,
  Share2
} from 'lucide-react';
import PageHeader from '@/components/talent/PageHeader';
import { Card, CardContent } from '@/components/ui/card';

const MarketingAnalytics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCalendlySchedule = () => {
    window.open('https://calendly.com/wokkah/marketing-automation', '_blank');
  };

  return (
    <MainLayout>
      <Helmet>
        <title>Marketing Analytics | Marketing Automation | Wokkah</title>
        <meta name="description" content="Gain actionable insights with automated reporting and analytics that track campaign performance and ROI." />
      </Helmet>

      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container">
          <Link to="/solutions/business-automation/marketing" className="inline-flex items-center text-primary hover:underline mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Marketing Automation
          </Link>
          
          <PageHeader 
            badge="Marketing Analytics"
            title="Data-Driven Marketing Decisions"
            subtitle="Gain actionable insights with automated reporting and analytics that track campaign performance and ROI."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-6">Comprehensive Analytics Dashboards</h2>
              <p className="text-muted-foreground mb-6">
                Stop guessing and start knowing. Our marketing analytics platform provides comprehensive dashboards that give you full visibility into campaign performance across all channels.
              </p>
              <ul className="space-y-4">
                {analyticsDashboards.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-medium">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6">Actionable Insights & Automation</h2>
              <p className="text-muted-foreground mb-6">
                Data is only valuable if you act on it. Our platform goes beyond reporting to provide actionable insights and recommendations to optimize your marketing efforts.
              </p>
              <ul className="space-y-4">
                {analyticsFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-medium">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100 mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Channel-Specific Analytics</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              {channelAnalytics.map((channel, index) => (
                <div key={index} className="bg-neutral-50 p-6 rounded-lg text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    {channel.icon}
                  </div>
                  <h3 className="font-medium">{channel.name}</h3>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {benefitCards.map((benefit, index) => (
              <Card key={index} className="border-t-4 border-t-primary">
                <CardContent className="pt-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-md border border-neutral-200 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Make Data-Driven Decisions?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Schedule a consultation with our analytics experts to discuss how our platform can help you track, measure, and optimize your marketing performance.
            </p>
            <Button 
              size="lg"
              onClick={handleCalendlySchedule}
            >
              <Calendar className="mr-2" /> Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

const analyticsDashboards = [
  {
    title: "Marketing Overview",
    description: "Get a high-level view of all marketing activities and their performance in one central dashboard.",
    icon: <BarChart className="h-4 w-4 text-primary" />
  },
  {
    title: "Campaign Performance",
    description: "Analyze the effectiveness of individual campaigns across multiple dimensions and metrics.",
    icon: <TrendingUp className="h-4 w-4 text-primary" />
  },
  {
    title: "ROI Tracking",
    description: "Calculate and visualize the return on investment for each marketing channel and campaign.",
    icon: <PieChart className="h-4 w-4 text-primary" />
  }
];

const analyticsFeatures = [
  {
    title: "AI-Powered Insights",
    description: "Let AI analyze your data and surface actionable recommendations to improve performance.",
    icon: <Zap className="h-4 w-4 text-primary" />
  },
  {
    title: "Automated Reporting",
    description: "Schedule and automatically distribute custom reports to stakeholders on a regular basis.",
    icon: <Download className="h-4 w-4 text-primary" />
  },
  {
    title: "Performance Alerts",
    description: "Set up custom alerts for significant changes in metrics to identify issues or opportunities.",
    icon: <Bell className="h-4 w-4 text-primary" />
  }
];

const channelAnalytics = [
  {
    name: "Email Marketing",
    icon: <Mail className="h-6 w-6 text-primary" />
  },
  {
    name: "Social Media",
    icon: <Share2 className="h-6 w-6 text-primary" />
  },
  {
    name: "Website",
    icon: <LineChart className="h-6 w-6 text-primary" />
  },
  {
    name: "Paid Advertising",
    icon: <Target className="h-6 w-6 text-primary" />
  }
];

const benefitCards = [
  {
    title: "Improve Campaign Performance",
    description: "Increase marketing effectiveness by up to 30% through data-driven optimization strategies.",
    icon: <TrendingUp className="h-4 w-4 text-primary" />
  },
  {
    title: "Optimize Budget Allocation",
    description: "Allocate marketing budget more effectively by identifying your highest-performing channels.",
    icon: <Target className="h-4 w-4 text-primary" />
  },
  {
    title: "Demonstrate ROI",
    description: "Clearly demonstrate marketing's impact on business goals with comprehensive ROI reporting.",
    icon: <BarChart className="h-4 w-4 text-primary" />
  }
];

export default MarketingAnalytics;
