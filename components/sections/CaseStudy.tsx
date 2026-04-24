"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, Globe } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const deliverables = [
  "3–4 puslapių struktūra",
  "Mobiliai pritaikytas dizainas",
  "Kontaktų forma → email + SMS",
  "Google Business Profile setup",
  "SEO pagrindai (meta, sitemap)",
];

export default function CaseStudy() {
  const ref = useRef<HTMLElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeOk, setIframeOk] = useState<boolean | null>(null); // null = loading

  // Detect if iframe was blocked: after onLoad fires, try accessing contentDocument.
  // Cross-origin sites that allow embedding fire onLoad normally.
  // Sites that block via X-Frame-Options also fire onLoad (with an about:blank or
  // error page). We use a 2s timeout: if onLoad hasn't fired → blocked.
  useEffect(() => {
    const timer = setTimeout(() => {
      if (iframeOk === null) setIframeOk(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, [iframeOk]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cs-header", {
        y: 32, opacity: 0, duration: 0.65, ease: "power2.out",
        scrollTrigger: { trigger: ".cs-header", start: "top 85%" },
      });
      gsap.from(".cs-card", {
        y: 40, opacity: 0, duration: 0.7, ease: "power2.out",
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
            style={{ background: "var(--jco-badge-bg)", color: "var(--jco-badge-text)" }}
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
          <p className="text-[17px] leading-[1.55]" style={{ color: "var(--jco-gray-500)" }}>
            Kiekviena svetainė — konkreti, greita, pritaikyta būtent tai paslaugai.
          </p>
        </div>

        {/* Card */}
        <div
          className="cs-card bg-white rounded-[16px] overflow-hidden max-w-[900px] mx-auto"
          style={{ border: "1px solid rgba(0,0,0,0.1)", boxShadow: "var(--shadow-deep)" }}
        >
          {/* Browser chrome */}
          <div
            className="px-4 py-2.5 flex items-center gap-3 shrink-0"
            style={{
              background: "#f0efed",
              borderBottom: "1px solid rgba(0,0,0,0.1)",
            }}
          >
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full" style={{ background: "#ff5f57" }} />
              <span className="w-3 h-3 rounded-full" style={{ background: "#febc2e" }} />
              <span className="w-3 h-3 rounded-full" style={{ background: "#28c840" }} />
            </div>
            <div
              className="flex-1 flex items-center justify-center gap-1.5 text-[12px] font-medium px-3 py-1 rounded-[5px] max-w-[200px] mx-auto"
              style={{ background: "rgba(0,0,0,0.08)", color: "var(--jco-gray-500)" }}
            >
              <Globe size={11} strokeWidth={2} />
              arbcut.lt
            </div>
          </div>

          {/* Iframe viewport */}
          <div className="relative" style={{ height: "340px", background: "#f0efed" }}>
            {/* Live iframe attempt */}
            <iframe
              ref={iframeRef}
              src="https://arbcut.lt"
              title="Arbcut.lt svetainė"
              className="absolute inset-0 w-full h-full border-0"
              style={{ display: iframeOk === false ? "none" : "block" }}
              onLoad={() => setIframeOk(true)}
              sandbox="allow-scripts allow-same-origin allow-forms"
            />

            {/* Fallback mock (shown while loading or if iframe blocked) */}
            {iframeOk !== true && (
              <div
                className="absolute inset-0 flex flex-col"
                style={{ background: "#0d1b2e" }}
              >
                {/* Mock nav */}
                <div
                  className="flex items-center px-8 py-3 gap-6 shrink-0"
                  style={{ background: "rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <div className="w-24 h-3 rounded-full" style={{ background: "rgba(255,255,255,0.5)" }} />
                  <div className="flex gap-4 ml-auto">
                    {[60, 48, 56].map((w, i) => (
                      <div key={i} className="h-2 rounded-full" style={{ width: w, background: "rgba(255,255,255,0.2)" }} />
                    ))}
                  </div>
                  <div className="w-20 h-7 rounded-[3px]" style={{ background: "#0075de" }} />
                </div>
                {/* Mock hero */}
                <div className="flex-1 flex flex-col items-center justify-center gap-4 px-8 text-center">
                  <div className="w-72 h-5 rounded-full" style={{ background: "rgba(255,255,255,0.65)" }} />
                  <div className="w-52 h-3 rounded-full" style={{ background: "rgba(255,255,255,0.3)" }} />
                  <div className="w-48 h-3 rounded-full" style={{ background: "rgba(255,255,255,0.2)" }} />
                  <div className="flex gap-3 mt-2">
                    <div className="h-9 w-28 rounded-[4px]" style={{ background: "#0075de" }} />
                    <div className="h-9 w-28 rounded-[4px]" style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.18)" }} />
                  </div>
                </div>
                {/* Mock feature strip */}
                <div
                  className="flex justify-center gap-8 px-8 py-4 shrink-0"
                  style={{ background: "rgba(255,255,255,0.03)", borderTop: "1px solid rgba(255,255,255,0.06)" }}
                >
                  {[80, 64, 72, 68].map((w, i) => (
                    <div key={i} className="h-2 rounded-full" style={{ width: w, background: "rgba(255,255,255,0.15)" }} />
                  ))}
                </div>
                {iframeOk === null && (
                  <div className="absolute inset-0 flex items-end justify-center pb-4">
                    <span className="text-[11px] font-medium px-2 py-1 rounded-full" style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.4)" }}>
                      Jungiamasi prie arbcut.lt…
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Info row */}
          <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="text-[12px] font-semibold px-2.5 py-1 rounded-full"
                  style={{ background: "var(--jco-badge-bg)", color: "var(--jco-badge-text)" }}
                >
                  Standard planas
                </span>
                <span className="text-[12px] font-medium" style={{ color: "var(--jco-gray-300)" }}>
                  · Arboristai
                </span>
              </div>
              <h3
                className="text-[22px] font-bold mb-1"
                style={{ color: "var(--jco-black)", letterSpacing: "-0.3px" }}
              >
                Arbcut
              </h3>
              <p className="text-[14px] leading-[1.6] mb-4" style={{ color: "var(--jco-gray-500)" }}>
                Profesionalių arboristų svetainė su galimybe susisiekti
                telefonu ir pateikti užklausą. Sukurta per 8 darbo dienas.
              </p>
              <a
                href="https://arbcut.lt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[14px] font-semibold"
                style={{ color: "var(--jco-blue)" }}
              >
                Peržiūrėti svetainę
                <ArrowUpRight size={14} strokeWidth={2.5} />
              </a>
            </div>

            <div>
              <p className="text-[12px] font-semibold tracking-[0.05em] mb-3" style={{ color: "var(--jco-gray-300)" }}>
                KĄ ĮDIEGĖME
              </p>
              <ul className="flex flex-col gap-2">
                {deliverables.map((d) => (
                  <li key={d} className="flex items-center gap-2 text-[14px]" style={{ color: "var(--jco-gray-500)" }}>
                    <Check size={14} strokeWidth={2.5} style={{ color: "var(--jco-blue)", flexShrink: 0 }} />
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
