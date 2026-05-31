"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Kiek laiko trunka svetainės kūrimas?",
    a: "Starter planas — 5 darbo dienos. Standard — 7–10 darbo dienų. Premium — individualiai, priklausomai nuo funkcionalumo. Terminus aptariame prieš pradedant, ir jų laikomės.",
  },
  {
    q: "Ar reikės man pačiam ieškoti domeno ir hostingo?",
    a: "Ne. Mėnesinis mokestis apima hostingą, SSL sertifikatą, atsargines kopijas ir techninę priežiūrą. Jūs nieko papildomai neprenumeruojate — viskas dengta.",
  },
  {
    q: "Ar galėsiu pats redaguoti tekstus ir nuotraukas?",
    a: "Standard ir Premium planuose — taip. Gaunate paprastą redaktorių, kuriame be kodavimo galite atnaujinti turinį. Starter plane pakeitimus atlieku aš per 1–2 d.d.",
  },
  {
    q: "Kas, jei svetainė sulūžta arba nustoja veikti?",
    a: "Mėnesinis priežiūros mokestis reiškia, kad stebime svetainę nuolat. Techninę problemą sutvarkau per kelias valandas. Jei kažkas sugenda — ne jūsų galvos skausmas.",
  },
  {
    q: "Ar dirbate tik su namų paslaugų verslais?",
    a: "Specializuojuosi būtent šiame segmente — santechnikai, elektrikai, valymo paslaugos, meistrai. Toks fokusas reiškia, kad žinau, kas veikia. Bet jei turite kitokios srities verslą — parašykite, aptarsime.",
  },
  {
    q: "Kaip apmokamos paslaugos?",
    a: "50% avansas pradžioje, likusi dalis — po paleidimo. Mėnesinis hostingas ir priežiūra atsiskaitoma kas mėnesį. Galima ir metinis apmokėjimas su nuolaida.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="duk"
      style={{
        padding: "var(--section-py) 0",
        background: "var(--surface)",
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div className="container" style={{ maxWidth: "820px" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: "clamp(3rem, 6vw, 5rem)" }}>
          <div className="sec-label" style={{ justifyContent: "center" }}>D.U.K.</div>
          <h2 style={{
            fontFamily: "var(--ff-lora, serif)",
            fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
            color: "var(--ink)",
          }}>
            Atsakymai,{" "}
            <em style={{ fontStyle: "italic", color: "var(--accent)" }}>prieš</em> klausiant.
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="card reveal"
                data-delay={String(i * 0.06)}
                style={{ overflow: "hidden" }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  style={{
                    width: "100%", textAlign: "left",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "1.375rem 1.5rem",
                    gap: "1rem",
                    background: "none", border: "none", cursor: "pointer",
                  }}
                >
                  <span style={{
                    fontFamily: "var(--ff-lora, serif)",
                    fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
                    color: "var(--ink)",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.3,
                    fontWeight: 500,
                  }}>
                    {faq.q}
                  </span>
                  <span style={{
                    display: "flex", alignItems: "center", justifyContent: "center",
                    width: "28px", height: "28px", flexShrink: 0,
                    borderRadius: "50%",
                    border: "1px solid var(--line)",
                    color: isOpen ? "var(--accent)" : "var(--ink-muted)",
                    borderColor: isOpen ? "var(--accent)" : "var(--line)",
                    background: isOpen ? "var(--accent-soft)" : "transparent",
                    transition: "all 0.25s var(--ease)",
                    transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    fontSize: "1.125rem", lineHeight: 1,
                  }}>
                    +
                  </span>
                </button>

                <div className={`acc-panel${isOpen ? " open" : ""}`}>
                  <div className="acc-inner">
                    <p style={{
                      padding: "0 1.5rem 1.375rem",
                      fontSize: "0.9375rem",
                      color: "var(--ink-soft)",
                      lineHeight: 1.7,
                    }}>
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
