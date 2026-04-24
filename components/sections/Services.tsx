"use client";

import { useEffect, useRef } from "react";
import { Paintbrush, Zap, PhoneCall } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    icon: Paintbrush,
    title: "Unikalus dizainas",
    body: "Jokių šabloniškų temų iš katalogo. Kuriame dizainą, kuris atspindi būtent jūsų verslo charakterį ir klientų lūkesčius.",
  },
  {
    icon: Zap,
    title: "Greitis ir SEO",
    body: "Svetainės kraunasi greitai, atrodo gerai telefone, planšetėje ir ekrane. Google indeksuoja, klientai randa.",
  },
  {
    icon: PhoneCall,
    title: "Užklausų sistema",
    body: "Kontaktų forma, skambučio mygtukas, SMS pranešimai — viskas, kad užklausa ne pamestų laiku, o pasiektų jus iš karto.",
  },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".svc-header", {
        y: 32,
        opacity: 0,
        duration: 0.65,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".svc-header",
          start: "top 85%",
        },
      });
      gsap.from(".svc-card", {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".svc-grid",
          start: "top 82%",
        },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="paslaugos"
      ref={ref}
      className="py-[88px] px-6 md:px-8 bg-white"
      aria-labelledby="paslaugos-heading"
    >
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="svc-header text-center max-w-[640px] mx-auto mb-14">
          <div
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-semibold tracking-[0.125px] mb-4"
            style={{
              background: "var(--jco-badge-bg)",
              color: "var(--jco-badge-text)",
            }}
          >
            Paslaugos
          </div>
          <h2
            id="paslaugos-heading"
            className="text-[clamp(32px,4vw,48px)] font-bold leading-[1.0] mb-4"
            style={{
              letterSpacing: "clamp(-0.8px,-0.031em,-1.5px)",
              color: "var(--jco-black)",
              fontFeatureSettings: '"lnum","locl"',
            }}
          >
            Ką gausite —{" "}
            <span style={{ color: "var(--jco-blue)" }}>konkrečiai.</span>
          </h2>
          <p
            className="text-[17px] leading-[1.55]"
            style={{ color: "var(--jco-gray-500)" }}
          >
            Nesiūlome nieko &bdquo;gražaus ir neaiškaus&ldquo;. Kiekviena
            svetainė — aiškus įrankis, kad klientas rastų, perskaitytų ir
            parašytų.
          </p>
        </div>

        {/* Cards */}
        <div className="svc-grid grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="svc-card bg-white rounded-[12px] p-7 border transition-shadow duration-200 cursor-default"
              style={{
                border: "1px solid rgba(0,0,0,0.1)",
                boxShadow: "var(--shadow-card)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "rgba(0,0,0,0.08) 0px 8px 24px, rgba(0,0,0,0.04) 0px 3px 8px";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "var(--shadow-card)";
              }}
            >
              <div
                className="w-10 h-10 rounded-[8px] flex items-center justify-center mb-4"
                style={{ background: "var(--jco-badge-bg)" }}
              >
                <Icon
                  size={20}
                  style={{ color: "var(--jco-blue)" }}
                  strokeWidth={1.5}
                />
              </div>
              <h3
                className="text-[17px] font-bold mb-2"
                style={{
                  color: "var(--jco-black)",
                  letterSpacing: "-0.2px",
                }}
              >
                {title}
              </h3>
              <p
                className="text-[14px] leading-[1.6]"
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
