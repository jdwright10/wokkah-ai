import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MenuIcon, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const solutionsLinks = [
  { name: 'Business Automation', href: '/solutions/business-automation' },
  { name: 'Marketing Automation', href: '/solutions/business-automation/marketing' },
  { name: 'HR Automation', href: '/solutions/business-automation/hr' },
  { name: 'Operations Automation', href: '/solutions/business-automation/operations' },
  { name: 'Finance Automation', href: '/solutions/business-automation/finance' },
  { name: 'Customer Service Automation', href: '/solutions/business-automation/customer-service' },
  { name: 'Manufacturing Automation', href: '/solutions/business-automation/manufacturing' },
  { name: 'Sales Automation', href: '/solutions/business-automation/sales' },
  { name: 'Market Research & Sentiment', href: '/solutions/business-automation/market-research' },
];

const homeLinks = [
  { name: 'Home (Default)', href: '/' },
  { name: 'Home (Alternative)', href: '/alt' },
  { name: 'Home (V3)', href: '/v3' },
  { name: 'Home (StoryBrand V4)', href: '/v4' },
];

const aboutLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Blog', href: '/blog' },
];

// Add case studies links
const caseStudiesLinks = [
  { name: 'Ushift Pro', href: '/case-studies/ushift-pro' },
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
        
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-6">
              <NavigationMenuItem className="relative">
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
                  <span className="font-medium">Home</span>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="w-[200px]">
                  <ul className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 w-full">
                    {homeLinks.map((link) => (
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

              <NavigationMenuItem className="relative">
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
                  <span className="font-medium">Solutions</span>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="w-[400px]">
                  <ul className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 w-full">
                    {solutionsLinks.map((link) => (
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

              <NavigationMenuItem className="relative">
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
                  <span className="font-medium">Case Studies</span>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="w-[250px]">
                  <ul className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 w-full">
                    {caseStudiesLinks.map((link) => (
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

              <NavigationMenuItem className="relative">
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
                  <span className="font-medium">About</span>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="w-[250px]">
                  <ul className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 w-full">
                    {aboutLinks.map((link) => (
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
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-[72px] left-0 right-0 max-h-[80vh] overflow-y-auto bg-white shadow-lg animate-slide-in-right z-50">
          <nav className="container flex flex-col py-4 space-y-4">
            <DropdownMenu>
              <DropdownMenuTrigger className="px-4 py-2 hover:bg-muted rounded-md flex items-center justify-between w-full">
                <span>Home</span>
                <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full bg-white z-50 p-2" sideOffset={0} align="start">
                <div className="grid gap-2">
                  {homeLinks.map((link) => (
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
                <span>Solutions</span>
                <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full bg-white z-50 p-2" sideOffset={0} align="start">
                <div className="grid gap-2">
                  {solutionsLinks.map((link) => (
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
                <span>Case Studies</span>
                <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full bg-white z-50 p-2" sideOffset={0} align="start">
                <div className="grid gap-2">
                  {caseStudiesLinks.map((link) => (
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
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
