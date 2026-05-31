export default function CTA() {
  return (
    <section
      style={{
        padding: "var(--section-py) 0",
        background: "var(--surface)",
        borderTop: "1px solid var(--line)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Radial glow */}
      <div style={{
        position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
        width: "800px", height: "400px",
        background: "radial-gradient(ellipse, color-mix(in oklab, var(--accent) 8%, transparent), transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="container" style={{ textAlign: "center", position: "relative" }}>
        <div className="reveal">
          <div className="sec-label" style={{ justifyContent: "center" }}>Pradėkite šiandien</div>

          <h2 style={{
            fontFamily: "var(--ff-lora, serif)",
            fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)",
            color: "var(--ink)",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            marginBottom: "1.25rem",
            maxWidth: "16ch",
            margin: "0 auto 1.25rem",
          }}>
            Pasikalbėkime apie{" "}
            <em style={{ fontStyle: "italic", color: "var(--accent)" }}>jūsų</em>{" "}
            svetainę.
          </h2>

          <p style={{
            fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
            color: "var(--ink-soft)",
            maxWidth: "50ch",
            margin: "0 auto 2.5rem",
            lineHeight: 1.65,
          }}>
            Nemokamas 20 minučių skambutis. Jokių įpareigojimų. Papasakosiu, ar galiu
            padėti, ir ką tiksliai siūlyčiau jūsų verslui.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center", marginBottom: "2rem" }}>
            <a href="#kontaktai" className="btn btn-primary" style={{ fontSize: "1.0625rem", padding: "1rem 2.25rem" }}>
              Gaukite nemokamą pasiūlymą
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="tel:+37067699395" className="btn btn-ghost" style={{ fontSize: "1.0625rem", padding: "1rem 2.25rem" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8a16 16 0 006.73 6.73l1.16-1.16a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
              +370 676 99395
            </a>
          </div>

          <p style={{ fontSize: "0.875rem", color: "var(--ink-muted)" }}>
            Atsakome per 24 val. · Nemokama konsultacija
          </p>
        </div>
      </div>
    </section>
  );
}
