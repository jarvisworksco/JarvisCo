"use client";

import { useEffect, useRef } from "react";
import { Mail, Phone, MessageSquare } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useContactModal } from "@/context/contact-modal";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const ref = useRef<HTMLElement>(null);
  const { open: openModal } = useContactModal();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cta-inner > *", {
        y: 32,
        opacity: 0,
        duration: 0.65,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: { trigger: ".cta-inner", start: "top 82%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="kontaktai"
      ref={ref}
      className="py-20 px-6 md:px-8 text-center"
      style={{ background: "var(--jco-black)" }}
      aria-labelledby="kontaktai-heading"
    >
      <div className="cta-inner max-w-[640px] mx-auto flex flex-col items-center">
        <h2
          id="kontaktai-heading"
          className="text-[clamp(32px,4vw,48px)] font-bold leading-[1.0] mb-4 text-white"
          style={{
            letterSpacing: "clamp(-0.8px,-0.031em,-1.5px)",
            fontFeatureSettings: '"lnum","locl"',
          }}
        >
          Pasikalbėkime apie{" "}
          <span style={{ color: "#62aef0" }}>jūsų</span> svetainę.
        </h2>
        <p
          className="text-[18px] leading-[1.55] mb-10"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          Nemokamas 20 minučių skambutis. Jokių įpareigojimų. Papasakosiu,
          ar galiu padėti, ir ką tiksliai siūlyčiau.
        </p>

        {/* Primary action */}
        <button
          onClick={() => openModal()}
          className="cta-primary inline-flex items-center justify-center gap-2 text-[16px] font-semibold text-white px-8 py-4 rounded-[4px] active:scale-95 cursor-pointer w-full max-w-xs mb-3"
          style={{ background: "var(--jco-blue)" }}
        >
          <MessageSquare size={18} strokeWidth={2} />
          Pradėti projektą
        </button>

        {/* Secondary contacts — ghost boxes */}
        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm justify-center">
          <a
            href="mailto:jarvisworks.co@gmail.com"
            className="cta-ghost inline-flex items-center justify-center gap-2 text-[14px] font-semibold px-4 py-3 rounded-[4px] active:scale-95 whitespace-nowrap"
            style={{
              background: "rgba(255,255,255,0.08)",
              color: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <Mail size={14} strokeWidth={2} />
            jarvisworks.co@gmail.com
          </a>
          <a
            href="tel:+37067699395"
            className="cta-ghost inline-flex items-center justify-center gap-2 text-[14px] font-semibold px-4 py-3 rounded-[4px] active:scale-95 whitespace-nowrap"
            style={{
              background: "rgba(255,255,255,0.08)",
              color: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <Phone size={14} strokeWidth={2} />
            <span className="whitespace-nowrap">+370 676 99395</span>
          </a>
        </div>
      </div>
    </section>
  );
}
