const trades = [
  "Santechnikai", "Elektrikai", "Meistrai", "Valymo paslaugos",
  "Remontininkai", "Šildymo specialistai", "Dažytojai", "Stogdengiai",
  "Arboristai", "Grindų klojėjai", "Langų valymas", "Aplinkos tvarkymas",
  "Kondicionieriai", "Apsaugos sistemos", "Vidaus apdaila", "Baldų surinkimas",
];

const tripled = [...trades, ...trades, ...trades];

export default function Marquee() {
  return (
    <div
      style={{
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
        background: "var(--surface)",
        padding: "1.125rem 0",
        overflow: "hidden",
        userSelect: "none",
      }}
      aria-hidden="true"
    >
      <div className="marquee-track">
        {tripled.map((trade, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "1.75rem",
              paddingInline: "1.75rem",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--ink-muted)",
              whiteSpace: "nowrap",
            }}
          >
            {trade}
            <span style={{ color: "var(--accent)", opacity: 0.4, fontSize: "0.4rem" }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
