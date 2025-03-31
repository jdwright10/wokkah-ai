
import React, { useEffect } from 'react';
import MainLayout from '@/layout/MainLayout';
import Hero from '@/components/Hero';
import HomeOptions from '@/components/HomeOptions';
import Problem from '@/components/Problem';
import Guide from '@/components/Guide';
import Plan from '@/components/Plan';
import Services from '@/components/Services';
import CallToAction from '@/components/CallToAction';
import Success from '@/components/Success';
import Failure from '@/components/Failure';
import SocialProof from '@/components/SocialProof';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <Hero />
      <HomeOptions />
      <Problem />
      <Guide />
      <Plan />
      <Services />
      <CallToAction />
      <Success />
      <Failure />
      <SocialProof />
    </MainLayout>
  );
};

export default Index;
