import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

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
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
        >
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "160px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="h-[1px] bg-primary mb-8"
          />
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-3xl md:text-5xl font-serif text-white tracking-[0.2em]"
          >
            DISTRICT <span className="text-primary">25</span>
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 2.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-3 border-b border-white/5' : 'bg-transparent py-5'}`}
    >
      <div className="container mx-auto px-6 flex min-w-0 items-center justify-between gap-4">
        <div className="text-lg sm:text-2xl font-serif text-white tracking-[0.2em] cursor-pointer leading-tight max-w-[70%] whitespace-normal" onClick={() => scrollTo('hero')}>
          NAMBIAR <span className="text-primary text-base sm:text-lg opacity-70 px-2">|</span> DISTRICT 25
        </div>

        <div className="hidden md:flex items-center space-x-8 text-xs tracking-widest text-white/80 uppercase">
          <button onClick={() => scrollTo('overview')} className="hover:text-primary transition-colors">Overview</button>
          <button onClick={() => scrollTo('amenities')} className="hover:text-primary transition-colors">Amenities</button>
          <button onClick={() => scrollTo('floorplans')} className="hover:text-primary transition-colors">Floor Plans</button>
          <button onClick={() => scrollTo('location')} className="hover:text-primary transition-colors">Location</button>
          <button onClick={() => scrollTo('contact')} className="hover:text-primary transition-colors">Contact</button>
        </div>

        <div className="hidden md:block">
          <button onClick={() => scrollTo('contact')} className="bg-primary/10 border border-primary/30 text-primary px-6 py-2 rounded-none hover:bg-primary hover:text-black transition-all duration-300 uppercase text-xs tracking-widest">
            Submit Inquiry
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col items-center py-8 space-y-6 text-white/80 tracking-widest uppercase text-sm">
              <button onClick={() => scrollTo('overview')}>Overview</button>
              <button onClick={() => scrollTo('amenities')}>Amenities</button>
              <button onClick={() => scrollTo('floorplans')}>Floor Plans</button>
              <button onClick={() => scrollTo('location')}>Location</button>
              <button onClick={() => scrollTo('contact')} className="text-primary mt-4">Submit Inquiry</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[92vh] w-full flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero.png" 
          alt="Nambiar District 25 Hero" 
          className="w-full h-full object-cover opacity-50 scale-105 motion-safe:animate-[pulse_20s_ease-in-out_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pt-16">
        <div className="lg:col-span-12 flex flex-col items-start text-left">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.8 }}
            className="flex flex-wrap items-center gap-4 mb-6 min-w-0"
          >
            <div className="h-[1px] w-12 bg-primary"></div>
            <span className="text-primary tracking-[0.3em] uppercase text-xs font-medium max-w-full">
              Bengaluru's Finest Integrated Township
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-4"
          >
            THE SOHO LIFE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-200 to-primary italic pr-4">RETURNS</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3.2 }}
            className="text-2xl md:text-3xl text-white/80 font-serif mb-8 tracking-widest"
          >
            PHASE 2 NOW LAUNCHING
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-primary text-black px-8 py-3 font-medium tracking-widest uppercase text-sm hover:bg-white transition-colors duration-500"
            >
              Submit Inquiry
            </button>
            <button
              onClick={() => scrollToSection('floorplans')}
              className="border border-white/30 text-white px-8 py-3 font-medium tracking-widest uppercase text-sm hover:bg-white/10 transition-colors duration-500"
            >
              View Floor Plans
            </button>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-white/40 uppercase tracking-widest text-[0.7rem] mb-3">Scroll to explore</span>
        <div className="w-[1px] h-14 bg-white/20 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 64] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}
