
import React, { useEffect } from 'react';
import MainLayout from '@/layout/MainLayout';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { 
  UserPlus, 
  Search, 
  ClipboardCheck, 
  Calendar, 
  MessagesSquare, 
  FileText,
  ArrowRight
} from 'lucide-react';
import DemoRequestForm from '@/components/DemoRequestForm';
import { Button } from '@/components/ui/button';

const HiringAutomation = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <Helmet>
        <title>Hiring Automation Solutions | Wokkah</title>
        <meta name="description" content="Transform your recruitment process with AI-powered hiring automation tools for job posting, candidate screening, and interview scheduling." />
      </Helmet>

      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">Hiring Automation</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold">
              Streamline Your Recruitment Process with Intelligent Automation
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Find, screen, and hire the best talent faster with our AI-powered recruitment automation solutions that reduce time-to-hire and improve candidate quality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {hiringFeatures.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground mb-6">{feature.description}</p>
                <Link to={feature.link}>
                  <Button variant="ghost" className="group text-primary hover:text-primary/80 hover:bg-transparent px-0">
                    Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
          
          <DemoRequestForm serviceName="Hiring Automation" />
        </div>
      </section>
    </MainLayout>
  );
};

const hiringFeatures = [
  {
    title: "Job Distribution",
    description: "Automatically post open positions to multiple job boards, social media, and career sites to maximize applicant reach.",
    icon: <UserPlus className="h-6 w-6 text-primary" />,
    link: "/solutions/business-automation/hiring/job-distribution"
  },
  {
    title: "AI Resume Screening",
    description: "Efficiently analyze resumes and applications to identify the best candidates based on skills, experience, and job requirements.",
    icon: <Search className="h-6 w-6 text-primary" />,
    link: "/solutions/business-automation/hiring/resume-screening"
  },
  {
    title: "Skills Assessment",
    description: "Automate pre-employment assessments to evaluate candidates' qualifications and job-readiness with customizable tests.",
    icon: <ClipboardCheck className="h-6 w-6 text-primary" />,
    link: "/solutions/business-automation/hiring/skills-assessment"
  },
  {
    title: "Interview Scheduling",
    description: "Eliminate scheduling hassles with automated calendar coordination between candidates and hiring managers.",
    icon: <Calendar className="h-6 w-6 text-primary" />,
    link: "/solutions/business-automation/hiring/interview-scheduling"
  },
  {
    title: "Candidate Communication",
    description: "Maintain engagement with automated, personalized messaging that keeps candidates informed throughout the process.",
    icon: <MessagesSquare className="h-6 w-6 text-primary" />,
    link: "/solutions/business-automation/hiring/candidate-communication"
  },
  {
    title: "Onboarding Preparation",
    description: "Streamline the transition from candidate to employee with automated document collection and onboarding workflows.",
    icon: <FileText className="h-6 w-6 text-primary" />,
    link: "/solutions/business-automation/hiring/onboarding-preparation"
  }
];

export default HiringAutomation;
