import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { ImageLightbox, type LightboxImage } from '@/components/ImageLightbox';

import unit3BhkSmall from '../assets/plans/unit-3-bhk-3t-small-tower-11.png';
import unit3Bhk2T from '../assets/plans/unit-3-bhk-2t-tower-10.png';
import unit3BhkMedium from '../assets/plans/unit-3-bhk-3t-medium-tower-8.png';
import unit3BhkLarge from '../assets/plans/unit-3-bhk-3t-large-tower-9.png';
import unit4Bhk4T from '../assets/plans/unit-4-bhk-4t-tower-12.png';
import unit4Bhk5TLarge from '../assets/plans/unit-4-bhk-5t-large-tower-7.png';
import masterPlanImage from '../assets/masterplan/master-plan.jpg';
import locationMapImage from '../assets/location/address-map.jpg';

const BROCHURE_URL = encodeURI('/brochure/NBR District 25 mini face.pdf');

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

type PlanCard = {
  title: string;
  subtitle: string;
  image: string;
  price: string;
  saleArea: string;
  carpetArea: string;
  balconyArea: string;
  tower: string;
  tag: string;
  note: string;
  highlight: string;
};

const unitPlans: PlanCard[] = [
  {
    title: '3 BED 2T',
    subtitle: 'UNIT - 2 | TOWER - 10',
    image: unit3Bhk2T,
    price: '₹2.45 Cr',
    saleArea: '1454 sft',
    carpetArea: '965 sft',
    balconyArea: '86 sft',
    tower: '10',
    tag: 'Signature',
    note: 'Compact luxury with efficient spatial planning.',
    highlight: 'Limited inventory'
  },
  {
    title: '3 BED 3T (Small)',
    subtitle: 'UNIT - 1 | TOWER - 11',
    image: unit3BhkSmall,
    price: '₹2.65 Cr',
    saleArea: '1695 sft',
    carpetArea: '1124 sft',
    balconyArea: '110 sft',
    tower: '11',
    tag: 'Luxury',
    note: 'A refined family layout with a generous sky deck.',
    highlight: 'Sky deck'
  },
  {
    title: '3 BED 3T (Medium)',
    subtitle: 'UNIT - 1 | TOWER - 08',
    image: unit3BhkMedium,
    price: '₹2.85 Cr',
    saleArea: '1896 sft',
    carpetArea: '1196 sft',
    balconyArea: '196 sft',
    tower: '08',
    tag: 'Signature',
    note: 'Balanced proportions with an extended living volume.',
    highlight: 'Corner-facing'
  },
  {
    title: '3 BED 3T (Large)',
    subtitle: 'UNIT - 1 | TOWER - 09',
    image: unit3BhkLarge,
    price: '₹3.1 Cr',
    saleArea: '2046 sft',
    carpetArea: '1303 sft',
    balconyArea: '211 sft',
    tower: '09',
    tag: 'Grand',
    note: 'A larger signature layout with a panoramic deck experience.',
    highlight: 'Panoramic deck'
  },
  {
    title: '4 BED 4T',
    subtitle: 'UNIT - 1 | TOWER - 12',
    image: unit4Bhk4T,
    price: '₹3.95 Cr',
    saleArea: '2561 sft',
    carpetArea: '1649 sft',
    balconyArea: '254 sft',
    tower: '12',
    tag: 'Estate',
    note: 'The most balanced four-bedroom configuration in the brochure.',
    highlight: 'Family premium'
  },
  {
    title: '4 BED 5T (Large)',
    subtitle: 'UNIT - 2 | TOWER - 07',
    image: unit4Bhk5TLarge,
    price: '₹4.45 Cr',
    saleArea: '2995 sft',
    carpetArea: '1958 sft',
    balconyArea: '255 sft',
    tower: '07',
    tag: 'Signature',
    note: 'The largest brochure plan with an expansive luxury profile.',
    highlight: 'Largest plan'
  }
];

const floorPlans: PlanCard[] = [
  {
    title: '3 BED 2T',
    subtitle: 'Architectural plan view',
    image: unit3Bhk2T,
    price: 'From ₹2.45 Cr',
    saleArea: '1454 sft',
    carpetArea: '965 sft',
    balconyArea: '86 sft',
    tower: '10',
    tag: 'Floor Plan',
    note: 'An efficient and premium family plan.',
    highlight: 'Optimised plan'
  },
  {
    title: '3 BED 3T (Medium)',
    subtitle: 'Architectural plan view',
    image: unit3BhkMedium,
    price: 'From ₹2.85 Cr',
    saleArea: '1896 sft',
    carpetArea: '1196 sft',
    balconyArea: '196 sft',
    tower: '08',
    tag: 'Floor Plan',
    note: 'A balanced luxury layout with wider living volumes.',
    highlight: 'Balanced layout'
  },
  {
    title: '4 BED 5T (Large)',
    subtitle: 'Architectural plan view',
    image: unit4Bhk5TLarge,
    price: 'From ₹4.45 Cr',
    saleArea: '2995 sft',
    carpetArea: '1958 sft',
    balconyArea: '255 sft',
    tower: '07',
    tag: 'Floor Plan',
    note: 'The most expansive residence in the brochure.',
    highlight: 'Grand residence'
  }
];

const toViewerImages = (plans: PlanCard[]): LightboxImage[] =>
  plans.map((plan) => ({
    src: plan.image,
    alt: plan.title,
    title: plan.title,
    caption: `${plan.subtitle} · ${plan.note}`,
    badge: `${plan.tag} · Tower ${plan.tower}`,
  }));

