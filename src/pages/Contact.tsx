
import React, { useState } from 'react';
import MainLayout from '@/layout/MainLayout';
import { Helmet } from 'react-helmet';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Mail, Phone, SendIcon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription } from '@/components/ui/alert';

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
  captchaVerified: z.boolean().refine(val => val === true, {
    message: "Please verify you're not a robot"
  })
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Contact', isCurrent: true }
  ];

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
      captchaVerified: false
    }
  });

  // Mock captcha verification
  const handleCaptchaVerification = () => {
    setIsCaptchaVerified(true);
    form.setValue('captchaVerified', true);
  };

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form submitted:', data);
      
      // Reset form and show success
      form.reset();
      setIsCaptchaVerified(false);
      setSubmitSuccess(true);
      
      toast({
        title: "Message sent",
        description: "We've received your message and will get back to you soon.",
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Submission failed",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <MainLayout customBreadcrumbs={<BreadcrumbNav items={breadcrumbItems} className="mb-6" />}>
      <Helmet>
        <title>Contact Us | Wokkah</title>
        <meta name="description" content="Get in touch with the Wokkah team for support, inquiries, or to discuss your AI automation needs." />
      </Helmet>

      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 via-purple-50 to-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-purple-700 mb-4">Get In Touch</span>
            
            <h1 className="mt-4 text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions or need support? Our team is here to help. Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="md:col-span-2">
              <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
                {submitSuccess ? (
                  <Alert className="bg-green-50 border-green-200 text-green-800 mb-4">
                    <AlertDescription className="py-4">
                      <h3 className="text-lg font-semibold mb-2">Thank you for reaching out!</h3>
                      <p>We've received your message and will get back to you as soon as possible.</p>
                      <Button 
                        variant="outline" 
                        className="mt-4"
                        onClick={() => setSubmitSuccess(false)}
                      >
                        Send another message
                      </Button>
                    </AlertDescription>
                  </Alert>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Your name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <Input placeholder="your.email@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="+1 (555) 123-4567" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Message</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Please describe how we can help you..."
                                className="min-h-[120px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="border rounded-lg p-4 bg-slate-50">
                        <FormField
                          control={form.control}
                          name="captchaVerified"
                          render={({ field }) => (
                            <FormItem className="flex flex-col space-y-2">
                              <div className="flex items-center space-x-2">
                                <FormControl>
                                  <Checkbox
                                    checked={isCaptchaVerified}
                                    onCheckedChange={handleCaptchaVerification}
                                  />
                                </FormControl>
                                <label className="text-sm font-medium text-gray-700 cursor-pointer">
                                  I'm not a robot
                                </label>
                              </div>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full md:w-auto"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                        <SendIcon className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  </Form>
                )}
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
                <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <a href="mailto:support@wokkah.com" className="text-blue-600 hover:underline">
                        support@wokkah.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <a href="tel:+15551234567" className="text-blue-600 hover:underline">
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t">
                  <h3 className="font-medium mb-2">Office Location</h3>
                  <address className="not-italic text-muted-foreground">
                    <p>Wokkah</p>
                    <p>1775 Mentor Ave Suite 300</p>
                    <p>Cincinnati, OH 45212</p>
                  </address>
                </div>
                
                <div className="mt-8 pt-6 border-t">
                  <h3 className="font-medium mb-2">Office Hours</h3>
                  <p className="text-muted-foreground">Monday - Friday: 9AM - 5PM EST</p>
                  <p className="text-muted-foreground">Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Contact;
