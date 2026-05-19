import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

import { openLeadPopup } from '@/components/LeadForms';

// Placeholder export to satisfy imports in home.tsx
export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpenLeadPopup = () => {
    openLeadPopup();
  };

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Amenities', href: '#amenities' },
    { label: 'Location', href: '#location' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#d8cab8]/30 bg-[#f6f1ea]/75 backdrop-blur-md transition-all duration-300">
      <div className="container mx-auto grid h-20 grid-cols-[auto_1fr_auto] items-center gap-4 px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="rounded-full border border-[#bfa876]/30 bg-[#fff7ec] px-4 py-2 text-sm font-semibold tracking-[0.28em] text-[#4f4433] shadow-[0_6px_18px_rgba(0,0,0,0.06)]">
            ND25
          </div>
          <span className="hidden sm:inline text-sm font-medium uppercase tracking-[0.28em] text-[#6f5f49]">
            Nambiar District 25
          </span>
        </div>

        <nav className="hidden lg:flex items-center justify-center gap-8">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-sm font-medium text-[#5b5042] transition-colors duration-300 hover:text-[#1f1b18] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[#bfa876] after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={handleOpenLeadPopup}
            className="inline-flex items-center justify-center rounded-full border border-[rgba(198,166,106,0.4)] bg-[#111111] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.24em] text-[#f5f1e8] shadow-[0_12px_28px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(198,166,106,0.62)] hover:shadow-[0_14px_30px_rgba(0,0,0,0.24),0_0_24px_rgba(198,166,106,0.22)] sm:px-5 sm:py-3 sm:text-sm"
            aria-label="Enquire"
          >
            ENQUIRE
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#bfa876]/35 bg-[#fff6e8] text-[#4f4433] shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:bg-[#f6ead8] lg:hidden"
            aria-label="Open menu"
          >
            <Menu size={18} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/25 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              className="absolute right-0 top-0 h-full w-full max-w-xs bg-[#f7efe4] px-6 py-8 shadow-[0_30px_80px_rgba(0,0,0,0.18)]"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.32em] text-[#7b6650]">Menu</p>
                  <p className="text-lg font-semibold text-[#1f1b18]">Explore</p>
                </div>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d8cab8]/40 bg-white text-[#4f4433] transition-all duration-300 hover:bg-[#f2ead5]"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              <nav className="space-y-5">
                {navLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-2xl border border-[#d8cab8]/30 bg-[#fff8ee] px-5 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#5b5042] transition-all duration-300 hover:border-[#bfa876]/40 hover:bg-[#f6ead8]"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="mt-8 space-y-4">
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-full bg-[#e8d6b3] px-5 py-3 text-center text-sm font-semibold uppercase tracking-[0.24em] text-[#3f3425] transition-all duration-300 hover:bg-[#d8c29b]"
                >
                  Enquire Now
                </a>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-2xl border border-[#d8cab8]/30 bg-[#fffdf7] px-5 py-3 text-center text-sm font-medium text-[#5b5042] transition-all duration-300 hover:bg-[#f7efe4]"
                >
                  Talk to us
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(max-width: 768px)');
    const setState = () => setIsMobile(query.matches);
    setState();
    query.addEventListener('change', setState);
    return () => query.removeEventListener('change', setState);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const animationProps = {
    initial: false,
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section id="hero" className="relative flex min-h-[92vh] w-full items-center justify-center overflow-hidden bg-[#0d1b16]">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.png"
          alt="Nambiar District 25 Hero"
          className="motion-safe:animate-[pulse_24s_ease-in-out_infinite_alternate] h-full w-full scale-[1.02] object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(13,27,22,0.18),rgba(13,27,22,0.3))]"></div>
      </div>

      <div className="relative z-10 container mx-auto grid grid-cols-1 items-center gap-6 px-4 pt-14 sm:px-6 sm:pt-16 lg:grid-cols-12">
        <div className="lg:col-span-8 flex flex-col items-start text-left w-full max-w-2xl sm:max-w-3xl">
          <motion.div
            {...animationProps}
            className="mb-6 flex min-w-0 flex-wrap items-center gap-4"
          >
            <div className="h-px w-12 bg-[#f1ece4]/85"></div>
            <span className="max-w-full text-xs font-medium uppercase tracking-[0.28em] text-[#f1ece4]">
              Bengaluru&apos;s Finest Integrated Township
            </span>
          </motion.div>

          <motion.h1
            {...animationProps}
            className="mb-4 text-3xl leading-[1.08] font-semibold font-serif tracking-[0.01em] text-[#f8f4ee] sm:text-4xl md:text-6xl lg:text-7xl drop-shadow-[0_2px_8px_rgba(31,27,24,0.13)]"
          >
            THE SOHO LIFE <br className="hidden sm:inline" />
            <span className="pr-4 font-serif italic text-[#ffffff]">
              RETURNS
            </span>
          </motion.h1>

          <motion.div
            {...animationProps}
            className="mb-7 inline-flex items-center rounded-full border border-[#e4dcc3] bg-[#f8f1dd]/90 px-5 py-3 text-sm text-[#2f261f] shadow-[0_18px_40px_rgba(255,255,255,0.45)] backdrop-blur-xl"
          >
            <span className="font-medium uppercase tracking-[0.3em]">Starting From</span>
            <span className="ml-3 font-serif text-base md:text-lg font-semibold">₹1.47 Cr*</span>
          </motion.div>

          <motion.h2
            {...animationProps}
            className="mb-7 text-lg font-serif tracking-[0.13em] text-[#f1ece4] sm:text-2xl md:text-3xl drop-shadow-[0_1px_4px_rgba(31,27,24,0.10)]"
          >
            PHASE 3 NOW LAUNCHING
          </motion.h2>

          <motion.div
            {...animationProps}
            className="flex flex-col flex-wrap gap-4 sm:flex-row"
          >
            <button
              onClick={() => scrollToSection('contact')}
              className="border border-[#f1ece4]/55 bg-[#f8f4ee] px-8 py-3 text-sm font-medium uppercase tracking-widest text-[#1f1b18] transition-all duration-500 hover:bg-[#ffffff] hover:shadow-[0_12px_30px_rgba(0,0,0,0.24)]"
            >
              Submit Inquiry
            </button>
            <button
              type="button"
              onClick={() => openLeadPopup('Download Brochure')}
              className="inline-flex items-center gap-2 border border-[#f1ece4]/45 bg-[#3b342d] px-8 py-3 text-sm font-medium uppercase tracking-widest text-[#f8f4ee] transition-all duration-500 hover:-translate-y-0.5 hover:bg-[#2a2522] hover:shadow-[0_12px_30px_rgba(0,0,0,0.3)]"
            >
              Download Brochure
            </button>
          </motion.div>
        </div> {/* Close .lg:col-span-8 */}
      </div> {/* Close grid container */}
    </section>
  );
}

export function HeroUSPStrip() {
  const items = [
    '7 Acre Clubhouse',
    'Premium SOHO Lifestyle',
    'Luxury Residences',
    'Prime Bengaluru Address',
    'Smart Investment Potential',
  ];

  return (
    <section id="hero-usps" className="bg-[#f5efe6] py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
          {items.map((item) => (
            <div key={item} className="rounded-[18px] border border-[#e4dbca] bg-[#fcfaf7] px-5 py-4 shadow-[0_14px_32px_rgba(17,17,17,0.06)]">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#e7dcc5] text-sm font-semibold text-[#6f5f4d]">•</span>
              <p className="mt-3 text-sm font-medium text-[#1f1b18] leading-tight">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
