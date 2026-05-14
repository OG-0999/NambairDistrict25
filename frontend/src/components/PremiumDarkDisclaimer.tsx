import React from 'react';
import { motion } from 'framer-motion';

const PremiumDarkDisclaimer: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-10"
    >
      <div className="mx-auto max-w-4xl">
        <div className="rounded-xl border border-[#3b3f3d]/30 bg-gradient-to-b from-[#0f1a18] to-[#07100f] shadow-[0_20px_50px_rgba(3,7,6,0.5)] p-6 sm:p-8">
          <div className="border-l-2 border-[#c6a66a] pl-4">
            <h4 className="text-sm font-serif text-[#f5f5f2] mb-2">DISCLAIMER</h4>
            <p className="text-xs text-[#e9e7e3] leading-relaxed mb-2">
              This website is intended solely for informational and promotional purposes. All images, renders, pricing, dimensions, specifications, amenities, floor plans, and visual representations are artistic impressions and subject to change without prior notice.
            </p>
            <p className="text-xs text-[#e9e7e3] leading-relaxed mb-2">
              By submitting your information through this website, you consent to being contacted by authorized representatives via call, SMS, WhatsApp, or email regarding project-related updates and offers.
            </p>
            <p className="text-xs text-[#e9e7e3] leading-relaxed">
              Please verify all project details, pricing, availability, approvals, and specifications directly with the official sales team before making any purchase decision.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default PremiumDarkDisclaimer;
