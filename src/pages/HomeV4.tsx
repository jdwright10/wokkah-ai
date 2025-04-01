
import React, { useEffect } from 'react';
import MainLayout from '@/layout/MainLayout';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Shield, Clock, Zap, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import Partners from '@/components/Partners';
import SocialProof from '@/components/SocialProof';
import CallToAction from '@/components/CallToAction';

const HomeV4 = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <Helmet>
        <title>Wokkah - AI Solutions for Business | The StoryBrand Approach</title>
        <meta name="description" content="Transform your business operations with Wokkah's AI-powered automation solutions using a clear, StoryBrand approach." />
      </Helmet>

      {/* Hero - Character has a problem */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block">Tired of wasting time on</span>
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  repetitive business tasks?
                </span>
              </h1>
              <p className="mt-6 text-xl text-gray-700 max-w-xl mx-auto lg:mx-0">
                Your team should be focusing on growth, not drowning in manual processes.
                Every day spent on repetitive tasks is costing you valuable opportunities.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-md"
                  asChild
                >
                  <Link to="/solutions/business-automation">
                    See The Solution <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Visual representation of the problem */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-4 bg-red-50 rounded-lg border border-red-100">
                    <div className="bg-red-100 p-2 rounded-full">
                      <Clock className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">Time Wasted on Manual Tasks</h3>
                      <p className="text-gray-600">Teams spend up to 40% of their workweek on repetitive processes that could be automated.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 bg-yellow-50 rounded-lg border border-yellow-100">
                    <div className="bg-yellow-100 p-2 rounded-full">
                      <Shield className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">Error-Prone Processes</h3>
                      <p className="text-gray-600">Manual data entry and processing leads to costly mistakes and inconsistent results.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Zap className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">Missed Growth Opportunities</h3>
                      <p className="text-gray-600">While you're busy with operations, competitors using automation are moving ahead.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Background decorations */}
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* The Guide - Meet an Empathetic Guide with Authority */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">We Understand Your Challenges</h2>
            <p className="mt-4 text-lg text-gray-600">
              For over a decade, we've helped hundreds of businesses transform manual processes into automated workflows.
            </p>
          </div>
          
          {/* Social proof as authority builder */}
          <Partners />
        </div>
      </section>
      
      {/* The Plan - Give them a clear plan */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Your Path to Automation Mastery</h2>
            <p className="mt-4 text-lg text-gray-600">
              A simple, proven process to transform your business operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-8 text-center relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-lg">1</div>
              <h3 className="text-xl font-bold mt-4 mb-3">Identify Your Bottlenecks</h3>
              <p className="text-gray-600">We analyze your current processes to find automation opportunities with the highest ROI.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-8 text-center relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">2</div>
              <h3 className="text-xl font-bold mt-4 mb-3">Implement AI Solutions</h3>
              <p className="text-gray-600">Our team configures and deploys custom AI automation tailored to your specific needs.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-8 text-center relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-lg">3</div>
              <h3 className="text-xl font-bold mt-4 mb-3">Scale & Optimize</h3>
              <p className="text-gray-600">We continuously improve your automated systems as your business grows and evolves.</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              asChild
            >
              <Link to="/solutions/business-automation">
                See Our Process in Action <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Success - Show what success looks like */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Imagine Your Business Transformed</h2>
            <p className="mt-4 text-lg text-gray-600">
              Here's what life looks like after implementing our AI automation solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-t-4 border-t-green-500">
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <CheckCircle className="text-green-500 mr-3 mt-1 h-5 w-5" />
                  <h3 className="font-bold text-xl">60% Time Recovery</h3>
                </div>
                <p className="text-gray-600">Teams reclaim up to 60% of time previously spent on manual, repetitive tasks.</p>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-t-blue-500">
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <CheckCircle className="text-blue-500 mr-3 mt-1 h-5 w-5" />
                  <h3 className="font-bold text-xl">40% Cost Reduction</h3>
                </div>
                <p className="text-gray-600">Operational expenses decrease significantly through efficient automated workflows.</p>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-t-purple-500">
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <CheckCircle className="text-purple-500 mr-3 mt-1 h-5 w-5" />
                  <h3 className="font-bold text-xl">90% Fewer Errors</h3>
                </div>
                <p className="text-gray-600">Automated processes drastically reduce human error and improve overall accuracy.</p>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-t-pink-500">
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <CheckCircle className="text-pink-500 mr-3 mt-1 h-5 w-5" />
                  <h3 className="font-bold text-xl">24/7 Operations</h3>
                </div>
                <p className="text-gray-600">AI-powered systems work around the clock, ensuring business continuity.</p>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-t-yellow-500">
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <CheckCircle className="text-yellow-500 mr-3 mt-1 h-5 w-5" />
                  <h3 className="font-bold text-xl">Scalable Growth</h3>
                </div>
                <p className="text-gray-600">Handle 3x the workload without proportionally increasing staff or resources.</p>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-t-teal-500">
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <CheckCircle className="text-teal-500 mr-3 mt-1 h-5 w-5" />
                  <h3 className="font-bold text-xl">Data-Driven Decisions</h3>
                </div>
                <p className="text-gray-600">Gain actionable insights from automated data collection and analysis.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Testimonials - Social proof */}
      <SocialProof />
      
      {/* Call to Action - Direct call to action */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stop Wasting Time on Manual Tasks
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Start focusing on what truly matters: growing your business and outpacing competition.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="outline-white"
                className="bg-white text-purple-600 hover:bg-white/90 border-none"
                asChild
              >
                <Link to="/solutions/business-automation">
                  See Our Solutions <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline-white"
                asChild
              >
                <Link to="/hire-wokkah">
                  Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <p className="mt-8 text-sm text-white/80">
              No risk. No obligations. See how we can transform your business today.
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default HomeV4;
