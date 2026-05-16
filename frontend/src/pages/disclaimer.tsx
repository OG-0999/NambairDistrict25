import React, { useEffect } from 'react';
import { Link } from 'wouter';

import { Footer } from '@/components/FooterSections';
import RealEstateDisclaimer from '@/components/RealEstateDisclaimer';

export default function DisclaimerPage() {
  useEffect(() => {
    window.scrollTo(0, 0);

    const hash = window.location.hash;
    if (!hash) {
      return;
    }

    const target = document.querySelector(hash);
    if (!target) {
      return;
    }

    requestAnimationFrame(() => {
      (target as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, []);

  const handleAnchorClick = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    window.history.replaceState(null, '', `#${id}`);

    window.scrollTo(0, 0);
    const target = document.getElementById(id);
    if (!target) {
      return;
    }

    requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  return (
    <div className="min-h-screen w-full bg-[#070707] text-[#efefef] selection:bg-primary selection:text-white">
      <main className="container mx-auto px-4 sm:px-6 py-14 md:py-18">
        <div className="mx-auto max-w-5xl">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 transition-colors hover:border-white/30 hover:bg-white/10"
            >
              <span aria-hidden="true">←</span>
              <span>Back to Home</span>
            </Link>

            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.22em] text-white/70">
              <a href="#privacy-policy" onClick={(event) => handleAnchorClick(event, 'privacy-policy')} className="hover:text-white">Privacy Policy</a>
              <span className="text-white/30">•</span>
              <a href="#terms-and-conditions" onClick={(event) => handleAnchorClick(event, 'terms-and-conditions')} className="hover:text-white">Terms &amp; Conditions</a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/3 p-6 sm:p-8 md:p-10 shadow-[0_18px_50px_rgba(0,0,0,0.4)]">
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-serif text-white">Disclaimer</h1>
            </header>

            <section className="space-y-5 text-sm leading-relaxed text-white/86">
              <p>
                This website is only for the purpose of providing information regarding real estate projects in different regions. By accessing this website, the viewer confirms that the information including brochures and marketing collaterals on this website is solely for informational purposes and the viewer has not relied on this information for making any booking/purchase in any project of the company. Nothing on this website constitutes advertising, marketing, booking, selling or an offer for sale, or invitation to purchase a unit in any project by the company. The company is not liable for any consequence of any action taken by the viewer relying on such material/information on this website.
              </p>
              <p>
                Please also note that the company has not verified the information and the compliances of the projects. Further, the company has not checked the RERA (Real Estate Regulation Act 2016) registration status of the real estate projects listed herein. The company does not make any representation in regards to the compliances done against these projects. You should make yourself aware about the RERA registration status of the listed real estate projects before purchasing property.
              </p>
            </section>

            <section className="space-y-5 text-sm leading-relaxed text-white/86">
              <p>
                This website is only for the purpose of providing information regarding real estate projects in different regions. By accessing this website, the viewer confirms that the information including brochures and marketing collaterals on this website is solely for informational purposes and the viewer has not relied on this information for making any booking/purchase in any project of the company. Nothing on this website constitutes advertising, marketing, booking, selling or an offer for sale, or invitation to purchase a unit in any project by the company. The company is not liable for any consequence of any action taken by the viewer relying on such material/information on this website.
              </p>
              <p>
                Please also note that the company has not verified the information and the compliances of the projects. Further, the company has not checked the RERA (Real Estate Regulation Act 2016) registration status of the real estate projects listed herein. The company does not make any representation in regards to the compliances done against these projects. You should make yourself aware about the RERA registration status of the listed real estate projects before purchasing property.
              </p>
            </section>

            <section id="privacy-policy" className="mt-10 space-y-5">
              <h2 className="text-2xl font-serif text-white">Privacy Policy</h2>
              <h3 className="text-base font-semibold text-white">In our endeavor and commitment of protecting your personal information, we have designed this comprehensive privacy policy. This is to keep your interests and information safe on our website.</h3>

              <div className="space-y-5 text-sm leading-relaxed text-white/86">
                <div>
                  <h4 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-white/75">Updation of privacy policy</h4>
                  <p>
                    This privacy policy is subject to undergo change and review without any prior notice or approval. So to keep yourself updated on the changes introduced, please keep visiting and reviewing the terms and conditions of this privacy policy.
                  </p>
                </div>

                <div>
                  <h4 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-white/75">User information</h4>
                  <p>
                    By using our website, you agree to abide by the rules laid out by us and consent to collection and use of all such information that you may furnish to, or through, our website. In some cases, while you visit our website, you may not need to provide any personal information. But in certain instances, we must have your personal information in order for us to grant you access to some of the links or sites. Such links/pages may ask for your name, e-mail address, phone number etc. The information furnished by you is used to provide relevant products and services and to acknowledge receipt of your communication or to send out information and updates to you. You have option of requesting removal from our mailing list. We do not give away your personal information to any third party.
                  </p>
                </div>

                <div>
                  <h4 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-white/75">Security</h4>
                  <p>
                    To ensure security while transferring sensitive information, all the ongoing transmissions between client and server are encrypted using advanced and standard protocols. We also practice restricted access by employees and hold them to high levels of confidentiality.
                  </p>
                </div>

                <div>
                  <h4 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-white/75">Use of cookies</h4>
                  <p>
                    We may use cookies for security, session continuity, and customization purposes. In case of a user opting to reject a cookie, he/she may not be able to gain access to some of the limited services or use some features of the site. In case of any queries or suggestions regarding privacy statement or your dealings with this website, please contact us via Contact Us section.
                  </p>
                </div>
              </div>
            </section>

            <section id="terms-and-conditions" className="mt-10 space-y-4">
              <h2 className="text-2xl font-serif text-white">Terms &amp; Conditions</h2>
              <p className="text-sm leading-relaxed text-white/86">
                By accessing and using this website, the viewer acknowledges that all project-related material is informational in nature, prices and project details are subject to change, and independent verification should be completed before any purchase decision. T&amp;C Apply.
              </p>
            </section>
          </div>
        </div>
      </main>

      <RealEstateDisclaimer />
      <Footer />
    </div>
  );
}
