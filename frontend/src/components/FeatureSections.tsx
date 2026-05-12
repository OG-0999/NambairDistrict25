import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

import { ImageLightbox, type LightboxImage } from '@/components/ImageLightbox';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export function Gallery() {
  const images = useMemo<LightboxImage[]>(
    () => [
      {
        src: '/images/gallery-1.png',
        alt: 'Gallery 1',
        title: 'Signature Lifestyle Frame',
        caption: 'An atmospheric composition from the District 25 visual language.',
        badge: 'Gallery'
      },
      {
        src: '/images/gallery-2.png',
        alt: 'Gallery 2',
        title: 'Architectural Study',
        caption: 'Soft light, deep contrast, and a cinematic presentation of the towers.',
        badge: 'Gallery'
      },
      {
        src: '/images/gallery-3.png',
        alt: 'Gallery 3',
        title: 'Amenity Perspective',
        caption: 'A premium lifestyle frame with more breathing room and warmth.',
        badge: 'Gallery'
      },
      {
        src: '/images/gallery-4.png',
        alt: 'Gallery 4',
        title: 'Landscape Detail',
        caption: 'Layered greenery and clean composition for a calmer visual rhythm.',
        badge: 'Gallery'
      },
      {
        src: '/images/gallery-5.png',
        alt: 'Gallery 5',
        title: 'Material Moodboard',
        caption: 'A tactile, premium tone that matches the warmer site palette.',
        badge: 'Gallery'
      },
      {
        src: '/images/gallery-6.png',
        alt: 'Gallery 6',
        title: 'Night View Impression',
        caption: 'A darker, more cinematic frame for the development showcase.',
        badge: 'Gallery'
      },
    ],
    [],
  );
  const [viewerOpen, setViewerOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openViewer = (index: number) => {
    setActiveIndex(index);
    setViewerOpen(true);
  };

  const closeViewer = () => setViewerOpen(false);

  const onEnquire = () => {
    window.dispatchEvent(new CustomEvent('district25:open-lead-popup'));
  };

  return (
    <section className="py-24 bg-[#f5f2ec]">
      <div className="container mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-12 flex flex-col items-center text-center"
        >
          <span className="text-primary tracking-[0.22em] uppercase text-xs sm:text-sm font-medium mb-4 block">Visuals</span>
          <h2 className="text-3xl md:text-4xl font-serif text-[#1f1b18]">AN ELEVATED EXPERIENCE</h2>
          <p className="mt-4 max-w-2xl text-sm md:text-base text-[#4a433c] leading-relaxed">
            Tap any frame to open the cinematic viewer, browse with swipe gestures, and move directly into the inquiry flow.
          </p>
        </motion.div>

        <div className="grid gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, idx) => (
            <motion.button
              key={image.src}
              type="button"
              onClick={() => openViewer(idx)}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.65 }}
              className="group relative aspect-4/3 overflow-hidden rounded-3xl border border-[#e4dbca] bg-[#fcfaf7] shadow-[0_18px_40px_rgba(17,17,17,0.08)]"
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="h-full w-full object-cover transition-transform duration-1100 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#171310]/78 via-[#171310]/18 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100"></div>
              <div className="absolute inset-x-0 bottom-0 p-5 text-left text-white">
                <p className="text-[10px] uppercase tracking-[0.34em] text-white/60">{image.badge ?? 'Visual'}</p>
                <h3 className="mt-2 text-xl font-serif leading-tight">{image.title}</h3>
                <p className="mt-2 max-w-[26ch] text-sm text-white/75 leading-relaxed">{image.caption}</p>
              </div>
            </motion.button>
          ))}
        </div>

        <ImageLightbox
          open={viewerOpen}
          images={images}
          activeIndex={activeIndex}
          onActiveIndexChange={setActiveIndex}
          onOpenChange={setViewerOpen}
          onEnquire={onEnquire}
        />
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
    <section id="amenities" className="py-24 bg-[#efe9df] border-t border-[#e4dbca] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-125 bg-primary/5 blur-[120px] pointer-events-none rounded-full"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="h-px w-12 bg-primary"></div>
            <span className="text-primary tracking-[0.2em] uppercase text-sm font-medium">World Class Lifestyle</span>
            <div className="h-px w-12 bg-primary"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-[#1f1b18]">A DISTRICT IN ITSELF</h2>
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
              className="bg-[#fcfaf7] border border-[#e4dbca] rounded-2xl p-6 shadow-[0_16px_36px_rgba(17,17,17,0.08)] hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_44px_rgba(17,17,17,0.12)] transition-all duration-500 group relative"
            >
              <h3 className="text-xl font-serif text-[#1f1b18] mb-4 group-hover:text-primary transition-colors">{cat.title}</h3>
              <p className="text-[#4c4339] text-sm leading-relaxed">{cat.items}</p>
              
              <div className="absolute top-8 right-8 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Clubhouse() {
  const [viewerOpen, setViewerOpen] = useState(false);

  return (
    <section className="py-0 bg-[#f5f2ec]">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="aspect-square lg:aspect-auto lg:h-full relative cursor-pointer"
          onClick={() => setViewerOpen(true)}
        >
          <img src="/images/clubhouse.png" alt="Clubhouse" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-linear-to-r from-transparent to-[#f5f2ec] hidden lg:block"></div>
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-white lg:hidden">
            <div className="rounded-3xl border border-white/15 bg-[#12100d]/55 px-4 py-4 backdrop-blur-md">
              <p className="text-[10px] uppercase tracking-[0.35em] text-white/60">Tap to enlarge</p>
              <p className="mt-2 text-lg font-serif">The 7 Acre Clubhouse</p>
            </div>
          </div>
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
          
          <h2 className="text-3xl md:text-4xl font-serif text-[#1f1b18] leading-tight mb-6">
            THE 7 ACRE CLUBHOUSE
          </h2>
          
          <p className="text-[#4a433c] text-base font-light leading-relaxed mb-6">
            An expansive 2.5 lakh+ sq.ft destination for sports, fitness, wellness, and recreation, designed as the
            social heart of District 25.
          </p>
          <p className="text-[#4a433c] text-base font-light leading-relaxed mb-10">
            Olympic pools, studios, cafes, lounges, and event spaces come together to create a lifestyle hub that
            feels exclusive, effortless, and alive.
          </p>

          <button className="bg-[#fcfaf7] border border-primary/50 text-[#1f1b18] px-7 py-3 font-medium tracking-widest uppercase text-sm transition-all duration-500 hover:bg-primary/15 hover:shadow-[0_12px_30px_rgba(200,169,106,0.25)] w-max">
            Explore Amenities
          </button>
        </motion.div>
      </div>

      <ImageLightbox
        open={viewerOpen}
        images={[{ src: '/images/clubhouse.png', alt: 'Clubhouse', title: 'The 7 Acre Clubhouse', caption: 'A full-width lifestyle frame from the District 25 presentation.', badge: 'Clubhouse' }]}
        activeIndex={0}
        onActiveIndexChange={() => undefined}
        onOpenChange={setViewerOpen}
        onEnquire={() => window.dispatchEvent(new CustomEvent('district25:open-lead-popup'))}
      />
    </section>
  );
}
