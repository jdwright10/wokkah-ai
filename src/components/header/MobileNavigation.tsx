
import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MobileNavLink from './MobileNavLink';
import MobileNavDropdown from './MobileNavDropdown';

interface NavLink {
  name: string;
  href: string;
}

interface MobileNavigationProps {
  isOpen: boolean;
  onLinkClick: () => void;
  homeLinks: NavLink[];
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ isOpen, onLinkClick, homeLinks }) => {
  if (!isOpen) return null;
  
  return (
    <div className="md:hidden fixed top-[72px] left-0 right-0 max-h-[80vh] overflow-y-auto bg-white shadow-lg animate-slide-in-right z-50">
      <nav className="container flex flex-col py-4 space-y-4">
        <MobileNavDropdown 
          label="Home" 
          links={homeLinks} 
          onLinkClick={onLinkClick} 
        />

        <MobileNavLink to="/solutions" onClick={onLinkClick}>
          AI Solutions
        </MobileNavLink>

        <MobileNavLink to="/case-studies" onClick={onLinkClick}>
          Case Studies
        </MobileNavLink>

        <MobileNavLink to="/about" onClick={onLinkClick}>
          About
        </MobileNavLink>

        <Button asChild className="mt-2 w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-md">
          <Link to="/hire-wokkah" onClick={onLinkClick} className="flex items-center justify-center gap-2">
            <Briefcase className="h-4 w-4" />
            Hire Wokkah
          </Link>
        </Button>
      </nav>
    </div>
  );
};

export default MobileNavigation;
