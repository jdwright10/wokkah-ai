
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Mail, Send } from 'lucide-react';

interface DemoRequestFormProps {
  serviceName: string;
}

const DemoRequestForm: React.FC<DemoRequestFormProps> = ({ serviceName }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleCalendlySchedule = () => {
    // Open Calendly in a new window
    window.open('https://calendly.com/wokkah/automation-demo', '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !name) {
      toast({
        title: "Missing information",
        description: "Please provide your name and email address.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // In a real application, this would connect to your backend
    // For demo purposes, we'll simulate a successful submission
    setTimeout(() => {
      // Store the details in localStorage for demo purposes
      localStorage.setItem(`${serviceName.toLowerCase()}_demo_request`, JSON.stringify({
        name,
        email,
        company,
        message,
        date: new Date().toISOString(),
      }));
      
      // Show success toast
      toast({
        title: "Request submitted!",
        description: "We'll contact you shortly to schedule your personalized demo.",
      });
      
      // Reset form
      setEmail('');
      setName('');
      setCompany('');
      setMessage('');
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="bg-white p-8 md:p-12 rounded-xl shadow-md border border-neutral-200">
      <h2 className="text-3xl font-bold mb-6 text-center">Request a Free Demo</h2>
      <p className="text-lg text-muted-foreground text-center mb-8">
        See how our {serviceName} solutions can transform your business operations.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Your Name</label>
              <Input 
                id="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Enter your full name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
              <Input 
                id="email" 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium mb-1">Company Name</label>
              <Input 
                id="company" 
                value={company} 
                onChange={(e) => setCompany(e.target.value)} 
                placeholder="Your company name"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">How can we help?</label>
              <Textarea 
                id="message" 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                placeholder="Tell us about your specific automation needs"
                className="h-24"
              />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              <Mail className="mr-2 h-4 w-4" />
              {isSubmitting ? "Submitting..." : "Request Demo Information"}
            </Button>
          </form>
        </div>
        
        <div className="flex flex-col items-center justify-center h-full">
          <div className="bg-primary/10 p-6 rounded-lg mb-6 text-center">
            <h3 className="font-bold mb-2">Prefer to speak with an expert now?</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Book a 30-minute consultation with one of our {serviceName} specialists to discuss your needs.
            </p>
            <Button variant="outline" onClick={handleCalendlySchedule}>
              <Calendar className="mr-2 h-4 w-4" /> Schedule a Consultation
            </Button>
          </div>
          
          <div className="text-sm text-muted-foreground text-center">
            <p className="mb-2">Our automation demos typically include:</p>
            <ul className="text-left list-disc pl-5 space-y-1">
              <li>Custom solutions overview</li>
              <li>Implementation process walkthrough</li>
              <li>ROI and efficiency metrics</li>
              <li>Q&A with automation specialists</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoRequestForm;
