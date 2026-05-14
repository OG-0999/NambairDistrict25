import { motion } from 'framer-motion';
import { Link } from 'wouter';

const RealEstateDisclaimer = () => {
  const variants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  };

  return (
    <motion.section
      id="site-disclaimer"
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="w-full px-4 sm:px-6 lg:px-8 py-10 bg-[#f6f1ea]"
    >
      <div className="mx-auto max-w-5xl">
        <div className="rounded-xl border border-[#e4dbca] bg-white/90 shadow-[0_18px_48px_rgba(17,17,17,0.06)] p-6 sm:p-8 lg:p-10">
          <div className="flex items-start justify-between gap-6">
            <div className="flex-1">
              <h3 className="font-serif text-xl sm:text-2xl text-[#1f1b18] font-semibold mb-3">Disclaimer</h3>
              <div className="prose prose-sm sm:prose-base text-[#44403b] max-w-none">
                <p>
                  We are an authorized channel partner with many developers. The content provided on this website is for information purposes only and does not constitute an offer to avail any service. The prices mentioned are subject to change without prior notice, and the availability of properties mentioned is not guaranteed.
                </p>
                <p>
                  The images displayed on the website are for representation purposes only and may not reflect the actual properties accurately. Please note that this is the official website of an authorized marketing partner. We may share data with Real Estate Regulatory Authority (RERA) registered brokers/companies for further processing as required. We may also send updates and information to the mobile number or email ID registered with us.
                </p>
                <p>
                  All rights reserved. The content, design, and information on this website are protected by copyright and other intellectual property rights. Any unauthorized use or reproduction of the content may violate applicable laws. For accurate and up-to-date information regarding services, pricing, availability, and any other details, it is advisable to contact us directly through the provided contact information on this website.
                </p>
              </div>
            </div>

            <div className="hidden sm:flex sm:shrink-0 sm:flex-col sm:items-end sm:justify-start">
              <div className="text-sm text-[#7d7267] mb-2">Quick Links</div>
              <div className="flex flex-col items-end gap-2">
                <Link href="/privacy-policy" className="text-[#0066cc] hover:underline">Privacy Policy</Link>
                <Link href="/terms-and-conditions" className="text-[#0066cc] hover:underline">Terms &amp; Conditions</Link>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#efe7d8]">
            <div className="flex flex-wrap gap-3 text-xs text-[#6b6259]">
              <span className="inline-flex items-center gap-2">• Terms &amp; Conditions Apply</span>
              <span className="inline-flex items-center gap-2">• Prices Subject To Change</span>
              <span className="inline-flex items-center gap-2">• Artist Impressions Used</span>
              <span className="inline-flex items-center gap-2">• Inventory Subject To Availability</span>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default RealEstateDisclaimer;
