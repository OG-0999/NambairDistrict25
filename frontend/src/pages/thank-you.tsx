import { useEffect, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'wouter';

const WHATSAPP_URL = 'https://wa.me/919164875465';
const REDIRECT_SECONDS = 7;

export default function ThankYouPage() {
  const [secondsLeft, setSecondsLeft] = useState(REDIRECT_SECONDS);

  useEffect(() => {
    window.scrollTo(0, 0);

    const intervalId = window.setInterval(() => {
      setSecondsLeft((currentSeconds) => Math.max(currentSeconds - 1, 0));
    }, 1000);

    const timeoutId = window.setTimeout(() => {
      window.location.href = WHATSAPP_URL;
    }, REDIRECT_SECONDS * 1000);

    return () => {
      window.clearInterval(intervalId);
      window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <iframe
        src="/thank-you.html"
        title="conversion-verification"
        aria-hidden="true"
        tabIndex={-1}
        style={{
          position: 'absolute',
          width: 0,
          height: 0,
          border: 0,
          opacity: 0,
          pointerEvents: 'none'
        }}
      />
      <div className="min-h-screen bg-[#f6f0e7] text-[#1f1b18] selection:bg-primary selection:text-white">
      <main className="mx-auto flex min-h-screen w-full max-w-6xl items-center px-4 py-10 sm:px-6 md:px-8 lg:px-10">
        <section className="relative w-full overflow-hidden rounded-4xl border border-[#e2d4bc] bg-[linear-gradient(180deg,rgba(255,252,247,0.98),rgba(246,240,231,0.98))] px-5 py-10 shadow-[0_24px_90px_rgba(62,44,18,0.08)] sm:px-8 sm:py-12 md:px-12 md:py-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(198,166,106,0.14),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(198,166,106,0.08),transparent_32%)]" />
          <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-primary/25 bg-white/80 shadow-[0_18px_40px_rgba(198,166,106,0.16)] sm:h-28 sm:w-28">
              <CheckCircle2 className="h-14 w-14 text-primary sm:h-16 sm:w-16" strokeWidth={1.6} />
            </div>

            <p className="mb-4 text-[0.62rem] uppercase tracking-[0.55em] text-[#8a6f3f]">Request Received</p>
            <h1 className="max-w-3xl text-3xl font-serif leading-tight text-[#161311] sm:text-4xl md:text-6xl">
              Thank You For Your Interest
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-[#5b5145] sm:text-lg md:text-xl">
              Our relationship manager will contact you shortly with exclusive pricing, floor plans, and complete project details.
            </p>

            <div className="mt-10 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {[
                '100 Acre Township',
                '2.5 Lakh Sq Ft Clubhouse',
                'Sarjapur Road Location',
                'Early Phase 3 Pricing',
              ].map((highlight) => (
                <div
                  key={highlight}
                  className="rounded-2xl border border-[#eadfcb] bg-white/80 px-5 py-6 text-sm font-medium tracking-wide text-[#2e2720] shadow-[0_12px_30px_rgba(17,17,17,0.04)]"
                >
                  {highlight}
                </div>
              ))}
            </div>

            <div className="mt-10 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-primary/30 bg-[#1f1b18] px-6 py-3 text-sm font-medium tracking-[0.18em] text-[#f8f1e4] transition-colors hover:bg-[#2b241e]"
              >
                Back to Homepage
              </Link>
              <Link
                href="/#floor-plans"
                className="inline-flex items-center justify-center rounded-full border border-primary/30 bg-white px-6 py-3 text-sm font-medium tracking-[0.18em] text-[#1f1b18] transition-colors hover:border-primary/50 hover:bg-[#fffaf1]"
              >
                View Floor Plans
              </Link>
              <a
                href={WHATSAPP_URL}
                className="inline-flex items-center justify-center rounded-full border border-primary/40 bg-primary px-6 py-3 text-sm font-medium tracking-[0.18em] text-white transition-colors hover:bg-[#b48d45]"
              >
                WhatsApp Sales Team
              </a>
            </div>

            <p className="mt-10 text-sm text-[#6c604f]">
              Connecting you to our sales team in <span className="font-semibold text-[#1f1b18]">{secondsLeft}</span> seconds...
            </p>
          </div>
        </section>
      </main>
    </div>
    </>
  );
}
