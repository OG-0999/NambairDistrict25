import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { ImageLightbox, type LightboxImage } from '@/components/ImageLightbox';

import unit3BhkSmall from '../assets/plans/unit-3-bhk-3t-small-tower-11.png';
import unit3Bhk2T from '../assets/plans/unit-3-bhk-2t-tower-10.png';
import unit3BhkMedium from '../assets/plans/unit-3-bhk-3t-medium-tower-8.png';
import unit3BhkLarge from '../assets/plans/unit-3-bhk-3t-large-tower-9.png';
import unit4Bhk4T from '../assets/plans/unit-4-bhk-4t-tower-12.png';
import unit4Bhk5TLarge from '../assets/plans/unit-4-bhk-5t-large-tower-7.png';
import masterPlanImage from '../assets/masterplan/master-plan.jpg';
import locationMapImage from '../assets/location/address-map.jpg';

const BROCHURE_URL = '/brochure/nbr-district25-brochure.pdf';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

type PlanCard = {
  unitType: string;
  image: string;
  price: string;
  tower: string;
  size: string;
  phase: string;
};

const unitPlans: PlanCard[] = [
  {
    unitType: '2B2T',
    image: unit3Bhk2T,
    price: '₹1.69 Cr*',
    tower: '8',
    size: '1266 sq ft',
    phase: 'Phase 1'
  },
  {
    unitType: '3B2T',
    image: unit3BhkSmall,
    price: '₹2.00 Cr*',
    tower: '10',
    size: '1498 sq ft',
    phase: 'Phase 3'
  },
  {
    unitType: '3B3T R-01',
    image: unit3BhkMedium,
    price: '₹2.24 Cr*',
    tower: '11',
    size: '1683 sq ft',
    phase: 'Starting From'
  },
  {
    unitType: '3B3T R-02',
    image: unit3BhkLarge,
    price: '₹2.34 Cr*',
    tower: '09',
    size: '1757 sq ft',
    phase: 'Starting From'
  },
  {
    unitType: '3B3T L-01',
    image: unit3Bhk2T,
    price: '₹2.73 Cr*',
    tower: '10',
    size: '2051 sq ft',
    phase: 'Starting From'
  },
  {
    unitType: '3B3T L-02',
    image: unit3BhkLarge,
    price: '₹2.71 Cr*',
    tower: '09',
    size: '2034 sq ft',
    phase: 'Starting From'
  },
  {
    unitType: '4B4T',
    image: unit4Bhk4T,
    price: '₹3.44 Cr*',
    tower: '12',
    size: '2583 sq ft',
    phase: 'Starting From'
  },
  {
    unitType: '4B5T',
    image: unit4Bhk5TLarge,
    price: '₹3.91 Cr*',
    tower: '07',
    size: '2936 sq ft',
    phase: 'Starting From'
  }
];

const dispatchLeadPopup = () => {
  window.dispatchEvent(new CustomEvent('district25:open-lead-popup'));
};

const planGridClass = 'luxury-plan-carousel w-full';

type PlanGridSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: PlanCard[];
  onOpenPlan: (index: number) => void;
};

