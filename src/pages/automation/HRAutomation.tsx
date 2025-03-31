
import React, { useEffect } from 'react';
import MainLayout from '@/layout/MainLayout';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Users, 
  UserPlus, 
  ClipboardCheck, 
  Briefcase,
  GraduationCap,
  Calendar,
  FileText,
  MessagesSquare,
  Search,
  ArrowRight
} from 'lucide-react';
import PageHeader from '@/components/talent/PageHeader';

const HRAutomation = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCalendlySchedule = () => {
    // Open Calendly in a new window
    window.open('https://calendly.com/wokkah/hr-automation', '_blank');
  };

  return (
    <MainLayout>
      <Helmet>
        <title>HR & Recruitment Automation Solutions | Wokkah</title>
        <meta name="description" content="Streamline your HR and recruitment processes with AI-powered automation tools that enhance hiring, onboarding, and employee management." />
      </Helmet>

      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-purple-50">
        <div className="container">
          <PageHeader 
            badge="HR & Recruitment Automation"
            title="Transform Human Resources with Intelligent Automation"
            subtitle="Streamline hiring, onboarding, performance management, and employee engagement with our AI-powered HR automation solutions."
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
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Recruitment & Hiring Automation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hiringFeatures.map((feature, index) => (
                <Link 
                  key={index}
                  to={feature.link || "#"}
                  className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
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
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Employee Management Automation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hrFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-md border border-neutral-200 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your HR Department?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's discuss how our HR and recruiting automation solutions can help you streamline processes and enhance employee experience. Schedule a no-obligation consultation with our HR automation experts.
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

const hiringFeatures = [
  {
    title: "Job Distribution",
    description: "Automatically post open positions to multiple job boards, social media, and career sites to maximize applicant reach.",
    icon: <UserPlus className="h-6 w-6 text-primary" />,
    link: "/solutions/business-automation/hr/job-distribution"
  },
  {
    title: "AI Resume Screening",
    description: "Efficiently analyze resumes and applications to identify the best candidates based on skills, experience, and job requirements.",
    icon: <Search className="h-6 w-6 text-primary" />,
    link: "/solutions/business-automation/hr/resume-screening"
  },
  {
    title: "Skills Assessment",
    description: "Automate pre-employment assessments to evaluate candidates' qualifications and job-readiness with customizable tests.",
    icon: <ClipboardCheck className="h-6 w-6 text-primary" />,
    link: "/solutions/business-automation/hr/skills-assessment"
  },
  {
    title: "Interview Scheduling",
    description: "Eliminate scheduling hassles with automated calendar coordination between candidates and hiring managers.",
    icon: <Calendar className="h-6 w-6 text-primary" />,
    link: "/solutions/business-automation/hr/interview-scheduling"
  },
  {
    title: "Candidate Communication",
    description: "Maintain engagement with automated, personalized messaging that keeps candidates informed throughout the process.",
    icon: <MessagesSquare className="h-6 w-6 text-primary" />,
    link: "/solutions/business-automation/hr/candidate-communication"
  },
  {
    title: "Onboarding Preparation",
    description: "Streamline the transition from candidate to employee with automated document collection and onboarding workflows.",
    icon: <FileText className="h-6 w-6 text-primary" />,
    link: "/solutions/business-automation/hr/onboarding-preparation"
  }
];

const hrFeatures = [
  {
    title: "Employee Onboarding",
    description: "Automate paperwork, training schedules, and welcome workflows to create a seamless onboarding experience.",
    icon: <Briefcase className="h-6 w-6 text-primary" />
  },
  {
    title: "Performance Management",
    description: "Simplify goal setting, feedback collection, and performance reviews with automated workflows.",
    icon: <ClipboardCheck className="h-6 w-6 text-primary" />
  },
  {
    title: "Employee Engagement",
    description: "Build a better workplace culture with automated pulse surveys, recognition programs, and feedback loops.",
    icon: <Users className="h-6 w-6 text-primary" />
  },
  {
    title: "Training & Development",
    description: "Automate learning pathways, skill assessments, and professional development tracking for your team.",
    icon: <GraduationCap className="h-6 w-6 text-primary" />
  },
  {
    title: "HR Analytics",
    description: "Gain actionable insights with automated reporting on workforce metrics, turnover, and engagement.",
    icon: <Users className="h-6 w-6 text-primary" />
  }
];

export default HRAutomation;
