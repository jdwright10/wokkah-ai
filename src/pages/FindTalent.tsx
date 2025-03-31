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
import { Search, Filter, MapPin, Star, Briefcase, Clock, Eye, MessageSquare, Lock, ShieldCheck, Loader2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { talentData } from '@/data/talentData';
import { toast } from '@/components/ui/use-toast';

const FindTalent = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [visibleTalent, setVisibleTalent] = useState(6); // Initially show 6 talents
  const [isLoading, setIsLoading] = useState(false);
  const [filteredTalent, setFilteredTalent] = useState(talentData);
  
  // Get unique locations from talent data
  const uniqueLocations = [...new Set(talentData.map(talent => 
    talent.location.split(',')[0].trim()
  ))].sort();
  
  const handleContactClick = () => {
    // Redirect to pricing page instead of showing toast
    navigate('/pricing');
  };

  const handleUnlockClick = () => {
    // Redirect to pricing page
    navigate('/pricing');
  };

  // Function to handle loading more talents
  const handleLoadMore = () => {
    setIsLoading(true);
    // Simulate a network request
    setTimeout(() => {
      setVisibleTalent(prev => Math.min(prev + 6, filteredTalent.length));
      setIsLoading(false);
    }, 800);
  };

  // Function to format name as first name + last initial
  const formatName = (fullName) => {
    const nameParts = fullName.split(' ');
    if (nameParts.length > 1) {
      return `${nameParts[0]} ${nameParts[1].charAt(0)}.`;
    }
    return nameParts[0];
  };
  
  // Apply filters whenever filter values change
  useEffect(() => {
    let results = talentData;
    
    // Apply search query filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      results = results.filter(talent => 
        talent.title.toLowerCase().includes(query) || 
        talent.skills.some(skill => skill.toLowerCase().includes(query)) ||
        talent.bio.toLowerCase().includes(query)
      );
    }
    
    // Apply category filter
    if (selectedCategory && selectedCategory !== 'all') {
      results = results.filter(talent => 
        talent.skills.some(skill => skill.toLowerCase().includes(selectedCategory.toLowerCase()))
      );
    }
    
    // Apply location filter
    if (selectedLocation && selectedLocation !== 'all') {
      results = results.filter(talent => 
        talent.location.toLowerCase().includes(selectedLocation.toLowerCase())
      );
    }
    
    setFilteredTalent(results);
    // Reset visible count when filters change
    setVisibleTalent(6);
  }, [searchQuery, selectedCategory, selectedLocation]);

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
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="development">Development</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="ai">AI & ML</SelectItem>
                    <SelectItem value="writing">Writing</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="md:w-40">
                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger>
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    {uniqueLocations.map((location) => (
                      <SelectItem key={location} value={location}>
                        {location}
                      </SelectItem>
                    ))}
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
              
              {filteredTalent.length === 0 ? (
                <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6 text-center">
                  <p className="text-muted-foreground">No talent matches your current filters. Try adjusting your search criteria.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {filteredTalent.slice(0, visibleTalent).map((talent) => (
                    <div key={talent.id} className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6 hover:shadow-md transition-shadow">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="relative">
                          <Avatar className="h-20 w-20">
                            <AvatarImage src={talent.avatar} alt={formatName(talent.name)} />
                            <AvatarFallback>{talent.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="absolute inset-0 bg-neutral-200/50 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer" onClick={handleUnlockClick}>
                            <Lock className="h-6 w-6 text-neutral-700" />
                          </div>
                        </div>
                        
                        <div className="flex-grow">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <h3 className="text-lg font-bold">{formatName(talent.name)}</h3>
                              {talent.id % 3 === 0 && (
                                <Badge variant="default" className="bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-1">
                                  <ShieldCheck className="h-3 w-3" /> Vetted
                                </Badge>
                              )}
                            </div>
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
                              <span>{talent.location.split(',')[0]}</span>
                            </div>
                            <span>•</span>
                            <div className="flex items-center gap-1">
                              <Briefcase className="h-4 w-4" />
                              <span>{talent.experience}</span>
                            </div>
                          </div>
                          
                          <div className="relative">
                            <p className="text-muted-foreground mb-4 line-clamp-2">{talent.bio.substring(0, 100)}...</p>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white flex items-end justify-center">
                              <Button 
                                variant="outline" 
                                size="sm" 
                                className="mb-2 flex items-center gap-1"
                                onClick={handleUnlockClick}
                              >
                                <Lock className="h-3 w-3" /> Unlock Full Bio
                              </Button>
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {talent.skills.slice(0, 4).map((skill, index) => (
                              <Badge key={index} variant="secondary" className="rounded-full">
                                {skill}
                              </Badge>
                            ))}
                            {talent.skills.length > 4 && (
                              <Badge variant="outline" className="rounded-full cursor-pointer" onClick={handleUnlockClick}>
                                +{talent.skills.length - 4} more
                              </Badge>
                            )}
                          </div>
                          
                          <div className="flex flex-col xs:flex-row gap-3">
                            <Button variant="outline" size="sm" asChild className="flex items-center gap-2">
                              <Link to={`/talent/${talent.id}`}>
                                <Eye className="h-4 w-4" /> View Preview
                              </Link>
                            </Button>
                            <Button 
                              size="sm" 
                              className="flex items-center gap-2"
                              onClick={handleContactClick}
                            >
                              <MessageSquare className="h-4 w-4" /> Unlock Contact
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {visibleTalent < filteredTalent.length && (
                <div className="mt-8 text-center">
                  <Button 
                    variant="outline" 
                    onClick={handleLoadMore}
                    disabled={isLoading}
                    className="flex items-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" /> Loading...
                      </>
                    ) : (
                      'Load More'
                    )}
                  </Button>
                </div>
              )}
            </div>
            
            <div className="space-y-6">
              <div className="bg-primary/10 rounded-xl shadow-sm border border-neutral-100 p-6">
                <h3 className="text-lg font-bold mb-4">Unlock Premium Access</h3>
                <p className="text-muted-foreground mb-4">
                  Get full access to our talent network including:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                    </div>
                    <span>Complete freelancer profiles</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                    </div>
                    <span>Direct contact information</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                    </div>
                    <span>Exclusive talent matches</span>
                  </li>
                </ul>
                <Button className="w-full" onClick={handleUnlockClick}>
                  Subscribe to Unlock
                </Button>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6">
                <h3 className="text-lg font-bold mb-4">Need Help Finding Talent?</h3>
                <p className="text-muted-foreground mb-4">
                  Let our AI matching system find the perfect professionals for your specific project requirements.
                </p>
                <Button className="w-full" asChild>
                  <Link to="/ai-matching">Use AI Matching</Link>
                </Button>
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

const popularSkills = [
  "JavaScript", "React", "Python", "UI Design", "Node.js", 
  "AWS", "Product Management", "Data Science", "AI/ML", 
  "DevOps", "Mobile Development", "Marketing", "SEO"
];

export default FindTalent;
