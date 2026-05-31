const values = [
  "Aiški kaina nuo pat pradžių",
  "Pristatymas laiku, kiekvieną kartą",
  "Dizainas pagal jūsų verslą",
  "Palaikymas po paleidimo",
  "SEO pagrindai kiekvienoje svetainėje",
  "Tik lietuvių kalba",
];

export default function About() {
  return (
    <section
      id="apie"
      style={{
        padding: "var(--section-py) 0",
        borderTop: "1px solid var(--line)",
      }}
    >
      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(3rem, 6vw, 6rem)",
          alignItems: "center",
        }}
          className="about-grid"
        >
          {/* Left — text */}
          <div className="reveal">
            <div className="sec-label">Apie mane</div>
            <h2 style={{
              fontFamily: "var(--ff-lora, serif)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "var(--ink)",
              marginBottom: "1.5rem",
              lineHeight: 1.1,
            }}>
              Ne agentūra. Vienas specialistas,{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>visas dėmesys</em> — jums.
            </h2>

            <p style={{ fontSize: "1.0625rem", color: "var(--ink-soft)", lineHeight: 1.7, marginBottom: "1.25rem" }}>
              Esu Matas iš Kauno — web dizaineris ir SEO specialistas, dirbantis išimtinai su
              namų paslaugų verslais. Santechnikais, elektrikais, meistrai, valytojai — žinau,
              ko jums reikia iš svetainės.
            </p>
            <p style={{ fontSize: "1.0625rem", color: "var(--ink-soft)", lineHeight: 1.7, marginBottom: "2rem" }}>
              Agentūrose jūsų projektas pasimeta tarp dešimčių kitų. Pas mane — ne. Dirbu su
              nedaug klientų vienu metu, todėl kiekvienas projektas gauna visą mano dėmesį
              ir patirtį.
            </p>

            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0.625rem",
              marginBottom: "2.5rem",
            }}>
              {values.map((v) => (
                <div key={v} style={{
                  display: "flex", alignItems: "flex-start", gap: "0.5rem",
                  fontSize: "0.875rem", color: "var(--ink-soft)",
                }}>
                  <span style={{ color: "var(--accent)", flexShrink: 0, fontWeight: 700 }}>✓</span>
                  {v}
                </div>
              ))}
            </div>

            <a href="#kontaktai" className="btn btn-primary">
              Pasikalbėkime
            </a>
          </div>

          {/* Right — visual card */}
          <div className="reveal" data-delay="0.15">
            <div
              className="card"
              style={{
                padding: "clamp(1.75rem, 4vw, 3rem)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Decorative glow */}
              <div style={{
                position: "absolute", top: 0, right: 0,
                width: "200px", height: "200px",
                background: "radial-gradient(circle, var(--accent-soft), transparent 70%)",
                pointerEvents: "none",
              }} />

              {/* Stats */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "2rem" }}>
                {[
                  { value: "5–10", label: "Dienų pristatymas" },
                  { value: "100%", label: "Lietuvių kalba" },
                  { value: "SEO", label: "Kiekvienoje svetainėje" },
                  { value: "24/7", label: "Monitoringas" },
                ].map((s) => (
                  <div key={s.label}>
                    <div style={{
                      fontFamily: "var(--ff-lora, serif)",
                      fontSize: "2rem", fontWeight: 700,
                      color: "var(--accent)",
                      letterSpacing: "-0.03em", lineHeight: 1,
                      marginBottom: "0.25rem",
                    }}>
                      {s.value}
                    </div>
                    <div style={{ fontSize: "0.8125rem", color: "var(--ink-muted)" }}>{s.label}</div>
                  </div>
                ))}
              </div>

              <div style={{ height: "1px", background: "var(--line)", marginBottom: "1.5rem" }} />

              <p style={{
                fontSize: "0.9375rem",
                fontFamily: "var(--ff-lora, serif)",
                fontStyle: "italic",
                color: "var(--ink-soft)",
                lineHeight: 1.65,
              }}>
                „Mano tikslas — ne graži svetainė, o svetainė, kuri skambina. Kiekvieną projektą
                vertinu pagal vieną klausimą: ar tai padės klientui gauti daugiau užsakymų?"
              </p>

              <p style={{ fontSize: "0.8125rem", fontWeight: 600, color: "var(--ink-muted)", marginTop: "1rem" }}>
                — Matas, JarvisCo įkūrėjas
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
