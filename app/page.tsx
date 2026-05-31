import Nav from "@/components/nav";
import SmoothScroll from "@/components/SmoothScroll";
import MobileCallBar from "@/components/MobileCallBar";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Portfolio from "@/components/sections/CaseStudy";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import About from "@/components/sections/About";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <div id="scroll-progress" aria-hidden="true" />
      <div id="cursor-dot" aria-hidden="true" />
      <div id="cursor-ring" aria-hidden="true" />

      <Nav />
      <main id="main">
        <Hero />
        <Marquee />
        <Services />
        <Process />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <About />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <MobileCallBar />
    </SmoothScroll>
  );
}
