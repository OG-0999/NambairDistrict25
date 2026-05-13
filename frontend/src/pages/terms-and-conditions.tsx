import React from 'react';
import { Footer } from '@/components/FooterSections';

const terms = [
  {
    title: 'Project Information',
    body: 'Project details, layouts, amenities, and specifications are subject to change based on approvals, development updates, and final execution.'
  },
  {
    title: 'Artistic Representation',
    body: 'Images, renders, and visual materials on this website are artistic impressions and may differ from the final delivered product.'
  },
  {
    title: 'Pricing',
    body: 'Prices and offers may vary without prior notice. Final pricing is determined by the developer or authorized sales team at the time of enquiry or booking.'
  },
  {
    title: 'Contact Consent',
    body: 'When you submit an enquiry, you consent to being contacted regarding the project by the website team and associated sales representatives.'
  },
  {
    title: 'Marketing Platform',
    body: 'This website functions as a marketing and lead generation platform associated with the developer and its authorized sales teams.'
  }
];

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen w-full bg-[#f6f1ea] text-[#2f281f] selection:bg-primary selection:text-white">
      <main className="container mx-auto px-4 sm:px-6 py-16 md:py-20">
        <div className="mb-8 flex items-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-[#d9cfbf] bg-white/70 px-4 py-2 text-sm font-medium text-[#1f1a17] transition-all duration-300 hover:-translate-x-1 hover:border-[#c6a66a]/40 hover:bg-[#f8f1e6]"
          >
            <span aria-hidden="true">←</span>
            <span>Back to Home</span>
          </a>
        </div>

        <div className="mx-auto max-w-4xl rounded-[30px] border border-[#e4dbca] bg-white/90 p-6 sm:p-8 md:p-10 shadow-[0_24px_60px_rgba(17,17,17,0.08)]">
          <div className="mb-10 space-y-4">
            <p className="text-sm uppercase tracking-[0.32em] text-[#7d7267]">Terms &amp; Conditions</p>
            <h1 className="text-3xl sm:text-4xl font-serif text-[#1f1b18] tracking-tight">Usage Terms & Project Disclaimers</h1>
            <p className="text-base leading-relaxed text-[#5b5144]">
              Please review these terms before proceeding with an enquiry or using project information presented on this website.
            </p>
          </div>

          <div className="space-y-6">
            {terms.map((term) => (
              <section key={term.title} className="space-y-3 rounded-3xl border border-[#ece3d4] bg-[#fcfaf7] p-5 md:p-6">
                <h2 className="text-xl md:text-2xl font-serif text-[#1d1b19]">{term.title}</h2>
                <p className="text-[#5b5144] leading-relaxed">{term.body}</p>
              </section>
            ))}
          </div>

          <div className="mt-8 rounded-[22px] border border-[#e4dbca] bg-[#f8f3eb] px-5 py-4 text-sm leading-relaxed text-[#7d7267]">
            Use of this website indicates acceptance of these terms and any updated disclosures published on this page.
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}