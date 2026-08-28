# Heaven Furniture Mart

> A refined, conversion-focused landing page for **Heaven Furniture Mart**, designed around the warmth of bespoke interiors rather than a conventional e-commerce storefront.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react\&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript\&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss\&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-13-0055FF?logo=framer\&logoColor=white)](https://www.framer.com/motion/)

## Overview

**Heaven Furniture Mart** is a luxury furniture and interior-focused web experience built to communicate craftsmanship, atmosphere, and trust at first glance.

The site uses an editorial, interior-studio aesthetic with generous spacing, warm neutrals, refined typography, subtle motion, and carefully structured calls to action.

Instead of feeling like a generic furniture marketplace, the experience is positioned as a premium destination for discovering collections and starting a bespoke furniture conversation.

## Experience

The homepage is structured as a focused storytelling journey:

* **Hero** — Establishes the premium visual identity and primary call to action.
* **Brand Introduction** — Communicates the philosophy behind the brand.
* **Collections** — Presents furniture collections in an editorial format.
* **Bespoke Experience** — Introduces the consult → design → craft → deliver journey.
* **Proof** — Builds confidence through supporting brand content.
* **Final CTA** — Brings visitors back to the primary conversion point.
* **Navigation & Footer** — Provide clear site-wide access and contact context.

The main entry point is composed from reusable sections such as `Hero`, `Collections`, `Bespoke`, `Proof`, and `FinalCta`, keeping the page maintainable and easy to evolve.

## Design Direction

The visual system is intentionally restrained and premium:

* Warm ivory and deep charcoal/teal surfaces
* Muted brass accents
* Deep-brown typography
* Serif display typography paired with clean sans-serif UI text
* Large editorial imagery and generous whitespace
* Subtle, slow motion instead of distracting animation
* Responsive layouts designed for desktop, tablet, and mobile

The goal is to make the website feel closer to a **bespoke interior studio** than a traditional online furniture catalog.

## Tech Stack

| Technology           | Purpose                                      |
| -------------------- | -------------------------------------------- |
| **Next.js 16**       | React framework and application architecture |
| **React 19**         | UI composition                               |
| **TypeScript**       | Type-safe development                        |
| **Tailwind CSS 4**   | Styling and responsive design                |
| **Framer Motion**    | Motion and interaction design                |
| **Lucide React**     | Interface icons                              |
| **shadcn**           | UI/component tooling                         |
| **Vercel Analytics** | Website analytics                            |

## Project Structure

```text
heaven-furniture-mart/
├── app/
│   ├── page.tsx
│   └── ...
├── components/
│   ├── site-nav.tsx
│   ├── hero.tsx
│   ├── brand-intro.tsx
│   ├── collections.tsx
│   ├── bespoke.tsx
│   ├── proof.tsx
│   ├── final-cta.tsx
│   ├── site-footer.tsx
│   └── ...
├── public/
│   └── ...
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

Make sure you have **Node.js** installed.

### Installation

```bash
git clone https://github.com/your-hossain-bhai/heaven-furniture-mart.git
cd heaven-furniture-mart
npm install
```

### Development

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

### Production Build

```bash
npm run build
```

Run the production server:

```bash
npm run start
```

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Create production build
npm run start    # Start production server
```

## Responsive & Performance Goals

The project follows a responsive-first approach with a focus on:

* Fast page rendering
* Clean component architecture
* Responsive typography and spacing
* Accessible interactive elements
* Lightweight motion
* Optimized visual presentation across screen sizes
* SEO-friendly Next.js structure

## Brand Context

**Heaven Furniture Mart** is positioned as a furniture destination in **Chattogram, Bangladesh**.

The primary customer action is intentionally framed as **“Request a Quote”**, supporting a more consultative and bespoke purchasing experience.

## Development Notes

This project is currently a focused landing-page experience. It is not intended to behave like a large generic marketplace or template-based furniture store.

When extending the project, preserve the existing design language:

1. Keep the visual hierarchy spacious and editorial.
2. Prefer purposeful interactions over excessive animation.
3. Keep premium typography and restrained color usage consistent.
4. Maintain strong mobile responsiveness.
5. Avoid introducing generic e-commerce patterns that weaken the bespoke positioning.

## Deployment

The project is compatible with modern Next.js deployment platforms, including Vercel.

Typical production workflow:

```bash
npm install
npm run build
npm run start
```

## License

This project is a custom website project for **Heaven Furniture Mart**. Unless explicitly stated otherwise, the design, branding, content, and project assets should not be reused for unrelated commercial projects without permission.

---

<p align="center">
  Built with Next.js, Tailwind CSS & Framer Motion for Heaven Furniture Mart.
</p>
```
