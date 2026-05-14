import React from 'react';
import { Link } from 'wouter';

import { Footer } from '@/components/FooterSections';
import PremiumDarkDisclaimer from '@/components/PremiumDarkDisclaimer';

const sections = [
  {
    title: 'Informational Purpose',
    body: 'The content on this website is provided for informational and marketing purposes only. It should not be treated as a binding offer, legal commitment, or guarantee of final terms.'
  },
  {
    title: 'Pricing Subject To Change',
    body: 'Prices, payment schedules, specifications, and availability may change without prior notice. Any price shown on the website is indicative and must be confirmed by the project team at the time of enquiry.'
  },
  {
    title: 'Artist Impressions & Visuals',
    body: 'Images, illustrations, renderings, and lifestyle visualizations are artistic impressions. They are intended to convey the concept and mood of Nambiar District 25 and may differ from final execution.'
  },
  {
    title: 'No Legal Offer',
    body: 'Nothing on this website should be construed as a legal offer to sell, lease, or otherwise transfer any property interest. Any transaction is subject to formal documentation and approval by the project representatives.'
  },
  {
    title: 'Inquiry Consent',
    body: 'Submitting an enquiry or lead form indicates that you voluntarily shared your information and consented to the project team using it to respond to your request and share relevant updates.'
  },
  {
    title: 'Floor Plan Disclaimer',
    body: 'Floor plans and unit plans are presented for reference only. Measurements, layouts, and area statements may vary due to technical, regulatory, or construction-related revisions.'
  },
  {
    title: 'Project Details Subject To Revision',
    body: 'Project features, amenities, tower names, unit configurations, and timelines may be updated as the development progresses. Visitors should verify the latest information with the project team before making decisions.'
  },
  {
    title: 'Intellectual Property',
    body: 'All text, graphics, visual assets, logos, and page structures on this website are protected by applicable intellectual property laws and may not be copied, reused, or redistributed without permission.'
  },
  {
    title: 'No Guarantee Clause',
    body: 'The website makes no guarantee regarding investment returns, approvals, occupancy timelines, or final market performance. Users should rely on official documentation and their own due diligence.'
  },
  {
    title: 'Contact Clause',
    body: 'For clarifications or project-related assistance, please use the official enquiry form or the communication channels provided on this website.'
  }
];

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen w-full bg-[#f6f1ea] text-[#2f281f] selection:bg-primary selection:text-white">
      <main className="container mx-auto px-4 sm:px-6 py-16 md:py-20">
        <div className="sticky top-4 z-20 mb-8 flex items-center justify-start">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-[#d9cfbf] bg-white/80 px-4 py-2 text-sm font-medium text-[#1f1a17] shadow-[0_8px_24px_rgba(17,17,17,0.05)] backdrop-blur-md transition-all duration-300 hover:-translate-x-1 hover:border-[#c6a66a]/40 hover:bg-[#f8f1e6] hover:shadow-[0_12px_28px_rgba(17,17,17,0.08)]"
          >
            <span aria-hidden="true">←</span>
            <span>Back to Home</span>
          </Link>
        </div>

        <div className="mx-auto max-w-4xl rounded-[30px] border border-[#e4dbca] bg-white/90 p-6 sm:p-8 md:p-10 shadow-[0_24px_60px_rgba(17,17,17,0.08)]">
          <div className="mb-10 space-y-4">
            <p className="text-sm uppercase tracking-[0.32em] text-[#7d7267]">Terms &amp; Conditions</p>
            <h1 className="text-3xl sm:text-4xl font-serif text-[#1f1b18] tracking-tight">Usage Terms &amp; Project Disclaimers</h1>
            <p className="text-base leading-relaxed text-[#5b5144]">
              Please read these terms carefully before proceeding with an enquiry, requesting a brochure, or using information presented for Nambiar District 25.
            </p>
          </div>

          {/* TERMS & CONDITIONS CONTENT PLACEHOLDER */}
          <div className="mb-8 rounded-2xl border border-[#ece3d4] bg-[#fcfaf7] p-5 md:p-6">
            <h2 className="text-sm uppercase tracking-[0.2em] text-[#7d7267] mb-3">TERMS CONTENT PLACEHOLDER</h2>
            <div className="text-sm text-[#5b5144] leading-relaxed">
              <p className="mb-2">PASTE_TERMS_AND_CONDITIONS_HERE</p>
              <p className="text-xs text-[#7d7267]">(Replace the above placeholder with the final Terms &amp; Conditions content when ready.)</p>
            </div>
          </div>

          <div className="space-y-6">
            {sections.map((section) => (
              <section key={section.title} className="space-y-3 rounded-3xl border border-[#ece3d4] bg-[#fcfaf7] p-5 md:p-6">
                <h2 className="text-xl md:text-2xl font-serif text-[#1d1b19]">{section.title}</h2>
                <p className="text-[#5b5144] leading-relaxed">{section.body}</p>
              </section>
            ))}
          </div>

          <div className="mt-8 rounded-[22px] border border-[#e4dbca] bg-[#f8f3eb] px-5 py-4 text-sm leading-relaxed text-[#7d7267]">
            Continued use of this website indicates that you have read and understood these terms and agree to the latest published version.
          </div>
        </div>
      </main>

      <PremiumDarkDisclaimer />
      <Footer />
    </div>
  );
}