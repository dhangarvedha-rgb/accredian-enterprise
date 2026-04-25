# Accredian Enterprise — Submission Package

## ✅ Deliverables Checklist

| Item | Status |
|------|--------|
| Next.js App Router project | ✅ Complete |
| Fully responsive (mobile + desktop) | ✅ Complete |
| All landing page sections | ✅ 11 sections |
| Navigation + Footer | ✅ Complete |
| API integration (lead capture) | ✅ `/api/leads` |
| Lead capture form with validation | ✅ Complete |
| README with setup instructions | ✅ Complete |
| Vercel deployment config | ✅ `vercel.json` |
| TypeScript throughout | ✅ Zero errors |
| Clean production build | ✅ Verified |

---

## 📦 What's Inside the ZIP

```
accredian-enterprise/
├── app/
│   ├── layout.tsx              ← Root layout, font imports
│   ├── page.tsx                ← Main page (assembles all sections)
│   ├── globals.css             ← Design tokens, all animations, utilities
│   ├── api/
│   │   └── leads/
│   │       └── route.ts        ← POST + GET lead capture API
│   └── components/
│       ├── Navbar.tsx          ← Sticky nav, progress bar, mobile menu
│       ├── Footer.tsx          ← CTA banner, links, social icons
│       └── sections/
│           ├── Hero.tsx        ← Word animation, stats, partner ticker
│           ├── Solutions.tsx   ← 8-feature grid with hover effects
│           ├── Features.tsx    ← Tabbed platform features
│           ├── Programs.tsx    ← Filterable program catalog
│           ├── Partners.tsx    ← Animated counters + institution grid
│           ├── Process.tsx     ← Interactive 5-step stepper
│           ├── Testimonials.tsx← Auto-carousel with sidebar
│           ├── FAQ.tsx         ← Accordion FAQ
│           └── Contact.tsx     ← Lead capture form
├── README.md                   ← Full documentation
├── vercel.json                 ← Vercel deployment config
├── .gitignore
├── package.json
├── tsconfig.json
├── next.config.ts
└── postcss.config.mjs
```

---

## 🚀 How to Run Locally

```bash
# 1. Unzip the project
unzip accredian-enterprise.zip
cd accredian-enterprise

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev

# 4. Open in browser
open http://localhost:3000
```

---

## 🌐 Deploy to Vercel (Step-by-Step)

```bash
# Option A — Vercel CLI
npm i -g vercel
cd accredian-enterprise
vercel deploy --prod

# Option B — GitHub + Vercel Dashboard
# 1. Push code to GitHub
git init
git add .
git commit -m "feat: Accredian Enterprise landing page"
git remote add origin https://github.com/YOUR_USERNAME/accredian-enterprise.git
git push -u origin main

# 2. Go to https://vercel.com/new
# 3. Import the repo
# 4. Hit Deploy — NO env vars required
```

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| Navy | `#0a1628` | Headings, dark sections, hero dark |
| Blue | `#1a56db` | Primary buttons, accents, links |
| White | `#ffffff` | Section backgrounds, cards |
| Off-white | `#f8faff` | Alternate section backgrounds |
| Gray text | `#4b5563` | Body copy |

**Gradients used:**
- Hero gradient: `160deg, #f8faff → #eef3ff → #fff`
- Dark sections: `135deg, #0a1628 → #112240 → #1d3557`
- Button: `135deg, #1a56db → #2563eb`
- Text gradient: `135deg, #1a56db → #60a5fa → #1d3557`

---

## ✨ Animations Implemented

| Animation | Implementation |
|-----------|---------------|
| Scroll reveal (fadeUp) | `IntersectionObserver` + CSS classes |
| Staggered grid cascade | `transitionDelay: ${i * 60}ms` |
| Word cycling in Hero | `setInterval` + `useState` |
| CountUp numbers | `IntersectionObserver` + `requestAnimationFrame` |
| Floating cards | CSS `@keyframes float` infinite |
| Morphing blobs | CSS `@keyframes morphBlob` |
| Spinning ring decoration | CSS `@keyframes spin-slow` |
| Partner logo ticker | CSS `@keyframes ticker` infinite |
| Card hover lift | CSS `transform: translateY(-8px)` |
| Button shimmer | CSS `background-size: 200%` + `animation` |
| Tab active transition | `transform: scale(1.04) + translateY(-2px)` |
| Accordion open/close | CSS `max-height` transition |
| Testimonial fade | `opacity + translateY` on `key` change |
| Progress stepper | Width transition on `activeStep` |
| Scroll progress bar | `window.scrollY` → bar width |
| Nav glass blur | `backdrop-filter: blur(24px)` |

---

## 🔌 API Documentation

### POST /api/leads
Capture a new enterprise lead.

**Request body:**
```json
{
  "name": "Arjun Mehta",
  "email": "arjun@company.com",
  "phone": "+91 9876543210",
  "company": "Razorpay",
  "companyType": "Enterprise (500+)",
  "domain": "AI & Data Science",
  "teamSize": "50 engineers",
  "message": "Looking for a custom ML program"
}
```

**Response (201):**
```json
{
  "success": true,
  "message": "Lead captured successfully",
  "leadId": "lead_1700000000000"
}
```

### GET /api/leads
View captured leads (admin use).
```json
{
  "total": 3,
  "leads": [...]
}
```

---

## 🤖 AI Usage Explanation

**Tool used:** Claude (Anthropic) — claude-sonnet-4-6

### Where AI helped:
1. **Component scaffolding** — Generated all 11 component shells with proper TypeScript interfaces
2. **Animation system** — All `@keyframes` and `IntersectionObserver` logic
3. **CSS design tokens** — Color palette, utility classes, responsive patterns
4. **Form validation** — Client-side validation logic + error states
5. **API route** — Next.js route handler with input sanitization
6. **Content copy** — Original content written to match enterprise tone

### What I modified / improved manually:
- **Color discipline** — Enforced strictly 3 colors (navy/white/blue), removed any stray colors AI suggested
- **Animation curves** — Changed generic `ease` to `cubic-bezier(0.22, 1, 0.36, 1)` for premium feel
- **Mobile breakpoints** — Adjusted grid layouts for better small-screen experience
- **Content originality** — All copy is original, not copied from Accredian's site
- **Build errors** — Fixed TypeScript error (misplaced `key` in style object)
- **Section ordering** — Reordered sections to match better storytelling flow

---

## ⭐ Bonus Features Completed

- [x] Lead capture form (Contact section)
- [x] Data stored via Next.js API route (`/api/leads`)
- [x] Smooth scroll navigation
- [x] Mobile-responsive hamburger menu
- [x] Scroll progress indicator
- [x] Auto-cycling testimonials carousel
- [x] Interactive program filter tabs
- [x] Animated step-by-step process tracker
- [x] CountUp statistics on scroll

---

## 📈 With More Time, I Would Add

1. **Supabase / PlanetScale DB** — Persist leads across deploys
2. **Resend email** — Auto-confirmation email on form submit
3. **Framer Motion** — Page transitions and advanced spring animations
4. **Sanity CMS** — Editable program cards without code changes
5. **Admin dashboard** — Password-protected `/admin` to view leads
6. **PostHog analytics** — Heatmaps + conversion funnel tracking
7. **Structured data** — JSON-LD for Google rich results
8. **Performance** — `next/image` for all avatars/logos, lazy loading
9. **A/B test** — Two hero CTA variants via Vercel Edge Config
10. **Chatbot** — AI-powered "Talk to Sales" widget
