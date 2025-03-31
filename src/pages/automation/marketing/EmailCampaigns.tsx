
import React, { useEffect } from 'react';
import MainLayout from '@/layout/MainLayout';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  ArrowLeft, 
  Calendar, 
  Users, 
  BarChart4, 
  Zap, 
  MousePointer, 
  CheckCircle2,
  Split,
  Workflow,
  FileText
} from 'lucide-react';
import PageHeader from '@/components/talent/PageHeader';
import { Card, CardContent } from '@/components/ui/card';

const EmailCampaigns = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCalendlySchedule = () => {
    window.open('https://calendly.com/wokkah/marketing-automation', '_blank');
  };

  return (
    <MainLayout>
      <Helmet>
        <title>Email Campaign Automation | Marketing Automation | Wokkah</title>
        <meta name="description" content="Create sophisticated, personalized email sequences that nurture leads and convert customers at scale." />
      </Helmet>

      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container">
          <Link to="/solutions/business-automation/marketing" className="inline-flex items-center text-primary hover:underline mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Marketing Automation
          </Link>
          
          <PageHeader 
            badge="Email Campaign Automation"
            title="Drive Conversions with Intelligent Email Campaigns"
            subtitle="Create sophisticated, personalized email sequences that nurture leads and convert customers at scale."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-6">Personalized Email Campaigns at Scale</h2>
              <p className="text-muted-foreground mb-6">
                Email remains one of the most effective marketing channels, with ROI as high as 4,200%. Our email automation platform helps you create personalized campaigns that engage your audience and drive conversions.
              </p>
              <ul className="space-y-4">
                {emailFeatures.slice(0, 3).map((feature, index) => (
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
              <h2 className="text-2xl font-bold mb-6">Optimize Campaigns with Data</h2>
              <p className="text-muted-foreground mb-6">
                Don't just send emails—improve them with every campaign. Our platform provides deep insights into performance metrics so you can continuously refine your approach for better results.
              </p>
              <ul className="space-y-4">
                {emailFeatures.slice(3).map((feature, index) => (
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
            <h2 className="text-2xl font-bold mb-6 text-center">Email Campaign Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {campaignTypes.map((type, index) => (
                <div key={index} className="bg-neutral-50 p-6 rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    {type.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{type.title}</h3>
                  <p className="text-sm text-muted-foreground">{type.description}</p>
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
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Email Marketing?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Schedule a consultation with our email marketing experts to discuss your business needs and learn how our automation platform can help you increase engagement and conversions.
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

const emailFeatures = [
  {
    title: "Visual Workflow Builder",
    description: "Create sophisticated email sequences with our drag-and-drop workflow builder—no coding required.",
    icon: <Workflow className="h-4 w-4 text-primary" />
  },
  {
    title: "Dynamic Personalization",
    description: "Automatically personalize email content based on recipient data, behavior, and preferences.",
    icon: <Users className="h-4 w-4 text-primary" />
  },
  {
    title: "AI-Powered Content",
    description: "Generate subject lines, email copy, and CTAs with our AI assistant to improve open and click rates.",
    icon: <FileText className="h-4 w-4 text-primary" />
  },
  {
    title: "A/B Testing",
    description: "Test different subject lines, content, and CTAs to identify what resonates best with your audience.",
    icon: <Split className="h-4 w-4 text-primary" />
  },
  {
    title: "Performance Analytics",
    description: "Track open rates, click-through rates, conversions, and other key metrics with detailed reports.",
    icon: <BarChart4 className="h-4 w-4 text-primary" />
  },
  {
    title: "Deliverability Optimization",
    description: "Ensure your emails reach inboxes—not spam folders—with our deliverability monitoring tools.",
    icon: <CheckCircle2 className="h-4 w-4 text-primary" />
  }
];

const campaignTypes = [
  {
    title: "Welcome Sequences",
    description: "Introduce new subscribers to your brand and products with automated welcome email sequences.",
    icon: <Mail className="h-6 w-6 text-primary" />
  },
  {
    title: "Lead Nurturing",
    description: "Guide prospects through the buying journey with targeted content based on their interests and actions.",
    icon: <Users className="h-6 w-6 text-primary" />
  },
  {
    title: "Abandoned Cart Recovery",
    description: "Recover lost sales by automatically following up with customers who abandon their shopping carts.",
    icon: <Zap className="h-6 w-6 text-primary" />
  }
];

const benefitCards = [
  {
    title: "Increase Conversion Rates",
    description: "Boost conversion rates by up to 300% with targeted, personalized email sequences.",
    icon: <Zap className="h-4 w-4 text-primary" />
  },
  {
    title: "Save Time",
    description: "Reduce email marketing workload by 80% with automated sequences and campaign management.",
    icon: <Calendar className="h-4 w-4 text-primary" />
  },
  {
    title: "Improve ROI",
    description: "Generate $42 for every $1 spent on email marketing with our optimization features.",
    icon: <BarChart4 className="h-4 w-4 text-primary" />
  }
];

export default EmailCampaigns;
