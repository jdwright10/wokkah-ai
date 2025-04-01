
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import {
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

interface NavLink {
  name: string;
  href: string;
}

interface NavDropdownProps {
  label: string;
  links: NavLink[];
}

const NavDropdown: React.FC<NavDropdownProps> = ({ label, links }) => {
  return (
    <NavigationMenuItem className="relative">
      <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
        <span className="font-medium">{label}</span>
      </NavigationMenuTrigger>
      <NavigationMenuContent className="w-[200px]">
        <ul className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 w-full">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className="p-2 hover:bg-blue-50 rounded-md transition-colors flex items-center text-sm font-medium block w-full"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default NavDropdown;
