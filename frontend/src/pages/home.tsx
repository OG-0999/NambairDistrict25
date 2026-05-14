import React from 'react';
import { Navigation, Hero, HeroUSPStrip } from '@/components/HeroSections';
import { TrustBar, AboutProject, KeyHighlights } from '@/components/InfoSections';
import { Gallery, Amenities, Clubhouse } from '@/components/FeatureSections';
import { UnitPlans, Testimonials } from '@/components/PlanSections';
import { Location } from '@/components/LocationSection';
import { BookVisit, Footer, FloatingElements } from '@/components/FooterSections';
import { MobileStickyInquiryCTA, ScrollLeadPopup } from '@/components/LeadForms';
import RealEstateDisclaimer from '@/components/RealEstateDisclaimer';

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-transparent text-foreground selection:bg-primary selection:text-white">
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

      <RealEstateDisclaimer />
      <Footer />
    </div>
  );
}
