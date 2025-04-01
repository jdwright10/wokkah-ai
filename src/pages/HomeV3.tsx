
import React, { useEffect } from 'react';
import MainLayout from '@/layout/MainLayout';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import Partners from '@/components/Partners';
import SocialProof from '@/components/SocialProof';
import CallToAction from '@/components/CallToAction';

const HomeV3 = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      title: "Intelligent Workflow Automation",
      description: "Streamline repetitive tasks and complex processes with our AI-powered automation engine.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
    },
    {
      title: "Smart Document Processing",
      description: "Extract, classify, and process information from documents with remarkable accuracy.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
    },
    {
      title: "Data-Driven Insights",
      description: "Transform raw data into actionable intelligence with our advanced analytics platform.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600"><path d="M3 3v18h18"></path><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"></path></svg>
    },
    {
      title: "Seamless Integration",
      description: "Connect with your existing tools and platforms without disrupting your workflows.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-600"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
    }
  ];

  const benefits = [
    {
      title: "Increased Productivity",
      description: "Automate repetitive tasks and free up your team's time for higher-value work."
    },
    {
      title: "Cost Reduction",
      description: "Minimize operational expenses by streamlining processes and reducing manual effort."
    },
    {
      title: "Enhanced Accuracy",
      description: "Eliminate human error and ensure consistent quality in all your operations."
    },
    {
      title: "Scalable Growth",
      description: "Easily handle increased workloads without proportional increases in resources."
    },
    {
      title: "Data-Driven Decisions",
      description: "Make informed strategic choices based on comprehensive analytics and insights."
    },
    {
      title: "Competitive Advantage",
      description: "Stay ahead with cutting-edge AI technology that gives your business an edge."
    }
  ];

  return (
    <MainLayout>
      <Helmet>
        <title>Wokkah - AI Solutions for Business | Home V3</title>
        <meta name="description" content="Transform your business operations with Wokkah's AI-powered automation solutions." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20 md:py-32">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  The Future of Work
                </span>
                <br /> Is Intelligent Automation
              </h1>
              <p className="mt-6 text-lg text-gray-600 max-w-lg mx-auto lg:mx-0">
                Harness the power of AI to automate your business processes, 
                unlock hidden insights, and drive unprecedented growth.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  asChild
                >
                  <Link to="/solutions/business-automation">
                    Explore Solutions <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 bg-white rounded-2xl shadow-xl overflow-hidden p-6">
                <div className="grid grid-cols-2 gap-6">
                  {features.map((feature, index) => (
                    <div 
                      key={index}
                      className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-all duration-300"
                    >
                      <div className="h-12 w-12 rounded-full flex items-center justify-center bg-white shadow-sm mb-4">
                        {feature.icon}
                      </div>
                      <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                      <p className="text-sm text-gray-500">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Background decorations */}
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <Partners />

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Transform Your Business with AI-Powered Solutions</h2>
            <p className="mt-4 text-lg text-gray-600">
              Our intelligent automation platform delivers tangible benefits across your entire organization.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-t-4 border-t-blue-500 hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-start mb-4">
                    <CheckCircle className="text-blue-500 mr-3 mt-1 h-5 w-5" />
                    <h3 className="font-bold text-xl">{benefit.title}</h3>
                  </div>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              asChild
            >
              <Link to="/solutions">
                Discover All Solutions <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <SocialProof />

      {/* Call to Action */}
      <CallToAction />
    </MainLayout>
  );
};

export default HomeV3;
