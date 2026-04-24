"use client";

import { useEffect, useRef } from "react";
import { Check } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useContactModal } from "@/context/contact-modal";

gsap.registerPlugin(ScrollTrigger);

interface Plan {
  name: string;
  price: string;
  recurring: string;
  tagline: string;
  features: string[];
  cta: string;
  badge?: string;
  featured?: boolean;
}

const plans: Plan[] = [
  {
    name: "Starter",
    price: "500€",
    recurring: "+ 20€/mėn — hostingas ir priežiūra",
    tagline: "Profesionali vizitinė kortelė internete.",
    cta: "Rinktis Starter",
    features: [
      "Klientas randa jus Google'e",
      "Matosi ką darote ir kaip susisiekti",
      "Atrodo gerai telefone ir kompiuteryje",
      "1 puslapis, iki 5 sekcijų",
      "Pristatymas per 5 d.d.",
    ],
  },
  {
    name: "Standard",
    price: "900€",
    recurring: "+ 30€/mėn — hostingas ir priežiūra",
    tagline: "Pilnavertė svetainė su užklausomis tiesiai į telefoną.",
    cta: "Rinktis Standard",
    badge: "Populiariausias",
    featured: true,
    features: [
      "Viskas iš Starter plano",
      "Darbų galerija su prieš / po nuotraukomis",
      "Užklausos forma — gausite el. laišką IR SMS",
      "Google Business profilio sutvarkymas",
      "3–4 puslapiai (Paslaugos, Galerija, Kontaktai)",
      "Pristatymas per 7–10 d.d.",
    ],
  },
  {
    name: "Premium",
    price: "1800€",
    recurring: "+ 50€/mėn — hostingas ir priežiūra",
    tagline: "Viskas automatizuota — klientas rezervuoja, jūs tiesiog atvykstate.",
    cta: "Rinktis Premium",
    badge: "Pilnas paketas",
    features: [
      "Viskas iš Standard plano",
      "Online rezervacija: klientas pats pasirenka laiką",
      "Blog'as naujienom ir SEO turiniui",
      "Kelių miestų / filialų palaikymas",
      "1 mėnuo nemokamo SEO po paleidimo",
      "Individualus pristatymo terminas",
    ],
  },
];

