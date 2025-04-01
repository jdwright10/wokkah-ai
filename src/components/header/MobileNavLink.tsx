
import React from 'react';
import { Link } from 'react-router-dom';

interface MobileNavLinkProps {
  to: string;
  children: React.ReactNode;
  onClick: () => void;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ to, children, onClick }) => {
  return (
    <Link to={to} className="px-4 py-2 hover:bg-muted rounded-md" onClick={onClick}>
      {children}
    </Link>
  );
};

export default MobileNavLink;
