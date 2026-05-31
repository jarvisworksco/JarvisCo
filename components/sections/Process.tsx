const steps = [
  {
    n: "01",
    title: "Pokalbis",
    desc: "Nemokamas 20 minučių skambutis. Suprantu jūsų verslą, tikslinę auditoriją ir ko reikia svetainei. Jokių įpareigojimų.",
  },
  {
    n: "02",
    title: "Pasiūlymas",
    desc: 'Gaunate aiškų pasiūlymą: struktūra, terminai, kaina. Jokių paslėptų mokesčių, jokių „papildomų darbų" vėliau.',
  },
  {
    n: "03",
    title: "Kūrimas",
    desc: "Kuriu pagal aprobuotą dizainą. Siunčiu peržiūras — jūs komentuojate, aš taisau. Dirbame kartu, kol esate patenkinti.",
  },
  {
    n: "04",
    title: "Paleidimas",
    desc: "Svetainė — live. Toliau rūpinuosi hostingu ir priežiūra, kad viskas veiktų sklandžiai. Jūs daryti tai, ką išmanote geriausiai.",
  },
];

export default function Process() {
  return (
    <section
      id="procesas"
      style={{
        padding: "var(--section-py) 0",
        background: "var(--surface)",
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div className="container">
        {/* Header */}
        <div className="reveal" style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto clamp(3rem, 6vw, 5rem)" }}>
          <div className="sec-label" style={{ justifyContent: "center" }}>Procesas</div>
          <h2 style={{
            fontFamily: "var(--ff-lora, serif)",
            fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
            color: "var(--ink)",
            marginBottom: "1rem",
          }}>
            Nuo pokalbio iki <em style={{ fontStyle: "italic", color: "var(--accent)" }}>starto</em> — be streso.
          </h2>
          <p style={{ fontSize: "1.0625rem", color: "var(--ink-soft)", lineHeight: 1.65 }}>
            Paprasta, aiški eiga — žinote kiekvieną žingsnį iš anksto.
          </p>
        </div>

        {/* Steps grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))",
          gap: "1.5rem",
          position: "relative",
        }}>
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="reveal"
              data-delay={String(i * 0.1)}
              style={{ display: "flex", flexDirection: "column", gap: "1rem", padding: "0.25rem" }}
            >
              {/* Number circle */}
              <div style={{
                width: "52px", height: "52px",
                borderRadius: "50%",
                border: "1.5px solid var(--accent)",
                display: "flex", alignItems: "center", justifyContent: "center",
                background: "var(--accent-soft)",
              }}>
                <span style={{
                  fontFamily: "var(--ff-lora, serif)",
                  fontSize: "1rem", fontWeight: 700,
                  color: "var(--accent)",
                }}>
                  {s.n}
                </span>
              </div>

              <h3 style={{
                fontFamily: "var(--ff-lora, serif)",
                fontSize: "1.25rem",
                color: "var(--ink)",
                letterSpacing: "-0.01em",
              }}>
                {s.title}
              </h3>

              <p style={{ fontSize: "0.9375rem", color: "var(--ink-soft)", lineHeight: 1.65 }}>
                {s.desc}
              </p>

              {/* Connector */}
              {i < steps.length - 1 && (
                <div style={{
                  position: "absolute",
                  top: "26px",
                  left: `calc(${(i + 1) * 25}% - 0.75rem)`,
                  width: "calc(25% - 1.5rem)",
                  height: "1.5px",
                  background: "linear-gradient(to right, var(--accent), color-mix(in oklab, var(--accent) 30%, transparent))",
                  display: "none",
                }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
