
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, Briefcase, Eye, MessageSquare, Lock, ShieldCheck } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface TalentCardProps {
  talent: any;
  formatName: (name: string) => string;
  onUnlockClick: () => void;
  onContactClick: () => void;
}

const TalentCard: React.FC<TalentCardProps> = ({ 
  talent, 
  formatName, 
  onUnlockClick, 
  onContactClick 
}) => {
  return (
    <div key={talent.id} className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6 hover:shadow-md transition-shadow">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="relative">
          <Avatar className="h-20 w-20">
            <AvatarImage src={talent.avatar} alt={formatName(talent.name)} />
            <AvatarFallback>{talent.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="absolute inset-0 bg-neutral-200/50 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer" onClick={onUnlockClick}>
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
                onClick={onUnlockClick}
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
              <Badge variant="outline" className="rounded-full cursor-pointer" onClick={onUnlockClick}>
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
              onClick={onContactClick}
            >
              <MessageSquare className="h-4 w-4" /> Unlock Contact
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentCard;
