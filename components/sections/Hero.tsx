"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useContactModal } from "@/context/contact-modal";

const stats = [
  { label: "Pristatymas", value: "nuo 5 d.d." },
  { label: "Kalba", value: "100% lietuvių" },
  { label: "Mobile greitis", value: "< 2s load" },
  { label: "Pagrindas", value: "SEO paruošta" },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { open: openModal } = useContactModal();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-badge", { y: 20, opacity: 0, duration: 0.6, ease: "power2.out" });
      gsap.from(".hero-headline", { y: 32, opacity: 0, duration: 0.7, ease: "power2.out", delay: 0.1 });
      gsap.from(".hero-sub", { y: 24, opacity: 0, duration: 0.65, ease: "power2.out", delay: 0.22 });
      gsap.from(".hero-btn", { y: 20, opacity: 0, duration: 0.6, stagger: 0.1, ease: "power2.out", delay: 0.34 });
      gsap.from(".hero-note", { y: 12, opacity: 0, duration: 0.5, ease: "power2.out", delay: 0.54 });
      gsap.from(".hero-stat", { y: 16, opacity: 0, duration: 0.5, stagger: 0.08, ease: "power2.out", delay: 0.66 });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-white pt-[88px] pb-20 px-6 md:px-8 text-center"
      aria-label="Pagrindinis skyrius"
    >
      {/* Badge */}
      <div
        className="hero-badge inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-semibold tracking-[0.125px] mb-6"
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
        className="hero-headline text-[clamp(40px,6vw,64px)] font-bold leading-[1.0] mx-auto mb-6"
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
        className="hero-sub mx-auto mb-10 text-[clamp(17px,2vw,20px)] font-semibold leading-[1.4]"
        style={{ color: "var(--jco-gray-500)", maxWidth: "560px", letterSpacing: "-0.125px" }}
      >
        Kuriame greitas, gražias ir efektyvias svetaines paslaugoms į namus
        Lietuvoje — santechnikams, elektrikams, meistrams, valytojams.
        Daugiau užklausų, mažiau rūpesčių.
      </p>

      {/* CTAs */}
      <div className="flex items-center justify-center gap-2.5 flex-wrap">
        <button
          onClick={() => openModal()}
          className="hero-btn inline-flex items-center justify-center text-[16px] font-semibold text-white px-6 py-3 rounded-[4px] transition-all duration-150 active:scale-95 cursor-pointer"
          style={{ background: "var(--jco-blue)" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--jco-blue-hover)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--jco-blue)"; }}
        >
          Pradėti projektą
        </button>
        <a
          href="#kainos"
          className="hero-btn inline-flex items-center justify-center text-[16px] font-semibold px-6 py-3 rounded-[4px] transition-all duration-150 active:scale-95"
          style={{ background: "rgba(0,0,0,0.05)", color: "rgba(0,0,0,0.9)" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(0,0,0,0.09)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(0,0,0,0.05)"; }}
        >
          Peržiūrėti kainas
        </a>
      </div>

      {/* Note */}
      <p className="hero-note mt-3.5 text-[13px]" style={{ color: "var(--jco-gray-300)" }}>
        Atsakome per 24 val. · Be jokių įsipareigojimų
      </p>

      {/* Stats row */}
      <div
        className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px mx-auto max-w-2xl"
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
            className="hero-stat flex flex-col items-center justify-center py-5 px-4 bg-white"
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
