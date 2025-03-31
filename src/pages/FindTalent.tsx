
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '@/layout/MainLayout';
import { talentData } from '@/data/talentData';
import PageHeader from '@/components/talent/PageHeader';
import TalentSearch from '@/components/talent/TalentSearch';
import TalentList from '@/components/talent/TalentList';
import TalentSidebar from '@/components/talent/TalentSidebar';

const FindTalent = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
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
  
  const handleSearch = () => {
    // This function can be expanded if needed
    console.log('Search executed');
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
          <PageHeader 
            badge="Find Talent"
            title="Find the Perfect Talent for Your Project"
            subtitle="Browse our curated network of pre-vetted professionals ready to bring your project to life."
          />
          
          {/* Search and Filters */}
          <TalentSearch 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
            uniqueLocations={uniqueLocations}
            onSearch={handleSearch}
          />
          
          {/* Results */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold mb-6">Top Talent Available</h2>
              
              <TalentList 
                filteredTalent={filteredTalent}
                visibleTalent={visibleTalent}
                formatName={formatName}
                onUnlockClick={handleUnlockClick}
                onContactClick={handleContactClick}
                handleLoadMore={handleLoadMore}
                isLoading={isLoading}
              />
            </div>
            
            <TalentSidebar 
              popularSkills={popularSkills}
              onUnlockClick={handleUnlockClick}
            />
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
