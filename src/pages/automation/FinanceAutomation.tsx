
import React, { useEffect } from 'react';
import MainLayout from '@/layout/MainLayout';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { 
  LineChart, 
  CreditCard, 
  DollarSign, 
  FileText,
  BarChart2,
  Calendar
} from 'lucide-react';

const FinanceAutomation = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCalendlySchedule = () => {
    // Open Calendly in a new window
    window.open('https://calendly.com/wokkah/finance-automation', '_blank');
  };

  return (
    <MainLayout>
      <Helmet>
        <title>Finance Automation Solutions | Wokkah</title>
        <meta name="description" content="Streamline your financial processes with AI-powered automation tools that enhance accuracy, compliance, and decision-making." />
      </Helmet>

      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-yellow-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">Finance Automation</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold">
              Transform Your Finance Operations with Intelligent Automation
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Streamline accounting, reporting, compliance, and financial decision-making with our AI-powered finance automation solutions.
            </p>
            <Button 
              size="lg" 
              className="mt-8"
              onClick={handleCalendlySchedule}
            >
              Schedule a Consultation
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {financeFeatures.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-md border border-neutral-200 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Finance Department?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's discuss how our finance automation solutions can help you improve accuracy, save time, and gain better financial insights. Schedule a no-obligation consultation with our finance automation experts.
            </p>
            <Button 
              size="lg"
              onClick={handleCalendlySchedule}
            >
              <Calendar className="mr-2" /> Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

const financeFeatures = [
  {
    title: "Accounts Payable Automation",
    description: "Streamline invoice processing, approval workflows, and payment execution to save time and reduce errors.",
    icon: <CreditCard className="h-6 w-6 text-primary" />
  },
  {
    title: "Accounts Receivable Automation",
    description: "Automate invoicing, payment reminders, and reconciliation to improve cash flow and customer experience.",
    icon: <DollarSign className="h-6 w-6 text-primary" />
  },
  {
    title: "Financial Reporting",
    description: "Generate accurate financial reports automatically with data pulled from multiple sources for real-time insights.",
    icon: <LineChart className="h-6 w-6 text-primary" />
  },
  {
    title: "Expense Management",
    description: "Simplify expense submission, approval, and reimbursement with automated workflows and policy enforcement.",
    icon: <CreditCard className="h-6 w-6 text-primary" />
  },
  {
    title: "Tax Compliance",
    description: "Ensure accuracy and timeliness in tax calculations, filing, and compliance with automated tax management.",
    icon: <FileText className="h-6 w-6 text-primary" />
  },
  {
    title: "Financial Analytics",
    description: "Gain deeper insights into financial performance with AI-powered analytics and predictive forecasting.",
    icon: <BarChart2 className="h-6 w-6 text-primary" />
  }
];

export default FinanceAutomation;
