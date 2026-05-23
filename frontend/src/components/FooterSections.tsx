import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { Link, useLocation } from 'wouter';
import { submitLead, normalizePhone, splitFullName, isValidIndianPhone, EMAIL_REGEX } from '@/lib/lead';
import { InquiryConsentBlock } from '@/components/LeadForms';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export function BookVisit() {
  const [, setLocation] = useLocation();
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [preferredUnit, setPreferredUnit] = useState('3bhk');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ fullName?: string; mobileNumber?: string; email?: string }>({});

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: typeof errors = {};
    const trimmedName = fullName.trim();
    const nameParts = trimmedName.split(/\s+/).filter(Boolean);

    if (!trimmedName) {
      nextErrors.fullName = 'Full name is required.';
    } else if (nameParts.length < 2) {
      nextErrors.fullName = 'Please enter first and last name.';
    }

    if (!mobileNumber.trim()) {
      nextErrors.mobileNumber = 'Phone number is required.';
    } else if (!isValidIndianPhone(mobileNumber)) {
      nextErrors.mobileNumber = 'Enter a valid Indian mobile number.';
    }

    if (!email.trim()) {
      nextErrors.email = 'Email address is required.';
    } else if (!EMAIL_REGEX.test(email.trim())) {
      nextErrors.email = 'Enter a valid email address.';
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    const { firstName, lastName } = splitFullName(fullName);

    submitLead({
      firstName,
      lastName,
      mobileNumber: normalizePhone(mobileNumber),
      email: email.trim().toLowerCase(),
      preferredUnit,
      message,
    });

    window.location.replace('/thank-you.html');
  };

  return (
    <section id="contact" className="py-24 bg-[#efe9df] relative border-t border-[#e4dbca] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-primary/10 via-[#fcfaf7] to-[#efe9df] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-serif text-[#1f1b18] mb-6">BEGIN YOUR SOHO LIFE</h2>
            <p className="text-[#4c4339] text-base max-w-2xl mx-auto">Phase 3 is now launching. Register your interest for priority access and exclusive preview pricing.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#fcfaf7]/88 backdrop-blur-xl border border-[#e4dbca] rounded-2xl p-6 md:p-10 mb-10 shadow-[0_24px_70px_rgba(17,17,17,0.12)]"
          >
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" noValidate onSubmit={handleSubmit}>
              <div className="space-y-2 min-w-0">
                <label htmlFor="visit-full-name" className="text-[#7d7267] text-xs tracking-widest uppercase">Full Name</label>
                <input
                  id="visit-full-name"
                  type="text"
                  value={fullName}
                  onChange={(event) => setFullName(event.target.value)}
                  placeholder="First and last name"
                  aria-invalid={Boolean(errors.fullName)}
                  aria-describedby={errors.fullName ? 'visit-full-name-error' : undefined}
                  className="w-full min-w-0 bg-transparent border-b border-[#e4dbca] pb-2 text-[#1f1b18] focus:outline-none focus:border-primary transition-colors text-base"
                />
                {errors.fullName ? <p id="visit-full-name-error" className="text-xs text-red-600">{errors.fullName}</p> : null}
              </div>

              <div className="space-y-2 min-w-0">
                <label htmlFor="visit-phone" className="text-[#7d7267] text-xs tracking-widest uppercase">Phone Number</label>
                <input
                  id="visit-phone"
                  type="tel"
                  value={mobileNumber}
                  onChange={(event) => setMobileNumber(event.target.value)}
                  placeholder="Enter your mobile number"
                  inputMode="numeric"
                  aria-invalid={Boolean(errors.mobileNumber)}
                  aria-describedby={errors.mobileNumber ? 'visit-phone-error' : undefined}
                  className="w-full min-w-0 bg-transparent border-b border-[#e4dbca] pb-2 text-[#1f1b18] focus:outline-none focus:border-primary transition-colors text-base"
                />
                {errors.mobileNumber ? <p id="visit-phone-error" className="text-xs text-red-600">{errors.mobileNumber}</p> : null}
              </div>

              <div className="space-y-2 min-w-0">
                <label htmlFor="visit-email" className="text-[#7d7267] text-xs tracking-widest uppercase">Email Address</label>
                <input
                  id="visit-email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter your email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'visit-email-error' : undefined}
                  className="w-full min-w-0 bg-transparent border-b border-[#e4dbca] pb-2 text-[#1f1b18] focus:outline-none focus:border-primary transition-colors text-base"
                />
                {errors.email ? <p id="visit-email-error" className="text-xs text-red-600">{errors.email}</p> : null}
              </div>

              <div className="space-y-2 min-w-0">
                <label htmlFor="visit-unit" className="text-[#7d7267] text-xs tracking-widest uppercase">Preferred Unit</label>
                <select
                  id="visit-unit"
                  value={preferredUnit}
                  onChange={(event) => setPreferredUnit(event.target.value)}
                  className="w-full min-w-0 bg-transparent border-b border-[#e4dbca] pb-2 text-[#1f1b18] focus:outline-none focus:border-primary transition-colors text-base appearance-none"
                >
                  <option value="2bhk" className="bg-white text-[#111111]">2 BHK</option>
                  <option value="2_5bhk" className="bg-white text-[#111111]">2.5 BHK</option>
                  <option value="3bhk" className="bg-white text-[#111111]">3 BHK Ultra Luxury</option>
                  <option value="3_5bhk" className="bg-white text-[#111111]">3.5 BHK</option>
                  <option value="4bhk" className="bg-white text-[#111111]">4 BHK Sky Villa</option>
                </select>
              </div>

              <div className="md:col-span-2 space-y-2 min-w-0">
                <label htmlFor="visit-message" className="text-[#7d7267] text-xs tracking-widest uppercase">Message (Optional)</label>
                <textarea
                  id="visit-message"
                  rows={4}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Share your preferred move-in timeline or questions"
                  className="w-full min-w-0 bg-transparent border-b border-[#e4dbca] pb-2 text-[#1f1b18] focus:outline-none focus:border-primary transition-colors text-base resize-none min-h-30"
                />
              </div>

              <div className="md:col-span-2">
                <InquiryConsentBlock />
              </div>

              <div className="md:col-span-2 mt-4">
                <button
                  type="submit"
                  className="w-full bg-[#fcfaf7] border border-primary/50 text-[#1f1b18] py-3 uppercase tracking-[0.2em] font-medium transition-all duration-500 hover:bg-primary/15 hover:shadow-[0_12px_30px_rgba(200,169,106,0.25)]"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Contact details removed for privacy. Floating call button will be added separately. */}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const [, setLocation] = useLocation();

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    setLocation('/');
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 350);
  };

  const scrollToDisclaimer = () => {
    const el = document.getElementById('site-disclaimer');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    // Navigate to home and then scroll after a short delay
    setLocation('/');
    setTimeout(() => {
      document.getElementById('site-disclaimer')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 350);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#f5f2ec] pt-16 pb-8 border-t border-[#e4dbca]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-serif text-[#1f1b18] tracking-widest mb-5">
              NAMBIAR <span className="text-primary opacity-70 px-1">|</span> DISTRICT 25
            </h2>
            <p className="text-[#4c4339] text-sm leading-relaxed max-w-md mb-8">
              Bengaluru's finest integrated township bringing the SOHO life to the Garden City. Phase 3 now launching with ultra-luxury skyrise apartments and a 7-acre clubhouse.
            </p>
            <div className="text-[#7d7267] text-xs space-y-2 border-l border-primary/30 pl-4">
              <p><strong className="text-[#1f1b18]">Site:</strong> Chandapura Dommasandra Road, Dommasandra, Bengaluru - 562 125</p>
              <p><strong className="text-[#1f1b18]">HQ:</strong> 2nd Floor, PR Business Centre, Outer Ring Road, Bengaluru - 560 103</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-[#1f1b18] font-serif text-base mb-6">Quick Links</h4>
              <ul className="space-y-4 text-[#4c4339] text-sm uppercase tracking-wider">
                <li><button type="button" onClick={() => scrollToSection('overview')} className="hover:text-primary transition-colors">Overview</button></li>
                <li><button type="button" onClick={() => scrollToSection('amenities')} className="hover:text-primary transition-colors">Amenities</button></li>
                <li><button type="button" onClick={() => scrollToSection('location')} className="hover:text-primary transition-colors">Location</button></li>
                <li><Link href="/disclaimer" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link href="/disclaimer" className="hover:text-primary transition-colors">Terms &amp; Conditions</Link></li>
              </ul>
          </div>

          <div>
            <h4 className="text-[#1f1b18] font-serif text-base mb-6">Legal</h4>
            <div className="bg-[#fcfaf7] p-4 border border-[#e4dbca] rounded-2xl">
              <p className="text-[#7d7267] text-xs mb-2 uppercase tracking-wider">RERA Registration</p>
              <p className="text-primary font-mono text-xs">PRM/KA/RERA/1251/308/PR/200825/008011</p>
            </div>
          </div>
        </div>

        <div className="border-t border-[#e4dbca] pt-8 mt-8">
          <p className="max-w-3xl mx-auto text-center text-[0.72rem] leading-relaxed text-[#7d7267]">
            This website is for informational purposes only and does not constitute an offer to avail any service. Prices, specifications and availability are subject to change without notice. Images are artistic impressions and indicative in nature.
          </p>
        </div>

        <div className="mt-6 flex items-center justify-center">
            <div className="flex flex-wrap gap-4 text-xs text-[#6b6259]">
            <Link href="/disclaimer" className="text-[#0066cc] hover:underline">Privacy Policy</Link>
            <span className="text-[#d7c79a]/40">•</span>
            <Link href="/disclaimer" className="text-[#0066cc] hover:underline">Terms &amp; Conditions</Link>
            <span className="text-[#d7c79a]/40">•</span>
            <button onClick={() => setLocation('/disclaimer')} className="text-[#0066cc] hover:underline">Disclaimer</button>
          </div>
        </div>

        <div className="border-t border-[#e4dbca] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#7d7267] text-xs text-center md:text-left">
            &copy; 2025 Nambiar Builders. All rights reserved. <br className="md:hidden"/> Disclaimer: Images are artistic impressions.
          </p>
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full border border-[#e4dbca] flex items-center justify-center text-[#7d7267] hover:bg-primary/15 hover:text-[#1f1b18] hover:border-primary/40 transition-all"
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
      <div className="fixed top-0 left-0 w-full h-0.5 z-100 bg-[#E6E6E6]">
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
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
          <div className="bg-[#fcfaf7] text-[#1f1b18] px-5 py-2.5 rounded-full font-medium tracking-widest uppercase text-[0.7rem] border border-primary/50 shadow-[0_12px_30px_rgba(200,169,106,0.25)] relative z-10 hover:bg-primary/15 transition-all duration-300">
            Submit Inquiry
          </div>
        </button>
      </div>
    </>
  );
}

// Custom slow pulse animation for luxury effect
// Add to your global CSS (e.g., index.css or tailwind.config.js):
// @keyframes pulse-slow { 0%, 100% { opacity: 0.6; } 50% { opacity: 1; } }
// .animate-pulse-slow { animation: pulse-slow 2.4s cubic-bezier(0.4,0,0.6,1) infinite; }
