import React, { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { LeadPayload, normalizePhone, submitLead, validateLead } from "@/lib/lead";

type LeadErrors = Partial<Record<keyof LeadPayload, string>>;

type FieldConfig = {
  name: keyof LeadPayload;
  label: string;
  type: "text" | "email" | "tel";
  autoComplete: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
};

const STORAGE_KEY = "district25-lead-popup-seen";
const LEAD_POPUP_EVENT = "district25:open-lead-popup";

type LeadPopupSourceDetail = {
  source?: string;
};

const initialValues: LeadPayload = {
  firstName: "",
  lastName: "",
  mobileNumber: "",
  email: "",
};

export function openLeadPopup(source?: string) {
  window.dispatchEvent(new CustomEvent<LeadPopupSourceDetail>(LEAD_POPUP_EVENT, { detail: { source } }));
}

export function InquiryConsentBlock() {
  return (
    <div className="mt-6 rounded-2xl border border-[#e8dcc8] bg-[linear-gradient(to_bottom,rgba(255,255,255,0.96),rgba(248,243,235,0.96))] px-4 py-4 shadow-[0_10px_26px_rgba(17,17,17,0.05)] sm:px-5 sm:py-5">
      <label className="flex items-start gap-3 text-sm leading-relaxed text-[#3a332b]">
        <span className="mt-0.5 relative inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-[6px] border border-[#c6a66a] bg-[#111111] shadow-[0_0_0_1px_rgba(198,166,106,0.16)]">
          <input
            type="checkbox"
            checked
            readOnly
            disabled
            aria-label="Consent is required"
            className="absolute inset-0 h-full w-full cursor-not-allowed opacity-0"
          />
          <svg aria-hidden="true" viewBox="0 0 20 20" className="h-3.5 w-3.5 text-[#f5f1e8]">
            <path
              fill="currentColor"
              d="M7.6 13.2 4.5 10.1l-1.4 1.4 4.5 4.5 8.8-8.8-1.4-1.4z"
            />
          </svg>
        </span>
        <span className="text-[0.92rem] leading-7 text-[#3f372d]">
          I authorize the website representatives to contact me via call, SMS, WhatsApp, or email regarding this project. I agree to the{' '}
          <Link href="/privacy-policy" className="font-medium text-[#2f6fed] underline decoration-transparent underline-offset-4 transition-colors duration-300 hover:decoration-current">
            Privacy Policy
          </Link>{' '}
          and{' '}
          <Link href="/terms-and-conditions" className="font-medium text-[#2f6fed] underline decoration-transparent underline-offset-4 transition-colors duration-300 hover:decoration-current">
            Terms &amp; Conditions
          </Link>.
        </span>
      </label>
      <p className="mt-3 text-[0.7rem] uppercase tracking-[0.28em] text-[#8a7c63]">
        Consent is pre-approved and required for every enquiry.
      </p>
    </div>
  );
}

export function MobileStickyInquiryCTA() {
  const openInquiry = () => {
    openLeadPopup();
  };

  return (
    <motion.button
      type="button"
      onClick={openInquiry}
      aria-label="Open enquiry popup"
      animate={{ scale: [1, 1.015, 1] }}
      transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
      className={cn(
        "fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] left-1/2 z-50 -translate-x-1/2 md:hidden",
        "rounded-full border border-[#c6a66a]/20 bg-[#111111] px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#f5f1e8]",
        "shadow-[0_18px_40px_rgba(0,0,0,0.32),0_0_0_1px_rgba(198,166,106,0.12),0_0_26px_rgba(198,166,106,0.35)]",
        "transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]",
      )}
    >
      Enquire Now
    </motion.button>
  );
}

export function ScrollLeadPopup() {
  const [, setLocation] = useLocation();
  const [hasSeen, setHasSeen] = useState<boolean | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [values, setValues] = useState<LeadPayload>(initialValues);
  const [errors, setErrors] = useState<LeadErrors>({});
  const [sourceLabel, setSourceLabel] = useState<string | null>(null);

  const fields = useMemo<FieldConfig[]>(
    () => [
      { name: "firstName", label: "First Name", type: "text", autoComplete: "given-name" },
      { name: "lastName", label: "Last Name", type: "text", autoComplete: "family-name" },
      {
        name: "mobileNumber",
        label: "Phone Number",
        type: "tel",
        autoComplete: "tel",
        inputMode: "numeric",
      },
      { name: "email", label: "Email Address", type: "email", autoComplete: "email" },
    ],
    [],
  );

  const closePopup = useCallback(() => {
    setIsOpen(false);
    setErrors({});
    setSourceLabel(null);
    setValues(initialValues);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const seen = window.sessionStorage.getItem(STORAGE_KEY) === "true";
    setHasSeen(seen);
  }, []);

  useEffect(() => {
    const handleOpenPopup = (event: Event) => {
      const source = (event as CustomEvent<LeadPopupSourceDetail>).detail?.source?.trim();

      setSourceLabel(source ?? null);
      setHasSeen(true);
      setIsOpen(true);

      if (typeof window !== "undefined") {
        window.sessionStorage.setItem(STORAGE_KEY, "true");
      }
    };

    window.addEventListener(LEAD_POPUP_EVENT, handleOpenPopup);
    return () => window.removeEventListener(LEAD_POPUP_EVENT, handleOpenPopup);
  }, []);

  useEffect(() => {
    if (hasSeen !== false) {
      return;
    }

    const handleScroll = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop;
      const scrollHeight = doc.scrollHeight - doc.clientHeight;
      if (scrollHeight <= 0) {
        return;
      }

      const progress = scrollTop / scrollHeight;
      if (progress >= 0.3) {
        setIsOpen(true);
        setHasSeen(true);
        window.sessionStorage.setItem(STORAGE_KEY, "true");
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasSeen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePopup();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closePopup, isOpen]);

  const handleChange = (name: keyof LeadPayload) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const nextValue = event.target.value;
    setValues((prev) => ({ ...prev, [name]: nextValue }));

    if (errors[name]) {
      setErrors((prev) => {
        const nextErrors = { ...prev };
        delete nextErrors[name];
        return nextErrors;
      });
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validateLead(values);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    const payload: LeadPayload = {
      firstName: values.firstName.trim(),
      lastName: values.lastName.trim(),
      mobileNumber: normalizePhone(values.mobileNumber),
      email: values.email.trim().toLowerCase(),
    };

    submitLead(payload);
    window.location.replace('/thank-you');
  };

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      closePopup();
    }
  };

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="fixed inset-0 z-200 flex items-center justify-center bg-[#111111]/15 px-3 py-3 sm:px-4 sm:py-8 backdrop-blur-md"
          onClick={handleOverlayClick}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="lead-popup-title"
            className="relative w-full max-w-2xl max-h-[calc(100dvh-1.5rem)] overflow-y-auto overflow-x-hidden rounded-3xl border border-[#E6E6E6] bg-white/90 p-4 shadow-[0_30px_80px_rgba(17,17,17,0.15)] backdrop-blur-2xl sm:max-h-[calc(100vh-4rem)] sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-primary/10 via-white/70 to-white"></div>
            <div className="pointer-events-none absolute -top-32 right-10 h-64 w-64 rounded-full bg-primary/15 blur-[120px]"></div>

            <button
              type="button"
              onClick={closePopup}
              aria-label="Close lead popup"
              className="sticky top-0 z-20 ml-auto flex h-10 w-10 items-center justify-center rounded-full border border-[#E6E6E6] bg-white/90 text-[#777777] shadow-[0_8px_18px_rgba(17,17,17,0.06)] transition-colors hover:border-primary/50 hover:text-primary sm:absolute sm:right-4 sm:top-4 sm:bg-transparent sm:shadow-none"
            >
              <X size={18} />
            </button>

            <div className="relative z-10">
              <div className="space-y-2 sm:space-y-3 pr-10 sm:pr-0">
                <p className="text-[0.6rem] uppercase tracking-[0.5em] text-primary/80">Signature Access</p>
                <h3 id="lead-popup-title" className="text-2xl md:text-3xl font-serif text-[#111111]">
                  Get Complete Project Details
                </h3>
                <p className="text-sm text-[#666666]">
                  Share your details to receive priority pricing, layouts, and launch updates.
                </p>
                {sourceLabel ? (
                  <p className="inline-flex rounded-full border border-primary/20 bg-primary/8 px-3 py-1 text-[0.65rem] uppercase tracking-[0.28em] text-[#6f5f49]">
                    Source: {sourceLabel}
                  </p>
                ) : null}
              </div>

              <form className="mt-5 sm:mt-8" noValidate onSubmit={handleSubmit}>

                <div className="grid grid-cols-1 gap-3 md:grid-cols-2 sm:gap-4">
                  {fields.map((field) => {
                    const fieldId = `lead-popup-${field.name}`;
                    const error = errors[field.name];

                    return (
                      <motion.div
                        key={fieldId}
                        animate={error ? { x: [0, -6, 6, -4, 0] } : { x: 0 }}
                        transition={{ duration: 0.35 }}
                        className="relative"
                      >
                        <input
                          id={fieldId}
                          name={field.name}
                          type={field.type}
                          value={values[field.name]}
                          onChange={handleChange(field.name)}
                          placeholder={field.label}
                          autoComplete={field.autoComplete}
                          inputMode={field.inputMode}
                          aria-invalid={Boolean(error)}
                          aria-describedby={error ? `${fieldId}-error` : undefined}
                          className={cn(
                            "w-full border border-[#E6E6E6] bg-white/70 px-4 pb-2.5 pt-4.5 text-sm text-[#111111]",
                            "placeholder:text-[0.65rem] placeholder:text-[#9a948a]",
                            "transition-all duration-300 focus:border-primary focus:outline-none",
                            "focus:shadow-[0_0_20px_rgba(200,169,106,0.25)]",
                            error ? "border-red-400/70" : "",
                          )}
                        />
                        <AnimatePresence>
                          {error ? (
                            <motion.p
                              id={`${fieldId}-error`}
                              initial={{ opacity: 0, y: 6 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -4 }}
                              className="mt-2 text-xs text-red-600"
                            >
                              {error}
                            </motion.p>
                          ) : null}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>

                <InquiryConsentBlock />

                <div className="mt-5 sm:mt-6 flex flex-col items-center gap-3">
                  <button
                    type="submit"
                    className={cn(
                      "w-full max-w-65 border border-primary/50 bg-white px-6 py-2.5 text-xs uppercase tracking-[0.35em] text-[#111111]",
                      "transition-all duration-500 hover:bg-primary/15 hover:shadow-[0_12px_30px_rgba(200,169,106,0.25)]",
                    )}
                  >
                    Submit Inquiry
                  </button>

                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
