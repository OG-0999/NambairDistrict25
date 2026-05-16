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
      className="w-full bg-[#050505]"
    >
      <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] leading-relaxed text-[#e8e8e8] sm:text-xs">
          <span>
            Disclaimer: This website is for informational purposes only. Prices are subject to change without notice. Images are for representational purposes only. T&amp;C Apply.
          </span>
          <Link href="/disclaimer" className="font-semibold text-[#f4f4f4] underline underline-offset-2 hover:text-white">
            Read More
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default RealEstateDisclaimer;
