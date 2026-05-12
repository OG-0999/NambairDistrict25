import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Send, X } from 'lucide-react';

import { cn } from '@/lib/utils';

export type LightboxImage = {
  src: string;
  alt: string;
  title: string;
  caption?: string;
  badge?: string;
};

type ImageLightboxProps = {
  open: boolean;
  images: LightboxImage[];
  activeIndex: number;
  onActiveIndexChange: (index: number) => void;
  onOpenChange: (open: boolean) => void;
  onEnquire?: () => void;
  brochureHref?: string;
  brochureLabel?: string;
  minimal?: boolean;
};

const clampIndex = (index: number, total: number) => {
  if (total <= 0) return 0;
  return (index + total) % total;
};

export function ImageLightbox({
  open,
  images,
  activeIndex,
  onActiveIndexChange,
  onOpenChange,
  onEnquire,
  brochureHref,
  brochureLabel = 'Download Brochure',
  minimal = false,
}: ImageLightboxProps) {
  const touchStartX = React.useRef<number | null>(null);
  const activeImage = images[clampIndex(activeIndex, images.length)];

  const goPrev = React.useCallback(() => {
    onActiveIndexChange(clampIndex(activeIndex - 1, images.length));
  }, [activeIndex, images.length, onActiveIndexChange]);

  const goNext = React.useCallback(() => {
    onActiveIndexChange(clampIndex(activeIndex + 1, images.length));
  }, [activeIndex, images.length, onActiveIndexChange]);

  React.useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onOpenChange(false);
      }
      if (!minimal && event.key === 'ArrowLeft' && images.length > 1) {
        goPrev();
      }
      if (!minimal && event.key === 'ArrowRight' && images.length > 1) {
        goNext();
      }
    };

    const previousOverflow = window.document.body.style.overflow;
    window.document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [goNext, goPrev, images.length, minimal, onOpenChange, open]);

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) {
      return;
    }

    const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const deltaX = touchEndX - touchStartX.current;

    if (Math.abs(deltaX) > 44 && images.length > 1) {
      if (deltaX > 0) {
        goPrev();
      } else {
        goNext();
      }
    }

    touchStartX.current = null;
  };

  const handleEnquire = () => {
    if (onEnquire) {
      onEnquire();
      return;
    }

    window.dispatchEvent(new CustomEvent('district25:open-lead-popup'));
  };

  return (
    <AnimatePresence>
      {open && activeImage ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-260 flex items-center justify-center bg-[#111111]/76 px-4 py-6 backdrop-blur-lg"
          onClick={() => onOpenChange(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.97 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className={cn(
              'relative flex w-full max-w-6xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#12100d]/92 shadow-[0_35px_120px_rgba(0,0,0,0.55)]',
              minimal && 'max-w-5xl bg-transparent border-transparent shadow-none'
            )}
            onClick={(event) => event.stopPropagation()}
          >
            {!minimal ? (
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,169,106,0.12),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))] pointer-events-none"></div>
            ) : null}

            <div className={cn('relative flex items-center justify-between gap-4 text-white/90', minimal ? 'px-2 py-2' : 'border-b border-white/10 px-5 py-4 md:px-7 md:py-5')}>
              {!minimal ? (
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-[0.36em] text-white/55">
                    {activeImage.badge ?? 'Brochure Extract'}
                  </p>
                  <h3 className="mt-2 truncate text-lg md:text-2xl font-serif text-white">
                    {activeImage.title}
                  </h3>
                  {activeImage.caption ? (
                    <p className="mt-1 max-w-3xl text-sm md:text-base text-white/70">
                      {activeImage.caption}
                    </p>
                  ) : null}
                </div>
              ) : <div />}

              <button
                type="button"
                onClick={() => onOpenChange(false)}
                aria-label="Close image viewer"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-[#111111]/45 text-white/90 transition-all duration-300 hover:border-primary/50 hover:bg-[#111111]/62 hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            <div className={cn('relative flex flex-1 items-center justify-center', minimal ? 'px-1 py-2 md:px-2 md:py-3' : 'px-3 py-4 md:px-6 md:py-6')}>
              {!minimal ? (
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label="Previous image"
                  className={cn(
                    'absolute left-3 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/8 text-white/85 transition-all duration-300 hover:border-primary/50 hover:bg-white/14 hover:text-white md:flex',
                    images.length <= 1 && 'hidden'
                  )}
                >
                  <ArrowLeft size={18} />
                </button>
              ) : null}

              <div
                className="relative flex w-full items-center justify-center"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <motion.img
                  key={activeImage.src}
                  initial={{ opacity: 0, scale: 0.96, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  src={activeImage.src}
                  alt={activeImage.alt}
                  className={cn(
                    'w-auto max-w-full border border-white/10 bg-[#f5f2ec] object-contain shadow-[0_20px_60px_rgba(0,0,0,0.35)]',
                    minimal ? 'max-h-[66vh] rounded-2xl md:max-h-[72vh]' : 'max-h-[72vh] rounded-3xl md:max-h-[76vh]'
                  )}
                  loading="eager"
                />
              </div>

              {!minimal ? (
                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Next image"
                  className={cn(
                    'absolute right-3 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/8 text-white/85 transition-all duration-300 hover:border-primary/50 hover:bg-white/14 hover:text-white md:flex',
                    images.length <= 1 && 'hidden'
                  )}
                >
                  <ArrowRight size={18} />
                </button>
              ) : null}
            </div>

            {!minimal && images.length > 1 ? (
              <div className="flex items-center justify-center gap-2 px-6 pb-2">
                {images.map((image, index) => (
                  <button
                    key={image.src + index}
                    type="button"
                    onClick={() => onActiveIndexChange(index)}
                    aria-label={`View image ${index + 1}`}
                    className={cn(
                      'h-2.5 rounded-full transition-all duration-300',
                      index === clampIndex(activeIndex, images.length)
                        ? 'w-10 bg-primary'
                        : 'w-2.5 bg-white/30 hover:bg-white/50'
                    )}
                  />
                ))}
              </div>
            ) : null}

            {!minimal ? (
              <div className="flex flex-col gap-3 border-t border-white/10 px-5 py-4 md:flex-row md:items-center md:justify-between md:px-7 md:py-5">
                <div className="text-xs uppercase tracking-[0.32em] text-white/60">
                  Swipe or use arrows to browse
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  {brochureHref ? (
                    <a
                      href={brochureHref}
                      download
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/8 px-5 py-3 text-xs uppercase tracking-[0.28em] text-white/85 transition-all duration-300 hover:border-primary/50 hover:bg-white/14 hover:text-white"
                    >
                      <span>{brochureLabel}</span>
                    </a>
                  ) : null}
                  <button
                    type="button"
                    onClick={handleEnquire}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/50 bg-primary px-5 py-3 text-xs uppercase tracking-[0.28em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(200,169,106,0.28)]"
                  >
                    <Send size={14} />
                    <span>Enquire Now</span>
                  </button>
                </div>
              </div>
            ) : null}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
