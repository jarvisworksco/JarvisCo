"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const badges = [
  { icon: "⚡", text: "Pristatymas per 5–10 d.d." },
  { icon: "🇱🇹", text: "100% lietuvių kalba" },
  { icon: "💰", text: "Aiški kaina be staigmenų" },
];

function WordReveal({ text, accent }: { text: string; accent?: boolean }) {
  return (
    <>
      {text.split(" ").map((word, i) => (
        <span key={i} className="word-wrap" style={{ marginRight: "0.28em" }}>
          <span
            className="word-inner"
            style={{
              display: "inline-block",
              transform: "translateY(110%)",
              color: accent ? "var(--accent)" : undefined,
              transition: `transform 0.8s cubic-bezier(0.22,1,0.36,1) ${i * 0.07 + (accent ? 0.35 : 0)}s`,
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </>
  );
}

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Trigger word reveal
    requestAnimationFrame(() => {
      document.querySelectorAll(".hero-h1 .word-inner").forEach((el) => {
        (el as HTMLElement).style.transform = "translateY(0)";
      });
    });

    // Fade-in sub elements
    gsap.fromTo(".hero-fade", { opacity: 0, y: 22 }, {
      opacity: 1, y: 0, duration: 0.75, stagger: 0.12, ease: "power2.out", delay: 0.55,
    });

    // Parallax dot grid
    if (bgRef.current && sectionRef.current) {
      gsap.to(bgRef.current, {
        yPercent: 18,
        ease: "none",
        scrollTrigger: { trigger: sectionRef.current, start: "top top", end: "bottom top", scrub: true },
      });
    }
  }, []);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      style={{ position: "relative", minHeight: "100svh", display: "flex", alignItems: "center", overflow: "hidden", paddingTop: "68px" }}
    >
      {/* Animated dot grid bg */}
      <div ref={bgRef} className="dot-grid" style={{ position: "absolute", inset: "-20%", zIndex: 0, opacity: 0.5 }} />

      {/* Radial glow */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 1,
        background: "radial-gradient(ellipse 70% 55% at 50% 0%, color-mix(in oklab, var(--accent) 9%, transparent), transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Bottom fade to bg */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: "30%", zIndex: 1,
        background: "linear-gradient(to bottom, transparent, var(--bg))",
        pointerEvents: "none",
      }} />

      {/* Main content */}
      <div
        className="container"
        style={{
          position: "relative", zIndex: 2,
          paddingTop: "clamp(3.5rem, 9vw, 6rem)",
          paddingBottom: "clamp(5rem, 12vw, 8rem)",
        }}
      >
        {/* Status pill */}
        <div className="hero-fade" style={{ opacity: 0, marginBottom: "2rem" }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: "0.625rem",
            fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.09em",
            textTransform: "uppercase", color: "var(--ink-soft)",
          }}>
            <span style={{
              display: "inline-block", width: "8px", height: "8px",
              borderRadius: "50%", background: "#22c55e",
              boxShadow: "0 0 0 3px color-mix(in oklab, #22c55e 28%, transparent)",
              animation: "pulse-dot 2.5s ease infinite",
            }} />
            Kaunas · Visa Lietuva · Priimame projektus
          </span>
        </div>

        {/* Headline */}
        <h1
          className="hero-h1"
          style={{
            fontFamily: "var(--ff-lora, serif)",
            fontSize: "clamp(2.6rem, 7.5vw, 6.75rem)",
            lineHeight: 1.04,
            letterSpacing: "-0.03em",
            color: "var(--ink)",
            maxWidth: "15ch",
            marginBottom: "1.875rem",
          }}
        >
          <WordReveal text="Svetainės ir SEO," />
          <br />
          <WordReveal text="kurie" />{" "}
          <WordReveal text="atneša" accent />{" "}
          <WordReveal text="klientus." />
        </h1>

        {/* Subheadline */}
        <p
          className="hero-fade"
          style={{
            opacity: 0,
            fontSize: "clamp(1rem, 1.6vw, 1.2rem)",
            color: "var(--ink-soft)",
            maxWidth: "54ch",
            lineHeight: 1.65,
            marginBottom: "2.625rem",
          }}
        >
          Kuriame profesionalias svetaines ir vykdome SEO optimizaciją namų paslaugų
          verslams visoje Lietuvoje — santechnikams, elektrikams, meistrams ir kitiems.{" "}
          <strong style={{ color: "var(--ink)", fontWeight: 600 }}>Daugiau skambučių iš Google.</strong>
        </p>

        {/* CTA buttons */}
        <div
          className="hero-fade"
          style={{ opacity: 0, display: "flex", flexWrap: "wrap", gap: "0.875rem", marginBottom: "3.5rem" }}
        >
          <a
            href="#kontaktai"
            onClick={(e) => { e.preventDefault(); scrollTo("#kontaktai"); }}
            className="btn btn-primary"
            style={{ fontSize: "1rem", padding: "0.9rem 2rem" }}
          >
            Gaukite nemokamą pasiūlymą
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <button
            onClick={() => scrollTo("#darbai")}
            className="btn btn-ghost"
            style={{ fontSize: "1rem", padding: "0.9rem 2rem" }}
          >
            Peržiūrėti darbus
          </button>
        </div>

        {/* Trust badges */}
        <div className="hero-fade" style={{ opacity: 0, display: "flex", flexWrap: "wrap", gap: "0.625rem" }}>
          {badges.map((b) => (
            <div
              key={b.text}
              className="glass"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                padding: "0.5rem 1rem",
                borderRadius: "var(--r-full)",
                fontSize: "0.8125rem", fontWeight: 500,
                color: "var(--ink-soft)",
              }}
            >
              <span aria-hidden="true" style={{ fontSize: "0.875rem" }}>{b.icon}</span>
              {b.text}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute", bottom: "2rem", left: "50%",
        transform: "translateX(-50%)",
        zIndex: 2,
        display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem",
      }}>
        <span style={{ fontSize: "0.625rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-muted)" }}>Slinkite</span>
        <div style={{
          width: "1.5px", height: "2.5rem",
          background: "linear-gradient(to bottom, var(--accent), transparent)",
          animation: "scroll-line 2s ease-in-out infinite",
        }} />
      </div>

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { box-shadow: 0 0 0 3px color-mix(in oklab, #22c55e 25%, transparent); }
          50%       { box-shadow: 0 0 0 6px color-mix(in oklab, #22c55e 10%, transparent); }
        }
        @keyframes scroll-line {
          0%, 100% { opacity: 0.25; transform: scaleY(0.5); transform-origin: top; }
          50%       { opacity: 0.9;  transform: scaleY(1);   transform-origin: top; }
        }
      `}</style>
    </section>
  );
}
