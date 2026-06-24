/* =====================================================================
   JARVISCO — TURINYS (vienas šaltinis)
   Visa svetainės kopija lietuvių kalba, formalus kreipimasis (Jūs).
   Komponentai skaito iš čia → keisti tekstus reikia tik šiame faile.
   ===================================================================== */

export const brand = {
  pavadinimas: 'JarvisCo',
  savininkas: 'Matas Bašinskas',
  tagline: 'Konversijai pritaikytos svetainės ir augimo automatizacijos',
  url: 'https://jarvisweb.lt',
  telefonas: '+370 676 99395',
  telefonasHref: 'tel:+37067699395',
  elPastas: 'jarviswork.co@gmail.com',
  elPastasHref: 'mailto:jarviswork.co@gmail.com',
  miestas: 'Lietuva',
  regionas: 'Visa Lietuva',
  darboLaikas: 'I–V: 09:00–18:00',
  geo: { lat: 55.1736, lng: 23.8833 },
  gbp: 'https://www.google.com/maps/place/JarvisCo/@55.1680551,22.5645915,8z/data=!4m6!3m5!1s0x46e725ccf8f540d9:0x58d0ee5e75771802!8m2!3d55.1736006!4d23.8832615!16s%2Fg%2F11npf5rgkj',
  atsiliepimoLink: 'https://g.page/r/CQIYd3Ve7tBYEBM/review',
  facebook: 'https://www.facebook.com/profile.php?id=61562921045681',
  instagram: 'https://www.instagram.com/jarvisworks_co/',
};

export const meta = {
  title: 'JarvisCo — web dizainas ir augimo automatizacijos | jarvisweb.lt',
  description:
    'Kuriu konversijai pritaikytas svetaines paslaugų verslams visoje Lietuvoje ir padedu pritraukti daugiau klientų per vietinį SEO bei automatizacijas. Nemokama konsultacija — +370 676 99395.',
  ogImage: '/assets/og.png',
};

export const nav = [
  { label: 'Paslaugos', href: '#paslaugos' },
  { label: 'Procesas', href: '#procesas' },
  { label: 'Darbai', href: '#darbai' },
  { label: 'Atsiliepimai', href: '#atsiliepimai' },
  { label: 'Apie', href: '#apie' },
  { label: 'D.U.K.', href: '#duk' },
];

export const hero = {
  badge: 'Web dizainas · Vietinis SEO · Automatizacijos',
  titleLines: ['Svetainės, kurios', 'pritraukia', 'klientų.'],
  highlight: 'pritraukia',
  lead:
    'JarvisCo kuria greitas, modernias ir konversijai pritaikytas svetaines paslaugų verslams. Ne tik gražu — kiekvienas sprendimas skirtas paversti lankytojus skambučiais ir užklausomis.',
  ctaPrimary: { label: 'Gauti nemokamą pasiūlymą', href: '#kontaktai' },
  ctaSecondary: { label: 'Peržiūrėti darbus', href: '#darbai' },
  stats: [
    { value: '7–14', label: 'dienų iki paleidimo' },
    { value: '100%', label: 'individualus dizainas' },
    { value: '<1 s', label: 'įkėlimo greitis' },
    { value: '5,0★', label: 'klientų įvertinimas' },
  ],
};

export const trust = {
  text: 'Patikima paslaugų verslų visoje Lietuvoje',
  items: ['Arboristika', 'Santechnika', 'Stogų dengimas', 'Statybos', 'Valymas', 'Grožio paslaugos'],
};

