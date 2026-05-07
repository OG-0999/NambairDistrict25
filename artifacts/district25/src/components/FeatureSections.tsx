import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export function Gallery() {
  const images = [
    "/images/gallery-1.png",
    "/images/gallery-2.png",
    "/images/gallery-3.png",
    "/images/gallery-4.png",
    "/images/gallery-5.png",
    "/images/gallery-6.png"
  ];

  return (
    <section className="py-24 bg-[#050505]">
      <div className="container mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-12 flex flex-col items-center text-center"
        >
          <span className="text-primary tracking-[0.2em] uppercase text-sm font-medium mb-4 block">Visuals</span>
          <h2 className="text-3xl md:text-4xl font-serif text-white">AN ELEVATED EXPERIENCE</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.7 }}
              className="relative aspect-[4/3] overflow-hidden group cursor-pointer"
            >
              <img 
                src={img} 
                alt={`Gallery ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full border border-primary flex items-center justify-center text-primary scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                  +
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Amenities() {
  const categories = [
    {
      title: "Sports",
      items: "Olympic pool, badminton, squash, bowling, pickleball, basketball, volleyball, tennis, 4km jogging track"
    },
    {
      title: "Wellness",
      items: "Spa, yoga deck, hammock garden, nocturnal garden, butterfly garden"
    },
    {
      title: "Social",
      items: "Café, restaurant, SOHO Zone flea market, food trucks, auditorium, projection wall, party terrace"
    },
    {
      title: "Kids",
      items: "Kids pool, play zones, swing plaza, trampoline, totlot"
    },
    {
      title: "Nature",
      items: "3500+ trees, 80% open space, 40% green space, orchard, sacred flower garden, medicinal plant beds"
    },
    {
      title: "Smart Living",
      items: "EV charging, rainwater harvesting, DG backup 100%, CCTV, security cabins"
    }
  ];

  return (
    <section id="amenities" className="py-24 bg-black border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-primary/5 blur-[120px] pointer-events-none rounded-full"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="h-[1px] w-12 bg-primary"></div>
            <span className="text-primary tracking-[0.2em] uppercase text-sm font-medium">World Class Lifestyle</span>
            <div className="h-[1px] w-12 bg-primary"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-white">A DISTRICT IN ITSELF</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { delay: idx * 0.1, duration: 0.6 } }
              }}
              className="bg-white/[0.02] border border-white/10 p-6 hover:bg-black hover:border-primary transition-all duration-500 group relative"
            >
              <h3 className="text-xl font-serif text-white mb-4 group-hover:text-primary transition-colors">{cat.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{cat.items}</p>
              
              <div className="absolute top-8 right-8 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Clubhouse() {
  return (
    <section className="py-0 bg-[#050505]">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="aspect-square lg:aspect-auto lg:h-full relative"
        >
          <img src="/images/clubhouse.png" alt="Clubhouse" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#050505] hidden lg:block"></div>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex flex-col justify-center p-10 lg:p-20"
        >
          <div className="inline-block bg-primary/10 border border-primary/30 text-primary px-4 py-1 text-xs tracking-widest uppercase mb-8 w-max">
            2.5 Lakh+ Sq.Ft
          </div>
          
          <h2 className="text-3xl md:text-4xl font-serif text-white leading-tight mb-6">
            THE BUZZING HUB <br /> OF DISTRICT 25
          </h2>
          
          <p className="text-white/70 text-base font-light leading-relaxed mb-6">
            The epicentre of District 25: the clubhouse is a sprawling 2.5 lakh+ sft space packed with world-class sports, fitness and recreational amenities. 
          </p>
          <p className="text-white/70 text-base font-light leading-relaxed mb-10">
            Unique amenities like an observatory, indoor pool, spa, restaurant, saloon, grocery store, clinic, café, co-working space, library, yoga hall, AV room and more.
          </p>

          <button className="bg-transparent border border-white text-white px-7 py-3 font-medium tracking-widest uppercase text-sm hover:bg-white hover:text-black transition-colors duration-500 w-max">
            Explore Clubhouse
          </button>
        </motion.div>
      </div>
    </section>
  );
}
