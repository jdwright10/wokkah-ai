
import React, { useEffect } from 'react';
import MainLayout from '@/layout/MainLayout';
import { Helmet } from 'react-helmet';
import { 
  Users, 
  UserPlus, 
  Clock, 
  Award, 
  Heart, 
  ClipboardList,
  MessageSquare,
  Calendar,
  Brain,
  BarChart,
  ArrowLeft
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import DemoRequestForm from '@/components/DemoRequestForm';
import { Link } from 'react-router-dom';
import BreadcrumbNav from '@/components/BreadcrumbNav';

const HRAutomation = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Define breadcrumb items
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Solutions', path: '/solutions' },
    { label: 'Business Automation', path: '/solutions/business-automation' },
    { label: 'HR Automation', isCurrent: true }
  ];

  return (
    <MainLayout customBreadcrumbs={<BreadcrumbNav items={breadcrumbItems} className="mb-6" />}>
      <Helmet>
        <title>HR & Hiring Automation Solutions | Wokkah</title>
        <meta name="description" content="Streamline your HR processes with AI-powered automation tools for recruitment, onboarding, performance management, and employee engagement." />
      </Helmet>

      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-purple-50">
        <div className="container">
          <Link to="/solutions/business-automation" className="inline-flex items-center text-primary hover:underline mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Business Automation
          </Link>
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">HR & Hiring Automation</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold">
              Transform Your HR and Talent Acquisition with Intelligent Automation
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Streamline your entire employee lifecycle from recruitment to retirement with AI-powered tools that save time, reduce costs, and improve the employee experience.
            </p>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">Talent Acquisition Automation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hiringFeatures.map((feature, index) => (
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
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">Employee Management Automation</h2>
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
          
          <DemoRequestForm serviceName="HR & Hiring Automation" />
        </div>
      </section>
    </MainLayout>
  );
};

const hiringFeatures = [
  {
    title: "Job Distribution",
    description: "Automatically post job openings to multiple job boards, career sites, and social platforms with AI-optimized job descriptions to attract top talent.",
    icon: <UserPlus className="h-6 w-6 text-primary" />
  },
  {
    title: "AI Resume Screening",
    description: "Intelligently scan, parse, and rank resumes based on job requirements, skills matching, and candidate potential to identify the best applicants.",
    icon: <Brain className="h-6 w-6 text-primary" />
  },
  {
    title: "Candidate Communication",
    description: "Maintain engagement with automated, personalized emails, SMS, and chatbots that keep candidates informed throughout the hiring process.",
    icon: <MessageSquare className="h-6 w-6 text-primary" />
  },
  {
    title: "Interview Scheduling",
    description: "Eliminate scheduling headaches with automated calendar management, interviewer coordination, and candidate self-scheduling tools.",
    icon: <Calendar className="h-6 w-6 text-primary" />
  },
  {
    title: "Skills Assessment",
    description: "Deliver customized pre-employment tests and skill evaluations with automated scoring to objectively assess candidate qualifications.",
    icon: <Award className="h-6 w-6 text-primary" />
  },
  {
    title: "Onboarding Preparation",
    description: "Streamline the transition from candidate to employee with automated document collection, welcome sequences, and training enrollment.",
    icon: <ClipboardList className="h-6 w-6 text-primary" />
  }
];

const hrFeatures = [
  {
    title: "Employee Onboarding",
    description: "Create seamless onboarding experiences with automated workflows for paperwork, training, introductions, and equipment provisioning.",
    icon: <Users className="h-6 w-6 text-primary" />
  },
  {
    title: "Time & Attendance",
    description: "Automate time tracking, schedule management, and absence requests with intelligent systems that integrate with payroll and compliance.",
    icon: <Clock className="h-6 w-6 text-primary" />
  },
  {
    title: "Performance Management",
    description: "Streamline review cycles, goal setting, feedback collection, and development planning with intelligent performance management tools.",
    icon: <BarChart className="h-6 w-6 text-primary" />
  },
  {
    title: "Employee Engagement",
    description: "Boost satisfaction and retention with automated pulse surveys, recognition programs, and personalized employee communications.",
    icon: <Heart className="h-6 w-6 text-primary" />
  }
];

export default HRAutomation;
