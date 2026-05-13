import React from 'react';
import { Footer } from '@/components/FooterSections';

const sections = [
  {
    title: 'Information We Collect',
    body: 'We may collect the details you voluntarily submit through inquiry forms, including your name, phone number, email address, and any project preferences you choose to share.'
  },
  {
    title: 'How We Use Information',
    body: 'Your information is used only for project communication, follow-up, pricing updates, and related contact after you express interest in this project.'
  },
  {
    title: 'Consent To Contact',
    body: 'By submitting an enquiry, you consent to being contacted via call, SMS, WhatsApp, or email by our team and authorized real estate or developer marketing partners.'
  },
  {
    title: 'Data Sharing',
    body: 'We do not sell your data publicly. Information may be shared only with authorized project sales or marketing partners who support this website and the associated development.'
  },
  {
    title: 'Voluntary Submission',
    body: 'Submitting information on this website is entirely voluntary. You may choose how much information you wish to provide when requesting project details.'
  }
];

export default function PrivacyPolicy() {
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
            <p className="text-sm uppercase tracking-[0.32em] text-[#7d7267]">Privacy Policy</p>
            <h1 className="text-3xl sm:text-4xl font-serif text-[#1f1b18] tracking-tight">Privacy, Data & Trust</h1>
            <p className="text-base leading-relaxed text-[#5b5144]">
              This policy explains how visitor information is handled when you enquire about Nambiar District 25.
            </p>
          </div>

          <div className="space-y-6">
            {sections.map((section) => (
              <section key={section.title} className="space-y-3 rounded-[24px] border border-[#ece3d4] bg-[#fcfaf7] p-5 md:p-6">
                <h2 className="text-xl md:text-2xl font-serif text-[#1d1b19]">{section.title}</h2>
                <p className="text-[#5b5144] leading-relaxed">{section.body}</p>
              </section>
            ))}
          </div>

          <div className="mt-8 rounded-[22px] border border-[#e4dbca] bg-[#f8f3eb] px-5 py-4 text-sm leading-relaxed text-[#7d7267]">
            This page is provided for information and transparency. If you have questions about data handling, please use the enquiry form or contact details available on the website.
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
