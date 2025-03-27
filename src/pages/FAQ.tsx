
import React, { useEffect } from 'react';
import MainLayout from '@/layout/MainLayout';
import { Helmet } from 'react-helmet';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'FAQ', isCurrent: true }
  ];

  return (
    <MainLayout>
      <Helmet>
        <title>Frequently Asked Questions | Wokkah</title>
        <meta name="description" content="Find answers to common questions about Wokkah's AI-powered project management and talent matching solutions." />
      </Helmet>

      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 via-purple-50 to-white">
        <div className="container">
          <BreadcrumbNav items={breadcrumbItems} className="mb-6" />

          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-purple-700 mb-4">Help Center</span>
            
            <h1 className="mt-4 text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to the most common questions about our platform and services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-8">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border px-6 rounded-lg">
                  <AccordionTrigger className="text-lg font-medium hover:text-blue-600 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="mb-6 text-muted-foreground">
              Our support team is here to help! Reach out to us for personalized assistance.
            </p>
            <div className="inline-flex gap-4">
              <a href="mailto:support@wokkah.com" className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:opacity-90 transition-opacity">
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

const faqs = [
  {
    question: "What is Wokkah?",
    answer: "Wokkah is an AI-powered platform that helps businesses streamline project management, connect with top talent, and leverage automation to enhance productivity across various business functions."
  },
  {
    question: "How does the AI-powered PRD generator work?",
    answer: "Our AI PRD generator uses advanced natural language processing to create comprehensive product requirement documents based on your inputs. Simply describe your product vision, target audience, and key features, and our AI will generate a structured PRD that you can further refine and share with your team."
  },
  {
    question: "How does talent matching work?",
    answer: "Our AI-powered talent matching algorithm analyzes project requirements and compares them against our database of verified freelancers. We consider skills, experience, availability, and past performance to recommend the best matches for your specific project needs."
  },
  {
    question: "What types of business automation does Wokkah offer?",
    answer: "Wokkah provides automation solutions across multiple business functions including marketing, HR, operations, finance, customer service, manufacturing, Amazon operations, PPC advertising, hiring, sales, and market research. Each solution is designed to streamline workflows and improve efficiency."
  },
  {
    question: "How much does Wokkah cost?",
    answer: "Wokkah offers flexible pricing plans designed to fit businesses of all sizes. We provide free starter options as well as premium plans with advanced features. Visit our Pricing page for detailed information on our current plans and rates."
  },
  {
    question: "Can I integrate Wokkah with my existing tools?",
    answer: "Yes, Wokkah is designed to integrate seamlessly with popular business tools and platforms including project management software, CRM systems, and marketing automation tools. Our API connections ensure smooth data flow between systems."
  },
  {
    question: "How secure is my data on Wokkah?",
    answer: "We take data security seriously at Wokkah. All data is encrypted both in transit and at rest, and we implement strict access controls. We're compliant with industry standards and regularly conduct security audits to ensure your information stays protected."
  },
  {
    question: "Can I try Wokkah before purchasing?",
    answer: "Absolutely! We offer a free trial period for new users to explore our platform's features. Additionally, we provide demos and personalized consultations to help you understand how Wokkah can benefit your specific business needs."
  }
];

export default FAQ;
