
import React, { useState } from 'react';
import MainLayout from '@/layout/MainLayout';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { ClipboardCheck, Download, Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

// Define schema for form validation
const formSchema = z.object({
  companyName: z.string().min(1, { message: 'Company name is required' }),
  industry: z.string().min(1, { message: 'Industry is required' }),
  employees: z.string().min(1, { message: 'Number of employees is required' }),
  technologyStack: z.string().min(1, { message: 'Technology stack is required' }),
  businessGoals: z.string().min(1, { message: 'Business goals is required' }),
  aiFamiliarity: z.enum(['not-familiar', 'somewhat-familiar', 'very-familiar']),
  usingAi: z.enum(['yes', 'no']),
  aiApplications: z.object({
    chatbots: z.boolean().optional(),
    dataAnalytics: z.boolean().optional(),
    machineLearning: z.boolean().optional(),
    other: z.boolean().optional(),
  }).optional(),
  aiApplicationsOther: z.string().optional(),
  challenges: z.object({
    dataManagement: z.boolean().optional(),
    operationalEfficiency: z.boolean().optional(),
    customerEngagement: z.boolean().optional(),
    marketAnalysis: z.boolean().optional(),
    other: z.boolean().optional(),
  }),
  challengesOther: z.string().optional(),
  currentSolutions: z.enum(['manual', 'basic', 'advanced', 'not-addressed']),
  goals: z.object({
    improveProductivity: z.boolean().optional(),
    enhanceCustomerExperience: z.boolean().optional(),
    increaseSales: z.boolean().optional(),
    reduceCosts: z.boolean().optional(),
    other: z.boolean().optional(),
  }),
  goalsOther: z.string().optional(),
  benefitAreas: z.object({
    marketing: z.boolean().optional(),
    sales: z.boolean().optional(),
    customerService: z.boolean().optional(),
    humanResources: z.boolean().optional(),
    operations: z.boolean().optional(),
  }),
  painPoints: z.string().min(1, { message: 'Please specify your pain points' }),
  budget: z.enum(['less-than-10k', '10k-50k', '50k-100k', 'over-100k']),
  dedicatedTeam: z.enum(['yes', 'no', 'in-development']),
  aiPolicies: z.enum(['yes', 'no', 'in-development']),
});

type FormValues = z.infer<typeof formSchema>;

const AiNeedsAssessment = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Initialize form with react-hook-form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: '',
      industry: '',
      employees: '',
      technologyStack: '',
      businessGoals: '',
      aiFamiliarity: 'not-familiar',
      usingAi: 'no',
      aiApplications: {
        chatbots: false,
        dataAnalytics: false,
        machineLearning: false,
        other: false,
      },
      aiApplicationsOther: '',
      challenges: {
        dataManagement: false,
        operationalEfficiency: false,
        customerEngagement: false,
        marketAnalysis: false,
        other: false,
      },
      challengesOther: '',
      currentSolutions: 'manual',
      goals: {
        improveProductivity: false,
        enhanceCustomerExperience: false,
        increaseSales: false,
        reduceCosts: false,
        other: false,
      },
      goalsOther: '',
      benefitAreas: {
        marketing: false,
        sales: false,
        customerService: false,
        humanResources: false,
        operations: false,
      },
      painPoints: '',
      budget: 'less-than-10k',
      dedicatedTeam: 'no',
      aiPolicies: 'no',
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log('Form submitted:', data);
    
    // In a real application, you would send this data to your backend
    toast({
      title: "Assessment Submitted",
      description: "Thank you for completing the AI Needs Assessment. We'll be in touch shortly.",
    });
    
    setIsSubmitted(true);
    
    // Reset form
    form.reset();
    
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  };

  const downloadReport = () => {
    // Trigger download of the PDF
    const link = document.createElement('a');
    link.href = '/ai-landscape-guide.pdf';
    link.download = 'Unlocking the Future: How AI Can Transform Your Business.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Download Started",
      description: "Your AI guide is downloading now.",
    });
  };

  return (
    <MainLayout>
      <Helmet>
        <title>60 Second AI Needs Assessment | Wokkah</title>
        <meta
          name="description"
          content="Complete our 60-second AI needs assessment to discover how AI can transform your business operations and growth."
        />
      </Helmet>

      <section className="pt-32 pb-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container">
          {isSubmitted ? (
            <Card className="max-w-4xl mx-auto shadow-lg border-primary/20">
              <CardHeader className="text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-t-lg">
                <CardTitle className="text-3xl font-bold text-primary">Thank You!</CardTitle>
                <CardDescription className="text-lg mt-2">
                  Your AI Needs Assessment has been successfully submitted.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <p className="text-xl mb-6">
                    Thank you for taking the time to complete the "Wokkah 60 Second AI Needs Assessment Survey". 
                    Your responses will help us understand your needs and tailor our AI solutions to best serve your company.
                  </p>
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">
                    Take These 3 Simple Steps Toward a Smarter, More Efficient, and More Profitable Future With AI
                  </h3>
                </div>
                
                <div className="grid gap-8 md:grid-cols-3">
                  <div className="bg-blue-50 p-6 rounded-lg text-center">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                      <Download className="h-6 w-6" />
                    </div>
                    <h4 className="font-semibold mb-2">Step 1</h4>
                    <p className="mb-4">Download your free report – "Unlocking the Future: How AI Can Transform Your Business"</p>
                    <Button onClick={downloadReport} variant="outline" className="w-full">
                      Download Report
                    </Button>
                  </div>
                  
                  <div className="bg-purple-50 p-6 rounded-lg text-center">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-purple-100 text-purple-600 mb-4">
                      <Calendar className="h-6 w-6" />
                    </div>
                    <h4 className="font-semibold mb-2">Step 2</h4>
                    <p className="mb-4">Schedule a free 30 Minute "AI Opportunity Audit Call" to discuss your pain points</p>
                    <Button 
                      onClick={() => window.location.href = "https://wokkah.com"} 
                      variant="outline" 
                      className="w-full"
                    >
                      Schedule Call
                    </Button>
                  </div>
                  
                  <div className="bg-indigo-50 p-6 rounded-lg text-center">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 text-indigo-600 mb-4">
                      <ClipboardCheck className="h-6 w-6" />
                    </div>
                    <h4 className="font-semibold mb-2">Step 3</h4>
                    <p className="mb-4">Fill out your Product Requirements Document (PRD) or let us help you define your project</p>
                    <Button 
                      onClick={() => window.location.href = "https://wokkah.com"} 
                      variant="outline" 
                      className="w-full"
                    >
                      Visit Wokkah.com
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-gradient-to-r from-blue-50 to-purple-50 px-8 py-6 text-center rounded-b-lg">
                <p className="text-lg font-semibold w-full bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">
                  Let's Build the Future Together, Think Bigger… Think Wokkah
                </p>
              </CardFooter>
            </Card>
          ) : (
            <>
              <div className="max-w-4xl mx-auto text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">
                  60 Second AI Needs Assessment
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Take a minute to help us understand your business needs and discover how AI can transform your operations and drive growth.
                </p>
              </div>
              
              <Card className="max-w-4xl mx-auto shadow-md">
                <CardHeader>
                  <CardTitle>AI Needs Assessment Form</CardTitle>
                  <CardDescription>
                    Please fill out the form below to help us understand your AI needs.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                      {/* Section 1: Company Information */}
                      <div className="space-y-4">
                        <h2 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">
                          Section 1: Company Information
                        </h2>
                        <div className="grid gap-4 sm:grid-cols-2">
                          <FormField
                            control={form.control}
                            name="companyName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Company Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="Enter company name" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="industry"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Industry</FormLabel>
                                <FormControl>
                                  <Input placeholder="Enter industry" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <div className="grid gap-4 sm:grid-cols-2">
                          <FormField
                            control={form.control}
                            name="employees"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Number of Employees</FormLabel>
                                <FormControl>
                                  <Input placeholder="Enter number of employees" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="technologyStack"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Current Technology Stack</FormLabel>
                                <FormControl>
                                  <Input placeholder="Enter technology stack" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <FormField
                          control={form.control}
                          name="businessGoals"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Primary Business Goals</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Describe your primary business goals..."
                                  className="min-h-20"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <Separator />
                      
                      {/* Section 2: Current AI Awareness and Usage */}
                      <div className="space-y-4">
                        <h2 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">
                          Section 2: Current AI Awareness and Usage
                        </h2>
                        
                        <FormField
                          control={form.control}
                          name="aiFamiliarity"
                          render={({ field }) => (
                            <FormItem className="space-y-3">
                              <FormLabel>1. How familiar are you with AI technologies?</FormLabel>
                              <FormControl>
                                <RadioGroup
                                  onValueChange={field.onChange}
                                  value={field.value}
                                  className="flex flex-col space-y-1"
                                >
                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="not-familiar" />
                                    </FormControl>
                                    <FormLabel className="font-normal">Not familiar</FormLabel>
                                  </FormItem>
                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="somewhat-familiar" />
                                    </FormControl>
                                    <FormLabel className="font-normal">Somewhat familiar</FormLabel>
                                  </FormItem>
                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="very-familiar" />
                                    </FormControl>
                                    <FormLabel className="font-normal">Very familiar</FormLabel>
                                  </FormItem>
                                </RadioGroup>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="usingAi"
                          render={({ field }) => (
                            <FormItem className="space-y-3">
                              <FormLabel>2. Are you currently using any AI tools or technologies?</FormLabel>
                              <FormControl>
                                <RadioGroup
                                  onValueChange={field.onChange}
                                  value={field.value}
                                  className="flex flex-col space-y-1"
                                >
                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="yes" />
                                    </FormControl>
                                    <FormLabel className="font-normal">Yes</FormLabel>
                                  </FormItem>
                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="no" />
                                    </FormControl>
                                    <FormLabel className="font-normal">No</FormLabel>
                                  </FormItem>
                                </RadioGroup>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        {form.watch('usingAi') === 'yes' && (
                          <div className="pl-6 border-l-2 border-blue-100 space-y-4">
                            <FormLabel>3. Which AI applications are you currently using?</FormLabel>
                            
                            <div className="space-y-2">
                              <FormField
                                control={form.control}
                                name="aiApplications.chatbots"
                                render={({ field }) => (
                                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                      />
                                    </FormControl>
                                    <FormLabel className="font-normal">Chatbots</FormLabel>
                                  </FormItem>
                                )}
                              />
                              
                              <FormField
                                control={form.control}
                                name="aiApplications.dataAnalytics"
                                render={({ field }) => (
                                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                      />
                                    </FormControl>
                                    <FormLabel className="font-normal">Data Analytics</FormLabel>
                                  </FormItem>
                                )}
                              />
                              
                              <FormField
                                control={form.control}
                                name="aiApplications.machineLearning"
                                render={({ field }) => (
                                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                      />
                                    </FormControl>
                                    <FormLabel className="font-normal">Machine Learning</FormLabel>
                                  </FormItem>
                                )}
                              />
                              
                              <FormField
                                control={form.control}
                                name="aiApplications.other"
                                render={({ field }) => (
                                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                      />
                                    </FormControl>
                                    <FormLabel className="font-normal">Other</FormLabel>
                                  </FormItem>
                                )}
                              />
                            </div>
                            
                            {form.watch('aiApplications.other') && (
                              <FormField
                                control={form.control}
                                name="aiApplicationsOther"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Please specify other AI applications</FormLabel>
                                    <FormControl>
                                      <Input placeholder="Enter other AI applications" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            )}
                          </div>
                        )}
                      </div>
                      
                      <Separator />
                      
                      {/* Section 3: Business Challenges */}
                      <div className="space-y-4">
                        <h2 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">
                          Section 3: Business Challenges
                        </h2>
                        
                        <div>
                          <FormLabel>4. What are the primary challenges your company is facing?</FormLabel>
                          <div className="mt-3 space-y-2">
                            <FormField
                              control={form.control}
                              name="challenges.dataManagement"
                              render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value}
                                      onCheckedChange={field.onChange}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal">Data Management</FormLabel>
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="challenges.operationalEfficiency"
                              render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value}
                                      onCheckedChange={field.onChange}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal">Operational Efficiency</FormLabel>
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="challenges.customerEngagement"
                              render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value}
                                      onCheckedChange={field.onChange}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal">Customer Engagement</FormLabel>
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="challenges.marketAnalysis"
                              render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value}
                                      onCheckedChange={field.onChange}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal">Market Analysis</FormLabel>
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="challenges.other"
                              render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value}
                                      onCheckedChange={field.onChange}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal">Other</FormLabel>
                                </FormItem>
                              )}
                            />
                          </div>
                          
                          {form.watch('challenges.other') && (
                            <FormField
                              control={form.control}
                              name="challengesOther"
                              render={({ field }) => (
                                <FormItem className="mt-3">
                                  <FormLabel>Please specify other challenges</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Enter other challenges" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          )}
                        </div>
                        
                        <FormField
                          control={form.control}
                          name="currentSolutions"
                          render={({ field }) => (
                            <FormItem className="space-y-3">
                              <FormLabel>5. How do you currently address these challenges?</FormLabel>
                              <FormControl>
                                <RadioGroup
                                  onValueChange={field.onChange}
                                  value={field.value}
                                  className="flex flex-col space-y-1"
                                >
                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="manual" />
                                    </FormControl>
                                    <FormLabel className="font-normal">Manual processes</FormLabel>
                                  </FormItem>
                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="basic" />
                                    </FormControl>
                                    <FormLabel className="font-normal">Basic software solutions</FormLabel>
                                  </FormItem>
                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="advanced" />
                                    </FormControl>
                                    <FormLabel className="font-normal">Advanced technologies</FormLabel>
                                  </FormItem>
                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="not-addressed" />
                                    </FormControl>
                                    <FormLabel className="font-normal">Not addressed</FormLabel>
                                  </FormItem>
                                </RadioGroup>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <Separator />
                      
                      {/* Section 4: Goals for AI Implementation */}
                      <div className="space-y-4">
                        <h2 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">
                          Section 4: Goals for AI Implementation
                        </h2>
                        
                        <div>
                          <FormLabel>6. What specific goals do you hope to achieve through AI implementation?</FormLabel>
                          <div className="mt-3 space-y-2">
                            <FormField
                              control={form.control}
                              name="goals.improveProductivity"
                              render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value}
                                      onCheckedChange={field.onChange}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal">Improve Productivity</FormLabel>
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="goals.enhanceCustomerExperience"
                              render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value}
                                      onCheckedChange={field.onChange}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal">Enhance Customer Experience</FormLabel>
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="goals.increaseSales"
                              render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value}
                                      onCheckedChange={field.onChange}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal">Increase Sales</FormLabel>
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="goals.reduceCosts"
                              render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value}
                                      onCheckedChange={field.onChange}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal">Reduce Costs</FormLabel>
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="goals.other"
                              render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value}
                                      onCheckedChange={field.onChange}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal">Other</FormLabel>
                                </FormItem>
                              )}
                            />
                          </div>
                          
                          {form.watch('goals.other') && (
                            <FormField
                              control={form.control}
                              name="goalsOther"
                              render={({ field }) => (
                                <FormItem className="mt-3">
                                  <FormLabel>Please specify other goals</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Enter other goals" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          )}
                        </div>
                        
                        <div>
                          <FormLabel>7. What areas of your business do you believe AI could benefit the most?</FormLabel>
                          <div className="mt-3 space-y-2">
                            <FormField
                              control={form.control}
                              name="benefitAreas.marketing"
                              render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value}
                                      onCheckedChange={field.onChange}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal">Marketing</FormLabel>
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="benefitAreas.sales"
                              render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value}
                                      onCheckedChange={field.onChange}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal">Sales</FormLabel>
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="benefitAreas.customerService"
                              render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value}
                                      onCheckedChange={field.onChange}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal">Customer Service</FormLabel>
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="benefitAreas.humanResources"
                              render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value}
                                      onCheckedChange={field.onChange}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal">Human Resources</FormLabel>
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="benefitAreas.operations"
                              render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value}
                                      onCheckedChange={field.onChange}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal">Operations</FormLabel>
                                </FormItem>
                              )}
                            />
                          </div>
                          
                          <FormField
                            control={form.control}
                            name="painPoints"
                            render={({ field }) => (
                              <FormItem className="mt-4">
                                <FormLabel>Please specify what pain points you have in your business that you believe AI can do or help with:</FormLabel>
                                <FormControl>
                                  <Textarea 
                                    placeholder="Describe your pain points..."
                                    className="min-h-28"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                      
                      <Separator />
                      
                      {/* Section 5: Budget and Resources */}
                      <div className="space-y-4">
                        <h2 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">
                          Section 5: Budget and Resources
                        </h2>
                        
                        <FormField
                          control={form.control}
                          name="budget"
                          render={({ field }) => (
                            <FormItem className="space-y-3">
                              <FormLabel>8. What is your estimated budget for AI implementation?</FormLabel>
                              <FormControl>
                                <RadioGroup
                                  onValueChange={field.onChange}
                                  value={field.value}
                                  className="flex flex-col space-y-1"
                                >
                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="less-than-10k" />
                                    </FormControl>
                                    <FormLabel className="font-normal">Less than $10,000</FormLabel>
                                  </FormItem>
                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="10k-50k" />
                                    </FormControl>
                                    <FormLabel className="font-normal">$10,000 - $50,000</FormLabel>
                                  </FormItem>
                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="50k-100k" />
                                    </FormControl>
                                    <FormLabel className="font-normal">$50,000 - $100,000</FormLabel>
                                  </FormItem>
                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="over-100k" />
                                    </FormControl>
                                    <FormLabel className="font-normal">Over $100,000</FormLabel>
                                  </FormItem>
                                </RadioGroup>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="dedicatedTeam"
                          render={({ field }) => (
                            <FormItem className="space-y-3">
                              <FormLabel>9. Do you have a dedicated team for AI projects?</FormLabel>
                              <FormControl>
                                <RadioGroup
                                  onValueChange={field.onChange}
                                  value={field.value}
                                  className="flex flex-col space-y-1"
                                >
                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="yes" />
                                    </FormControl>
                                    <FormLabel className="font-normal">Yes</FormLabel>
                                  </FormItem>
                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="no" />
                                    </FormControl>
                                    <FormLabel className="font-normal">No</FormLabel>
                                  </FormItem>
                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="in-development" />
                                    </FormControl>
                                    <FormLabel className="font-normal">In development</FormLabel>
                                  </FormItem>
                                </RadioGroup>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="aiPolicies"
                          render={({ field }) => (
                            <FormItem className="space-y-3">
                              <FormLabel>10. Does your company currently have AI adoption policies in place?</FormLabel>
                              <FormControl>
                                <RadioGroup
                                  onValueChange={field.onChange}
                                  value={field.value}
                                  className="flex flex-col space-y-1"
                                >
                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="yes" />
                                    </FormControl>
                                    <FormLabel className="font-normal">Yes</FormLabel>
                                  </FormItem>
                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="no" />
                                    </FormControl>
                                    <FormLabel className="font-normal">No</FormLabel>
                                  </FormItem>
                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="in-development" />
                                    </FormControl>
                                    <FormLabel className="font-normal">In development</FormLabel>
                                  </FormItem>
                                </RadioGroup>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="pt-4">
                        <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90">
                          Submit Assessment
                        </Button>
                      </div>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </>
          )}
        </div>
      </section>
    </MainLayout>
  );
};

export default AiNeedsAssessment;
