import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--ff-inter",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin", "latin-ext"],
  variable: "--ff-lora",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "JarvisCo — Svetainės ir SEO namų paslaugų verslui Lietuvoje",
  description:
    "Kuriame profesionalias svetaines ir vykdome SEO optimizaciją santechnikams, elektrikams, meistrams ir kitiems namų paslaugų verslams visoje Lietuvoje. Daugiau skambučių, daugiau klientų.",
  keywords:
    "svetainių kūrimas, SEO optimizacija, namų paslaugų verslas, Kaunas, Lietuva, santechnikas svetainė, elektriko svetainė",
  authors: [{ name: "JarvisCo" }],
  metadataBase: new URL("https://jarvisweb.lt"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "lt_LT",
    url: "https://jarvisweb.lt",
    siteName: "JarvisCo",
    title: "JarvisCo — Svetainės ir SEO namų paslaugų verslui",
    description:
      "Profesionalios svetainės ir SEO optimizacija Lietuvos namų paslaugų verslams. Daugiau skambučių iš Google.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "JarvisCo — Svetainės ir SEO namų paslaugų verslui",
    description:
      "Profesionalios svetainės ir SEO Lietuvos namų paslaugų verslams.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "JarvisCo",
  description:
    "Svetainių kūrimas ir SEO optimizacija namų paslaugų verslams Lietuvoje.",
  url: "https://jarvisweb.lt",
  telephone: "+37067699395",
  email: "jarvisworks.co@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kaunas",
    addressCountry: "LT",
  },
  areaServed: { "@type": "Country", name: "Lithuania" },
  serviceType: [
    "Svetainių kūrimas",
    "SEO optimizacija",
    "Google verslo profilio optimizavimas",
  ],
  sameAs: [
    "https://www.facebook.com/profile.php?id=61562921045681",
    "https://www.instagram.com/jarvisworks_co/",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="lt" className={`${inter.variable} ${lora.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body style={{ fontFamily: "var(--ff-inter, sans-serif)" }}>
        {children}
      </body>
    </html>
  );
}
