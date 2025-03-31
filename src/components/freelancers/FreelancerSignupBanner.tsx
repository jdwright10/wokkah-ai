
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const FreelancerSignupBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">Are You a Skilled Freelancer?</h2>
            <p className="text-lg text-white/90">
              Join our platform to find high-quality clients, access skill-building resources, and leverage AI tools to enhance your productivity.
            </p>
          </div>
          <Link to="/become-a-freelancer">
            <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 shadow-lg">
              Join as a Freelancer
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FreelancerSignupBanner;
