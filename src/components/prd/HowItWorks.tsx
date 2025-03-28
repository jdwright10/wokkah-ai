
import React from 'react';
import { Brain, Download, SendHorizontal } from 'lucide-react';

const HowItWorks = () => {
  return (
    <div className="mt-16 bg-white p-8 rounded-xl shadow-sm border border-neutral-100">
      <h2 className="text-2xl font-bold mb-6">How Our Chat-Based PRD Generator Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <SendHorizontal className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-lg font-medium mb-2">1. Chat About Your Idea</h3>
          <p className="text-muted-foreground">
            Describe your product concept to our AI assistant and answer its questions
          </p>
        </div>
        
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <Brain className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-lg font-medium mb-2">2. AI Guides You</h3>
          <p className="text-muted-foreground">
            Our AI helps refine your concept with targeted questions and suggestions
          </p>
        </div>
        
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <Download className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-lg font-medium mb-2">3. Get Your PRD</h3>
          <p className="text-muted-foreground">
            Generate a structured PRD based on your conversation, ready to download
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
