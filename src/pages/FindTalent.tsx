
import React, { useEffect, useState } from 'react';
import MainLayout from '@/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, MapPin, Star, Briefcase, Clock } from 'lucide-react';

const FindTalent = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  
  return (
    <MainLayout>
      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-neutral-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
              Find Talent
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Find the Perfect Talent for Your Project
            </h1>
            <p className="text-lg text-muted-foreground">
              Browse our curated network of pre-vetted professionals ready to bring your project to life.
            </p>
          </div>
          
          {/* Search and Filters */}
          <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  placeholder="Search skills, job titles, or keywords..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="md:w-40">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="development">Development</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="ai">AI & ML</SelectItem>
                    <SelectItem value="writing">Writing</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" /> More Filters
              </Button>
              <Button>Search</Button>
            </div>
          </div>
          
          {/* Results */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold mb-6">Top Talent Available</h2>
              
              <div className="space-y-6">
                {talentData.map((talent) => (
                  <div key={talent.id} className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6 hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row gap-6">
                      <Avatar className="h-20 w-20">
                        <AvatarImage src={talent.avatar} alt={talent.name} />
                        <AvatarFallback>{talent.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      
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
                        
                        <div className="flex flex-col xs:flex-row gap-3">
                          <Button variant="outline" size="sm">View Profile</Button>
                          <Button size="sm">Contact</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <Button variant="outline">Load More</Button>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6">
                <h3 className="text-lg font-bold mb-4">Need Help Finding Talent?</h3>
                <p className="text-muted-foreground mb-4">
                  Let our AI matching system find the perfect professionals for your specific project requirements.
                </p>
                <Button className="w-full">Use AI Matching</Button>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6">
                <h3 className="text-lg font-bold mb-4">Popular Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {popularSkills.map((skill, index) => (
                    <Badge key={index} variant="outline" className="rounded-full hover:bg-primary/10 cursor-pointer">
                      {skill}
                    </Badge>
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

const talentData = [
  {
    id: 1,
    name: "Alex Rodriguez",
    title: "Senior Full-Stack Developer",
    bio: "10+ years of experience building scalable web applications with React, Node.js, and AWS. Specialized in fintech and e-commerce solutions.",
    skills: ["React", "Node.js", "AWS", "TypeScript", "MongoDB"],
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    rating: 4.9,
    reviewCount: 124,
    location: "New York, USA",
    experience: "10+ years",
    availability: "Available now"
  },
  {
    id: 2,
    name: "Sarah Chen",
    title: "AI Engineer & ML Specialist",
    bio: "Machine learning expert with a focus on natural language processing and computer vision applications. PhD in Computer Science from Stanford.",
    skills: ["Python", "TensorFlow", "PyTorch", "NLP", "Computer Vision"],
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    rating: 4.8,
    reviewCount: 86,
    location: "San Francisco, USA",
    experience: "8 years",
    availability: "Available in 2 weeks"
  },
  {
    id: 3,
    name: "Marcus Johnson",
    title: "UX/UI Designer",
    bio: "Passionate about creating intuitive, accessible user experiences with a focus on conversion optimization. Worked with Fortune 500 companies.",
    skills: ["UI Design", "User Research", "Figma", "Adobe XD", "Prototyping"],
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    rating: 4.7,
    reviewCount: 92,
    location: "London, UK",
    experience: "6 years",
    availability: "Available now"
  }
];

const popularSkills = [
  "JavaScript", "React", "Python", "UI Design", "Node.js", 
  "AWS", "Product Management", "Data Science", "AI/ML", 
  "DevOps", "Mobile Development", "Marketing", "SEO"
];

export default FindTalent;
