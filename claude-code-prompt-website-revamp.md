# Claude Code Prompt — Premium Agency Website Revamp

> Paste everything below into Claude Code from inside your project folder.

---

You are working inside an existing website project folder. This is my own business website and I want you to completely revamp it into something extraordinary.

**About the business:** I run a web design + SEO agency in Lithuania. My clients are local service businesses, mostly home-service owners (plumbers, electricians, renovation/remodeling, cleaning, HVAC, handyman, landscaping, etc.). This site is the single most important proof of what I can do — if my own site is mind-blowing, prospects believe I can do the same for them. Right now it's underwhelming. I want people to stop and stare.

**CRITICAL LANGUAGE RULE:** Every piece of user-facing text on the site must be in **Lithuanian** — headlines, body copy, buttons, form labels, error messages, meta descriptions, alt text, everything. Use correct Lithuanian diacritics (ą, č, ę, ė, į, š, ų, ū, ž). Set `lang="lt"` on `<html>`. Tone: confident, modern, locally credible — speaking to busy Lithuanian tradespeople and small business owners, not corporate jargon. (This instruction prompt is in English, but the output is 100% Lithuanian.)

## 0. Before you change anything

1. Walk the entire folder and give me a short inventory: the framework/stack, the key files, what is actually in use, and what is dead weight or legacy.
2. Detect the tech stack yourself from the project. Keep using it unless there's a strong reason to switch — if you think a switch is warranted, tell me first.
3. Confirm these with me before building (use clearly-marked placeholders like `[ĮMONĖS_PAVADINIMAS]` if I don't answer):
   - Agency / business name and domain
   - Contact details: phone, email, service area / city
   - Google Business Profile **Place ID** (needed for reviews + map)
   - Any existing brand colors, logo, or fonts I want kept
4. You have my **full permission** to delete, restructure, rename, and rewrite anything. I do not care about the current design. Keep only what serves the new vision. If the project uses git, commit the current state first so nothing is lost; otherwise note in your summary what you removed.

## 1. Inspiration

Open and study the project at `codeprojects/edvinas/` — the "better site" (confirm the exact path with me if this isn't right). Absorb its design language: layout rhythm, motion and micro-interactions, typography, color use, spacing, and overall level of polish. **Match or exceed that quality bar.** Adapt the *feel and craftsmanship* — do not copy it pixel-for-pixel. My site must stand on its own and look distinct.

## 2. Design direction

Make it striking and memorable — the opposite of a generic template.
- Strong, opinionated visual identity: a confident color system, expressive type scale, generous whitespace, and a clear visual hierarchy.
- Tasteful motion: scroll-triggered reveals, subtle parallax, hover states, smooth transitions. Polished, never gimmicky or laggy.
- Fully responsive and beautiful on mobile first (most home-service owners will open it on a phone).
- Dark/light considerations, real imagery placeholders, and a cohesive component system.
- Accessibility: proper contrast, focus states, semantic landmarks, keyboard navigation, reduced-motion support.

## 3. Required sections

1. **Hero** — a bold value proposition: I build websites and run SEO that get local service businesses more calls and bookings. Clear primary CTA (e.g. "Gaukite nemokamą pasiūlymą").
2. **Services** — Web design, SEO, and Google verslo profilio optimizavimas, framed around outcomes (more leads, higher ranking, more reviews), not buzzwords.
3. **Portfolio / case studies** — showcase sites I've built and results. Build it so I can easily add projects later.
4. **Process** — simple, reassuring steps so a non-technical tradesperson understands what working with me looks like.
5. **Social proof / reviews** — see section 4 below.
6. **About** — short, trust-building, local.
7. **Contact / lead capture** — a clean form (name, phone, email, message, business type) plus phone/email/quick-contact. No real backend secrets in code; scaffold a sensible submission handler and tell me what I need to wire up.
8. **Footer** — contact, service area, links, social, copyright.

## 4. Google Business Profile + reviews integration

- Add **LocalBusiness** JSON-LD structured data using the business details (name, address/area, phone, URL, opening hours, geo). Only include `aggregateRating`/`review` markup if it reflects real data — never fabricate ratings.
- Embed a **Google Map** for the business location.
- Add a prominent **"Palikite atsiliepimą Google"** button that opens the official write-a-review deep link: `https://search.google.com/local/writereview?placeid=[PLACE_ID]`.
- Build a **reviews/testimonials section** with a clean, swappable component. Note that pulling *live* Google reviews requires the Google Places API (with an API key) or a third-party widget. Default to: a well-designed section I can populate manually + the write-review CTA + a clearly-marked slot/component where a live widget or API feed can be plugged in later. If you scaffold the API option, keep the key in an env variable and explain setup — never hardcode it.

## 5. Technical excellence (this is an SEO agency — the site must be the proof)

- Excellent Core Web Vitals: optimized images (modern formats, lazy-loading, correct sizing), minimal blocking JS, fast load.
- Clean **semantic HTML** and a logical heading structure.
- Per-page `<title>`, meta description, canonical, Open Graph + Twitter cards — all in Lithuanian.
- `Organization` and `LocalBusiness` JSON-LD; `BreadcrumbList` where relevant.
- Generate `sitemap.xml` and `robots.txt`.
- Proper `lang="lt"`, descriptive alt text in Lithuanian, no broken links.
- Mobile-first responsive across common breakpoints.

## 6. Finish

- Run the build / dev server and confirm it works with no errors.
- Check there are no broken links, missing assets, or leftover English placeholder text.
- Give me a concise summary: what you deleted, what you changed, what you added, and a checklist of anything I still need to do myself (e.g. add Place ID, API key, form backend, real images, deploy).

Work autonomously through all of this. Ask me only the confirmation questions in section 0 up front, then proceed.
