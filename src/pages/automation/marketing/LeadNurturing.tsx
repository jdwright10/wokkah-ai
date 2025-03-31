
import React, { useEffect } from 'react';
import MainLayout from '@/layout/MainLayout';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Users, 
  ArrowLeft, 
  Calendar, 
  Filter, 
  Workflow, 
  ClipboardCheck, 
  BarChart4, 
  Zap,
  Mail,
  Phone,
  MessageSquare
} from 'lucide-react';
import PageHeader from '@/components/talent/PageHeader';
import { Card, CardContent } from '@/components/ui/card';

const LeadNurturing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCalendlySchedule = () => {
    window.open('https://calendly.com/wokkah/marketing-automation', '_blank');
  };

  return (
    <MainLayout>
      <Helmet>
        <title>Lead Scoring & Nurturing | Marketing Automation | Wokkah</title>
        <meta name="description" content="Automatically identify your most promising leads and guide them through personalized conversion journeys." />
      </Helmet>

      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container">
          <Link to="/solutions/business-automation/marketing" className="inline-flex items-center text-primary hover:underline mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Marketing Automation
          </Link>
          
          <PageHeader 
            badge="Lead Scoring & Nurturing"
            title="Convert More Leads with Intelligent Nurturing"
            subtitle="Automatically identify your most promising leads and guide them through personalized conversion journeys."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-6">Identify and Prioritize High-Value Leads</h2>
              <p className="text-muted-foreground mb-6">
                Not all leads are created equal. Our lead scoring system helps you identify which prospects are most likely to convert, so you can focus your efforts where they'll have the biggest impact.
              </p>
              <ul className="space-y-4">
                {leadScoringFeatures.map((feature, index) => (
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
              <h2 className="text-2xl font-bold mb-6">Guide Leads Through Personalized Journeys</h2>
              <p className="text-muted-foreground mb-6">
                Once you've scored your leads, our nurturing platform takes over, delivering the right content at the right time to move prospects through your sales funnel automatically.
              </p>
              <ul className="space-y-4">
                {leadNurturingFeatures.map((feature, index) => (
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
            <h2 className="text-2xl font-bold mb-6 text-center">Multi-Channel Lead Nurturing</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
              Our platform allows you to nurture leads across multiple channels, creating a cohesive experience that meets prospects wherever they are.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {nurturingChannels.map((channel, index) => (
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
            <h2 className="text-3xl font-bold mb-6">Ready to Convert More Leads?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Schedule a consultation with our lead nurturing experts to discuss your business needs and learn how our platform can help you increase conversions and grow your business.
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

const leadScoringFeatures = [
  {
    title: "Behavioral Scoring",
    description: "Automatically score leads based on website interactions, email engagement, and other behaviors.",
    icon: <Users className="h-4 w-4 text-primary" />
  },
  {
    title: "Demographic Scoring",
    description: "Evaluate leads based on company size, industry, job title, and other firmographic data.",
    icon: <Filter className="h-4 w-4 text-primary" />
  },
  {
    title: "Lead Qualification",
    description: "Automatically qualify leads as MQLs or SQLs based on custom scoring criteria and thresholds.",
    icon: <ClipboardCheck className="h-4 w-4 text-primary" />
  }
];

const leadNurturingFeatures = [
  {
    title: "Automated Workflows",
    description: "Create sophisticated nurturing sequences with branching logic based on lead behavior.",
    icon: <Workflow className="h-4 w-4 text-primary" />
  },
  {
    title: "Content Mapping",
    description: "Deliver the right content at each stage of the buyer's journey based on interests and needs.",
    icon: <ClipboardCheck className="h-4 w-4 text-primary" />
  },
  {
    title: "Performance Tracking",
    description: "Monitor engagement, conversion rates, and ROI for each nurturing campaign and touchpoint.",
    icon: <BarChart4 className="h-4 w-4 text-primary" />
  }
];

const nurturingChannels = [
  {
    name: "Email",
    icon: <Mail className="h-6 w-6 text-primary" />
  },
  {
    name: "SMS",
    icon: <Phone className="h-6 w-6 text-primary" />
  },
  {
    name: "Social Media",
    icon: <Users className="h-6 w-6 text-primary" />
  },
  {
    name: "Chat",
    icon: <MessageSquare className="h-6 w-6 text-primary" />
  }
];

const benefitCards = [
  {
    title: "Higher Conversion Rates",
    description: "Increase lead-to-customer conversion rates by up to 50% with personalized nurturing.",
    icon: <Zap className="h-4 w-4 text-primary" />
  },
  {
    title: "Shorter Sales Cycles",
    description: "Reduce time to conversion by 23% with automated, targeted lead nurturing sequences.",
    icon: <Calendar className="h-4 w-4 text-primary" />
  },
  {
    title: "Better Sales & Marketing Alignment",
    description: "Bridge the gap between marketing and sales with clear lead qualification processes.",
    icon: <Users className="h-4 w-4 text-primary" />
  }
];

export default LeadNurturing;
