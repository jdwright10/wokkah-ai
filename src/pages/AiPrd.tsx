
import React, { useEffect } from 'react';
import MainLayout from '@/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Brain, FileText, Sparkles, Clock, Wand2, Users } from 'lucide-react';
import { Helmet } from 'react-helmet';

const AiPrd = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <Helmet>
        <title>AI-Powered PRD Generator | Wokkah</title>
        <meta name="description" content="Transform your ideas into detailed product requirements with our AI-powered PRD generator. Define scope, features, and specifications faster." />
        <meta name="keywords" content="PRD, product requirements, AI generator, product management, development documentation" />
      </Helmet>

      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-neutral-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
              AI-Powered PRD
            </span>
            <h1 className="text-4xl md:text-5xl font-bold">
              Transform Your Ideas Into Detailed Product Requirements
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Our AI-powered Product Requirements Document (PRD) generator helps you define your project scope, features, and specifications with unprecedented clarity and speed.
            </p>
            <Button size="lg" className="mt-8">
              Try AI PRD Generator
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">How It Works</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Simply describe your project idea in plain language, and our AI will generate a comprehensive PRD that you can refine, export, and share with your team.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Describe Your Vision</h3>
                    <p className="text-muted-foreground">Explain your idea in simple terms—what problem it solves and for whom.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">AI Generation</h3>
                    <p className="text-muted-foreground">Our AI analyzes your input and generates a structured PRD with all essential components.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Wand2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Refine & Customize</h3>
                    <p className="text-muted-foreground">Edit and enhance the generated PRD to perfectly match your vision and requirements.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md border border-neutral-100">
              <h3 className="text-xl font-bold mb-4">Sample PRD Output</h3>
              <div className="space-y-4">
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <h4 className="font-medium mb-2">Project Overview</h4>
                  <p className="text-sm text-muted-foreground">A mobile application that helps users track and reduce their carbon footprint through personalized recommendations and community challenges.</p>
                </div>
                
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <h4 className="font-medium mb-2">Target Audience</h4>
                  <p className="text-sm text-muted-foreground">Environmentally conscious individuals aged 25-45 who want to make sustainable lifestyle changes but need guidance and motivation.</p>
                </div>
                
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <h4 className="font-medium mb-2">Key Features</h4>
                  <ul className="text-sm text-muted-foreground list-disc list-inside">
                    <li>Carbon footprint calculator</li>
                    <li>Personalized eco-friendly recommendations</li>
                    <li>Community challenges and leaderboards</li>
                    <li>Progress tracking and milestone rewards</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-24">
            <h2 className="text-3xl font-bold text-center mb-12">Benefits of AI-Powered PRDs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 text-center">
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Save Time</h3>
                <p className="text-muted-foreground">Generate comprehensive PRDs in minutes instead of days, accelerating your product development cycle.</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 text-center">
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Increase Clarity</h3>
                <p className="text-muted-foreground">Eliminate ambiguity with structured, comprehensive documentation that leaves no room for misinterpretation.</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 text-center">
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Improve Collaboration</h3>
                <p className="text-muted-foreground">Create a shared understanding among stakeholders, developers, and designers to ensure everyone is aligned.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AiPrd;
