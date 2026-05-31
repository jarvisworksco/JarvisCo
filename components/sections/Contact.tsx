"use client";

import { useActionState } from "react";
import { Loader2, CheckCircle } from "lucide-react";
import { sendInquiry, type InquiryState } from "@/app/actions";

const initial: InquiryState = { status: "idle" };

const businessTypes = [
  "Santechnikas", "Elektrikas", "Meistras / Remontininkas",
  "Valymo paslaugos", "Stogdengys", "Dažytojas",
  "Šildymo specialistas", "Aplinkos tvarkymas", "Kita",
];

export default function Contact() {
  const [state, action, pending] = useActionState(sendInquiry, initial);

  return (
    <section id="kontaktai" style={{ padding: "var(--section-py) 0" }}>
      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.6fr",
          gap: "clamp(3rem, 6vw, 6rem)",
          alignItems: "start",
        }}
          className="contact-grid"
        >
          {/* Left sidebar */}
          <div className="reveal">
            <div className="sec-label">Kontaktai</div>
            <h2 style={{
              fontFamily: "var(--ff-lora, serif)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "var(--ink)",
              lineHeight: 1.1,
              marginBottom: "1.25rem",
            }}>
              Pradėkime jūsų{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>projektą</em>.
            </h2>
            <p style={{ fontSize: "1rem", color: "var(--ink-soft)", lineHeight: 1.65, marginBottom: "2.5rem" }}>
              Užpildykite formą ir atsakysime per 24 val. Nemokama konsultacija — jokių įpareigojimų.
            </p>

            {/* Contact info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <a href="tel:+37067699395" style={{
                display: "flex", alignItems: "center", gap: "0.875rem",
                textDecoration: "none",
              }}>
                <div style={{
                  width: "44px", height: "44px", borderRadius: "var(--r-sm)",
                  background: "var(--accent-soft)",
                  border: "1px solid color-mix(in oklab, var(--accent) 25%, transparent)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "var(--accent)", flexShrink: 0,
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8a16 16 0 006.73 6.73l1.16-1.16a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                </div>
                <div>
                  <p style={{ fontSize: "0.75rem", color: "var(--ink-muted)", marginBottom: "0.125rem" }}>Telefonas</p>
                  <p style={{ fontSize: "1rem", fontWeight: 600, color: "var(--ink)" }}>+370 676 99395</p>
                </div>
              </a>

              <a href="mailto:jarvisworks.co@gmail.com" style={{
                display: "flex", alignItems: "center", gap: "0.875rem",
                textDecoration: "none",
              }}>
                <div style={{
                  width: "44px", height: "44px", borderRadius: "var(--r-sm)",
                  background: "var(--accent-soft)",
                  border: "1px solid color-mix(in oklab, var(--accent) 25%, transparent)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "var(--accent)", flexShrink: 0,
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <p style={{ fontSize: "0.75rem", color: "var(--ink-muted)", marginBottom: "0.125rem" }}>El. paštas</p>
                  <p style={{ fontSize: "0.9375rem", fontWeight: 600, color: "var(--ink)" }}>jarvisworks.co@gmail.com</p>
                </div>
              </a>

              <div style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
                <div style={{
                  width: "44px", height: "44px", borderRadius: "var(--r-sm)",
                  background: "var(--accent-soft)",
                  border: "1px solid color-mix(in oklab, var(--accent) 25%, transparent)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "var(--accent)", flexShrink: 0,
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <p style={{ fontSize: "0.75rem", color: "var(--ink-muted)", marginBottom: "0.125rem" }}>Vieta</p>
                  <p style={{ fontSize: "1rem", fontWeight: 600, color: "var(--ink)" }}>Kaunas · Visa Lietuva</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="card reveal" data-delay="0.15" style={{ padding: "clamp(1.75rem, 4vw, 2.5rem)" }}>
            {state.status === "success" ? (
              <div style={{ textAlign: "center", padding: "2rem 0" }}>
                <CheckCircle size={48} style={{ color: "#22c55e", margin: "0 auto 1rem" }} strokeWidth={1.5} />
                <h3 style={{
                  fontFamily: "var(--ff-lora, serif)",
                  fontSize: "1.5rem", color: "var(--ink)", marginBottom: "0.75rem",
                }}>
                  Žinutė išsiųsta!
                </h3>
                <p style={{ fontSize: "1rem", color: "var(--ink-soft)" }}>
                  Susisieksime su jumis per 24 valandas.
                </p>
              </div>
            ) : (
              <form action={action} style={{ display: "flex", flexDirection: "column", gap: "1.125rem" }}>
                {/* Honeypot */}
                <input name="website" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true"
                  style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0 }} />

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-2col">
                  <div>
                    <label htmlFor="cf-name" className="form-label">
                      Vardas <span style={{ color: "var(--accent)" }}>*</span>
                    </label>
                    <input id="cf-name" name="name" type="text" required placeholder="Jūsų vardas" className="form-input" />
                  </div>
                  <div>
                    <label htmlFor="cf-phone" className="form-label">Telefonas</label>
                    <input id="cf-phone" name="phone" type="tel" placeholder="+370 000 00000" className="form-input" />
                  </div>
                </div>

                <div>
                  <label htmlFor="cf-email" className="form-label">
                    El. paštas <span style={{ color: "var(--accent)" }}>*</span>
                  </label>
                  <input id="cf-email" name="email" type="email" required placeholder="jusu@el.pastas.lt" className="form-input" />
                </div>

                <div>
                  <label htmlFor="cf-plan" className="form-label">Planas</label>
                  <select id="cf-plan" name="plan" className="form-input">
                    <option value="">Pasirinkite planą (neprivaloma)</option>
                    <option value="Starter — 500€">Starter — 500€</option>
                    <option value="Standard — 900€">Standard — 900€</option>
                    <option value="Premium — 2200€">Premium — 2200€</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="cf-message" className="form-label">Žinutė</label>
                  <textarea
                    id="cf-message" name="message" rows={4}
                    placeholder="Trumpai apie savo verslą ir ko norėtumėte..."
                    className="form-input"
                    style={{ resize: "none" }}
                  />
                </div>

                {state.status === "error" && (
                  <p style={{ fontSize: "0.875rem", color: "#f87171" }}>{state.message}</p>
                )}

                <button
                  type="submit"
                  disabled={pending}
                  className="btn btn-primary"
                  style={{ justifyContent: "center", fontSize: "1rem", padding: "0.9rem" }}
                >
                  {pending && <Loader2 size={16} className="animate-spin" />}
                  {pending ? "Siunčiama..." : "Siųsti užklausą"}
                </button>

                <p style={{ textAlign: "center", fontSize: "0.8125rem", color: "var(--ink-muted)" }}>
                  Arba skambinkite:{" "}
                  <a href="tel:+37067699395" style={{ fontWeight: 600, color: "var(--ink-soft)", textDecoration: "none" }}>
                    +370 676 99395
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-2col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
