import React from 'react';
import { Footer } from '@/components/FooterSections';

const terms = [
  {
    title: 'Informational Purpose',
    body: 'This website is presented for informational and marketing purposes only. It does not constitute a binding offer, warranty, or contractual commitment.'
  },
  {
    title: 'Data Usage Disclaimer',
    body: 'Any personal information you submit may be used to respond to your enquiry, share project details, and provide related updates connected to this development.'
  },
  {
    title: 'Lead Inquiry Consent',
    body: 'By submitting a lead or enquiry form, you confirm that your details are shared voluntarily and that you consent to being contacted regarding the project.'
  },
  {
    title: 'Communication Authorization',
    body: 'You authorize the website representatives, sales associates, and authorized marketing partners to contact you via call, SMS, WhatsApp, or email.'
  },
  {
    title: 'Developer Marketing Disclaimer',
    body: 'This website operates as a promotional and lead-generation platform associated with the developer and its authorized sales teams.'
  },
  {
    title: 'No Misuse Clause',
    body: 'You agree not to misuse this website, submit false details, attempt unauthorized access, or use the content in a manner inconsistent with lawful enquiry and marketing activity.'
  }
];

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen w-full bg-[#f6f1ea] text-[#2f281f] selection:bg-primary selection:text-white">
      <main className="container mx-auto px-4 sm:px-6 py-16 md:py-20">
          <div className="mb-8 flex items-center">
          <a
            href="/"
              className="inline-flex items-center gap-2 rounded-full border border-[#d9cfbf] bg-white/70 px-4 py-2 text-sm font-medium text-[#1f1a17] shadow-[0_8px_24px_rgba(17,17,17,0.05)] transition-all duration-300 hover:-translate-x-1 hover:border-[#c6a66a]/40 hover:bg-[#f8f1e6] hover:shadow-[0_12px_28px_rgba(17,17,17,0.08)]"
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