
import React, { useEffect } from 'react';
import MainLayout from '@/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { 
  Briefcase, 
  Zap, 
  GraduationCap, 
  BadgeCheck, 
  Calendar, 
  Users,
  Globe,
  ShieldCheck,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const BecomeFreelancer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-white/20 mb-6">
                Freelancer Opportunities
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Turn Your Skills Into a Thriving Freelance Career
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Join thousands of professionals who have transformed their expertise into successful freelance businesses on our platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                  Apply Now
                  <ArrowRight className="ml-1 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="rounded-xl bg-white/10 backdrop-blur-sm p-8 border border-white/20 shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Why Join Wokkah?</h3>
              <ul className="space-y-4">
                {[
                  { icon: <Briefcase className="h-5 w-5" />, text: "Access to high-quality clients" },
                  { icon: <ShieldCheck className="h-5 w-5" />, text: "Secure, on-time payments" },
                  { icon: <GraduationCap className="h-5 w-5" />, text: "Free skill development resources" },
                  { icon: <Zap className="h-5 w-5" />, text: "AI-powered tools to boost productivity" },
                  { icon: <Users className="h-5 w-5" />, text: "Community of like-minded professionals" }
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="bg-white/20 rounded-full p-2">
                      {item.icon}
                    </div>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
              Platform Benefits
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Everything You Need to Succeed as a Freelancer
            </h2>
            <p className="text-lg text-muted-foreground">
              Our platform provides all the tools, resources, and opportunities you need to build a successful freelance career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Tools Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
                AI-Powered Tools
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Boost Your Productivity with Cutting-Edge AI
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our platform integrates advanced AI tools designed specifically for freelancers to help you work smarter, faster, and deliver better results.
              </p>
              
              <div className="space-y-6">
                {aiTools.map((tool, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-700 flex items-center justify-center text-white flex-shrink-0">
                      {tool.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">{tool.title}</h3>
                      <p className="text-muted-foreground">{tool.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-xl border border-neutral-100">
              <div className="rounded-lg bg-gradient-to-br from-blue-600 to-purple-700 p-4 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <div className="flex-1 text-xs text-center">Wokkah AI Assistant</div>
                </div>
                <div className="space-y-3">
                  <div className="bg-white/10 rounded-lg p-3 text-sm">
                    <p>Hi! I'm your AI assistant. How can I help with your project today?</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3 text-sm ml-auto max-w-[80%]">
                    <p>I need help creating a project proposal for a client.</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 text-sm">
                    <p>I can help with that! I'll generate a professional proposal template based on your client's requirements.</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-center text-sm text-muted-foreground">
                Real-time AI assistance helps you with proposals, code, designs, and more
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skill Development Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-neutral-50 p-8 rounded-xl shadow-sm border border-neutral-100">
              <div className="space-y-4">
                {courses.map((course, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-neutral-100 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-600 to-purple-700 flex items-center justify-center text-white flex-shrink-0">
                      {course.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{course.title}</h4>
                      <p className="text-sm text-muted-foreground">{course.modules} modules</p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      course.level === 'Beginner' ? 'bg-green-100 text-green-700' :
                      course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {course.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
                Skill Development
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Level Up Your Skills with Free Courses
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Access our library of courses and workshops designed to help you stay competitive in the market and expand your service offerings.
              </p>
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-700 text-white hover:from-blue-700 hover:to-purple-800">
                Browse All Courses
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
              Success Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Hear From Our Freelancers
            </h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of freelancers who have found success on our platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="mb-4 flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-neutral-200 mr-4"></div>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Freelance Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join our platform today and gain access to clients, tools, and resources that will help you succeed.
            </p>
            <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
              Apply Now
              <ArrowRight className="ml-1 h-5 w-5" />
            </Button>
            <p className="mt-6 text-white/80">
              Application review typically takes 1-2 business days
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

// Data for the benefits section
const benefits = [
  {
    icon: <Briefcase className="h-6 w-6" />,
    title: "Access to Quality Clients",
    description: "Connect with pre-vetted clients looking for your specific skills, ensuring you work on meaningful projects with fair compensation."
  },
  {
    icon: <Calendar className="h-6 w-6" />,
    title: "Flexible Work Schedule",
    description: "Choose your own hours and work from anywhere. Our platform lets you maintain the perfect work-life balance."
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Secure Payments",
    description: "Our payment protection ensures you always get paid for your work with transparent fees and milestone-based releases."
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Global Opportunities",
    description: "Access clients from around the world, expanding your potential market beyond geographical limitations."
  },
  {
    icon: <BadgeCheck className="h-6 w-6" />,
    title: "Verified Profile Status",
    description: "Earn verified status to stand out from the crowd and build trust with potential clients."
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Community Support",
    description: "Join a community of like-minded professionals to network, collaborate, and share knowledge."
  }
];

// Data for AI tools section
const aiTools = [
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "AI Code Assistant",
    description: "Get real-time code suggestions, debugging help, and optimization tips while working on development projects."
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Content Generator",
    description: "Create high-quality copy, proposals, and communications with AI assistance tailored to your client's needs."
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Design Collaborator",
    description: "Transform rough concepts into polished designs with AI-powered suggestions and enhancements."
  }
];

// Data for courses section
const courses = [
  {
    icon: <GraduationCap className="h-6 w-6" />,
    title: "Mastering Client Communication",
    modules: 8,
    level: "Beginner"
  },
  {
    icon: <GraduationCap className="h-6 w-6" />,
    title: "Advanced React Development",
    modules: 12,
    level: "Advanced"
  },
  {
    icon: <GraduationCap className="h-6 w-6" />,
    title: "UI/UX Design Fundamentals",
    modules: 10,
    level: "Intermediate"
  },
  {
    icon: <GraduationCap className="h-6 w-6" />,
    title: "Freelance Business Management",
    modules: 6,
    level: "Beginner"
  }
];

// Data for testimonials
const testimonials = [
  {
    quote: "Joining this platform transformed my freelance career. I've doubled my income and found consistent, high-quality clients.",
    name: "Michael Chen",
    role: "Full Stack Developer"
  },
  {
    quote: "The AI tools have dramatically increased my productivity. I can deliver better work faster, which my clients love.",
    name: "Sarah Johnson",
    role: "UX/UI Designer"
  },
  {
    quote: "The courses helped me expand my skill set and offer new services. Within months, I was able to increase my rates by 40%.",
    name: "David Oyelowo",
    role: "Digital Marketer"
  }
];

// Helper component for star icons in testimonials
const Star = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export default BecomeFreelancer;
