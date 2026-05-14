import { motion } from 'framer-motion';
import { Link } from 'wouter';

const RealEstateDisclaimer = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#f6f1ea]/30 to-transparent"
    >
      <div className="mx-auto max-w-4xl">
        {/* Main disclaimer card */}
        <div className="relative rounded-2xl border border-[#d7c79a]/40 bg-white/60 backdrop-blur-sm px-6 sm:px-8 lg:px-10 py-8 sm:py-10 lg:py-12 shadow-sm hover:shadow-md transition-shadow duration-300">
          {/* Gold accent top border */}
          <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-[#c6a66a] to-transparent rounded-full" />

          {/* Disclaimer heading */}
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0d1b16] mb-6 sm:mb-8 tracking-tight">
            Disclaimer
          </h2>

          {/* Main disclaimer text */}
          <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
            <p className="text-sm sm:text-base leading-relaxed text-[#1a1a1a]/85 font-light">
              The information provided on this website is for general informational and marketing purposes only and does not constitute an offer, invitation to offer, or legal commitment of any nature. All project details including pricing, floor plans, specifications, amenities, images, dimensions, and availability are{' '}
              <span className="font-semibold text-[#0d1b16]">subject to change without prior notice</span> at the sole discretion of the developer.
            </p>

            <p className="text-sm sm:text-base leading-relaxed text-[#1a1a1a]/85 font-light">
              Images, renders, visuals, and illustrations are{' '}
              <span className="font-semibold text-[#0d1b16]">artistic impressions</span> intended for presentation purposes only. Actual construction, layouts, materials, and specifications may vary.
            </p>

            <p className="text-sm sm:text-base leading-relaxed text-[#1a1a1a]/85 font-light">
              By submitting your details through this website, you consent to being contacted by authorized representatives regarding the project through call, SMS, WhatsApp, or email communication.
            </p>

            <p className="text-sm sm:text-base leading-relaxed text-[#1a1a1a]/85 font-light">
              This website is an independent marketing platform associated with the project and is not intended to replace official documentation provided by the developer. Please verify all information directly with the authorized sales team before making any purchasing decisions.
            </p>
          </div>

          {/* Policy links section */}
          <div className="mb-8 sm:mb-10 pb-8 sm:pb-10 border-b border-[#d7c79a]/20">
            <p className="text-xs sm:text-sm text-[#1a1a1a]/70 mb-3 font-light">
              For more details, please review our:
            </p>
            <div className="flex flex-wrap gap-4 sm:gap-6">
              <Link
                href="/privacy-policy"
                className="text-[#0066cc] hover:text-[#004499] hover:underline text-sm sm:text-base font-medium transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <span className="text-[#d7c79a]/40">•</span>
              <Link
                href="/terms-and-conditions"
                className="text-[#0066cc] hover:text-[#004499] hover:underline text-sm sm:text-base font-medium transition-colors duration-200"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>

          {/* RERA / Legal notes footer */}
          <div className="space-y-2">
            <p className="text-xs sm:text-sm text-[#1a1a1a]/70 font-light mb-3">
              Notice
            </p>
            <div className="flex flex-col gap-2 text-xs sm:text-sm text-[#1a1a1a]/75">
              <div className="flex items-start gap-2">
                <span className="text-[#c6a66a] font-bold mt-0.5">•</span>
                <span className="font-light">Terms & Conditions Apply</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#c6a66a] font-bold mt-0.5">•</span>
                <span className="font-light">Prices Subject To Change</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#c6a66a] font-bold mt-0.5">•</span>
                <span className="font-light">Artist Impressions Used for Representation</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#c6a66a] font-bold mt-0.5">•</span>
                <span className="font-light">Inventory Subject To Availability</span>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle bottom accent */}
        <div className="mt-6 h-0.5 w-12 mx-auto bg-gradient-to-r from-[#c6a66a] to-[#d7c79a]/30 rounded-full" />
      </div>
    </motion.section>
  );
};

export default RealEstateDisclaimer;
