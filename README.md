# JarvisCo — jarvisweb.lt

Web dizaino ir augimo automatizacijų agentūros svetainė. Tamsus, modernus dizainas su
**Three.js** hero animacija ir **GSAP** slinkimo efektais. Vienas puslapis (landing),
pilnai pritaikytas konversijai, lietuvių kalba.

## Stack
- **Astro 5** (statinis generavimas)
- **Three.js** — interaktyvi dalelių sfera hero sekcijoje (WebGL + custom shader)
- **GSAP + ScrollTrigger** — intro ir reveal animacijos
- Gryna CSS dizaino sistema (`src/styles/global.css`)
- **Web3Forms** — kontaktų forma (be backend'o)

## Komandos
```bash
npm install      # priklausomybės
npm run dev      # http://localhost:4321
npm run build    # statinis build į dist/
npm run preview  # peržiūra po build
```

## Ką pakeisti prieš paleidžiant

1. **Kontaktų forma** — `src/data/content.js` → `contact.web3formsKey`.
   Susikurkite nemokamą raktą https://web3forms.com ir įdėkite vietoje
   `PAKEISK-MANE-web3forms-access-key`. Laiškai eis į `brand.elPastas`.
   (Kol raktas neįdėtas, forma rodo žinutę su tiesioginiu kontaktu.)

2. **Atsiliepimai** — `content.js` → `reviews.items`. Dabar yra pavyzdiniai
   atsiliepimai (NE iš „Google“ — taip ir pristatomi). Pakeiskite tikrais, kai turėsite.

   - **Atsiliepimų piltuvas** (`/atsiliepimas`): 1–3★ → padėka + „Parašyti Matui“;
     4–5★ → nukreipia į Jūsų „Google“ atsiliepimo nuorodą (`brand.atsiliepimoLink`).

3. **Kainos / paslaugos** — `content.js` → `services.offers`. Lengva redaguoti
   kainas ir „kas įskaičiuota" sąrašus.

4. **Visas kitas tekstas** — viskas viename faile: `src/data/content.js`.

## Turinio failas
`src/data/content.js` — vienintelis tekstų šaltinis (brand, meta, nav, hero,
paslaugos, procesas, atvejo studija, atsiliepimai, apie, DUK, kontaktai, footer).

## Nuotraukos
`public/assets/images/`
- `matas.*` — savininko nuotrauka (apie sekcija)
- `studija.*` — darbo vieta
- `arbcut-desktop.webp`, `arbcut-mobile.webp` — ArbCut atvejo studijos ekrano nuotraukos
- `og.png`, `favicon.svg` — socialinių tinklų / naršyklės grafika

## Diegimas (Vercel)
1. `git init && git add . && git commit -m "JarvisCo site"`
2. Įkelkite į GitHub.
3. Vercel → New Project → importuokite repo. Astro aptinkamas automatiškai
   (Build: `astro build`, Output: `dist`). Jokio adapterio nereikia.
4. Pridėkite domeną `jarvisweb.lt`.

> Domeną keisti: `astro.config.mjs` (`SITE_URL`) ir `content.js` (`brand.url`).

## Pasiekiamumas / našumas
- Pilnas LT diakritikų palaikymas (Space Grotesk + Inter, `latin-ext`).
- `prefers-reduced-motion` gerbiamas (animacijos išjungiamos).
- Three.js stabdoma, kai hero nematomas arba skirtukas paslėptas.
- Nuotraukos optimizuotos (WebP), lazy-load.
