import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export function Location() {
  const highlights = [
    { label: 'Metro Connectivity', value: 'Upcoming Metro Connectivity' },
    { label: 'IT Access', value: 'Electronic City Access' },
    { label: 'Corridor Reach', value: 'Sarjapur Corridor' },
    { label: 'Business Hub', value: 'Wipro SEZ' },
    { label: 'City Links', value: 'Whitefield Connectivity' },
    { label: 'Highway Reach', value: 'Hosur Road Reachability' }
  ];

  const exactMapsHref = 'https://search.brave.com/search?q=nambair-district25+maps&view=full&map_src=i&loc_id=loc47J4I2AXJX4UUAPPIP3ZQO32TIAA5LE6EAAAAAAA%3D&bbox=77.247%2C12.637%2C78.223%2C13.112&summary=1&conversation=091426feb1cdb9cacd0427e3a9b72456ab01';
  const iframeSrc = 'https://www.google.com/maps?q=Nambiar+District+25,+Chandapura+Dommasandra+Road,+Dommasandra,+Bengaluru,+Karnataka+562125,+India&z=16&output=embed';

  return (
    <section id="location" className="relative overflow-hidden bg-[#f6f1ea] py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-[#c6a66a]/10 blur-[120px]" />
        <div className="absolute -bottom-28 -right-28 h-80 w-80 rounded-full bg-black/10 blur-[140px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-10 max-w-4xl"
        >
          <span className="mb-3 block text-xs font-medium uppercase tracking-[0.32em] text-[#8a7c63]">Location Advantage</span>
          <h2 className="text-4xl md:text-5xl font-serif tracking-tight leading-tight text-[#1f1a17]">
            Strategically Located At Bengaluru&apos;s Fastest Growing Corridor
          </h2>
          <p className="mt-4 max-w-3xl text-base md:text-lg font-light leading-relaxed text-[#4c4339]">
            Nambiar District 25, Chandapura Dommasandra Road, Dommasandra, Bengaluru, Karnataka 562125, India.
          </p>
        </motion.div>

        <div className="grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="overflow-hidden rounded-3xl border border-[rgba(198,166,106,0.14)] bg-[#f5efe6] shadow-[0_24px_70px_rgba(17,17,17,0.10)]"
          >
            <iframe
              title="Nambiar District 25 Location"
              src={iframeSrc}
              className="block h-80 w-full border-0 md:h-125"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <div className="rounded-3xl border border-[#e4dbca] bg-white/90 p-6 md:p-7 shadow-[0_12px_36px_rgba(17,17,17,0.08)] backdrop-blur-sm">
              <h3 className="mb-3 font-serif text-2xl md:text-3xl tracking-tight text-[#1f1a17]">
                Address Details
              </h3>
              <p className="mb-5 text-base leading-relaxed text-[#4c4339]">
                Nambiar District 25, Chandapura Dommasandra Road, Dommasandra, Bengaluru, Karnataka 562125.
              </p>
              <a
                href={exactMapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full border border-[rgba(198,166,106,0.4)] bg-[#111111] px-6 text-sm font-semibold uppercase tracking-[0.22em] text-[#f5f1e8] transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(198,166,106,0.65)] hover:shadow-[0_14px_30px_rgba(0,0,0,0.24),0_0_22px_rgba(198,166,106,0.18)]"
              >
                Open In Maps
              </a>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {highlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="rounded-[18px] border border-[#e4dbca] bg-[#fcfaf7] p-4 shadow-[0_8px_24px_rgba(17,17,17,0.05)]"
                >
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#8A7C63]">{item.label}</p>
                  <p className="text-sm font-medium leading-tight text-[#1f1a17]">{item.value}</p>
                </motion.div>
              ))}
            </div>

            <div className="rounded-3xl border border-[rgba(198,166,106,0.18)] bg-[linear-gradient(to_bottom,rgba(255,255,255,0.86),rgba(248,243,235,0.92))] px-6 py-5 shadow-[0_12px_32px_rgba(200,169,106,0.08)]">
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#8A7C63]">Project Address</p>
              <p className="text-base font-medium leading-relaxed text-[#1f1a17]">
                Nambiar District 25, Chandapura Dommasandra Road, Dommasandra, Bengaluru, Karnataka 562125
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
