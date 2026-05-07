import React, { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

type LeadPayload = {
  firstName: string;
  lastName: string;
  mobileNumber: string;
  email: string;
};

type LeadErrors = Partial<Record<keyof LeadPayload, string>>;

type FieldConfig = {
  name: keyof LeadPayload;
  label: string;
  type: "text" | "email" | "tel";
  autoComplete: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
};

const STORAGE_KEY = "district25-lead-popup-seen";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const normalizePhone = (value: string) => {
  const digitsOnly = value.replace(/\D/g, "");
  if (digitsOnly.length <= 10) {
    return digitsOnly;
  }
  return digitsOnly.slice(-10);
};

const isValidIndianPhone = (value: string) => {
  const normalized = normalizePhone(value);
  return /^[6-9]\d{9}$/.test(normalized);
};

const initialValues: LeadPayload = {
  firstName: "",
  lastName: "",
  mobileNumber: "",
  email: "",
};

const submitLead = async (payload: LeadPayload) => {
  try {
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("Lead API unavailable.");
    }
  } catch {
    return;
  }
};

export function ScrollLeadPopup() {
  const [hasSeen, setHasSeen] = useState<boolean | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [values, setValues] = useState<LeadPayload>(initialValues);
  const [errors, setErrors] = useState<LeadErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

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

  const validate = (nextValues: LeadPayload) => {
    const nextErrors: LeadErrors = {};

    if (!nextValues.firstName.trim()) {
      nextErrors.firstName = "First name is required.";
    }

    if (!nextValues.lastName.trim()) {
      nextErrors.lastName = "Last name is required.";
    }

    if (!nextValues.mobileNumber.trim()) {
      nextErrors.mobileNumber = "Phone number is required.";
    } else if (!isValidIndianPhone(nextValues.mobileNumber)) {
      nextErrors.mobileNumber = "Enter a valid Indian mobile number.";
    }

    if (!nextValues.email.trim()) {
      nextErrors.email = "Email address is required.";
    } else if (!EMAIL_REGEX.test(nextValues.email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }

    return nextErrors;
  };

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

    const nextErrors = validate(values);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("idle");
      return;
    }

    setStatus("submitting");

    const payload: LeadPayload = {
      firstName: values.firstName.trim(),
      lastName: values.lastName.trim(),
      mobileNumber: normalizePhone(values.mobileNumber),
      email: values.email.trim().toLowerCase(),
    };

    await submitLead(payload);
    setStatus("success");
    setErrors({});
    setValues(initialValues);
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
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/75 px-4 py-8 backdrop-blur-md"
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
            className="relative w-full max-w-2xl overflow-hidden border border-primary/30 bg-black/70 p-6 sm:p-8 shadow-[0_45px_140px_rgba(0,0,0,0.7)] backdrop-blur-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-black/60"></div>
            <div className="pointer-events-none absolute -top-32 right-10 h-64 w-64 rounded-full bg-primary/15 blur-[120px]"></div>

            <button
              type="button"
              onClick={closePopup}
              aria-label="Close lead popup"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center border border-white/10 text-white/70 transition-colors hover:border-primary/50 hover:text-primary"
            >
              <X size={18} />
            </button>

            <div className="relative z-10">
              <div className="space-y-3">
                <p className="text-[0.6rem] uppercase tracking-[0.5em] text-primary/80">Signature Access</p>
                <h3 id="lead-popup-title" className="text-2xl md:text-3xl font-serif text-white">
                  Get Complete Project Details
                </h3>
                <p className="text-sm text-white/60">
                  Share your details to receive priority pricing, layouts, and launch updates.
                </p>
              </div>

              <form className="mt-8" noValidate onSubmit={handleSubmit}>
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
                            "peer w-full border border-white/15 bg-white/5 px-4 pb-3 pt-5 text-sm text-white",
                            "transition-all duration-300 focus:border-primary focus:outline-none",
                            "focus:shadow-[0_0_20px_rgba(201,169,110,0.35)]",
                            error ? "border-red-400/70" : "",
                            isLocked ? "opacity-70" : "",
                          )}
                        />
                        <label
                          htmlFor={fieldId}
                          className={cn(
                            "pointer-events-none absolute left-4 top-4 text-[0.65rem] uppercase tracking-[0.3em]",
                            "text-white/50 transition-all duration-300",
                            "peer-placeholder-shown:top-4 peer-placeholder-shown:text-[0.7rem] peer-placeholder-shown:text-white/40",
                            "peer-focus:-top-2 peer-focus:text-[0.55rem] peer-focus:text-primary",
                            "peer-focus:tracking-[0.35em]",
                            "bg-black/70 px-1",
                            error ? "text-red-200" : "",
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
                              className="mt-2 text-xs text-red-200/90"
                            >
                              {error}
                            </motion.p>
                          ) : null}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="mt-6 flex flex-col items-center gap-3">
                  <button
                    type="submit"
                    disabled={isLocked}
                    className={cn(
                      "w-full max-w-[260px] border border-primary/50 bg-primary/10 px-6 py-3 text-xs uppercase tracking-[0.35em] text-primary",
                      "transition-all duration-500 hover:bg-primary hover:text-black hover:shadow-[0_0_30px_rgba(201,169,110,0.55)]",
                      isLocked ? "cursor-not-allowed opacity-70 hover:bg-primary/10 hover:text-primary" : "",
                    )}
                  >
                    {status === "submitting" ? "Submitting" : "Submit Inquiry"}
                  </button>

                  <AnimatePresence>
                    {status === "success" ? (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="w-full max-w-[360px] border border-primary/40 bg-primary/10 px-4 py-3 text-center text-xs uppercase tracking-[0.35em] text-primary"
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
