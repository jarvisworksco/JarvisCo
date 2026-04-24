"use client";

import { useEffect, useRef, useActionState } from "react";
import { X, CheckCircle, Loader2 } from "lucide-react";
import { useContactModal } from "@/context/contact-modal";
import { sendInquiry, type InquiryState } from "@/app/actions";

const plans = [
  { value: "", label: "Pasirinkite planą (neprivaloma)" },
  { value: "Starter — 350€", label: "Starter — 350€" },
  { value: "Standard — 600€", label: "Standard — 600€" },
  { value: "Premium — 1200€", label: "Premium — 1200€" },
];

const initial: InquiryState = { status: "idle" };

export default function ContactModal() {
  const { isOpen, selectedPlan, close } = useContactModal();
  const [state, action, pending] = useActionState(sendInquiry, initial);
  const overlayRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  // Focus first input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => firstInputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close]);

  const defaultPlan =
    selectedPlan && selectedPlan !== ""
      ? plans.find((p) => p.value.startsWith(selectedPlan))?.value ?? ""
      : "";

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-6 transition-all duration-200"
      style={{
        background: "rgba(0,0,0,0.5)",
        backdropFilter: "blur(4px)",
        pointerEvents: isOpen ? "auto" : "none",
        opacity: isOpen ? 1 : 0,
      }}
      onClick={(e) => { if (e.target === overlayRef.current) close(); }}
      aria-modal="true"
      aria-label="Užklausos forma"
      role="dialog"
    >
      <div
        className="relative w-full sm:max-w-[480px] rounded-t-[20px] sm:rounded-[16px] bg-white overflow-hidden transition-all duration-300"
        style={{
          boxShadow: "var(--shadow-deep)",
          transform: isOpen ? "translateY(0)" : "translateY(32px)",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-6 pt-6 pb-4"
          style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}
        >
          <div>
            <h2
              className="text-[18px] font-bold"
              style={{ color: "var(--jco-black)", letterSpacing: "-0.3px" }}
            >
              Pradėkime projektą
            </h2>
            <p className="text-[13px] mt-0.5" style={{ color: "var(--jco-gray-300)" }}>
              Atsakysime per 24 val.
            </p>
          </div>
          <button
            onClick={close}
            className="w-8 h-8 flex items-center justify-center rounded-full transition-colors"
            style={{ background: "rgba(0,0,0,0.06)" }}
            aria-label="Uždaryti"
          >
            <X size={16} style={{ color: "var(--jco-black)" }} />
          </button>
        </div>

        {/* Success state */}
        {state.status === "success" ? (
          <div className="flex flex-col items-center justify-center py-12 px-6 text-center gap-3">
            <CheckCircle size={40} style={{ color: "var(--jco-green)" }} strokeWidth={1.5} />
            <h3 className="text-[17px] font-bold" style={{ color: "var(--jco-black)" }}>
              Žinutė išsiųsta!
            </h3>
            <p className="text-[14px]" style={{ color: "var(--jco-gray-500)" }}>
              Susisieksime su jumis per 24 valandas.
            </p>
            <button
              onClick={close}
              className="mt-4 text-[14px] font-semibold text-white px-5 py-2.5 rounded-[4px]"
              style={{ background: "var(--jco-blue)" }}
            >
              Uždaryti
            </button>
          </div>
        ) : (
          /* Form */
          <form action={action} className="px-6 py-5 flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="cf-name"
                  className="block text-[13px] font-semibold mb-1.5"
                  style={{ color: "var(--jco-black)" }}
                >
                  Vardas <span style={{ color: "var(--jco-blue)" }}>*</span>
                </label>
                <input
                  ref={firstInputRef}
                  id="cf-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Jūsų vardas"
                  className="w-full rounded-[4px] px-3 py-2.5 text-[14px] outline-none transition-all"
                  style={{
                    border: "1px solid rgba(0,0,0,0.12)",
                    color: "var(--jco-black)",
                  }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = "var(--jco-blue)"; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.12)"; }}
                />
              </div>
              <div>
                <label
                  htmlFor="cf-email"
                  className="block text-[13px] font-semibold mb-1.5"
                  style={{ color: "var(--jco-black)" }}
                >
                  El. paštas <span style={{ color: "var(--jco-blue)" }}>*</span>
                </label>
                <input
                  id="cf-email"
                  name="email"
                  type="email"
                  required
                  placeholder="jusu@el.pastas.lt"
                  className="w-full rounded-[4px] px-3 py-2.5 text-[14px] outline-none transition-all"
                  style={{
                    border: "1px solid rgba(0,0,0,0.12)",
                    color: "var(--jco-black)",
                  }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = "var(--jco-blue)"; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.12)"; }}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="cf-phone"
                  className="block text-[13px] font-semibold mb-1.5"
                  style={{ color: "var(--jco-black)" }}
                >
                  Telefonas
                </label>
                <input
                  id="cf-phone"
                  name="phone"
                  type="tel"
                  placeholder="+370 000 00000"
                  className="w-full rounded-[4px] px-3 py-2.5 text-[14px] outline-none transition-all"
                  style={{
                    border: "1px solid rgba(0,0,0,0.12)",
                    color: "var(--jco-black)",
                  }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = "var(--jco-blue)"; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.12)"; }}
                />
              </div>
              <div>
                <label
                  htmlFor="cf-plan"
                  className="block text-[13px] font-semibold mb-1.5"
                  style={{ color: "var(--jco-black)" }}
                >
                  Planas
                </label>
                <select
                  id="cf-plan"
                  name="plan"
                  defaultValue={defaultPlan}
                  className="w-full rounded-[4px] px-3 py-2.5 text-[14px] outline-none transition-all bg-white"
                  style={{
                    border: "1px solid rgba(0,0,0,0.12)",
                    color: "var(--jco-black)",
                  }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = "var(--jco-blue)"; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.12)"; }}
                >
                  {plans.map((p) => (
                    <option key={p.value} value={p.value}>
                      {p.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="cf-message"
                className="block text-[13px] font-semibold mb-1.5"
                style={{ color: "var(--jco-black)" }}
              >
                Žinutė
              </label>
              <textarea
                id="cf-message"
                name="message"
                rows={3}
                placeholder="Trumpai apie savo verslą ir ko norėtumėte..."
                className="w-full rounded-[4px] px-3 py-2.5 text-[14px] outline-none transition-all resize-none"
                style={{
                  border: "1px solid rgba(0,0,0,0.12)",
                  color: "var(--jco-black)",
                }}
                onFocus={(e) => { e.currentTarget.style.borderColor = "var(--jco-blue)"; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.12)"; }}
              />
            </div>

            {state.status === "error" && (
              <p className="text-[13px]" style={{ color: "#dc2626" }}>
                {state.message}
              </p>
            )}

            <button
              type="submit"
              disabled={pending}
              className="flex items-center justify-center gap-2 w-full text-[15px] font-semibold text-white py-3 rounded-[4px] transition-all active:scale-[0.98] disabled:opacity-70"
              style={{ background: "var(--jco-blue)" }}
              onMouseEnter={(e) => {
                if (!pending) (e.currentTarget as HTMLElement).style.background = "var(--jco-blue-hover)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--jco-blue)";
              }}
            >
              {pending && <Loader2 size={16} className="animate-spin" />}
              {pending ? "Siunčiama..." : "Siųsti užklausą"}
            </button>

            <p
              className="text-center text-[12px]"
              style={{ color: "var(--jco-gray-300)" }}
            >
              Arba skambinkite:{" "}
              <a
                href="tel:+37067699395"
                className="font-semibold whitespace-nowrap"
                style={{ color: "var(--jco-gray-500)" }}
              >
                +370 676 99395
              </a>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
