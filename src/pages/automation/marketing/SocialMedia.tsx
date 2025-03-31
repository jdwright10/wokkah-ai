
import React, { useEffect } from 'react';
import MainLayout from '@/layout/MainLayout';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Share2, 
  ArrowLeft, 
  Calendar, 
  Instagram, 
  Facebook, 
  X, 
  Linkedin, 
  Clock, 
  BarChart4,
  MessageSquare,
  Users,
  CheckCircle2
} from 'lucide-react';
import PageHeader from '@/components/talent/PageHeader';
import { Card, CardContent } from '@/components/ui/card';

const SocialMedia = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCalendlySchedule = () => {
    window.open('https://calendly.com/wokkah/marketing-automation', '_blank');
  };

  return (
    <MainLayout>
      <Helmet>
        <title>Social Media Automation | Marketing Automation | Wokkah</title>
        <meta name="description" content="Schedule, publish, and analyze social media content across multiple platforms from a single dashboard." />
      </Helmet>

      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container">
          <Link to="/solutions/business-automation/marketing" className="inline-flex items-center text-primary hover:underline mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Marketing Automation
          </Link>
          
          <PageHeader 
            badge="Social Media Automation"
            title="Streamline Your Social Media Management"
            subtitle="Schedule, publish, and analyze social media content across multiple platforms from a single dashboard."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-6">Manage All Your Social Media in One Place</h2>
              <p className="text-muted-foreground mb-6">
                Social media is essential for business growth, but managing multiple platforms can be time-consuming. Our social media automation solution helps you create, schedule, and analyze content across all major platforms from a single dashboard.
              </p>
              <ul className="space-y-4">
                {socialMediaFeatures.slice(0, 3).map((feature, index) => (
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
              <h2 className="text-2xl font-bold mb-6">Optimize Your Social Strategy</h2>
              <p className="text-muted-foreground mb-6">
                Don't just post content—optimize it for maximum engagement. Our platform analyzes performance data to help you understand what works and refine your strategy for better results.
              </p>
              <ul className="space-y-4">
                {socialMediaFeatures.slice(3).map((feature, index) => (
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
            <h2 className="text-2xl font-bold mb-6 text-center">Supported Platforms</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {socialPlatforms.map((platform, index) => (
                <div key={index} className="flex flex-col items-center p-4 rounded-lg bg-neutral-50">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    {platform.icon}
                  </div>
                  <h3 className="font-medium text-center">{platform.name}</h3>
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
            <h2 className="text-3xl font-bold mb-6">Ready to Automate Your Social Media?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Schedule a consultation with our social media experts to discuss your business needs and learn how our automation platform can help you save time and improve results.
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

const socialMediaFeatures = [
  {
    title: "Content Calendar",
    description: "Plan and schedule your social media content weeks or months in advance with our visual calendar.",
    icon: <Calendar className="h-4 w-4 text-primary" />
  },
  {
    title: "Cross-Platform Posting",
    description: "Create a post once and customize it for each platform—no need to log in to multiple accounts.",
    icon: <Share2 className="h-4 w-4 text-primary" />
  },
  {
    title: "Auto-Scheduling",
    description: "Our AI determines the optimal posting times for maximum engagement based on your audience.",
    icon: <Clock className="h-4 w-4 text-primary" />
  },
  {
    title: "Performance Analytics",
    description: "Track engagement, reach, and conversions across all platforms with unified reporting dashboards.",
    icon: <BarChart4 className="h-4 w-4 text-primary" />
  },
  {
    title: "Engagement Management",
    description: "Monitor and respond to comments and messages from all platforms in a single inbox.",
    icon: <MessageSquare className="h-4 w-4 text-primary" />
  },
  {
    title: "Audience Insights",
    description: "Understand your followers better with demographic data and engagement patterns.",
    icon: <Users className="h-4 w-4 text-primary" />
  }
];

const socialPlatforms = [
  {
    name: "Instagram",
    icon: <Instagram className="h-6 w-6 text-primary" />
  },
  {
    name: "Facebook",
    icon: <Facebook className="h-6 w-6 text-primary" />
  },
  {
    name: "X",
    icon: <X className="h-6 w-6 text-primary" />
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="h-6 w-6 text-primary" />
  }
];

const benefitCards = [
  {
    title: "Save Time",
    description: "Reduce social media management time by up to 75% with automated scheduling and cross-platform posting.",
    icon: <Clock className="h-4 w-4 text-primary" />
  },
  {
    title: "Increase Engagement",
    description: "Boost engagement rates by 40% with AI-optimized posting times and content recommendations.",
    icon: <Users className="h-4 w-4 text-primary" />
  },
  {
    title: "Ensure Consistency",
    description: "Maintain a consistent brand presence across all platforms with planned content calendars.",
    icon: <CheckCircle2 className="h-4 w-4 text-primary" />
  }
];

export default SocialMedia;
