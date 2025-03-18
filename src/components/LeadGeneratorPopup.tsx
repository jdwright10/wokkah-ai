
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Download, Check } from "lucide-react";
import AIGuideCover from "./AIGuideCover";

interface LeadGeneratorPopupProps {
  delay?: number; // Delay in milliseconds before showing the popup
  open?: boolean; // Controlled open state
  onOpenChange?: (open: boolean) => void; // Callback for when open state changes
}

const LeadGeneratorPopup: React.FC<LeadGeneratorPopupProps> = ({ 
  delay = 30000,
  open: controlledOpen,
  onOpenChange
}) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  // Determine if the component is controlled or uncontrolled
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : internalOpen;
  
  const handleOpenChange = (newOpen: boolean) => {
    if (isControlled) {
      onOpenChange?.(newOpen);
    } else {
      setInternalOpen(newOpen);
    }
  };

  useEffect(() => {
    // Skip auto-popup if component is controlled
    if (isControlled) return;
    
    // Check if the popup has been shown in this session
    const hasSeenPopup = sessionStorage.getItem("hasSeenLeadPopup");
    
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setInternalOpen(true);
        sessionStorage.setItem("hasSeenLeadPopup", "true");
      }, delay);
      
      return () => clearTimeout(timer);
    }
  }, [delay, isControlled]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !firstName) {
      toast({
        title: "Error",
        description: "Please enter your first name and email address.",
        variant: "destructive",
      });
      return;
    }

    // Store the email in localStorage for demo purposes
    localStorage.setItem("leadGeneratorEmail", email);
    localStorage.setItem("leadGeneratorName", firstName);
    
    // Show success state
    setSubmitted(true);
    
    toast({
      title: "Success!",
      description: "Your free AI guide is ready to download.",
    });
  };

  const resetForm = () => {
    setEmail("");
    setFirstName("");
    setSubmitted(false);
  };

  const closeDialog = () => {
    handleOpenChange(false);
    resetForm();
  };

  const downloadReport = () => {
    // Trigger download of the PDF
    const link = document.createElement('a');
    link.href = '/ai-landscape-guide.pdf';
    link.download = 'Demystifying the AI Landscape - A Complete Guide.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold">
            {submitted ? "Your Guide is Ready!" : "Confused About the AI Landscape?"}
          </DialogTitle>
          <DialogDescription className="text-center pt-2 text-sm">
            {submitted 
              ? "Thank you for your interest in demystifying AI with us."
              : "Download our free guide to help you navigate the complex world of AI and how it can transform your business."}
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid place-items-center py-2">
          <div className="w-32 h-44 overflow-hidden rounded-md shadow-md mb-2">
            <AIGuideCover />
          </div>
        </div>

        {submitted ? (
          <div className="space-y-3">
            <div className="bg-green-50 p-3 rounded-md border border-green-100 flex items-center gap-3">
              <Check className="text-green-500 h-4 w-4" />
              <p className="text-xs text-green-700">Your download is ready! Click the button below to get your guide.</p>
            </div>
            
            <Button 
              onClick={downloadReport} 
              className="w-full"
              size="sm"
            >
              <Download className="mr-2 h-4 w-4" /> Download Your Free Guide
            </Button>
            
            <p className="text-xs text-center text-muted-foreground pt-1">
              We've also sent a copy to your email address. Check your inbox!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="space-y-1">
              <Label htmlFor="firstName" className="text-sm">First Name</Label>
              <Input 
                id="firstName" 
                value={firstName} 
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Enter your first name"
                className="h-9"
              />
            </div>
            
            <div className="space-y-1">
              <Label htmlFor="email" className="text-sm">Email Address</Label>
              <Input 
                id="email" 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="h-9"
              />
            </div>
            
            <Button type="submit" className="w-full" size="sm">
              <Mail className="mr-2 h-4 w-4" /> Get Your Free Guide
            </Button>
            
            <p className="text-xs text-center text-muted-foreground pt-1">
              We respect your privacy and will never share your information with third parties.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default LeadGeneratorPopup;
