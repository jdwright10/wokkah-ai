
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, TrendingUp, Lightbulb, Sparkles } from 'lucide-react';

interface SuccessStory {
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  result: string;
}

const stories: SuccessStory[] = [
  {
    company: "TechFlow Inc.",
    industry: "SaaS",
    challenge: "Needed a comprehensive CRM that integrated with their proprietary systems.",
    solution: "Custom CRM with API integrations and automated workflows.",
    result: "50% reduction in customer onboarding time and 30% increase in retention."
  },
  {
    company: "GreenLeaf Retail",
    industry: "E-commerce",
    challenge: "Legacy inventory system couldn't scale with rapid growth.",
    solution: "AI-powered inventory prediction and management platform.",
    result: "Reduced stockouts by 75% and improved cash flow by 28%."
  },
  {
    company: "MediConnect",
    industry: "Healthcare",
    challenge: "Patient data scattered across multiple systems causing delays in care.",
    solution: "Unified patient portal with secure data exchange capabilities.",
    result: "Decreased administrative tasks by 65% and improved patient satisfaction scores."
  }
];

const SuccessStories = () => {
  return (
    <Card className="shadow-lg border-t-4 border-t-primary/70">
      <CardHeader className="pb-2">
        <CardTitle className="text-2xl font-bold flex items-center gap-2">
          <Star className="h-5 w-5 text-amber-500" />
          Success Stories
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-6">
          {stories.map((story, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-r from-white to-primary/5 rounded-lg p-5 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-lg text-primary/90">{story.company}</h3>
                <span className="text-sm px-3 py-1 bg-primary/10 text-primary/80 rounded-full font-medium">
                  {story.industry}
                </span>
              </div>
              
              <div className="mt-4 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="h-4 w-4 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-medium text-sm text-muted-foreground mb-1">Challenge:</p>
                    <p>{story.challenge}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-sm text-muted-foreground mb-1">Solution:</p>
                    <p>{story.solution}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-sm text-muted-foreground mb-1">Result:</p>
                    <p className="font-medium text-green-700">{story.result}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SuccessStories;
