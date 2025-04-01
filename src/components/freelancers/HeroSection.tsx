
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
        Talent Network
      </span>
      <h1 className="text-4xl md:text-5xl font-bold">
        Connect with Top-Tier Tech Freelancers
      </h1>
      <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
        Access our curated network of skilled developers, designers, and project managers who have been vetted for their expertise and professionalism.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
        <Button size="lg" asChild>
          <a href="https://wokkah.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
            Find Talent
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
        <a href="https://wokkah.com" target="_blank" rel="noopener noreferrer">
          <Button size="lg" variant="outline" className="group">
            <span>Become a Freelancer</span>
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
