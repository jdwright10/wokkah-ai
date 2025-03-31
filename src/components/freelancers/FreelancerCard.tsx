
import React from 'react';
import { Users, Star, BadgeCheck, Lock, Shield, MapPin, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export interface FreelancerData {
  name: string;
  role: string;
  verified: boolean;
  vetted: boolean;
  rating: number;
  description: string;
  skills: string[];
  hourlyRate: number;
  country: string;
  completedJobs: number;
}

interface FreelancerCardProps {
  freelancer: FreelancerData;
}

const FreelancerCard: React.FC<FreelancerCardProps> = ({ freelancer }) => {
  const navigate = useNavigate();

  const handleUnlockContact = () => {
    navigate('/pricing');
  };

  return (
    <div className="relative bg-white rounded-xl shadow-sm border border-neutral-100 overflow-hidden hover:shadow-md transition-shadow">
      {freelancer.vetted && (
        <div className="absolute top-3 right-3 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1 z-10">
          <Shield className="h-3 w-3" />
          Vetted
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-14 h-14 bg-neutral-100 rounded-full mr-4 flex-shrink-0 overflow-hidden relative">
            {/* Placeholder for profile image */}
            <div className="w-full h-full flex items-center justify-center text-neutral-400">
              <Users className="w-6 h-6" />
            </div>
            {/* Blur overlay on image */}
            <div className="absolute inset-0 bg-white/70 flex items-center justify-center">
              <Lock className="w-4 h-4 text-neutral-500" />
            </div>
          </div>
          <div>
            <h3 className="font-bold flex items-center">
              {freelancer.name.split(' ')[0]} {freelancer.name.split(' ')[1].charAt(0)}.
              {freelancer.verified && (
                <BadgeCheck className="h-4 w-4 text-primary ml-1" />
              )}
            </h3>
            <p className="text-sm text-muted-foreground">{freelancer.role}</p>
          </div>
        </div>
        <div className="flex items-center mb-3">
          <div className="flex text-amber-400 mr-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" fill={i < freelancer.rating ? "currentColor" : "none"} />
            ))}
          </div>
          <span className="text-sm">{freelancer.rating.toFixed(1)}</span>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          {freelancer.description.substring(0, 100)}...
        </p>
        
        {/* Location and completed jobs */}
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            <span>{freelancer.country}</span>
          </div>
          <div className="flex items-center gap-1">
            <Briefcase className="h-3 w-3" />
            <span>{freelancer.completedJobs} jobs completed</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {freelancer.skills.map((skill, i) => (
            <span key={i} className="text-xs px-2 py-1 bg-neutral-100 rounded-full">
              {skill}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center pt-4 border-t border-neutral-100">
          <span className="font-medium">${freelancer.hourlyRate}/hr</span>
          <Button 
            size="sm" 
            variant="default" 
            className="flex items-center gap-1"
            onClick={handleUnlockContact}
          >
            <Lock className="h-4 w-4" />
            Unlock Contact
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FreelancerCard;
