
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
    <Card className="shadow-md">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl">Success Stories</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {stories.map((story, index) => (
            <div key={index} className="border-l-4 border-primary/70 pl-4 py-1">
              <h3 className="font-bold text-base">{story.company} <span className="font-normal text-sm text-muted-foreground ml-1">({story.industry})</span></h3>
              <div className="mt-2 space-y-2 text-sm">
                <p><span className="font-medium">Challenge:</span> {story.challenge}</p>
                <p><span className="font-medium">Solution:</span> {story.solution}</p>
                <p><span className="font-medium">Result:</span> {story.result}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SuccessStories;