export const services = {
  eyebrow: 'Paslaugos',
  title: 'Du keliai į daugiau klientų',
  lead:
    'Pradėkite nuo profesionalios svetainės arba leiskite man rūpintis viskuo — nuo svetainės iki automatizacijų, kurios dirba už Jus kasdien.',
  offers: [
    {
      id: 'svetaine',
      badge: null,
      pavadinimas: 'Svetainė',
      tipas: 'Vienkartinis projektas',
      kaina: '500',
      kainaSuffix: '€',
      kainaPrefix: null,
      kainaNote: 'vienkartinis mokestis · be mėnesinių · be paslėptų kaštų',
      aprasymas:
        'Individuali, konversijai pritaikyta svetainė, kuri atrodo profesionaliai ir paverčia lankytojus užklausomis.',
      features: [
        'Individualus dizainas, pritaikytas Jūsų nišai',
        'Iki 5 puslapių (pradžia, paslaugos, apie, galerija, kontaktai)',
        'Pilnas pritaikymas telefonams ir planšetėms',
        'Optimizuotas greitis ir techninis SEO',
        '„Google“ verslo profilio integracija',
        'Kontaktų forma su apsauga nuo šlamšto',
        'Paleidimas per 7–14 dienų',
      ],
      cta: { label: 'Užsisakyti svetainę', href: '#kontaktai' },
      featured: false,
    },
    {
      id: 'augimas',
      badge: 'Rekomenduojama',
      pavadinimas: 'Augimo prenumerata',
      tipas: 'Mėnesinis mokestis',
      kaina: '47',
      kainaSuffix: '€/mėn',
      kainaPrefix: null,
      kainaNote: 'pirmiems klientams · svetainė įskaičiuota · nutraukite bet kada',
      aprasymas:
        'Viskas viename: svetainė ir automatizacijos, kurios nuolat pritraukia naujų klientų ir augina Jūsų reputaciją.',
      features: [
        'Svetainė su priežiūra, atnaujinimais ir hostingu',
        '„Praleisto skambučio“ automatinis SMS atsakymas',
        'Automatinis „Google“ atsiliepimų rinkimas',
        'Vietinio SEO optimizacija — aukštesnės pozicijos',
        'Reitingų augimas „Google“ ir paslaugos.lt',
        'Mėnesinė rezultatų ataskaita',
        'Prioritetinis palaikymas',
      ],
      cta: { label: 'Pradėti augti', href: '#kontaktai' },
      featured: true,
    },
  ],
  note: 'Nesate tikri, kuris variantas tinka? Pradėkime nuo nemokamos konsultacijos — patarsiu nuoširdžiai.',
};

export const process = {
  eyebrow: 'Procesas',
  title: 'Nuo idėjos iki rezultato — aiškiai ir be streso',
  lead:
    'Visą darbą atlieku pats, todėl bendraujate su vienu žmogumi nuo pradžios iki pabaigos. Jokio biurokratinio chaoso.',
  steps: [
    {
      no: '01',
      title: 'Konsultacija ir strategija',
      text: 'Aptariame Jūsų verslą, tikslus ir klientus. Išsiaiškiname, kas Jūsų nišoje iš tiesų pritraukia užklausas. Šis žingsnis — nemokamas.',
    },
    {
      no: '02',
      title: 'Dizainas ir struktūra',
      text: 'Sukuriu individualų maketą, kuriame kiekvienas elementas veda lankytoją link skambučio ar užklausos.',
    },
    {
      no: '03',
      title: 'Programavimas',
      text: 'Svetainė tampa greita, saugi ir nepriekaištingai veikianti visuose įrenginiuose. Be šablonų — viskas nuo nulio.',
    },
    {
      no: '04',
      title: 'Paleidimas ir augimas',
      text: 'Paleidžiame svetainę, prijungiame „Google“ įrankius, o pasirinkus prenumeratą — įjungiame automatizacijas ir stebime rezultatus.',
    },
  ],
};

export const caseStudy = {
  eyebrow: 'Sėkmės istorija',
  title: 'ArbCut — arboristas, kurį randa pirmąjį',
  lead:
    'Mantas Gerulis, sertifikuotas arboristas, kreipėsi dėl svetainės, kuri atspindėtų profesionalumą ir generuotų užklausas. Rezultatas — viena geriausiai vertinamų arboristikos svetainių Lietuvoje.',
  client: 'Mantas Gerulis · ArbCut',
  niche: 'Arboristika ir aukštuminiai darbai',
  url: 'https://arbcut.lt',
  urlLabel: 'arbcut.lt',
  imgDesktop: '/assets/images/arbcut-desktop.webp',
  imgMobile: '/assets/images/arbcut-mobile.webp',
  challenge:
    'Stipri kompetencija realiame darbe, bet internete — beveik nematomas. Reikėjo svetainės, kuri įkvėptų pasitikėjimą ir verstų lankytojus palikti užklausą.',
  solution: [
    'Konversijai pritaikytas dizainas su aiškiu kvietimu skambinti',
    'Greita, mobiliesiems optimizuota svetainė',
    'Vietinis SEO ir „Google“ verslo profilio sustiprinimas',
    'Atsiliepimų sekcija pasitikėjimui kelti',
  ],
  results: [
    { value: 'TOP', label: 'pozicijos paslaugos.lt' },
    { value: '5,0★', label: 'vidutinis įvertinimas' },
    { value: '100+', label: 'klientų atsiliepimų' },
    { value: '<1 s', label: 'puslapio įkėlimas' },
  ],
  quote:
    'Svetainė atrodo geriau, nei tikėjausi, o užklausų pastebimai padaugėjo. Matas viską padarė greitai ir profesionaliai.',
  quoteAuthor: 'Mantas Gerulis, ArbCut',
  cta: { label: 'Aplankyti arbcut.lt', href: 'https://arbcut.lt' },
};

