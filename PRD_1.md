# PRD.md — JarvisCo marketing website

**Version:** 1.0
**Last updated:** 2026-04-24
**Owner:** JarvisCo

---

## 1. Summary

A single-page marketing website that turns cold traffic into paid web-development clients. Target market: Lithuanian home-service businesses who need a professional website but don't want to hire an agency or figure out WordPress themselves.

The site itself is a demo of what JarvisCo delivers — so it must look significantly better than anything a competing freelancer in Lithuania is putting out.

---

## 2. Goals & success metrics

**Primary goal:** generate qualified inquiries (email or phone) from home-service business owners.

**Measurable targets (first 90 days post-launch):**
- ≥ 500 unique visitors / month
- ≥ 3% contact rate (email click or phone tap)
- ≥ 5 paid projects closed

**Non-goals:**
- Being a portfolio — JarvisCo is new, there isn't a back catalog yet. Don't fake one.
- Being a blog / content marketing hub in v1.
- Serving English speakers. This is Lithuania only.

---

## 3. Audience

**Who visits:**
- A santechnikas / elektrikas / meistras who currently has no website, or a dated Facebook page, or a broken Wix site from 2019.
- Typically 30–55 years old, runs a 1–5 person operation.
- Opens the site on a phone, probably while on a job site or in a van.
- Has been quoted 2000–5000€ by a traditional agency and got scared off.

**What they need to feel in the first 10 seconds:**
1. "This is for me" (the site names their trade specifically)
2. "I can afford this" (pricing is visible, not hidden behind a form)
3. "This person is real and will actually deliver" (concrete process, real contact info)

---

## 4. Brand

- **Name:** JarvisCo
- **Tagline direction:** websites that work *for* your business, not websites that just look nice
- **Logo:** cloud-mark with a "J" cutout on blue (provided as PNG). Use it in nav and footer.
- **Voice:** direct, confident, no jargon. Lithuanian business-casual — uses "jūs" form (polite), not "tu".
- **Don't do:** startup buzzwords ("synergy", "disrupt", "innovative solutions"), vague promises ("we help you grow"), stock-photo smiling handshakes.

---

## 5. Contact info (use exactly this, everywhere)

