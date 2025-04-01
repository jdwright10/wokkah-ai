
import React, { useEffect } from 'react';
import MainLayout from '@/layout/MainLayout';
import AlternativeHero from '@/components/AlternativeHero';
import HomeOptions from '@/components/HomeOptions';
import SocialProof from '@/components/SocialProof';
import Partners from '@/components/Partners';
import Guide from '@/components/Guide';
import CallToAction from '@/components/CallToAction';
import { Helmet } from 'react-helmet';

const AlternativeIndex = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <Helmet>
        <title>Wokkah - AI Solutions for Business | Alternative Design</title>
        <meta name="description" content="Transform your business operations with Wokkah's AI-powered automation solutions." />
      </Helmet>
      <AlternativeHero />
      <Partners />
      <SocialProof />
      <Guide />
      <HomeOptions />
      <CallToAction />
    </MainLayout>
  );
};

export default AlternativeIndex;