export const reviews = {
  eyebrow: 'Atsiliepimai',
  title: 'Ką sako klientai',
  lead: 'Keletas atsiliepimų apie darbą su JarvisCo. Norite palikti savo? Pasidalinkite įspūdžiais.',
  badge: 'Klientų atsiliepimai',
  ctaLabel: 'Palikite atsiliepimą',
  items: [
    {
      text: 'Svetainė atrodo geriau, nei tikėjausi, o užklausų pastebimai padaugėjo. Viskas padaryta greitai ir be jokio vargo iš mano pusės.',
      author: 'Mantas Gerulis',
      role: 'ArbCut — arboristas',
      stars: 5,
    },
    {
      text: 'Pagaliau turiu svetainę, kurios nesigėdiju parodyti klientams. Telefonas suskamba dažniau, o tai svarbiausia.',
      author: 'Tomas Kazlauskas',
      role: 'Santechnikos paslaugos',
      stars: 5,
    },
    {
      text: 'Profesionalus požiūris nuo pirmo pokalbio. Matas suprato, ko reikia mano verslui, ir pasiūlė daugiau, nei prašiau.',
      author: 'Rūta Vaitkutė',
      role: 'Grožio studija',
      stars: 5,
    },
    {
      text: 'Greitis ir komunikacija — geriausi, su kokiais teko dirbti. Svetainė pakrauna akimirksniu ir puikiai atrodo telefone.',
      author: 'Darius Petrauskas',
      role: 'Stogų dengimas',
      stars: 5,
    },
    {
      text: 'Automatinis atsiliepimų rinkimas pakeitė viską — per kelias savaites surinkome daugiau įvertinimų nei per metus.',
      author: 'Eglė Stankevičienė',
      role: 'Valymo paslaugos',
      stars: 5,
    },
    {
      text: 'Aiškios kainos, jokių staigmenų, rezultatas viršijo lūkesčius. Drąsiai rekomenduoju kiekvienam paslaugų verslui.',
      author: 'Andrius Jankauskas',
      role: 'Kraštovaizdžio tvarkymas',
      stars: 5,
    },
  ],
};

export const about = {
  eyebrow: 'Apie mane',
  title: 'Sveiki, esu Matas',
  paragraphs: [
    'Esu Matas Bašinskas — JarvisCo įkūrėjas ir žmogus, kuris asmeniškai sukurs Jūsų svetainę. Specializuojuosi paslaugų verslų svetainėse: arboristai, santechnikai, meistrai, stogdengiai ir kiti, kuriems internetas yra pagrindinis klientų šaltinis.',
    'Tikiu, kad svetainė nėra vien vizitinė kortelė — tai įrankis, kuris turi uždirbti. Todėl kiekvieną projektą kuriu nuo nulio, sutelkdamas dėmesį į greitį, patikimumą ir konversiją.',
    'Dirbdami su manimi, bendraujate tiesiogiai — be tarpininkų ir be paslėptų kaštų. Nuo pirmo pokalbio iki paleidimo ir tolesnio augimo.',
  ],
  img: '/assets/images/matas.webp',
  imgStudio: '/assets/images/studija.webp',
  points: [
    'Individualus kodas — jokių sunkių šablonų',
    'Vienas kontaktas nuo dizaino iki augimo',
    'Aiškios kainos ir terminai',
  ],
  signature: 'Matas Bašinskas',
  signatureRole: 'Įkūrėjas, JarvisCo',
};

