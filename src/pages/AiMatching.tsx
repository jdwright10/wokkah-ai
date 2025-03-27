
import React, { useEffect, useState } from 'react';
import MainLayout from '@/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { 
  BrainCircuit, 
  Briefcase, 
  Clock, 
  MapPin, 
  MessageSquare, 
  Sparkles, 
  Star, 
  Users,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { Link, useLocation } from 'react-router-dom';
import { talentData } from '@/data/talentData';
import TalentMatchingChat from '@/components/TalentMatchingChat';

const AiMatching = () => {
  const location = useLocation();
  const [matchingResults, setMatchingResults] = useState<boolean>(false);
  const [projectRequirements, setProjectRequirements] = useState<{
    description: string;
    budget: string;
    timeline: string;
    skills: string[];
    experienceLevel: string;
  } | null>(null);
  const [isProcessingPrd, setIsProcessingPrd] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Check if we're coming from the PRD generator
    const fromPrd = location.state?.fromPrd;
    const storedPrd = localStorage.getItem('prd_for_matching');
    
    if (fromPrd && storedPrd) {
      setIsProcessingPrd(true);
      
      // Process the PRD to extract requirements
      processPrd(storedPrd);
    }
  }, [location.state]);

  const processPrd = async (prd: string) => {
    try {
      // Simulate processing the PRD to extract requirements
      // In a real implementation, this would use an AI service to analyze the PRD
      
      // Extract skills from the PRD (simple implementation - you may want to use AI for better extraction)
      const skills = extractSkillsFromPrd(prd);
      
      // Create project requirements
      const requirements = {
        description: extractDescriptionFromPrd(prd),
        budget: "Based on PRD complexity",
        timeline: "As per PRD specifications",
        skills: skills,
        experienceLevel: "senior", // Default to senior for PRD-based projects
      };

      // Wait a moment to simulate processing
      setTimeout(() => {
        // Update state with the requirements
        handleProjectRequirementsComplete(requirements);
        setIsProcessingPrd(false);
      }, 2000);
      
    } catch (error) {
      console.error("Error processing PRD:", error);
      toast({
        title: "Error",
        description: "Failed to process the PRD. Please try again.",
        variant: "destructive"
      });
      setIsProcessingPrd(false);
    }
  };

  // Simple function to extract skills from PRD - in production, use AI
  const extractSkillsFromPrd = (prd: string): string[] => {
    const commonSkills = [
      "React", "JavaScript", "TypeScript", "UI/UX", "Node.js", 
      "Python", "AWS", "Backend", "Frontend", "Full Stack", 
      "Mobile Development", "DevOps", "Database", "API"
    ];
    
    // Return skills that appear in the PRD
    return commonSkills.filter(skill => 
      prd.toLowerCase().includes(skill.toLowerCase())
    );
  };

  // Simple function to extract description from PRD
  const extractDescriptionFromPrd = (prd: string): string => {
    // Get the first 200 characters as a simple description
    const firstParagraph = prd.split('\n\n')[0];
    return firstParagraph.substring(0, 200) + (firstParagraph.length > 200 ? '...' : '');
  };

  const handleProjectRequirementsComplete = (requirements) => {
    setProjectRequirements(requirements);
    
    // Simulate API call with loading state
    toast({
      title: "Processing...",
      description: "Analyzing project requirements and finding talent matches.",
    });
    
    setTimeout(() => {
      setMatchingResults(true);
      toast({
        title: "Matching Complete",
        description: "We've found talent matches based on your project requirements.",
      });
    }, 1500);
  };

  const resetSearch = () => {
    setMatchingResults(false);
    setProjectRequirements(null);
    
    // Clear the stored PRD when resetting
    localStorage.removeItem('prd_for_matching');
  };

  if (isProcessingPrd) {
    return (
      <MainLayout>
        <section className="pt-32 pb-16 bg-gradient-to-b from-white to-neutral-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Processing Your PRD
              </h1>
              <p className="text-lg text-muted-foreground">
                We're analyzing your Product Requirements Document to find the perfect talent match.
              </p>
            </div>
            
            <div className="flex flex-col items-center justify-center py-12">
              <div className="w-16 h-16 rounded-full border-4 border-primary border-t-transparent animate-spin mb-8"></div>
              <p className="text-xl font-medium">Extracting requirements...</p>
              <p className="text-muted-foreground mt-2">This will only take a moment</p>
            </div>
          </div>
        </section>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-neutral-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
              AI Talent Matching
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Find Your Perfect Team with AI
            </h1>
            <p className="text-lg text-muted-foreground">
              Chat with our AI assistant to help define your project needs and match with the most qualified professionals.
            </p>
          </div>

          {!matchingResults ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
              <div className="lg:col-span-7">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BrainCircuit className="h-6 w-6 text-primary" />
                      <span>AI Talent Assistant</span>
                    </CardTitle>
                    <CardDescription>
                      Chat with our AI to define your project requirements and find the perfect talent match.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="h-[550px]">
                    <TalentMatchingChat onProjectRequirementsComplete={handleProjectRequirementsComplete} />
                  </CardContent>
                </Card>
              </div>
              
              <div className="lg:col-span-5">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Sparkles className="h-6 w-6 text-primary" />
                      <span>How It Works</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <span className="font-medium">1</span>
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Chat About Your Project</h3>
                          <p className="text-sm text-muted-foreground">
                            Describe your project needs in your own words. Our AI will ask relevant questions to understand your requirements.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <span className="font-medium">2</span>
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">AI Analyzes Requirements</h3>
                          <p className="text-sm text-muted-foreground">
                            Our AI extracts key project details and required skills from your conversation.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <span className="font-medium">3</span>
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Find Your Perfect Match</h3>
                          <p className="text-sm text-muted-foreground">
                            We match you with talent that has the exact skills and experience your project needs.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <span className="font-medium">4</span>
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Connect & Collaborate</h3>
                          <p className="text-sm text-muted-foreground">
                            Review matched profiles and start working with the right talent for your project.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100 max-w-4xl mx-auto">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <h2 className="text-xl font-bold">AI Matching Complete</h2>
                </div>
                <p className="text-muted-foreground mb-4">
                  Based on your project requirements, we've identified the following top matches. These professionals have the skills and experience needed for your project.
                </p>
                {projectRequirements && (
                  <div className="bg-neutral-50 p-4 rounded-lg mb-4">
                    <h3 className="font-medium mb-2">Project Summary</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Description:</p>
                        <p>{projectRequirements.description}</p>
                      </div>
                      {projectRequirements.budget && (
                        <div>
                          <p className="text-muted-foreground">Budget:</p>
                          <p>{projectRequirements.budget}</p>
                        </div>
                      )}
                      {projectRequirements.timeline && (
                        <div>
                          <p className="text-muted-foreground">Timeline:</p>
                          <p>{projectRequirements.timeline}</p>
                        </div>
                      )}
                      <div>
                        <p className="text-muted-foreground">Experience Level:</p>
                        <p>{projectRequirements.experienceLevel || 'Any'}</p>
                      </div>
                      <div className="md:col-span-2">
                        <p className="text-muted-foreground">Skills Needed:</p>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {projectRequirements.skills.map((skill, i) => (
                            <Badge key={i} variant="secondary">{skill}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <Button variant="outline" onClick={resetSearch}>
                  Refine Search
                </Button>
              </div>

              <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
                {/* Filter talent based on required skills if available */}
                {talentData
                  .filter(talent => {
                    if (!projectRequirements?.skills.length) return true;
                    return talent.skills.some(skill => 
                      projectRequirements.skills.some(reqSkill => 
                        skill.toLowerCase().includes(reqSkill.toLowerCase()) ||
                        reqSkill.toLowerCase().includes(skill.toLowerCase())
                      )
                    );
                  })
                  .map((talent, index) => (
                    <div key={talent.id} className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6 hover:shadow-md transition-shadow">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="relative">
                          <Avatar className="h-20 w-20">
                            <AvatarImage src={talent.avatar} alt={talent.name} />
                            <AvatarFallback>{talent.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="absolute -top-2 -right-2 bg-primary text-white text-xs font-medium rounded-full w-6 h-6 flex items-center justify-center">
                            {98 - index * 5}%
                          </div>
                        </div>
                        
                        <div className="flex-grow">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                            <h3 className="text-lg font-bold">{talent.name}</h3>
                            <div className="flex items-center gap-1">
                              <Star className="fill-yellow-400 stroke-yellow-400 h-4 w-4" />
                              <span className="text-sm font-medium">{talent.rating}/5</span>
                              <span className="text-sm text-muted-foreground">({talent.reviewCount})</span>
                            </div>
                          </div>
                          
                          <p className="font-medium text-primary mb-1">{talent.title}</p>
                          
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              <span>{talent.location}</span>
                            </div>
                            <span>•</span>
                            <div className="flex items-center gap-1">
                              <Briefcase className="h-4 w-4" />
                              <span>{talent.experience}</span>
                            </div>
                            <span>•</span>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              <span>{talent.availability}</span>
                            </div>
                          </div>
                          
                          <p className="text-muted-foreground mb-4 line-clamp-2">{talent.bio}</p>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {talent.skills.map((skill, index) => (
                              <Badge 
                                key={index} 
                                variant={
                                  projectRequirements?.skills.some(reqSkill => 
                                    skill.toLowerCase().includes(reqSkill.toLowerCase()) ||
                                    reqSkill.toLowerCase().includes(skill.toLowerCase())
                                  ) ? "default" : "secondary"
                                } 
                                className="rounded-full"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                          
                          <div className="flex gap-3">
                            <Button variant="outline" size="sm" asChild className="flex items-center gap-2">
                              <Link to={`/talent/${talent.id}`}>
                                View Full Profile
                              </Link>
                            </Button>
                            <Button 
                              size="sm" 
                              className="flex items-center gap-2"
                              onClick={() => {
                                toast({
                                  title: "Contact Request",
                                  description: `You've initiated contact with ${talent.name}. Check your messages for updates.`,
                                });
                              }}
                            >
                              <MessageSquare className="h-4 w-4" /> Contact
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              <div className="max-w-4xl mx-auto bg-primary/10 rounded-xl p-8 text-center">
                <h3 className="text-xl font-bold mb-4">Need more specialized talent?</h3>
                <p className="text-muted-foreground mb-6">
                  Our team can help you find the perfect fit for your unique project requirements.
                </p>
                <Button variant="default" size="lg" className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Schedule a Consultation
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
};

export default AiMatching;