function PlanGridSection({ eyebrow, title, description, items, onOpenPlan }: PlanGridSectionProps) {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="text-center mb-16 max-w-3xl mx-auto"
      >
        <span className="text-primary tracking-[0.28em] uppercase text-xs md:text-sm font-medium mb-4 block">{eyebrow}</span>
        <h2 className="text-4xl md:text-5xl font-serif text-[#1f1b18] mb-3 tracking-tight leading-tight">{title}</h2>
        <div className="h-0.5 w-28 bg-linear-to-r from-primary via-yellow-400/80 to-primary mx-auto rounded-full mb-3"></div>
        <p className="text-[#4c4339] text-base md:text-lg mx-auto mt-2 font-light leading-relaxed">{description}</p>
      </motion.div>

      <div className={planGridClass}>
        {items.map((plan, idx) => (
          <motion.article
            key={plan.unitType + plan.tower}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: idx * 0.08, duration: 0.6 }}
            className="plan-card group relative overflow-hidden rounded-[22px] border bg-[#f6f1ea] shadow-[0_18px_40px_rgba(45,41,38,0.08)] w-65 h-80 shrink-0 snap-center"
          >
            <div className="relative h-45 overflow-hidden rounded-[18px] rounded-b-none bg-[#efe7dc]">
              <button
                type="button"
                onClick={() => onOpenPlan(idx)}
                className="absolute inset-0 z-10"
              />
              <img
                src={plan.image}
                alt={plan.unitType}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02] filter blur-[6px]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-white/8" />
              <div className="absolute inset-0 bg-linear-to-t from-[#00000026] via-transparent to-transparent" />
            </div>

            <div className="flex h-35 flex-col justify-between p-5">
              <div className="space-y-2">
                <p className="text-[12px] uppercase tracking-[0.32em] text-[#75685d]">Unit Type</p>
                <h3 className="text-[24px] font-medium leading-tight text-[#1d1b19]">{plan.unitType}</h3>
                <p className="text-sm text-[#75685d]">Tower {plan.tower}</p>
              </div>

              <div className="space-y-4">
                <p className="text-xl font-semibold text-[#9a7442]">{plan.price}</p>
                <button
                  type="button"
                  onClick={dispatchLeadPopup}
                  className="inline-flex h-11 w-full items-center justify-center rounded-full border border-[#b4966e29] bg-[#fcfaf7] px-4 text-sm font-semibold uppercase tracking-[0.26em] text-[#1d1b19] transition duration-300 hover:bg-[#f4eee3]"
                >
                  Request Access
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </>
  );
}

