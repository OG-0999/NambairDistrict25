import React, { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
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

const initialValues: LeadPayload = {
  firstName: "",
  lastName: "",
  mobileNumber: "",
  email: "",
};

export function MobileStickyInquiryCTA() {
  const openInquiry = () => {
    window.dispatchEvent(new CustomEvent("district25:open-lead-popup"));
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
  const [hasSeen, setHasSeen] = useState<boolean | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [values, setValues] = useState<LeadPayload>(initialValues);
  const [errors, setErrors] = useState<LeadErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [submitError, setSubmitError] = useState<string | null>(null);

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
    setStatus("idle");
    setErrors({});
    setSubmitError(null);
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
    const handleOpenPopup = () => {
      setHasSeen(true);
      setIsOpen(true);

      if (typeof window !== "undefined") {
        window.sessionStorage.setItem(STORAGE_KEY, "true");
      }
    };

    window.addEventListener("district25:open-lead-popup", handleOpenPopup);
    return () => window.removeEventListener("district25:open-lead-popup", handleOpenPopup);
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

    if (status === "submitting") {
      return;
    }

    const nextErrors = validateLead(values);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("idle");
      return;
    }

    setStatus("submitting");
    setSubmitError(null);

    const payload: LeadPayload = {
      firstName: values.firstName.trim(),
      lastName: values.lastName.trim(),
      mobileNumber: normalizePhone(values.mobileNumber),
      email: values.email.trim().toLowerCase(),
    };

    try {
      const result = await submitLead(payload);
      setErrors({});
      setValues(initialValues);

      if (result.emailSent === false) {
        setStatus("idle");
        setSubmitError(result.message ?? "Lead saved but email notification failed.");
        return;
      }

      setStatus("success");
    } catch (error) {
      setStatus("idle");
      setSubmitError(error instanceof Error ? error.message : "Something went wrong.");
    }
  };

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      closePopup();
    }
  };

  const isLocked = status !== "idle";

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="fixed inset-0 z-200 flex items-center justify-center bg-[#111111]/15 px-4 py-8 backdrop-blur-md"
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
            className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-[#E6E6E6] bg-white/90 p-6 sm:p-8 shadow-[0_30px_80px_rgba(17,17,17,0.15)] backdrop-blur-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-primary/10 via-white/70 to-white"></div>
            <div className="pointer-events-none absolute -top-32 right-10 h-64 w-64 rounded-full bg-primary/15 blur-[120px]"></div>

            <button
              type="button"
              onClick={closePopup}
              aria-label="Close lead popup"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center border border-[#E6E6E6] text-[#777777] transition-colors hover:border-primary/50 hover:text-primary"
            >
              <X size={18} />
            </button>

            <div className="relative z-10">
              <div className="space-y-3">
                <p className="text-[0.6rem] uppercase tracking-[0.5em] text-primary/80">Signature Access</p>
                <h3 id="lead-popup-title" className="text-2xl md:text-3xl font-serif text-[#111111]">
                  Get Complete Project Details
                </h3>
                <p className="text-sm text-[#666666]">
                  Share your details to receive priority pricing, layouts, and launch updates.
                </p>
              </div>

              <form className="mt-8" noValidate onSubmit={handleSubmit}>
                <AnimatePresence>
                  {submitError ? (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      role="status"
                      aria-live="polite"
                      className="mb-4 border border-red-200 bg-red-50 px-4 py-3 text-center text-xs uppercase tracking-[0.28em] text-red-700"
                    >
                      {submitError}
                    </motion.div>
                  ) : null}
                </AnimatePresence>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                          placeholder=" "
                          autoComplete={field.autoComplete}
                          inputMode={field.inputMode}
                          aria-invalid={Boolean(error)}
                          aria-describedby={error ? `${fieldId}-error` : undefined}
                          disabled={isLocked}
                          className={cn(
                            "peer w-full border border-[#E6E6E6] bg-white/70 px-4 pb-3 pt-5 text-sm text-[#111111]",
                            "transition-all duration-300 focus:border-primary focus:outline-none",
                            "focus:shadow-[0_0_20px_rgba(200,169,106,0.25)]",
                            error ? "border-red-400/70" : "",
                            isLocked ? "opacity-70" : "",
                          )}
                        />
                        <label
                          htmlFor={fieldId}
                          className={cn(
                            "pointer-events-none absolute left-4 top-4 text-[0.65rem] uppercase tracking-[0.3em]",
                            "text-[#777777] transition-all duration-300",
                            "peer-placeholder-shown:top-4 peer-placeholder-shown:text-[0.7rem] peer-placeholder-shown:text-[#999999]",
                            "peer-focus:-top-2 peer-focus:text-[0.55rem] peer-focus:text-primary",
                            "peer-focus:tracking-[0.35em]",
                            "bg-white px-1",
                            error ? "text-red-600" : "",
                          )}
                        >
                          {field.label}
                        </label>
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

                <div className="mt-6 rounded-2xl border border-[#e8dcc8] bg-[#fbf8f1] px-4 py-4">
                  <label className="flex items-start gap-3 text-sm leading-relaxed text-[#3a332b]">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="mt-1 h-4 w-4 rounded border-[#c6a66a] text-[#111111] accent-[#111111]"
                    />
                    <span>
                      I authorize the team to contact me via call, SMS, WhatsApp or email regarding this project.
                    </span>
                  </label>

                  <p className="mt-3 text-xs leading-relaxed text-[#5b5144]">
                    By proceeding, you agree to the <a href="/privacy-policy" className="text-[#2f6fed] transition-all duration-300 hover:underline">Privacy Policy</a> and <a href="/terms-and-conditions" className="text-[#2f6fed] transition-all duration-300 hover:underline">Terms &amp; Conditions</a>.
                  </p>
                </div>

                <div className="mt-6 flex flex-col items-center gap-3">
                  <button
                    type="submit"
                    disabled={isLocked}
                    className={cn(
                      "w-full max-w-65 border border-primary/50 bg-white px-6 py-3 text-xs uppercase tracking-[0.35em] text-[#111111]",
                      "transition-all duration-500 hover:bg-primary/15 hover:shadow-[0_12px_30px_rgba(200,169,106,0.25)]",
                      isLocked ? "cursor-not-allowed opacity-70 hover:bg-white" : "",
                    )}
                  >
                    {status === "submitting" ? "Submitting..." : "Submit Inquiry"}
                  </button>

                  <AnimatePresence>
                    {status === "success" ? (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        role="status"
                        aria-live="polite"
                        className="w-full max-w-90 border border-primary/30 bg-primary/10 px-4 py-3 text-center text-xs uppercase tracking-[0.35em] text-[#111111]"
                      >
                        Thank you. We will reach you shortly.
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
