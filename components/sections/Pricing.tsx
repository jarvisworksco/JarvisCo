"use client";

const plans = [
  {
    name: "Starter",
    price: "500€",
    monthly: "+ 20€/mėn",
    tagline: "Profesionali vizitinė kortelė internete.",
    features: [
      "Klientas randa jus Google'e",
      "Matosi ką darote ir kaip susisiekti",
      "Atrodo gerai telefone ir kompiuteryje",
      "1 puslapis, iki 5 sekcijų",
      "Pristatymas per 5 d.d.",
    ],
    cta: "Rinktis Starter",
    featured: false,
    badge: null,
    accentColor: "var(--ink-soft)",
  },
  {
    name: "Standard",
    price: "900€",
    monthly: "+ 30€/mėn",
    tagline: "Pilnavertė svetainė su užklausomis tiesiai į telefoną.",
    features: [
      "Viskas iš Starter plano",
      "Darbų galerija su prieš / po nuotraukomis",
      "Užklausos forma — gausite el. laišką IR SMS",
      "Google Business profilio sutvarkymas",
      "3–4 puslapiai (Paslaugos, Galerija, Kontaktai)",
      "Pristatymas per 7–10 d.d.",
    ],
    addonNote: '+ AI pokalbių robotas — 400€ priedas',
    cta: "Rinktis Standard",
    featured: true,
    badge: "Populiariausias",
    accentColor: "var(--accent)",
  },
  {
    name: "Premium",
    price: "2200€",
    monthly: "+ 50€/mėn",
    tagline: "Viskas automatizuota — klientas rezervuoja, jūs tiesiog atvykstate.",
    features: [
      "Viskas iš Standard plano",
      "AI pokalbių robotas (įskaičiuota)",
      "Online rezervacija: klientas pats pasirenka laiką",
      "Blog'as naujienom ir SEO turiniui",
      "Kelių miestų / filialų palaikymas",
      "1 mėnuo nemokamo SEO po paleidimo",
      "Individualus pristatymo terminas",
    ],
    cta: "Rinktis Premium",
    featured: false,
    badge: "Pilnas paketas",
    accentColor: "var(--accent-2)",
  },
];

