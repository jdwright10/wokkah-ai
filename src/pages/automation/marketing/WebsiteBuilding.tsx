
import React, { useEffect } from 'react';
import MainLayout from '@/layout/MainLayout';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  MousePointer, 
  Search, 
  Smartphone, 
  Zap, 
  Code,
  ArrowLeft,
  Calendar
} from 'lucide-react';
import PageHeader from '@/components/talent/PageHeader';
import { Card, CardContent } from '@/components/ui/card';

const WebsiteBuilding = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCalendlySchedule = () => {
    // Open Calendly in a new window
    window.open('https://calendly.com/wokkah/marketing-automation', '_blank');
  };

  return (
    <MainLayout>
      <Helmet>
        <title>Website Building & Optimization | Marketing Automation | Wokkah</title>
        <meta name="description" content="Create responsive, conversion-optimized websites with AI-powered content and SEO recommendations." />
      </Helmet>

      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container">
          <Link to="/solutions/business-automation/marketing" className="inline-flex items-center text-primary hover:underline mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Marketing Automation
          </Link>
          
          <PageHeader 
            badge="Website Building & Optimization"
            title="Create High-Converting Websites with AI-Powered Tools"
            subtitle="Build responsive, SEO-friendly websites that engage visitors and drive conversions with our intelligent website building platform."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-6">Transform Your Online Presence</h2>
              <p className="text-muted-foreground mb-6">
                Your website is the cornerstone of your digital marketing strategy. With our AI-powered website building tools, you can create stunning, high-performing websites without technical expertise.
              </p>
              <ul className="space-y-4">
                {websiteFeatures.slice(0, 3).map((feature, index) => (
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
              <h2 className="text-2xl font-bold mb-6">Optimize for Performance</h2>
              <p className="text-muted-foreground mb-6">
                Creating a beautiful website is just the beginning. Our platform helps you continuously optimize your site for conversions, engagement, and search rankings.
              </p>
              <ul className="space-y-4">
                {websiteFeatures.slice(3).map((feature, index) => (
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {processSteps.map((step, index) => (
              <Card key={index} className="border-t-4 border-t-primary">
                <CardContent className="pt-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="font-bold text-primary">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-md border border-neutral-200 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Build Your Dream Website?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Schedule a consultation with our website experts to discuss your project needs and learn how our AI-powered platform can help you create a website that drives results.
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

const websiteFeatures = [
  {
    title: "Drag-and-Drop Builder",
    description: "Create professional-looking pages without coding knowledge using our intuitive drag-and-drop interface.",
    icon: <MousePointer className="h-4 w-4 text-primary" />
  },
  {
    title: "Responsive Design",
    description: "Automatically optimize your website for all devices and screen sizes for a seamless user experience.",
    icon: <Smartphone className="h-4 w-4 text-primary" />
  },
  {
    title: "AI Content Generation",
    description: "Generate SEO-friendly content, headlines, and calls-to-action with our AI content assistant.",
    icon: <Globe className="h-4 w-4 text-primary" />
  },
  {
    title: "SEO Optimization",
    description: "Improve your search rankings with built-in SEO tools and recommendations tailored to your business.",
    icon: <Search className="h-4 w-4 text-primary" />
  },
  {
    title: "Performance Analytics",
    description: "Track visitor behavior, conversion rates, and other key metrics to continuously improve your site.",
    icon: <Zap className="h-4 w-4 text-primary" />
  },
  {
    title: "Custom Code Integration",
    description: "Add custom code, scripts, and third-party integrations to extend your website's functionality.",
    icon: <Code className="h-4 w-4 text-primary" />
  }
];

const processSteps = [
  {
    title: "Discover & Plan",
    description: "We'll work with you to understand your business goals, target audience, and website requirements."
  },
  {
    title: "Design & Build",
    description: "Our team will create a custom website design and build it using our AI-powered platform."
  },
  {
    title: "Launch & Optimize",
    description: "After launch, we'll continuously monitor performance and make data-driven optimizations."
  }
];

export default WebsiteBuilding;
