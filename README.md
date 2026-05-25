# Join Avon SA — Luxury Website Redesign

A premium, high-converting single-page marketing site for recruiting Avon Representatives in South Africa. Built with Next.js, Tailwind CSS, and optimized for mobile-first audience engagement.

## 🎨 Project Overview

**Goal:** Redesign joinavonsa.co.za as a luxury, editorial-style beauty brand landing page targeting South African mobile users.

**Stack:**
- Next.js 16 (App Router, static export)
- Tailwind CSS with custom luxury color palette
- TypeScript for type safety
- Lucide React for icons
- Scroll animations for engagement

**Target Performance:** Lighthouse 90+ across all categories

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the live site.

## 📋 Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 🏗️ Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with header, footer, cookie consent
│   ├── page.tsx            # Home page with all sections
│   └── globals.css         # Global styles and typography
├── components/
│   ├── Header.tsx          # Sticky navigation
│   ├── Footer.tsx          # Multi-column footer
│   ├── CookieConsent.tsx   # POPIA-compliant cookie banner
│   ├── ui/                 # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Input.tsx
│   └── sections/           # Page sections (in scroll order)
│       ├── Hero.tsx
│       ├── SignUpForm.tsx
│       ├── ImageGrid.tsx
│       ├── ValueProp.tsx
│       ├── BenefitsGrid.tsx
│       ├── TrustBanner.tsx
│       ├── OnboardingSteps.tsx
│       ├── RequirementsVsSupport.tsx
│       └── BrochureSection.tsx
├── hooks/
│   └── useScrollAnimation.ts   # Scroll-triggered animations
├── utils/
│   ├── cn.ts              # className utility
│   └── formService.ts     # Formspree integration
└── public/                # Static assets
```

## 🎨 Design System

### Colors
- **Primary:** Deep Plum `#4A052E` / Rich Berry `#5C0A3C`
- **Neutrals:** Cream `#FDFBF9`, Charcoal `#111111`, Taupe `#666666`
- **Accents:** Gold `#D4AF37`, Rose Gold `#E5A995`

### Typography
- **Headings:** Playfair Display (serif, elegant)
- **Body:** Plus Jakarta Sans (sans-serif, clean)

### Components
- **Buttons:** Primary (solid plum), Secondary (outlined), Ghost (text-only)
- **Cards:** Subtle borders with hover shadow reveal
- **Inputs:** Minimal with focus ring animation

## ✨ Features

- ✅ Fully responsive (mobile-first design)
- ✅ Luxury typography and spacing
- ✅ Scroll-triggered fade-in animations
- ✅ Smooth anchor link navigation
- ✅ Sticky header with mobile drawer menu
- ✅ POPIA-compliant cookie consent banner
- ✅ WhatsApp integration (click-to-chat)
- ✅ Contact form with Formspree support
- ✅ SEO meta tags and structured data
- ✅ Static export ready

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file with:

```env
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id
```

To get a Formspree ID:
1. Visit [formspree.io](https://formspree.io)
2. Create an account
3. Create a new form
4. Copy the form ID

### Static Export

To build for static hosting:

```bash
npm run build
# Output in out/ directory
```

## 📱 Responsive Breakpoints

- **Mobile:** < 640px (single column)
- **Tablet:** 640px – 1024px (two columns)
- **Desktop:** 1024px – 1440px (full layout)
- **Large:** > 1440px (centered, max-width container)

## 🎯 Key Pages & Sections

1. **Hero** — Attention-grabbing headline and CTAs
2. **Sign Up Form** — Lead capture with name, email, phone
3. **Image Grid** — High-fashion visual showcase
4. **Value Proposition** — Core messaging
5. **Benefits Grid** — 4 key reasons to join (with scroll animation)
6. **Trust Banner** — Social proof section
7. **How It Works** — 4-step onboarding process
8. **Requirements vs Support** — 2-column comparison
9. **Brochure CTA** — Digital product showcase

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Push to GitHub, then:
1. Connect repository on vercel.com
2. Vercel auto-detects Next.js + static export
3. Deploy!
```

### Netlify

```bash
npm run build
# Drag & drop 'out' folder to Netlify
# Or connect GitHub for auto-deploy
```

## 📊 Performance Targets

- Lighthouse Performance: 90+
- Lighthouse Accessibility: 90+
- Lighthouse Best Practices: 90+
- Lighthouse SEO: 90+

## 🔐 Security & Compliance

- ✅ POPIA-compliant cookie consent
- ✅ No backend required (static hosting)
- ✅ Secure form submissions (Formspree)
- ✅ HTTPS-ready
- ✅ No sensitive data stored

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Lucide Icons](https://lucide.dev)
- [Formspree](https://formspree.io)

## 📞 Support

For issues or questions, check:
1. IMPLEMENTATION_STATUS.md — Detailed progress & checklist
2. JoinAvonSA-Redesign-Brief.md — Original design brief
3. .builder/plans/omni-limit-plan.md — Implementation plan

---

**Built with ❤️ for Join Avon SA**  
Premium beauty brand website redesign | May 2026
