
import React, { useEffect } from 'react';
import MainLayout from '@/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { 
  ListChecks, 
  BarChart3, 
  Calendar, 
  MessageSquare, 
  Users, 
  FlaskConical,
  LucideIcon
} from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Helmet } from 'react-helmet';

const ProjectManagement = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <Helmet>
        <title>AI-Enhanced Project Management Tools | Wokkah</title>
        <meta name="description" content="Streamline your projects with Wokkah's AI-enhanced project management tools. Plan, track, and deliver with greater efficiency and predictability." />
        <meta name="keywords" content="project management, AI tools, task management, resource allocation, project analytics, team collaboration" />
      </Helmet>
      
      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-neutral-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
              Project Management
            </span>
            <h1 className="text-4xl md:text-5xl font-bold">
              Streamline Your Projects With AI-Enhanced Management
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Our intelligent project management tools help you plan, track, and deliver projects with greater efficiency and predictability.
            </p>
            <Button size="lg" className="mt-8">
              Explore Project Management
            </Button>
          </div>

          {/* Feature Section */}
          <div className="mt-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Dashboard Preview */}
          <div className="mt-24 text-center">
            <h2 className="text-3xl font-bold mb-6">Intuitive Project Dashboard</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Get a bird's-eye view of all your projects with our comprehensive dashboard that highlights progress, bottlenecks, and upcoming deadlines.
            </p>
            <div className="bg-white rounded-xl shadow-md border border-neutral-100 p-6">
              <AspectRatio ratio={16 / 9} className="bg-neutral-50 rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/474fc946-2319-4ffc-88e0-5ac43ed3140f.png" 
                  alt="Project Management Dashboard showing an executive overview with active projects, schedule status, and team velocity metrics" 
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
            </div>
          </div>

          {/* Testimonial */}
          <div className="mt-24 bg-primary/5 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl italic text-muted-foreground mb-6">
                "The AI-powered project management tools have transformed how we work. 
                We've reduced our planning time by 40% and improved delivery accuracy significantly."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-neutral-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-muted-foreground">CTO, TechInnovate</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="mt-24 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Project Management?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Join thousands of teams who have improved their project delivery and team collaboration with our AI-enhanced tools.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg">Start Free Trial</Button>
              <Button size="lg" variant="outline">Book a Demo</Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

const features: Feature[] = [
  {
    title: "Task Management",
    description: "Create, assign, and track tasks with intelligent prioritization and deadline reminders.",
    icon: ListChecks
  },
  {
    title: "Resource Allocation",
    description: "Optimize team workloads and resource distribution with AI-powered recommendations.",
    icon: Users
  },
  {
    title: "Analytics Dashboard",
    description: "Get real-time insights into project progress, team performance, and potential risks.",
    icon: BarChart3
  },
  {
    title: "Project Timeline",
    description: "Visualize project schedules with interactive Gantt charts and automatic deadline adjustments.",
    icon: Calendar
  },
  {
    title: "Team Collaboration",
    description: "Foster communication with integrated messaging, file sharing, and feedback tools.",
    icon: MessageSquare
  },
  {
    title: "Risk Assessment",
    description: "Identify potential issues before they arise with AI-powered risk prediction and mitigation suggestions.",
    icon: FlaskConical
  }
];

export default ProjectManagement;
