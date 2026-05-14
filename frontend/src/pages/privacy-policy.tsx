import React from 'react';
import { Link } from 'wouter';

import { Footer } from '@/components/FooterSections';
import RealEstateDisclaimer from '@/components/RealEstateDisclaimer';
import PremiumDarkDisclaimer from '@/components/PremiumDarkDisclaimer';

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

          {/* PRIVACY POLICY CONTENT PLACEHOLDER */}
          <div className="mb-8 rounded-2xl border border-[#ece3d4] bg-[#fcfaf7] p-5 md:p-6">
            <h2 className="text-sm uppercase tracking-[0.2em] text-[#7d7267] mb-3">PRIVACY POLICY CONTENT PLACEHOLDER</h2>
            <div className="text-sm text-[#5b5144] leading-relaxed whitespace-pre-wrap">
{`Home
Privacy Policy

Thank you for visiting Nambiar District 25 Website and reviewing our privacy policy. The policy is simple: We collect no personal information about you unless you choose to provide that information to us. We strictly do not share, give, transfer or sell any of your personal information to any third party.

In case, if you want to know about how we record non-personal information when you visit our site or how we use the information that you voluntarily submit, read further:

Non-Personal Information that we Record
On visiting our website, if you just browse through read or download information, our site's operating system will automatically record some general information about your visit.

During your visit, the web operating system will record:
The Internet domain for your internet service, such as “xyz.net” or “xyz.com” if you are using private internet access account or if you connect from college or university domain.
The type of browser (such as “Internet explorer version x” or “netscape version x”) that you are using.
The operating system that you are currently using (such as Windows, Unix, or Macintosh)
The time and date that you visit our site, and the webpages that you visit on our site.
The address of the previous website you were visiting, in case you linked us from another website.
This purpose of recording this information is for statistical analysis, to help make our site more useful to visitors. Individual information is not recorded by this tracking system.

Cookies
We use "cookies" on certain Nambiar District 25 pages to help you use our website interactively. If you are wondering what is a cookie?. It is a small file that a website transfers to your computer’s hard disk, usually to keep track of you while you are connected to that site.

Cookies of Nambiar District 25 web pages do not collect information about you, but just the "browser" session. The webpages dynamic features becomes easier for you to use because of the cookie, it prevents the cycle of having to provide the same information again as you browse from one page to another.

Remember in order to protect your privacy, be sure to close your browser entirely after you have finished conducting your business with a website that uses cookies. In case you are concerned about the potential misuse of information gathered by cookies placed in your system, set your browser to prompt you before it accepts a cookie. Almost all internet browsers have settings that help you identify cookies.

When you send us an email, the message usually contains your return email address. Email is not necessarily secure against interception. If you include personally – identifying information in your email because you want to address issues specific to your situation, we may use that information in responding to your request. It is important you send only information necessary to help us process your request.

Information collected from Interactive Forms
Some of our web pages have interactive forms that allow you to voluntarily submit personal information (such as your e-mail address, name, or organization). In those cases, all submitted information is used only for the purposes for which it is intended and is not made available to any third party.

When you voluntarily send us electronic mail, we will keep a record of this information so that we can respond to you. We only collect information from you when you register on our site or fill out a form. Also, when filling out a form on our site, you may be asked to enter your: name, e-mail address or phone number. You may, however, visit our site anonymously. In case you have submitted your personal information and contact details, we reserve the rights to Call, SMS, Email or WhatsApp about our products and offers, even if your number has DND activated on it.

Links to Other Sites
Our policy mentioned above discloses the privacy practices for Nambiar District 25 website. However, Nambiar District 25 provides links to other websites. When you leave Nambiar District 25 website, you will be going to sites that are beyond our control. These websites may send their own cookies to users, collect data or solicit personal information. The privacy policies and procedures described here for Nambiar District 25 do not apply to any other external links. It is advisable to read the privacy policies of any site you link from ours, especially where you share any personal information. Be informed. The best person qualified for your privacy is you.`}
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
            For questions about privacy or data handling at Nambiar District 25, please submit an enquiry through the website so the team can respond through the official project communication channel.
          </div>
        </div>
      </main>

      <RealEstateDisclaimer />
      <PremiumDarkDisclaimer />
      <Footer />
    </div>
  );
}