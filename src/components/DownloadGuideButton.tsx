
import React from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface DownloadGuideButtonProps {
  className?: string;
}

const DownloadGuideButton: React.FC<DownloadGuideButtonProps> = ({ className }) => {
  const { toast } = useToast();
  
  const downloadReport = () => {
    // Check if user has already provided their information
    const hasSubmittedInfo = localStorage.getItem('leadGeneratorEmail') && 
                           localStorage.getItem('leadGeneratorName');
    
    if (hasSubmittedInfo) {
      // Open the PDF in a new tab
      window.open('https://drive.google.com/file/d/1DbWnQrAEwb2-YxiyZKXblDM28b3EMw2-/view?usp=sharing', '_blank');
      
      toast({
        title: "Report Opened",
        description: "Your AI business transformation report is opening in a new tab.",
      });
    } else {
      // Show toast with an error message if user hasn't submitted info
      toast({
        title: "Information Required",
        description: "Please provide your information first to access the report.",
        variant: "destructive",
      });
    }
  };
  
  // Check if the user has submitted their information before
  const hasSubmittedInfo = localStorage.getItem('leadGeneratorEmail') && 
                         localStorage.getItem('leadGeneratorName');
  
  if (!hasSubmittedInfo) {
    return null; // Don't show the button if user hasn't submitted info
  }
  
  return (
    <div className={`fixed right-0 top-1/2 -translate-y-1/2 z-40 ${className}`}>
      <Button 
        onClick={downloadReport}
        className="flex flex-col items-center py-6 px-3 rounded-l-lg rounded-r-none gap-2 bg-blue-600 hover:bg-blue-700 shadow-lg"
        size="lg"
      >
        <Download className="h-5 w-5" />
        <span className="text-xs writing-mode-vertical-rl transform rotate-180">AI Business Report</span>
      </Button>
    </div>
  );
};

export default DownloadGuideButton;
