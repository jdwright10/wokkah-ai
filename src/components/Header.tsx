
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MenuIcon, X, LogIn, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const servicesLinks = [
  { name: 'Business Automation', href: '/services/business-automation' },
  { name: 'Marketing Automation', href: '/services/business-automation/marketing' },
  { name: 'HR Automation', href: '/services/business-automation/hr' },
  { name: 'Operations Automation', href: '/services/business-automation/operations' },
  { name: 'Finance Automation', href: '/services/business-automation/finance' },
  { name: 'Customer Service Automation', href: '/services/business-automation/customer-service' },
  { name: 'Manufacturing Automation', href: '/services/business-automation/manufacturing' },
  { name: 'Amazon Automation', href: '/services/business-automation/amazon' },
  { name: 'PPC Automation', href: '/services/business-automation/ppc' },
  { name: 'Hiring Automation', href: '/services/business-automation/hiring' },
];

const featuresLinks = [
  { name: 'AI PRD', href: '/features/ai-prd' },
  { name: 'AI PRD Generator', href: '/features/ai-prd/generator' },
  { name: 'Project Management', href: '/features/project-management' },
  { name: 'Talent Matching', href: '/features/talent-matching' },
];

const aboutLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Team', href: '/team' },
  { name: 'Careers', href: '/careers' },
  { name: 'Blog', href: '/blog' },
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
        <Link to="/" className="text-2xl font-bold font-heading text-primary">
          Wokkah
        </Link>
        
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-6">
              <NavigationMenuItem className="relative">
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
                  <span className="font-medium">Services</span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 min-w-[250px] z-50">
                    <div className="flex flex-col gap-2 p-2">
                      {servicesLinks.map((link) => (
                        <Link
                          key={link.href}
                          to={link.href}
                          className="p-2 hover:bg-blue-50 rounded-md transition-colors flex items-center text-sm font-medium"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem className="relative">
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
                  <span className="font-medium">Features</span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 min-w-[250px] z-50">
                    <div className="flex flex-col gap-2 p-2">
                      {featuresLinks.map((link) => (
                        <Link
                          key={link.href}
                          to={link.href}
                          className="p-2 hover:bg-blue-50 rounded-md transition-colors flex items-center text-sm font-medium"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem className="relative">
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
                  <span className="font-medium">About</span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 min-w-[250px] z-50">
                    <div className="flex flex-col gap-2 p-2">
                      {aboutLinks.map((link) => (
                        <Link
                          key={link.href}
                          to={link.href}
                          className="p-2 hover:bg-blue-50 rounded-md transition-colors flex items-center text-sm font-medium"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/freelancers" className="font-medium hover:text-primary">
                  Freelancers
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/pricing" className="font-medium hover:text-primary">
                  Pricing
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/login" className="font-medium hover:text-primary flex items-center gap-1">
                  <LogIn size={16} /> Login
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/pricing">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90">
                    Get Started
                  </Button>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        
        <button 
          className="md:hidden p-2 text-neutral-700" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden fixed top-[72px] left-0 right-0 max-h-[80vh] overflow-y-auto bg-white shadow-lg animate-slide-in-right z-50">
          <nav className="container flex flex-col py-4 space-y-4">
            <DropdownMenu>
              <DropdownMenuTrigger className="px-4 py-2 hover:bg-muted rounded-md flex items-center justify-between w-full">
                <span>Services</span>
                <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full bg-white z-50 p-2" sideOffset={0} align="start">
                <div className="grid gap-2">
                  {servicesLinks.map((link) => (
                    <DropdownMenuItem key={link.href} className="py-2 px-2" asChild>
                      <Link to={link.href} onClick={() => setIsMenuOpen(false)} className="w-full">
                        {link.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="px-4 py-2 hover:bg-muted rounded-md flex items-center justify-between w-full">
                <span>Features</span>
                <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full bg-white z-50 p-2" sideOffset={0} align="start">
                <div className="grid gap-2">
                  {featuresLinks.map((link) => (
                    <DropdownMenuItem key={link.href} className="py-2 px-2" asChild>
                      <Link to={link.href} onClick={() => setIsMenuOpen(false)} className="w-full">
                        {link.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="px-4 py-2 hover:bg-muted rounded-md flex items-center justify-between w-full">
                <span>About</span>
                <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full bg-white z-50 p-2" sideOffset={0} align="start">
                <div className="grid gap-2">
                  {aboutLinks.map((link) => (
                    <DropdownMenuItem key={link.href} className="py-2 px-2" asChild>
                      <Link to={link.href} onClick={() => setIsMenuOpen(false)} className="w-full">
                        {link.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link 
              to="/freelancers" 
              className="px-4 py-2 hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Freelancers
            </Link>
            <Link 
              to="/pricing" 
              className="px-4 py-2 hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/login" 
              className="px-4 py-2 hover:bg-muted rounded-md flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <LogIn size={16} /> Login
            </Link>
            <Link to="/pricing" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">Get Started</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
