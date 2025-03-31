
import React from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote, Award } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SuccessStory {
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  result: string;
  clientName: string;
  clientRole: string;
  clientAvatar?: string;
}

const stories: SuccessStory[] = [
  {
    company: "TechFlow Inc.",
    industry: "SaaS",
    challenge: "Needed a comprehensive CRM that integrated with their proprietary systems.",
    solution: "Custom CRM with API integrations and automated workflows.",
    result: "50% reduction in customer onboarding time and 30% increase in retention.",
    clientName: "David Chen",
    clientRole: "CTO",
    clientAvatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&auto=format&fit=crop&q=60"
  },
  {
    company: "GreenLeaf Retail",
    industry: "E-commerce",
    challenge: "Legacy inventory system couldn't scale with rapid growth.",
    solution: "AI-powered inventory prediction and management platform.",
    result: "Reduced stockouts by 75% and improved cash flow by 28%.",
    clientName: "Sarah Johnson",
    clientRole: "Operations Director",
    clientAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=60"
  },
  {
    company: "MediConnect",
    industry: "Healthcare",
    challenge: "Patient data scattered across multiple systems causing delays in care.",
    solution: "Unified patient portal with secure data exchange capabilities.",
    result: "Decreased administrative tasks by 65% and improved patient satisfaction scores.",
    clientName: "Michael Rodriguez",
    clientRole: "Head of IT",
    clientAvatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=60"
  }
];

const SuccessStories: React.FC = () => {
  return (
    <div className="py-8 bg-gradient-to-b from-white to-primary/5 rounded-xl">
      <div className="flex justify-center mb-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Star className="h-6 w-6 text-amber-500 fill-amber-500" />
            <h2 className="text-3xl font-bold tracking-tight">Success Stories</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            See how Wokkah has helped these businesses transform their operations and achieve their goals
          </p>
        </div>
      </div>
      
      <div className="px-4 sm:px-8 md:px-12">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {stories.map((story, index) => (
              <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                <div className="p-1">
                  <Card className="border-0 shadow-lg overflow-hidden">
                    <CardContent className="p-0">
                      <div className="grid grid-cols-1 lg:grid-cols-3">
                        <div className={cn(
                          "lg:col-span-1 p-6 flex flex-col justify-between",
                          index % 3 === 0 ? "bg-gradient-to-br from-blue-500/20 to-violet-500/20" : 
                          index % 3 === 1 ? "bg-gradient-to-br from-emerald-500/20 to-cyan-500/20" : 
                          "bg-gradient-to-br from-amber-500/20 to-orange-500/20"
                        )}>
                          <div>
                            <div className="h-12 w-12 rounded-full bg-white shadow flex items-center justify-center mb-4">
                              <Quote className={cn(
                                "h-6 w-6",
                                index % 3 === 0 ? "text-violet-500" : 
                                index % 3 === 1 ? "text-emerald-500" : 
                                "text-amber-500"
                              )} />
                            </div>
                            
                            <h3 className="text-xl font-bold mb-2">{story.company}</h3>
                            <span className={cn(
                              "text-sm px-3 py-1 rounded-full font-medium inline-block mb-4",
                              index % 3 === 0 ? "bg-blue-100 text-blue-700" : 
                              index % 3 === 1 ? "bg-emerald-100 text-emerald-700" : 
                              "bg-amber-100 text-amber-700"
                            )}>
                              {story.industry}
                            </span>
                          </div>
                          
                          <div className="mt-6">
                            <div className="flex items-center gap-3">
                              {story.clientAvatar ? (
                                <div className="w-12 h-12 rounded-full overflow-hidden">
                                  <img 
                                    src={story.clientAvatar} 
                                    alt={story.clientName}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                              ) : (
                                <div className={cn(
                                  "w-12 h-12 rounded-full flex items-center justify-center",
                                  index % 3 === 0 ? "bg-blue-100" : 
                                  index % 3 === 1 ? "bg-emerald-100" : 
                                  "bg-amber-100"
                                )}>
                                  {story.clientName.charAt(0)}
                                </div>
                              )}
                              <div>
                                <p className="font-semibold">{story.clientName}</p>
                                <p className="text-sm text-muted-foreground">{story.clientRole}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="lg:col-span-2 p-6 bg-white">
                          <div className="space-y-4">
                            <div>
                              <h4 className="text-sm uppercase tracking-wide text-muted-foreground mb-1">Challenge</h4>
                              <p>{story.challenge}</p>
                            </div>
                            
                            <div>
                              <h4 className="text-sm uppercase tracking-wide text-muted-foreground mb-1">Solution</h4>
                              <p>{story.solution}</p>
                            </div>
                            
                            <div>
                              <h4 className="text-sm uppercase tracking-wide text-muted-foreground mb-1">Result</h4>
                              <div className="flex items-center">
                                <Award className={cn(
                                  "h-5 w-5 mr-2",
                                  index % 3 === 0 ? "text-blue-500" : 
                                  index % 3 === 1 ? "text-emerald-500" : 
                                  "text-amber-500"
                                )} />
                                <p className="font-medium">{story.result}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-4 gap-2">
            <CarouselPrevious className="relative static left-0 right-auto translate-y-0" />
            <CarouselNext className="relative static right-0 left-auto translate-y-0" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default SuccessStories;
