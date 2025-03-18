
import React, { useEffect } from 'react';
import MainLayout from '@/layout/MainLayout';
import { Check, X, Zap, Users, Shield, Clock, Sparkles, BarChart4 } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { useIsMobile } from '@/hooks/use-mobile';

const Comparison = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const isMobile = useIsMobile();

  // Key strength metrics for each platform
  const strengthCards = [
    {
      platform: "Wokkah",
      score: 95,
      color: "bg-black",
      textColor: "text-white",
      strengths: [
        "Top 1% vetted talent",
        "AI-powered project creation",
        "24-48 hour matching",
        "Transparent fixed pricing",
        "Dedicated project support"
      ]
    },
    {
      platform: "Toptal",
      score: 85,
      color: "bg-slate-600",
      textColor: "text-white",
      strengths: [
        "Top 3% vetted talent",
        "1-3 week matching time",
        "Hidden markup fees",
        "No AI tools",
        "Limited project management"
      ]
    },
    {
      platform: "Upwork",
      score: 70,
      color: "bg-slate-300",
      textColor: "text-slate-800",
      strengths: [
        "Varied talent quality",
        "Self-service matching",
        "5-20% service fees",
        "No AI tools",
        "No dedicated support"
      ]
    }
  ];

  return (
    <MainLayout>
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Wokkah vs. Competitors
            </h1>
            <p className="text-lg text-muted-foreground">
              See how Wokkah compares to other platforms like Upwork and Toptal, and why we're the smarter choice for your business.
            </p>
          </div>

          {/* Platform Comparison Cards */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Platform Comparison</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {strengthCards.map((card) => (
                <Card key={card.platform} className="overflow-hidden border-t-8 shadow-lg" style={{ borderTopColor: card.color === 'bg-black' ? 'black' : card.color === 'bg-slate-600' ? '#475569' : '#94a3b8' }}>
                  <div className={`${card.color} ${card.textColor} p-6`}>
                    <h3 className="text-2xl font-bold mb-1">{card.platform}</h3>
                    <div className="flex items-end">
                      <span className="text-4xl font-bold">{card.score}</span>
                      <span className="ml-1 text-sm opacity-80">/100</span>
                    </div>
                  </div>
                  <CardContent className="pt-6">
                    <ul className="space-y-3">
                      {card.strengths.map((strength, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                          <span>{strength}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Separator className="my-12" />

          {/* Feature Comparison Table */}
          <h2 className="text-2xl font-bold mb-6 text-center">Feature Comparison</h2>
          <div className="overflow-x-auto">
            <Table>
              <TableCaption>
                Comprehensive comparison between Wokkah, Upwork, and Toptal
              </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[280px]">Feature</TableHead>
                  <TableHead className="text-center">
                    <div className="font-bold text-primary">Wokkah</div>
                  </TableHead>
                  <TableHead className="text-center">Toptal</TableHead>
                  <TableHead className="text-center">Upwork</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-primary" />
                      <span>Vetted Talent</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="mx-auto text-green-500" size={20} />
                    <div className="text-xs mt-1">Top 1% of talent</div>
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="mx-auto text-green-500" size={20} />
                    <div className="text-xs mt-1">Top 3% of talent</div>
                  </TableCell>
                  <TableCell className="text-center">
                    <X className="mx-auto text-muted-foreground" size={20} />
                    <div className="text-xs mt-1">Varies widely</div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-primary" />
                      <span>AI-Powered PRD Creation</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="mx-auto text-green-500" size={20} />
                    <div className="text-xs mt-1">Advanced AI tools</div>
                  </TableCell>
                  <TableCell className="text-center">
                    <X className="mx-auto text-muted-foreground" size={20} />
                    <div className="text-xs mt-1">Not available</div>
                  </TableCell>
                  <TableCell className="text-center">
                    <X className="mx-auto text-muted-foreground" size={20} />
                    <div className="text-xs mt-1">Not available</div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>Time to Hire</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="font-medium">24-48 hours</div>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="font-medium">1-3 weeks</div>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="font-medium">Varies (days to weeks)</div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span>Dedicated Project Manager</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="mx-auto text-green-500" size={20} />
                    <div className="text-xs mt-1">Included with Enterprise</div>
                  </TableCell>
                  <TableCell className="text-center">
                    <X className="mx-auto text-muted-foreground" size={20} />
                    <div className="text-xs mt-1">Not included</div>
                  </TableCell>
                  <TableCell className="text-center">
                    <X className="mx-auto text-muted-foreground" size={20} />
                    <div className="text-xs mt-1">Not included</div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <BarChart4 className="h-4 w-4 text-primary" />
                      <span>Project Analytics</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="mx-auto text-green-500" size={20} />
                    <div className="text-xs mt-1">Comprehensive</div>
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="mx-auto text-green-500" size={20} />
                    <div className="text-xs mt-1">Basic</div>
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="mx-auto text-green-500" size={20} />
                    <div className="text-xs mt-1">Basic</div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-primary" />
                      <span>Platform Fee</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="font-medium">$29 / $79 / $149</div>
                    <div className="text-xs mt-1">Based on support level</div>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="font-medium">20-40%</div>
                    <div className="text-xs mt-1">Hidden markups</div>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="font-medium">5-20%</div>
                    <div className="text-xs mt-1">Quality varies widely</div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Why Choose Wokkah?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Wokkah combines the quality focus of Toptal with the affordability of Upwork, while adding powerful AI tools that neither competitor offers. 
              We're focused on making your project successful by providing not just talent, but a complete solution.
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Comparison;
