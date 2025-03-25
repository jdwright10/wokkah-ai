
import React, { useEffect } from 'react';
import MainLayout from '@/layout/MainLayout';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  UserPlus, 
  ClipboardCheck, 
  Briefcase,
  GraduationCap,
  Calendar
} from 'lucide-react';

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
        <title>HR Automation Solutions | Wokkah</title>
        <meta name="description" content="Streamline your HR processes with AI-powered automation tools that enhance recruitment, onboarding, and employee management." />
      </Helmet>

      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-purple-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">HR Automation</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold">
              Transform Your Human Resources with Intelligent Automation
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Streamline hiring, onboarding, performance management, and employee engagement with our AI-powered HR automation solutions.
            </p>
            <Button 
              size="lg" 
              className="mt-8"
              onClick={handleCalendlySchedule}
            >
              Schedule a Consultation
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
          
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-md border border-neutral-200 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your HR Department?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's discuss how our HR automation solutions can help you streamline processes and enhance employee experience. Schedule a no-obligation consultation with our HR automation experts.
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

const hrFeatures = [
  {
    title: "Recruitment Automation",
    description: "Streamline your hiring process with AI-powered candidate sourcing, screening, and interview scheduling.",
    icon: <UserPlus className="h-6 w-6 text-primary" />
  },
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
