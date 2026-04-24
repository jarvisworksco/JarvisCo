"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { LogoMark } from "@/components/LogoMark";
import { useContactModal } from "@/context/contact-modal";

const links = [
  { label: "Paslaugos", href: "#paslaugos" },
  { label: "Procesas", href: "#procesas" },
  { label: "Kainos", href: "#kainos" },
  { label: "D.U.K.", href: "#duk" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { open: openModal } = useContactModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 h-14 flex items-center transition-all duration-200"
        style={{
          background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.95)",
          backdropFilter: "blur(10px)",
          borderBottom: scrolled
            ? "1px solid rgba(0,0,0,0.09)"
            : "1px solid rgba(0,0,0,0.04)",
          boxShadow: scrolled ? "rgba(0,0,0,0.04) 0px 2px 10px" : "none",
        }}
      >
        <div className="max-w-[1100px] mx-auto px-6 md:px-8 w-full flex items-center">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 mr-auto md:mr-8 shrink-0"
            aria-label="JarvisCo — grįžti į viršų"
          >
            <LogoMark size={28} />
            <span
              className="text-[15px] font-bold"
              style={{ color: "var(--jco-black)", letterSpacing: "-0.3px" }}
            >
              JarvisCo
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-0.5 flex-1">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-[14px] font-medium px-2.5 py-1.5 rounded-[5px] transition-all duration-150 cursor-pointer"
                style={{ color: "rgba(0,0,0,0.55)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "rgba(0,0,0,0.9)";
                  e.currentTarget.style.background = "rgba(0,0,0,0.04)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(0,0,0,0.55)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-2 ml-4">
            <button
              onClick={() => openModal()}
              className="text-[14px] font-semibold text-white px-4 py-2 rounded-[4px] transition-all duration-150 active:scale-95 cursor-pointer"
              style={{ background: "var(--jco-blue)" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "var(--jco-blue-hover)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "var(--jco-blue)"; }}
            >
              Pradėti projektą
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 ml-2 rounded-[5px]"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Uždaryti meniu" : "Atidaryti meniu"}
            aria-expanded={open}
          >
            {open
              ? <X size={20} style={{ color: "var(--jco-black)" }} />
              : <Menu size={20} style={{ color: "var(--jco-black)" }} />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className="fixed inset-0 z-40 flex flex-col md:hidden transition-all duration-250"
        style={{
          background: "rgba(255,255,255,0.98)",
          backdropFilter: "blur(12px)",
          pointerEvents: open ? "auto" : "none",
          opacity: open ? 1 : 0,
          transform: open ? "translateY(0)" : "translateY(-8px)",
        }}
        aria-hidden={!open}
      >
        <div className="h-14" />
        <div className="flex flex-col items-center justify-center flex-1 gap-1.5 px-6 pb-16">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="w-full max-w-xs text-center text-[20px] font-semibold py-3 rounded-xl cursor-pointer"
              style={{ color: "var(--jco-black)" }}
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => { setOpen(false); openModal(); }}
            className="mt-6 w-full max-w-xs text-center text-[16px] font-semibold text-white py-3.5 rounded-[4px] active:scale-95 cursor-pointer"
            style={{ background: "var(--jco-blue)" }}
          >
            Pradėti projektą
          </button>
        </div>
      </div>
    </>
  );
}
