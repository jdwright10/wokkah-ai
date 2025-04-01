
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
    <MainLayout customBreadcrumbs={<BreadcrumbNav items={breadcrumbItems} className="mb-6" />}>
      <Helmet>
        <title>Frequently Asked Questions | Wokkah</title>
        <meta name="description" content="Find answers to common questions about Wokkah's AI-powered business automation solutions." />
      </Helmet>

      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 via-purple-50 to-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-purple-700 mb-4">Help Center</span>
            
            <h1 className="mt-4 text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to the most common questions about our services and AI solutions.
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
    answer: "Wokkah is an AI-powered platform that helps businesses streamline operations through intelligent automation solutions and consulting services. We focus on enhancing productivity and efficiency across various business functions."
  },
  {
    question: "What types of business automation does Wokkah offer?",
    answer: "Wokkah provides automation solutions across multiple business functions including marketing, HR, operations, finance, customer service, manufacturing, sales, and market research. Each solution is tailored to streamline workflows and improve operational efficiency."
  },
  {
    question: "How can I hire Wokkah for my project?",
    answer: "You can hire our team by visiting the 'Hire Wokkah' section of our website. There, you'll find a project requirements form that helps us understand your needs. After submission, our team will review your requirements and contact you to discuss next steps and provide a customized solution."
  },
  {
    question: "What is the AI needs assessment tool?",
    answer: "Our 60-second AI Needs Assessment is a quick diagnostic tool that evaluates your business's current operations and identifies areas where AI automation could provide the most benefit. After completing the assessment, you'll receive tailored recommendations for implementing AI solutions in your business."
  },
  {
    question: "What marketing automation tools does Wokkah offer?",
    answer: "Our marketing automation suite includes tools for website building, email campaigns, social media management, lead nurturing, content personalization, marketing analytics, Amazon marketplace optimization, and PPC advertising management. Each tool is designed to help businesses streamline their marketing efforts and improve results."
  },
  {
    question: "How does Wokkah's HR automation work?",
    answer: "Our HR automation solutions help businesses streamline recruitment, onboarding, employee management, and performance evaluation processes. We incorporate AI to reduce manual tasks, improve candidate screening, enhance employee engagement, and provide data-driven insights for better workforce management."
  },
  {
    question: "Can Wokkah integrate with my existing business tools?",
    answer: "Yes, our automation solutions are designed to integrate seamlessly with popular business tools and platforms. We work with your existing tech stack to ensure smooth data flow between systems and a cohesive operational environment."
  },
  {
    question: "What industries does Wokkah serve?",
    answer: "Wokkah serves a wide range of industries including e-commerce, software development, finance, healthcare, manufacturing, and professional services. Our solutions are adaptable to the specific needs and challenges of different sectors."
  }
];

export default FAQ;
