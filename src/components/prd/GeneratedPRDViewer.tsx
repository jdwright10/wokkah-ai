
import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Brain, Copy, Download, RefreshCw, Users } from 'lucide-react';
import { toast } from 'sonner';

interface GeneratedPRDViewerProps {
  generatedPrd: string | null;
  onFindTalent: () => void;
  isFindingTalent: boolean;
}

const GeneratedPRDViewer = ({ 
  generatedPrd, 
  onFindTalent, 
  isFindingTalent 
}: GeneratedPRDViewerProps) => {
  const handleCopyToClipboard = () => {
    if (generatedPrd) {
      navigator.clipboard.writeText(generatedPrd);
      toast.success("Copied to clipboard!");
    }
  };

  const handleDownload = () => {
    if (generatedPrd) {
      const element = document.createElement("a");
      const file = new Blob([generatedPrd], { type: 'text/plain' });
      element.href = URL.createObjectURL(file);
      element.download = `PRD-Document.md`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      toast.success("PRD downloaded successfully!");
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Brain className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-bold">Generated PRD</h2>
        </div>
        {generatedPrd && (
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopyToClipboard}
            >
              <Copy className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleDownload}
            >
              <Download className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>

      {generatedPrd ? (
        <>
          <ScrollArea className="bg-neutral-50 p-4 rounded-lg h-[420px]">
            <div className="font-mono text-sm whitespace-pre-wrap pr-4">
              {generatedPrd}
            </div>
          </ScrollArea>
          
          <div className="mt-4">
            <Button 
              className="w-full" 
              variant="secondary"
              onClick={onFindTalent}
              disabled={isFindingTalent}
            >
              {isFindingTalent ? (
                <>
                  <div className="animate-spin mr-2">
                    <RefreshCw className="h-4 w-4" />
                  </div>
                  Finding Talent...
                </>
              ) : (
                <>
                  Find Matching Talent
                  <Users className="ml-2" />
                </>
              )}
            </Button>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center h-[400px] text-center">
          <Brain className="h-16 w-16 text-neutral-300 mb-4" />
          <p className="text-neutral-500">Your PRD will appear here after generation</p>
          <p className="text-sm text-neutral-400 mt-2">Chat with the assistant to create your PRD</p>
        </div>
      )}
    </div>
  );
};

export default GeneratedPRDViewer;
