import { LogoMark } from "@/components/LogoMark";

const navLinks = [
  { label: "Paslaugos", href: "#paslaugos" },
  { label: "Procesas", href: "#procesas" },
  { label: "Kainos", href: "#kainos" },
  { label: "D.U.K.", href: "#duk" },
];

export default function Footer() {
  return (
    <footer
      className="pt-14 pb-9 px-6 md:px-8"
      style={{
        background: "var(--jco-warm-dark)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-[1100px] mx-auto">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
          {/* Brand */}
          <div className="flex-shrink-0 max-w-[220px]">
            <div className="flex items-center gap-2 mb-3">
              <LogoMark size={32} />
              <span className="text-[15px] font-bold text-white">
                JarvisCo
              </span>
            </div>
            <p
              className="text-[13px] leading-[1.6]"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              Svetainės Lietuvos namų paslaugų verslui. Aiški kaina, švarus
              darbas, ilgalaikė priežiūra.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-14 flex-wrap">
            <div>
              <h4
                className="text-[12px] font-semibold tracking-[0.05em] mb-3.5"
                style={{ color: "rgba(255,255,255,0.85)" }}
              >
                MENIU
              </h4>
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="footer-link block text-[14px] mb-2.5"
                >
                  {l.label}
                </a>
              ))}
            </div>
            <div>
              <h4
                className="text-[12px] font-semibold tracking-[0.05em] mb-3.5"
                style={{ color: "rgba(255,255,255,0.85)" }}
              >
                KONTAKTAI
              </h4>
              <a
                href="mailto:jarvisworks.co@gmail.com"
                className="footer-link block text-[14px] mb-2.5"
              >
                jarvisworks.co@gmail.com
              </a>
              <a
                href="tel:+37067699395"
                className="footer-link block text-[14px] mb-2.5"
              >
                +370 676 99395
              </a>
              <span
                className="block text-[14px]"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                Lietuva
              </span>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div
          className="flex flex-col sm:flex-row justify-between items-center gap-2 pt-5"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <span
            className="text-[13px]"
            style={{ color: "rgba(255,255,255,0.25)" }}
          >
            © 2026 JarvisCo · Visos teisės saugomos
          </span>
          <span
            className="text-[13px]"
            style={{ color: "rgba(255,255,255,0.25)" }}
          >
            Sukurta su ♥ Lietuvoje
          </span>
        </div>
      </div>
    </footer>
  );
}
