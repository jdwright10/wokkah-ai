
import React, { useState } from 'react';
import MainLayout from '@/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Helmet } from 'react-helmet';
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Brain, Copy, Download, FileText, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

const formSchema = z.object({
  projectName: z.string().min(2, {
    message: "Project name must be at least 2 characters.",
  }),
  description: z.string().min(10, {
    message: "Project description must be at least 10 characters.",
  }),
  userType: z.string().optional(),
  problemStatement: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const AiPrdGenerator = () => {
  const [generatedPrd, setGeneratedPrd] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [hasCopied, setHasCopied] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectName: "",
      description: "",
      userType: "",
      problemStatement: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      const generated = generatePRD(data);
      setGeneratedPrd(generated);
      setIsGenerating(false);
      toast.success("PRD generated successfully!");
    }, 2000);
  };

  const handleCopyToClipboard = () => {
    if (generatedPrd) {
      navigator.clipboard.writeText(generatedPrd);
      setHasCopied(true);
      toast.success("Copied to clipboard!");
      setTimeout(() => setHasCopied(false), 2000);
    }
  };

  const handleDownload = () => {
    if (generatedPrd) {
      const element = document.createElement("a");
      const file = new Blob([generatedPrd], { type: 'text/plain' });
      element.href = URL.createObjectURL(file);
      element.download = `${form.getValues().projectName.replace(/\s+/g, '-')}-PRD.md`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      toast.success("PRD downloaded successfully!");
    }
  };

  // Function to generate PRD based on input
  const generatePRD = (data: FormValues): string => {
    const { projectName, description, userType, problemStatement } = data;
    
    // Simple templating for PRD generation
    return `# Product Requirements Document: ${projectName}

## Overview
${description}

## Problem Statement
${problemStatement || "The product aims to solve efficiency challenges in workflow management and collaboration."}

## Target Users
${userType || "Professionals in technology and business sectors seeking to optimize their workflows."}

## User Stories
1. As a user, I want to easily organize my tasks so that I can prioritize effectively.
2. As a user, I want to collaborate with my team in real-time to improve productivity.
3. As a user, I want insights into my work patterns to identify areas for improvement.

## Feature Requirements

### Core Features
- Task management system with priority levels and deadlines
- Real-time collaboration tools including comments and shared workspaces
- Dashboard with analytics on productivity and work patterns
- Notification system for updates and deadlines

### Secondary Features
- Integration with popular tools like Slack, Google Workspace, and Microsoft Office
- Mobile application for on-the-go access
- Customizable templates for different project types
- Export functionality for reports and presentations

## Technical Requirements
- Responsive web application using React
- RESTful API for data handling
- Secure authentication and authorization
- Real-time updates using WebSockets
- Data storage with encryption and regular backups

## Success Metrics
- User adoption rate within first 3 months
- Task completion rate improvements
- Reduction in time spent on administrative tasks
- User satisfaction scores from feedback surveys

## Timeline
- Initial prototype: 4 weeks
- Alpha testing: 6 weeks
- Beta launch: 10 weeks
- Public release: 16 weeks

## Appendix
This PRD is a living document and will be updated as the project evolves.
`;
  };

  return (
    <MainLayout>
      <Helmet>
        <title>AI PRD Generator | Wokkah</title>
        <meta 
          name="description" 
          content="Generate comprehensive product requirement documents with our AI-powered PRD generator." 
        />
      </Helmet>

      <section className="pt-32 pb-16">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
              AI-Powered Tool
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              AI PRD Generator
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transform your idea into a comprehensive Product Requirements Document in seconds.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100">
              <div className="flex items-center gap-2 mb-6">
                <FileText className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-bold">Project Details</h2>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="projectName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Name</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Task Management App" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Description</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Describe your project idea in detail..." 
                            className="min-h-24" 
                            {...field} 
                          />
                        </FormControl>
                        <FormDescription>
                          Provide a clear overview of what your product does and its main purpose.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="userType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Target Users (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Business professionals, developers" {...field} />
                        </FormControl>
                        <FormDescription>
                          Who will be using your product?
                        </FormDescription>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="problemStatement"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Problem Statement (Optional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="What problem does your product solve?" 
                            className="min-h-20" 
                            {...field} 
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isGenerating}
                  >
                    {isGenerating ? (
                      <>
                        <span className="animate-pulse">Generating PRD...</span>
                        <Brain className="ml-2 animate-spin" />
                      </>
                    ) : (
                      <>
                        Generate PRD
                        <Brain className="ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </div>

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
                      {hasCopied ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
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
                <div className="bg-neutral-50 p-4 rounded-lg overflow-y-auto max-h-[600px] font-mono text-sm whitespace-pre-wrap">
                  {generatedPrd}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-[400px] text-center">
                  <FileText className="h-16 w-16 text-neutral-300 mb-4" />
                  <p className="text-neutral-500">Your PRD will appear here after generation</p>
                  <p className="text-sm text-neutral-400 mt-2">Fill out the form and click "Generate PRD"</p>
                </div>
              )}
            </div>
          </div>

          <div className="mt-16 bg-white p-8 rounded-xl shadow-sm border border-neutral-100">
            <h2 className="text-2xl font-bold mb-6">How Our AI PRD Generator Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-2">1. Input Your Idea</h3>
                <p className="text-muted-foreground">
                  Provide basic information about your product and its purpose
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-2">2. AI Analysis</h3>
                <p className="text-muted-foreground">
                  Our AI processes your input to generate a comprehensive PRD
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Download className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-2">3. Ready to Use</h3>
                <p className="text-muted-foreground">
                  Download or copy your PRD and share it with your team
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AiPrdGenerator;
