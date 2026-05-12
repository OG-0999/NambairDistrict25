// Temporary placeholder to satisfy import in home.tsx
export function Navigation() {
  return null;
}
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';

const BROCHURE_URL = encodeURI('/brochure/NBR District 25 mini face.pdf');

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#e7dfd2]"
        >
          <div className="text-3xl font-serif tracking-[0.2em] text-[#1f1b18]">NAMBIAR DISTRICT 25</div>
        </motion.div>
      )}

    </AnimatePresence>
  );
}


export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative flex min-h-[92vh] w-full items-center justify-center overflow-hidden bg-[#1f1b18]">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.png"
          alt="Nambiar District 25 Hero"
          className="motion-safe:animate-[pulse_24s_ease-in-out_infinite_alternate] h-full w-full scale-[1.02] object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.15),rgba(0,0,0,0.25))]"></div>
      </div>

      <div className="relative z-10 container mx-auto grid grid-cols-1 items-center gap-6 px-4 pt-14 sm:px-6 sm:pt-16 lg:grid-cols-12">
        <div className="lg:col-span-8 flex flex-col items-start text-left w-full max-w-2xl sm:max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.8 }}
            className="mb-6 flex min-w-0 flex-wrap items-center gap-4"
          >
            <div className="h-px w-12 bg-[#f1ece4]/85"></div>
            <span className="max-w-full text-xs font-medium uppercase tracking-[0.28em] text-[#f1ece4]">
              Bengaluru&apos;s Finest Integrated Township
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3 }}
            className="mb-4 text-3xl leading-[1.08] font-semibold font-serif tracking-[0.01em] text-[#f8f4ee] sm:text-4xl md:text-6xl lg:text-7xl drop-shadow-[0_2px_8px_rgba(31,27,24,0.13)]"
          >
            THE SOHO LIFE <br className="hidden sm:inline" />
            <span className="pr-4 font-serif italic text-[#ffffff]">
              RETURNS
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3.2 }}
            className="mb-7 text-lg font-serif tracking-[0.13em] text-[#f1ece4] sm:text-2xl md:text-3xl drop-shadow-[0_1px_4px_rgba(31,27,24,0.10)]"
          >
            PHASE 2 NOW LAUNCHING
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3.4 }}
            className="flex flex-col flex-wrap gap-4 sm:flex-row"
          >
            <button
              onClick={() => scrollToSection('contact')}
              className="border border-[#f1ece4]/55 bg-[#f8f4ee] px-8 py-3 text-sm font-medium uppercase tracking-widest text-[#1f1b18] transition-all duration-500 hover:bg-[#ffffff] hover:shadow-[0_12px_30px_rgba(0,0,0,0.24)]"
            >
              Submit Inquiry
            </button>
            <button
              onClick={() => scrollToSection('floorplans')}
              className="border border-[#f1ece4]/45 bg-[#1f1b18]/28 px-8 py-3 text-sm font-medium uppercase tracking-widest text-[#f1ece4] backdrop-blur-sm transition-all duration-500 hover:border-[#ffffff]/70 hover:bg-[#1f1b18]/38 hover:text-[#ffffff]"
            >
              View Floor Plans
            </button>
            <a
              href={BROCHURE_URL}
              download="NBR District 25 mini face.pdf"
              className="inline-flex items-center gap-2 border border-[#f1ece4]/45 bg-[#3b342d] px-8 py-3 text-sm font-medium uppercase tracking-widest text-[#f8f4ee] transition-all duration-500 hover:-translate-y-0.5 hover:bg-[#2a2522] hover:shadow-[0_12px_30px_rgba(0,0,0,0.3)]"
            >
              <Download size={14} />
              Download Brochure
            </a>
          </motion.div>
        </div> {/* Close .lg:col-span-8 */}
      </div> {/* Close grid container */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <span className="mb-3 text-[0.7rem] uppercase tracking-widest text-[#f1ece4]/78">Scroll to explore</span>
        <div className="relative h-14 w-px overflow-hidden bg-[#f1ece4]/35">
          <motion.div
            animate={{ y: [0, 64] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
            className="absolute left-0 top-0 h-1/2 w-full bg-[#f8f4ee]"
          />
        </div>
      </div>
    </section>
  );
}
