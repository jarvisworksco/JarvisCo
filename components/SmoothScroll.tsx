"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1.5,
    });

    lenis.on("scroll", () => ScrollTrigger.update());

    const raf = (time: number) => {
      lenis.raf(time);
      ScrollTrigger.update();
    };
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // Scroll progress bar
    const progressEl = document.getElementById("scroll-progress");
    const updateProgress = () => {
      if (!progressEl) return;
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      progressEl.style.transform = `scaleX(${scrolled / total})`;
    };
    window.addEventListener("scroll", updateProgress, { passive: true });

    // Cursor
    const dot = document.getElementById("cursor-dot");
    const ring = document.getElementById("cursor-ring");
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dot) {
        dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
      if (e.clientX >= window.innerWidth - 16) {
        if (dot) dot.style.opacity = "0";
        if (ring) ring.style.opacity = "0";
      } else {
        if (dot) dot.style.opacity = "1";
        if (ring) ring.style.opacity = "1";
      }
    };

    let rafId: number;
    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (ring) ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      rafId = requestAnimationFrame(animateRing);
    };
    animateRing();

    const onEnter = () => ring?.classList.add("expanded");
    const onLeave = () => ring?.classList.remove("expanded");

    window.addEventListener("mousemove", onMove);
    document.querySelectorAll("a, button, [data-magnetic]").forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    // Reveal on scroll (IntersectionObserver)
    const revealEls = document.querySelectorAll(".reveal, .reveal-left");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.delay ?? "0";
            setTimeout(() => el.classList.add("visible"), parseFloat(delay) * 1000);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -5% 0px" }
    );
    revealEls.forEach((el) => observer.observe(el));

    return () => {
      lenis.destroy();
      gsap.ticker.remove(raf);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  return <>{children}</>;
}
