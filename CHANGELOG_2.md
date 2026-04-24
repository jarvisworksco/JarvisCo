# CHANGELOG

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Added
- `components/sections/Testimonials.tsx`: 6-card testimonials section
- Pricing: AI chatbot add-on note on Standard card (small italic muted, „+ AI pokalbių robotas — 400€ priedas"); AI chatbot as included feature on Premium plan; Premium price updated 1800€ → 2200€; PRD_1.md updated to match between Process and Pricing; 2-col desktop grid, warm-white background, white cards with italic Lithuanian-quote-mark quotes, colored avatar circles, CSS hover shadow — pure server component

### Changed
- Pricing: rewrote all three plan feature lists with benefit-first language for non-technical Lithuanian home-service business owners; added per-plan tagline (italic, muted) displayed under the price; added "Pilnas paketas" badge to Premium; removed standalone delivery line (delivery now inside feature list); prices updated to 500/900/1800€

### Added
- Initial project scaffold: `CLAUDE.md`, `PRD.md`, `CHANGELOG.md`
- Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 project scaffold
- shadcn/ui initialized; lucide-react and GSAP installed
- JarvisCo design tokens in `globals.css` (warm-neutral palette, Inter font, shadow/radius scale)
- `app/layout.tsx`: Inter font, `lang="lt"`, full SEO metadata, LocalBusiness JSON-LD schema
- `components/nav.tsx`: fixed sticky nav, smooth-scroll links, full-screen mobile overlay menu
- `components/sections/Hero.tsx`: badge, 64px headline with blue accent, sub-headline, two CTAs, stats row — GSAP entrance animation
- `components/sections/Marquee.tsx`: infinite CSS marquee with all 8 trade names
- `components/sections/Services.tsx`: 3 feature cards with lucide icons — GSAP ScrollTrigger reveal
- `components/sections/Process.tsx`: 4-step process — GSAP ScrollTrigger stagger
- `components/sections/Pricing.tsx`: Starter/Standard/Premium plans (exact PRD copy/pricing), Standard featured in dark — GSAP ScrollTrigger stagger
- `components/sections/FAQ.tsx`: 6-item accordion with smooth height transition — GSAP ScrollTrigger reveal
- `components/sections/CTA.tsx`: dark CTA band with mailto + tel buttons — GSAP ScrollTrigger reveal
- `components/sections/Footer.tsx`: dark footer with logo, nav links, contact info, copyright
- `public/logo.png`: JarvisCo cloud-mark logo

### Changed
- Nav: replaced PNG logo with clean SVG mark (blue rounded square + "J" path), "Pradėti projektą" now opens contact modal
- Hero: primary CTA now opens modal; updated subheading copy to "paslaugoms į namus"
- Marquee: expanded to 16 trades (added Arboristai, Grindų klojėjai, Langų valymas, etc.); tripled track for seamless infinite loop that never resets
- Pricing: all plan CTAs now open contact modal with plan pre-selected (instead of mailto)
- CTA section: replaced mailto button with "Pateikti užklausą" modal trigger; email + phone kept as secondary links with `whitespace-nowrap`

### Added
- `context/contact-modal.tsx`: React context for modal open/close + selected plan state
- `app/actions.ts`: Next.js server action sending email via Gmail SMTP (nodemailer); dev fallback logs to console when env vars absent
- `components/ContactModal.tsx`: full-screen overlay contact form — name, email, phone, plan select, message; loading + success + error states; keyboard accessible (Escape closes)
- `components/LogoMark.tsx`: reusable SVG logo mark component (30px blue rounded square with "J" letterform)
- `components/sections/CaseStudy.tsx`: arbcut.lt case study with CSS browser chrome mockup, Standard plan badge, deliverables list, live link
- `.env.local.example`: Gmail App Password setup instructions
- nodemailer + @types/nodemailer installed

### Fixed
- Phone number links use `whitespace-nowrap` — no longer wraps on narrow screens

---

## How to update this file

When Claude Code finishes a batch of work, add an entry under `[Unreleased]`:

- **Added** — for new features or sections.
- **Changed** — for changes in existing functionality.
- **Deprecated** — for soon-to-be-removed features.
- **Removed** — for features removed in this release.
- **Fixed** — for bug fixes.
- **Security** — for vulnerability fixes.

When the project is released (deployed to production), move everything under `[Unreleased]` into a new versioned section with the date, e.g. `## [0.1.0] — 2026-05-01`.

---

## Template for future entries

```
## [0.1.0] — YYYY-MM-DD

### Added
- Hero section with animated stats row
- Pricing section with three plans
- FAQ accordion

### Changed
- Updated color tokens to match final design

### Fixed
- Mobile nav z-index overlap
```
