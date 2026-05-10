import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export function FloorPlans() {
  const unitPlans = [
    { title: "3 BHK", subtitle: "Skyline Residences", image: "/images/gallery-1.png" },
    { title: "3 BHK + S", subtitle: "Signature Collection", image: "/images/gallery-2.png" },
    { title: "4 BHK", subtitle: "Sky Villa", image: "/images/gallery-3.png" },
    { title: "4 BHK + Home Office", subtitle: "Grand Suites", image: "/images/gallery-4.png" }
  ];

  const floorPlans = [
    { title: "3 BHK", subtitle: "Classic Layout", image: "/images/gallery-5.png" },
    { title: "3 BHK + S", subtitle: "Corner Layout", image: "/images/gallery-6.png" },
    { title: "4 BHK", subtitle: "Panoramic Layout", image: "/images/about-1.png" },
    { title: "4 BHK + Home Office", subtitle: "Skyline Layout", image: "/images/clubhouse.png" }
  ];

  const renderPlanCards = (items: typeof unitPlans) => (
    <div className="flex flex-wrap items-stretch gap-6">
      {items.map((plan, idx) => (
        <motion.div
          key={plan.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: idx * 0.08, duration: 0.6 }}
          className="group flex w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)]"
        >
          <div className="flex w-full min-h-[360px] flex-col overflow-hidden rounded-2xl border border-[#E6E6E6] bg-white shadow-[0_20px_50px_rgba(17,17,17,0.12)] transition-all duration-500 group-hover:-translate-y-1 group-hover:border-primary/40 group-hover:shadow-[0_28px_70px_rgba(17,17,17,0.16)]">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <img
                src={plan.image}
                alt={plan.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/20 to-transparent"></div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-between px-6 py-6 text-center">
              <div>
                <h3 className="text-xl font-serif text-[#111111] tracking-[0.08em]">{plan.title}</h3>
                <p className="mt-2 text-xs uppercase tracking-[0.25em] text-[#666666]">{plan.subtitle}</p>
              </div>
              <button className="mt-6 w-full max-w-[220px] border border-primary/50 bg-white px-6 py-2.5 text-xs uppercase tracking-[0.3em] text-[#111111] transition-all duration-500 hover:bg-primary/15 hover:shadow-[0_12px_30px_rgba(200,169,106,0.25)]">
                Enquire Now
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );

  return (
    <section id="floorplans" className="py-24 bg-[#F7F7F5]">
      <div className="container mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-[#111111] mb-4">UNIT PLANS</h2>
          <div className="h-[1px] w-24 bg-primary mx-auto"></div>
        </motion.div>
        {renderPlanCards(unitPlans)}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-12 mt-16"
        >
          <h3 className="text-2xl md:text-3xl font-serif text-[#111111] mb-4">FLOOR PLANS</h3>
          <div className="h-[1px] w-24 bg-primary mx-auto"></div>
        </motion.div>

        {renderPlanCards(floorPlans)}
      </div>
    </section>
  );
}

export function Location() {
  return (
    <section id="location" className="py-24 bg-white border-y border-[#E6E6E6]">
      <div className="container mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-12 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-[#111111] mb-6 leading-tight">AN ADDRESS IN BENGALURU'S FASTEST GROWING NEIGHBOURHOOD</h2>
          <p className="text-primary text-base font-light tracking-wide">Post 2021, the Sarjapur Road area has seen a boom in demand for luxury housing with property prices approaching a 63% rise.</p>
        </motion.div>

        <div className="flex flex-col gap-8 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-white border border-[#E6E6E6] rounded-2xl p-5 flex items-start gap-4 shadow-[0_16px_36px_rgba(17,17,17,0.08)] hover:border-primary/40 transition-colors">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0 text-primary mt-1">🚇</div>
              <div>
                <h4 className="text-[#111111] font-serif text-lg mb-2">Connectivity</h4>
                <p className="text-[#666666] text-sm">600m from Muthanallur Metro Station (upcoming Red Line)<br/>Near Wipro SEZ, Cisco, ITPL, Electronic City</p>
              </div>
            </div>

            <div className="bg-white border border-[#E6E6E6] rounded-2xl p-5 flex items-start gap-4 shadow-[0_16px_36px_rgba(17,17,17,0.08)] hover:border-primary/40 transition-colors">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0 text-primary mt-1">🏫</div>
              <div>
                <h4 className="text-[#111111] font-serif text-lg mb-2">Education</h4>
                <p className="text-[#666666] text-sm">TISB, Oakridge International, Bethany High, Greenwood High</p>
              </div>
            </div>

            <div className="bg-white border border-[#E6E6E6] rounded-2xl p-5 flex items-start gap-4 shadow-[0_16px_36px_rgba(17,17,17,0.08)] hover:border-primary/40 transition-colors">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0 text-primary mt-1">🛍️</div>
              <div>
                <h4 className="text-[#111111] font-serif text-lg mb-2">Retail & Leisure</h4>
                <p className="text-[#666666] text-sm">Forum Value Mall, Central Mall, SOHO Zone</p>
              </div>
            </div>
            
            <p className="text-[#777777] text-xs mt-8">Chandapura Dommasandra Road, Dommasandra, Bengaluru - 562 125</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const reviews = [
    {
      name: "Ananya Krishnamurthy",
      role: "Phase 1 Resident",
      text: "Moving to District 25 was a generational decision for our family. The SOHO life is real — my mornings start at the café and evenings at the 7-acre clubhouse. Truly Bengaluru's finest.",
      stars: 5
    },
    {
      name: "Vikram Mehta",
      role: "Phase 1 Resident",
      text: "The villa-style apartments offer unmatched privacy. We have no shared walls, and the views from the 35th floor over the 3500+ trees are breathtaking. The premium finish is evident everywhere.",
      stars: 5
    },
    {
      name: "Priya Subramaniam",
      role: "Phase 1 Resident",
      text: "What sold us was the 80% open space. In a city like Bangalore, finding a township that prioritizes nature while offering ultra-luxury amenities is rare. The community here is extraordinary.",
      stars: 5
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-12"
        >
          <span className="text-primary tracking-[0.2em] uppercase text-sm font-medium mb-4 block">RESIDENT VOICES</span>
          <h2 className="text-3xl md:text-4xl font-serif text-[#111111]">THE GENERATIONAL ADDRESS</h2>
        </motion.div>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 hide-scrollbar">
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="min-w-[320px] md:min-w-[400px] bg-white border border-[#E6E6E6] rounded-2xl p-6 snap-center shadow-[0_18px_40px_rgba(17,17,17,0.1)] hover:-translate-y-1 transition-all"
            >
              <div className="flex text-primary mb-6">
                {[...Array(rev.stars)].map((_, i) => <span key={i}>★</span>)}
              </div>
              <p className="text-[#444444] font-light text-base mb-8 leading-relaxed">"{rev.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary font-serif text-xl">
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-[#111111] font-medium">{rev.name}</h4>
                  <span className="text-[#777777] text-sm">{rev.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
