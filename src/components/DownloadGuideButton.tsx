
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
        <span className="text-xs writing-mode-vertical-rl transform rotate-180">Free AI Guide</span>
      </Button>
    </div>
  );
};

export default DownloadGuideButton;
