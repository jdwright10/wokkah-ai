
import React, { useEffect } from 'react';
import MainLayout from '@/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Check, X } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const plans = [
    {
      name: 'Basic',
      price: '$29',
      description: 'For individuals and small teams getting started',
      features: {
        'Create AI-Powered PRDs': true,
        'Connect with Freelancers': true,
        'Vetted Talent Access': false,
        'Project Manager': false,
        'Premium Support': false,
        'Advanced Analytics': false,
      },
      buttonText: 'Start Basic Plan',
      popular: false,
    },
    {
      name: 'Pro',
      price: '$79',
      description: 'For growing businesses looking for quality talent',
      features: {
        'Create AI-Powered PRDs': true,
        'Connect with Freelancers': true,
        'Vetted Talent Access': true,
        'Project Manager': false,
        'Premium Support': true,
        'Advanced Analytics': false,
      },
      buttonText: 'Start Pro Plan',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '$149',
      description: 'For businesses seeking the complete managed solution',
      features: {
        'Create AI-Powered PRDs': true,
        'Connect with Freelancers': true,
        'Vetted Talent Access': true,
        'Project Manager': true,
        'Premium Support': true,
        'Advanced Analytics': true,
      },
      buttonText: 'Start Enterprise Plan',
      popular: false,
    }
  ];

  return (
    <MainLayout>
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg text-muted-foreground">
              Choose the plan that fits your business needs and start infusing AI into your company today.
            </p>
            <p className="mt-4 text-base text-muted-foreground">
              Monthly prices cover platform access. Project implementation costs will be quoted separately based on scope and requirements.
            </p>
          </div>

          {/* Mobile Pricing Cards */}
          <div className="md:hidden space-y-8 mb-12">
            {plans.map((plan) => (
              <div 
                key={plan.name}
                className={`relative rounded-xl p-6 border ${
                  plan.popular 
                    ? 'border-primary shadow-lg pt-8' 
                    : 'border-border'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <div className="mt-2">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="mt-2 text-muted-foreground">{plan.description}</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  {Object.entries(plan.features).map(([feature, included]) => (
                    <div key={feature} className="flex items-center">
                      {included ? (
                        <Check className="text-green-500 mr-2" size={18} />
                      ) : (
                        <X className="text-muted-foreground mr-2" size={18} />
                      )}
                      <span className={!included ? 'text-muted-foreground' : ''}>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className="w-full" 
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.buttonText}
                </Button>
              </div>
            ))}
          </div>

          {/* Desktop Pricing Table */}
          <div className="hidden md:block">
            <Table>
              <TableCaption>
                <div className="max-w-3xl mx-auto text-center">
                  <p>All plans include a 14-day free trial. No credit card required.</p>
                  <p className="mt-2">Monthly prices cover platform access only. Project implementation will be quoted separately based on project scope and requirements.</p>
                </div>
              </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">Features</TableHead>
                  {plans.map((plan) => (
                    <TableHead key={plan.name} className="text-center">
                      <div className={`relative pb-6 ${plan.popular ? 'text-primary' : ''}`}>
                        {plan.popular && (
                          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-semibold">
                            Most Popular
                          </div>
                        )}
                        <div className="text-xl font-bold">{plan.name}</div>
                        <div className="mt-2">
                          <span className="text-2xl font-bold">{plan.price}</span>
                          <span className="text-muted-foreground">/month</span>
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
                      </div>
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {Object.keys(plans[0].features).map((feature) => (
                  <TableRow key={feature}>
                    <TableCell className="font-medium">{feature}</TableCell>
                    {plans.map((plan) => (
                      <TableCell key={`${plan.name}-${feature}`} className="text-center">
                        {plan.features[feature as keyof typeof plan.features] ? (
                          <Check className="text-green-500 mx-auto" size={18} />
                        ) : (
                          <X className="text-muted-foreground mx-auto" size={18} />
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell />
                  {plans.map((plan) => (
                    <TableCell key={`${plan.name}-button`} className="text-center pt-6">
                      <Button 
                        variant={plan.popular ? "default" : "outline"}
                        className="w-full"
                      >
                        {plan.buttonText}
                      </Button>
                    </TableCell>
                  ))}
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Pricing;
