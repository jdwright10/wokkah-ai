
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
}

const LeadGeneratorPopup: React.FC<LeadGeneratorPopupProps> = ({ delay = 30000 }) => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if the popup has been shown in this session
    const hasSeenPopup = sessionStorage.getItem("hasSeenLeadPopup");
    
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setOpen(true);
        sessionStorage.setItem("hasSeenLeadPopup", "true");
      }, delay);
      
      return () => clearTimeout(timer);
    }
  }, [delay]);

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
    setOpen(false);
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
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">
            {submitted ? "Your Guide is Ready!" : "Confused About the AI Landscape?"}
          </DialogTitle>
          <DialogDescription className="text-center pt-2">
            {submitted 
              ? "Thank you for your interest in demystifying AI with us."
              : "Download our free guide to help you navigate the complex world of AI and how it can transform your business."}
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid place-items-center py-4">
          <div className="w-40 h-56 overflow-hidden rounded-md shadow-md mb-4">
            <AIGuideCover />
          </div>
        </div>

        {submitted ? (
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded-md border border-green-100 flex items-center gap-3">
              <Check className="text-green-500 h-5 w-5" />
              <p className="text-sm text-green-700">Your download is ready! Click the button below to get your guide.</p>
            </div>
            
            <Button 
              onClick={downloadReport} 
              className="w-full"
            >
              <Download className="mr-2 h-4 w-4" /> Download Your Free Guide
            </Button>
            
            <p className="text-xs text-center text-muted-foreground pt-2">
              We've also sent a copy to your email address. Check your inbox!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input 
                id="firstName" 
                value={firstName} 
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Enter your first name"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input 
                id="email" 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
              />
            </div>
            
            <Button type="submit" className="w-full">
              <Mail className="mr-2 h-4 w-4" /> Get Your Free Guide
            </Button>
            
            <p className="text-xs text-center text-muted-foreground pt-2">
              We respect your privacy and will never share your information with third parties.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default LeadGeneratorPopup;
