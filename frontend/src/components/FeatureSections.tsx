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
        title: 'Signature Lifestyle',
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
        title: 'Neighbourhood Frame',
        caption: 'Layered greenery and clean composition for a calmer visual rhythm.',
        badge: 'Gallery'
      },
      {
        src: '/images/gallery-5.png',
        alt: 'Gallery 5',
        title: 'Refined Moodboard',
        caption: 'A tactile, premium tone that matches the warmer site palette.',
        badge: 'Gallery'
      },
      {
        src: '/images/gallery-6.png',
        alt: 'Gallery 6',
        title: 'Elevated Experience',
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
              className="gallery-card"
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="gallery-image"
              />
              <div className="gallery-overlay" />
              <div className="gallery-content">
                <p className="gallery-label">{image.badge ?? 'Gallery'}</p>
                <div className="gallery-label-underline" />
                <h3 className="gallery-title">{image.title}</h3>
                <p className="gallery-description">{image.caption}</p>
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
    <section id="amenities" className="luxury-green-section py-24 border-t border-white/8 relative overflow-hidden">
      <div className="luxury-green-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-125 pointer-events-none rounded-full"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-14 sm:mb-16"
        >
          <div className="flex items-center justify-center space-x-3 sm:space-x-4 mb-5 sm:mb-6">
            <div className="h-px w-10 sm:w-12 bg-[#c9b68a]/45"></div>
            <span className="luxury-green-eyebrow text-[#e8e1d3] tracking-[0.24em] uppercase text-[0.68rem] sm:text-sm font-medium">World Class Lifestyle</span>
            <div className="h-px w-10 sm:w-12 bg-[#c9b68a]/45"></div>
          </div>
          <h2 className="luxury-green-title text-3xl md:text-5xl font-serif text-[#f2ede4]">A DISTRICT IN ITSELF</h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
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
              className="luxury-green-card group relative rounded-2xl p-5 sm:p-6 transition-all duration-500"
            >
              <h3 className="text-lg sm:text-xl font-serif text-[#f4efe7] mb-3 sm:mb-4 transition-colors duration-300 group-hover:text-[#d7c79a]">{cat.title}</h3>
              <p className="text-[#c4c0b5] text-sm leading-relaxed">{cat.items}</p>
              
              <div className="absolute top-7 right-7 w-2 h-2 rounded-full bg-[#c9b68a] opacity-60 transition-opacity group-hover:opacity-100"></div>
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
    <section className="luxury-green-section py-0 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(201,182,138,0.08),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(13,27,22,0.32),transparent_40%)]"></div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="aspect-[4/3] sm:aspect-square lg:aspect-auto lg:h-full relative cursor-pointer"
          onClick={() => setViewerOpen(true)}
        >
          <img src="/images/clubhouse.png" alt="Clubhouse" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(13,27,22,0.10),rgba(13,27,22,0.28)_55%,rgba(13,27,22,0.45))] hidden lg:block"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(13,27,22,0.08),rgba(13,27,22,0.24))]"></div>
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 md:p-8 text-white lg:hidden">
            <div className="rounded-3xl border border-white/12 bg-[#0d1b16]/55 px-4 py-4 backdrop-blur-md shadow-[0_12px_30px_rgba(0,0,0,0.2)]">
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#e8e1d3]/65">Tap to enlarge</p>
              <p className="mt-2 text-lg font-serif text-[#f2ede4]">The 7 Acre Clubhouse</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex flex-col justify-center bg-[linear-gradient(180deg,#112019_0%,#14241d_52%,#1a2b22_100%)] p-6 sm:p-10 lg:p-20"
        >
          <div className="inline-block rounded-full border border-[#c9b68a]/20 bg-white/5 px-4 py-1 text-xs tracking-[0.34em] uppercase mb-7 sm:mb-8 w-max text-[#d7c79a] shadow-[0_8px_20px_rgba(0,0,0,0.14)]">
            2.5 Lakh+ Sq.Ft
          </div>
          
          <h2 className="text-3xl md:text-4xl font-serif text-[#f2ede4] leading-tight mb-5 sm:mb-6">
            THE 7 ACRE CLUBHOUSE
          </h2>
          
          <p className="max-w-xl text-[#c4c0b5] text-base font-light leading-relaxed mb-5 sm:mb-6">
            An expansive 2.5 lakh+ sq.ft destination for sports, fitness, wellness, and recreation, designed as the
            social heart of District 25.
          </p>
          <p className="max-w-xl text-[#b7b2a6] text-base font-light leading-relaxed mb-8 sm:mb-10">
            Olympic pools, studios, cafes, lounges, and event spaces come together to create a lifestyle hub that
            feels exclusive, effortless, and alive.
          </p>

          <button className="w-max rounded-full border border-[#c9b68a]/24 bg-white/5 px-7 py-3 font-medium tracking-widest uppercase text-sm text-[#f2ede4] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/8 hover:shadow-[0_14px_28px_rgba(0,0,0,0.24)]">
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
