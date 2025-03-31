
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Brain, SendHorizontal, RefreshCw } from 'lucide-react';
import { toast } from 'sonner';

const formSchema = z.object({
  projectName: z.string().min(3, { message: 'Project name must be at least 3 characters' }),
  description: z.string().min(50, { message: 'Please provide more details (at least 50 characters)' }),
  timeline: z.string().min(1, { message: 'Timeline is required' }),
  budget: z.string().min(1, { message: 'Budget is required' }),
  contactEmail: z.string().email({ message: 'Please enter a valid email address' }),
  contactPhone: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface ProjectRequirementsFormProps {
  onFormSubmit: (values: FormValues) => Promise<void>;
  onScheduleMeeting: () => void;
  isSubmitting: boolean;
  isSubmitted: boolean;
}

const ProjectRequirementsForm = ({
  onFormSubmit,
  onScheduleMeeting,
  isSubmitting,
  isSubmitted
}: ProjectRequirementsFormProps) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectName: '',
      description: '',
      timeline: '',
      budget: '',
      contactEmail: '',
      contactPhone: '',
    },
  });

  const handleSubmit = async (values: FormValues) => {
    try {
      await onFormSubmit(values);
      toast.success("Your project requirements have been submitted successfully!");
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error("Failed to submit your project requirements. Please try again.");
    }
  };

  return (
    <Card className="p-6 shadow-md">
      <div className="flex items-center gap-2 mb-6">
        <Brain className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-bold">Project Requirements</h2>
      </div>

      {!isSubmitted ? (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="projectName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter a name for your project" {...field} />
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
                      placeholder="Describe your project in detail. What problem does it solve? Who are the users? What are the key features?" 
                      className="min-h-[150px]" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="timeline"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Desired Timeline</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., 3 months, by Q3 2023" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="budget"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Budget Range</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., $5,000-$10,000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="contactEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contact Email</FormLabel>
                    <FormControl>
                      <Input placeholder="your@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="contactPhone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contact Phone (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="+1 (123) 456-7890" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button 
              type="submit" 
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  Submit Project Requirements
                  <SendHorizontal className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </Form>
      ) : (
        <div className="text-center py-8">
          <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Brain className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-xl font-bold mb-2">Project Requirements Submitted!</h3>
          <p className="text-muted-foreground mb-6">
            Thank you for submitting your project requirements. Our team will review your submission and get back to you soon.
          </p>
          <Button onClick={onScheduleMeeting}>
            Schedule a Meeting
          </Button>
        </div>
      )}
    </Card>
  );
};

export default ProjectRequirementsForm;
