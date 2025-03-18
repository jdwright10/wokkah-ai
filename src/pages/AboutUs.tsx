
import React, { useEffect } from 'react';
import MainLayout from '@/layout/MainLayout';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <section className="pt-32 pb-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Story
            </h1>
            <p className="text-lg text-muted-foreground">
              Learn about Wokkah's journey to revolutionize project management, talent matching, and AI-powered development.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Wokkah, we're on a mission to revolutionize how businesses approach software development. We believe that by combining the power of artificial intelligence with human expertise, we can create more efficient, effective, and innovative solutions.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our platform bridges the gap between ideas and execution, providing tools that streamline the development process from initial concept to final delivery. We're dedicated to helping organizations of all sizes build better products, faster.
              </p>
              <p className="text-lg text-muted-foreground">
                By infusing AI into every aspect of our platform, we're not just keeping pace with technological advancement—we're helping to drive it forward.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Team collaborating" 
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-100">
                <h3 className="text-xl font-bold mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  We constantly push the boundaries of what's possible, integrating cutting-edge AI technology to solve complex problems.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-100">
                <h3 className="text-xl font-bold mb-3">Collaboration</h3>
                <p className="text-muted-foreground">
                  We believe the best work happens when talented people work together, sharing ideas and expertise.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-100">
                <h3 className="text-xl font-bold mb-3">Excellence</h3>
                <p className="text-muted-foreground">
                  We're committed to delivering exceptional quality in everything we do, from our platform to our customer service.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Join Our Journey</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're always looking for talented individuals who share our vision and passion. Check out our current opportunities or get in touch to learn more.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/careers" className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors">
                View Careers
              </Link>
              <Link to="/team" className="border border-primary text-primary px-6 py-3 rounded-md hover:bg-primary/10 transition-colors">
                Meet Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AboutUs;