- **Email:** `jarvisworks.co@gmail.com` → `mailto:` links
- **Phone:** `+370 676 99395` → `tel:+37067699395` links (no spaces in the href)
- **Location:** Lietuva (don't put a street address; this is a remote business)

---

## 6. Information architecture

Single scrollable page. Fixed nav. Sections in this order:

### 6.1 Navigation (fixed top)
- Logo (left) — clicks to top
- Links (right): Paslaugos · Procesas · Kainos · D.U.K.
- CTA button: **Pradėti projektą** → scrolls to contact section
- Mobile: hamburger → full-screen overlay menu

### 6.2 Hero
- Eyebrow badge: "Priimame projektus · 2026 Q2" with a green status dot
- Headline: "Svetainės, kurios **dirba** už jūsų verslą." (the word "dirba" is the standout — italic serif or accent color per design)
- Sub-headline: "Kuriame greitas, gražias ir atsakingas svetaines Lietuvos namų paslaugų verslui — santechnikams, elektrikams, meistrams, valytojams. Daugiau užklausų, mažiau rūpesčių."
- Primary CTA: **Peržiūrėti kainas** → #kainos
- Secondary CTA: **Kaip dirbame** → #procesas
- Stats row below CTAs (4 items):
  - Pristatymas — nuo 5 d.d.
  - Kalba — 100% lietuvių
  - Mobile greitis — < 2s load
  - Pagrindas — SEO paruošta

### 6.3 Trades marquee
Infinite horizontal scroller with the trades JarvisCo serves:
`Santechnikai · Elektrikai · Meistrai · Valymo paslaugos · Remontininkai · Šildymo specialistai · Dažytojai · Stogdengiai`

### 6.4 Services (3 cards)
Section heading: "Ką gausite — **konkrečiai**."
Intro: "Nesiūlome nieko „gražaus ir neaiškaus". Kiekviena svetainė — aiškus įrankis, kad klientas rastų, perskaitytų ir parašytų."

Cards:
1. **Unikalus dizainas** — "Jokių šabloniškų temų iš katalogo. Kuriame dizainą, kuris atspindi būtent jūsų verslo charakterį ir klientų lūkesčius."
2. **Greitis ir SEO** — "Svetainės kraunasi greitai, atrodo gerai telefone, planšetėje ir ekrane. Google indeksuoja, klientai randa."
3. **Užklausų sistema** — "Kontaktų forma, skambučio mygtukas, SMS pranešimai — viskas, kad užklausa ne pamestų laiku, o pasiektų jus iš karto."

### 6.5 Process (4 steps)
Section heading: "Nuo pokalbio iki **starto** — be streso."

1. **Pokalbis** — "Nemokamas 20 min skambutis. Suprantu, ką darote, kam, ir ko reikia svetainei."
2. **Planas** — "Gaunate aiškų pasiūlymą: struktūra, terminai, kaina. Jokių paslėptų mokesčių."
3. **Kūrimas** — "Kuriu pagal aprobuotą dizainą. Siunčiu peržiūrą — jūs komentuojate, aš taisau."
4. **Paleidimas** — "Svetainė — live. Toliau rūpinuosi hostingu ir priežiūra, kad viskas veiktų sklandžiai."

### 6.6 Pricing (3 plans — FIXED COPY, do not rewrite)

Section heading: "Trys planai. Viena **aiški** kaina."
Intro: "Kiekviena svetainė — su hostingu ir priežiūra. Be paslėptų mokesčių, be „papildomų darbų", be nereikalingų staigmenų sąskaitoje."

#### STARTER
- Price: **350€** vienkartinis
- Recurring: **+ 15€/mėn** — hostingas ir priežiūra
- Features:
  - 1 puslapis (landing scroll stiliaus)
  - Iki 5 turinio sekcijų
  - Mobile responsive dizainas
  - Google Analytics integracija
  - SEO pagrindai (meta, sitemap)
- Delivery note: "Pristatymas per 5 d.d."
- CTA: **Rinktis Starter**

#### STANDARD (featured / most popular)
- Badge: "Populiariausias"
- Price: **600€** vienkartinis
- Recurring: **+ 20€/mėn** — hostingas ir priežiūra
- Features:
  - 3–4 puslapių struktūra
  - Prieš / po galerija su filtravimu
  - Kontaktų forma → email + SMS
  - Google Business Profile setup
  - Viskas iš Starter plano
- Delivery note: "Pristatymas per 7–10 d.d."
- CTA: **Rinktis Standard**

#### PREMIUM
- Price: **1200€** vienkartinis
- Recurring: **+ 30€/mėn** — hostingas ir priežiūra
- Features:
  - Viskas iš Standard plano
  - Online booking / užklausų sistema
  - Blog funkcionalumas
  - Multi-location palaikymas
  - 1 mėn. nemokamo SEO po paleidimo
- Delivery note: "Individualus pristatymas"
- CTA: **Rinktis Premium**

All three plan CTAs scroll to the contact section and (optionally) pre-fill a subject line like "Užklausa: Standard planas".

### 6.7 FAQ (accordion, 6 items)

Heading: "Atsakymai, **prieš** klausiant."

1. **Kiek laiko trunka svetainės kūrimas?**
   Priklauso nuo paketo. Starter planas — 5 darbo dienos, Standard — 7–10 darbo dienų, Premium — individualiai, priklausomai nuo funkcionalumo. Terminus aptariame dar prieš pradedant.

2. **Ar reikės man pačiam ieškoti domeno ir hostingo?**
   Ne. Mėnesinis mokestis apima hostingą, SSL sertifikatą, atsargines kopijas ir techninę priežiūrą. Jūs nieko papildomai neprenumeruojate — viskas dengta.

3. **Ar galėsiu pats redaguoti tekstus ir nuotraukas?**
   Standard ir Premium planuose — taip. Gaunate paprastą redaktorių, kuriame be kodavimo galite atnaujinti tekstus, kainas, nuotraukas. Standartinius pakeitimus Starter plane atlieku aš per 1–2 d.d.

4. **Kas, jei svetainė sulūžta arba nustoja veikti?**
   Mėnesinis priežiūros mokestis reiškia, kad stebime svetainę 24/7. Techninę problemą sutvarkau per kelias valandas. Jei kažkas sugenda — ne jūsų galvos skausmas.

5. **Ar dirbate tik su namų paslaugų verslais?**
   Specializuojuosi būtent šiame segmente — santechnikai, elektrikai, valymo paslaugos, meistrai. Toks fokusas reiškia, kad žinau, kas veikia klientų srautui. Bet jei turite kitokios srities verslą — parašykite, aptarsime.

6. **Kaip apmokamos paslaugos?**
   50% avansas pradžioje, likusi dalis — po paleidimo. Mėnesinis hostingas ir priežiūra atsiskaitoma kas mėnesį pagal sąskaitą. Galima ir metinis apmokėjimas su nuolaida.

### 6.8 Final CTA section
Heading: "Pasikalbėkime apie **jūsų** svetainę."
Body: "Nemokamas 20 minučių skambutis. Jokių įpareigojimų. Papasakosiu, ar galiu padėti, ir ką tiksliai siūlyčiau."
Two buttons side by side:
- **jarvisworks.co@gmail.com** → `mailto:jarvisworks.co@gmail.com`
- **+370 676 99395** → `tel:+37067699395`

### 6.9 Footer
- Logo + short tagline: "Svetainės Lietuvos namų paslaugų verslui. Aiški kaina, švarus darbas, ilgalaikė priežiūra."
- Column: Meniu (section links)
- Column: Kontaktai (email, phone, "Lietuva")
- Bottom row: "© 2026 JarvisCo · Visos teisės saugomos" · "Sukurta su ♥ Lietuvoje"

---

## 7. SEO & metadata

- `<title>`: **JarvisCo — Svetainės namų paslaugų verslui Lietuvoje**
- Meta description: "Projektuojame ir kuriame aukštos kokybės svetaines Lietuvos namų paslaugų verslui. Daugiau skambučių, daugiau užklausų, aiškesnis prekės ženklas. Nuo 350€."
- Open Graph image: 1200×630 with logo + tagline
- `lang="lt"`, canonical URL set
- `sitemap.xml`, `robots.txt`
- LocalBusiness JSON-LD schema with name, description, email, telephone, areaServed = "LT"

---

## 8. Performance budgets

- First Contentful Paint: < 1.2s on 4G mobile
- Largest Contentful Paint: < 2.0s
- Total JS bundle: < 150kb gzipped
- All images WebP or AVIF, lazy-loaded below the fold

---

## 9. Open questions (for future versions)

- Do we add a portfolio section once there are 3+ shipped projects?
- Contact form (with API route + email backend) vs. current mailto approach?
- Testimonials — once real ones exist
- Blog for SEO long-tail