export const faq = {
  eyebrow: 'D.U.K.',
  title: 'Dažniausiai užduodami klausimai',
  items: [
    {
      q: 'Kiek kainuoja svetainė?',
      a: 'Svetainės kūrimas kainuoja 500 € — vienkartinis mokestis, jokio mėnesinio mokesčio. Arba rinkitės augimo prenumeratą — svetainę gaunate kartu su automatizacijomis už 47 €/mėn (speciali kaina pirmiems klientams).',
    },
    {
      q: 'Per kiek laiko sukuriama svetainė?',
      a: 'Daugumą projektų paleidžiu per 7–14 dienų nuo turinio gavimo. Tikslesnį terminą suderiname konsultacijos metu.',
    },
    {
      q: 'Ar man reikia techninių žinių?',
      a: 'Visiškai ne. Pasirūpinu viskuo — nuo dizaino ir tekstų iki domeno, hostingo ir „Google“ įrankių. Jums tereikia papasakoti apie savo verslą.',
    },
    {
      q: 'Kas yra „praleisto skambučio“ SMS atsakymas?',
      a: 'Kai nespėjate atsiliepti, klientui automatiškai išsiunčiama draugiška SMS žinutė. Taip nepraranda nė vienos užklausos, o klientas jaučiasi pastebėtas.',
    },
    {
      q: 'Kaip padedate pasiekti aukštesnes pozicijas „Google“?',
      a: 'Optimizuoju svetainės techninę dalį ir turinį vietinei paieškai, sustiprinu „Google“ verslo profilį ir automatizuoju atsiliepimų rinkimą. Visa tai kelia Jūsų matomumą „Google“ ir paslaugos.lt.',
    },
    {
      q: 'Ar galiu nutraukti mėnesinę prenumeratą?',
      a: 'Taip, prenumeratą galite nutraukti bet kada — be baudų ir įsipareigojimų. Svetainė lieka Jūsų.',
    },
    {
      q: 'Ar dirbate ir su kitomis nišomis?',
      a: 'Specializuojuosi paslaugų versluose, tačiau galiu sukurti svetainę bet kuriai sričiai. Jei abejojate — parašykite, atsakysiu nuoširdžiai.',
    },
  ],
};

export const finalCta = {
  eyebrow: 'Pradėkime',
  title: 'Pasiruošę pritraukti daugiau klientų?',
  lead:
    'Pirmas pokalbis nemokamas ir be įsipareigojimų. Papasakokite apie savo verslą — pasakysiu, kaip svetainė ir automatizacijos gali padėti Jums augti.',
};

export const contact = {
  eyebrow: 'Kontaktai',
  title: 'Susisiekime',
  lead: 'Atsakau per kelias valandas darbo dienomis. Skambinkite, rašykite arba palikite užklausą — kaip Jums patogiau.',
  formTitle: 'Gaukite nemokamą pasiūlymą',
  // Web3Forms: įdėkite savo access key (https://web3forms.com). El. laiškai eis į brand.elPastas.
  web3formsKey: '0f0633c6-ce11-4ca0-b088-962df8b05bbe',
  fields: {
    name: 'Vardas',
    phone: 'Telefono numeris',
    email: 'El. paštas',
    message: 'Trumpai apie projektą',
  },
  submit: 'Siųsti užklausą',
  privacy: 'Pateikdami formą sutinkate, kad su Jumis būtų susisiekta dėl Jūsų užklausos.',
};

export const reviewPage = {
  title: 'Palikite atsiliepimą — JarvisCo',
  eyebrow: 'Jūsų nuomonė',
  heading: 'Kaip vertinate darbą su JarvisCo?',
  lead: 'Pasirinkite įvertinimą — Jūsų atsiliepimas padeda man tobulėti ir padeda kitiems verslams apsispręsti.',
  starsHint: 'Spustelėkite žvaigždutes',
  // Teigiamas kelias (4–5★)
  positiveTitle: 'Ačiū! Labai tai vertinu 💚',
  positiveText: 'Būtų nuostabu, jei savo įspūdžiais pasidalintumėte ir „Google“ — tai užtrunka vos minutę.',
  positiveCta: 'Palikti atsiliepimą „Google“',
  // Neigiamas kelias (1–3★)
  negativeTitle: 'Ačiū už atvirumą',
  negativeText:
    'Apgailestauju, kad nepateisinau lūkesčių. Parašykite man tiesiogiai — noriu suprasti, ką galiu padaryti geriau.',
  negativeCta: 'Parašyti Matui',
  back: 'Grįžti į svetainę',
};

export const footer = {
  tagline: 'Konversijai pritaikytos svetainės ir augimo automatizacijos paslaugų verslams visoje Lietuvoje.',
  reviewCta: 'Palikite atsiliepimą',
  legal: `© ${new Date().getFullYear()} JarvisCo. Visos teisės saugomos.`,
  builtWith: 'Sukurta su Astro, Three.js ir GSAP.',
};
