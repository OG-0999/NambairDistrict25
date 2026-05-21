export type LeadPayload = {
  firstName: string;
  lastName: string;
  mobileNumber: string;
  email: string;
  preferredUnit?: string;
  message?: string;
};

export type LeadApiResponse = {
  success: boolean;
  lead?: unknown;
  emailSent?: boolean;
  message?: string;
};

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const API_BASE_URL = (import.meta.env.VITE_API_URL ?? 'http://localhost:5000').replace(/\/$/, '');

export const normalizePhone = (value: string) => {
  const digitsOnly = value.replace(/\D/g, '');
  if (digitsOnly.length <= 10) {
    return digitsOnly;
  }
  return digitsOnly.slice(-10);
};

export const isValidIndianPhone = (value: string) => {
  const normalized = normalizePhone(value);
  return /^[6-9]\d{9}$/.test(normalized);
};

export const validateLead = (payload: Partial<LeadPayload>) => {
  const errors: Partial<Record<keyof LeadPayload, string>> = {};

  if (!payload.firstName?.trim()) {
    errors.firstName = 'First name is required.';
  }

  if (!payload.lastName?.trim()) {
    errors.lastName = 'Last name is required.';
  }

  if (!payload.mobileNumber?.trim()) {
    errors.mobileNumber = 'Phone number is required.';
  } else if (!isValidIndianPhone(payload.mobileNumber)) {
    errors.mobileNumber = 'Enter a valid Indian mobile number.';
  }

  if (!payload.email?.trim()) {
    errors.email = 'Email address is required.';
  } else if (!EMAIL_REGEX.test(payload.email.trim())) {
    errors.email = 'Enter a valid email address.';
  }

  return errors;
};

export const splitFullName = (fullName: string) => {
  const parts = fullName.trim().split(/\s+/).filter(Boolean);
  const firstName = parts[0] ?? '';
  const lastName = parts.slice(1).join(' ');
  return { firstName, lastName };
};

export const submitLead = async (payload: LeadPayload): Promise<LeadApiResponse> => {
  console.log('Submitting lead payload:', payload);

  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), 8000);

  try {
    const response = await fetch(`${API_BASE_URL}/api/leads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    const data = await response.json().catch(() => null);
    console.log('Lead API response:', response.status, data);

    if (!response.ok) {
      throw new Error(data?.message ?? `Request failed with status ${response.status}`);
    }

    if (!data || data.success === false) {
      throw new Error(data?.message ?? 'Lead API returned an unexpected response.');
    }

    return data as LeadApiResponse;
  } finally {
    window.clearTimeout(timeoutId);
  }
};
