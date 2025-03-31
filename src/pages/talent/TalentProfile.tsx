
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import MainLayout from '@/layout/MainLayout';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  MapPin,
  Star,
  Briefcase,
  Clock,
  Calendar,
  CheckCircle2,
  Award,
  MessageSquare,
  ArrowLeft,
  Mail,
  Phone,
  Lock,
  ShieldCheck
} from 'lucide-react';
import { talentData } from '@/data/talentData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';

const TalentProfile = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [talent, setTalent] = useState(talentData.find(t => t.id === Number(id)));
  
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Find the talent based on the URL parameter
    const foundTalent = talentData.find(t => t.id === Number(id));
    setTalent(foundTalent);
  }, [id]);

  const handleContactClick = () => {
    // Redirect to pricing page instead of showing contact success toast
    navigate('/pricing');
  };

  if (!talent) {
    return (
      <MainLayout>
        <div className="container pt-32 pb-16">
          <h1 className="text-2xl font-bold">Talent not found</h1>
          <Button asChild className="mt-4">
            <Link to="/find-talent">Back to Find Talent</Link>
          </Button>
        </div>
      </MainLayout>
    );
  }

  // Check if this talent should be displayed as vetted (for example, every 3rd profile)
  const isVetted = talent.id % 3 === 0;

  return (
    <MainLayout>
      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-neutral-50">
        <div className="container">
          <Button variant="outline" size="sm" className="mb-6" asChild>
            <Link to="/find-talent" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to Talent Search
            </Link>
          </Button>
          
          {/* Profile Header */}
          <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-6">
              <Avatar className="h-24 w-24 md:h-32 md:w-32">
                <AvatarImage src={talent.avatar} alt={talent.name} />
                <AvatarFallback>{talent.name.charAt(0)}</AvatarFallback>
              </Avatar>
              
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-bold">{talent.name}</h1>
                    {/* Add vetted badge if applicable */}
                    {isVetted && (
                      <Badge variant="default" className="bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-1">
                        <ShieldCheck className="h-3 w-3" /> Vetted
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-1 mt-2 md:mt-0">
                    <Star className="fill-yellow-400 stroke-yellow-400 h-5 w-5" />
                    <span className="text-lg font-medium">{talent.rating}/5</span>
                    <span className="text-sm text-muted-foreground">({talent.reviewCount} reviews)</span>
                  </div>
                </div>
                
                <p className="text-xl font-medium text-primary mt-1">{talent.title}</p>
                
                <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mt-3">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{talent.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Briefcase className="h-4 w-4" />
                    <span>{talent.experience}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{talent.availability}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {talent.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="rounded-full">
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                {/* Contact buttons that redirect to pricing page */}
                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <Button onClick={handleContactClick} className="flex items-center gap-2">
                    <Lock className="h-4 w-4" /> Unlock Contact Options
                  </Button>
                  <Button variant="outline" onClick={handleContactClick} className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" /> Message
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Profile Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Tabs defaultValue="about">
                <TabsList className="mb-6">
                  <TabsTrigger value="about">About</TabsTrigger>
                  <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>
                
                <TabsContent value="about" className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6">
                  <h2 className="text-xl font-bold mb-4">About {talent.name}</h2>
                  <p className="text-muted-foreground mb-6">{talent.bio}</p>
                  
                  <h3 className="text-lg font-bold mb-3">Experience</h3>
                  <div className="space-y-4 mb-6">
                    <div className="border-l-2 border-primary pl-4 py-1">
                      <p className="font-medium">Senior Developer</p>
                      <p className="text-primary text-sm">Tech Innovations Inc.</p>
                      <p className="text-sm text-muted-foreground">2018 - Present</p>
                    </div>
                    <div className="border-l-2 border-neutral-200 pl-4 py-1">
                      <p className="font-medium">Tech Lead</p>
                      <p className="text-primary text-sm">Digital Solutions Ltd</p>
                      <p className="text-sm text-muted-foreground">2015 - 2018</p>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-3">Education</h3>
                  <div className="space-y-4 mb-6">
                    <div className="border-l-2 border-primary pl-4 py-1">
                      <p className="font-medium">MSc Computer Science</p>
                      <p className="text-primary text-sm">University of Technology</p>
                      <p className="text-sm text-muted-foreground">2012 - 2014</p>
                    </div>
                    <div className="border-l-2 border-neutral-200 pl-4 py-1">
                      <p className="font-medium">BSc Computer Science</p>
                      <p className="text-primary text-sm">State University</p>
                      <p className="text-sm text-muted-foreground">2008 - 2012</p>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="portfolio" className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6">
                  <h2 className="text-xl font-bold mb-4">Portfolio</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border border-neutral-200 rounded-lg overflow-hidden">
                      <div className="bg-neutral-100 h-40"></div>
                      <div className="p-4">
                        <h3 className="font-bold">E-commerce Platform</h3>
                        <p className="text-sm text-muted-foreground">A full-stack e-commerce solution with payment integration</p>
                      </div>
                    </div>
                    <div className="border border-neutral-200 rounded-lg overflow-hidden">
                      <div className="bg-neutral-100 h-40"></div>
                      <div className="p-4">
                        <h3 className="font-bold">Health Tracking App</h3>
                        <p className="text-sm text-muted-foreground">Mobile app for tracking fitness and nutrition goals</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="reviews" className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6">
                  <h2 className="text-xl font-bold mb-4">Client Reviews</h2>
                  <div className="space-y-6">
                    <div className="border-b border-neutral-200 pb-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-bold">Michael Thompson</p>
                          <p className="text-sm text-muted-foreground">Project: Website Redesign</p>
                        </div>
                        <div className="flex items-center">
                          <Star className="fill-yellow-400 stroke-yellow-400 h-4 w-4" />
                          <Star className="fill-yellow-400 stroke-yellow-400 h-4 w-4" />
                          <Star className="fill-yellow-400 stroke-yellow-400 h-4 w-4" />
                          <Star className="fill-yellow-400 stroke-yellow-400 h-4 w-4" />
                          <Star className="fill-yellow-400 stroke-yellow-400 h-4 w-4" />
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        Outstanding work! Delivered on time and exceeded my expectations. Very professional and easy to work with.
                      </p>
                    </div>
                    
                    <div className="border-b border-neutral-200 pb-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-bold">Emily Chen</p>
                          <p className="text-sm text-muted-foreground">Project: Mobile App Development</p>
                        </div>
                        <div className="flex items-center">
                          <Star className="fill-yellow-400 stroke-yellow-400 h-4 w-4" />
                          <Star className="fill-yellow-400 stroke-yellow-400 h-4 w-4" />
                          <Star className="fill-yellow-400 stroke-yellow-400 h-4 w-4" />
                          <Star className="fill-yellow-400 stroke-yellow-400 h-4 w-4" />
                          <Star className="fill-yellow-400 stroke-yellow-400 h-4 w-4" />
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        Great communicator and problem solver. Implemented complex features with ease. Would definitely hire again.
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6">
                <h3 className="text-lg font-bold mb-4">Unlock Full Profile</h3>
                <p className="text-muted-foreground mb-4">
                  Subscribe to access complete profiles and contact information.
                </p>
                <Button className="w-full" onClick={handleContactClick}>
                  Subscribe to Unlock
                </Button>
              </div>
            
              <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6">
                <h3 className="text-lg font-bold mb-4">Quick Info</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span>Identity Verified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span>Member since {new Date().getFullYear() - 3}</span>
                  </div>
                  {isVetted && (
                    <div className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-yellow-500" />
                      <span>Top Rated Freelancer</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6">
                <h3 className="text-lg font-bold mb-4">Similar Talent</h3>
                <div className="space-y-4">
                  {talentData.filter(t => t.id !== talent.id).slice(0, 2).map((similarTalent) => (
                    <div key={similarTalent.id} className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={similarTalent.avatar} alt={similarTalent.name} />
                        <AvatarFallback>{similarTalent.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-grow">
                        <Link to={`/talent/${similarTalent.id}`} className="font-medium hover:text-primary">
                          {similarTalent.name}
                        </Link>
                        <p className="text-xs text-muted-foreground">{similarTalent.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default TalentProfile;
