
import React, { useEffect, useState } from 'react';
import MainLayout from '@/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { 
  Card, 
  CardContent,
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
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
import { Link } from 'react-router-dom';
import { talentData } from '@/data/talentData';

const AiMatching = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [projectDescription, setProjectDescription] = useState('');
  const [budget, setBudget] = useState('');
  const [timeline, setTimeline] = useState('');
  const [skillsNeeded, setSkillsNeeded] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [matchingResults, setMatchingResults] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call with loading state
    setTimeout(() => {
      setIsSubmitting(false);
      setMatchingResults(true);
      toast({
        title: "Matching Complete",
        description: "We've found talent matches based on your project requirements.",
      });
    }, 1500);
  };

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
              Our AI-powered talent matching system analyzes your project requirements and connects you with the most qualified professionals.
            </p>
          </div>

          {!matchingResults ? (
            <Card className="max-w-3xl mx-auto">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BrainCircuit className="h-6 w-6 text-primary" />
                  <span>Project Requirements</span>
                </CardTitle>
                <CardDescription>
                  Provide details about your project to help our AI find the best talent matches.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="projectDescription">Project Description</Label>
                    <Textarea 
                      id="projectDescription" 
                      placeholder="Describe your project, goals, and deliverables..." 
                      value={projectDescription}
                      onChange={(e) => setProjectDescription(e.target.value)}
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget Range</Label>
                      <Select value={budget} onValueChange={setBudget} required>
                        <SelectTrigger id="budget">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-5k">Under $5,000</SelectItem>
                          <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                          <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                          <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                          <SelectItem value="over-50k">Over $50,000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="timeline">Timeline</Label>
                      <Select value={timeline} onValueChange={setTimeline} required>
                        <SelectTrigger id="timeline">
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-1-month">Less than 1 month</SelectItem>
                          <SelectItem value="1-3-months">1-3 months</SelectItem>
                          <SelectItem value="3-6-months">3-6 months</SelectItem>
                          <SelectItem value="over-6-months">Over 6 months</SelectItem>
                          <SelectItem value="ongoing">Ongoing</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="skillsNeeded">Skills Needed</Label>
                    <Input 
                      id="skillsNeeded" 
                      placeholder="e.g., React, UI Design, Python, AWS (comma separated)" 
                      value={skillsNeeded}
                      onChange={(e) => setSkillsNeeded(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experienceLevel">Required Experience Level</Label>
                    <Select value={experienceLevel} onValueChange={setExperienceLevel} required>
                      <SelectTrigger id="experienceLevel">
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="entry">Entry Level (0-2 years)</SelectItem>
                        <SelectItem value="mid">Mid Level (3-5 years)</SelectItem>
                        <SelectItem value="senior">Senior Level (5-8 years)</SelectItem>
                        <SelectItem value="expert">Expert Level (8+ years)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox id="availability" defaultChecked />
                    <div className="grid gap-1.5 leading-none">
                      <Label htmlFor="availability" className="text-sm font-medium leading-none">
                        Only show professionals available for immediate start
                      </Label>
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter>
                <Button 
                  type="submit" 
                  className="w-full"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      Finding Matches...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4" />
                      Find Matching Talent
                    </div>
                  )}
                </Button>
              </CardFooter>
            </Card>
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
                <Button variant="outline" onClick={() => setMatchingResults(false)} className="mb-4">
                  Refine Search
                </Button>
              </div>

              <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
                {talentData.map((talent, index) => (
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
                            <Badge key={index} variant="secondary" className="rounded-full">
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
