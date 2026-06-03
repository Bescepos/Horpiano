# emilybyron

A premium, production-ready marketing website for **emilybyron** — a professional author
services and publishing-support brand. Built with Next.js (App Router), TypeScript, Tailwind
CSS, and Framer Motion.

## Features

- Elegant, responsive, mobile-first design with a deep navy + rich gold palette
- Smooth, accessible animations (scroll reveals, staggered grids, animated counters,
  testimonial carousel, scroll-driven author-journey timeline, page transitions) — all
  respecting `prefers-reduced-motion`
- Full page set: Home, Services overview, individual service pages, About, Success Stories,
  Resources hub (search + filters) with article pages, Consultation, FAQ, Contact
- SEO-ready: per-page metadata, Open Graph image, sitemap, robots, JSON-LD structured data
- Accessible: semantic landmarks, ARIA for interactive components, visible focus states,
  WCAG-aware color contrast
- Self-contained imagery (SVG + gradient art), self-hosted fonts, optimized for performance
- Contact / consultation / newsletter forms with client + server validation and a `mailto:`
  fallback

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — start the development server
- `npm run build` — create a production build
- `npm run start` — serve the production build
- `npm run lint` — run linting

## Configuration

- Site name, URL, contact email, navigation, and social links live in
  [`lib/seo/siteConfig.ts`](lib/seo/siteConfig.ts). Update `url` to your production domain.
- Content (services, testimonials, success stories, resources, FAQs, stats) lives in the
  [`data/`](data/) directory as typed TypeScript.
- Forms post to API routes under [`app/api/`](app/api/). To enable real email delivery,
  implement the provider call in [`lib/email/send.ts`](lib/email/send.ts); no form or route
  changes are needed.

## Tech stack

Next.js · TypeScript · Tailwind CSS · Framer Motion · Zod
