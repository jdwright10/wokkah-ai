
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CTASection: React.FC = () => {
  return (
    <div className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Need help finding the right talent?
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
        Our talent matching specialists can help you identify the perfect freelancers for your specific project needs.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button size="lg" asChild>
          <Link to="/ai-matching">Request Talent Match</Link>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <Link to="/vetting-process">Learn About Vetting Process</Link>
        </Button>
      </div>
    </div>
  );
};

export default CTASection;
