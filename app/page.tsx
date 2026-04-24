import Nav from "@/components/nav";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Pricing from "@/components/sections/Pricing";
import CaseStudy from "@/components/sections/CaseStudy";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Process />
        <Pricing />
        <CaseStudy />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
