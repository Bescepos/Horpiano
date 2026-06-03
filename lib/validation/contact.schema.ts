import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name.").max(120),
  email: z.string().email("Please enter a valid email address."),
  subject: z.string().max(160).optional().or(z.literal("")),
  message: z
    .string()
    .min(10, "Please share a few more details (at least 10 characters).")
    .max(4000),
  // Honeypot — must remain empty.
  company: z.string().max(0).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;
