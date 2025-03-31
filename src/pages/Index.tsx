
import React, { useEffect } from 'react';
import MainLayout from '@/layout/MainLayout';
import Hero from '@/components/Hero';
import HomeOptions from '@/components/HomeOptions';
import ValueProposition from '@/components/ValueProposition';
import Partners from '@/components/Partners';
import SocialProof from '@/components/SocialProof';
import CallToAction from '@/components/CallToAction';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <Hero />
      <HomeOptions />
      <ValueProposition />
      <Partners />
      <SocialProof />
      <CallToAction />
    </MainLayout>
  );
};

export default Index;
