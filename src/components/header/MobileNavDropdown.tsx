
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface NavLink {
  name: string;
  href: string;
}

interface MobileNavDropdownProps {
  label: string;
  links: NavLink[];
  onLinkClick: () => void;
}

const MobileNavDropdown: React.FC<MobileNavDropdownProps> = ({ label, links, onLinkClick }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="px-4 py-2 hover:bg-muted rounded-md flex items-center justify-between w-full">
        <span>{label}</span>
        <ChevronDown size={16} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full bg-white z-50 p-2" sideOffset={0} align="start">
        <div className="grid gap-2">
          {links.map((link) => (
            <DropdownMenuItem key={link.href} className="py-2 px-2" asChild>
              <Link to={link.href} onClick={onLinkClick} className="w-full">
                {link.name}
              </Link>
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MobileNavDropdown;
