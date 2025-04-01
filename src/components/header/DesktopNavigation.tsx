
import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import NavLink from './NavLink';
import NavDropdown from './NavDropdown';

interface NavLink {
  name: string;
  href: string;
}

interface DesktopNavigationProps {
  homeLinks: NavLink[];
}

const DesktopNavigation: React.FC<DesktopNavigationProps> = ({ homeLinks }) => {
  return (
    <div className="hidden md:flex items-center gap-6">
      <NavigationMenu>
        <NavigationMenuList className="flex gap-6">
          <NavDropdown label="Home" links={homeLinks} />
          <NavLink to="/solutions">AI Solutions</NavLink>
          <NavLink to="/case-studies">Case Studies</NavLink>
          <NavLink to="/about">About</NavLink>
        </NavigationMenuList>
      </NavigationMenu>
      
      <Button asChild className="ml-2 bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-md">
        <Link to="/hire-wokkah" className="flex items-center gap-2">
          <Briefcase className="h-4 w-4" />
          Hire Wokkah
        </Link>
      </Button>
    </div>
  );
};

export default DesktopNavigation;
