
import React, { useEffect } from 'react';
import MainLayout from '@/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Lightbulb, 
  ClipboardCheck, 
  Clock, 
  Shield, 
  Zap 
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { talentData } from '@/data/talentData';

const TalentMatching = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Function to format name as first name + last initial
  const formatName = (fullName) => {
    const nameParts = fullName.split(' ');
    if (nameParts.length > 1) {
      return `${nameParts[0]} ${nameParts[1].charAt(0)}.`;
    }
    return nameParts[0];
  };
  
  return (
    <MainLayout>
      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-neutral-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
              Talent Matching
            </span>
            <h1 className="text-4xl md:text-5xl font-bold">
              Connect With The Perfect Freelancers For Your Project
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Our AI-powered talent matching system connects you with pre-vetted professionals who have the exact skills and experience your project needs.
            </p>
            <Button size="lg" className="mt-8" asChild>
              <Link to="/find-talent">Find Talent Now</Link>
            </Button>
          </div>

          {/* How It Works */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-12">How Talent Matching Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 text-center">
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Define Your Needs</h3>
                <p className="text-muted-foreground">Specify your project requirements, skills needed, timeline, and budget constraints.</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 text-center">
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">AI Matching</h3>
                <p className="text-muted-foreground">Our algorithm analyzes thousands of freelancer profiles to find the perfect matches for your needs.</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 text-center">
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Connect & Collaborate</h3>
                <p className="text-muted-foreground">Review matched profiles, conduct interviews, and seamlessly bring talent into your project.</p>
              </div>
            </div>
          </div>
          
          {/* Featured Talent Profiles */}
          <div className="mt-24">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Talent</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {talentData.map((profile, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={profile.avatar} alt={formatName(profile.name)} />
                      <AvatarFallback>{profile.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-bold">{formatName(profile.name)}</h3>
                      <p className="text-sm text-muted-foreground">{profile.title}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{profile.bio.substring(0, 100)}...</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {profile.skills.map((skill, i) => (
                      <span key={i} className="text-xs bg-neutral-100 px-2 py-1 rounded-full">{skill}</span>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link to={`/talent/${profile.id}`}>View Profile</Link>
                  </Button>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button variant="outline" asChild>
                <Link to="/find-talent">View All Talent</Link>
              </Button>
            </div>
          </div>
          
          {/* Benefits */}
          <div className="mt-24">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Talent Matching</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <ClipboardCheck className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Pre-Vetted Professionals</h3>
                  <p className="text-muted-foreground">Every freelancer in our network has been thoroughly vetted for skills, experience, and reliability.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Secure Collaboration</h3>
                  <p className="text-muted-foreground">Our platform provides secure payment processing, contract management, and IP protection.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Precision Matching</h3>
                  <p className="text-muted-foreground">Our AI algorithms ensure you're connected with talent that precisely matches your specific needs.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Fast Turnaround</h3>
                  <p className="text-muted-foreground">Get matched with qualified professionals within 24 hours of submitting your project requirements.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="mt-24 bg-primary/10 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Find Your Perfect Match?</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              Join thousands of businesses that have successfully completed projects with our talent network.
            </p>
            <Button size="lg" asChild>
              <Link to="/find-talent">Start Matching Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default TalentMatching;
