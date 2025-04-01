
import React from 'react';
import { Link } from 'react-router-dom';
import {
  NavigationMenuItem,
} from '@/components/ui/navigation-menu';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, className = "", onClick }) => {
  return (
    <NavigationMenuItem>
      <Link to={to} className={`font-medium ${className}`} onClick={onClick}>
        {children}
      </Link>
    </NavigationMenuItem>
  );
};

export default NavLink;
