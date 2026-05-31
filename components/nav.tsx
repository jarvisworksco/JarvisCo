"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Paslaugos", href: "#paslaugos" },
  { label: "Procesas",  href: "#procesas"  },
  { label: "Darbai",   href: "#darbai"    },
  { label: "Kainos",   href: "#kainos"    },
  { label: "D.U.K.",   href: "#duk"       },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 900) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <nav
        aria-label="Pagrindinis meniu"
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
          height: "68px",
          display: "flex", alignItems: "center",
          transition: "background 0.3s, border-color 0.3s, box-shadow 0.3s",
          background: scrolled
            ? "color-mix(in oklab, var(--bg) 88%, transparent)"
            : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
          boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.25)" : "none",
        }}
      >
        <div className="container" style={{ display: "flex", alignItems: "center" }}>
          {/* Wordmark */}
          <a
            href="#"
            aria-label="JarvisCo — grįžti į viršų"
            style={{ marginRight: "auto", display: "flex", alignItems: "center", gap: "0.5rem" }}
          >
            <span style={{
              fontFamily: "var(--ff-lora, serif)",
              fontWeight: 700,
              fontSize: "1.625rem",
              color: "var(--ink)",
              letterSpacing: "-0.04em",
            }}>
              Jarvis<span style={{ color: "var(--accent)" }}>Co</span>
            </span>
          </a>

          {/* Desktop links */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }} className="desktop-nav">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="nav-link"
                style={{ padding: "0.3rem 0.75rem" }}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#kontaktai"
            className="btn btn-primary desktop-nav"
            style={{ marginLeft: "1.5rem", fontSize: "0.875rem", padding: "0.6rem 1.25rem" }}
          >
            Pradėti projektą
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Uždaryti meniu" : "Atidaryti meniu"}
            aria-expanded={open}
            className="mobile-nav-btn"
            style={{
              display: "none",
              width: "40px", height: "40px",
              alignItems: "center", justifyContent: "center",
              borderRadius: "var(--r-sm)",
              border: "1px solid var(--line)",
              color: "var(--ink)",
              marginLeft: "0.75rem",
              transition: "background 0.2s",
            }}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        aria-hidden={!open}
        style={{
          position: "fixed", inset: 0, zIndex: 40,
          display: "flex", flexDirection: "column",
          background: "color-mix(in oklab, var(--bg) 96%, transparent)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          pointerEvents: open ? "auto" : "none",
          opacity: open ? 1 : 0,
          transform: open ? "translateY(0)" : "translateY(-8px)",
          transition: "opacity 0.25s var(--ease), transform 0.25s var(--ease)",
        }}
      >
        <div style={{ height: "68px" }} />
        <div style={{
          flex: 1, display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          gap: "0.25rem", padding: "0 var(--pad) 4rem",
        }}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: "var(--ff-lora, serif)",
                fontSize: "clamp(1.5rem, 5vw, 2.25rem)",
                fontWeight: 600,
                color: "var(--ink)",
                letterSpacing: "-0.02em",
                padding: "0.5rem 1rem",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--accent)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--ink)"; }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontaktai"
            onClick={() => setOpen(false)}
            className="btn btn-primary"
            style={{ marginTop: "2rem", fontSize: "1rem", padding: "0.875rem 2.5rem" }}
          >
            Pradėti projektą
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 899px) {
          .desktop-nav { display: none !important; }
          .mobile-nav-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
