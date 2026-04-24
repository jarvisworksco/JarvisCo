"use client";

import { useContactModal } from "@/context/contact-modal";

const stats = [
  { label: "Pristatymas", value: "nuo 5 d.d." },
  { label: "Mobile greitis", value: "< 2s load" },
  { label: "Pagrindas", value: "SEO paruošta" },
];

export default function Hero() {
  const { open: openModal } = useContactModal();

  return (
    <section
      className="bg-white pt-[88px] pb-20 px-6 md:px-8 text-center"
      aria-label="Pagrindinis skyrius"
    >
      {/* Badge */}
      <div
        className="hero-anim hero-anim-d1 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-semibold tracking-[0.125px] mb-6"
        style={{ background: "var(--jco-badge-bg)", color: "var(--jco-badge-text)" }}
      >
        <span
          className="inline-block w-1.5 h-1.5 rounded-full animate-pulse"
          style={{ background: "var(--jco-green)" }}
          aria-hidden="true"
        />
        Priimame projektus · 2026 Q2
      </div>

      {/* Headline */}
      <h1
        className="hero-anim hero-anim-d2 text-[clamp(40px,6vw,64px)] font-bold leading-[1.0] mx-auto mb-6"
        style={{
          letterSpacing: "clamp(-1px,-0.033em,-2.125px)",
          color: "var(--jco-black)",
          maxWidth: "780px",
          fontFeatureSettings: '"lnum","locl"',
        }}
      >
        Svetainės, kurios{" "}
        <span style={{ color: "var(--jco-blue)" }}>dirba</span>{" "}
        už jūsų verslą.
      </h1>

      {/* Sub-headline */}
      <p
        className="hero-anim hero-anim-d3 mx-auto mb-10 text-[clamp(17px,2vw,20px)] font-semibold leading-[1.4]"
        style={{ color: "var(--jco-gray-500)", maxWidth: "560px", letterSpacing: "-0.125px" }}
      >
        Kuriame greitas, gražias ir efektyvias svetaines paslaugų į namus
        verslams Lietuvoje — santechnikams, elektrikams, meistrams,
        valytojams. Daugiau užklausų, mažiau rūpesčių.
      </p>

      {/* CTAs */}
      <div className="hero-anim hero-anim-d4 flex items-center justify-center gap-2.5 flex-wrap">
        <button
          onClick={() => openModal()}
          className="inline-flex items-center justify-center text-[16px] font-semibold text-white px-6 py-3 rounded-[4px] active:scale-95 cursor-pointer hero-btn-primary"
          style={{ background: "var(--jco-blue)" }}
        >
          Pradėti projektą
        </button>
        <a
          href="#kainos"
          className="inline-flex items-center justify-center text-[16px] font-semibold px-6 py-3 rounded-[4px] active:scale-95 hero-btn-secondary"
          style={{ background: "rgba(0,0,0,0.05)", color: "rgba(0,0,0,0.9)" }}
        >
          Peržiūrėti kainas
        </a>
      </div>

      {/* Note */}
      <p className="hero-anim hero-anim-d5 mt-3.5 text-[13px]" style={{ color: "var(--jco-gray-300)" }}>
        Atsakome per 24 val. · Be jokių įsipareigojimų
      </p>

      {/* Stats row */}
      <div
        className="hero-anim hero-anim-d6 mt-14 grid grid-cols-3 gap-px mx-auto max-w-xl"
        style={{
          border: "1px solid rgba(0,0,0,0.08)",
          borderRadius: "12px",
          overflow: "hidden",
          background: "rgba(0,0,0,0.08)",
        }}
      >
        {stats.map((s) => (
          <div
            key={s.label}
            className="flex flex-col items-center justify-center py-5 px-4 bg-white"
          >
            <span className="text-[12px] font-medium mb-1" style={{ color: "var(--jco-gray-300)" }}>
              {s.label}
            </span>
            <span className="text-[15px] font-bold" style={{ color: "var(--jco-black)" }}>
              {s.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
