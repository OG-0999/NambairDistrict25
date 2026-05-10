import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export function TrustBar() {
  const stats = [
    { label: "Families", value: "750+", sub: "Phase 1" },
    { label: "Clubhouse", value: "7 Acre", sub: "World Class" },
    { label: "Trees", value: "3500+", sub: "Lush Greenery" },
    { label: "Open Space", value: "80%", sub: "Breathe Free" },
    { label: "Approved", value: "RERA", sub: "100% Safe" }
  ];

  return (
    <section className="py-10 bg-white border-y border-[#E6E6E6] relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 divide-x divide-[#E6E6E6]">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { delay: idx * 0.1, duration: 0.6 } }
              }}
              className="text-center px-4"
            >
              <div className="text-2xl lg:text-3xl font-serif text-primary mb-1">{stat.value}</div>
              <div className="text-[#111111] text-xs uppercase tracking-wider mb-1">{stat.label}</div>
              <div className="text-[#777777] text-xs">{stat.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutProject() {
  return (
    <section id="overview" className="py-24 bg-[#F7F7F5] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="space-y-8"
          >
            <div className="flex items-center space-x-4">
              <div className="h-[1px] w-12 bg-primary"></div>
              <span className="text-primary tracking-[0.2em] uppercase text-sm font-medium">The Vision</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#111111] leading-tight">
              A GENERATIONAL <br /><i className="text-primary font-light">ADDRESS</i>
            </h2>

            <div className="space-y-6 text-[#444444] text-base leading-relaxed font-light">
              <p>
                "It's a breezy morning. You're enjoying a cup of French Press outside a quaint café. Right across the street is the theater where you've got tickets to an internationally renowned musical."
              </p>
              <p>
                "After the performance, it's time for lunch at a Michelin-star restaurant, before taking a stroll through a beautiful, modern neighbourhood. Ah, the SOHO Life is amazing. But you're not in SOHO. You're in Bengaluru."
              </p>
              <p className="text-[#111111] border-l-2 border-primary pl-6 py-2 text-lg font-serif">
                District 25 is our take on The SOHO Life — a place where work meets play, where art thrives and nature blossoms.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] relative overflow-hidden border border-[#E6E6E6] rounded-2xl">
              <img src="/images/about-1.png" alt="SOHO Life" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/70 to-transparent"></div>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-10 -left-10 w-2/3 aspect-square border border-primary/30 p-2 bg-white/70 backdrop-blur-md hidden md:block rounded-2xl shadow-[0_20px_40px_rgba(17,17,17,0.12)]"
            >
              <img src="/images/about-2.png" alt="Theater" className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function KeyHighlights() {
  const highlights = [
    {
      title: "Villa-Style Living",
      desc: "Skyrise apartments with perks of villa living — no shared walls, spacious balconies, 4 units per floor, 4 elevators.",
      icon: "🏛️"
    },
    {
      title: "7 Acre Clubhouse",
      desc: "2.5 lakh+ sqft, world-class sports, fitness, and recreation. The epicentre of the district.",
      icon: "✨"
    },
    {
      title: "Prime Location",
      desc: "600m from Muthanallur Metro, near Wipro/Cisco. 63% price rise in the Sarjapur road area.",
      icon: "📍"
    },
    {
      title: "SOHO Zone",
      desc: "1km Spine Road, flea market, food trucks, cafés, and an open-air theater.",
      icon: "🎭"
    }
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-[#111111] mb-4">CURATED FOR THE FEW</h2>
          <div className="h-[1px] w-24 bg-primary mx-auto mb-6"></div>
          <p className="text-[#666666] max-w-2xl mx-auto uppercase tracking-widest text-sm">Key Highlights of Phase 2</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { delay: idx * 0.15, duration: 0.6 } }
              }}
              className="bg-white border border-[#E6E6E6] rounded-2xl p-6 shadow-[0_16px_40px_rgba(17,17,17,0.08)] hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(17,17,17,0.12)] transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-500"></div>
              <div className="text-3xl mb-6 opacity-80 grayscale">{item.icon}</div>
              <h3 className="text-lg font-serif text-[#111111] mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-[#666666] text-sm leading-relaxed">{item.desc}</p>
              
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
