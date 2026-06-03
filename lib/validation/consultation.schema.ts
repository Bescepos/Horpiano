import { z } from "zod";

export const consultationSchema = z.object({
  name: z.string().min(2, "Please enter your name.").max(120),
  email: z.string().email("Please enter a valid email address."),
  bookTitle: z.string().max(200).optional().or(z.literal("")),
  genre: z.string().max(120).optional().or(z.literal("")),
  service: z.string().min(1, "Please select the service you need."),
  description: z
    .string()
    .min(10, "Please describe your project (at least 10 characters).")
    .max(4000),
  // Honeypot — must remain empty.
  company: z.string().max(0).optional().or(z.literal("")),
});

export type ConsultationInput = z.infer<typeof consultationSchema>;
