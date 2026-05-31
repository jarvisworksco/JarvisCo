const projects = [
  {
    client: "Arbcut.lt",
    category: "Svetainių kūrimas · Starter planas",
    headline: "Arboristo svetainė, kuri pasirodė Google per 2 savaites.",
    description:
      "Arbcut — sertifikuotas arboristas iš Vilniaus. Prieš projektą: Facebook puslapis ir burnos žodis. Po projekto: profesionali svetainė su SEO pagrindais, kontaktų forma ir mobilia versija.",
    deliverables: [
      "1 puslapis (landing scroll stiliaus)",
      "Iki 5 turinio sekcijų",
      "Mobiliai pritaikytas dizainas",
      "Kontaktų forma → el. laiškas",
      "SEO pagrindai (meta, sitemap)",
    ],
    url: "https://arbcut.lt",
    tag: "Starter — 500€",
  },
];

export default function Portfolio() {
  return (
    <section id="darbai" style={{ padding: "var(--section-py) 0" }}>
      <div className="container">
        {/* Header */}
        <div className="reveal" style={{ marginBottom: "clamp(3rem, 6vw, 5rem)" }}>
          <div className="sec-label">Darbai</div>
          <h2 style={{
            fontFamily: "var(--ff-lora, serif)",
            fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
            color: "var(--ink)",
            marginBottom: "1rem",
            maxWidth: "18ch",
          }}>
            Realūs projektai,{" "}
            <em style={{ fontStyle: "italic", color: "var(--accent)" }}>realūs rezultatai</em>.
          </h2>
          <p style={{ fontSize: "1.0625rem", color: "var(--ink-soft)", lineHeight: 1.65, maxWidth: "52ch" }}>
            Kiekvienas projektas — unikali svetainė, ne šablonas. Daugėja darbų — daugės ir čia.
          </p>
        </div>

        {projects.map((p) => (
          <div
            key={p.client}
            className="card reveal"
            style={{ overflow: "hidden" }}
          >
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 0,
            }}
              className="portfolio-grid"
            >
              {/* Info side */}
              <div style={{ padding: "clamp(1.75rem, 4vw, 3rem)" }}>
                <div style={{
                  display: "inline-block",
                  padding: "0.3rem 0.875rem",
                  borderRadius: "var(--r-full)",
                  background: "var(--accent-soft)",
                  border: "1px solid color-mix(in oklab, var(--accent) 25%, transparent)",
                  fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.06em",
                  textTransform: "uppercase", color: "var(--accent)",
                  marginBottom: "1.5rem",
                }}>
                  {p.tag}
                </div>

                <h3 style={{
                  fontFamily: "var(--ff-lora, serif)",
                  fontSize: "clamp(1.25rem, 2.5vw, 1.625rem)",
                  color: "var(--ink)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                  marginBottom: "1rem",
                }}>
                  {p.headline}
                </h3>

                <p style={{
                  fontSize: "0.9375rem", color: "var(--ink-soft)",
                  lineHeight: 1.65, marginBottom: "1.75rem",
                }}>
                  {p.description}
                </p>

                <div style={{ borderTop: "1px solid var(--line)", paddingTop: "1.5rem", marginBottom: "1.75rem" }}>
                  <p style={{
                    fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em",
                    textTransform: "uppercase", color: "var(--ink-muted)",
                    marginBottom: "0.875rem",
                  }}>
                    Kas įskaičiuota
                  </p>
                  <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem", listStyle: "none" }}>
                    {p.deliverables.map((d) => (
                      <li key={d} style={{
                        display: "flex", alignItems: "flex-start", gap: "0.625rem",
                        fontSize: "0.875rem", color: "var(--ink-soft)",
                      }}>
                        <span style={{ color: "var(--accent)", flexShrink: 0 }}>✓</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                  style={{ fontSize: "0.875rem" }}
                >
                  Žiūrėti svetainę
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
                </a>
              </div>

              {/* Preview side */}
              <div style={{
                background: "var(--surface-2)",
                borderLeft: "1px solid var(--line)",
                position: "relative",
                minHeight: "420px",
                display: "flex",
                flexDirection: "column",
              }}>
                {/* Browser chrome */}
                <div style={{
                  padding: "0.75rem 1rem",
                  borderBottom: "1px solid var(--line)",
                  display: "flex", alignItems: "center", gap: "0.5rem",
                  flexShrink: 0,
                }}>
                  <div style={{ display: "flex", gap: "0.4rem" }}>
                    {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
                      <div key={c} style={{ width: "10px", height: "10px", borderRadius: "50%", background: c }} />
                    ))}
                  </div>
                  <div style={{
                    flex: 1, marginLeft: "0.5rem",
                    background: "var(--surface)",
                    border: "1px solid var(--line)",
                    borderRadius: "var(--r-xs)",
                    padding: "0.25rem 0.75rem",
                    fontSize: "0.75rem", color: "var(--ink-muted)",
                  }}>
                    {p.url.replace("https://", "")}
                  </div>
                </div>

                <div style={{ flex: 1, overflow: "hidden" }} data-lenis-prevent>
                  <iframe
                    src={p.url}
                    title={`${p.client} svetainė`}
                    style={{
                      border: "none",
                      width: "100%", height: "100%", minHeight: "380px",
                      opacity: 0.95, display: "block",
                    }}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .portfolio-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
