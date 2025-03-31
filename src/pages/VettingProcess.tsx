
import React, { useEffect } from 'react';
import MainLayout from '@/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Shield, Award, CheckCircle, BarChart, BookOpen, Users, Clock, FileCheck } from 'lucide-react';

const VettingProcess = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-neutral-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
              Quality Assurance
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Rigorous Vetting Process
            </h1>
            <p className="text-lg text-muted-foreground">
              We carefully screen and evaluate all freelancers to ensure you work with only the most skilled and reliable professionals in the industry.
            </p>
          </div>

          {/* Vetting Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <FileCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Initial Application</h3>
              <p className="text-muted-foreground">
                Freelancers submit detailed applications including work history, portfolio, and specialization areas. We accept less than 30% of all applicants.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <BarChart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Skills Assessment</h3>
              <p className="text-muted-foreground">
                Candidates complete rigorous skills assessments tailored to their expertise areas. These tests evaluate technical abilities and problem-solving under time constraints.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Technical Interview</h3>
              <p className="text-muted-foreground">
                Senior professionals conduct in-depth technical interviews to assess expertise, communication skills, and ability to explain complex concepts clearly.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Mandatory Training</h3>
              <p className="text-muted-foreground">
                Selected freelancers complete our proprietary training program on client communication, project management, and quality standards.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Probation Period</h3>
              <p className="text-muted-foreground">
                Freelancers must successfully complete their first 3 projects with excellent client feedback to remain on our platform permanently.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Ongoing Performance Review</h3>
              <p className="text-muted-foreground">
                Regular performance assessments ensure all freelancers maintain our high-quality standards. Top performers receive special "Vetted" badges and priority placement.
              </p>
            </div>
          </div>

          {/* Vetting Statistics */}
          <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-8 mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">Vetting by the Numbers</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <p className="text-4xl font-bold text-primary mb-2">8%</p>
                <p className="text-muted-foreground">Acceptance Rate</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary mb-2">40+</p>
                <p className="text-muted-foreground">Hours of Vetting</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary mb-2">98%</p>
                <p className="text-muted-foreground">Client Satisfaction</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary mb-2">4.8/5</p>
                <p className="text-muted-foreground">Average Rating</p>
              </div>
            </div>
          </div>

          {/* Vetting Benefits */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">Why Our Vetting Process Matters</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6">
                <Clock className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Save Time</h3>
                <p className="text-muted-foreground">
                  Skip lengthy interviews and testing. We've already verified the skills and reliability of every freelancer.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <Shield className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Reduce Risk</h3>
                <p className="text-muted-foreground">
                  Minimize the risk of project delays, quality issues, or communication problems with pre-vetted professionals.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <Award className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Premium Quality</h3>
                <p className="text-muted-foreground">
                  Work with professionals who represent the top tier of talent in their respective fields.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/10 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Work with Vetted Talent?</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              Access our network of thoroughly vetted freelancers ready to help you achieve your project goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/find-talent">Find Vetted Talent</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/ai-matching">Use AI Matching</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default VettingProcess;
