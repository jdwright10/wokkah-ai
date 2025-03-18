
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Footer = () => {
  const { toast } = useToast();
  const hasSubmittedInfo = localStorage.getItem('leadGeneratorEmail') && 
                         localStorage.getItem('leadGeneratorName');
  
  const downloadReport = () => {
    // Trigger download of the PDF
    const link = document.createElement('a');
    link.href = '/ai-landscape-guide.pdf';
    link.download = 'Demystifying the AI Landscape - A Complete Guide.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Download Started",
      description: "Your AI guide is downloading now.",
    });
  };
  
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="text-2xl font-bold font-heading text-primary">
              Wokkah
            </Link>
            <p className="mt-4 text-muted-foreground">
              Infuse AI into your company. Simplify project management, connect with top talent, and bring your vision to life.
            </p>
            
            {hasSubmittedInfo && (
              <Button 
                onClick={downloadReport}
                className="mt-6 flex items-center gap-2"
                variant="outline"
              >
                <Download className="h-4 w-4" />
                Download Free AI Guide
              </Button>
            )}
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/team" className="text-muted-foreground hover:text-primary transition-colors">Our Team</Link></li>
              <li><Link to="/careers" className="text-muted-foreground hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Features</h3>
            <ul className="space-y-2">
              <li><Link to="/features/ai-prd" className="text-muted-foreground hover:text-primary transition-colors">AI-Powered PRD</Link></li>
              <li><Link to="/features/project-management" className="text-muted-foreground hover:text-primary transition-colors">Project Management</Link></li>
              <li><Link to="/features/talent-matching" className="text-muted-foreground hover:text-primary transition-colors">Talent Matching</Link></li>
              <li><Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <address className="not-italic text-muted-foreground">
              <p>Wokkah</p>
              <p>1775 Mentor Ave Suite 300</p>
              <p>Cincinnati, OH 45212</p>
              <p className="mt-2"><a href="tel:+11234567890" className="hover:text-primary transition-colors">+1 (123) 456-7890</a></p>
            </address>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">&copy; {new Date().getFullYear()} Wokkah. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="text-sm text-muted-foreground hover:text-primary transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
