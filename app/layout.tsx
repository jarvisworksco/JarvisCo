import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ContactModalProvider } from "@/context/contact-modal";
import ContactModal from "@/components/ContactModal";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JarvisCo — Svetainės namų paslaugų verslui Lietuvoje",
  description:
    "Projektuojame ir kuriame aukštos kokybės svetaines Lietuvos namų paslaugų verslui. Daugiau skambučių, daugiau užklausų, aiškesnis prekės ženklas. Nuo 350€.",
  metadataBase: new URL("https://jarvisco.lt"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "JarvisCo — Svetainės namų paslaugų verslui Lietuvoje",
    description:
      "Projektuojame ir kuriame aukštos kokybės svetaines Lietuvos namų paslaugų verslui. Nuo 350€.",
    locale: "lt_LT",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "JarvisCo",
  description:
    "Web development specializing in websites for home service businesses in Lithuania.",
  email: "jarvisworks.co@gmail.com",
  telephone: "+37067699395",
  areaServed: "LT",
  url: "https://jarvisco.lt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="lt" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ContactModalProvider>
          {children}
          <ContactModal />
        </ContactModalProvider>
        <Analytics />
      </body>
    </html>
  );
}
