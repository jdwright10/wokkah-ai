
import React from 'react';
import MainLayout from '@/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Users, Star, BadgeCheck, Search, Filter, MessageSquare } from 'lucide-react';

const Freelancers = () => {
  return (
    <MainLayout>
      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-neutral-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
              Talent Network
            </span>
            <h1 className="text-4xl md:text-5xl font-bold">
              Connect with Top-Tier Tech Freelancers
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Access our curated network of skilled developers, designers, and project managers who have been vetted for their expertise and professionalism.
            </p>
            <Button size="lg" className="mt-8">
              Find Talent
            </Button>
          </div>

          {/* Search and Filter Section */}
          <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6 mb-12">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <input 
                  type="text" 
                  placeholder="Search by skill, expertise, or role..."
                  className="w-full pl-10 pr-4 py-2 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  <span>Filters</span>
                </Button>
                <Button>Search</Button>
              </div>
            </div>
          </div>

          {/* Freelancer Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {freelancers.map((freelancer, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-neutral-100 overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-14 h-14 bg-neutral-100 rounded-full mr-4 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-bold flex items-center">
                        {freelancer.name}
                        {freelancer.verified && (
                          <BadgeCheck className="h-4 w-4 text-primary ml-1" />
                        )}
                      </h3>
                      <p className="text-sm text-muted-foreground">{freelancer.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-3">
                    <div className="flex text-amber-400 mr-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" fill={i < freelancer.rating ? "currentColor" : "none"} />
                      ))}
                    </div>
                    <span className="text-sm">{freelancer.rating.toFixed(1)}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {freelancer.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {freelancer.skills.map((skill, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-neutral-100 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-neutral-100">
                    <span className="font-medium">${freelancer.hourlyRate}/hr</span>
                    <Button size="sm" variant="outline" className="flex items-center gap-1">
                      <MessageSquare className="h-4 w-4" />
                      Contact
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Need help finding the right talent?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Our talent matching specialists can help you identify the perfect freelancers for your specific project needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg">Request Talent Match</Button>
              <Button size="lg" variant="outline">Learn About Vetting Process</Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

// Sample data for freelancer cards
const freelancers = [
  {
    name: "Alex Morgan",
    role: "Full Stack Developer",
    verified: true,
    rating: 4.9,
    description: "Specialized in React, Node.js, and AWS with 6+ years of experience building scalable web applications.",
    skills: ["React", "Node.js", "TypeScript", "AWS"],
    hourlyRate: 85
  },
  {
    name: "Sarah Chen",
    role: "UX/UI Designer",
    verified: true,
    rating: 5.0,
    description: "Award-winning designer with expertise in user-centered design processes and design systems.",
    skills: ["Figma", "UI Design", "UX Research", "Design Systems"],
    hourlyRate: 75
  },
  {
    name: "Marcus Wilson",
    role: "DevOps Engineer",
    verified: false,
    rating: 4.7,
    description: "Infrastructure specialist focused on containerization, CI/CD pipelines, and cloud architecture.",
    skills: ["Docker", "Kubernetes", "AWS", "CI/CD"],
    hourlyRate: 90
  },
  {
    name: "Elena Rodriguez",
    role: "Project Manager",
    verified: true,
    rating: 4.8,
    description: "Certified PMP with experience leading complex technical projects for Fortune 500 companies.",
    skills: ["Agile", "Scrum", "Risk Management", "Stakeholder Communication"],
    hourlyRate: 95
  },
  {
    name: "David Kim",
    role: "Mobile Developer",
    verified: true,
    rating: 4.6,
    description: "iOS and Android expert specializing in cross-platform development with React Native and Flutter.",
    skills: ["React Native", "Flutter", "iOS", "Android"],
    hourlyRate: 80
  },
  {
    name: "Priya Patel",
    role: "Data Scientist",
    verified: false,
    rating: 4.9,
    description: "AI/ML specialist with experience in predictive analytics, NLP, and computer vision applications.",
    skills: ["Python", "TensorFlow", "PyTorch", "Data Analysis"],
    hourlyRate: 100
  }
];

export default Freelancers;