function PricingCard({ plan }: { plan: Plan }) {
  const { open: openModal } = useContactModal();

  if (plan.featured) {
    return (
      <div
        className="pricing-card rounded-[16px] p-8 flex flex-col relative"
        style={{
          background: "var(--jco-black)",
          border: "1px solid rgba(0,0,0,0.9)",
          boxShadow: "var(--shadow-deep)",
        }}
      >
        {plan.badge && (
          <div
            className="inline-flex self-start items-center px-3 py-1 rounded-full text-[12px] font-semibold tracking-[0.125px] mb-3"
            style={{ background: "rgba(255,255,255,0.12)", color: "#62aef0" }}
          >
            {plan.badge}
          </div>
        )}
        <div className="text-[15px] font-bold mb-1.5" style={{ color: "#fff" }}>
          {plan.name}
        </div>
        <div
          className="text-[40px] font-bold mb-1"
          style={{ color: "#fff", letterSpacing: "-1px", lineHeight: 1.0 }}
        >
          {plan.price}
        </div>
        <div className="text-[13px] mb-1" style={{ color: "rgba(255,255,255,0.45)" }}>
          vienkartinis
        </div>
        <div className="text-[13px] mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>
          {plan.recurring}
        </div>
        <p className="text-[13px] italic mb-5 leading-[1.5]" style={{ color: "rgba(255,255,255,0.5)" }}>
          {plan.tagline}
        </p>
        <div className="h-px mb-5" style={{ background: "rgba(255,255,255,0.1)" }} />
        <ul className="flex flex-col gap-2.5 mb-7 flex-1">
          {plan.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-[14px]" style={{ color: "rgba(255,255,255,0.7)" }}>
              <Check size={15} className="mt-0.5 shrink-0" style={{ color: "#62aef0" }} strokeWidth={2.5} />
              {f}
            </li>
          ))}
        </ul>
        <button
          onClick={() => openModal(plan.name)}
          className="block w-full text-center text-[15px] font-semibold text-white py-2.5 rounded-[4px] transition-all duration-150 active:scale-[0.97] cursor-pointer"
          style={{ background: "var(--jco-blue)" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--jco-blue-hover)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--jco-blue)"; }}
        >
          {plan.cta}
        </button>
      </div>
    );
  }

  return (
    <div
      className="pricing-card bg-white rounded-[16px] p-8 flex flex-col transition-shadow duration-200"
      style={{ border: "1px solid rgba(0,0,0,0.1)", boxShadow: "var(--shadow-card)" }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "rgba(0,0,0,0.08) 0px 8px 24px, rgba(0,0,0,0.04) 0px 3px 8px"; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-card)"; }}
    >
      <div className="text-[15px] font-bold mb-1.5" style={{ color: "var(--jco-black)" }}>
        {plan.name}
      </div>
      <div
        className="text-[40px] font-bold mb-1"
        style={{ color: "var(--jco-black)", letterSpacing: "-1px", lineHeight: 1.0 }}
      >
        {plan.price}
      </div>
      <div className="text-[13px] mb-1" style={{ color: "var(--jco-gray-300)" }}>
        vienkartinis
      </div>
      <div className="text-[13px] mb-4" style={{ color: "var(--jco-gray-300)" }}>
        {plan.recurring}
      </div>
      <p className="text-[13px] italic mb-5 leading-[1.5]" style={{ color: "var(--jco-gray-400, #c8c4bf)" }}>
        {plan.tagline}
      </p>
      <div className="h-px mb-5" style={{ background: "rgba(0,0,0,0.08)" }} />
      <ul className="flex flex-col gap-2.5 mb-7 flex-1">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-[14px]" style={{ color: "var(--jco-gray-500)" }}>
            <Check size={15} className="mt-0.5 shrink-0" style={{ color: "var(--jco-blue)" }} strokeWidth={2.5} />
            {f}
          </li>
        ))}
      </ul>
      <button
        onClick={() => openModal(plan.name)}
        className="block w-full text-center text-[15px] font-semibold py-2.5 rounded-[4px] transition-all duration-150 active:scale-[0.97] cursor-pointer"
        style={{ background: "rgba(0,0,0,0.05)", color: "rgba(0,0,0,0.85)" }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(0,0,0,0.09)"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(0,0,0,0.05)"; }}
      >
        {plan.cta}
      </button>
    </div>
  );
}

export default function Pricing() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".price-header", {
        y: 32, opacity: 0, duration: 0.65, ease: "power2.out",
        scrollTrigger: { trigger: ".price-header", start: "top 85%" },
      });
      gsap.from(".pricing-card", {
        y: 48, opacity: 0, duration: 0.65, stagger: 0.12, ease: "power2.out",
        scrollTrigger: { trigger: ".pricing-grid", start: "top 82%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="kainos"
      ref={ref}
      className="py-[88px] px-6 md:px-8 bg-white"
      aria-labelledby="kainos-heading"
    >
      <div className="max-w-[1100px] mx-auto">
        <div className="price-header text-center max-w-[640px] mx-auto mb-14">
          <div
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-semibold tracking-[0.125px] mb-4"
            style={{ background: "var(--jco-badge-bg)", color: "var(--jco-badge-text)" }}
          >
            Kainos
          </div>
          <h2
            id="kainos-heading"
            className="text-[clamp(32px,4vw,48px)] font-bold leading-[1.0] mb-4"
            style={{
              letterSpacing: "clamp(-0.8px,-0.031em,-1.5px)",
              color: "var(--jco-black)",
              fontFeatureSettings: '"lnum","locl"',
            }}
          >
            Trys planai. Viena{" "}
            <span style={{ color: "var(--jco-blue)" }}>aiški</span> kaina.
          </h2>
          <p className="text-[17px] leading-[1.55]" style={{ color: "var(--jco-gray-500)" }}>
            Kiekviena svetainė — su hostingu ir priežiūra. Be paslėptų
            mokesčių, be &bdquo;papildomų darbų&ldquo;, be nereikalingų
            staigmenų sąskaitoje.
          </p>
        </div>

        <div className="pricing-grid grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[900px] mx-auto">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
