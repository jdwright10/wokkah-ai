
import React, { useEffect } from 'react';
import MainLayout from '@/layout/MainLayout';
import HeroSection from '@/components/freelancers/HeroSection';
import SearchAndFilter from '@/components/freelancers/SearchAndFilter';
import FreelancerCard from '@/components/freelancers/FreelancerCard';
import CTASection from '@/components/freelancers/CTASection';
import FreelancerSignupBanner from '@/components/freelancers/FreelancerSignupBanner';
import freelancersData from '@/data/freelancersData';

const Freelancers = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSearch = () => {
    // Search functionality would go here
    console.log('Searching for freelancers...');
  };

  return (
    <MainLayout>
      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-neutral-50">
        <div className="container">
          <HeroSection />

          {/* Search and Filter Section */}
          <SearchAndFilter onSearch={handleSearch} />

          {/* Freelancer Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {freelancersData.map((freelancer, index) => (
              <FreelancerCard key={index} freelancer={freelancer} />
            ))}
          </div>

          {/* CTA Section */}
          <CTASection />
        </div>
      </section>

      {/* Freelancer signup banner */}
      <FreelancerSignupBanner />
    </MainLayout>
  );
};

export default Freelancers;
