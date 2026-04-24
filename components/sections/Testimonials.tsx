const avatarColors: Record<string, string> = {
  "dark blue": "#1e3a5f",
  teal:        "#0d7377",
  slate:       "#475569",
  amber:       "#92400e",
  rose:        "#9f1239",
  indigo:      "#3730a3",
};

const testimonials = [
  {
    quote:
      "Per pirmą mėnesį po paleidimo gavau 3 naujus klientus iš Google. Tikrai nemaniau, kad tai taip greitai atsipirks.",
    name: "Mindaugas K.",
    trade: "Santechnikas, Vilnius",
    initials: "MK",
    color: "dark blue",
  },
  {
    quote:
      "Viskas paaiškinta paprastai, be jokių painių žodžių. Gavau būtent tai, ko prašiau.",
    name: "Diana P.",
    trade: "Valymo paslaugos, Kaunas",
    initials: "DP",
    color: "teal",
  },
  {
    quote:
      "Klientai pradėjo sakyti, kad atrodau rimtai. O man tik reikėjo normalios svetainės.",
    name: "Rokas J.",
    trade: "Elektrikas, Klaipėda",
    initials: "RJ",
    color: "slate",
  },
  {
    quote:
      "Anksčiau visi ateidavo per pažįstamus. Dabar skambina ir žmonės, kurių visai nepažįstu — rado per Google.",
    name: "Aurimas V.",
    trade: "Stogdengys, Šiauliai",
    initials: "AV",
    color: "amber",
  },
  {
    quote:
      "Svetainė veikia kaip turi — greitai kraunasi, gerai atrodo telefone, ir žmonės tikrai rašo.",
    name: "Kristina M.",
    trade: "Namų valymas, Vilnius",
    initials: "KM",
    color: "rose",
  },
  {
    quote:
      "Turėjau seną Wix svetainę, bet ji nieko neduodavo. Dabar yra skirtumas.",
    name: "Darius Š.",
    trade: "Remonto darbai, Panevėžys",
    initials: "DŠ",
    color: "indigo",
  },
];

export default function Testimonials() {
  return (
    <section
      className="py-[88px] px-6 md:px-8"
      style={{ background: "var(--jco-warm-white)" }}
      aria-labelledby="atsiliepimai-heading"
    >
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-[600px] mx-auto mb-14">
          <div
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-semibold tracking-[0.125px] mb-4"
            style={{ background: "var(--jco-badge-bg)", color: "var(--jco-badge-text)" }}
          >
            Atsiliepimai
          </div>
          <h2
            id="atsiliepimai-heading"
            className="text-[clamp(32px,4vw,48px)] font-bold leading-[1.0]"
            style={{
              letterSpacing: "clamp(-0.8px,-0.031em,-1.5px)",
              color: "var(--jco-black)",
              fontFeatureSettings: '"lnum","locl"',
            }}
          >
            Ką sako mūsų{" "}
            <span style={{ color: "var(--jco-blue)" }}>klientai</span>.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[900px] mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="testimonial-card bg-white rounded-[16px] p-7 flex flex-col gap-5"
              style={{
                border: "1px solid rgba(0,0,0,0.08)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              {/* Quote */}
              <p
                className="text-[15px] italic leading-[1.65] flex-1"
                style={{ color: "var(--jco-gray-500)" }}
              >
                „{t.quote}"
              </p>

              {/* Attribution */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-[13px] font-bold text-white"
                  style={{ background: avatarColors[t.color] }}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <p
                    className="text-[14px] font-bold leading-tight"
                    style={{ color: "var(--jco-black)" }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-[12px] mt-0.5"
                    style={{ color: "var(--jco-gray-300)" }}
                  >
                    {t.trade}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
