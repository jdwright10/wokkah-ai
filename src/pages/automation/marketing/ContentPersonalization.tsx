
import React, { useEffect } from 'react';
import MainLayout from '@/layout/MainLayout';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Megaphone, 
  ArrowLeft, 
  Calendar, 
  Users, 
  Globe, 
  BarChart4, 
  Zap, 
  MousePointer,
  FileText,
  UserCheck,
  Timer,
  Shuffle
} from 'lucide-react';
import PageHeader from '@/components/talent/PageHeader';
import { Card, CardContent } from '@/components/ui/card';

const ContentPersonalization = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCalendlySchedule = () => {
    window.open('https://calendly.com/wokkah/marketing-automation', '_blank');
  };

  return (
    <MainLayout>
      <Helmet>
        <title>Content Personalization | Marketing Automation | Wokkah</title>
        <meta name="description" content="Deliver dynamic website content tailored to each visitor's behavior, preferences, and stage in the buyer's journey." />
      </Helmet>

      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container">
          <Link to="/solutions/business-automation/marketing" className="inline-flex items-center text-primary hover:underline mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Marketing Automation
          </Link>
          
          <PageHeader 
            badge="Content Personalization"
            title="Personalize the Customer Experience"
            subtitle="Deliver dynamic website content tailored to each visitor's behavior, preferences, and stage in the buyer's journey."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-6">Create Tailored Website Experiences</h2>
              <p className="text-muted-foreground mb-6">
                Generic website experiences no longer meet consumer expectations. Our content personalization platform helps you create unique, relevant experiences for each visitor based on their needs and behaviors.
              </p>
              <ul className="space-y-4">
                {personalizationFeatures.slice(0, 3).map((feature, index) => (
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
              <h2 className="text-2xl font-bold mb-6">Optimize with AI-Powered Insights</h2>
              <p className="text-muted-foreground mb-6">
                Don't just guess what content will resonate—know it. Our AI-powered platform continuously analyzes visitor behavior to refine personalization strategies and improve results.
              </p>
              <ul className="space-y-4">
                {personalizationFeatures.slice(3).map((feature, index) => (
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
            <h2 className="text-2xl font-bold mb-6 text-center">What You Can Personalize</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              {personalizableElements.map((element, index) => (
                <div key={index} className="bg-neutral-50 p-6 rounded-lg text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    {element.icon}
                  </div>
                  <h3 className="font-medium">{element.name}</h3>
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
            <h2 className="text-3xl font-bold mb-6">Ready to Personalize Your Website?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Schedule a consultation with our personalization experts to discuss how our platform can help you create tailored experiences that convert more visitors into customers.
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

const personalizationFeatures = [
  {
    title: "Dynamic Content Blocks",
    description: "Create content modules that automatically adapt based on visitor attributes and behaviors.",
    icon: <Shuffle className="h-4 w-4 text-primary" />
  },
  {
    title: "Audience Segmentation",
    description: "Define detailed visitor segments based on demographics, behavior, source, and more.",
    icon: <Users className="h-4 w-4 text-primary" />
  },
  {
    title: "Personalization Rules",
    description: "Create sophisticated rules to determine what content appears for different audience segments.",
    icon: <FileText className="h-4 w-4 text-primary" />
  },
  {
    title: "Real-Time Personalization",
    description: "Adapt content instantly based on current session behavior and historical data.",
    icon: <Timer className="h-4 w-4 text-primary" />
  },
  {
    title: "A/B Testing",
    description: "Test different personalization strategies to identify what drives the best results.",
    icon: <Shuffle className="h-4 w-4 text-primary" />
  },
  {
    title: "Performance Analytics",
    description: "Track how personalized content impacts engagement, conversions, and other key metrics.",
    icon: <BarChart4 className="h-4 w-4 text-primary" />
  }
];

const personalizableElements = [
  {
    name: "Hero Sections",
    icon: <Globe className="h-6 w-6 text-primary" />
  },
  {
    name: "Product Recommendations",
    icon: <Megaphone className="h-6 w-6 text-primary" />
  },
  {
    name: "CTAs & Buttons",
    icon: <MousePointer className="h-6 w-6 text-primary" />
  },
  {
    name: "Content Offers",
    icon: <FileText className="h-6 w-6 text-primary" />
  }
];

const benefitCards = [
  {
    title: "Higher Conversion Rates",
    description: "Increase conversion rates by up to 300% with personalized website experiences.",
    icon: <Zap className="h-4 w-4 text-primary" />
  },
  {
    title: "Improved User Engagement",
    description: "Boost page views by 42% and time on site by 38% with relevant, personalized content.",
    icon: <UserCheck className="h-4 w-4 text-primary" />
  },
  {
    title: "Reduced Bounce Rates",
    description: "Lower bounce rates by 45% by showing visitors the content that matters most to them.",
    icon: <BarChart4 className="h-4 w-4 text-primary" />
  }
];

export default ContentPersonalization;
