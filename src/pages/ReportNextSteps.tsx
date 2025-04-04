
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, Calendar, CheckSquare, Briefcase } from 'lucide-react';
import MainLayout from '@/layout/MainLayout';

const ReportNextSteps = () => {
  // Check if user has downloaded the report
  const hasDownloadedReport = 
    localStorage.getItem('leadGeneratorEmail') && 
    localStorage.getItem('leadGeneratorName');

  return (
    <MainLayout showBreadcrumbs={false}>
      <div className="container max-w-4xl py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Thank You for Downloading Our AI Business Report
          </h1>
          <p className="text-lg text-muted-foreground">
            Here are three simple steps to continue your AI transformation journey with Wokkah
          </p>
        </div>

        <div className="space-y-8 md:space-y-16">
          {/* Step 1 */}
          <div className="relative">
            <div className="flex flex-col md:flex-row gap-6 items-center card-gradient p-6 rounded-lg">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-2xl font-bold gradient-text">1</span>
              </div>
              <div className="flex-grow md:pr-32">
                <h2 className="text-xl font-semibold mb-2">Take Our Free AI Needs Assessment</h2>
                <p className="text-muted-foreground mb-4">
                  Complete our 60-second survey to identify your company's AI implementation opportunities and challenges.
                </p>
                <Link to="/ai-needs-assessment">
                  <Button className="gap-2">
                    <CheckSquare className="h-4 w-4" />
                    Take the 60-Second Assessment
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative">
            <div className="flex flex-col md:flex-row gap-6 items-center card-gradient-alt p-6 rounded-lg">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-2xl font-bold gradient-text">2</span>
              </div>
              <div className="flex-grow md:pr-32">
                <h2 className="text-xl font-semibold mb-2">Schedule Your AI Opportunity Audit Call</h2>
                <p className="text-muted-foreground mb-4">
                  Book a free 30-minute consultation with our experts to discuss your pain points and discover how AI can supercharge your business.
                </p>
                <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                  <Button className="gap-2">
                    <Calendar className="h-4 w-4" />
                    Schedule Free 30-Minute Call
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Step 3 - Replaced with Let Our Experts section */}
          <div className="relative">
            <div className="flex flex-col md:flex-row gap-6 items-center card-gradient p-6 rounded-lg">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-2xl font-bold gradient-text">3</span>
              </div>
              <div className="flex-grow md:pr-32">
                <h2 className="text-xl font-semibold mb-2">Let Our Experts Bring Your Project to Life</h2>
                <p className="text-muted-foreground mb-4">
                  Share your project requirements and our team will handle everything from planning to execution, ensuring your vision becomes reality.
                </p>
                <Link to="/hire-wokkah">
                  <Button className="gap-2">
                    <Briefcase className="h-4 w-4" />
                    Hire Wokkah
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-4">Ready to Transform Your Business with AI?</h3>
          <p className="text-muted-foreground mb-6">
            Our team of experts is ready to help you navigate the AI landscape and implement solutions that drive real results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/ai-needs-assessment">
              <Button variant="outline" className="gap-2">
                Start with the Assessment
              </Button>
            </Link>
            <Link to="/hire-wokkah">
              <Button className="gap-2">
                Hire Our Experts
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ReportNextSteps;
