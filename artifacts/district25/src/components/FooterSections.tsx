import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowUp } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export function BookVisit() {
  return (
    <section id="contact" className="py-24 bg-[#050505] relative border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-black to-black pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">BEGIN YOUR SOHO LIFE</h2>
            <p className="text-white/60 text-base max-w-2xl mx-auto">Phase 2 is now launching. Register your interest for priority access and exclusive preview pricing.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-black/50 backdrop-blur-xl border border-white/10 p-6 md:p-10 mb-10 shadow-2xl"
          >
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-white/40 text-xs tracking-widest uppercase">Full Name</label>
                <input type="text" className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-primary transition-colors text-base" />
              </div>
              <div className="space-y-2">
                <label className="text-white/40 text-xs tracking-widest uppercase">Phone Number</label>
                <input type="tel" className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-primary transition-colors text-base" />
              </div>
              <div className="space-y-2">
                <label className="text-white/40 text-xs tracking-widest uppercase">Email Address</label>
                <input type="email" className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-primary transition-colors text-base" />
              </div>
              <div className="space-y-2">
                <label className="text-white/40 text-xs tracking-widest uppercase">Preferred Unit</label>
                <select className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-primary transition-colors text-base appearance-none">
                  <option value="3bhk" className="bg-black">3 BHK Ultra Luxury</option>
                  <option value="4bhk" className="bg-black">4 BHK Sky Villa</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-white/40 text-xs tracking-widest uppercase">Message (Optional)</label>
                <textarea rows={2} className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-primary transition-colors text-base resize-none"></textarea>
              </div>
              
              <div className="md:col-span-2 mt-4">
                <button className="w-full bg-primary text-black py-3 uppercase tracking-[0.2em] font-medium hover:bg-white transition-colors duration-500">
                  Submit Inquiry
                </button>
              </div>
            </form>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <a href="tel:+917026034444" className="flex items-center justify-center gap-3 bg-white/[0.02] border border-white/10 p-5 hover:border-primary/50 transition-colors text-white group">
              <Phone className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
              <span className="tracking-wider">+91 702 603 4444</span>
            </a>
            <a href="mailto:inquiry@nambiardistrict25.com" className="flex items-center justify-center gap-3 bg-white/[0.02] border border-white/10 p-5 hover:border-primary/50 transition-colors text-white group">
              <span className="tracking-wider text-sm truncate">inquiry@nambiardistrict25.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-serif text-white tracking-widest mb-5">
              NAMBIAR <span className="text-primary opacity-70 px-1">|</span> DISTRICT 25
            </h2>
            <p className="text-white/50 text-sm leading-relaxed max-w-md mb-8">
              Bengaluru's finest integrated township bringing the SOHO life to the Garden City. Phase 2 now launching with ultra-luxury skyrise apartments and a 7-acre clubhouse.
            </p>
            <div className="text-white/40 text-xs space-y-2 border-l border-primary/30 pl-4">
              <p><strong className="text-white/60">Site:</strong> Chandapura Dommasandra Road, Dommasandra, Bengaluru - 562 125</p>
              <p><strong className="text-white/60">HQ:</strong> 2nd Floor, PR Business Centre, Outer Ring Road, Bengaluru - 560 103</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-serif text-base mb-6">Quick Links</h4>
            <ul className="space-y-4 text-white/50 text-sm uppercase tracking-wider">
              <li><a href="#overview" className="hover:text-primary transition-colors">Overview</a></li>
              <li><a href="#amenities" className="hover:text-primary transition-colors">Amenities</a></li>
              <li><a href="#floorplans" className="hover:text-primary transition-colors">Floor Plans</a></li>
              <li><a href="#location" className="hover:text-primary transition-colors">Location</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif text-base mb-6">Legal</h4>
            <div className="bg-white/5 p-4 border border-white/10">
              <p className="text-white/60 text-xs mb-2 uppercase tracking-wider">RERA Registration</p>
              <p className="text-primary font-mono text-xs">PRM/KA/RERA/1251/308/PR/200825/008011</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs text-center md:text-left">
            &copy; 2025 Nambiar Builders. All rights reserved. <br className="md:hidden"/> Disclaimer: Images are artistic impressions.
          </p>
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:bg-primary hover:text-black hover:border-primary transition-all"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}

export function FloatingElements() {
  const [scrollProgress, setScrollProgress] = useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = windowHeight > 0 ? totalScroll / windowHeight : 0;
      const clampedProgress = Math.min(Math.max(progress, 0), 1);
      setScrollProgress(clampedProgress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-[2px] z-[100] bg-white/10">
        <div 
          className="h-full bg-primary"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Floating CTA Right */}
      <div className="fixed bottom-6 right-5 z-50 hidden md:flex flex-col items-end gap-3">
        <button 
          onClick={() => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="relative group flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-primary/40 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300 animate-pulse"></div>
          <div className="bg-primary text-black px-5 py-2.5 rounded-none font-medium tracking-widest uppercase text-[0.7rem] border border-yellow-300 shadow-[0_0_20px_rgba(201,169,110,0.4)] relative z-10 hover:bg-white hover:border-white transition-colors duration-300">
            Submit Inquiry
          </div>
        </button>
      </div>
    </>
  );
}
