
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarClock, MessageSquare, FileCheck, Zap } from 'lucide-react';

const NextSteps = () => {
  return (
    <Card className="shadow-md">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl">What Happens Next?</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <MessageSquare className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium mb-1">Initial Consultation</h3>
              <p className="text-sm text-muted-foreground">
                Our team will review your submission and schedule a call to discuss your project in greater detail.
              </p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <FileCheck className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium mb-1">Proposal & Planning</h3>
              <p className="text-sm text-muted-foreground">
                We'll create a detailed proposal with timeline, deliverables, and budget breakdown.
              </p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <CalendarClock className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium mb-1">Project Kickoff</h3>
              <p className="text-sm text-muted-foreground">
                After approval, we'll assign the perfect team and begin development with regular updates.
              </p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Zap className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium mb-1">Delivery & Support</h3>
              <p className="text-sm text-muted-foreground">
                We'll deliver your completed project and provide ongoing support to ensure success.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NextSteps;
