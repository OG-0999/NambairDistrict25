import React from 'react';
import { LoadingScreen, Navigation, Hero } from '@/components/HeroSections';
import { TrustBar, AboutProject, KeyHighlights } from '@/components/InfoSections';
import { Gallery, Amenities, Clubhouse } from '@/components/FeatureSections';
import { FloorPlans, MasterPlan, Location, Testimonials } from '@/components/PlanSections';
import { BookVisit, Footer, FloatingElements } from '@/components/FooterSections';
import { ScrollLeadPopup } from '@/components/LeadForms';

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#e7dfd2] text-foreground selection:bg-primary selection:text-white">
      <LoadingScreen />
      <Navigation />
      <FloatingElements />
      <ScrollLeadPopup />
      
      <main>
        <Hero />
        <TrustBar />
        <AboutProject />
        <KeyHighlights />
        <Gallery />
        <Amenities />
        <Clubhouse />
        <FloorPlans />
        <MasterPlan />
        <Location />
        <Testimonials />
        <BookVisit />
      </main>

      <Footer />
    </div>
  );
}
