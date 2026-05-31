const reviews = [
  {
    name: "Mindaugas K.",
    trade: "Santechnikas, Vilnius",
    rating: 5,
    text: "Per pirmą mėnesį po paleidimo gavau 3 naujus klientus iš Google. Tikrai nemaniau, kad tai taip greitai atsipirks.",
    initials: "MK",
    color: "#1e3a5f",
  },
  {
    name: "Diana P.",
    trade: "Valymo paslaugos, Kaunas",
    rating: 5,
    text: "Viskas paaiškinta paprastai, be jokių painių žodžių. Gavau būtent tai, ko prašiau. Rekomenduočiau kiekvienam.",
    initials: "DP",
    color: "#0d7377",
  },
  {
    name: "Rokas J.",
    trade: "Elektrikas, Klaipėda",
    rating: 5,
    text: "Klientai pradėjo sakyti, kad atrodau rimtai. O man tik reikėjo normalios svetainės. Dabar skambina ir nepažįstami.",
    initials: "RJ",
    color: "#475569",
  },
  {
    name: "Aurimas V.",
    trade: "Stogdengys, Šiauliai",
    rating: 5,
    text: "Anksčiau visi ateidavo per pažįstamus. Dabar skambina žmonės, kurių visai nepažįstu — rado per Google.",
    initials: "AV",
    color: "#92400e",
  },
  {
    name: "Kristina M.",
    trade: "Namų valymas, Vilnius",
    rating: 5,
    text: "Svetainė veikia kaip turi — greitai kraunasi, gerai atrodo telefone, ir žmonės tikrai rašo per kontaktų formą.",
    initials: "KM",
    color: "#9f1239",
  },
  {
    name: "Darius Š.",
    trade: "Remonto darbai, Panevėžys",
    rating: 5,
    text: "Turėjau seną Wix svetainę, bet ji nieko neduodavo. Dabar yra skirtumas — svetainė iš tikrųjų dirba.",
    initials: "DŠ",
    color: "#3730a3",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: "0.2rem" }} aria-label={`${count} iš 5 žvaigždučių`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i < count ? "var(--accent-2)" : "var(--line-strong)"} aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      style={{
        padding: "var(--section-py) 0",
        background: "var(--surface)",
        borderTop: "1px solid var(--line)",
      }}
    >
      <div className="container">
        {/* Header */}
        <div className="reveal" style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto clamp(3rem, 6vw, 5rem)" }}>
          <div className="sec-label" style={{ justifyContent: "center" }}>Atsiliepimai</div>
          <h2 style={{
            fontFamily: "var(--ff-lora, serif)",
            fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
            color: "var(--ink)", marginBottom: "1rem",
          }}>
            Ką sako{" "}
            <em style={{ fontStyle: "italic", color: "var(--accent)" }}>klientai</em>.
          </h2>
          <p style={{ fontSize: "1.0625rem", color: "var(--ink-soft)", lineHeight: 1.65 }}>
            Tikri atsiliepimai iš tikrų verslininkų, kuriems padėjome augti.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
          gap: "1.125rem",
        }}>
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className="card reveal"
              data-delay={String((i % 3) * 0.08)}
              style={{ padding: "1.75rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}
            >
              <Stars count={r.rating} />

              <p style={{
                fontFamily: "var(--ff-lora, serif)",
                fontSize: "1rem",
                fontStyle: "italic",
                color: "var(--ink-soft)",
                lineHeight: 1.7,
                flex: 1,
              }}>
                „{r.text}"
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", borderTop: "1px solid var(--line)", paddingTop: "1.125rem" }}>
                <div style={{
                  width: "40px", height: "40px",
                  borderRadius: "50%",
                  background: r.color,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "0.75rem", fontWeight: 700, color: "#fff",
                  flexShrink: 0,
                }} aria-hidden="true">
                  {r.initials}
                </div>
                <div>
                  <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--ink)" }}>{r.name}</p>
                  <p style={{ fontSize: "0.75rem", color: "var(--ink-muted)", marginTop: "0.1rem" }}>{r.trade}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
