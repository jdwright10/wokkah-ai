
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
import { ChartContainer, ChartLegend, ChartLegendContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

const Comparison = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const comparisonData = [
    { category: 'Talent Quality', Wokkah: 95, Toptal: 90, Upwork: 70 },
    { category: 'Average Time to Hire', Wokkah: 90, Toptal: 85, Upwork: 60 },
    { category: 'AI-Powered Tools', Wokkah: 100, Toptal: 50, Upwork: 40 },
    { category: 'Project Success Rate', Wokkah: 95, Toptal: 85, Upwork: 75 },
    { category: 'Value for Money', Wokkah: 90, Toptal: 70, Upwork: 80 },
  ];

  const chartConfig = {
    Wokkah: { color: '#000000' },
    Toptal: { color: '#475569' },
    Upwork: { color: '#94a3b8' },
  };

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

          {/* Performance Metrics Chart */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Performance Comparison</h2>
            <div className="w-full h-[400px]">
              <ChartContainer config={chartConfig} className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={comparisonData} margin={{ top: 20, right: 30, left: 20, bottom: 50 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="category" angle={-45} textAnchor="end" height={60} />
                    <YAxis domain={[0, 100]} label={{ value: 'Score (higher is better)', angle: -90, position: 'insideLeft' }} />
                    <Tooltip />
                    <Bar dataKey="Wokkah" fill="var(--color-Wokkah)" name="Wokkah" />
                    <Bar dataKey="Toptal" fill="var(--color-Toptal)" name="Toptal" />
                    <Bar dataKey="Upwork" fill="var(--color-Upwork)" name="Upwork" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
              <div className="mt-4 flex justify-center">
                <ChartLegend
                  payload={[
                    { value: 'Wokkah', color: '#000000' },
                    { value: 'Toptal', color: '#475569' },
                    { value: 'Upwork', color: '#94a3b8' },
                  ]}
                >
                  <ChartLegendContent />
                </ChartLegend>
              </div>
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
                    <div className="font-medium">15%</div>
                    <div className="text-xs mt-1">Transparent pricing</div>
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