const dispatchLeadPopup = () => {
  window.dispatchEvent(new CustomEvent('district25:open-lead-popup'));
};

const planGridStyle = {
  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
} as React.CSSProperties;

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

      <div className="grid gap-8 md:gap-10 w-full mx-auto justify-items-center" style={planGridStyle}>
        {items.map((plan, idx) => (
          <motion.article
            key={plan.title + plan.subtitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: idx * 0.08, duration: 0.6 }}
            className="group flex h-full w-full max-w-98 flex-col overflow-hidden rounded-[36px] border border-[#d8cab8] bg-[#f7f2eb] shadow-[0_24px_80px_rgba(45,41,38,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_32px_96px_rgba(45,41,38,0.12)]"
          >
            <button
              type="button"
              onClick={() => onOpenPlan(idx)}
              className="relative block w-full overflow-hidden bg-[#efe7dc]"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={plan.image}
                  alt={plan.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02] filter blur-[6px]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#1f1b18]/14"></div>
                <div className="absolute inset-0 flex items-center justify-center px-6">
                  <div className="rounded-3xl border border-white/15 bg-[#1f1b18]/12 px-4 py-2 text-center text-[0.7rem] uppercase tracking-[0.35em] text-white shadow-[0_8px_28px_rgba(0,0,0,0.18)] backdrop-blur-md">
                    Request access to view
                  </div>
                </div>
              </div>
            </button>

            <div className="flex h-full flex-col px-7 py-7 text-left">
              <div className="space-y-5 flex-1">
                <div className="space-y-2">
                  <h3 className="text-2xl md:text-3xl font-serif text-[#1f1b18] tracking-[-0.03em] leading-tight">{plan.title}</h3>
                  <p className="text-[11px] uppercase tracking-[0.35em] text-[#3a342d] opacity-80">{plan.subtitle}</p>
                </div>

                <div className="rounded-3xl border border-[#e7dccb] bg-[#efe7dc] p-5 shadow-[0_18px_40px_rgba(45,41,38,0.06)]">
                  <div className="flex items-end justify-between gap-4 border-b border-[#d8cab8] pb-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.35em] text-[#8b6b3e] mb-1">Starting from</p>
                      <p className="text-2xl font-semibold text-[#1f1b18] leading-none">{plan.price}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] uppercase tracking-[0.35em] text-[#8b6b3e] mb-1">Tower</p>
                      <p className="text-xl font-serif text-[#1f1b18] leading-none">{plan.tower}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-4 text-left text-sm">
                    <div className="rounded-2xl bg-white px-3 py-3 border border-[#efe7dc]">
                      <p className="text-[10px] uppercase tracking-[0.32em] text-[#8b6b3e] mb-1">Sale Area</p>
                      <p className="font-semibold text-[#2d2926]">{plan.saleArea}</p>
                    </div>
                    <div className="rounded-2xl bg-white px-3 py-3 border border-[#efe7dc]">
                      <p className="text-[10px] uppercase tracking-[0.32em] text-[#8b6b3e] mb-1">Carpet Area</p>
                      <p className="font-semibold text-[#2d2926]">{plan.carpetArea}</p>
                    </div>
                    <div className="rounded-2xl bg-white px-3 py-3 border border-[#efe7dc]">
                      <p className="text-[10px] uppercase tracking-[0.32em] text-[#8b6b3e] mb-1">Balcony Area</p>
                      <p className="font-semibold text-[#2d2926]">{plan.balconyArea}</p>
                    </div>
                    <div className="rounded-2xl bg-white px-3 py-3 border border-[#efe7dc]">
                      <p className="text-[10px] uppercase tracking-[0.32em] text-[#8b6b3e] mb-1">Highlight</p>
                      <p className="font-semibold text-[#2d2926]">{plan.highlight}</p>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-[#3a342d] leading-relaxed min-h-12">{plan.note}</p>
              </div>

              <button
                type="button"
                onClick={dispatchLeadPopup}
                className="mt-6 inline-flex items-center justify-center rounded-[28px] border border-[#a07b49]/20 bg-[#1f1b18]/10 px-6 py-3 text-sm uppercase tracking-[0.35em] text-[#1f1b18] transition-all duration-500 hover:border-[#a07b49]/40 hover:bg-[#1f1b18]/15"
              >
                Request Access
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </>
  );
}

export function FloorPlans() {
  const requestPlanAccess = (_index: number) => {
    dispatchLeadPopup();
  };

  return (
    <section id="floorplans" className="py-28 bg-[#f5efe6] overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <PlanGridSection
          eyebrow="Unit Plans"
          title="EXCLUSIVE UNIT PLAN ACCESS"
          description="The floor plan visuals remain intentionally blurred and gated to maintain an exclusive luxury presentation. Request access to receive the full details."
          items={unitPlans}
          onOpenPlan={(index) => requestPlanAccess(index)}
        />

        <div className="my-20 flex items-center justify-center px-6">
          <div className="h-0.5 w-full max-w-md bg-linear-to-r from-[#8b6b3e]/15 via-transparent to-[#8b6b3e]/15 rounded-full"></div>
        </div>

        <PlanGridSection
          eyebrow="Floor Plans"
          title="GATED ARCHITECTURAL FLOOR PLANS"
          description="A cinematic editorial layout that preserves plan privacy while inviting premium enquiries for complete access."
          items={floorPlans}
          onOpenPlan={(index) => requestPlanAccess(index)}
        />
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
