
import React, { useEffect } from 'react';
import MainLayout from '@/layout/MainLayout';
import Hero from '@/components/Hero';
import HomeOptions from '@/components/HomeOptions';
import ValueProposition from '@/components/ValueProposition';
import CaseStudies from '@/components/CaseStudies';
import CallToAction from '@/components/CallToAction';
import ExitIntentPopup from '@/components/ExitIntentPopup';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <ExitIntentPopup />
      <Hero />
      <HomeOptions />
      <ValueProposition />
      <CaseStudies />
      <CallToAction />
    </MainLayout>
  );
};

export default Index;
