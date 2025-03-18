
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MenuIcon, X } from 'lucide-react';
import { cn } from '@/lib/utils';

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
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold font-heading text-primary">
          Wokkah
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="subtle-underline font-medium hover:text-primary">
            Home
          </Link>
          <Link to="/about" className="subtle-underline font-medium hover:text-primary">
            About
          </Link>
          <Link to="/services" className="subtle-underline font-medium hover:text-primary">
            Services
          </Link>
          <Link to="/contact" className="subtle-underline font-medium hover:text-primary">
            Contact
          </Link>
          <Button className="btn-hover-effect">Get Started</Button>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 text-neutral-700" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-slide-in-right">
          <nav className="container flex flex-col py-4 space-y-4">
            <Link 
              to="/" 
              className="px-4 py-2 hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="px-4 py-2 hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className="px-4 py-2 hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className="px-4 py-2 hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button className="mx-4">Get Started</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
