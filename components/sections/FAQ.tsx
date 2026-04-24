"use client";

import { useEffect, useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    q: "Kiek laiko trunka svetainės kūrimas?",
    a: "Priklauso nuo paketo. Starter planas — 5 darbo dienos, Standard — 7–10 darbo dienų, Premium — individualiai, priklausomai nuo funkcionalumo. Terminus aptariame dar prieš pradedant.",
  },
  {
    q: "Ar reikės man pačiam ieškoti domeno ir hostingo?",
    a: "Ne. Mėnesinis mokestis apima hostingą, SSL sertifikatą, atsargines kopijas ir techninę priežiūrą. Jūs nieko papildomai neprenumeruojate — viskas dengta.",
  },
  {
    q: "Ar galėsiu pats redaguoti tekstus ir nuotraukas?",
    a: "Standard ir Premium planuose — taip. Gaunate paprastą redaktorių, kuriame be kodavimo galite atnaujinti tekstus, kainas, nuotraukas. Standartinius pakeitimus Starter plane atlieku aš per 1–2 d.d.",
  },
  {
    q: "Kas, jei svetainė sulūžta arba nustoja veikti?",
    a: "Mėnesinis priežiūros mokestis reiškia, kad stebime svetainę 24/7. Techninę problemą sutvarkau per kelias valandas. Jei kažkas sugenda — ne jūsų galvos skausmas.",
  },
  {
    q: "Ar dirbate tik su namų paslaugų verslais?",
    a: "Specializuojuosi būtent šiame segmente — santechnikai, elektrikai, valymo paslaugos, meistrai. Toks fokusas reiškia, kad žinau, kas veikia klientų srautui. Bet jei turite kitokios srities verslą — parašykite, aptarsime.",
  },
  {
    q: "Kaip apmokamos paslaugos?",
    a: "50% avansas pradžioje, likusi dalis — po paleidimo. Mėnesinis hostingas ir priežiūra atsiskaitoma kas mėnesį pagal sąskaitą. Galima ir metinis apmokėjimas su nuolaida.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;
    if (open) {
      el.style.maxHeight = el.scrollHeight + "px";
      el.style.opacity = "1";
    } else {
      el.style.maxHeight = "0px";
      el.style.opacity = "0";
    }
  }, [open]);

  return (
    <div
      className="border-b"
      style={{ borderColor: "rgba(0,0,0,0.08)" }}
    >
      <button
        className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span
          className="text-[16px] font-semibold"
          style={{ color: "var(--jco-black)" }}
        >
          {q}
        </span>
        <span
          className="shrink-0 w-5 h-5 flex items-center justify-center rounded-full transition-colors duration-150"
          style={{
            background: open ? "var(--jco-blue)" : "rgba(0,0,0,0.06)",
            color: open ? "#fff" : "var(--jco-black)",
          }}
        >
          {open ? <Minus size={12} strokeWidth={2.5} /> : <Plus size={12} strokeWidth={2.5} />}
        </span>
      </button>
      <div
        ref={bodyRef}
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: "0px", opacity: 0 }}
      >
        <p
          className="text-[15px] leading-[1.6] pb-5"
          style={{ color: "var(--jco-gray-500)" }}
        >
          {a}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".faq-header", {
        y: 32,
        opacity: 0,
        duration: 0.65,
        ease: "power2.out",
        scrollTrigger: { trigger: ".faq-header", start: "top 85%" },
      });
      gsap.from(".faq-list", {
        y: 24,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: { trigger: ".faq-list", start: "top 85%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="duk"
      ref={ref}
      className="py-[88px] px-6 md:px-8"
      style={{ background: "var(--jco-warm-white)" }}
      aria-labelledby="duk-heading"
    >
      <div className="max-w-[1100px] mx-auto">
        <div className="faq-header text-center max-w-[640px] mx-auto mb-12">
          <div
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-semibold tracking-[0.125px] mb-4"
            style={{
              background: "var(--jco-badge-bg)",
              color: "var(--jco-badge-text)",
            }}
          >
            D.U.K.
          </div>
          <h2
            id="duk-heading"
            className="text-[clamp(32px,4vw,48px)] font-bold leading-[1.0] mb-4"
            style={{
              letterSpacing: "clamp(-0.8px,-0.031em,-1.5px)",
              color: "var(--jco-black)",
              fontFeatureSettings: '"lnum","locl"',
            }}
          >
            Atsakymai,{" "}
            <span style={{ color: "var(--jco-blue)" }}>prieš</span> klausiant.
          </h2>
        </div>

        <div className="faq-list max-w-[720px] mx-auto">
          {items.map((item) => (
            <FAQItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