function PlanCard({ plan }: { plan: typeof plans[0] }) {
  const scrollToContact = () => {
    const el = document.querySelector("#kontaktai");
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
  };

  if (plan.featured) {
    return (
      <div
        style={{
          background: "var(--ink)",
          borderRadius: "var(--r)",
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 0 0 1px rgba(255,255,255,0.1), 0 24px 64px rgba(77,123,254,0.15)",
        }}
      >
        {/* Glow */}
        <div style={{
          position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
          width: "120%", height: "180px",
          background: "radial-gradient(ellipse at top, color-mix(in oklab, var(--accent) 20%, transparent), transparent 70%)",
          pointerEvents: "none",
        }} />

        {plan.badge && (
          <div style={{
            alignSelf: "flex-start",
            padding: "0.3rem 0.875rem",
            borderRadius: "var(--r-full)",
            background: "var(--accent)",
            fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.08em",
            textTransform: "uppercase", color: "#fff",
            marginBottom: "1.25rem",
          }}>
            {plan.badge}
          </div>
        )}

        <div style={{ fontSize: "0.875rem", fontWeight: 700, color: "#0a1020", marginBottom: "0.5rem" }}>{plan.name}</div>
        <div style={{
          fontFamily: "var(--ff-lora, serif)",
          fontSize: "clamp(2rem, 4vw, 2.75rem)",
          fontWeight: 700, color: "#07090f",
          letterSpacing: "-0.03em", lineHeight: 1,
          marginBottom: "0.375rem",
        }}>
          {plan.price}
        </div>
        <div style={{ fontSize: "0.8125rem", color: "#3a4a60", marginBottom: "0.25rem" }}>vienkartinis</div>
        <div style={{ fontSize: "0.8125rem", color: "#4a5a78", marginBottom: "1rem" }}>{plan.monthly} — hostingas ir priežiūra</div>
        <p style={{ fontSize: "0.875rem", fontStyle: "italic", color: "#3a4a60", marginBottom: "1.25rem", lineHeight: 1.55 }}>{plan.tagline}</p>
        <div style={{ height: "1px", background: "rgba(0,0,0,0.1)", marginBottom: "1.25rem" }} />

        <ul style={{ display: "flex", flexDirection: "column", gap: "0.625rem", marginBottom: "1.25rem", flex: 1, listStyle: "none" }}>
          {plan.features.map((f) => (
            <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem", fontSize: "0.875rem", color: "#1a2a40" }}>
              <span style={{ color: "var(--accent)", flexShrink: 0, fontWeight: 700 }}>✓</span>
              {f}
            </li>
          ))}
        </ul>

        {'addonNote' in plan && plan.addonNote && (
          <p style={{ fontSize: "0.75rem", fontStyle: "italic", color: "#5a6a80", marginBottom: "1.25rem" }}>
            „{plan.addonNote}"
          </p>
        )}

        <button
          onClick={scrollToContact}
          className="btn"
          style={{
            background: "var(--accent)", color: "#fff",
            border: "none", justifyContent: "center",
            fontSize: "0.9375rem", padding: "0.8125rem",
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--accent-hover)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--accent)"; }}
        >
          {plan.cta}
        </button>
      </div>
    );
  }

  return (
    <div
      className="card"
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--line-strong)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(0,0,0,0.3)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--line)";
        (e.currentTarget as HTMLElement).style.transform = "";
        (e.currentTarget as HTMLElement).style.boxShadow = "";
      }}
      style={{ padding: "2rem", display: "flex", flexDirection: "column", transition: "border-color 0.25s, transform 0.3s var(--ease), box-shadow 0.25s" }}
    >
      {plan.badge && (
        <div style={{
          alignSelf: "flex-start",
          padding: "0.3rem 0.875rem",
          borderRadius: "var(--r-full)",
          background: `color-mix(in oklab, ${plan.accentColor} 12%, transparent)`,
          border: `1px solid color-mix(in oklab, ${plan.accentColor} 25%, transparent)`,
          fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.08em",
          textTransform: "uppercase", color: plan.accentColor,
          marginBottom: "1.25rem",
        }}>
          {plan.badge}
        </div>
      )}

      <div style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--ink-soft)", marginBottom: "0.5rem" }}>{plan.name}</div>
      <div style={{
        fontFamily: "var(--ff-lora, serif)",
        fontSize: "clamp(2rem, 4vw, 2.75rem)",
        fontWeight: 700, color: "var(--ink)",
        letterSpacing: "-0.03em", lineHeight: 1,
        marginBottom: "0.375rem",
      }}>
        {plan.price}
      </div>
      <div style={{ fontSize: "0.8125rem", color: "var(--ink-muted)", marginBottom: "0.25rem" }}>vienkartinis</div>
      <div style={{ fontSize: "0.8125rem", color: "var(--ink-muted)", marginBottom: "1rem" }}>{plan.monthly} — hostingas ir priežiūra</div>
      <p style={{ fontSize: "0.875rem", fontStyle: "italic", color: "var(--ink-muted)", marginBottom: "1.25rem", lineHeight: 1.55 }}>{plan.tagline}</p>
      <div style={{ height: "1px", background: "var(--line)", marginBottom: "1.25rem" }} />

      <ul style={{ display: "flex", flexDirection: "column", gap: "0.625rem", marginBottom: "1.25rem", flex: 1, listStyle: "none" }}>
        {plan.features.map((f) => (
          <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem", fontSize: "0.875rem", color: "var(--ink-soft)" }}>
            <span style={{ color: "var(--accent)", flexShrink: 0 }}>✓</span>
            {f}
          </li>
        ))}
      </ul>

      <button
        onClick={scrollToContact}
        className="btn btn-ghost"
        style={{ justifyContent: "center", fontSize: "0.9375rem", padding: "0.8125rem" }}
      >
        {plan.cta}
      </button>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="kainos" style={{ padding: "var(--section-py) 0" }}>
      <div className="container">
        <div className="reveal" style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto clamp(3rem, 6vw, 5rem)" }}>
          <div className="sec-label" style={{ justifyContent: "center" }}>Kainos</div>
          <h2 style={{
            fontFamily: "var(--ff-lora, serif)",
            fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
            color: "var(--ink)", marginBottom: "1rem",
          }}>
            Trys planai. Viena{" "}
            <em style={{ fontStyle: "italic", color: "var(--accent)" }}>aiški</em> kaina.
          </h2>
          <p style={{ fontSize: "1.0625rem", color: "var(--ink-soft)", lineHeight: 1.65 }}>
            Kiekviena svetainė su hostingu ir priežiūra. Be paslėptų mokesčių, be „papildomų darbų".
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.25rem",
          alignItems: "start",
        }}
          className="pricing-grid"
        >
          {plans.map((plan, i) => (
            <div key={plan.name} className="reveal" data-delay={String(i * 0.1)}>
              <PlanCard plan={plan} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .pricing-grid { grid-template-columns: 1fr !important; } }
        @media (min-width: 600px) and (max-width: 900px) { .pricing-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </section>
  );
}
