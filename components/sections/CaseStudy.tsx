"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const deliverables = [
  "3–4 puslapių svetainė",
  "Mobiliai pritaikytas dizainas",
  "Kontaktų forma → email + SMS",
  "Google Business Profile setup",
  "SEO pagrindai (meta, sitemap)",
];

export default function CaseStudy() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cs-header", {
        y: 32,
        opacity: 0,
        duration: 0.65,
        ease: "power2.out",
        scrollTrigger: { trigger: ".cs-header", start: "top 85%" },
      });
      gsap.from(".cs-card", {
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: { trigger: ".cs-card", start: "top 82%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="py-[88px] px-6 md:px-8"
      style={{ background: "var(--jco-warm-white)" }}
      aria-labelledby="casestudy-heading"
    >
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="cs-header text-center max-w-[640px] mx-auto mb-14">
          <div
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-semibold tracking-[0.125px] mb-4"
            style={{
              background: "var(--jco-badge-bg)",
              color: "var(--jco-badge-text)",
            }}
          >
            Darbo pavyzdys
          </div>
          <h2
            id="casestudy-heading"
            className="text-[clamp(32px,4vw,48px)] font-bold leading-[1.0] mb-4"
            style={{
              letterSpacing: "clamp(-0.8px,-0.031em,-1.5px)",
              color: "var(--jco-black)",
              fontFeatureSettings: '"lnum","locl"',
            }}
          >
            Pavyzdys iš{" "}
            <span style={{ color: "var(--jco-blue)" }}>realaus projekto.</span>
          </h2>
          <p
            className="text-[17px] leading-[1.55]"
            style={{ color: "var(--jco-gray-500)" }}
          >
            Kiekviena svetainė — konkreti, greita, pritaikyta būtent tai
            paslaugai.
          </p>
        </div>

        {/* Card */}
        <div
          className="cs-card bg-white rounded-[16px] overflow-hidden max-w-[900px] mx-auto"
          style={{
            border: "1px solid rgba(0,0,0,0.1)",
            boxShadow: "var(--shadow-deep)",
          }}
        >
          {/* Browser chrome */}
          <div
            className="px-4 py-3 flex items-center gap-3"
            style={{
              background: "var(--jco-warm-white)",
              borderBottom: "1px solid rgba(0,0,0,0.08)",
            }}
          >
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full" style={{ background: "#ff5f57" }} />
              <span className="w-3 h-3 rounded-full" style={{ background: "#febc2e" }} />
              <span className="w-3 h-3 rounded-full" style={{ background: "#28c840" }} />
            </div>
            <div
              className="flex-1 max-w-[200px] mx-auto text-center text-[12px] font-medium px-3 py-1 rounded-[5px]"
              style={{
                background: "rgba(0,0,0,0.05)",
                color: "var(--jco-gray-500)",
              }}
            >
              🔒 arbcut.lt
            </div>
          </div>

          {/* Preview area */}
          <div
            className="relative overflow-hidden"
            style={{ height: "220px", background: "#0d1b2e" }}
          >
            {/* Abstract site preview */}
            <div className="absolute inset-0 flex flex-col">
              {/* Mock nav */}
              <div
                className="flex items-center px-8 py-3 gap-6"
                style={{ background: "rgba(255,255,255,0.05)" }}
              >
                <div className="w-20 h-3 rounded-full" style={{ background: "rgba(255,255,255,0.6)" }} />
                <div className="flex gap-4 ml-auto">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-12 h-2 rounded-full" style={{ background: "rgba(255,255,255,0.25)" }} />
                  ))}
                </div>
                <div className="w-16 h-6 rounded-[3px]" style={{ background: "#0075de" }} />
              </div>
              {/* Mock hero */}
              <div className="flex-1 flex flex-col items-center justify-center gap-3 px-8 text-center">
                <div className="w-64 h-4 rounded-full" style={{ background: "rgba(255,255,255,0.7)" }} />
                <div className="w-48 h-3 rounded-full" style={{ background: "rgba(255,255,255,0.35)" }} />
                <div className="flex gap-2 mt-2">
                  <div className="w-24 h-7 rounded-[3px]" style={{ background: "#0075de" }} />
                  <div className="w-24 h-7 rounded-[3px]" style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }} />
                </div>
              </div>
            </div>
            {/* Gradient overlay at bottom */}
            <div
              className="absolute bottom-0 left-0 right-0 h-16"
              style={{ background: "linear-gradient(to top, rgba(13,27,46,0.8), transparent)" }}
            />
          </div>

          {/* Info row */}
          <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="text-[12px] font-semibold px-2.5 py-1 rounded-full"
                  style={{
                    background: "var(--jco-badge-bg)",
                    color: "var(--jco-badge-text)",
                  }}
                >
                  Standard planas
                </span>
                <span
                  className="text-[12px] font-medium"
                  style={{ color: "var(--jco-gray-300)" }}
                >
                  · Arboristai
                </span>
              </div>
              <h3
                className="text-[22px] font-bold mb-1"
                style={{ color: "var(--jco-black)", letterSpacing: "-0.3px" }}
              >
                Arbcut
              </h3>
              <p
                className="text-[14px] leading-[1.6] mb-4"
                style={{ color: "var(--jco-gray-500)" }}
              >
                Profesionalių arboristų svetainė su galimybe susisiekti
                telefonu ir pateikti užklausą. Sukurta per 8 darbo dienas.
              </p>
              <a
                href="https://arbcut.lt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[14px] font-semibold transition-colors"
                style={{ color: "var(--jco-blue)" }}
              >
                Peržiūrėti svetainę
                <ArrowUpRight size={14} strokeWidth={2.5} />
              </a>
            </div>

            <div>
              <p
                className="text-[12px] font-semibold tracking-[0.05em] mb-3"
                style={{ color: "var(--jco-gray-300)" }}
              >
                KĄ ĮDIEGĖME
              </p>
              <ul className="flex flex-col gap-2">
                {deliverables.map((d) => (
                  <li
                    key={d}
                    className="flex items-center gap-2 text-[14px]"
                    style={{ color: "var(--jco-gray-500)" }}
                  >
                    <Check
                      size={14}
                      strokeWidth={2.5}
                      style={{ color: "var(--jco-blue)", flexShrink: 0 }}
                    />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
