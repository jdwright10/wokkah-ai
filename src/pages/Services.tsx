import React, { useEffect } from 'react';
import MainLayout from '@/layout/MainLayout';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Brain, 
  Plug, 
  Shield, 
  AppWindow, 
  GraduationCap, 
  Megaphone,
  Zap,
  ArrowRight
} from 'lucide-react';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import BreadcrumbNav from '@/components/BreadcrumbNav';

const Services = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', isCurrent: true }
  ];

  return (
    <MainLayout customBreadcrumbs={<BreadcrumbNav items={breadcrumbItems} className="mb-6" />}>
      <Helmet>
        <title>AI-Powered Services | Wokkah</title>
        <meta name="description" content="Wokkah connects you with expert freelancers for all your AI implementation needs, from concept to deployment." />
        <meta name="keywords" content="AI services, web design, AI agents, app development, cybersecurity, machine learning, AI integration" />
      </Helmet>

      <section className="section pt-12 pb-16 bg-gradient-to-b from-white to-neutral-50">
        <div className="container">          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="chip inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">Our Services</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold">
              Expert Services to Infuse AI into Your Business
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              From concept to deployment, our platform connects you with expert freelancers for all your AI implementation needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceItems.map((item, index) => (
              <div 
                key={item.title}
                className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground mb-6">{item.description}</p>
                {item.link && (
                  <Link to={item.link}>
                    <Button variant="ghost" className="px-0 text-primary hover:text-primary/80 hover:bg-transparent group">
                      Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/solutions/business-automation">
              <Button size="lg" className="group">
                Explore Business Automation Tools <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

const serviceItems = [
  {
    title: "Web Design",
    description: "Create responsive, modern websites that engage users and drive conversions with the latest web technologies and design principles.",
    icon: <Code className="h-7 w-7 text-primary" />
  },
  {
    title: "AI Agent Creation",
    description: "Develop custom AI agents tailored to your unique business needs that can automate tasks, provide insights, and enhance customer interactions.",
    icon: <Brain className="h-7 w-7 text-primary" />
  },
  {
    title: "AI Integration",
    description: "Seamlessly integrate AI capabilities into your existing systems and workflows to enhance productivity and unlock new capabilities.",
    icon: <Plug className="h-7 w-7 text-primary" />
  },
  {
    title: "Cybersecurity",
    description: "Protect your business with AI-enhanced security solutions and protocols that adapt to evolving threats and vulnerabilities.",
    icon: <Shield className="h-7 w-7 text-primary" />
  },
  {
    title: "App Development",
    description: "Build cross-platform applications with powerful AI features that deliver exceptional user experiences on any device.",
    icon: <AppWindow className="h-7 w-7 text-primary" />
  },
  {
    title: "Training Courses",
    description: "Develop AI-assisted training programs to upskill your team and keep them at the forefront of technological advancements.",
    icon: <GraduationCap className="h-7 w-7 text-primary" />
  },
  {
    title: "Business Automation",
    description: "Transform your business operations with intelligent automation tools that save time, reduce errors, and boost productivity.",
    icon: <Zap className="h-7 w-7 text-primary" />,
    link: "/solutions/business-automation"
  },
  {
    title: "Machine Learning",
    description: "Implement custom machine learning solutions to extract value from your data and make more informed business decisions.",
    icon: <Brain className="h-7 w-7 text-primary" />
  }
];

export default Services;
