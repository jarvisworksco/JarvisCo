"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "1",
    title: "Pokalbis",
    body: "Nemokamas 20 min skambutis. Suprantu, ką darote, kam, ir ko reikia svetainei.",
  },
  {
    num: "2",
    title: "Planas",
    body: "Gaunate aiškų pasiūlymą: struktūra, terminai, kaina. Jokių paslėptų mokesčių.",
  },
  {
    num: "3",
    title: "Kūrimas",
    body: "Kuriu pagal aprobuotą dizainą. Siunčiu peržiūrą — jūs komentuojate, aš taisau.",
  },
  {
    num: "4",
    title: "Paleidimas",
    body: "Svetainė — live. Toliau rūpinuosi hostingu ir priežiūra, kad viskas veiktų sklandžiai.",
  },
];

export default function Process() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".proc-header", {
        y: 32,
        opacity: 0,
        duration: 0.65,
        ease: "power2.out",
        scrollTrigger: { trigger: ".proc-header", start: "top 85%" },
      });
      gsap.from(".proc-step", {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.14,
        ease: "power2.out",
        scrollTrigger: { trigger: ".proc-grid", start: "top 82%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="procesas"
      ref={ref}
      className="py-[88px] px-6 md:px-8"
      style={{ background: "var(--jco-warm-white)" }}
      aria-labelledby="procesas-heading"
    >
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="proc-header text-center max-w-[640px] mx-auto mb-14">
          <div
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-semibold tracking-[0.125px] mb-4"
            style={{
              background: "var(--jco-badge-bg)",
              color: "var(--jco-badge-text)",
            }}
          >
            Procesas
          </div>
          <h2
            id="procesas-heading"
            className="text-[clamp(32px,4vw,48px)] font-bold leading-[1.0] mb-4"
            style={{
              letterSpacing: "clamp(-0.8px,-0.031em,-1.5px)",
              color: "var(--jco-black)",
              fontFeatureSettings: '"lnum","locl"',
            }}
          >
            Nuo pokalbio iki{" "}
            <span style={{ color: "var(--jco-blue)" }}>starto</span> — be
            streso.
          </h2>
          <p
            className="text-[17px] leading-[1.55]"
            style={{ color: "var(--jco-gray-500)" }}
          >
            Paprastas, aiškus procesas be techninių galvos skausmų jūsų
            pusėje.
          </p>
        </div>

        {/* Steps */}
        <div className="proc-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 relative">
          {steps.map(({ num, title, body }) => (
            <div key={num} className="proc-step text-center">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 text-[15px] font-bold text-white"
                style={{ background: "var(--jco-black)" }}
              >
                {num}
              </div>
              <h3
                className="text-[16px] font-bold mb-2"
                style={{ color: "var(--jco-black)" }}
              >
                {title}
              </h3>
              <p
                className="text-[14px] leading-[1.55]"
                style={{ color: "var(--jco-gray-500)" }}
              >
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
