import { z } from "zod";

export const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  // Honeypot — must remain empty.
  company: z.string().max(0).optional().or(z.literal("")),
});

export type NewsletterInput = z.infer<typeof newsletterSchema>;
