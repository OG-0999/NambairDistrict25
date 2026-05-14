import React from 'react';
import { Link } from 'wouter';

import { Footer } from '@/components/FooterSections';

const sections = [
  {
    title: 'Information We Collect',
    body: 'When you submit an enquiry for Nambiar District 25, we may collect your name, phone number, email address, preferred unit type, and message content that you choose to share. We only collect information that is reasonably needed to respond to your request.'
  },
  {
    title: 'Inquiry Submission Consent',
    body: 'By submitting an enquiry, you confirm that the details provided are voluntary and that you authorize Nambiar District 25 representatives to review your request for follow-up and project communication.'
  },
  {
    title: 'Phone, Email & Messaging Consent',
    body: 'You consent to being contacted by call, SMS, WhatsApp, or email regarding project updates, brochures, pricing, availability, and site visit coordination. This may be done by the project team or its authorized representatives.'
  },
  {
    title: 'Marketing Communication',
    body: 'Your contact information may be used for project-related marketing communication connected to Nambiar District 25, including launch updates, pricing changes, and availability alerts, where legally permitted.'
  },
  {
    title: 'Developer Partnership Disclaimer',
    body: 'This website may operate with authorized developer or sales partners who help process enquiries and distribute project information. No unrelated third party is authorized to use your information for unrelated purposes.'
  },
  {
    title: 'Cookies & Basic Analytics',
    body: 'We may use cookies or basic analytics tools to understand website usage, improve content performance, and maintain a smoother experience. These tools do not give us access to your personal device beyond standard site analytics and functionality.'
  },
  {
    title: 'Third-Party Integrations',
    body: 'Certain features, such as maps, form handling, or messaging tools, may depend on trusted third-party services. Their use is limited to the purpose of supporting the website and project enquiry experience.'
  },
  {
    title: 'Data Protection',
    body: 'We take reasonable technical and organizational measures to protect enquiry data from unauthorized access, misuse, or disclosure. However, no online transmission method is completely secure, and you acknowledge this risk when submitting information.'
  },
  {
    title: 'Policy Updates',
    body: 'This privacy policy may be revised from time to time to reflect operational, legal, or project-related updates. The latest version published on this page will always govern how enquiry data is handled.'
  }
];

export default function PrivacyPolicy() {
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
            <p className="text-sm uppercase tracking-[0.32em] text-[#7d7267]">Privacy Policy</p>
            <h1 className="text-3xl sm:text-4xl font-serif text-[#1f1b18] tracking-tight">Privacy, Data & Trust</h1>
            <p className="text-base leading-relaxed text-[#5b5144]">
              This page explains how enquiry data is collected, used, and protected when you interact with Nambiar District 25.
            </p>
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
            For questions about privacy or data handling at Nambiar District 25, please submit an enquiry through the website so the team can respond through the official project communication channel.
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}