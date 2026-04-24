const trades = [
  "Santechnikai",
  "Elektrikai",
  "Meistrai",
  "Valymo paslaugos",
  "Remontininkai",
  "Šildymo specialistai",
  "Dažytojai",
  "Stogdengiai",
  "Arboristai",
  "Grindų klojėjai",
  "Langų valymas",
  "Baldų surinkimas",
  "Tvoros ir vartai",
  "Sodo priežiūra",
  "Slėgio plovimas",
  "Kondicionieriai",
];

// Triple for a very long track — visual repeat point is invisible
const tripled = [...trades, ...trades, ...trades];

export default function Marquee() {
  return (
    <div
      className="overflow-hidden py-3.5"
      style={{
        background: "var(--jco-warm-white)",
        borderTop: "1px solid rgba(0,0,0,0.07)",
        borderBottom: "1px solid rgba(0,0,0,0.07)",
      }}
      aria-hidden="true"
    >
      <div
        style={{
          display: "flex",
          width: "max-content",
          willChange: "transform",
          animation: "marquee-scroll 45s linear infinite",
        }}
      >
        {tripled.map((trade, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              fontSize: "13px",
              fontWeight: 600,
              color: "var(--jco-gray-300)",
              paddingLeft: "20px",
              paddingRight: "20px",
              whiteSpace: "nowrap",
            }}
          >
            {trade}
            <span
              style={{
                display: "inline-block",
                width: "3px",
                height: "3px",
                borderRadius: "50%",
                background: "var(--jco-gray-300)",
                opacity: 0.4,
                marginLeft: "20px",
              }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
