"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // ── Scroll progress bar ───────────────────────────────────────────────
    const progressEl = document.getElementById("scroll-progress");
    const updateProgress = () => {
      if (!progressEl) return;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      progressEl.style.transform = `scaleX(${window.scrollY / total})`;
    };
    window.addEventListener("scroll", updateProgress, { passive: true });

    // ── Hash-link: smooth scroll, no URL change ───────────────────────────
    const handleHashClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || !href.startsWith("#")) return;
      e.preventDefault();
      if (href === "#") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const target = document.querySelector(href);
      if (target) {
        const y = (target as HTMLElement).getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    };
    document.addEventListener("click", handleHashClick);

    // ── Custom cursor ─────────────────────────────────────────────────────
    const dot  = document.getElementById("cursor-dot");
    const ring = document.getElementById("cursor-ring");
    let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0, rafId = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dot) dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      const nearScrollbar = e.clientX > document.documentElement.clientWidth;
      if (dot)  dot.style.opacity = nearScrollbar ? "0" : "1";
      if (ring) ring.style.opacity = nearScrollbar ? "0" : "1";
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (ring) ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      rafId = requestAnimationFrame(animateRing);
    };
    rafId = requestAnimationFrame(animateRing);

    const expandRing   = () => ring?.classList.add("expanded");
    const collapseRing = () => ring?.classList.remove("expanded");
    window.addEventListener("mousemove", onMove, { passive: true });
    document.querySelectorAll("a, button, [data-magnetic]").forEach((el) => {
      el.addEventListener("mouseenter", expandRing);
      el.addEventListener("mouseleave", collapseRing);
    });

    // ── Scroll reveal (IntersectionObserver) ──────────────────────────────
    const revealEls = document.querySelectorAll<HTMLElement>(".reveal, .reveal-left");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const delay = parseFloat(el.dataset.delay ?? "0") * 1000;
          setTimeout(() => el.classList.add("visible"), delay);
          observer.unobserve(el);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -4% 0px" }
    );
    revealEls.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", updateProgress);
      document.removeEventListener("click", handleHashClick);
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  return <>{children}</>;
}
