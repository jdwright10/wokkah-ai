
import React, { useEffect } from 'react';
import MainLayout from '@/layout/MainLayout';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Megaphone, 
  BarChart, 
  Users, 
  Mail, 
  Share2, 
  Calendar,
  Globe,
  ArrowRight
} from 'lucide-react';
import PageHeader from '@/components/talent/PageHeader';

const MarketingAutomation = () => {
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
        <title>Marketing Automation Solutions | Wokkah</title>
        <meta name="description" content="Transform your marketing with AI-powered automation tools that save time, increase conversions, and deliver measurable results." />
      </Helmet>

      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container">
          <PageHeader 
            badge="Marketing Automation"
            title="Supercharge Your Marketing with Intelligent Automation"
            subtitle="Streamline campaigns, personalize customer journeys, and drive better results with our AI-powered marketing automation solutions."
          />
          
          <div className="text-center mb-12">
            <Button 
              size="lg" 
              className="mt-8"
              onClick={handleCalendlySchedule}
            >
              Schedule a Consultation
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {marketingFeatures.map((feature, index) => (
              <Link 
                key={index}
                to={feature.link || "#"}
                className={`block bg-white p-8 rounded-xl shadow-sm border border-neutral-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${!feature.link && 'pointer-events-none'}`}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                {feature.link && (
                  <div className="flex items-center text-primary text-sm font-medium group">
                    Learn more <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                )}
              </Link>
            ))}
          </div>
          
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-md border border-neutral-200 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Marketing?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's discuss how our marketing automation solutions can help you achieve your business goals. Schedule a no-obligation consultation with our marketing automation experts.
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

const marketingFeatures = [
  {
    title: "Email Campaign Automation",
    description: "Create sophisticated, personalized email sequences that nurture leads and convert customers at scale.",
    icon: <Mail className="h-6 w-6 text-primary" />,
    link: "/solutions/business-automation/marketing/email-campaigns"
  },
  {
    title: "Social Media Automation",
    description: "Schedule, publish, and analyze social media content across multiple platforms from a single dashboard.",
    icon: <Share2 className="h-6 w-6 text-primary" />,
    link: "/solutions/business-automation/marketing/social-media"
  },
  {
    title: "Website Building & Optimization",
    description: "Create responsive, conversion-optimized websites with AI-powered content and SEO recommendations.",
    icon: <Globe className="h-6 w-6 text-primary" />,
    link: "/solutions/business-automation/marketing/website-building"
  },
  {
    title: "Lead Scoring & Nurturing",
    description: "Automatically identify your most promising leads and guide them through personalized conversion journeys.",
    icon: <Users className="h-6 w-6 text-primary" />,
    link: "/solutions/business-automation/marketing/lead-nurturing"
  },
  {
    title: "Content Personalization",
    description: "Deliver dynamic website content tailored to each visitor's behavior, preferences, and stage in the buyer's journey.",
    icon: <Megaphone className="h-6 w-6 text-primary" />,
    link: "/solutions/business-automation/marketing/content-personalization"
  },
  {
    title: "Marketing Analytics",
    description: "Gain actionable insights with automated reporting and analytics that track campaign performance and ROI.",
    icon: <BarChart className="h-6 w-6 text-primary" />,
    link: "/solutions/business-automation/marketing/analytics"
  }
];

export default MarketingAutomation;