export function UnitPlans() {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);
  const touchStartX = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  const sectionBackgrounds = useMemo(
    () => ['#0a0f1a', '#0d1a0f', '#1a0d0a', '#0a0d1a', '#0f1a15'],
    [],
  );

  const cycleBackground = React.useCallback(() => {
    setBackgroundIndex((current) => (current + 1) % sectionBackgrounds.length);
  }, [sectionBackgrounds.length]);

  const scrollCarousel = (direction: number) => {
    cycleBackground();

    if (!carouselRef.current) {
      return;
    }

    const nextIndex = Math.min(Math.max(activeIndex + direction, 0), unitPlans.length - 1);
    cardRefs.current[nextIndex]?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    setActiveIndex(nextIndex);
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) {
      return;
    }

    const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const deltaX = touchEndX - touchStartX.current;

    if (Math.abs(deltaX) > 44) {
      cycleBackground();
    }

    touchStartX.current = null;
  };

  useEffect(() => {
    const root = carouselRef.current;
    if (!root) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) {
          return;
        }

        const index = Number((visible.target as HTMLElement).dataset.index ?? 0);
        if (!Number.isNaN(index)) {
          setActiveIndex(index);
        }
      },
      {
        root,
        threshold: [0.55, 0.7, 0.85],
      },
    );

    cardRefs.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="floorplans"
      className="relative overflow-hidden py-20 transition-colors duration-800 ease-in-out"
      style={{ backgroundColor: sectionBackgrounds[backgroundIndex] }}
    >
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#c6a66a] rounded-full blur-[180px]"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <span className="text-[0.7rem] uppercase tracking-[0.32em] text-[#9b7a45]">Unit Plans</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-serif font-semibold tracking-tight text-[#f4efe7]">Luxury Unit Plans</h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/68">
              A compact cinematic carousel with blurred plan previews, pricing clarity, and the full residence ladder from 2 BHK to 4 BHK Large.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollCarousel(-1)}
              aria-label="Scroll left"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#c6a66a]/25 bg-black/40 text-[#c6a66a] shadow-[0_12px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl transition duration-300 hover:border-[#c6a66a]/45 hover:bg-black/50 hover:scale-105"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => scrollCarousel(1)}
              aria-label="Scroll right"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#c6a66a]/25 bg-black/40 text-[#c6a66a] shadow-[0_12px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl transition duration-300 hover:border-[#c6a66a]/45 hover:bg-black/50 hover:scale-105"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div
          ref={carouselRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="luxury-plan-carousel scroll-smooth snap-x snap-mandatory overflow-x-auto pb-6"
        >
          {unitPlans.map((plan, index) => (
            <motion.article
              key={`${plan.unitType}-${plan.tower}-${index}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.65 }}
              data-index={index}
              ref={(node) => {
                cardRefs.current[index] = node;
              }}
              onClick={() => dispatchLeadPopup()}
              className={[
                'group luxury-plan-card min-w-66 max-w-66 h-98 overflow-hidden rounded-[28px] border snap-center transition-all duration-300 cursor-pointer',
                index === activeIndex
                  ? 'border-[#c6a66a]/38 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(8,10,9,0.92))] shadow-[0_24px_60px_rgba(0,0,0,0.42),0_0_0_1px_rgba(198,166,106,0.10)] scale-[1.02]'
                  : 'border-[#c6a66a]/16 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(8,10,9,0.88))] shadow-[0_18px_46px_rgba(0,0,0,0.34)] opacity-90',
              ].join(' ')}
            >
              <div className="relative h-[12.4rem] overflow-hidden rounded-t-[28px] bg-[#0f1714]">
                <img
                  src={plan.image}
                  alt={plan.unitType}
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.04] filter blur-[5px] brightness-[0.92] contrast-[1.04]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(13,27,22,0.02),rgba(13,27,22,0.40))]" />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-[#0a0f0d]/92 via-transparent to-transparent" />
              </div>

              <div className="flex h-[11.9rem] flex-col justify-between p-5">
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-[0.34em] text-[#9b7a45]">Unit Type</p>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-[1.1rem] font-bold tracking-tight text-[#f4efe7] leading-tight">{plan.unitType}</h3>
                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-[0.28em] text-white/62">
                      Tower {plan.tower}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.32em] text-white/45">Starting From</p>
                      <p className="mt-1 text-[1.15rem] font-semibold tracking-tight text-[#c6a66a]">{plan.price}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] uppercase tracking-[0.32em] text-white/45">Sq Ft</p>
                      <p className="mt-1 text-sm font-medium text-[#f4efe7]">{plan.size}</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={dispatchLeadPopup}
                    className="inline-flex h-11 w-full items-center justify-center rounded-full border border-[#c6a66a]/30 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] px-5 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#f4efe7] transition duration-300 hover:-translate-y-0.5 hover:border-[#c6a66a]/48 hover:bg-[#c6a66a] hover:text-[#111111] hover:shadow-[0_12px_26px_rgba(198,166,106,0.18)]"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MasterPlan() {
  const [viewerOpen, setViewerOpen] = useState(false);

  return (
    <section id="masterplan" className="py-28 bg-[#f5f2ec] overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-14 max-w-3xl mx-auto"
        >
          <span className="text-primary tracking-[0.3em] uppercase text-xs md:text-sm font-medium mb-4 block">Master Plan</span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#1f1b18] mb-2 leading-tight">MASTER PLAN</h2>
        </motion.div>

        <motion.button
          type="button"
          onClick={() => setViewerOpen(true)}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="group relative w-full overflow-hidden rounded-[36px] border border-[#d9cfbf] bg-[#f2ede5] text-left shadow-[0_22px_58px_rgba(42,37,34,0.18)]"
        >
          <div className="relative aspect-video w-full overflow-hidden bg-[#0f1720]">
            <img
              src={masterPlanImage}
              alt="Brochure extracted master plan"
              className="h-full w-full object-cover transition-transform duration-1200 group-hover:scale-[1.015]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#2a2522]/34 via-transparent to-transparent"></div>
          </div>
        </motion.button>

        <ImageLightbox
          open={viewerOpen}
          images={[{ src: masterPlanImage, alt: 'Brochure extracted master plan', title: 'Master Plan' }]}
          activeIndex={0}
          onActiveIndexChange={() => undefined}
          onOpenChange={setViewerOpen}
          minimal
        />
      </div>
    </section>
  );
}

export function Location() {
  const [viewerOpen, setViewerOpen] = useState(false);

  return (
    <section id="location" className="py-28 bg-[#efe9df] border-y border-[#e4dbca] overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span className="text-primary tracking-[0.28em] uppercase text-xs md:text-sm font-medium mb-4 block">Location & Address</span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#1f1b18] mb-5 leading-tight">An Address Framed Like Architecture</h2>
          <p className="text-[#4c4339] text-base md:text-lg font-light leading-relaxed">The brochure’s map artwork is presented in a premium split layout for a cleaner, more immersive location experience.</p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-10 items-center max-w-7xl mx-auto">
          <motion.button
            type="button"
            initial={{ opacity: 0, x: -24 }}
            onClick={() => setViewerOpen(true)}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative overflow-hidden rounded-[34px] border border-[#e4dbca] bg-[#f7f3ec] text-left shadow-[0_20px_60px_rgba(17,17,17,0.10)]"
          >
            <div className="relative aspect-16/12 w-full overflow-hidden">
              <img
                src={locationMapImage}
                alt="Brochure extracted location map"
                className="h-full w-full object-cover transition-transform duration-1200 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-white/18 via-transparent to-transparent"></div>
            </div>
          </motion.button>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="space-y-5"
          >
            <div className="rounded-[28px] border border-[#E9E2D4] bg-[#FCFAF7] p-6 md:p-7 shadow-[0_16px_44px_rgba(17,17,17,0.06)]">
              <h4 className="text-[#1f1b18] font-serif text-2xl mb-3">An Address in Bengaluru&apos;s Fastest Growing Neighbourhood</h4>
              <p className="text-[#4c4339] text-base leading-relaxed">
                Post 2021, the Sarjapura Road area has seen a boom in demand for luxury housing with property prices approaching a 63% rise. Nambiar District 25 is strategically located close to Wipro, Cisco, ITPL, and Electronic City, and a mere 600 meters from the upcoming Red Line Muthanallur Metro Station.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="rounded-[22px] border border-[#E9E2D4] bg-white p-4 shadow-[0_10px_28px_rgba(17,17,17,0.05)]">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#8A7C63] mb-2">Metro</p>
                <p className="text-sm font-medium text-[#1f1b18] leading-relaxed">600m from Muthanallur Metro Station</p>
              </div>
              <div className="rounded-[22px] border border-[#E9E2D4] bg-white p-4 shadow-[0_10px_28px_rgba(17,17,17,0.05)]">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#8A7C63] mb-2">IT Corridor</p>
                <p className="text-sm font-medium text-[#1f1b18] leading-relaxed">Wipro, Cisco, ITPL, Electronic City</p>
              </div>
              <div className="rounded-[22px] border border-[#E9E2D4] bg-white p-4 shadow-[0_10px_28px_rgba(17,17,17,0.05)]">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#8A7C63] mb-2">Lifestyle</p>
                <p className="text-sm font-medium text-[#1f1b18] leading-relaxed">Premium access to Sarjapur and Dommasandra</p>
              </div>
            </div>

            <div className="rounded-3xl border border-primary/25 bg-primary/8 px-5 py-4 shadow-[0_10px_28px_rgba(200,169,106,0.10)]">
              <p className="text-[10px] uppercase tracking-[0.32em] text-[#8A7C63] mb-1">Project Address</p>
              <p className="text-sm md:text-base text-[#1f1b18] font-medium">Chandapura Dommasandra Road, Dommasandra, Bengaluru - 562 125</p>
            </div>
          </motion.div>
        </div>

        <ImageLightbox
          open={viewerOpen}
          images={[{ src: locationMapImage, alt: 'Brochure extracted location map', title: 'Location Map', caption: 'The brochure location artwork opened in a cinematic fullscreen viewer.', badge: 'Location' }]}
          activeIndex={0}
          onActiveIndexChange={() => undefined}
          onOpenChange={setViewerOpen}
          onEnquire={dispatchLeadPopup}
          brochureHref={BROCHURE_URL}
        />
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
    <section className="py-24 bg-[#f5f2ec] overflow-hidden relative">
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
          <h2 className="text-3xl md:text-4xl font-serif text-[#1f1b18]">THE GENERATIONAL ADDRESS</h2>
        </motion.div>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 hide-scrollbar">
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="min-w-[320px] md:min-w-100 bg-[#fcfaf7] border border-[#e4dbca] rounded-2xl p-6 snap-center shadow-[0_18px_40px_rgba(17,17,17,0.1)] hover:-translate-y-1 transition-all"
            >
              <div className="flex text-primary mb-6">
                {[...Array(rev.stars)].map((_, i) => <span key={i}>★</span>)}
              </div>
              <p className="text-[#4c4339] font-light text-base mb-8 leading-relaxed">"{rev.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary font-serif text-xl">
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-[#1f1b18] font-medium">{rev.name}</h4>
                  <span className="text-[#7d7267] text-sm">{rev.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
