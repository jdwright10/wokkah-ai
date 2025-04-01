
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';

const homeLinks = [
  { name: 'Home (Default)', href: '/' },
  { name: 'Home (Alternative)', href: '/alt' },
  { name: 'Home (V3)', href: '/v3' },
  { name: 'Home (StoryBrand V4)', href: '/v4' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4", 
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold font-heading text-primary">Wokkah</span>
        </Link>
        
        <DesktopNavigation homeLinks={homeLinks} />
        
        <button 
          className="md:hidden p-2 text-neutral-700" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      
      <MobileNavigation 
        isOpen={isMenuOpen} 
        onLinkClick={() => setIsMenuOpen(false)}
        homeLinks={homeLinks}
      />
    </header>
  );
};

export default Header;
