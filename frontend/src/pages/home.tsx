import React from 'react';
import { LoadingScreen, Navigation, Hero, HeroUSPStrip } from '@/components/HeroSections';
import { TrustBar, AboutProject, KeyHighlights } from '@/components/InfoSections';
import { Gallery, Amenities, Clubhouse } from '@/components/FeatureSections';
import { UnitPlans, Testimonials } from '@/components/PlanSections';
import { Location } from '@/components/LocationSection';
import { BookVisit, Footer, FloatingElements } from '@/components/FooterSections';
import { MobileStickyInquiryCTA, ScrollLeadPopup } from '@/components/LeadForms';

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#e7dfd2] text-foreground selection:bg-primary selection:text-white">
      <LoadingScreen />
      <Navigation />
      <FloatingElements />
      <ScrollLeadPopup />
      <MobileStickyInquiryCTA />
      
      <main className="pb-28 md:pb-0">
        <Hero />
        <HeroUSPStrip />
        <TrustBar />
        <AboutProject />
        <KeyHighlights />
        <Gallery />
        <Amenities />
        <Clubhouse />
        <UnitPlans />
        <Location />
        <Testimonials />
        <BookVisit />
      </main>

      <Footer />
    </div>
  );
}
