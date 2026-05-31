const services = [
  {
    number: "01",
    title: "Svetainių kūrimas",
    description:
      "Profesionalus dizainas, sukurtas būtent jūsų verslui — ne šablonas iš katalogo. Greita, mobili, patraukli svetainė, kuri paverčia lankytojus skambinančiais klientais.",
    outcomes: ["Daugiau užklausų iš tinklapio", "Atrodo geriau nei konkurentai", "Veikia greitai visuose įrenginiuose"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    accent: "var(--accent)",
  },
  {
    number: "02",
    title: "SEO optimizacija",
    description:
      "Jūsų klientai jau dabar ieško jūsų paslaugų Google'e. Užtikriname, kad rastų būtent jus — ne konkurentą. Tikslinis SEO Lietuvos namų paslaugų nišai.",
    outcomes: ["1-3 puslapio pozicija Google", "Daugiau organinių lankytojų", "Ilgalaikis rezultatas be nuolatinių išlaidų"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="8"/>
        <path d="m21 21-4.35-4.35M11 8v6M8 11h6"/>
      </svg>
    ),
    accent: "var(--accent-2)",
  },
  {
    number: "03",
    title: "Google verslo profilis",
    description:
      "Google žemėlapiai — pirmasis dalykas, kurį mato potencialus klientas. Optimizuojame jūsų profilį, renkame atsiliepimus ir užtikriname maksimalų matomumą.",
    outcomes: ["Daugiau skambučių iš žemėlapių", "Geresni ir daugiau atsiliepimų", "Išsiskiriate tarp konkurentų"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    accent: "#22c55e",
  },
];

export default function Services() {
  return (
    <section id="paslaugos" style={{ padding: "var(--section-py) 0" }}>
      <div className="container">
        {/* Header */}
        <div className="reveal" style={{ marginBottom: "clamp(3rem, 6vw, 5rem)", maxWidth: "600px" }}>
          <div className="sec-label">Paslaugos</div>
          <h2 style={{
            fontFamily: "var(--ff-lora, serif)",
            fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
            color: "var(--ink)",
            marginBottom: "1rem",
          }}>
            Ką gausite —{" "}
            <em style={{ fontStyle: "italic", color: "var(--accent)" }}>konkrečiai</em>.
          </h2>
          <p style={{ fontSize: "1.0625rem", color: "var(--ink-soft)", lineHeight: 1.65 }}>
            Nesiūlome nieko „gražaus ir neaiškaus". Kiekviena paslauga — aiškus įrankis,
            kad klientas rastų, perskaitytų ir susisiekų su jumis.
          </p>
        </div>

        {/* Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
          gap: "1.25rem",
        }}>
          {services.map((s, i) => (
            <div
              key={s.number}
              className="card card-hover reveal"
              data-delay={String(i * 0.1)}
              style={{ padding: "2rem" }}
            >
              {/* Icon */}
              <div style={{
                width: "48px", height: "48px",
                borderRadius: "var(--r-sm)",
                background: `color-mix(in oklab, ${s.accent} 12%, transparent)`,
                border: `1px solid color-mix(in oklab, ${s.accent} 25%, transparent)`,
                display: "flex", alignItems: "center", justifyContent: "center",
                color: s.accent,
                marginBottom: "1.5rem",
              }}>
                {s.icon}
              </div>

              {/* Number */}
              <div style={{
                fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.1em",
                textTransform: "uppercase", color: s.accent,
                marginBottom: "0.625rem",
              }}>
                {s.number}
              </div>

              <h3 style={{
                fontFamily: "var(--ff-lora, serif)",
                fontSize: "1.375rem",
                color: "var(--ink)",
                marginBottom: "0.875rem",
                letterSpacing: "-0.01em",
              }}>
                {s.title}
              </h3>

              <p style={{
                fontSize: "0.9375rem", color: "var(--ink-soft)", lineHeight: 1.65,
                marginBottom: "1.5rem",
              }}>
                {s.description}
              </p>

              <div style={{ borderTop: "1px solid var(--line)", paddingTop: "1.25rem" }}>
                <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem", listStyle: "none" }}>
                  {s.outcomes.map((o) => (
                    <li key={o} style={{
                      display: "flex", alignItems: "flex-start", gap: "0.625rem",
                      fontSize: "0.875rem", color: "var(--ink-soft)",
                    }}>
                      <span style={{ color: s.accent, flexShrink: 0, marginTop: "0.05rem" }}>✓</span>
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
