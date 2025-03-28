
import React, { useEffect, useState } from 'react';
import MainLayout from '@/layout/MainLayout';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Filter, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchTerm, setSearchTerm] = useState('');

  const jobs = [
    {
      id: 1,
      title: "Senior Machine Learning Engineer",
      department: "Engineering",
      location: "Cincinnati, OH",
      type: "Full-time",
      description: "Join our AI team to design and implement machine learning algorithms that power our automated PRD generation and talent matching features."
    },
    {
      id: 2,
      title: "Product Manager",
      department: "Product",
      location: "Remote",
      type: "Full-time",
      description: "Lead the development of our project management features, working closely with engineering, design, and customers to deliver exceptional experiences."
    },
    {
      id: 3,
      title: "Frontend Developer",
      department: "Engineering",
      location: "Cincinnati, OH",
      type: "Full-time",
      description: "Create responsive, accessible, and beautiful user interfaces using React and modern frontend technologies."
    },
    {
      id: 4,
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Remote",
      type: "Full-time",
      description: "Help our customers achieve their goals with Wokkah, providing training, support, and strategic guidance."
    },
    {
      id: 5,
      title: "Backend Engineer",
      department: "Engineering",
      location: "Cincinnati, OH",
      type: "Full-time",
      description: "Build scalable, secure, and performant backend services using Node.js, TypeScript, and cloud technologies."
    },
    {
      id: 6,
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote",
      type: "Contract",
      description: "Create intuitive, engaging user experiences and interfaces for our platform, collaborating closely with product and engineering teams."
    }
  ];

  const filteredJobs = jobs.filter((job) => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <MainLayout>
      <section className="pt-16 pb-16"> {/* Reduced top padding since we have breadcrumbs now */}
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
              Careers
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-lg text-muted-foreground">
              Help us build the future of work by joining our team of passionate, innovative professionals dedicated to transforming how projects are managed and executed.
            </p>
          </div>

          <div className="max-w-5xl mx-auto mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-neutral-100 mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-3 text-muted-foreground h-4 w-4" />
                  <Input 
                    type="text" 
                    placeholder="Search positions..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  <span>Filter</span>
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <div key={job.id} className="bg-white p-6 rounded-lg shadow-sm border border-neutral-100 hover:shadow-md transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h2 className="text-xl font-bold">{job.title}</h2>
                        <p className="text-primary">{job.department}</p>
                      </div>
                      <Link 
                        to={`/careers/${job.id}`} 
                        className="mt-4 md:mt-0 bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
                      >
                        Apply Now
                      </Link>
                    </div>
                    <p className="text-muted-foreground mb-4">{job.description}</p>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{job.type}</span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center p-8">
                  <p className="text-lg text-muted-foreground">No positions found matching your search criteria.</p>
                </div>
              )}
            </div>
          </div>

          <div className="bg-neutral-50 rounded-lg p-8 lg:p-12 max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="lg:w-2/3">
                <h2 className="text-2xl lg:text-3xl font-bold mb-4">Don't see the perfect fit?</h2>
                <p className="text-muted-foreground mb-6">
                  We're always looking for talented individuals to join our team. Send us your resume and let us know how you can contribute to Wokkah's mission.
                </p>
                <Button className="bg-primary text-white hover:bg-primary/90">
                  Send Open Application
                </Button>
              </div>
              <div className="lg:w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="Team collaboration" 
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Careers;
