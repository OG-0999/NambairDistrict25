import React from 'react';
import { LoadingScreen, Navigation, Hero } from '@/components/HeroSections';
import { TrustBar, AboutProject, KeyHighlights } from '@/components/InfoSections';
import { Gallery, Amenities, Clubhouse } from '@/components/FeatureSections';
import { FloorPlans, Location, Testimonials } from '@/components/PlanSections';
import { BookVisit, Footer, FloatingElements } from '@/components/FooterSections';
import { ScrollLeadPopup } from '@/components/LeadForms';

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background text-foreground selection:bg-primary selection:text-[#111111]">
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
        <Location />
        <Testimonials />
        <BookVisit />
      </main>

      <Footer />
    </div>
  );
}
