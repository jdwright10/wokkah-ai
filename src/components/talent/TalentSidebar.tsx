
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface TalentSidebarProps {
  popularSkills: string[];
  onUnlockClick: () => void;
}

const TalentSidebar: React.FC<TalentSidebarProps> = ({
  popularSkills,
  onUnlockClick
}) => {
  return (
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
        <Button className="w-full" onClick={onUnlockClick}>
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
  );
};

export default TalentSidebar;
