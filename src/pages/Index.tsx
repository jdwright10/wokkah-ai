
import React, { useEffect } from 'react';
import MainLayout from '@/layout/MainLayout';
import Hero from '@/components/Hero';
import ValueProposition from '@/components/ValueProposition';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <Hero />
      <ValueProposition />
      <ProblemSection />
      <SolutionSection />
      <Testimonials />
      <CallToAction />
    </MainLayout>
  );
};

export default Index;
