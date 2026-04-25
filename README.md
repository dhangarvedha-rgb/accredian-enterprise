# Accredian Enterprise — Next.js Landing Page

A production-grade enterprise learning platform landing page, inspired by [enterprise.accredian.com](https://enterprise.accredian.com/), built with Next.js 15 (App Router), TypeScript, and Tailwind CSS.

##  Live Demo
Deploy to Vercel (instructions below)

##  Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + custom CSS
- **Fonts**: Plus Jakarta Sans + Sora (Google Fonts)
- **API**: Next.js API Routes (mock lead capture)
- **Deployment**: Vercel-ready

##  Features Built

### Landing Page Sections
1. **Navbar** — Sticky with scroll progress bar, active link tracking, mobile hamburger menu, glass blur effect
2. **Hero** — Animated word cycling, stats cards, partner ticker, floating notification card
3. **Solutions** — 8-feature grid with hover animations and accent lines
4. **Features** — Tabbed interface with live chart, mentor grid, cohort tracker, credential card
5. **Programs** — Filterable 6-card catalog with category tabs, progress indicators
6. **Partners** — Animated counters (countUp), institution grid, company logo ticker
7. **Process** — Interactive 5-step stepper with auto-advance and mobile accordion
8. **Testimonials** — Auto-cycling carousel with sidebar selector and metric chips
9. **FAQ** — Accordion with smooth max-height transitions
10. **Contact** — Lead capture form with validation, company type selector, success state
11. **Footer** — CTA banner, multi-column links, social icons, system status

### Animations & Interactions
- Scroll-triggered reveal animations (IntersectionObserver)
- Staggered cascade animations on card grids
- Morphing blob background decorations
- Parallax-style floating elements
- Smooth tab transitions with key-driven re-animation
- Hover micro-interactions (card lift, button glow, line extend)
- Auto-advancing carousels and steppers
- CountUp number animations on scroll
- Progress bar on scroll position

### API
- `POST /api/leads` — Captures form submissions with validation
- `GET /api/leads` — Admin endpoint to view collected leads

##  Setup

```bash
git clone <your-repo>
cd accredian-enterprise
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for production
```bash
npm run build
npm start
```

##  Project Structure

```
app/
├── layout.tsx           # Root layout + font imports
├── page.tsx             # Main page (assembles sections)
├── globals.css          # Design tokens, animations, utilities
├── api/
│   └── leads/
│       └── route.ts     # Lead capture API
└── components/
    ├── Navbar.tsx
    ├── Footer.tsx
    └── sections/
        ├── Hero.tsx
        ├── Solutions.tsx
        ├── Features.tsx
        ├── Programs.tsx
        ├── Partners.tsx
        ├── Process.tsx
        ├── Testimonials.tsx
        ├── FAQ.tsx
        └── Contact.tsx
```

##  Deploy to Vercel

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your repository
4. Click **Deploy** — no env vars needed

##  AI Usage

This project was built with Claude (Anthropic) as the primary AI assistant:

| Area | AI Contribution | Manual Refinement |
|------|----------------|-------------------|
| Component structure | Generated all component scaffolding | Adjusted prop types and layout |
| Animation CSS | Generated keyframe animations | Tuned timing curves and delays |
| Color system | Proposed navy/white/blue palette | Confirmed brand alignment |
| Scroll reveal logic | Generated IntersectionObserver hooks | Refined threshold values |
| Form validation | Generated validation logic | Added UX improvements |
| API route | Generated POST/GET handlers | Added in-memory store |

**What was modified manually:**
- Color palette tuned to exactly 3 primary colors (navy `#0a1628`, white `#ffffff`, blue `#1a56db`)
- Animation timing curves adjusted for premium feel
- Mobile breakpoints refined for Hyderabad market device patterns
- Content rewritten to be original (not copied from reference site)

##  Improvements With More Time

1. **Database**: Replace in-memory leads store with PostgreSQL via Prisma or Supabase
2. **Email**: Add Resend/SendGrid integration to auto-send confirmation emails
3. **CMS**: Integrate Sanity or Contentful for editable program cards
4. **Auth**: Add admin dashboard at `/admin/leads` with password protection
5. **Analytics**: Integrate PostHog for heatmaps and funnel tracking
6. **A/B Testing**: Test hero CTA copy with Vercel Edge Config
7. **Animations**: Add Framer Motion for smoother page transitions
8. **SEO**: Add structured data (JSON-LD), sitemap.xml, robots.txt
9. **Perf**: Add Image component for optimized institution logos
10. **i18n**: Add Hindi language support for wider India reach

##  Performance
- Build: Static page with dynamic API route
- Lighthouse score target: 90+ (Performance, Accessibility, Best Practices, SEO)
