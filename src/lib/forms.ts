import { z } from "zod";

export const SERVICE_OPTIONS = [
  "Social media management",
  "Digital advertising (Meta / TikTok)",
  "Brand strategy",
  "Content creation",
  "Local SEO optimisation",
  "Music video production",
  "4K DJ mixes for TV & streaming",
  "Music advertising & paid media",
  "Album rollout & single launch",
  "PR & activations",
  "Growth strategy",
] as const;

export const INTEREST_OPTIONS = [
  "Branding",
  "Social media",
  "Meta ads",
  "TikTok ads",
  "Reels / content",
  "SEO & Google Ads",
  "PR & activations",
  "Growth strategy",
] as const;

const hasNoControlCharacters = (value: string) => !/[\u0000-\u001F\u007F]/.test(value);

export const leadSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(2, "Please enter your name")
      .max(100)
      .refine(hasNoControlCharacters, "Please enter a valid name"),
    business: z
      .string()
      .trim()
      .max(120)
      .refine(hasNoControlCharacters, "Please enter a valid business name")
      .optional()
      .transform((value) => value || undefined),
    email: z
      .string()
      .trim()
      .email("Please enter a valid email address")
      .max(255)
      .refine(hasNoControlCharacters, "Please enter a valid email address"),
    phone: z
      .string()
      .trim()
      .min(7, "Please enter a valid phone number")
      .max(25)
      .regex(/^[0-9+()\-\s]+$/, "Please enter a valid phone number"),
    service: z.enum(SERVICE_OPTIONS),
    interests: z
      .array(z.enum(INTEREST_OPTIONS))
      .max(INTEREST_OPTIONS.length)
      .refine((values) => new Set(values).size === values.length)
      .default([]),
    message: z
      .string()
      .trim()
      .max(2000)
      .refine(hasNoControlCharacters, "Please remove unsupported characters")
      .optional()
      .transform((value) => value || undefined),
    botcheck: z.string().trim().max(120).optional(),
  })
  .strict();
